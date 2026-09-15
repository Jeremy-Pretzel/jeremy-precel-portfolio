import { useRef, useEffect, useState, type ChangeEvent } from 'react';
import { Upload, RotateCcw, Video } from 'lucide-react';

// Locally served high-performance intra-frame video (all 97 keyframes for instant seeking)
const DEFAULT_VIDEO_SRC = '/Optimised_jeremy_hero_all_keyframes_1080p_Optimised.mp4';

// IndexedDB storage to persist user-uploaded video across page refreshes
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MainframeDB', 2);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains('videos')) {
        request.result.createObjectStore('videos');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveVideoBlob(blob: Blob, name: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction('videos', 'readwrite');
    tx.objectStore('videos').put({ blob, name }, 'custom_video');
  } catch (err) {
    console.error('Failed to save video to storage', err);
  }
}

async function getStoredVideo(): Promise<{ blob: Blob; name: string } | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction('videos', 'readonly');
      const req = tx.objectStore('videos').get('custom_video');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function clearStoredVideo(): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction('videos', 'readwrite');
    tx.objectStore('videos').delete('custom_video');
  } catch (err) {
    console.error('Failed to clear video storage', err);
  }
}

export function BackgroundVideo() {
  const [videoSrc, setVideoSrc] = useState<string>(DEFAULT_VIDEO_SRC);
  const [customVideoName, setCustomVideoName] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isSeekingRef = useRef<boolean>(false);
  const pendingTimeRef = useRef<number | null>(null);
  const lastTargetTimeRef = useRef<number>(0);

  // Check for locally saved video on startup
  useEffect(() => {
    getStoredVideo().then((stored) => {
      if (stored && stored.blob) {
        const objectUrl = URL.createObjectURL(stored.blob);
        setVideoSrc(objectUrl);
        setCustomVideoName(stored.name);
      } else {
        setVideoSrc(DEFAULT_VIDEO_SRC);
      }
    });
  }, []);

  // Primary seek function that queues seeks to avoid browser pipeline lock
  const performSeek = (targetTime: number) => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    const clampedTime = Math.max(0, Math.min(targetTime, video.duration));
    lastTargetTimeRef.current = clampedTime;

    if (isSeekingRef.current) {
      pendingTimeRef.current = clampedTime;
    } else {
      isSeekingRef.current = true;
      video.currentTime = clampedTime;
    }
  };

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video || !video.duration) {
      isSeekingRef.current = false;
      return;
    }

    if (pendingTimeRef.current !== null) {
      const nextTime = pendingTimeRef.current;
      pendingTimeRef.current = null;
      video.currentTime = nextTime;
    } else {
      isSeekingRef.current = false;
    }
  };

  // Watchdog timer: If browser delays or misses the seeked event, unblock seeking
  useEffect(() => {
    let animId: number;

    const watchdog = () => {
      const video = videoRef.current;
      if (video && isSeekingRef.current && !video.seeking) {
        handleSeeked();
      }
      animId = requestAnimationFrame(watchdog);
    };

    animId = requestAnimationFrame(watchdog);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Track cursor across the screen to turn character's head
  useEffect(() => {
    const updateTargetFromX = (clientX: number) => {
      const video = videoRef.current;
      if (!video || !video.duration || isNaN(video.duration)) return;

      // 0.0 at far left edge of window, 1.0 at far right edge of window
      const normalized = Math.max(0, Math.min(1, clientX / window.innerWidth));
      const targetTime = normalized * video.duration;

      // Only seek if moved enough to change frame
      if (Math.abs(targetTime - lastTargetTimeRef.current) > 0.02) {
        performSeek(targetTime);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateTargetFromX(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        updateTargetFromX(e.touches[0].clientX);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Window drag and drop listener
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      setIsDragOver(true);
    };

    const handleDragLeave = (e: DragEvent) => {
      if (e.clientX === 0 || e.clientY === 0) {
        setIsDragOver(false);
      }
    };

    const handleDrop = async (e: DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('video/') || file.name.endsWith('.mp4')) {
          await saveVideoBlob(file, file.name);
          const objectUrl = URL.createObjectURL(file);
          setVideoSrc(objectUrl);
          setCustomVideoName(file.name);
        }
      }
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setVideoLoaded(true);
      video.muted = true;
      video.pause();

      // Start at 50% (facing forward/center)
      const midTime = video.duration * 0.5;
      video.currentTime = midTime;
      lastTargetTimeRef.current = midTime;
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      await saveVideoBlob(file, file.name);
      const objectUrl = URL.createObjectURL(file);
      setVideoSrc(objectUrl);
      setCustomVideoName(file.name);
    }
  };

  const handleResetDefault = async () => {
    await clearStoredVideo();
    setVideoSrc(DEFAULT_VIDEO_SRC);
    setCustomVideoName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <video
        id="background-video"
        key={videoSrc}
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onSeeked={handleSeeked}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '70% center',
          pointerEvents: 'none',
          opacity: videoLoaded ? 1 : 0.8,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Hidden file input for uploading custom video */}
      <input
        ref={fileInputRef}
        id="custom-video-input"
        type="file"
        accept="video/mp4,video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Floating control in bottom right to easily change video or reset */}
      <aside
        id="video-controls-dock"
        aria-label="Video Controls"
        className="fixed bottom-5 right-5 z-20 flex items-center gap-2"
      >
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Click to select another custom video (.mp4)"
          className="flex items-center gap-2 bg-black/80 hover:bg-black text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-lg transition-all duration-200 cursor-pointer select-none"
        >
          {customVideoName ? <Video className="w-3.5 h-3.5 text-emerald-400" /> : <Upload className="w-3.5 h-3.5 text-white" />}
          <span>{customVideoName ? `Video: ${customVideoName.length > 18 ? customVideoName.slice(0, 15) + '...' : customVideoName}` : 'Replace Video (.mp4)'}</span>
        </button>

        {customVideoName && (
          <button
            type="button"
            onClick={handleResetDefault}
            title="Reset to default video"
            className="flex items-center justify-center bg-black/80 hover:bg-black text-white p-2 rounded-full border border-white/20 backdrop-blur-md shadow-lg transition-all duration-200 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </aside>

      {/* Drag & drop visual overlay */}
      {isDragOver && (
        <div
          id="drag-drop-overlay"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center text-white pointer-events-none border-4 border-dashed border-white/40 m-4 rounded-2xl"
        >
          <Upload className="w-12 h-12 mb-3 animate-bounce" />
          <p className="text-xl sm:text-2xl font-medium tracking-tight">
            Drop your video (.mp4) here
          </p>
          <p className="text-sm text-neutral-400 mt-1">
            It will immediately scrub with your mouse movements
          </p>
        </div>
      )}
    </>
  );
}
