'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { artsQuiz } from '@/data/quizData';

export default function ArtsSubjectPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<'3-5' | '6-8' | '9-12'>('3-5');

  const lessons = {
    '3-5': [
      {
        id: 'arts-dessin-basique',
        title: 'Dessin de base',
        description: 'Apprendre à dessiner des formes simples et des animaux',
        duration: 15,
        difficulty: 'beginner' as const,
        color: 'from-pink-400 to-pink-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'arts-couleurs-primaires',
        title: 'Les couleurs primaires',
        description: 'Découvrir et mélanger les couleurs de base',
        duration: 20,
        difficulty: 'beginner' as const,
        color: 'from-blue-400 to-blue-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'arts-papier-mache',
        title: 'Papier mâché créatif',
        description: 'Créer des objets en papier mâché coloré',
        duration: 30,
        difficulty: 'beginner' as const,
        color: 'from-green-400 to-green-600',
        isLocked: false,
        isCompleted: false,
        emoji: '✂️'
      }
    ],
    '6-8': [
      {
        id: 'arts-perspective',
        title: 'Perspective et profondeur',
        description: 'Apprendre les techniques de perspective en dessin',
        duration: 25,
        difficulty: 'intermediate' as const,
        color: 'from-purple-400 to-purple-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'arts-aquarelle',
        title: 'Techniques d\'aquarelle',
        description: 'Maîtriser la peinture à l\'eau et les dégradés',
        duration: 35,
        difficulty: 'intermediate' as const,
        color: 'from-indigo-400 to-indigo-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'arts-collage-artistique',
        title: 'Collage artistique',
        description: 'Créer des compositions avec différents matériaux',
        duration: 40,
        difficulty: 'intermediate' as const,
        color: 'from-orange-400 to-orange-600',
        isLocked: false,
        isCompleted: false,
        emoji: '✂️'
      }
    ],
    '9-12': [
      {
        id: 'arts-portrait',
        title: 'Portrait réaliste',
        description: 'Techniques avancées pour dessiner des visages',
        duration: 45,
        difficulty: 'advanced' as const,
        color: 'from-red-400 to-red-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'arts-peinture-digitale',
        title: 'Peinture numérique',
        description: 'Introduction aux outils de création numérique',
        duration: 50,
        difficulty: 'advanced' as const,
        color: 'from-cyan-400 to-cyan-600',
        isLocked: false,
        isCompleted: false,
        emoji: '��'
      },
      {
        id: 'arts-sculpture-argile',
        title: 'Sculpture en argile',
        description: 'Créer des formes 3D avec l\'argile',
        duration: 60,
        difficulty: 'advanced' as const,
        color: 'from-amber-400 to-amber-600',
        isLocked: false,
        isCompleted: false,
        emoji: '🏺'
      }
    ]
  };

  const currentLessons = lessons[selectedLevel];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Arts & Créativité
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Développez votre créativité et votre expression artistique à travers le dessin, 
              la peinture, le bricolage et bien plus encore !
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowQuiz(true)}
                className="btn-primary text-lg px-8 py-3"
              >
                Passer le quiz de créativité
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Voir la galerie d'art
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
                Des activités adaptées à chaque âge et niveau de compétence
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
                        ? 'bg-white text-pink-600 shadow-md'
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
        <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pourquoi choisir les arts ?
              </h2>
              <p className="text-lg text-gray-600">
                Développez des compétences essentielles à travers la création artistique
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Créativité
                </h3>
                <p className="text-gray-600">
                  Stimulez votre imagination et développez votre pensée créative
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✋</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Motricité fine
                </h3>
                <p className="text-gray-600">
                  Améliorez votre coordination et votre précision manuelle
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💭</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expression
                </h3>
                <p className="text-gray-600">
                  Apprenez à exprimer vos émotions et vos idées artistiquement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Modal */}
        {showQuiz && (
          <SubjectQuiz
          quiz={artsQuiz}
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