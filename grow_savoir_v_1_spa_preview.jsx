// GrowSavoir — Next.js App Router (MVP)
// -------------------------------------------------
// This canvas includes a complete project scaffold you can paste into a repo.
// Stack: Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui + framer-motion + lucide-react
// Features: Category filters, age bands, search, quiz modal, basic parental lock (PIN, localStorage),
//           content store (64 demo lessons generated), lightweight Admin (CSV import to localStorage).
// Deployment: Vercel (recommended) with GoDaddy domain, or Node build on your own host.

/*
FILE TREE
.
├─ package.json
├─ next.config.mjs
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ .env.example
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx               // Home: catalog + filters + viewer
│  │  ├─ admin/page.tsx         // Minimal admin (PIN): add/edit/import CSV (local)
│  │  └─ api/revalidate/route.ts // Hook for revalidation (future CMS)
│  ├─ components/
│  │  ├─ lesson-card.tsx
│  │  ├─ content-viewer.tsx
│  │  ├─ quiz-item.tsx
│  │  ├─ category-chip.tsx
│  │  ├─ nav.tsx
│  │  └─ ui/* (shadcn)
│  └─ lib/
│     ├─ data.ts                // lesson types + generator for 64 demo lessons
│     ├─ parental.ts            // simple parental control (PIN + allowed categories)
│     └─ utils.ts               // helpers
└─ public/
   └─ logo.svg
*/

// -----------------------------
// package.json
// -----------------------------
{
  "name": "growsavoir",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "postinstall": "next telemetry disable || true"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "framer-motion": "12.13.0",
    "lucide-react": "0.469.0",
    "class-variance-authority": "0.7.0",
    "clsx": "2.1.1",
    "tailwind-merge": "2.5.2"
  },
  "devDependencies": {
    "@types/node": "20.14.10",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "10.4.20",
    "postcss": "8.4.41",
    "tailwindcss": "3.4.10",
    "typescript": "5.5.4"
  }
}

// -----------------------------
// next.config.mjs
// -----------------------------
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
};
export default nextConfig;

// -----------------------------
// postcss.config.mjs
// -----------------------------
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// -----------------------------
// tailwind.config.ts
// -----------------------------
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: { }
    },
  },
  plugins: [],
} satisfies Config;

// -----------------------------
// tsconfig.json
// -----------------------------
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "resolveJsonModule": true,
    "allowJs": false,
    "noEmit": true,
    "strict": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "src/**/*"],
  "exclude": ["node_modules"]
}

// -----------------------------
// .env.example
// -----------------------------
# Parental/Admin PIN (change in production)
NEXT_PUBLIC_PARENT_PIN=2748

// -----------------------------
// src/app/globals.css
// -----------------------------
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: light dark; }

