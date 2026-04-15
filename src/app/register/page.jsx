"use client";

import { useState } from "react";
import api from "axios";


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
    if (!form.password.trim()) newErrors.password = "Le mot de passe est obligatoire";
    if (form.password && form.password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
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
    } catch (error) {
      setErrors({
        api: error.response?.data?.message || "Erreur lors de l'inscription",
      });
    }
  };

  return (
    <>
      <main className="max-w-md mx-auto p-6 ">
        <h2 className="text-3xl font-bold mb-6 ">Inscription</h2>

        <form onSubmit={handleSubmit} className="space-y-4  p-6 rounded shadow-md bg-slate-100">
            <div className="mb-7">
            <strong >Créer un compte</strong> 
            <p>Afin de se laisser un témoignage</p>
            </div>
            

          <div >
            <input
              type="text"
              placeholder="Nom"
              className=" border border-gray-100 rounded p-2 shadow bg-white w-full"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div >
            <input
              type="email"
              placeholder="Email"
              className=" border border-gray-100 rounded p-2 shadow bg-white w-full"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div >
            <input
              type="password"
              placeholder="Mot de passe"
              className=" border border-gray-100 rounded p-2 shadow bg-white w-full"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {errors.api && <p className="text-red-500 text-sm">{errors.api}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button className="w-full bg-slate-700 text-white py-3 rounded">
            S'inscrire
          </button>
        </form>
      </main>
    </>
  );
}