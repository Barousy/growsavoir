'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { activitiesData, getActivitiesBySubject, getActivitiesByDifficulty, getSubjects, type Activity } from '@/data/activitiesData';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Target, 
  Filter, 
  Search,
  Star,
  TrendingUp,
  Lightbulb,
  Award,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function ActivitiesPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  const subjects = getSubjects();
  const difficulties = ['beginner', 'intermediate', 'advanced', 'expert'];
  const ageGroups = ['6-8', '9-11', '12-14', '15+'];

  // Filtrer les activités
  const filteredActivities = useMemo(() => {
    let filtered = activitiesData;

    if (selectedSubject !== 'all') {
      filtered = filtered.filter(activity => activity.subject === selectedSubject);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(activity => activity.difficulty === selectedDifficulty);
    }

    if (selectedAgeGroup !== 'all') {
      filtered = filtered.filter(activity => activity.ageGroup === selectedAgeGroup);
    }

    if (searchTerm) {
      filtered = filtered.filter(activity => 
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedSubject, selectedDifficulty, selectedAgeGroup, searchTerm]);

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

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case 'anglais': return '🇬🇧';
      case 'arabe': return '🇸🇦';
      case 'mathematiques': return '🔢';
      case 'francais': return '🇫🇷';
      case 'sciences': return '🔬';
      case 'informatique': return '💻';
      case 'sciences-islamiques': return '📖';
      case 'histoire-islam': return '🏛️';
      case 'prophete-muhammad': return '☪️';
      default: return '📚';
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

  const toggleActivityExpansion = (activityId: string) => {
    setExpandedActivity(expandedActivity === activityId ? null : activityId);
  };

  const resetFilters = () => {
    setSelectedSubject('all');
    setSelectedDifficulty('all');
    setSelectedAgeGroup('all');
    setSearchTerm('');
  };

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Activités Éducatives
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez des centaines d'activités interactives organisées par matière et niveau de difficulté
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Activités</p>
                  <p className="text-2xl font-bold text-gray-900">{activitiesData.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Matières</p>
                  <p className="text-2xl font-bold text-gray-900">{subjects.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Niveaux</p>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Tranches d'âge</p>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filtres */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Filtres</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Recherche */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Matière */}
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Toutes les matières</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {getSubjectLabel(subject)}
                  </option>
                ))}
              </select>

              {/* Difficulté */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tous les niveaux</option>
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {getDifficultyLabel(difficulty)}
                  </option>
                ))}
              </select>

              {/* Tranche d'âge */}
              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tous les âges</option>
                {ageGroups.map(age => (
                  <option key={age} value={age}>
                    {age} ans
                  </option>
                ))}
              </select>

              {/* Bouton reset */}
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Réinitialiser
              </button>
            </div>
          </div>

          {/* Résultats */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Activités ({filteredActivities.length})
              </h2>
              {filteredActivities.length > 0 && (
                <p className="text-gray-600">
                  {selectedSubject !== 'all' && `Matière: ${getSubjectLabel(selectedSubject)}`}
                  {selectedDifficulty !== 'all' && ` • Niveau: ${getDifficultyLabel(selectedDifficulty)}`}
                  {selectedAgeGroup !== 'all' && ` • Âge: ${selectedAgeGroup} ans`}
                </p>
              )}
            </div>

            {filteredActivities.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Aucune activité trouvée
                </h3>
                <p className="text-gray-500 mb-4">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {/* En-tête de l'activité */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{getSubjectIcon(activity.subject)}</span>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {activity.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {getSubjectLabel(activity.subject)}
                            </p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(activity.difficulty)}`}>
                          {getDifficultyLabel(activity.difficulty)}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-4">{activity.description}</p>

                      {/* Métadonnées */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {activity.ageGroup} ans
                        </div>
                        <div className="flex items-center">
                          {activity.isInteractive ? (
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          ) : (
                            <BookOpen className="w-4 h-4 mr-1 text-blue-500" />
                          )}
                          {activity.isInteractive ? 'Interactif' : 'Individuel'}
                        </div>
                      </div>

                      {/* Bouton d'expansion */}
                      <button
                        onClick={() => toggleActivityExpansion(activity.id)}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        {expandedActivity === activity.id ? (
                          <>
                            Masquer les détails
                            <ArrowLeft className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Voir les détails
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Détails de l'activité */}
                    {expandedActivity === activity.id && (
                      <div className="border-t border-gray-200 bg-gray-50 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Matériaux */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-green-600" />
                              Matériaux nécessaires
                            </h4>
                            <ul className="space-y-2">
                              {activity.materials.map((material, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-700">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                  {material}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Objectifs d'apprentissage */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Target className="w-4 h-4 mr-2 text-blue-600" />
                              Objectifs d'apprentissage
                            </h4>
                            <ul className="space-y-2">
                              {activity.learningObjectives.map((objective, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-700">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                  {objective}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Instructions */}
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2 text-yellow-600" />
                            Instructions
                          </h4>
                          <ol className="space-y-2">
                            {activity.instructions.map((instruction, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-700">
                                <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                  {index + 1}
                                </span>
                                {instruction}
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Informations supplémentaires */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>
                              {activity.canBeDoneAlone ? 'Peut être fait seul' : 'Nécessite de l\'aide'}
                            </span>
                            <span>
                              {activity.requiresSupervision ? 'Supervision recommandée' : 'Autonome'}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bouton retour */}
          <div className="text-center">
            <a
              href="/subjects"
              className="inline-flex items-center bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              ← Retour aux matières
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}