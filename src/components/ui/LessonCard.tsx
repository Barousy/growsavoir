'use client';

import { Clock, Star, Lock, Play, CheckCircle } from 'lucide-react';

interface LessonCardProps {

import Link from 'next/link';
import Locked from './Locked';

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
  onStart?: () => void;
}

export default function LessonCard({

  title,
  description,
  duration,
  difficulty,
  isCompleted = false,
  isLocked = false,
  emoji,
  color,
  onStart
}: LessonCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const difficultyLabels = {
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé'
  };

  return (
    <div
      className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 transform hover:-translate-y-1 ${
        isCompleted 
          ? 'border-green-200 bg-green-50' 
          : isLocked 
            ? 'border-slate-200 bg-slate-50' 
            : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl ${color}`}>
          {emoji}
        </div>
        
        <div className="flex items-center space-x-2">
          {isCompleted && (
            <CheckCircle className="w-6 h-6 text-green-500" />
          )}
          {isLocked && (
            <Lock className="w-6 h-6 text-slate-400" />
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4 line-clamp-2">{description}</p>

      {/* Meta information */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-slate-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {duration} min
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
            {difficultyLabels[difficulty]}
          </span>
        </div>
        
        {isCompleted && (
          <div className="flex items-center text-green-600">
            <Star className="w-4 h-4 mr-1 fill-current" />
            <span className="text-sm font-medium">Terminé</span>
=======
  lesson,
  userIsPremium = false,
  hrefPrefix = '/lesson',
}: {
  lesson: LessonLite;
  userIsPremium?: boolean;
  hrefPrefix?: string;
}) {
  const locked = lesson.premium && !userIsPremium;
  const href = locked ? '/upgrade' : `${hrefPrefix}/${lesson.slug}`;

  return (
    <div className="rounded-2xl border p-4 hover:shadow transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{lesson.title}</h3>
          {lesson.desc && <p className="text-sm opacity-80">{lesson.desc}</p>}
          <div className="mt-2 text-xs opacity-70 flex items-center gap-2">
            {lesson.minutes ? <span>{lesson.minutes} min</span> : null}
            {lesson.premium ? <span>• Premium</span> : null}

          </div>
        </div>
        <Link
          href={href}
          className="shrink-0 inline-flex items-center rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50"
        >
          {locked ? 'Débloquer' : 'Ouvrir'}
        </Link>
      </div>


      {/* Action button */}
      <button
        onClick={onStart}
        disabled={isLocked}
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
          isLocked
            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
            : isCompleted
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isLocked ? (
          <>
            <Lock className="w-4 h-4 mr-2" />
            Débloquer
          </>
        ) : isCompleted ? (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Réviser
          </>
        ) : (
          <>
            <Play className="w-4 h-4 mr-2" />
            Commencer
          </>
        )}
      </button>

      {/* Progress indicator */}
      {isCompleted && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        </div>
      )}

      {locked && <div className="mt-4"><Locked /></div>}

    </div>
  );
}