export const dynamic = 'force-dynamic';
export const revalidate = 0;

import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import type {ReactNode} from 'react';
import { Header } from '@/components/header';

export default async function RootLayout({children}: {children: ReactNode}) {
  try {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
      <html lang={locale} suppressHydrationWarning>
        <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error('Error in RootLayout:', error);
    // Fallback without i18n if there's an error
    return (
      <html lang="fr" suppressHydrationWarning>
        <body>
          <Header />
          {children}
        </body>
      </html>
    );
  }
}
