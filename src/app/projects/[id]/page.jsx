"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "axios";
import Link from "next/link";

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params?.id;

  const [project, setProject] = useState(null);
  const [error, setError] = useState("");


  useEffect(() => {
    if (!id) return;

    const getProject = async () => {
      try {
        const res = await api.get(`/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        setError("Projet introuvable");
      }
    };

    getProject();
  }, [id]);

  return (
    
    <main className="max-w-4xl mx-auto p-6">


        
        <button className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-1 px-3 rounded mb-4"> 
                    <Link
                        href="/projects"
                        className="mb-4 inline-block text-white "
                    >
                     retour
                    </Link>
        </button>
       
        
    
      {error && <p className="text-red-500">{error}</p>}

      {!error && !project && <p>Chargement...</p>}

      {project && (
        
        <div className=" border border-gray-100 rounded p-4 shadow-md bg-white">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

          <p className="mb-4">{project.description}</p>

        <strong>Technologies :</strong>

          <ul className="mt-2 space-y-1">
                    {Array.isArray(project.technologies) &&
                    project.technologies.map((tech, index) => (
                        <li key={index} className="text-sm">
                        • {tech}
                        </li>
                        
                    ))}
            </ul>
        <div className="mt-4">
            {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 mr-4"
            >
              GitHub
            </a>
          )}
        </div>
          

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-green-600"
            >
              Démo
            </a>
          )}
        </div>
      )}
    </main>
  );
}