"use client";

import { useState } from "react";
import api from "axios";
import AlertMessage from "../../components/AlertMessage";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Le nom est obligatoire";
    if (!form.email.trim()) newErrors.email = "L'email est obligatoire";
    if (!form.password.trim())
      newErrors.password = "Le mot de passe est obligatoire";

    if (form.password && form.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await api.post("/api/auth/register", form);
      setSuccess(res.data.message);
      setForm({ name: "", email: "", password: "" });
      setErrors({});
    } catch (error) {
      setErrors({
        api: error.response?.data?.message || "Erreur lors de l'inscription",
      });
    }
  };

  return (
    <main className="container-app section-spacing container-app section-spacing fade-in-up">
      <div className="mx-auto max-w-md card-ui p-6 sm:p-8">
        <h2 className="text-3xl font-bold mb-2">Inscription</h2>
        <p className="text-muted mb-6">
          Créez un compte afin de laisser un témoignage.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nom"
              className="input-ui"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="input-ui"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              className="input-ui"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {errors.api && <p className="text-red-500 text-sm">{errors.api}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button className="btn-primary w-full">S'inscrire</button>
        </form>
      </div>
    </main>
  );
}