@AGENTS.md

# Automatisierungs-Rechner — EL Büroservice

## Projekt-Übersicht
Interaktiver ROI-Rechner, der potenziellen Kunden zeigt, wie viel Zeit und Geld sie durch Automatisierung sparen können. Dient als Lead-Generierungs-Tool auf el-büroservice.com.

**Domain**: el-büroservice.com (xn--el-broservice-zob.com)
**Repository**: https://github.com/Ericson-TM/automation-rechner
**Hosting**: Vercel (Auto-Deploy aus GitHub main Branch)
**Registrar**: Hostinger (DNS → Vercel)

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (Body), Manrope (Headlines) — via next/font/google
- **Deployment**: Vercel

## Projektstruktur
```
src/
├── app/
│   ├── globals.css          # Tailwind + Theme-Variablen + Animationen
│   ├── layout.tsx           # Root Layout (Fonts, Metadata)
│   └── page.tsx             # Home — bindet alle Sections ein
└── components/
    ├── Header.tsx           # Sticky Header mit Scroll-Effekt
    ├── Hero.tsx             # Headline + CTA "Jetzt berechnen"
    ├── Calculator.tsx       # 4 Slider (Mitarbeiter, Stunden, Stundensatz, Automatisierungsgrad)
    ├── Results.tsx          # Animierte Ergebnis-Anzeige (monatlich/jährlich)
    ├── HowItWorks.tsx       # 3-Schritte-Prozess (Analyse → Konzept → Umsetzung)
    └── Footer.tsx           # Links zu el-bueroservice.com
```

## Farbpalette
- `--color-primary`: #2C3E50 (Fels-Slate, passend zum Portfolio)
- `--color-primary-light`: #3E5C76
- `--color-accent`: #3B82F6 (Blau für CTAs/Interaktive Elemente)
- `--color-accent-dark`: #2563EB
- `--color-success`: #10B981 (Grün für positive Ergebnisse)

## Funktionsweise Rechner
**Eingabe (4 Slider):**
1. Betroffene Mitarbeiter (1–50)
2. Manuelle Stunden pro Woche je Mitarbeiter (1–40)
3. Durchschnittlicher Stundensatz (15–100 €)
4. Erwarteter Automatisierungsgrad (10–95 %)

**Berechnung:**
- Wöchentliche Zeitersparnis = Mitarbeiter × Stunden × Automatisierungsgrad
- Monatlich = Wöchentlich × 4,33
- Jährlich = Wöchentlich × 52
- Kostenersparnis = Zeitersparnis × Stundensatz

**Ausgabe:**
- Große animierte Zahl: Jährliches Einsparpotenzial in €
- Detail-Karten: Monatliche Zeit- und Kostenersparnis
- CTA: Link zum Kontaktformular auf el-bueroservice.com

## Verknüpfung mit Portfolio
Alle CTAs (Header-Kontakt-Button, Ergebnis-CTA, HowItWorks-CTA, Footer) verlinken auf `https://el-bueroservice.com/#contact`.

## Development
```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Production Build
```
