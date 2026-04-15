"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice"
import { useRouter } from "next/navigation";

export default function Header() {

const dispatch = useDispatch();
  const router = useRouter();

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    router.push("/login");
  };


  return (
    <header className="bg-black text-white p-4">
      <nav className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-between items-center">
        <h1 className="font-bold text-xl">Mon Portfolio</h1>
        <div className="flex gap-4 flex-wrap">
          <Link href="/">Accueil</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/testimonials">Témoignages</Link>
          <Link href="/testimonials/new">Laisser un témoignage</Link>


           {isAuthenticated ? (
            <>
              <span className="text-sm  px-3 py-1 rounded">
                Bonjour {user?.name || "Utilisateur"}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-400 px-4 py-2 rounded"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Connexion</Link>
              <Link href="/register">Inscription</Link>
            </>
          )}
          
        </div>
      </nav>
    </header>
  );
}