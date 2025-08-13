
// src/app/layout.tsx (début de fichier)
import '../styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import getRequestConfig from '@/i18n/request'
import { ReactNode } from 'react'

// ...le reste inchangé
import { getLocale } from 'next-intl/server'
import Link from 'next/link'

export const metadata = { title: 'Académie', description: 'Site éducatif' }

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale()
  const { messages } = await getRequestConfig({ locale } as any)
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-dvh antialiased bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
        <NextIntlClientProvider messages={messages}>
          <header className="border-b border-neutral-200/50 dark:border-neutral-800">
            <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
              <Link href="/" className="font-semibold">Académie</Link>
              <Link href="/courses">Cours</Link>
              <div className="ml-auto flex items-center gap-3 text-sm">
                <Link href="/auth/signin">Se connecter</Link>
                <Link href="/admin" className="underline/20 hover:underline">Admin</Link>
              </div>
            </nav>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
          <footer className="border-t py-6 text-xs opacity-70 text-center">© {new Date().getFullYear()} Académie</footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
