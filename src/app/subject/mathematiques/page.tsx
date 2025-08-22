'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { mathQuiz } from '@/data/quizData';

export default function MathSubjectPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('1');

  const handleQuizComplete = (score: number, total: number) => {
    setQuizCompleted(true);
    console.log(`Quiz completed with score: ${score}/${total}`);
  };

  const lessons = {
    '1': [
      {
        id: '1',
        title: "Compter jusqu'à 20",
        description: "Apprenez à compter et reconnaître les nombres de 1 à 20",
        duration: 6,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: "Addition simple",
        description: "Additionner des nombres de 1 à 10 avec des objets visuels",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '➕',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: "Formes géométriques",
        description: "Carré, cercle, triangle et rectangle - reconnaître les formes",
        duration: 7,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: "Mesures simples",
        description: "Grand/petit, long/court, lourd/léger - comparer les objets",
        duration: 9,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: "Séquence de nombres",
        description: "Comprendre l'ordre et les suites numériques",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: "Problèmes simples",
        description: "Résoudre des problèmes mathématiques de base",
        duration: 10,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: "Compter jusqu'à 100",
        description: "Maîtriser les nombres de 20 à 100",
        duration: 12,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: "Soustraction",
        description: "Apprendre à soustraire avec des nombres jusqu'à 20",
        duration: 10,
        difficulty: 'intermediate' as const,
        emoji: '➖',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: "Multiplication de base",
        description: "Tables de multiplication de 2, 3, 4 et 5",
        duration: 15,
        difficulty: 'intermediate' as const,
        emoji: '✖️',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: "Fractions simples",
        description: "Comprendre les fractions 1/2, 1/3, 1/4",
        duration: 14,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: "Géométrie avancée",
        description: "Périmètre, aire et volume des formes simples",
        duration: 16,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: "Problèmes complexes",
        description: "Résoudre des problèmes à plusieurs étapes",
        duration: 18,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: "Nombres décimaux",
        description: "Comprendre et utiliser les nombres décimaux",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: "Division",
        description: "Apprendre la division avec et sans reste",
        duration: 18,
        difficulty: 'advanced' as const,
        emoji: '➗',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: "Pourcentages",
        description: "Calculer et comprendre les pourcentages",
        duration: 16,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: "Géométrie 3D",
        description: "Cubes, sphères, cylindres et leurs propriétés",
        duration: 22,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: "Algèbre de base",
        description: "Introduction aux équations simples",
        duration: 25,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: "Statistiques simples",
        description: "Moyenne, médiane et graphiques",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '4': [
      {
        id: '19',
        title: "Trigonométrie",
        description: "Sinus, cosinus et tangente",
        duration: 28,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '20',
        title: "Calcul différentiel",
        description: "Introduction aux dérivées",
        duration: 32,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '21',
        title: "Probabilités avancées",
        description: "Théorie des probabilités et statistiques",
        duration: 30,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '22',
        title: "Géométrie analytique",
        description: "Coordonnées et équations de droites",
        duration: 26,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '23',
        title: "Suites et séries",
        description: "Suites arithmétiques et géométriques",
        duration: 24,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '24',
        title: "Applications réelles",
        description: "Utiliser les mathématiques dans la vie quotidienne",
        duration: 29,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-purple-500',
        isCompleted: false,
        isLocked: true
      }
    ]
  };

  const levels = [
    { id: '1', name: 'Débutant', count: 6, color: 'bg-green-500' },
    { id: '2', name: 'Intermédiaire', count: 6, color: 'bg-yellow-500' },
    { id: '3', name: 'Avancé', count: 6, color: 'bg-red-500' },
    { id: '4', name: 'Expert', count: 6, color: 'bg-purple-500' }
  ];

  if (showQuiz) {
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-purple-600 hover:text-purple-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
                quiz={mathQuiz}
                onClose={() => setShowQuiz(false)}
                onComplete={(score) => {
                  setQuizCompleted(true);
                  setShowQuiz(false);
                  console.log('Quiz completed with score:', score);
                }}
              />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🧮</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Apprendre les mathématiques
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez la magie des nombres avec nos leçons interactives et amusantes
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet de mathématiques en 4 niveaux, de débutant à expert
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-purple-100 border-2 border-purple-300' 
                      : 'bg-slate-50 hover:bg-purple-50'
                  }`}
                  onClick={() => setSelectedLevel(level.id)}
                >
                  <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl text-white font-bold">{level.id}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{level.name}</h3>
                  <p className="text-sm text-slate-600">{level.count} leçons</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Niveau {selectedLevel} - {levels.find(l => l.id === selectedLevel)?.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons[selectedLevel as keyof typeof lessons].map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  {...lesson}
                  onStart={() => {
                    const lessonSlugs = {
                      '1': 'math-nombres-1-20',
                      '2': 'math-addition-simple',
                      '3': 'math-formes-geometriques',
                      '4': 'math-mesures-simples',
                      '5': 'math-sequence-nombres',
                      '6': 'math-problemes-simples',
                      '7': 'math-nombres-1-100',
                      '8': 'math-soustraction',
                      '9': 'math-multiplication-base',
                      '10': 'math-fractions-simples',
                      '11': 'math-geometrie-avancee',
                      '12': 'math-problemes-complexes',
                      '13': 'math-nombres-decimaux',
                      '14': 'math-division',
                      '15': 'math-pourcentages',
                      '16': 'math-geometrie-3d',
                      '17': 'math-algebre-base',
                      '18': 'math-statistiques-simples',
                      '19': 'math-trigonometrie',
                      '20': 'math-calcul-differentiel',
                      '21': 'math-probabilites-avancees',
                      '22': 'math-geometrie-analytique',
                      '23': 'math-suites-series',
                      '24': 'math-applications-reelles'
                    };
                    const slug = lessonSlugs[lesson.id as keyof typeof lessonSlugs];
                    if (slug) {
                      window.location.href = `/lesson/${slug}`;
                    }
                  }}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Voir toutes les leçons du niveau {selectedLevel}
              </button>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Testez vos connaissances</h2>
            <p className="text-lg text-slate-600 mb-8">
              Prenez notre quiz pour vérifier ce que vous avez appris en mathématiques
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Défi quotidien</h3>
                <p className="text-slate-600 mb-4">Un nouveau défi chaque jour</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Participer
                </button>
              </div>
            </div>

            {quizCompleted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">
                  🎉 Félicitations ! Vous avez terminé le quiz. Continuez à pratiquer !
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Back to subject */}
        <section className="py-16 bg-slate-50">
          <div className="text-center">
            <a
              href="/subject"
              className="inline-block bg-slate-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
            >
              ← Retour aux matières
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}