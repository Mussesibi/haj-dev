import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Ensure env variables are loaded

const prisma = new PrismaClient();
const SECRET_KEY = process.env.ACCESSTOKEN_SECRET_KEY;
const REFRESH_SECRET = process.env.REFRESHTOKEN_SECRET_KEY;

export async function POST(req: NextRequest) {
  try {
    console.log("SECRET_KEY:", SECRET_KEY); // Debugging
    console.log("REFRESH_SECRET:", REFRESH_SECRET); // Debugging

    if (!SECRET_KEY || !REFRESH_SECRET) {
      return NextResponse.json(
        { message: "Missing environment variables" },
        { status: 500 }
      );
    }

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

    console.log("Login successful");

    // Generate JWT tokens
    console.log("admin.email:", admin.email); // Debugging
    const token = jwt.sign({ email: admin.email }, SECRET_KEY, {
      expiresIn: "15m",
    });
    console.log("token:", token); // Debugging
    const refreshToken = jwt.sign({ email: admin.email }, REFRESH_SECRET, {
      expiresIn: "7d",
    });

    // Set refresh token as an HTTP-Only cookie
    const response = NextResponse.json({ token });
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.log("Server error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
