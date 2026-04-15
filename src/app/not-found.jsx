import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-app section-spacing">
      <div className="mx-auto max-w-2xl card-ui p-8 sm:p-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
          Erreur 404
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Page introuvable
        </h1>

        <p className="text-muted mb-8 leading-7">
          La page que vous recherchez n’existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Retour à l’accueil
          </Link>
          <Link href="/projects" className="btn-secondary">
            Voir les projets
          </Link>
        </div>
      </div>
    </main>
  );
}