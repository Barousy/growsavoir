'use client';
import { Clock, Star, Lock, Play, CheckCircle } from 'lucide-react';

interface LessonCardProps {
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
    advanced: 'bg-red-100 text-red-800',
  };

  const statusIcon = isCompleted ? (
    <CheckCircle className="w-5 h-5 text-green-500" />
  ) : isLocked ? (
    <Lock className="w-5 h-5 text-gray-400" />
  ) : (
    <Play className="w-5 h-5 text-blue-500" />
  );

  const statusText = isCompleted ? 'Terminée' : isLocked ? 'Verrouillée' : 'Commencer';
  const buttonClass = isLocked
    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
    : 'bg-blue-500 text-white hover:bg-blue-600';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col">
      <div className={`p-4 ${color} flex items-center justify-center text-4xl h-24`}>
        {emoji}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" /> {duration} min
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
            {difficulty === 'beginner' ? 'Débutant' : difficulty === 'intermediate' ? 'Intermédiaire' : 'Avancé'}
          </span>
        </div>
        <button
          onClick={onStart}
          disabled={isLocked}
          className={`mt-auto w-full py-2 px-4 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200 ${buttonClass}`}
        >
          {statusIcon}
          <span className="ml-2">{statusText}</span>
        </button>
      </div>
    </div>
  );
}