'use client';

import { useState } from 'react';
import type { QuizQuestion } from '@/data/quizzes';

type Props = {
  title?: string;
  questions: QuizQuestion[];
};

export default function MiniQuiz({ title = 'Mini-quiz', questions }: Props) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (!questions?.length) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
        <div className="text-sm text-slate-500">Aucun quiz pour cette leçon (encore 🙂)</div>
      </div>
    );
  }

  const q = questions[i];

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-extrabold">{title}</h3>
        {!done && (
          <span className="text-xs text-slate-500">
            Question {i + 1}/{questions.length}
          </span>
        )}
      </div>

      {!done ? (
        <div className="mt-4">
          <p className="font-semibold">{q.q}</p>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (opt.ok) setScore((s) => s + 1);
                  if (i + 1 >= questions.length) setDone(true);
                  else setI((n) => n + 1);
                }}
                className="rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {opt.t}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-2 text-center">
          <div className="text-6xl">🎉</div>
          <p className="mt-2 text-lg font-bold">
            Score&nbsp;: {score}/{questions.length}
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => {
                setI(0);
                setScore(0);
                setDone(false);
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700"
            >
              Rejouer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
