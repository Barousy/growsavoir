'use client';
import { useState } from 'react';
import LessonCard from './ui/LessonCard';

type LessonLite = {
  id: string;
  title: string;
  description: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isCompleted?: boolean;
  isLocked?: boolean;
  emoji: string;
  color: string;
};

interface LessonGridProps {
  lessons: LessonLite[];
  userIsPremium?: boolean;
  hrefPrefix?: string;
}

export default function LessonGrid({
  lessons,
  userIsPremium = false,
  hrefPrefix = '/lesson',
}: LessonGridProps) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const handleLessonStart = (lessonId: string) => {
    console.log(`Démarrage de la leçon: ${lessonId}`);
  };

  if (!lessons?.length) {
    return <p className="text-neutral-500">Aucune leçon pour le moment.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          id={lesson.id}
          title={lesson.title}
          description={lesson.description}
          duration={lesson.duration}
          difficulty={lesson.difficulty}
          isCompleted={completedLessons.includes(lesson.id)}
          isLocked={lesson.isLocked ?? false}
          emoji={lesson.emoji}
          color={lesson.color}
          onStart={() => handleLessonStart(lesson.id)}
        />
      ))}
    </div>
  );
}