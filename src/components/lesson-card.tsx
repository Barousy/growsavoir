// src/components/lesson-card.tsx
import type { Lesson } from "@/lib/data";

function LessonCard({
  lesson,
  categoryLabel,
}: {
  lesson: Lesson;
  categoryLabel: string;
}) {
  return (
    <article
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        padding: 12,
        background: "#fff",
      }}
    >
      {/* Catégorie */}
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>
        {categoryLabel}
      </div>

      {/* Titre */}
      <h3 style={{ fontSize: 16, margin: "4px 0 6px" }}>
        {lesson.title}
      </h3>

      {/* Infos */}
      <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>
        {lesson.ageMin}–{lesson.ageMax} ans • {lesson.durationMin} min • UI:{" "}
        {lesson.lang.toUpperCase()} • {lesson.level}
      </div>

      {/* Description */}
      <p style={{ fontSize: 14 }}>
        {lesson.description}
      </p>
    </article>
  );
}

export default LessonCard;
