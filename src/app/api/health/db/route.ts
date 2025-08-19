import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db'; // ou '../../../../../lib/db' si tu n'as pas d'alias @

/** Évite la mise en cache côté Next pour cet endpoint */
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [subjects, lessons] = await Promise.all([
      prisma.subject.count(),
      prisma.lesson.count(),
    ]);

    return NextResponse.json({ ok: true, subjects, lessons });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? 'db error' },
      { status: 500 }
    );
  }
}
