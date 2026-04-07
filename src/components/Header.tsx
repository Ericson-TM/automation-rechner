"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-headline font-bold text-lg tracking-tight">
          <span className="text-primary">EL</span>{" "}
          <span className={scrolled ? "text-slate-700" : "text-white"}>
            Büroservice
          </span>
        </a>
        <a
          href="https://el-bueroservice.com/#contact"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark transition-colors"
        >
          Kontakt
        </a>
      </div>
    </header>
  );
}
