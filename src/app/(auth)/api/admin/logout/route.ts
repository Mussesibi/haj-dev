import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" });

  // 🔹 Clear both accessToken & refreshToken cookies
  response.headers.set(
    "Set-Cookie",
    serialize("accessToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: -1, // Expire immediately
    })
  );

  response.headers.append(
    "Set-Cookie",
    serialize("refreshToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: -1, // Expire immediately
    })
  );

  return response;
}
