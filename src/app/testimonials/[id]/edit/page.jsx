"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

export default function EditTestimonialPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    author: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchTestimonial = async () => {
      try {
        const res = await axios.get(`/api/testimonials/${id}`);
        setForm({
          author: res.data.author || "",
          message: res.data.message || "",
        });
      } catch (error) {
        console.error("Erreur chargement témoignage :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, [id]);

  const validate = () => {
    const newErrors = {};

    if (!form.author.trim()) {
      newErrors.author = "Le nom est obligatoire";
    }

    if (!form.message.trim()) {
      newErrors.message = "Le message est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await axios.put(`/api/testimonials/${id}`, form);
      router.push("/testimonials");
    } catch (error) {
      console.error("Erreur modification témoignage :", error);
    }
  };

  if (loading) {
    return (
      <main className="container-app section-spacing fade-in-up">
        <div className="mx-auto max-w-2xl card-ui p-6 sm:p-8 text-center">
          <p className="text-muted">Chargement du témoignage...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container-app section-spacing fade-in-up">
      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => router.push("/testimonials")}
          className="btn-secondary mb-4"
        >
          ← Retour aux témoignages
        </button>

        <div className="card-ui p-6 sm:p-8">
          <div className="mb-6">
            <p className="mb-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              Modification
            </p>

            <h1 className="text-3xl font-bold mb-2">Modifier le témoignage</h1>
            <p className="text-muted leading-7">
              Mettez à jour votre message puis enregistrez les changements.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Auteur</label>
              <input
                type="text"
                value={form.author}
                disabled
                className={`input-ui bg-slate-100 cursor-not-allowed ${
                  errors.author ? "border-red-500" : ""
                }`}
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">{errors.author}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Modifiez votre message"
                className={`textarea-ui ${
                  errors.message ? "border-red-500" : ""
                }`}
                rows={6}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Enregistrer
              </button>

              <button
                type="button"
                onClick={() => router.push("/testimonials")}
                className="btn-secondary w-full sm:w-auto"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}