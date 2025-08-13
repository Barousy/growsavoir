// src/middleware.ts
import { NextResponse } from 'next/server';

// Middleware simplifié pour éviter les conflits avec next-intl
export function middleware() {
  return NextResponse.next();
}

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - all files in the public folder
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
