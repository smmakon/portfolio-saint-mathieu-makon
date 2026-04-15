export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="container-app py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-semibold text-slate-900">© 2026 Mon Portfolio</p>
            <p className="text-sm text-slate-500">
              Développement web moderne, responsive et professionnel
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <a href="https://github.com/smmakon" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saint-mathieumakon/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:makonmathieu@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}