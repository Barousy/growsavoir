'use client';
import { useState } from 'react';
import { Clock, Star, Lock, Play, CheckCircle } from 'lucide-react';

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  isCompleted?: boolean;
  isLocked?: boolean;
  emoji: string;
  color: string;
  onStart?: () => void;
}

export default function LessonCard({
  id,
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

  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      case 'expert':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Débutant';
      case 'intermediate':
        return 'Intermédiaire';
      case 'advanced':
        return 'Avancé';
      case 'expert':
        return 'Expert';
      default:
        return 'Inconnu';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '🌱';
      case 'intermediate':
        return '🌿';
      case 'advanced':
        return '🌳';
      case 'expert':
        return '🏆';
      default:
        return '❓';
    }
  };

  const handleClick = () => {
    if (!isLocked && onStart) {
      onStart();
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
        isLocked
          ? 'cursor-not-allowed bg-slate-100 border-slate-200'
          : isCompleted
          ? 'cursor-pointer bg-green-50 border-green-200 hover:shadow-lg'
          : 'cursor-pointer bg-white border-slate-200 hover:shadow-lg hover:border-purple-300'
      } ${isHovered && !isLocked ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Header avec emoji et statut */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{emoji}</div>
          <div className="flex items-center space-x-2">
            {isCompleted && (
              <CheckCircle className="w-5 h-5 text-green-600" />
            )}
            {isLocked && <Lock className="w-5 h-5 text-slate-400" />}
          </div>
        </div>

        {/* Titre et description */}
        <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Métadonnées */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-slate-500">
            <Clock className="w-4 h-4 mr-1" />
            {duration} min
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm text-slate-600">{id}</span>
          </div>
        </div>

        {/* Badge de difficulté */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(
              difficulty
            )}`}
          >
            <span className="mr-1">{getDifficultyIcon(difficulty)}</span>
            {getDifficultyText(difficulty)}
          </span>

          {/* Bouton d'action */}
          {!isLocked && !isCompleted && (
            <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
              <Play className="w-4 h-4 mr-1" />
              Commencer
            </button>
          )}
          {isCompleted && (
            <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-green-700 bg-green-100 rounded-lg">
              <CheckCircle className="w-4 h-4 mr-1" />
              Terminé
            </span>
          )}
          {isLocked && (
            <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-slate-500 bg-slate-100 rounded-lg">
              <Lock className="w-4 h-4 mr-1" />
              Verrouillé
            </span>
          )}
        </div>
      </div>

      {/* Indicateur de progression */}
      {!isLocked && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
          <div
            className={`h-full transition-all duration-300 ${
              isCompleted ? 'w-full bg-green-500' : 'w-0 bg-purple-500'
            }`}
          />
        </div>
      )}

    </div>
  );
}