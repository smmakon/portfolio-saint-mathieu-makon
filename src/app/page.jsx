import mathieu from "../../public/mathieu.jpg";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="grid md:grid-cols-2 gap-8 items-center py-10">
        <div>
          <h2 className="text-4xl font-bold mb-4">Bonjour, je suis Mathieu</h2>
          <p className="text-lg mb-4">
            Développeur web passionné par la création d'applications modernes
            avec Next.js, React et les API.
          </p>
          <p className="mb-4">
            Je développe des interfaces modernes, responsives et connectées à un backend.
          </p>
          <button className=" bg-slate-700 text-white px-5 py-2 rounded">
            Voir mes projets
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={mathieu.src}
            alt="Photo de profil"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
        </div>
      </section>

      <section className="py-10">
        <h3 className="text-2xl font-bold mb-4">Mes compétences</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "HTML / CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Redux Toolkit",
            "Tailwind CSS",
            "Responsive Design (mobile / tablette)",
            "Axios",
            "Node.js",
            "API REST",
            "SQLite / Prisma",
            "PostgresSQL/ SQL Server/ Oracle",
            "JWT / Authentification",
            "Git / GitHub",
            "Tests unitaires / Tests d'intégration",
            

          ].map((skill) => (
            <div key={skill} className=" border border-gray-100 rounded p-4 shadow-md bg-white">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}