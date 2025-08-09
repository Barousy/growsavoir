
import { label } from "@/components/category-chip";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { Lesson } from "@/lib/data";

export function LessonCard({ lesson, onOpen }: { lesson: Lesson; onOpen: (l: Lesson) => void }){
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
