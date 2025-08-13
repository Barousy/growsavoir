export const dynamic = 'force-dynamic';

// ...le reste du fichier

'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const onSubmit = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' }) }
  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Se connecter</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full rounded bg-black text-white py-2 disabled:opacity-50" disabled={loading}>{loading? '...' : 'Se connecter'}</button>
      </form>
      <p className="text-sm">Pas de compte ? <a className="underline" href="/auth/signup">Créer un compte</a></p>
    </div>
  )
}
