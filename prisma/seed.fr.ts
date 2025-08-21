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

async function upsertCategory(subjectslug: string, slug: string, title: string, order = 1) {
  const subjectId = await getSubjectId(subjectslug);
  return prisma.category.upsert({
    where: { slug },
    update: { title, order, subjectId },
    create: { slug, title, order, subjectId },
  });
}

async function upsertLesson(slug: string, title: string, minutes: number, order: number, categorySlug: string, desc = '') {
  const category = await prisma.category.findUnique({ where: { slug: categorySlug }});
  if (!category) throw new Error(`Category ${categorySlug} not found`);
  return prisma.lesson.upsert({
    where: { slug },
    update: { title, minutes, order, categoryId: category.id, desc },
    create: { slug, title, minutes, order, categoryId: category.id, desc },
  });
}

async function main() {
  await upsertSubject('francais', 'Français', 'Lecture, grammaire, orthographe et vocabulaire', 2);

  await upsertCategory('francais', 'lecture', 'Lecture', 1);
  await upsertCategory('francais', 'grammaire', 'Grammaire', 2);
  await upsertCategory('francais', 'orthographe', 'Orthographe', 3);
  await upsertCategory('francais', 'vocabulaire', 'Vocabulaire', 4);
  await upsertCategory('francais', 'compréhension', 'Compréhension', 5);

  // Lecture
  await upsertLesson('fr-lecture-sons-simples', 'Sons simples (a, i, o, u, é/è)', 12, 1, 'lecture', 'Lire des syllabes et mots courts');
  await upsertLesson('fr-lecture-digrammes', 'Digrammes (ch, ou, on, in, an)', 12, 2, 'lecture', 'Lire des mots avec sons complexes');
  await upsertLesson('fr-lecture-nasales', 'Voyelles nasales (an/en, in/ain, on)', 12, 3, 'lecture', 'Reconnaître les sons nasaux');
  await upsertLesson('fr-lecture-liasons', 'Liaisons fréquentes', 10, 4, 'lecture', 'Prononciation en lecture à voix haute');

  // Grammaire
  await upsertLesson('fr-gram-nom-verbe-adj', 'Nom / Verbe / Adjectif', 12, 1, 'grammaire', 'Identifier les classes de mots');
  await upsertLesson('fr-gram-determinants', 'Déterminants (le, la, un, une, des)', 10, 2, 'grammaire', 'Accorder déterminant + nom');
  await upsertLesson('fr-gram-sujet-verbe', 'Sujet et verbe', 12, 3, 'grammaire', 'Trouver le sujet, accorder au présent');
  await upsertLesson('fr-gram-temps-present', 'Présent des verbes fréquents', 12, 4, 'grammaire', 'Être, avoir, aller, faire — présent');

  // Orthographe
  await upsertLesson('fr-ortho-accents', 'Accents (é/è/ê, ç)', 10, 1, 'orthographe', 'Règles d’usage des accents');
  await upsertLesson('fr-ortho-pluriels', 'Pluriels (s, x, eux)', 10, 2, 'orthographe', 'Pluriels réguliers et irréguliers');
  await upsertLesson('fr-ortho-genre', 'Genre du nom et de l’adjectif', 10, 3, 'orthographe', 'Féminin/masculin, accords');
  await upsertLesson('fr-ortho-homophones', 'Homophones (a/à, et/est, son/sont)', 12, 4, 'orthographe', 'Différencier par le sens');

  // Vocabulaire
  await upsertLesson('fr-vocab-familles', 'Familles de mots', 10, 1, 'vocabulaire', 'Préfixes/suffixes simples');
  await upsertLesson('fr-vocab-syn-ant', 'Synonymes et antonymes', 10, 2, 'vocabulaire', 'Nuancer le sens des mots');
  await upsertLesson('fr-vocab-champs', 'Champs lexicaux (école, maison…)', 10, 3, 'vocabulaire', 'Regrouper les mots par thème');

  // Compréhension
  await upsertLesson('fr-comp-petits-textes', 'Comprendre de petits textes', 12, 1, 'compréhension', 'Répondre à des questions simples');
  await upsertLesson('fr-comp-consignes', 'Comprendre une consigne', 8, 2, 'compréhension', 'Repérer infos clés');
  console.log('Seed Français OK ✅');
}

main().finally(() => prisma.$disconnect());
