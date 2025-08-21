import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GrowSavoir - Apprentissage ludique pour enfants de 3 à 16 ans",
  description: "Découvrez des milliers de leçons interactives, quiz et activités pour enfants. Langues, mathématiques, sciences et plus encore, adaptés à chaque niveau.",
  keywords: "éducation, apprentissage, enfants, leçons, quiz, langues, mathématiques, sciences, arabe, français, anglais",
  authors: [{ name: "GrowSavoir Team" }],
  creator: "GrowSavoir",
  publisher: "GrowSavoir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://growsavoir.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GrowSavoir - Apprentissage ludique pour enfants",
    description: "Plateforme d'apprentissage innovante avec des leçons interactives et des quiz amusants",
    url: 'https://growsavoir.com',
    siteName: 'GrowSavoir',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GrowSavoir - Apprentissage pour enfants',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowSavoir - Apprentissage ludique pour enfants',
    description: 'Plateforme d\'apprentissage innovante avec des leçons interactives et des quiz amusants',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
} satisfies import("next").Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}