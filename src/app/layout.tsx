// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrowSavoir — Apprentissage interactif (3–16 ans)",
  description:
    "Cours conformes aux valeurs de l'Islam : arabe, anglais, français, éducation islamique, informatique, maths, sciences, histoire.",
  metadataBase: new URL("https://growsavoir.com"),
  openGraph: {
    title: "GrowSavoir — Apprentissage interactif (3–16 ans)",
    description: "Cours en ligne conformes aux valeurs de l'islam.",
    url: "https://growsavoir.com",
    siteName: "GrowSavoir",
    images: [{ url: "/logo.svg", width: 800, height: 600 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "GrowSavoir — Apprentissage interactif (3–16 ans)",
    description: "Cours en ligne conformes aux valeurs de l'islam.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

