import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("dora_auth_token");
  
  const protectedRoutes = ["/dashboard", "/wallet", "/claim", "/analytics", "/admin"];
  const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If the user is authenticated and tries to access splash or login, send them to dashboard
  if (token && (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/login")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard/:path*",
    "/wallet/:path*",
    "/claim/:path*",
    "/analytics/:path*",
    "/admin/:path*",
  ],
};
