// prisma/seed.test.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const subject = await prisma.subject.upsert({
    where: { slug: 'langue-arabe' },
    update: {},
    create: { slug: 'langue-arabe', title: 'Langue arabe', desc: 'Test seed', order: 1 },
  })

  const lesson = await prisma.lesson.upsert({
    where: { slug: 'arabe-intro' },
    update: {},
    create: {
      slug: 'arabe-intro',
      title: 'Introduction à la langue arabe',
      desc: 'Première leçon de test',
      order: 1,
      subjectId: subject.id,
      content: 'Contenu de test',
    },
  })

  console.log('OK:', { subject: subject.slug, lesson: lesson.slug })
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
