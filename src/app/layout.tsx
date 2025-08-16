import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://growsavoir.com'),
  title: {
    default: 'GrowSavoir — Ressources ludiques 3–16 ans',
    template: '%s • GrowSavoir',
  },
  description:
    "Cours courts, fiches à imprimer, jeux interactifs et espace parents — pour apprendre avec plaisir (3–16 ans).",
  openGraph: {
    type: 'website',
    siteName: 'GrowSavoir',
    title: 'GrowSavoir',
    description:
      "Cours courts, fiches à imprimer, jeux interactifs et espace parents — pour apprendre avec plaisir (3–16 ans).",
    url: 'https://growsavoir.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@growsavoir', // si tu en as un
  },
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
  {/* Header fixé au-dessus du contenu */}
  <div className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90
                  border-b border-slate-200/70 dark:border-slate-800/70
                  backdrop-blur">
    <Header />
  </div>

  {/* Le contenu reste sous le header */}
  <main className="relative z-0 flex-1">
    {children}
  </main>

  <Footer />
</div>

                    </AuthProvider>
                  </body>
                </html>
  );
}
