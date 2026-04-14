import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3(
  { url: process.env.DATABASE_URL },
  { timestampFormat: "unixepoch-ms" }
);

const prisma = new PrismaClient({ adapter });

async function main() {
  const project1 = await prisma.project.upsert({
    where: { slug: "gestion-des-horaires" },
    update: {},
    create: {
      title: "Gestion des horaires — Collège La Cité (ITAC)",
      slug: "gestion-des-horaires",
      description:
        "Application web visant à automatiser la planification des cours, la gestion des salles et des disponibilités des professeurs.",
      technologies: [
        "Frontend : React, HTML5, CSS3, JavaScript",
        "Backend : Node.js, Express",
        "Base de données : PostgreSQL",
        "ORM : Prisma"
      ],
      githubUrl: "https://github.com/ton-compte/gestion-horaires"
    }
  });

  const project2 = await prisma.project.upsert({
    where: { slug: "portfolio-fullstack" },
    update: {},
    create: {
      title: "Portfolio développeur fullstack",
      slug: "portfolio-fullstack",
      description:
        "Portfolio personnel présentant mes projets, avec authentification, gestion des témoignages et API sécurisée.",
      technologies: [
        "Frontend : Next.js, React, Tailwind CSS",
        "Backend : Next.js API",
        "Base de données : SQLite",
        "ORM : Prisma",
        "Authentification : JWT"
      ],
      githubUrl: "https://github.com/smmakon/portfolio-saint-mathieu-makon"
    }
  });

  console.log("Projet 1 :", project1.slug);
  console.log("Projet 2 :", project2.slug);
  console.log("Seed terminé ");
}

main()
  .catch((e) => {
    console.error("Erreur seed :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });