import { prisma } from "../../../../lib/prisma"
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Utilisateur introuvable" },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      message: "Connexion réussie",
      user: { id: user.id, name: user.name, email: user.email },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}