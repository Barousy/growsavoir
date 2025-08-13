
"use client";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { Lesson } from "@/lib/data";
import QuizItem from "@/components/quiz-item";

export function ContentViewer({ lesson, onClose }: { lesson: Lesson | null; onClose: () => void }){
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
          {lesson.content.type === "quiz" && (
            <div className="space-y-4">
              <p className="text-sm opacity-70">{lesson.content?.body}</p>

                  {(lesson.content?.quiz ?? []).map((q, i) => (
                   <QuizItem key={i} q={q} idx={i} />
              ))}

            </div>
          )}
          <div className="pt-2 border-t text-xs opacity-70">Contenu conforme: bienveillance, honnêteté, respect des parents, pudeur.</div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>Fermer</Button>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
