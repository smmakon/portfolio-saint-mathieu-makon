import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const testimonialId = parseInt(id, 10);

    if (isNaN(testimonialId)) {
      return NextResponse.json(
        { error: "ID invalide" },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.findUnique({
      where: { id: testimonialId },
    });

    if (!testimonial) {
      return NextResponse.json(
        { error: "Témoignage introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error("Erreur GET testimonial:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const testimonialId = parseInt(id, 10);

    if (isNaN(testimonialId)) {
      return NextResponse.json(
        { error: "ID invalide" },
        { status: 400 }
      );
    }

    const body = await request.json();

    const updatedTestimonial = await prisma.testimonial.update({
      where: { id: testimonialId },
      data: {
        author: body.author,
        message: body.message,
      },
    });

    return NextResponse.json(updatedTestimonial);
  } catch (error) {
    console.error("Erreur PUT testimonial:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}