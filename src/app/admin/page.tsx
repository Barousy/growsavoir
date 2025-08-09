
"use client";
import { useMemo, useState, useEffect } from "react";
import { generateLessons, type Lesson } from "@/lib/data";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function Admin(){
  const [pin, setPin] = useState("");
  const ok = pin === (process.env.NEXT_PUBLIC_PARENT_PIN ?? "2748");
  const [csv, setCsv] = useState("");
  const [local, setLocal] = useState<Lesson[] | null>(null);
  const lessons = useMemo(()=> local ?? generateLessons(), [local]);

  useEffect(()=>{
    if (typeof window !== "undefined"){
      const raw = localStorage.getItem("growsavoir_custom");
      if (raw) setLocal(JSON.parse(raw));
    }
  }, []);

  function importCsv(){
    const rows = csv.split(/\r?\n/).filter(Boolean);
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
          <div className="text-xs opacity-70">Les données sont stockées dans localStorage (prototype). Pour la prod, connecter une base (Postgres) ou Headless CMS.</div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons.map(l=> <div key={l.id} className="border rounded-xl p-3"><div className="font-medium">{l.title}</div><div className="text-xs opacity-70">{l.category} • {l.ageMin}-{l.ageMax} ans • {l.level}</div></div>)}
          </div>
        </div>
      )}
    </div>
  );
}
