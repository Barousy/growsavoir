import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GrowSavoir - Plateforme d\'apprentissage moderne',
  description: 'Découvrez une nouvelle façon d\'apprendre avec notre plateforme éducative interactive et personnalisée.',
  keywords: 'éducation, apprentissage, cours en ligne, formation, développement personnel',
  authors: [{ name: 'GrowSavoir Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
                    <html lang="fr" className="h-full">
                  <body className={`${inter.className} h-full bg-gray-50`}>
                    <AuthProvider>
                      <div className="min-h-full flex flex-col">
                        <Header />
                        <main className="flex-1">
                          {children}
                        </main>
                        <Footer />
                      </div>
                    </AuthProvider>
                  </body>
                </html>
  );
}
