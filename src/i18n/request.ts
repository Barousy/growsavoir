import {getRequestConfig} from 'next-intl/server';

// 🔒 Imports statiques = le bundler sait tout à la build
import fr from '../../messages/fr.json';
import en from '../../messages/en.json';
import ar from '../../messages/ar.json';

export const locales = ['fr', 'en', 'ar'] as const;
export const defaultLocale = 'fr';

export default getRequestConfig(({locale}) => ({
  messages: locale === 'fr' ? fr : locale === 'en' ? en : ar
}));
