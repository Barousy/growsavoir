// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'ar'],
  
  // Used when no locale matches
  defaultLocale: 'fr',
  
  // Don't add locale prefix for default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - all files in the public folder
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
