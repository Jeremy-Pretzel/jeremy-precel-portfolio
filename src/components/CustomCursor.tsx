import { useEffect, useState } from 'react';

type Point = {
  x: number;
  y: number;
};

export function CustomCursor() {
  const [position, setPosition] = useState<Point>({ x: -100, y: -100 });
  const [trail, setTrail] = useState<Point[]>([]);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = {
        x: e.clientX,
        y: e.clientY,
      };

      setPosition(newPosition);

      setTrail((previous) => {
        const updated = [newPosition, ...previous];
        return updated.slice(0, 8);
      });

      const target = e.target as HTMLElement;
      setIsZooming(Boolean(target.closest('[data-zoomable="true"]')));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Fading trail */}
      {trail.map((point, index) => {
        const opacity = 0.35 * (1 - index / trail.length);
        const size = 10 - index * 0.7;

        return (
          <div
            key={index}
            className="cursor-trail"
            style={{
              left: point.x,
              top: point.y,
              zIndex: 10000,
              width: `${Math.max(size, 3)}px`,
              height: `${Math.max(size, 3)}px`,
              opacity,
            }}
          />
        );
      })}

      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
          zIndex: 10001,
          width: isZooming ? '34px' : undefined,
          height: isZooming ? '34px' : undefined,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '26px',
          color: 'white',
          fontWeight: '300',
        }}
      >
        {isZooming ? '+' : ''}
      </div>
    </>
  );
}