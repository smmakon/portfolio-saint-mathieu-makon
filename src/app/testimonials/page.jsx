"use client";

import { useEffect, useState } from "react";
import api from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function TestimonialsPage() {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth.user);

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

      {data.map((t) => {
        const isOwner = user && user.name === t.author;

        return (
          <div key={t.id} className=" border-b-1 p-4 mb-1 border-gray-200">
            <p className="font-bold">{t.author}</p>
            <p className="mb-2">{t.message}</p>
            <p className="text-sm text-gray-500">
              {new Date(t.createdAt).toLocaleString()}
            </p>
            {isOwner ? (
              <Link
                href={`/testimonials/${t.id}/edit`}
                className=" text-blue-600 font-bold "
              >
                Modifier
              </Link>
            ) : (
              <button
                disabled
                className="text-gray-400 cursor-not-allowed font-bold"
              >
                Modifier
              </button>
            )}
          </div>
        );
      })}

    </main>
  );
}