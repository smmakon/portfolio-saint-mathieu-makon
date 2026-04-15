"use client";

import { useState, useEffect } from "react";
import api from "axios";
import { useSelector } from "react-redux";

export default function NewTestimonial() {
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    author: "",
    message: "",
  });

  const [error, setError] = useState("");

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

    // 🔴 VALIDATION
    if (!form.message.trim()) {
      setError("Le message est obligatoire");
      return;
    }

    try {
      await api.post("/api/testimonials", form);
      alert("Témoignage ajouté !");
      setForm({ ...form, message: "" });
      setError("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* NOM (non modifiable) */}
        <input
          value={form.author}
          disabled
          className="w-full border p-3 bg-gray-100"
        />

        {/* MESSAGE */}
        <div>
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
              setError(""); // enlever erreur quand on tape
            }}
            className={`w-full border p-3 ${
              error ? "border-red-500" : ""
            }`}
          />

          {error && (
            <p className="text-red-500 text-sm mt-1">
              {error}
            </p>
          )}
        </div>

        <button className="bg-green-600 text-white p-3 w-full">
          Envoyer
        </button>
      </form>
    </main>
  );
}