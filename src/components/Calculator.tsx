"use client";

import { useState } from "react";
import Results from "./Results";

interface FormData {
  employees: number;
  hoursPerWeek: number;
  hourlyRate: number;
  automationRate: number;
}

const defaultData: FormData = {
  employees: 5,
  hoursPerWeek: 10,
  hourlyRate: 35,
  automationRate: 70,
};

export default function Calculator() {
  const [form, setForm] = useState<FormData>(defaultData);
  const [showResults, setShowResults] = useState(false);

  const update = (field: keyof FormData, value: number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setShowResults(false);
  };

  const weeklySavingsHours =
    form.employees * form.hoursPerWeek * (form.automationRate / 100);
  const monthlySavingsHours = weeklySavingsHours * 4.33;
  const yearlySavingsHours = weeklySavingsHours * 52;
  const monthlySavingsEuro = monthlySavingsHours * form.hourlyRate;
  const yearlySavingsEuro = yearlySavingsHours * form.hourlyRate;

  return (
    <section id="rechner" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-accent uppercase">
            ROI-Rechner
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mt-3">
            Berechnen Sie Ihr Einsparpotenzial
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Passen Sie die Werte an Ihr Unternehmen an und sehen Sie sofort, wie
            viel Sie durch Automatisierung sparen können.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-10">
            {/* Employees */}
            <SliderField
              label="Betroffene Mitarbeiter"
              value={form.employees}
              min={1}
              max={50}
              step={1}
              unit="Personen"
              onChange={(v) => update("employees", v)}
            />

            {/* Hours per week */}
            <SliderField
              label="Manuelle Stunden pro Woche (je Mitarbeiter)"
              value={form.hoursPerWeek}
              min={1}
              max={40}
              step={1}
              unit="Std./Woche"
              onChange={(v) => update("hoursPerWeek", v)}
            />

            {/* Hourly rate */}
            <SliderField
              label="Durchschnittlicher Stundensatz"
              value={form.hourlyRate}
              min={15}
              max={100}
              step={5}
              unit="€/Std."
              onChange={(v) => update("hourlyRate", v)}
            />

            {/* Automation rate */}
            <SliderField
              label="Erwarteter Automatisierungsgrad"
              value={form.automationRate}
              min={10}
              max={95}
              step={5}
              unit="%"
              onChange={(v) => update("automationRate", v)}
            />

            <button
              onClick={() => setShowResults(true)}
              className="w-full py-4 bg-accent text-white font-bold text-lg rounded-xl hover:bg-accent-dark transition-colors cursor-pointer"
            >
              Einsparpotenzial berechnen
            </button>
          </div>

          {showResults && (
            <Results
              monthlySavingsHours={Math.round(monthlySavingsHours)}
              yearlySavingsHours={Math.round(yearlySavingsHours)}
              monthlySavingsEuro={Math.round(monthlySavingsEuro)}
              yearlySavingsEuro={Math.round(yearlySavingsEuro)}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex justify-between items-end mb-3">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        <span className="text-2xl font-headline font-extrabold text-primary tabular-nums">
          {value}{" "}
          <span className="text-sm font-normal text-slate-400">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer accent-accent"
        style={{
          background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-slate-400 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
