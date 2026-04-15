import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    message: "Déconnexion réussie",
  });

  response.cookies.set("token", "", {
    expires: new Date(0),
  });

  return response;
}