// -----------------------------
// src/lib/utils.ts
// -----------------------------
export function cn(...xs: (string | false | null | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

// -----------------------------
// src/lib/data.ts (types + generator for 64 demo lessons)
// -----------------------------
export type CategoryId = "ar" | "en" | "fr" | "islam" | "it" | "math" | "science" | "history";
export type LessonLevel = "Débutant" | "Intermédiaire" | "Avancé";
export type LessonContent =
  | { type: "text"; body: string }
  | { type: "activity"; body: string }
  | { type: "quiz"; body: string; quiz: { q: string; options: string[]; answerIndex: number; explanation: string }[] };

export type Lesson = {
  id: string;
  title: string;
  category: CategoryId;
  ageMin: number;
  ageMax: number;
  lang: "ar" | "en" | "fr";
  durationMin: number;
  level: LessonLevel;
  description: string;
  content: LessonContent;
};

const BASE: Lesson[] = [
  { id: "ar-alphabet-1", title: "Alphabet arabe – أ à ث", category: "ar", ageMin: 3, ageMax: 8, lang: "fr", durationMin: 6, level: "Débutant", description: "Prononciation correcte et tracés.", content: { type: "activity", body: "Prononce أ ب ت ث. Exercice: trace chaque lettre 3 fois." } },
  { id: "en-phonics-1", title: "English Phonics: A E I O U", category: "en", ageMin: 5, ageMax: 10, lang: "en", durationMin: 7, level: "Débutant", description: "Short vowels with simple words.", content: { type: "quiz", body: "Choose the right vowel sound.", quiz: [{ q: "c_t (a/e/i/o/u)?", options: ["a","e","i","o","u"], answerIndex: 0, explanation: "cat" }] } },
  { id: "fr-etre-1", title: "Français – Verbe Être (présent)", category: "fr", ageMin: 7, ageMax: 12, lang: "fr", durationMin: 8, level: "Débutant", description: "Je suis, tu es… + mini-quiz.", content: { type: "quiz", body: "Complète le verbe.", quiz: [{ q: "Je ___ content.", options: ["es","suis","est"], answerIndex: 1, explanation: "je suis" }] } },
  { id: "islam-piliers-1", title: "Les 5 piliers de l'Islam (initiation)", category: "islam", ageMin: 6, ageMax: 14, lang: "fr", durationMin: 10, level: "Débutant", description: "Introduction adaptée.", content: { type: "text", body: "Chahada, Salat, Zakat, Sawm, Hajj (si possible)." } },
  { id: "it-bases-1", title: "Informatique – Souris & Clavier", category: "it", ageMin: 6, ageMax: 12, lang: "fr", durationMin: 6, level: "Débutant", description: "Clic gauche/droit, touches utiles.", content: { type: "activity", body: "Écris ton prénom puis enregistre." } },
  { id: "math-add-20", title: "Additions jusqu'à 20", category: "math", ageMin: 5, ageMax: 9, lang: "fr", durationMin: 6, level: "Débutant", description: "Décomposition et calcul mental.", content: { type: "quiz", body: "Calcule.", quiz: [{ q: "7+5?", options: ["10","11","12"], answerIndex: 2, explanation: "12" }] } },
  { id: "science-water-1", title: "Le cycle de l'eau (simplifié)", category: "science", ageMin: 7, ageMax: 12, lang: "fr", durationMin: 7, level: "Débutant", description: "Évaporation, condensation, pluie.", content: { type: "text", body: "Le soleil chauffe l'eau, nuages, pluie…" } },
  { id: "history-seerah-1", title: "Sîrah – Grandes étapes", category: "history", ageMin: 8, ageMax: 16, lang: "fr", durationMin: 12, level: "Débutant", description: "Naissance, Révélation, Hijra…", content: { type: "text", body: "Récit adapté aux enfants, miséricorde et justice." } }
];

const CATS: CategoryId[] = ["ar","en","fr","islam","it","math","science","history"];

export function generateLessons(): Lesson[] {
  const variants = 8; // 8 bases x 8 categories variants = 64 approx
  const out: Lesson[] = [];
  for (let i = 0; i < BASE.length; i++) out.push(BASE[i]);
  let idx = 0;
  while (out.length < 64) {
    const base = BASE[idx % BASE.length];
    const cat = CATS[(idx * 3) % CATS.length];
    const n = Math.floor(idx / BASE.length) + 2;
    const id = `${cat}-${base.id}-${n}`.replaceAll("--", "-");
    const title = `${base.title} – Série ${n}`;
    const ageMin = Math.max(3, base.ageMin - ((n%3)===0?0:0));
    const ageMax = Math.min(16, base.ageMax + (n%3));
    const durationMin = base.durationMin + (n%2);
    const level: LessonLevel = (n%3===0?"Intermédiaire": base.level);
    const content: LessonContent = base.content.type === "quiz"
      ? { ...base.content, quiz: base.content.quiz }
      : { ...base.content } as LessonContent;
    out.push({ ...base, id, title, category: cat, ageMin, ageMax, durationMin, level, content });
    idx++;
  }
  return out;
}

// -----------------------------
// src/lib/parental.ts (simple localStorage-based)
// -----------------------------
export type ParentalState = { enabled: boolean; pin: string; allowed: Record<CategoryId, boolean>; maxAge: number };
const KEY = "growsavoir_parental";

export function loadParental(): ParentalState {
  if (typeof window === "undefined") return { enabled: false, pin: "", allowed: { ar:true,en:true,fr:true,islam:true,it:true,math:true,science:true,history:true }, maxAge: 16 };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { enabled: false, pin: process.env.NEXT_PUBLIC_PARENT_PIN ?? "2748", allowed: { ar:true,en:true,fr:true,islam:true,it:true,math:true,science:true,history:true }, maxAge: 16 };
}
export function saveParental(s: ParentalState) {
  if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(s));
}

// -----------------------------
// src/components/ui primitives (very small subset)
// -----------------------------
// Button.tsx
export function Button({ className = "", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"outline"|"ghost"; size?: "sm"|"md"|"icon" }) {
  const { variant = "default", size = "md" } = props as any;
  const v = variant === "outline" ? "border border-gray-300 dark:border-gray-700 bg-transparent" : variant === "ghost" ? "bg-transparent" : "bg-blue-600 text-white hover:bg-blue-700";
  const s = size === "icon" ? "p-2 rounded-2xl" : size === "sm" ? "px-3 py-1.5 rounded-xl" : "px-4 py-2 rounded-xl";
  return <button {...props} className={cn("transition", v, s, className)}>{children}</button>;
}

// Badge.tsx
export function Badge({ children, variant = "secondary" }: { children: React.ReactNode; variant?: "secondary"|"outline"|"default" }) {
  const m = variant === "outline" ? "border border-gray-300 dark:border-gray-700" : variant === "default" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800";
  return <span className={cn("inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg", m)}>{children}</span>;
}

// Input.tsx
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) { return <input {...props} className={cn("border rounded-xl px-3 py-2 bg-transparent", props.className)} /> }

