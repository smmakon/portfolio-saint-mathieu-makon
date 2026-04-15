import { prisma }  from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(testimonials);
}

export async function POST(req) {
  const body = await req.json();

  const testimonial = await prisma.testimonial.create({
    data: {
      author: body.author,
      message: body.message,
    },
  });

  return NextResponse.json(testimonial);
}