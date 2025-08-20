import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.subject.upsert({
    where: { slug: "anglais" },
    update: {},
    create: {
      slug: "anglais",
      title: "Anglais",
      desc: "Langue anglaise (bases, vocabulaire, prononciation)",
      order: 3,
    },
  });
  console.log("✅ Subject 'Anglais' prêt");
}

main().finally(() => prisma.$disconnect());
