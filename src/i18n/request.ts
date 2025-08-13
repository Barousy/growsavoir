import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  try {
    const locale = await requestLocale;
    if (locale && ['fr', 'en', 'ar'].includes(locale)) {
      return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
      };
    }
  } catch (error) {
    console.warn('Failed to load locale:', error);
  }
  
  // Fallback to French
  return {
    locale: 'fr',
    messages: (await import(`../../messages/fr.json`)).default
  };
});
