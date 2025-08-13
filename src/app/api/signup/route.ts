
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
export async function POST(req: Request) {
  const { email, password, name } = await req.json()
  if (!email || !password) return NextResponse.json({ error: 'Missing' }, { status: 400 })
  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) return NextResponse.json({ error: 'Exists' }, { status: 409 })
  const passwordHash = await bcrypt.hash(password, 10)
  await prisma.user.create({ data: { email, name, passwordHash } })
  return NextResponse.json({ ok: true })
}
