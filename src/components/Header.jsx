"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);


  const handleLogout = async () => {
    await dispatch(logoutUser());
    setMenuOpen(false);
    router.push("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur [border-color:var(--border)] [background:color-mix(in_srgb,var(--card)_88%,transparent)]">
      <div className="container-app">
        <nav className="flex items-center justify-between gap-3 py-4">
          <Link
            href="/"
            className="max-w-[170px] truncate text-base font-bold sm:max-w-none sm:text-xl"
            onClick={closeMenu}
          >
            Mon Portfolio
          </Link>

          <div className="flex items-center gap-2 md:hidden">

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border [border-color:var(--border)]"
              aria-label="Ouvrir le menu"
            >
              <div className="flex flex-col gap-1">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm lg:text-base">
            <Link href="/" className="hover:opacity-70">Accueil</Link>
            <Link href="/projects" className="hover:opacity-70">Projets</Link>
            <Link href="/testimonials" className="hover:opacity-70">
              Témoignages
            </Link>
            <Link href="/testimonials/new" className="hover:opacity-70">
              Laisser un témoignage
            </Link>


            {isAuthenticated ? (
              <>
                <span className="rounded-full px-3 py-1 text-sm [background:var(--soft)]">
                  Bonjour {user?.name || "Utilisateur"}
                </span>
                <button onClick={handleLogout} className="btn-primary">
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:opacity-70">
                  Connexion
                </Link>
                <Link href="/register" className="btn-primary">
                  Inscription
                </Link>
              </>
            )}
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="card-ui p-4 flex flex-col gap-3 text-sm fade-in-up">
              <Link href="/" onClick={closeMenu}>Accueil</Link>
              <Link href="/projects" onClick={closeMenu}>Projets</Link>
              <Link href="/testimonials" onClick={closeMenu}>Témoignages</Link>
              <Link href="/testimonials/new" onClick={closeMenu}>
                Laisser un témoignage
              </Link>

              {isAuthenticated ? (
                <>
                  <span className="rounded-lg px-3 py-2 [background:var(--soft)]">
                    Bonjour {user?.name || "Utilisateur"}
                  </span>
                  <button onClick={handleLogout} className="btn-primary w-full">
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={closeMenu} className="btn-secondary">
                    Connexion
                  </Link>
                  <Link href="/register" onClick={closeMenu} className="btn-primary">
                    Inscription
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}