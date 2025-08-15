'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Clock, Star, Trophy, Target, Award } from 'lucide-react';

const recentCourses = [
  {
    id: '1',
    title: 'Introduction à l\'Arabe',
    progress: 75,
    lastAccessed: 'Il y a 2 jours',
    nextLesson: 'Leçon 8: Les nombres',
    subject: 'Arabe',
    image: '🇸🇦',
  },
  {
    id: '2',
    title: 'Mathématiques CP-CE1',
    progress: 45,
    lastAccessed: 'Il y a 1 semaine',
    nextLesson: 'Leçon 12: L\'addition',
    subject: 'Mathématiques',
    image: '🔢',
  },
  {
    id: '3',
    title: 'Histoire de l\'Islam',
    progress: 90,
    lastAccessed: 'Aujourd\'hui',
    nextLesson: 'Leçon 20: Les califes',
    subject: 'Histoire',
    image: '🕌',
  },
];

const achievements = [
  {
    id: '1',
    title: 'Premier pas',
    description: 'A terminé sa première leçon',
    icon: '🎯',
    unlocked: true,
  },
  {
    id: '2',
    title: 'Étudiant assidu',
    description: 'A étudié 7 jours de suite',
    icon: '🔥',
    unlocked: true,
  },
  {
    id: '3',
    title: 'Polyglotte',
    description: 'A terminé 3 cours de langues',
    icon: '🌍',
    unlocked: false,
  },
  {
    id: '4',
    title: 'Scientifique',
    description: 'A terminé 5 cours de sciences',
    icon: '🔬',
    unlocked: false,
  },
];

const stats = [
  { label: 'Cours en cours', value: '3', icon: BookOpen, color: 'text-blue-600' },
  { label: 'Heures d\'étude', value: '24', icon: Clock, color: 'text-green-600' },
  { label: 'Leçons terminées', value: '18', icon: Trophy, color: 'text-yellow-600' },
  { label: 'Score moyen', value: '4.8', icon: Star, color: 'text-purple-600' },
];

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  // Rediriger si pas connecté
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bonjour, Administrateur !
              </h1>
              <p className="text-gray-600 mt-2">
                Bienvenue sur votre tableau de bord personnel
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="/courses"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Découvrir des cours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cours récents */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Mes cours en cours</h2>
                  <Link
                    href="/courses"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Voir tous →
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl">{course.image}</div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.subject}</p>
                        <p className="text-sm text-gray-500">{course.nextLesson}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{course.progress}%</div>
                        <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{course.lastAccessed}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Réalisations et objectifs */}
            <div className="space-y-6">
              {/* Réalisations */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Mes réalisations</h2>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        achievement.unlocked ? 'bg-green-50' : 'bg-gray-50'
                      }`}
                    >
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className={`font-medium ${
                          achievement.unlocked ? 'text-green-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </div>
                        <div className={`text-sm ${
                          achievement.unlocked ? 'text-green-700' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </div>
                      </div>
                      {achievement.unlocked && (
                        <Award className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Objectifs */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Objectifs de la semaine</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-700">Étudier 5 jours</span>
                    </div>
                    <div className="text-sm text-gray-500">3/5</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-700">Terminer 2 leçons</span>
                    </div>
                    <div className="text-sm text-gray-500">1/2</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-yellow-600" />
                      <span className="text-sm text-gray-700">Maintenir un score &gt;4.5</span>
                    </div>
                    <div className="text-sm text-green-600">✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Continuez votre apprentissage
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez de nouveaux cours et développez vos compétences 
            avec notre plateforme éducative complète.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Explorer les cours
            </Link>
            <Link
              href="/subjects"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Découvrir les matières
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
