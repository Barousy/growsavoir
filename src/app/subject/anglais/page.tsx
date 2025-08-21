'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { englishQuiz } from '@/data/quizData';

export default function EnglishSubjectPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizComplete = (score: number, total: number) => {
    setQuizCompleted(true);
    console.log(`Quiz completed with score: ${score}/${total}`);
  };

  const lessons = [
    {
      id: '1',
      title: "L'alphabet anglais",
      description: "Apprenez à prononcer les 26 lettres de l'alphabet anglais",
      duration: 5,
      difficulty: 'beginner' as const,
      emoji: '��',
      color: 'bg-blue-500',
      isCompleted: false,
      isLocked: false
    },
    {
      id: '2',
      title: "Salutations de base",
      description: "Hello, Good morning, How are you? et plus encore",
      duration: 8,
      difficulty: 'beginner' as const,
      emoji: '��',
      color: 'bg-blue-500',
      isCompleted: false,
      isLocked: false
    },
    {
      id: '3',
      title: "Les couleurs",
      description: "Red, blue, green, yellow et bien plus encore",
      duration: 6,
      difficulty: 'beginner' as const,
      emoji: '��',
      color: 'bg-blue-500',
      isCompleted: false,
      isLocked: false
    },
    {
      id: '4',
      title: "Compter de 1 à 20",
      description: "One, two, three... jusqu'à twenty",
      duration: 7,
      difficulty: 'beginner' as const,
      emoji: '��',
      color: 'bg-blue-500',
      isCompleted: false,
      isLocked: false
    },
    {
      id: '5',
      title: "Les animaux",
      description: "Dog, cat, bird, fish et autres animaux",
      duration: 9,
      difficulty: 'beginner' as const,
      emoji: '��',
      color: 'bg-blue-500',
      isCompleted: false,
      isLocked: false
    },
    {
      id: '6',
      title: "Les fruits et légumes",
      description: "Apple, banana, carrot, tomato et plus",
      duration: 8,
      difficulty: 'beginner' as const,
      emoji: '��',
      color: 'bg-blue-500',
      isCompleted: false,
      isLocked: false
    }
  ];

  if (showQuiz) {
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
                quiz={englishQuiz}
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
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🇬🇧</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Apprendre l'anglais
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'anglais de manière ludique avec nos leçons interactives
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet d'anglais en 4 niveaux, de débutant à avancé
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-2">🟢</div>
                <h3 className="font-semibold text-slate-800">Niveau 1</h3>
                <p className="text-sm text-slate-600">Débutant</p>
                <p className="text-xs text-slate-500 mt-2">6 leçons</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-2">🟡</div>
                <h3 className="font-semibold text-slate-800">Niveau 2</h3>
                <p className="text-sm text-slate-600">Intermédiaire</p>
                <p className="text-xs text-slate-500 mt-2">8 leçons</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-2">🟠</div>
                <h3 className="font-semibold text-slate-800">Niveau 3</h3>
                <p className="text-sm text-slate-600">Avancé</p>
                <p className="text-xs text-slate-500 mt-2">10 leçons</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-2">🔴</div>
                <h3 className="font-semibold text-slate-800">Niveau 4</h3>
                <p className="text-sm text-slate-600">Expert</p>
                <p className="text-xs text-slate-500 mt-2">12 leçons</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Grid - Level 1 */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Niveau 1 - Débutant</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  {...lesson}
                  onStart={() => {
                    const lessonSlugs = {
                      '1': 'anglais-alphabet',
                      '2': 'anglais-salutations',
                      '3': 'anglais-couleurs',
                      '4': 'anglais-nombres',
                      '5': 'anglais-animaux',
                      '6': 'anglais-fruits'
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
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Voir toutes les leçons du niveau 1
              </button>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Testez vos connaissances</h2>
            <p className="text-lg text-slate-600 mb-8">
              Prenez notre quiz pour vérifier ce que vous avez appris
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Défi quotidien</h3>
                <p className="text-slate-600 mb-4">Un nouveau défi chaque jour</p>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
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