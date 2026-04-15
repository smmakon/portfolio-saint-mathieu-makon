"use client";

import { useEffect, useState } from "react";
import api from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function TestimonialsPage() {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await api.get("/api/testimonials");
      setData(res.data);
    };

    fetchTestimonials();
  }, []);

  return (
    <main className="container-app section-spacing container-app section-spacing fade-in-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Témoignages</h2>
        <p className="text-muted">
          Découvrez les retours laissés par les visiteurs.
        </p>
      </div>

      <div className="space-y-4">
        {data.map((t) => {
          const isOwner = user && user.name === t.author;

          return (
            <div key={t.id} className="card-ui p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-bold text-lg">{t.author}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(t.createdAt).toLocaleString("fr-CA", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>

                {isOwner ? (
                  <Link
                    href={`/testimonials/${t.id}/edit`}
                    className="btn-secondary"
                  >
                    Modifier
                  </Link>
                ) : (
                  <button
                    disabled
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-gray-400 cursor-not-allowed"
                  >
                    Modifier
                  </button>
                )}
              </div>

              <p className="mt-4 text-slate-700 leading-7">{t.message}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}