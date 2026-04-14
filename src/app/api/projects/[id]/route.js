import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const id = parseInt(params.id);

  const project = await prisma.project.findUnique({
    where: { id },
  });

  if (!project) {
    return NextResponse.json({ message: "Projet introuvable" }, { status: 404 });
  }

  return NextResponse.json(project);
}