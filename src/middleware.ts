import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value; // Get JWT from cookies

  if (pathname === "/admin/login" && token) {
    try {
      jwt.verify(token, SECRET_KEY);
      // If token is valid, redirect to dashboard
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } catch (error) {
      console.log("Invalid token, staying on login page.");
    }
  }

  if (pathname === "/admin/dashboard") {
    if (!token) {
      // If no token, redirect to login
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      jwt.verify(token, SECRET_KEY);
      return NextResponse.next();
    } catch (error) {
      console.log("Invalid token, redirecting to login.");
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard"],
};
