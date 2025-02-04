import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT tokens
    const token = jwt.sign({ email: admin.email }, SECRET_KEY, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ email: admin.email }, REFRESH_SECRET, {
      expiresIn: "7d",
    });

    // Set refresh token as an HTTP-Only cookie
    const response = NextResponse.json({ token });
    response.headers.set(
      "Set-Cookie",
      serialize("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 7 * 24 * 60 * 60, // 7 days
      })
    );

    return response;
  } catch (error) {
    console.log("Server error status code 500: \n", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
