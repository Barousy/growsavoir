// src/app/page.tsx
import {getTranslations} from 'next-intl/server';
import Link from 'next/link';

export default async function HomePage() {
  const t = await getTranslations();

  const cards = [
    {subject: 'arabe',    title: 'Alif-Bâ-Tâ',                     level: 'maternelle'},
    {subject: 'français', title: 'Sons [a]/[i]',                   level: 'CP'},
    {subject: 'anglais',  title: 'Greetings & Colors',             level: 'A1'},
    {subject: 'informatique', title: 'Souris & clavier',           level: 'débutant'},
    {subject: 'maths',    title: 'Additions jusqu’à 20',           level: 'CE1'},
    {subject: 'histoire-islam', title: 'Naissance du Prophète ﷺ',  level: 'enfants'}
  ];

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{t('hero.title')}</h1>
      <p className="text-lg opacity-80">{t('hero.subtitle')}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
        {cards.map((c) => (
          <Link key={c.title} href="/courses"
                className="block p-4 rounded-xl border hover:border-black transition">
            <div className="text-xs uppercase opacity-70">{c.subject} • {c.level}</div>
            <div className="font-semibold">{c.title}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

