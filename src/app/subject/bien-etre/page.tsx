'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { wellbeingQuiz } from '@/data/quizData';

export default function WellbeingSubjectPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<'3-5' | '6-8' | '9-12'>('3-5');

  const lessons = {
    '3-5': [
      {
        id: 'bien-etre-respiration',
        title: 'Respiration calme',
        description: 'Apprendre à respirer calmement et se détendre',
        duration: 10,
        difficulty: 'beginner' as const,
        color: 'from-teal-400 to-teal-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'bien-etre-emotions',
        title: 'Reconnaître les émotions',
        description: 'Identifier et exprimer ses sentiments',
        duration: 15,
        difficulty: 'beginner' as const,
        color: 'from-blue-400 to-blue-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'bien-etre-gratitude',
        title: 'Pratique de la gratitude',
        description: 'Découvrir ce qui nous rend heureux',
        duration: 12,
        difficulty: 'beginner' as const,
        color: 'from-green-400 to-green-600',
        isLocked: false,
        isCompleted: false,
        emoji: '💝'
      }
    ],
    '6-8': [
      {
        id: 'bien-etre-meditation',
        title: 'Méditation guidée',
        description: 'Introduction à la méditation pour enfants',
        duration: 20,
        difficulty: 'intermediate' as const,
        color: 'from-indigo-400 to-indigo-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'bien-etre-confiance',
        title: 'Développer la confiance',
        description: 'Techniques pour renforcer l\'estime de soi',
        duration: 25,
        difficulty: 'intermediate' as const,
        color: 'from-purple-400 to-purple-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'bien-etre-relations',
        title: 'Relations amicales',
        description: 'Apprendre à bien s\'entendre avec les autres',
        duration: 18,
        difficulty: 'intermediate' as const,
        color: 'from-pink-400 to-pink-600',
        isLocked: false,
        isCompleted: false,
        emoji: '🤝'
      }
    ],
    '9-12': [
      {
        id: 'bien-etre-stress',
        title: 'Gérer le stress',
        description: 'Techniques avancées de gestion du stress',
        duration: 30,
        difficulty: 'advanced' as const,
        color: 'from-red-400 to-red-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'bien-etre-objectifs',
        title: 'Fixer des objectifs',
        description: 'Planifier et atteindre ses objectifs personnels',
        duration: 35,
        difficulty: 'advanced' as const,
        color: 'from-orange-400 to-orange-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'bien-etre-mindfulness',
        title: 'Pleine conscience',
        description: 'Pratiques de mindfulness pour adolescents',
        duration: 40,
        difficulty: 'advanced' as const,
        color: 'from-yellow-400 to-yellow-600',
        isLocked: false,
        isCompleted: false,
        emoji: '🌟'
      }
    ]
  };

  const currentLessons = lessons[selectedLevel];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-teal-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bien-être & Développement personnel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Développez votre équilibre émotionnel, votre confiance en vous et 
              votre bien-être mental à travers des pratiques simples et efficaces !
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowQuiz(true)}
                className="btn-primary text-lg px-8 py-3"
              >
                Évaluer mon bien-être
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Découvrir les techniques
              </button>
            </div>
          </div>
        </section>

        {/* Level Selection */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choisissez votre niveau
              </h2>
              <p className="text-lg text-gray-600">
                Des pratiques adaptées à chaque âge et niveau de maturité
              </p>
            </div>
            
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-lg p-1">
                {(['3-5', '6-8', '9-12'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-6 py-3 rounded-md font-medium transition-all ${
                      selectedLevel === level
                        ? 'bg-white text-teal-600 shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {level === '3-5' ? '3-5 ans' : level === '6-8' ? '6-8 ans' : '9-12 ans'}
                  </button>
                ))}
              </div>
            </div>

            {/* Lessons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentLessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  {...lesson}
                  onStart={() => {
                    console.log('Starting lesson:', lesson.id);
                    // Ici vous pouvez ajouter la logique pour rediriger vers la leçon
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pourquoi le bien-être est important ?
              </h2>
              <p className="text-lg text-gray-600">
                Développez des compétences essentielles pour une vie équilibrée
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧘</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Équilibre émotionnel
                </h3>
                <p className="text-gray-600">
                  Apprenez à gérer vos émotions et à rester calme
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Confiance en soi
                </h3>
                <p className="text-gray-600">
                  Développez une image positive de vous-même
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Résilience
                </h3>
                <p className="text-gray-600">
                  Apprenez à rebondir face aux difficultés
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Tips Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conseils du jour
              </h2>
              <p className="text-lg text-gray-600">
                Des petites astuces pour améliorer votre bien-être quotidien
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-800 mb-3">
                  🌅 Matinée zen
                </h3>
                <p className="text-teal-700">
                  Prenez 5 minutes au réveil pour respirer profondément et 
                  planifier votre journée avec bienveillance.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  💝 Gratitude quotidienne
                </h3>
                <p className="text-blue-700">
                  Notez 3 choses pour lesquelles vous êtes reconnaissant 
                  chaque jour avant de dormir.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  🚶‍♀️ Pause nature
                </h3>
                <p className="text-green-700">
                  Sortez 10 minutes dans la nature pour vous ressourcer 
                  et vous reconnecter à l\'essentiel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Modal */}
        {showQuiz && (
          <SubjectQuiz
          quiz={wellbeingQuiz}
          onClose={() => setShowQuiz(false)}
          onComplete={(score) => {
            setQuizCompleted(true);
            setShowQuiz(false);
            console.log('Quiz completed with score:', score);
          }}
        />
        )}
      </main>
      <Footer />
    </>
  );
}