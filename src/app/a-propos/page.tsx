import type { Metadata } from 'next';
import Link from 'next/link';
import { stats } from '@/lib/content';
import { absolute } from '@/lib/site';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'À propos de GrowSavoir',
  description:
    'GrowSavoir publie des leçons courtes et structurées pour les 6-8 ans : langues, sciences et sciences islamiques, en accès libre et sans inscription.',
  alternates: { canonical: '/a-propos' },
  openGraph: { url: absolute('/a-propos'), type: 'website' },
};

export default async function APropos() {
  const counts = await stats();

  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      <p className="eyebrow">À propos</p>
      <h1 style={{ fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.5rem)', letterSpacing: '-.02em' }}>
        Des leçons courtes, lisibles, et faites pour être relues
      </h1>

      <div className="lesson-body prose">
        <p>
          GrowSavoir réunit {counts.lessons} leçons réparties en {counts.subjects} matières, pensées pour des
          enfants de 6 à 8 ans et pour l’adulte qui les accompagne. Chaque leçon tient en une vingtaine de
          minutes : une introduction, une notion, une activité à faire, un exercice, un résumé.
        </p>

        <h2>Ce que nous cherchons à faire</h2>
        <ul>
          <li><b>Une leçon = un objectif.</b> Les objectifs sont écrits en tête de page, et vérifiés par le quiz final.</li>
          <li><b>Une progression réelle.</b> Les leçons d’une matière se lisent dans l’ordre, chacune s’appuyant sur la précédente.</li>
          <li><b>Rien à installer, rien à payer.</b> Les leçons sont en accès libre ; un compte ne sert qu’à suivre son avancement.</li>
          <li><b>Des sources citées.</b> Chaque leçon indique d’où vient ce qu’elle affirme.</li>
        </ul>

        <h2>Comment le site est fait</h2>
        <p>
          Les pages sont produites sur le serveur : le texte d’une leçon se trouve dans le document reçu par le
          navigateur. Cela profite d’abord aux lecteurs — la page s’affiche même sur une connexion lente ou avec
          un JavaScript bloqué — et accessoirement aux moteurs de recherche, qui lisent le même contenu.
        </p>
        <p>
          Le contenu est administré depuis une console : ajouter une leçon, une matière, un compte ou activer une
          fonctionnalité ne demande pas de modifier le code.
        </p>

        <h2>Écrire, corriger, signaler</h2>
        <p>
          Une erreur dans une leçon, une formulation obscure, une source discutable : écrivez-nous depuis la{' '}
          <Link href="/contact">page de contact</Link>. Les corrections sont publiées au fil de l’eau.
        </p>
      </div>

      <p style={{ marginTop: '2rem' }}>
        <Link className="btn btn--primary" href="/catalogue">Parcourir le catalogue</Link>
      </p>
    </div>
  );
}
