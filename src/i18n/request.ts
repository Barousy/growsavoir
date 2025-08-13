import {getRequestConfig} from 'next-intl/server';
import fr from '../../messages/fr.json';
import en from '../../messages/en.json';
import ar from '../../messages/ar.json';

export const locales = ['fr', 'en', 'ar'] as const;
export const defaultLocale = 'fr';

export default getRequestConfig(async ({locale}) => {
  const messages = locale === 'en' ? en : locale === 'ar' ? ar : fr;
  return {locale, messages};
});
