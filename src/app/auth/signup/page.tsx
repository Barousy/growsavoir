
'use client'
import { useState } from 'react'
export default function SignUp() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [name, setName] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('...')
    const res = await fetch('/api/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, name }) })
    setStatus(res.ok ? 'Compte créé. Vous pouvez vous connecter.' : 'Erreur.')
  }
  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Créer un compte</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full border rounded px-3 py-2" placeholder="Nom" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full rounded bg-black text-white py-2">Créer</button>
      </form>
      {status && <p className="text-sm opacity-80">{status}</p>}
    </div>
  )
}
