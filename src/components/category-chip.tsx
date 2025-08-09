
import { Badge } from "@/components/ui/Badge";
import type { CategoryId } from "@/lib/data";

const LABELS: Record<CategoryId,string> = {
  ar: "Arabe",
  en: "Anglais",
  fr: "Français",
  islam: "Éducation islamique",
  it: "Informatique",
  math: "Maths",
  science: "Sciences",
  history: "Histoire de l'islam",
};

export function label(id: CategoryId){ return LABELS[id]; }

export function CategoryChip({ id, active, onClick }:{ id: CategoryId; active: boolean; onClick: () => void }){
  return (
    <button onClick={onClick} className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition ${active ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-900"}`}>
      <span>{LABELS[id]}</span>
    </button>
  );
}
