export default function Footer() {
  return (
    <footer className="bg-primary text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div>
          &copy; {new Date().getFullYear()} EL Büroservice. Alle Rechte
          vorbehalten.
        </div>
        <div className="flex gap-6">
          <a
            href="https://el-bueroservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a
            href="https://el-bueroservice.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
