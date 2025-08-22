'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { islamicHistoryQuiz } from '@/data/quizData';

export default function IslamicHistorySubjectPage() {
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
        title: "Le Prophète Muhammad",
        description: "La vie et le message du dernier prophète",
        duration: 12,
        difficulty: 'beginner' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: "La naissance de l'Islam",
        description: "Les premières révélations et la propagation",
        duration: 10,
        difficulty: 'beginner' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: "La Hijra",
        description: "L'émigration de La Mecque à Médine",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: "La bataille de Badr",
        description: "Première grande bataille de l'Islam",
        duration: 9,
        difficulty: 'beginner' as const,
        emoji: '⚔️',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: "La conquête de La Mecque",
        description: "Le retour triomphal et la clémence",
        duration: 11,
        difficulty: 'beginner' as const,
        emoji: '🏛️',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: "Les premiers califes",
        description: "Abu Bakr, Omar, Othman et Ali",
        duration: 13,
        difficulty: 'beginner' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: "L'expansion de l'Islam",
        description: "La diffusion de l'Islam en Asie et en Afrique",
        duration: 15,
        difficulty: 'intermediate' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: "L'âge d'or islamique",
        description: "Les grandes découvertes scientifiques et culturelles",
        duration: 16,
        difficulty: 'intermediate' as const,
        emoji: '🏛️',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: "Les dynasties omeyyades",
        description: "Le premier califat héréditaire",
        duration: 14,
        difficulty: 'intermediate' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: "Les dynasties abbassides",
        description: "L'apogée de la civilisation islamique",
        duration: 17,
        difficulty: 'intermediate' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: "L'Andalousie musulmane",
        description: "L'Espagne islamique et sa richesse culturelle",
        duration: 18,
        difficulty: 'intermediate' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: "Les croisades",
        description: "Les conflits entre chrétiens et musulmans",
        duration: 16,
        difficulty: 'intermediate' as const,
        emoji: '⚔️',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: "L'Empire ottoman",
        description: "L'apogée et le déclin de l'Empire turc",
        duration: 22,
        difficulty: 'advanced' as const,
        emoji: '🏛️',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: "Les empires moghols",
        description: "L'Islam en Inde et sa contribution culturelle",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: "L'Islam en Asie du Sud-Est",
        description: "La diffusion en Malaisie, Indonésie et Philippines",
        duration: 19,
        difficulty: 'advanced' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: "L'Islam en Afrique",
        description: "Les royaumes islamiques africains",
        duration: 21,
        difficulty: 'advanced' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: "L'Islam moderne",
        description: "L'Islam au 20e et 21e siècle",
        duration: 24,
        difficulty: 'advanced' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: "Les figures historiques",
        description: "Les grands personnages de l'histoire islamique",
        duration: 23,
        difficulty: 'advanced' as const,
        emoji: '',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '4': [
      {
        id: '19',
        title: "L'Islam contemporain",
        description: "Les défis et opportunités du 21e siècle",
        duration: 28,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '20',
        title: "Les mouvements réformistes",
        description: "L'évolution de la pensée islamique moderne",
        duration: 32,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '21',
        title: "L'Islam et la science",
        description: "Les contributions scientifiques de la civilisation islamique",
        duration: 35,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '22',
        title: "L'Islam et l'art",
        description: "L'architecture, la calligraphie et les arts islamiques",
        duration: 30,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '23',
        title: "L'Islam et la philosophie",
        description: "Les penseurs et philosophes musulmans",
        duration: 38,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-amber-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '24',
        title: "L'héritage islamique",
        description: "L'influence de l'Islam sur le monde moderne",
        duration: 42,
        difficulty: 'expert' as const,
        emoji: '🏛️',
        color: 'bg-amber-500',
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
          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-amber-600 hover:text-amber-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
                quiz={islamicHistoryQuiz}
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
        <section className="bg-gradient-to-br from-amber-50 via-white to-amber-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🧭</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Histoire de l'Islam
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Voyagez à travers le temps et découvrez la richesse de la civilisation islamique
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet d'histoire islamique en 4 niveaux, de débutant à expert
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-amber-100 border-2 border-amber-300' 
                      : 'bg-slate-50 hover:bg-amber-50'
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
                      '1': 'histoire-prophete-muhammad',
                      '2': 'histoire-naissance-islam',
                      '3': 'histoire-hijra',
                      '4': 'histoire-bataille-badr',
                      '5': 'histoire-conquete-mecque',
                      '6': 'histoire-premiers-califes',
                      '7': 'histoire-expansion-islam',
                      '8': 'histoire-age-dor-islamique',
                      '9': 'histoire-dynasties-omeyyades',
                      '10': 'histoire-dynasties-abbassides',
                      '11': 'histoire-andalousie-musulmane',
                      '12': 'histoire-croisades',
                      '13': 'histoire-empire-ottoman',
                      '14': 'histoire-empires-moghols',
                      '15': 'histoire-islam-asie-sud-est',
                      '16': 'histoire-islam-afrique',
                      '17': 'histoire-islam-moderne',
                      '18': 'histoire-figures-historiques',
                      '19': 'histoire-islam-contemporain',
                      '20': 'histoire-mouvements-reformistes',
                      '21': 'histoire-islam-science',
                      '22': 'histoire-islam-art',
                      '23': 'histoire-islam-philosophie',
                      '24': 'histoire-heritage-islamique'
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
              <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
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
              Prenez notre quiz pour vérifier ce que vous avez appris en histoire islamique
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
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