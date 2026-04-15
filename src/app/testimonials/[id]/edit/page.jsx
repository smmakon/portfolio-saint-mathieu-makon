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

  if (loading) return <p>Chargement...</p>;

  return (
    <main className="max-w-2xl mx-auto p-6">
      <button
        type="button"
        onClick={() => router.push("/testimonials")}
        className="mb-4 text-blue-600 hover:underline font-bold"
      >
        ← Retour aux témoignages
      </button>

      <h1 className="text-2xl font-bold mb-6">Modifier le témoignage</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Auteur */}
        <div>
          <input
            type="text"
            value={form.author}
            disabled
            className={`w-full border bg-gray-100 rounded p-3 ${
              errors.author ? "border-red-500" : ""
            }`}
          />
          {errors.author && (
            <p className="text-red-500 text-sm mt-1">
              {errors.author}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            placeholder="Message"
            className={`w-full border rounded p-3 ${
              errors.message ? "border-red-500" : ""
            }`}
            rows={5}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-slate-900 text-white px-5 py-2 rounded"
        >
          Enregistrer
        </button>
      </form>
    </main>
  );
}