import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
