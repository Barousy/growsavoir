// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'ar'],
  
  // Used when no locale matches
  defaultLocale: 'fr',
  
  // Always use the default locale for the root path
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en|ar)/:path*']
};
