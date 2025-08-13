
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'

async function createCourse(formData: FormData) {
  'use server'
  const session = await auth()
  if (session?.user.role !== 'ADMIN') redirect('/auth/signin')
  const data = {
    subject: String(formData.get('subject')||''),
    level: String(formData.get('level')||''),
    title: String(formData.get('title')||''),
    slug: String(formData.get('slug')||''),
    language: String(formData.get('language')||'fr'),
    summary: String(formData.get('summary')||''),
    isPublished: Boolean(formData.get('isPublished'))
  }
  await prisma.course.create({ data })
  redirect('/admin')
}

async function createLesson(formData: FormData) {
  'use server'
  const session = await auth()
  if (session?.user.role !== 'ADMIN') redirect('/auth/signin')
  const courseId = String(formData.get('courseId')||'')
  const order = Number(formData.get('order')||1)
  const title = String(formData.get('title')||'')
  const slug = String(formData.get('slug')||'')
  const content = { sections: [{ type: 'text', html: String(formData.get('html')||'') }] }
  await prisma.lesson.create({ data: { courseId, order, title, slug, content } })
  redirect('/admin')
}

export default async function AdminPage() {
  const session = await auth()
  if (!session?.user) redirect('/auth/signin')
  if (session.user.role !== 'ADMIN') redirect('/')
  const courses = await prisma.course.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <section className="grid md:grid-cols-2 gap-8">
        <form action={createCourse} className="space-y-2 p-4 border rounded">
          <h2 className="font-semibold">Créer un cours</h2>
          <input className="w-full border rounded px-3 py-2" name="subject" placeholder="Sujet (ex: arabe)" />
          <input className="w-full border rounded px-3 py-2" name="level" placeholder="Niveau (ex: CP)" />
          <input className="w-full border rounded px-3 py-2" name="title" placeholder="Titre" />
          <input className="w-full border rounded px-3 py-2" name="slug" placeholder="slug-unique" />
          <input className="w-full border rounded px-3 py-2" name="language" placeholder="fr/en/ar" />
          <textarea className="w-full border rounded px-3 py-2" name="summary" placeholder="Résumé" />
          <label className="inline-flex items-center gap-2"><input type="checkbox" name="isPublished" defaultChecked /> Publier</label>
          <button className="rounded bg-black text-white px-4 py-2">Créer</button>
        </form>
        <form action={createLesson} className="space-y-2 p-4 border rounded">
          <h2 className="font-semibold">Créer une leçon</h2>
          <select className="w-full border rounded px-3 py-2" name="courseId">
            {courses.map(c => (<option key={c.id} value={c.id}>{c.title}</option>))}
          </select>
          <input className="w-full border rounded px-3 py-2" name="order" type="number" placeholder="Ordre" defaultValue={1} />
          <input className="w-full border rounded px-3 py-2" name="title" placeholder="Titre" />
          <input className="w-full border rounded px-3 py-2" name="slug" placeholder="slug-unique" />
          <textarea className="w-full border rounded px-3 py-2" name="html" placeholder="HTML de la leçon" />
          <button className="rounded bg-black text-white px-4 py-2">Créer</button>
        </form>
      </section>
    </div>
  )
}
