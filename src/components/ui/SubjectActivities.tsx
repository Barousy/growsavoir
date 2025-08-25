'use client';

import { useState, useMemo } from 'react';
import { getActivitiesBySubject, type Activity } from '@/data/activitiesData';
import { 
  Clock, 
  Users, 
  Target, 
  BookOpen, 
  Star,
  ArrowRight,
  Lightbulb,
  Award
} from 'lucide-react';

interface SubjectActivitiesProps {
  subject: string;
  maxActivities?: number;
  showFilters?: boolean;
}

export default function SubjectActivities({ 
  subject, 
  maxActivities = 6, 
  showFilters = true 
}: SubjectActivitiesProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('all');

  const allActivities = getActivitiesBySubject(subject);
  
  const filteredActivities = useMemo(() => {
    let filtered = allActivities;

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(activity => activity.difficulty === selectedDifficulty);
    }

    if (selectedAgeGroup !== 'all') {
      filtered = filtered.filter(activity => activity.ageGroup === selectedAgeGroup);
    }

    return filtered.slice(0, maxActivities);
  }, [allActivities, selectedDifficulty, selectedAgeGroup, maxActivities]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'expert': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Débutant';
      case 'intermediate': return 'Intermédiaire';
      case 'advanced': return 'Avancé';
      case 'expert': return 'Expert';
      default: return difficulty;
    }
  };

  const getSubjectLabel = (subject: string) => {
    switch (subject) {
      case 'anglais': return 'Anglais';
      case 'arabe': return 'Arabe';
      case 'mathematiques': return 'Mathématiques';
      case 'francais': return 'Français';
      case 'sciences': return 'Sciences';
      case 'informatique': return 'Informatique';
      case 'sciences-islamiques': return 'Sciences Islamiques';
      case 'histoire-islam': return 'Histoire Islamique';
      case 'prophete-muhammad': return 'Prophète Muhammad';
      default: return subject;
    }
  };

  if (allActivities.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Activités {getSubjectLabel(subject)}
          </h3>
          <p className="text-gray-600">
            {allActivities.length} activités disponibles pour enrichir votre apprentissage
          </p>
        </div>
        <a
          href="/activities"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Voir toutes
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>

      {/* Filtres */}
      {showFilters && (
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="all">Tous les niveaux</option>
            <option value="beginner">Débutant</option>
            <option value="intermediate">Intermédiaire</option>
            <option value="advanced">Avancé</option>
            <option value="expert">Expert</option>
          </select>

          <select
            value={selectedAgeGroup}
            onChange={(e) => setSelectedAgeGroup(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="all">Tous les âges</option>
            <option value="6-8">6-8 ans</option>
            <option value="9-11">9-11 ans</option>
            <option value="12-14">12-14 ans</option>
            <option value="15+">15+ ans</option>
          </select>
        </div>
      )}

      {/* Grille des activités */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow"
          >
            {/* En-tête */}
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                {activity.title}
              </h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(activity.difficulty)}`}>
                {getDifficultyLabel(activity.difficulty)}
              </span>
            </div>

            <p className="text-gray-600 text-xs mb-3 line-clamp-2">
              {activity.description}
            </p>

            {/* Métadonnées */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {activity.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                {activity.ageGroup} ans
              </div>
            </div>

            {/* Indicateurs */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {activity.isInteractive && (
                  <div className="flex items-center text-yellow-600">
                    <Star className="w-3 h-3" />
                    <span className="text-xs">Interactif</span>
                  </div>
                )}
                {!activity.requiresSupervision && (
                  <div className="flex items-center text-green-600">
                    <BookOpen className="w-3 h-3" />
                    <span className="text-xs">Autonome</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center text-blue-600">
                <Lightbulb className="w-3 h-3" />
                <span className="text-xs">{activity.learningObjectives.length} objectifs</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucune activité trouvée */}
      {filteredActivities.length === 0 && (
        <div className="text-center py-8">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">
            Aucune activité trouvée avec les filtres sélectionnés
          </p>
        </div>
      )}

      {/* Lien vers plus d'activités */}
      {filteredActivities.length > 0 && (
        <div className="text-center mt-6 pt-4 border-t border-gray-200">
          <a
            href="/activities"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Voir toutes les activités {getSubjectLabel(subject)}
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      )}
    </div>
  );
}
