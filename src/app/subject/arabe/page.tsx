'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { arabicQuiz } from '@/data/quizData';

export default function ArabicSubjectPage() {
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
        title: "L'alphabet arabe",
        description: "Apprenez les 28 lettres de l'alphabet arabe et leur prononciation",
        duration: 10,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: "Les voyelles courtes",
        description: "Découvrez les voyelles courtes (Fatha, Kasra, Damma)",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: "Les voyelles longues",
        description: "Apprenez les voyelles longues (Alif, Waw, Ya)",
        duration: 12,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: "Les salutations",
        description: "Marhaba, Ahlan, Sabah al-khair et autres salutations",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: "Les nombres de 1 à 10",
        description: "Apprenez à compter de 1 à 10 en arabe",
        duration: 7,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: "Les couleurs de base",
        description: "Rouge, bleu, vert, jaune et autres couleurs",
        duration: 9,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: "Les nombres de 11 à 20",
        description: "Continuez à compter en arabe",
        duration: 8,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: "Les jours de la semaine",
        description: "Lundi, mardi, mercredi et tous les jours",
        duration: 10,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: "Les mois de l'année",
        description: "Tous les mois en arabe",
        duration: 12,
        difficulty: 'intermediate' as const,
        emoji: '🗓️',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: "Les membres de la famille",
        description: "Père, mère, frère, sœur et autres membres",
        duration: 11,
        difficulty: 'intermediate' as const,
        emoji: '��‍👩‍��‍��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: "Les animaux domestiques",
        description: "Chat, chien, cheval et autres animaux",
        duration: 9,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: "Les fruits et légumes",
        description: "Pomme, banane, carotte et autres aliments",
        duration: 10,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: "Les phrases simples",
        description: "Construire des phrases basiques en arabe",
        duration: 15,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: "Les questions",
        description: "Poser des questions en arabe",
        duration: 12,
        difficulty: 'advanced' as const,
        emoji: '❓',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: "Les négations",
        description: "Exprimer la négation en arabe",
        duration: 10,
        difficulty: 'advanced' as const,
        emoji: '❌',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: "Les temps verbaux",
        description: "Présent, passé et futur en arabe",
        duration: 18,
        difficulty: 'advanced' as const,
        emoji: '⏰',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: "Les adjectifs",
        description: "Grand, petit, beau, laid et autres qualités",
        duration: 14,
        difficulty: 'advanced' as const,
        emoji: '✨',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: "Les adverbes",
        description: "Rapidement, lentement, bien, mal",
        duration: 12,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-green-500',
        isCompleted: false,
        isLocked: true
      }
    ]
  };

  const levels = [
    { id: '1', name: 'Débutant', count: 6, color: 'bg-green-500' },
    { id: '2', name: 'Intermédiaire', count: 6, color: 'bg-yellow-500' },
    { id: '3', name: 'Avancé', count: 6, color: 'bg-red-500' }
  ];

  if (showQuiz) {
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="bg-gradient-to-br from-green-50 via-white to-green-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-green-600 hover:text-green-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
  quiz={arabicQuiz}
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
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🏰</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Apprendre l'arabe
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez la beauté de la langue arabe avec nos leçons structurées et progressives
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet d'arabe en 3 niveaux, de débutant à avancé
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-green-100 border-2 border-green-300' 
                      : 'bg-slate-50 hover:bg-green-50'
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
                      '1': 'arabe-alphabet',
                      '2': 'arabe-voyelles-courtes',
                      '3': 'arabe-voyelles-longues',
                      '4': 'arabe-salutations',
                      '5': 'arabe-nombres',
                      '6': 'arabe-couleurs'
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
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
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
              Prenez notre quiz pour vérifier ce que vous avez appris en arabe
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
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