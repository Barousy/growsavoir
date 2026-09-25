/**
 * Page 404.
 *
 * Une 404 utile propose une sortie : le catalogue et la recherche du site.
 * Next renvoie bien le code 404 avec cette page — ce n'est pas une redirection,
 * ce qui évite d'envoyer un signal trompeur à un robot d'indexation.
 */
import Link from 'next/link';
import { listSubjects } from '@/lib/content';

export const metadata = { title: 'Page introuvable', robots: { index: false, follow: true } };

export default async function NotFound() {
  const subjects = await listSubjects();

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
      <p className="eyebrow">Erreur 404</p>
      <h1 style={{ fontSize: 'clamp(1.7rem, 1.2rem + 2vw, 2.3rem)' }}>Cette page n’existe pas</h1>
      <p className="section-lead prose">
        Le lien est peut-être ancien, ou la leçon a changé d’adresse. Voici par où reprendre.
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        <Link className="btn btn--primary" href="/catalogue">Voir le catalogue</Link>
      </p>
      <section>
        <h2>Les matières</h2>
        <ul className="lesson-list" style={{ marginTop: '1rem' }}>
          {subjects.map((subject) => (
            <li key={subject.id}>
              <Link href={`/catalogue/${subject.slug}`}>
                <span className="title">{subject.name}</span>
                <span className="time">{subject._count.lessons} leçons</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
