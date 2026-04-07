export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-light pt-32 pb-20 text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide mb-6">
          Kostenloses Analyse-Tool
        </span>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Was kostet Sie manuelle Arbeit{" "}
          <span className="text-sky-300">wirklich?</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Berechnen Sie in 30 Sekunden, wie viel Zeit und Geld Ihr Unternehmen
          durch intelligente Automatisierung einsparen kann.
        </p>
        <a
          href="#rechner"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-95 transition-transform shadow-lg"
        >
          Jetzt berechnen
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
