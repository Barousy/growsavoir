import type { Metadata } from 'next';
import Link from 'next/link';
import { featureEnabled } from '@/lib/content';
import { SITE_URL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'GrowSavoir — apprendre l’arabe, les langues, les sciences et les sciences islamiques',
    template: '%s — GrowSavoir',
  },
  description:
    'Cours structurés pour les 6-8 ans : langue arabe, français, anglais, mathématiques, sciences, informatique, aqîda, fiqh, sîra et histoire de l’Islam.',
  authors: [{ name: 'GrowSavoir' }],
  openGraph: { type: 'website', siteName: 'GrowSavoir', locale: 'fr_FR' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Une seule lecture indexée : le lien ne doit pas mener à une page éteinte.
  const activities = await featureEnabled('activities');

  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <header className="site-header">
          <div className="container site-header__inner">
            <Link className="brand" href="/">
              <span className="brand__mark" aria-hidden="true">GS</span> GrowSavoir
            </Link>
            <nav className="site-nav" aria-label="Navigation principale">
              <Link href="/catalogue">Catalogue</Link>
              {activities ? <Link href="/activites">Activités</Link> : null}
              <Link href="/a-propos">À propos</Link>
              <Link href="/contact">Contact</Link>
              <Link className="btn btn--primary" href="/connexion">Se connecter</Link>
            </nav>
          </div>
        </header>
        <main id="contenu">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getUTCFullYear()} GrowSavoir. Tous droits réservés.</p>
            <nav aria-label="Liens de pied de page">
              <Link href="/catalogue">Catalogue</Link>
              {activities ? <Link href="/activites">Activités</Link> : null}
              <Link href="/a-propos">À propos</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/confidentialite">Confidentialité</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
