"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "axios";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const res = await api.get(`/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les détails du projet.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <main className="container-app section-spacing">
        <p>Chargement...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container-app section-spacing">
        <div className="card-ui p-6">
          <p className="text-red-500">{error}</p>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="container-app section-spacing">
        <div className="card-ui p-6">
          <p>Projet introuvable.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container-app section-spacing">
      <button
        type="button"
        onClick={() => router.push("/projects")}
        className="btn-secondary mb-6"
      >
        ← Retour aux projets
      </button>

      <div className="card-ui overflow-hidden">
        
        <div className="aspect-[16/9] w-full bg-slate-100 flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-slate-400">Aucune image disponible</span>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              {project.title}
            </h1>
            <p className="text-muted leading-7">{project.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(project.technologies) &&
                project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Voir sur GitHub
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Voir la démo
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}