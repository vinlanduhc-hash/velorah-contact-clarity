import { useEffect, useRef } from 'react';

const CLICKABLE_SELECTOR =
  'button:not([disabled]), a[href], [role="button"], input[type="button"], input[type="submit"], input[type="reset"]';

export function useClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/sounds/button-click.mp3');
    audio.preload = 'auto';
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const playClickSound = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactiveElement = target.closest(CLICKABLE_SELECTOR);

      if (!interactiveElement) {
        return;
      }

      const audio = audioRef.current;

      if (!audio) {
        return;
      }

      audio.currentTime = 0;
      void audio.play().catch(() => {});
    };

    document.addEventListener('click', playClickSound, true);

    return () => {
      document.removeEventListener('click', playClickSound, true);
    };
  }, []);
}
