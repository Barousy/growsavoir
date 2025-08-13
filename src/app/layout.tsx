export const dynamic = 'force-dynamic';
export const revalidate = 0;

import type {ReactNode} from 'react';
import { Header } from '@/components/header';
import './globals.css';

export default async function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
