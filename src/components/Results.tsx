"use client";

import { useEffect, useRef } from "react";

interface ResultsProps {
  monthlySavingsHours: number;
  yearlySavingsHours: number;
  monthlySavingsEuro: number;
  yearlySavingsEuro: number;
}

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    const duration = 800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      el.textContent = start.toLocaleString("de-DE");
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span ref={ref}>0</span>;
}

export default function Results({
  monthlySavingsHours,
  yearlySavingsHours,
  monthlySavingsEuro,
  yearlySavingsEuro,
}: ResultsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div ref={sectionRef} className="mt-10 animate-fade-in">
      {/* Main result card */}
      <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 md:p-10 text-white text-center mb-6">
        <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-2">
          Ihr jährliches Einsparpotenzial
        </p>
        <div className="text-5xl md:text-6xl font-headline font-extrabold tracking-tight mb-2">
          <AnimatedNumber value={yearlySavingsEuro} />{" "}
          <span className="text-3xl">€</span>
        </div>
        <p className="text-white/60 text-sm">
          Das entspricht{" "}
          <span className="text-white font-bold">
            {yearlySavingsHours.toLocaleString("de-DE")} Stunden
          </span>{" "}
          eingesparter Arbeitszeit pro Jahr.
        </p>
      </div>

      {/* Detail cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <StatCard
          label="Monatliche Zeitersparnis"
          value={`${monthlySavingsHours.toLocaleString("de-DE")} Std.`}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          label="Monatliche Kostenersparnis"
          value={`${monthlySavingsEuro.toLocaleString("de-DE")} €`}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          }
        />
      </div>

      {/* CTA */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h3 className="font-headline text-xl font-bold mb-2">
          Bereit, diese Einsparungen zu realisieren?
        </h3>
        <p className="text-slate-500 mb-6">
          In einem kostenlosen Erstgespräch zeige ich Ihnen, welche Prozesse in
          Ihrem Unternehmen das größte Automatisierungspotenzial haben.
        </p>
        <a
          href="https://el-bueroservice.com/#contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors"
        >
          Kostenloses Erstgespräch vereinbaren
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center text-success flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-xl font-headline font-bold">{value}</p>
      </div>
    </div>
  );
}
