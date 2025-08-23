'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Clock, Star } from 'lucide-react';

interface Level {
  id: number;
  name: string;
  description: string;
  lessonCount: number;
  color: string;
  lessons: Array<{
    id: string;
    title: string;
    description: string;
    duration: number;
    difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    isCompleted?: boolean;
    isLocked?: boolean;
    emoji: string;
  }>;
}

interface LevelCardProps {
  level: Level;
  isExpanded: boolean;
  onToggle: (levelId: number) => void;
}

export default function LevelCard({ level, isExpanded, onToggle }: LevelCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
    expert: 'bg-purple-100 text-purple-800'
  };

  const difficultyLabels = {
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé',
    expert: 'Expert'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header du niveau */}
      <div 
        className={`p-6 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
          isExpanded ? 'bg-blue-50 border-b border-blue-200' : ''
        }`}
        onClick={() => onToggle(level.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold ${level.color}`}>
              {level.id}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{level.name}</h3>
              <p className="text-gray-600">{level.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Leçons</p>
              <p className="text-lg font-semibold text-gray-900">{level.lessonCount}</p>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-6 h-6 text-gray-500" />
            ) : (
              <ChevronRight className="w-6 h-6 text-gray-500" />
            )}
          </div>
        </div>
      </div>

      {/* Contenu des leçons (visible si étendu) */}
      {isExpanded && (
        <div className="p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {level.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  // Navigation vers la leçon
                  if (!lesson.isLocked) {
                    window.location.href = `/lesson/${lesson.id}`;
                  }
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{lesson.emoji}</span>
                  {lesson.isCompleted && (
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  )}
                  {lesson.isLocked && (
                    <div className="w-5 h-5 text-gray-400">
                      🔒
                    </div>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{lesson.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {lesson.duration} min
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[lesson.difficulty]}`}>
                    {difficultyLabels[lesson.difficulty]}
                  </span>
                </div>
                {lesson.isLocked && (
                  <div className="mt-3 text-center">
                    <span className="text-xs text-gray-500">Niveau {level.id - 1} requis</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}