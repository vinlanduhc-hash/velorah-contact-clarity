export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-6 pb-32 pt-32 text-center">
      <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 z-0 h-full w-[130%] -translate-x-[25%] object-cover sm:w-full sm:translate-x-0 sm:object-center" aria-hidden="true">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4" type="video/mp4" />
        </video>
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] text-foreground sm:text-7xl md:text-8xl" style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-2.46px' }}>
          Des expériences web<br />qui laissent une <em className="not-italic text-muted-foreground">trace.</em>
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Kusooo imagine des expériences digitales qui transforment votre présence en ligne.</p>
        <a href="#studio" className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]">Voir les projets</a>
      </div>
    </section>
  );
}