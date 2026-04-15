"use client";

import { useEffect, useState } from "react";
import api from "axios";
import Link from "next/link";

export default function TestimonialsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await api.get("/api/testimonials");
      setData(res.data);
    };

    fetchTestimonials();
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Témoignages</h2>

      {data.map((t) => (
        <div key={t.id} className="border p-4 mb-3">
          <p className="font-bold">{t.author}</p>
          <p>{t.message}</p>

          <Link
                href={`/testimonials/${t.id}/edit`}
                className="text-blue-600 font-semibold"
              >
                Modifier
          </Link>

        </div>
      ))}
    </main>
  );
}