// Card.tsx
export function Card(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={cn("border rounded-2xl", props.className)} /> }
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={cn("p-4 border-b", props.className)} /> }
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 {...props} className={cn("font-semibold", props.className)} /> }
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={cn("p-4", props.className)} /> }

// -----------------------------
// src/components/category-chip.tsx
// -----------------------------
import { Globe2, Book, Calculator, History, Cpu, Languages } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
const ICONS = { ar: Languages, en: Globe2, fr: Book, islam: History, it: Cpu, math: Calculator, science: Globe2, history: History } as const;
export function CategoryChip({ id, active, onClick }: { id: import("@/lib/data").CategoryId; active: boolean; onClick: () => void }) {
  const Icon = ICONS[id] ?? Globe2;
  return <button onClick={onClick} className={cn("flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition", active?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-900")}> <Icon className="h-4 w-4"/> <span>{label(id)}</span></button>;
}
export function label(id: import("@/lib/data").CategoryId) { return ({ ar:"Arabe", en:"Anglais", fr:"Français", islam:"Éducation islamique", it:"Informatique", math:"Maths", science:"Sciences", history:"Histoire de l'islam" })[id]; }

// -----------------------------
// src/components/quiz-item.tsx
// -----------------------------
import { useState } from "react";
import type { LessonContent } from "@/lib/data";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/*";
export function QuizItem({ q, idx }: { q: Extract<LessonContent,{type:"quiz"}>["quiz"][number]; idx: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const correct = selected === q.answerIndex;
  return (
    <Card className="rounded-xl">
      <CardHeader className="pb-2"><CardTitle className="text-base">Q{idx + 1}. {q.q}</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {q.options.map((opt, i) => (
            <Button key={i} variant={selected===i?"default":"outline"} onClick={()=>{setSelected(i); setShow(true);}} className="justify-start">{opt}</Button>
          ))}
        </div>
        {show && (
          <div className={cn("text-sm p-3 rounded-md", correct?"bg-green-50 dark:bg-green-900/30":"bg-red-50 dark:bg-red-900/30")}> {correct?"✅ Bonne réponse!":"❌ Mauvaise réponse."} <span className="opacity-70"> {q.explanation}</span></div>
        )}
      </CardContent>
    </Card>
  );
}

// -----------------------------
// src/components/content-viewer.tsx
// -----------------------------
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/*";
import type { Lesson } from "@/lib/data";
export function ContentViewer({ lesson, onClose }: { lesson: Lesson | null; onClose: () => void }) {
  if (!lesson) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-2xl w-full bg-white dark:bg-black rounded-2xl overflow-hidden" onClick={(e)=>e.stopPropagation()}>
        <CardHeader>
          <CardTitle className="text-xl">{lesson.title}</CardTitle>
          <div className="mt-2 text-xs flex flex-wrap gap-2 opacity-70">
            <Badge variant="outline">{lesson.ageMin}–{lesson.ageMax} ans</Badge>
            <Badge variant="outline">{lesson.durationMin} min</Badge>
            <Badge variant="outline">{lesson.level}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {lesson.content.type !== "quiz" && (<div className="whitespace-pre-wrap leading-relaxed text-sm">{lesson.content.body}</div>)}
          {lesson.content.type === "quiz" && ( <div className="space-y-4"><p className="text-sm opacity-70">{lesson.content.body}</p>{lesson.content.quiz.map((q,i)=>(<QuizItem key={i} q={q} idx={i}/>))}</div> )}
          <div className="pt-2 border-t text-xs opacity-70">Contenu conforme: bienveillance, honnêteté, respect des parents, pudeur.</div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>Fermer</Button>
          </div>
        </CardContent>
      </div>
    </div>
  );
}

// -----------------------------
// src/components/lesson-card.tsx
// -----------------------------
import { label } from "@/components/category-chip";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/*";
import type { Lesson } from "@/lib/data";
export function LessonCard({ lesson, onOpen }: { lesson: Lesson; onOpen: (l: Lesson) => void }) {
  return (
    <Card className="rounded-2xl hover:shadow-md transition cursor-pointer" onClick={()=>onOpen(lesson)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{label(lesson.category)}</Badge>
          <Badge>{lesson.level}</Badge>
        </div>
        <CardTitle className="mt-2 text-lg leading-tight">{lesson.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-sm opacity-80">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="outline">{lesson.ageMin}–{lesson.ageMax} ans</Badge>
          <Badge variant="outline">{lesson.durationMin} min</Badge>
          <Badge variant="outline">UI: {lesson.lang.toUpperCase()}</Badge>
        </div>
        <p>{lesson.description}</p>
      </CardContent>
    </Card>
  );
}

// -----------------------------
// src/components/nav.tsx
// -----------------------------
import { Input } from "@/components/ui/Input";
import { Button, Badge } from "@/components/ui/*";
import { CategoryChip } from "@/components/category-chip";
import type { CategoryId } from "@/lib/data";
export function Nav({ query, setQuery, category, setCategory, ageBand, setAgeBand }:{
  query: string; setQuery: (s: string)=>void;
  category: "all" | CategoryId; setCategory: (c: "all"|CategoryId)=>void;
  ageBand: "all" | "3-6" | "7-10" | "11-16"; setAgeBand: (a: any)=>void;
}){
  return (
    <div className="border-b bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container py-3 flex flex-wrap items-center gap-3">
        <div className="relative">
          <Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Rechercher une leçon…" className="pl-3 w-72" />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {(["ar","en","fr","islam","it","math","science","history"] as CategoryId[]).map(id=>
            <CategoryChip key={id} id={id} active={category===id} onClick={()=>setCategory(category===id?"all":id)} />
          )}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <select className="border rounded-xl px-3 py-2" value={ageBand} onChange={(e)=>setAgeBand(e.target.value)}>
            <option value="all">Tous âges</option>
            <option value="3-6">3–6 ans</option>
            <option value="7-10">7–10 ans</option>
            <option value="11-16">11–16 ans</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// -----------------------------
// src/app/layout.tsx
// -----------------------------
import "./globals.css";
import { ReactNode, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export const metadata = { title: "GrowSavoir", description: "Cours conformes aux valeurs de l'Islam (3–16 ans)" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-white dark:bg-black text-black dark:text-white")}>{children}</body>
    </html>
  );
}

// -----------------------------
// src/app/page.tsx (Home)
// -----------------------------
"use client";
import { useMemo, useState } from "react";
import { generateLessons, type Lesson, type CategoryId } from "@/lib/data";
import { Nav } from "@/components/nav";
import { LessonCard } from "@/components/lesson-card";
import { ContentViewer } from "@/components/content-viewer";

export default function HomePage(){
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | CategoryId>("all");
  const [ageBand, setAgeBand] = useState<"all"|"3-6"|"7-10"|"11-16">("all");
  const [openLesson, setOpenLesson] = useState<Lesson|null>(null);
  const lessons = useMemo(()=>generateLessons(), []);

  const filtered = useMemo(()=>lessons.filter(l=>{
    const q = query.trim().toLowerCase();
    const matchQuery = !q || l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q);
    const matchCat = category === "all" || l.category === category;
    const matchAge = ageBand === "all" || (ageBand==="3-6" && l.ageMin<=6 && l.ageMax>=3) || (ageBand==="7-10" && l.ageMin<=10 && l.ageMax>=7) || (ageBand==="11-16" && l.ageMin<=16 && l.ageMax>=11);
    return matchQuery && matchCat && matchAge;
  }), [lessons, query, category, ageBand]);

  return (
    <div className="min-h-screen">
      <header className="border-b sticky top-0 bg-white/80 dark:bg-black/60 backdrop-blur z-20">
        <div className="container py-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">📚</div>
          <h1 className="text-xl font-bold tracking-tight">GrowSavoir</h1>
          <div className="ml-auto text-xs opacity-70">© {new Date().getFullYear()} – Contenus conformes</div>
        </div>
        <Nav query={query} setQuery={setQuery} category={category} setCategory={setCategory} ageBand={ageBand} setAgeBand={setAgeBand} />
      </header>

      <main className="container py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((l) => (
            <div key={l.id}>
              <LessonCard lesson={l} onOpen={setOpenLesson} />
            </div>
          ))}
        </div>
        {filtered.length === 0 && (<div className="text-center opacity-70 py-20">Aucun résultat. Ajuste la recherche ou les filtres.</div>)}
      </main>

      <footer className="border-t">
        <div className="container py-6 text-xs opacity-70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>Charte éducative: bienveillance • honnêteté • respect des parents • pudeur • pas de pub.</p>
          <p>Contact: support@growsavoir.com</p>
        </div>
      </footer>

      <ContentViewer lesson={openLesson} onClose={()=>setOpenLesson(null)} />
    </div>
  );
}

// -----------------------------
// src/app/admin/page.tsx (Local-only admin prototype)
// -----------------------------
"use client";
import { useMemo, useState } from "react";
import { generateLessons, type Lesson } from "@/lib/data";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/*";

export default function Admin(){
  const [pin, setPin] = useState("");
  const ok = pin === (process.env.NEXT_PUBLIC_PARENT_PIN ?? "2748");
  const [csv, setCsv] = useState("");
  const [local, setLocal] = useState<Lesson[] | null>(null);
  const lessons = useMemo(()=> local ?? generateLessons(), [local]);

  function importCsv(){
    // very small CSV parser: id,title,category,ageMin,ageMax,lang,durationMin,level,description,body
    const rows = csv.split(/?
/).filter(Boolean);
    const out: Lesson[] = [];
    for(const line of rows){
      const cols = line.split(",");
      if(cols.length < 10) continue;
      const [id,title,category,ageMin,ageMax,lang,durationMin,level,description,body] = cols;
      out.push({ id, title, category: category as any, ageMin: +ageMin, ageMax: +ageMax, lang: lang as any, durationMin: +durationMin, level: level as any, description, content: { type: "text", body } });
    }
    setLocal(out);
    if (typeof window !== "undefined") localStorage.setItem("growsavoir_custom", JSON.stringify(out));
  }

  return (
    <div className="container py-8 space-y-4">
      <h1 className="text-2xl font-semibold">Admin (prototype local)</h1>
      {!ok ? (
        <div className="max-w-sm space-y-2">
          <label className="text-sm opacity-70">PIN parent</label>
          <Input placeholder="••••" value={pin} onChange={(e)=>setPin(e.target.value)} />
          <p className="text-xs opacity-60">Modifie NEXT_PUBLIC_PARENT_PIN dans .env pour changer.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <textarea className="w-full h-40 border rounded-xl p-3" placeholder="Colle un CSV: id,title,category,ageMin,ageMax,lang,durationMin,level,description,body" value={csv} onChange={(e)=>setCsv(e.target.value)} />
          <Button onClick={importCsv}>Importer CSV en local</Button>
          <div className="text-xs opacity-70">Les données sont stockées dans localStorage (prototype). Pour un vrai back-office, connecter une base (Planetscale/Postgres) ou Headless CMS.</div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons.map(l=> <div key={l.id} className="border rounded-xl p-3"><div className="font-medium">{l.title}</div><div className="text-xs opacity-70">{l.category} • {l.ageMin}-{l.ageMax} ans • {l.level}</div></div>)}
          </div>
        </div>
      )}
    </div>
  );
}

// -----------------------------
// src/app/api/revalidate/route.ts (placeholder)
// -----------------------------
export async function POST(){ return new Response("ok") }

// -----------------------------
// public/logo.svg
// -----------------------------
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="10" fill="#2563eb"/><path d="M20 24h24M20 32h24M20 40h16" stroke="white" stroke-width="4" stroke-linecap="round"/></svg>
