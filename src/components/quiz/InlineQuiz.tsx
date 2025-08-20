'use client';
import { useMemo, useState } from 'react';

type QuizOption = { id: string; order: number; text: string; ok: boolean };
type QuizQuestion = { id: string; order: number; text: string; options: QuizOption[] };
type Quiz = { id: string; questions: QuizQuestion[] };

export default function InlineQuiz({ quiz, lessonSlug }: { quiz: Quiz; lessonSlug: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  const questions = useMemo(
    () => [...quiz.questions].sort((a, b) => a.order - b.order),
    [quiz.questions]
  );

  const onChoose = (qid: string, oid: string) =>
    setAnswers((prev) => ({ ...prev, [qid]: oid }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let okCount = 0;
    for (const q of questions) {
      const chosen = answers[q.id];
      const correct = q.options.find((o) => o.ok)?.id;
      if (chosen && correct && chosen === correct) okCount++;
    }
    const res = { score: okCount, total: questions.length };
    setResult(res);
    try {
      localStorage.setItem(`gs:quiz:${lessonSlug}`, JSON.stringify(res));
    } catch {}
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border p-4">
      {questions.map((q, idx) => (
        <div key={q.id} className="mb-5">
          <div className="font-medium mb-2">{idx + 1}. {q.text}</div>
          <div className="space-y-1">
            {[...q.options].sort((a, b) => a.order - b.order).map((o) => (
              <label key={o.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={o.id}
                  checked={answers[q.id] === o.id}
                  onChange={() => onChoose(q.id, o.id)}
                />
                <span>{o.text}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-slate-50"
      >
        Valider
      </button>

      {result && (
        <div className="mt-4">
          <div className="font-semibold">
            Score : {result.score} / {result.total}
          </div>
          <div className="text-sm opacity-80">
            {result.score === result.total
              ? 'Bravo ! 🏅'
              : 'Tu peux réessayer pour améliorer ton score.'}
          </div>
        </div>
      )}
    </form>
  );
}
