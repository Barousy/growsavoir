'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { scienceQuiz } from '@/data/quizData';

export default function SciencesSubjectPage() {
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
        title: "Les plantes",
        description: "Comment poussent les plantes et les fleurs",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: "La Terre",
        description: "Notre planète et ses merveilles",
        duration: 10,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: "L'énergie",
        description: "Les différentes formes d'énergie",
        duration: 7,
        difficulty: 'beginner' as const,
        emoji: '⚡',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: "Les animaux",
        description: "Découvrir le monde animal",
        duration: 9,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: "L'eau",
        description: "Le cycle de l'eau et ses propriétés",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: "L'air",
        description: "L'atmosphère et la respiration",
        duration: 6,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: "Les écosystèmes",
        description: "Les relations entre êtres vivants et environnement",
        duration: 12,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: "Les forces",
        description: "Gravité, magnétisme et autres forces",
        duration: 14,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: "La matière",
        description: "Solide, liquide, gaz et changements d'état",
        duration: 15,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: "Les réactions chimiques",
        description: "Transformations et nouvelles substances",
        duration: 16,
        difficulty: 'intermediate' as const,
        emoji: '⚗️',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: "L'électricité",
        description: "Courant électrique et circuits simples",
        duration: 13,
        difficulty: 'intermediate' as const,
        emoji: '⚡',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: "Les ondes",
        description: "Son, lumière et autres types d'ondes",
        duration: 11,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: "La génétique",
        description: "Hérédité et ADN",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: "L'évolution",
        description: "Comment les espèces changent au fil du temps",
        duration: 18,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: "La mécanique quantique",
        description: "Introduction aux phénomènes quantiques",
        duration: 25,
        difficulty: 'advanced' as const,
        emoji: '⚛️',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: "L'astronomie",
        description: "L'univers, les galaxies et les planètes",
        duration: 22,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: "La biotechnologie",
        description: "Applications technologiques en biologie",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-orange-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: "Les nanotechnologies",
        description: "Science à l'échelle moléculaire",
        duration: 23,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-orange-500',
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
          <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-orange-600 hover:text-orange-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
  quiz={scienceQuiz}
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
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🧪</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Découvrir les sciences
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explorez le monde qui vous entoure avec nos expériences et observations
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet de sciences en 3 niveaux, de débutant à avancé
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-orange-100 border-2 border-orange-300' 
                      : 'bg-slate-50 hover:bg-orange-50'
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
                      '1': 'sciences-plantes',
                      '2': 'sciences-terre',
                      '3': 'sciences-energie',
                      '4': 'sciences-animaux',
                      '5': 'sciences-eau',
                      '6': 'sciences-air',
                      '7': 'sciences-ecosystemes',
                      '8': 'sciences-forces',
                      '9': 'sciences-matiere',
                      '10': 'sciences-reactions-chimiques',
                      '11': 'sciences-electricite',
                      '12': 'sciences-ondes',
                      '13': 'sciences-genetique',
                      '14': 'sciences-evolution',
                      '15': 'sciences-mecanique-quantique',
                      '16': 'sciences-astronomie',
                      '17': 'sciences-biotechnologie',
                      '18': 'sciences-nanotechnologies'
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
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
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
              Prenez notre quiz pour vérifier ce que vous avez appris en sciences
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
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