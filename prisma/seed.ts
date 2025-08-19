// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Matières
  await prisma.subject.createMany({
    data: [
      { key: 'informatique', title: 'Informatique', emoji: '💻', desc: 'Logique, web et algorithmes', order: 1 },
      { key: 'maths',        title: 'Mathématiques', emoji: '🧮', desc: 'Nombres & raisonnement',   order: 2 },
      { key: 'islamiques',   title: 'Sciences islamiques', emoji: '📖', desc: 'Croyance, adab, fiqh', order: 3 },
    ],
    skipDuplicates: true,
  });

  // Tranches d’âge
  await prisma.ageGroup.createMany({
    data: [
      { key: '3-6',   title: '3–6 ans',   minAge: 3,  maxAge: 6,  order: 1 },
      { key: '7-10',  title: '7–10 ans',  minAge: 7,  maxAge: 10, order: 2 },
      { key: '11-16', title: '11–16 ans', minAge: 11, maxAge: 16, order: 3 },
    ],
    skipDuplicates: true,
  });

  // Une leçon + quiz de démo
  const subj = await prisma.subject.findUnique({ where: { key: 'informatique' } });
  const age  = await prisma.ageGroup.findUnique({ where: { key: '7-10' } });

  if (subj && age) {
    const lesson = await prisma.lesson.upsert({
      where: { slug: 'html-balises-base' },
      update: {},
      create: {
        slug: 'html-balises-base',
        title: 'HTML — balises de base',
        summary: 'Découvrir <h1>, <p>, <a>, <ul>/<li> et créer une mini page.',
        minutes: 7,
        subjectId: subj.id,
        ageGroupId: age.id,
        published: true,
        body: { type: 'doc', content: [] },
      },
    });

    await prisma.quiz.upsert({
      where: { lessonId: lesson.id },
      update: {},
      create: {
        lessonId: lesson.id,
        questions: {
          create: [
            {
              order: 1,
              text: 'La balise pour un lien est…',
              options: {
                create: [
                  { order: 1, text: '<a>',   ok: true  },
                  { order: 2, text: '<link>', ok: false },
                  { order: 3, text: '<href>', ok: false },
                ],
              },
            },
          ],
        },
      },
    });
  }
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
