import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1) Récupère le subject
  const subject = await prisma.subject.findUnique({ where: { slug } });
  if (!subject) return notFound();

  // 2) Récupère les leçons liées à ce subject
  const lessons = await prisma.lesson.findMany({
    where: {
      skill: {
        subcategory: {
          category: { subjectId: subject.id },
        },
      },
    },
    include: { ageGroup: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-sm underline">← Retour</Link>
      </div>

      <header className="mb-6">
        <h1 className="mt-2 text-2xl md:text-3xl font-bold">{subject.title}</h1>
        {subject.desc && <p className="mt-1 text-muted-foreground">{subject.desc}</p>}
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {lessons.map((l: (typeof lessons)[number]) => (
          <article key={l.id} className="rounded-2xl border p-4">
            <h2 className="text-lg font-semibold">{l.title}</h2>
            {l.summary && <p className="text-sm text-muted-foreground">{l.summary}</p>}
            <div className="mt-2 flex gap-3 text-xs opacity-75">
              <span>{l.ageGroup?.title ?? "Âge"}</span>
              <span>•</span>
              <span>{l.minutes ?? 8} min</span>
            </div>
          </article>
        ))}

        {lessons.length === 0 && (
          <p className="text-sm text-muted-foreground">Aucune leçon publiée pour le moment.</p>
        )}
      </section>
    </main>
  );
}
