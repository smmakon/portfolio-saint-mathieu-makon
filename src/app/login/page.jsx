"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [localErrors, setLocalErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!form.email.trim()) {
      errors.email = "L'email est obligatoire";
    }

    if (!form.password.trim()) {
      errors.password = "Le mot de passe est obligatoire";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setLocalErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      await dispatch(loginUser(form));
      router.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <main className="container-app section-spacing container-app section-spacing fade-in-up">
      <div className="mx-auto max-w-md card-ui p-6 sm:p-8">
        <h2 className="text-3xl font-bold mb-2">Connexion</h2>
        <p className="text-muted mb-6">Accédez à votre espace personnel.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input-ui"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {localErrors.email && (
              <p className="text-red-500 text-sm mt-1">{localErrors.email}</p>
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
            {localErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {localErrors.password}
              </p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </main>
  );
}