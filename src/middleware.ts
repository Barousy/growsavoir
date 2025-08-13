// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // tes locales
  locales: ['fr', 'en', 'ar'],
  // locale par défaut
  defaultLocale: 'fr',
  // ⚠️ important : on ne met PAS /fr dans l’URL
  localePrefix: 'never'
});

// Le middleware ne s'applique PAS aux fichiers statiques ni à /api/*
export const config = {
  matcher: ['/((?!_next|.*\\..*|api).*)']
};
