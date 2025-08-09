
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
