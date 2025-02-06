import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("accessToken")?.value; // Get JWT from cookies
  // console.log("Middleware token:", token);

  if (pathname === "/admin/login" && token) {
    try {
      // If token is valid, redirect to dashboard
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } catch (error) {
      console.log("Invalid token, staying on login page.");
    }
  }

  if (pathname === "/admin/dashboard") {
    if (!token) {
      // If no token, redirect to login
      console.log("NO TOKEN, redirecting to login.");
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      return NextResponse.next();
    } catch (error) {
      console.log("Invalid token, redirecting to login.", error);
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
