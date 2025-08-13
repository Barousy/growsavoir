
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/db'
import Credentials from 'next-auth/providers/credentials'
import type { NextAuthConfig } from 'next-auth'
import bcrypt from 'bcryptjs'

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'database' },
  providers: [
    Credentials({
      name: 'Email & Password',
      type: 'credentials',
      credentials: { email: { label: 'Email', type: 'email' }, password: { label: 'Password', type: 'password' } },
      async authorize(creds) {
        if (!creds?.email || !creds?.password) return null
        const user = await prisma.user.findUnique({ where: { email: creds.email as string } })
        if (!user?.passwordHash) return null
        const ok = await bcrypt.compare(creds.password as string, user.passwordHash)
        return ok ? user : null
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) { 
        (session.user as any).id = user.id; 
        (session.user as any).role = (user as any).role; 
        (session.user as any).locale = (user as any).locale 
      }
      return session
    },
  },
}
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
declare module 'next-auth' { interface Session { user: { id: string; role: string; locale: string; name?: string | null; email?: string | null; image?: string | null } } }
