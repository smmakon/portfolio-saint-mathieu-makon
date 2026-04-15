"use client";

import { useState, useEffect } from "react";
import api from "axios";
import { useSelector } from "react-redux";
import AlertMessage from "../../../components/AlertMessage";

export default function NewTestimonial() {
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    author: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        author: user.name,
      }));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.message.trim()) {
      setError("Le message est obligatoire");
      setSuccess("");
      return;
    }

    try {
      await api.post("/api/testimonials", form);
      setSuccess("Témoignage ajouté avec succès.");
      setForm((prev) => ({ ...prev, message: "" }));
      setError("");
    } catch (err) {
      console.error(err);
      setSuccess("");
      setError("Une erreur est survenue lors de l'envoi.");
    }
  };

  return (
    <main className="container-app section-spacing">
      <div className="mx-auto max-w-xl card-ui p-6 sm:p-8">
        <h2 className="text-3xl font-bold mb-2">Laisser un témoignage</h2>
        <p className="text-muted mb-6">
          Partagez votre expérience en laissant un message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input value={form.author} disabled className="input-ui bg-slate-100" />
          </div>

          <div>
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                setError("");
                setSuccess("");
              }}
              className={`textarea-ui ${error ? "border-red-500" : ""}`}
            />
              <div className="space-y-2">
              {error && <AlertMessage type="error">{error}</AlertMessage>}
              {success && <AlertMessage type="success">{success}</AlertMessage>}
            </div>

          </div>

          <button className="btn-primary w-full">Envoyer</button>
        </form>
      </div>
    </main>
  );
}