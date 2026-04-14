"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "axios";
import Link from "next/link";
import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from "../../redux/slices/projetSlice";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    const getProjects = async () => {
      try {
        dispatch(fetchProjectsStart());
        const res = await api.get("/api/projects");
        console.log("API projects :", res.data);
        dispatch(fetchProjectsSuccess(res.data));
      } catch (err) {
        dispatch(fetchProjectsFailure("Erreur lors du chargement des projets"));
      }
    };

    getProjects();
  }, []);

  return (
    <>
      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Mes projets</h2>

        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((project) => (
            <div key={project.id} className="border rounded p-5 shadow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              <div className="mb-3">
                <strong>Technologies :</strong>
                <ul className="mt-2 space-y-1">
                    {Array.isArray(project.technologies) &&
                    project.technologies.map((tech, index) => (
                        <li key={index} className="text-sm">
                        • {tech}
                        </li>
                    ))}
                </ul>
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="text-blue-600 font-semibold"
              >
                Voir les détails
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}