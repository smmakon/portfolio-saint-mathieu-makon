import Link from "next/link";
import mathieu from "../../public/mathieu.jpg";

export default function HomePage() {
  return (
    <div className="container-app section-spacing">
      <section className="grid items-center gap-10 py-8 md:grid-cols-2 md:py-14">
        <div className="order-2 md:order-1">
          <p className="mb-3 inline-block rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700">
            Développeur Full Stack
          </p>

          <h1 className="page-title mb-4">Bonjour, je suis Mathieu</h1>

          <p className="page-subtitle mb-4">
            Développeur web passionné par la création d'applications modernes
            avec Next.js, React et les API.
          </p>

          <p className="text-muted mb-6">
            Je développe des interfaces modernes, responsives et connectées à un
            backend.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/projects" className="btn-primary">
              Voir mes projets
            </Link>
            <Link href="/testimonials" className="btn-secondary">
              Voir les témoignages
            </Link>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="card-ui p-4">
            <img
              src={mathieu.src}
              alt="Photo de profil"
              className="h-56 w-56 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-72 sm:w-72"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Mes compétences</h2>
          <p className="text-muted mt-2">
            Technologies et outils que j’utilise pour construire des projets
            complets.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "HTML / CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Redux Toolkit",
            "Tailwind CSS",
            "Responsive Design",
            "Axios",
            "Node.js",
            "API REST",
            "SQLite / Prisma",
            "PostgreSQL / SQL Server / Oracle",
            "JWT / Authentification",
            "Git / GitHub",
            "Tests unitaires / intégration",
          ].map((skill) => (
            <div key={skill} className="card-ui p-4 font-medium">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}