import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  speed?: number;
  startDelay?: number;
}

interface UseTypewriterReturn {
  displayed: string;
  done: boolean;
}

export function useTypewriter(
  text: string,
  options?: UseTypewriterOptions
): UseTypewriterReturn {
  const speed = options?.speed ?? 38;
  const startDelay = options?.startDelay ?? 600;

  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayed('');
    setDone(false);

    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        if (index <= text.length) {
          setDisplayed(text.slice(0, index));
        }
        if (index >= text.length) {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(delayTimeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}
