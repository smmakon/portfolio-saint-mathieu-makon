"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-between items-center">
        <h1 className="font-bold text-xl">Mon Portfolio</h1>
        <div className="flex gap-4 flex-wrap">
          <Link href="/">Accueil</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/testimonials">Témoignages</Link>
          <Link href="/testimonials/new">Laisser un témoignage</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Inscription</Link>
        </div>
      </nav>
    </header>
  );
}