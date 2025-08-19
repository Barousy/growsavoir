// src/app/api/health/db/route.ts
import { NextResponse, type NextRequest } from 'next/server'
// Si tu utilises Prisma, adapte l’import :
// import { prisma } from '@/lib/prisma'

export async function GET(_req: NextRequest) {
  try {
    // Si tu as Prisma :
    // await prisma.$queryRaw`SELECT 1`;

    // Sinon, remplace par la vérification que tu fais réellement.
    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
