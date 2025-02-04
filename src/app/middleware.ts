import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin/dashboard")) {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      jwt.verify(token, SECRET_KEY);
      return NextResponse.next();
    } catch (error) {
      console.log("Error: ", error);
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/dashboard/:path*",
};
