// prisma/seed.math.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function upsertSubject(slug: string, title: string, desc = '', order = 1) {
  return prisma.subject.upsert({
    where: { slug },
    update: { title, desc, order },
    create: { slug, title, desc, order },
  });
}

async function getSubjectId(slug: string) {
  const s = await prisma.subject.findUnique({ where: { slug }});
  if (!s) throw new Error(`Subject ${slug} not found`);
  return s.id;
}

async function upsertCategory(subjectSlug: string, slug: string, title: string, order = 1) {
  const subjectId = await getSubjectId(subjectSlug);
  return prisma.category.upsert({
    where: { slug },
    update: { title, order, subjectId },
    create: { slug, title, order, subjectId },
  });
}

async function upsertLesson(
  slug: string,
  title: string,
  minutes: number,
  order: number,
  categorySlug: string,
  desc = ''
) {
  const category = await prisma.category.findUnique({ where: { slug: categorySlug }});
  if (!category) throw new Error(`Category ${categorySlug} not found`);
  return prisma.lesson.upsert({
    where: { slug },
    update: { title, minutes, order, categoryId: category.id, desc },
    create: { slug, title, minutes, order, categoryId: category.id, desc },
  });
}

async function main() {
  await upsertSubject(
    'mathematiques',
    'Mathématiques',
    'Numération, calcul, mesures, géométrie, problèmes',
    3
  );

  await upsertCategory('mathematiques', 'numeration', 'Numération', 1);
  await upsertCategory('mathematiques', 'calcul', 'Calcul', 2);
  await upsertCategory('mathematiques', 'mesures', 'Mesures', 3);
  await upsertCategory('mathematiques', 'geometrie', 'Géométrie', 4);
  await upsertCategory('mathematiques', 'problemes', 'Problèmes', 5);

  // Numération
  await upsertLesson('math-num-0-20', 'De 0 à 20', 8, 1, 'numeration', 'Lire/écrire/comparer');
  await upsertLesson('math-num-dizaines-unites', 'Dizaines et unités', 10, 2, 'numeration', 'Décomposer 2 chiffres');
  await upsertLesson('math-num-0-100', 'De 0 à 100', 12, 3, 'numeration', 'Comparer, ranger, repérer');

  // Calcul
  await upsertLesson('math-calc-add-sans-ret', 'Addition sans retenue', 10, 1, 'calcul', 'Techniques posées simples');
  await upsertLesson('math-calc-sous-sans-ret', 'Soustraction sans retenue', 10, 2, 'calcul', 'Différence simple');
  await upsertLesson('math-calc-tables-2-5-10', 'Tables de 2, 5 et 10', 10, 3, 'calcul', 'Automatisation progressive');
  await upsertLesson('math-calc-situations', 'Situations d’addition/soustraction', 12, 4, 'calcul', 'Mettre en équation');

  // Mesures
  await upsertLesson('math-mes-longueurs', 'Longueurs (cm, m)', 10, 1, 'mesures', 'Estimer, mesurer, comparer');
  await upsertLesson('math-mes-heures', 'Heures et demi-heures', 10, 2, 'mesures', 'Lire une horloge');
  await upsertLesson('math-mes-masses', 'Masses (g, kg) — découverte', 8, 3, 'mesures', 'Comparer des masses');

  // Géométrie
  await upsertLesson('math-geo-formes', 'Formes usuelles (carré, rectangle, triangle, disque)', 10, 1, 'geometrie', 'Reconnaître/nommer');
  await upsertLesson('math-geo-lignes', 'Lignes droites et courbes', 8, 2, 'geometrie', 'Tracer et repérer');
  await upsertLesson('math-geo-symetrie', 'Symétrie axiale (initiation)', 10, 3, 'geometrie', 'Repérer un axe simple');

  // Problèmes
  await upsertLesson('math-prob-add-sous', 'Problèmes add/sous (1 étape)', 12, 1, 'problemes', 'Choisir l’opération');
  await upsertLesson('math-prob-donnees', 'Repérer les données utiles', 10, 2, 'problemes', 'Comprendre la question');

  console.log('Seed Mathématiques OK ✅');
}

main().finally(() => prisma.$disconnect());
