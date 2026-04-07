const steps = [
  {
    number: "01",
    title: "Analyse",
    description:
      "Wir analysieren Ihre bestehenden Geschäftsprozesse und identifizieren Automatisierungspotenziale.",
  },
  {
    number: "02",
    title: "Konzept",
    description:
      "Gemeinsam entwickeln wir eine maßgeschneiderte Automatisierungsstrategie für Ihr Unternehmen.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description:
      "Wir implementieren die Lösung und schulen Ihr Team für einen reibungslosen Übergang.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-accent uppercase">
            So funktioniert es
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mt-3">
            In drei Schritten zur Automatisierung
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent font-headline font-extrabold text-xl mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {step.number}
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://el-bueroservice.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-colors"
          >
            Unverbindliches Erstgespräch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
