import { useEffect, useRef, useState } from 'react';

type LoadingScreenProps = { onComplete: () => void };

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4';

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(6);
  const [isLeaving, setIsLeaving] = useState(false);
  const finishRef = useRef(false);
  const leaveTimerRef = useRef<number>();
  const completeTimerRef = useRef<number>();

  useEffect(() => {
    const finish = () => {
      if (finishRef.current) return;
      finishRef.current = true;
      setProgress(100);
      leaveTimerRef.current = window.setTimeout(() => {
        setIsLeaving(true);
        completeTimerRef.current = window.setTimeout(onComplete, 620);
      }, 260);
    };

    const progressTimer = window.setInterval(() => {
      setProgress((current) => finishRef.current ? current : Math.min(current + Math.max(1, (92 - current) * 0.11), 92));
    }, 150);
    const fallbackTimer = window.setTimeout(finish, 4200);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(fallbackTimer);
      if (leaveTimerRef.current) window.clearTimeout(leaveTimerRef.current);
      if (completeTimerRef.current) window.clearTimeout(completeTimerRef.current);
    };
  }, [onComplete]);

  const finish = () => {
    if (finishRef.current) return;
    finishRef.current = true;
    setProgress(100);
    leaveTimerRef.current = window.setTimeout(() => {
      setIsLeaving(true);
      completeTimerRef.current = window.setTimeout(onComplete, 620);
    }, 260);
  };

  return (
    <section className={`loading-screen ${isLeaving ? 'loading-screen--leaving' : ''}`} aria-label="Chargement de Kusooo" aria-live="polite">
      <video className="loading-screen__video" autoPlay loop muted playsInline preload="auto" onLoadedData={finish} aria-hidden="true">
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="loading-screen__veil" />
      <div className="loading-screen__panel liquid-glass">
        <p className="loading-screen__label">Préparation de votre expérience</p>
        <h1>KUSOOO</h1>
        <div className="loading-screen__progress-shell liquid-glass" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
          <div className="loading-screen__progress-fill" style={{ transform: `scaleX(${progress / 100})` }} />
          <span className="loading-screen__progress-value">{Math.round(progress)}%</span>
        </div>
      </div>

      <button type="button" onClick={finish} className="loading-screen__skip liquid-glass">Passer l’introduction</button>
    </section>
  );
}