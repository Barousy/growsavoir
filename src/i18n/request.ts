import {getRequestConfig} from 'next-intl/server';

export const locales = ['fr', 'en', 'ar'] as const;
export const defaultLocale = 'fr';

export default getRequestConfig(async ({locale}) => ({
  messages:
    locale === 'fr'
      ? (await import('../../messages/fr.json')).default
      : locale === 'en'
      ? (await import('../../messages/en.json')).default
      : (await import('../../messages/ar.json')).default
}));
