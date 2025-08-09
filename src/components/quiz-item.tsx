
"use client";
import { useState } from "react";
import type { LessonContent } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

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
          <div className={`text-sm p-3 rounded-md ${correct?"bg-green-50 dark:bg-green-900/30":"bg-red-50 dark:bg-red-900/30"}`}>
            {correct?"✅ Bonne réponse!":"❌ Mauvaise réponse."} <span className="opacity-70"> {q.explanation}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
