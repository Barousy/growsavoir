
import "./globals.css";
import { ReactNode } from "react";

export const metadata = { title: "GrowSavoir", description: "Cours conformes aux valeurs de l'Islam (3–16 ans)" };

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
