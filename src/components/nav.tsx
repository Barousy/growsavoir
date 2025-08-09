
import { Input } from "@/components/ui/Input";
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
          {(["ar","en","fr","islam","it","math","science","history"] as CategoryId[]).map(id =>
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
