'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { islamicSciencesQuiz } from '@/data/quizData';

export default function IslamicSciencesSubjectPage() {
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
        title: "Les piliers de l'Islam",
        description: "Les cinq piliers fondamentaux de la religion musulmane",
        duration: 10,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: "La profession de foi",
        description: "La Chahada et son importance",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: "La prière",
        description: "Les cinq prières quotidiennes et leurs règles",
        duration: 12,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: "Le jeûne",
        description: "Le Ramadan et ses bienfaits",
        duration: 9,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: "L'aumône",
        description: "La Zakat et la charité en Islam",
        duration: 7,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: "Le pèlerinage",
        description: "Le Hajj et ses étapes",
        duration: 11,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: "Les vertus islamiques",
        description: "Patience, gratitude, humilité et autres qualités",
        duration: 14,
        difficulty: 'intermediate' as const,
        emoji: '✨',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: "Les relations sociales",
        description: "Respect des parents, bon voisinage, amitié",
        duration: 13,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: "L'éthique islamique",
        description: "Les bonnes manières et le comportement",
        duration: 15,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: "Les interdits",
        description: "Ce qui est interdit en Islam et pourquoi",
        duration: 12,
        difficulty: 'intermediate' as const,
        emoji: '❌',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: "Les obligations",
        description: "Les devoirs du musulman envers Allah et les autres",
        duration: 16,
        difficulty: 'intermediate' as const,
        emoji: '✅',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: "La purification",
        description: "Les ablutions et la propreté en Islam",
        duration: 10,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: "Le Fiqh avancé",
        description: "Jurisprudence islamique et règles détaillées",
        duration: 22,
        difficulty: 'advanced' as const,
        emoji: '⚖️',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: "Les écoles juridiques",
        description: "Les différentes madhahib et leurs spécificités",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '🏛️',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: "L'exégèse coranique",
        description: "Tafsir et interprétation du Coran",
        duration: 25,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: "La science du Hadith",
        description: "Étude des traditions prophétiques",
        duration: 23,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: "La théologie islamique",
        description: "Aqida et croyances fondamentales",
        duration: 21,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-emerald-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: "La spiritualité",
        description: "Tasawwuf et développement spirituel",
        duration: 24,
        difficulty: 'advanced' as const,
        emoji: '🕊️',
        color: 'bg-emerald-500',
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
          <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-emerald-600 hover:text-emerald-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
  quiz={islamicSciencesQuiz}
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
        <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">📖</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Sciences islamiques
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez la richesse de la culture islamique et ses enseignements
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet de sciences islamiques en 3 niveaux, de débutant à avancé
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-emerald-100 border-2 border-emerald-300' 
                      : 'bg-slate-50 hover:bg-emerald-50'
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
                      '1': 'islam-piliers-islam',
                      '2': 'islam-profession-foi',
                      '3': 'islam-priere',
                      '4': 'islam-jeune',
                      '5': 'islam-aumone',
                      '6': 'islam-pelerinage',
                      '7': 'islam-vertus-islamiques',
                      '8': 'islam-relations-sociales',
                      '9': 'islam-ethique-islamique',
                      '10': 'islam-interdits',
                      '11': 'islam-obligations',
                      '12': 'islam-purification',
                      '13': 'islam-fiqh-avance',
                      '14': 'islam-ecoles-juridiques',
                      '15': 'islam-exegese-coranique',
                      '16': 'islam-science-hadith',
                      '17': 'islam-theologie-islamique',
                      '18': 'islam-spiritualite'
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
              <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
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
              Prenez notre quiz pour vérifier ce que vous avez appris en sciences islamiques
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
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