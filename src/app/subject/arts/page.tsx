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
  const [selectedLevel, setSelectedLevel] = useState('1');

  const handleQuizComplete = (score: number, total: number) => {
    setQuizCompleted(true);
    console.log(`Quiz completed with score: ${score}/${total}`);
  };

  const lessons = {
    '1': [
      {
        id: '1',
        title: 'Dessin de base',
        description: 'Apprendre à dessiner des formes simples et des animaux',
        duration: 15,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: 'Les couleurs primaires',
        description: 'Découvrir et mélanger les couleurs de base',
        duration: 20,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: 'Papier mâché créatif',
        description: 'Créer des objets en papier mâché coloré',
        duration: 30,
        difficulty: 'beginner' as const,
        emoji: '✂️',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: 'Peinture au doigt',
        description: 'Peindre avec les doigts et créer des textures',
        duration: 25,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: 'Collage simple',
        description: 'Créer des compositions avec du papier coloré',
        duration: 18,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: 'Modelage en pâte à modeler',
        description: 'Sculpter des formes simples et des animaux',
        duration: 22,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: 'Perspective et profondeur',
        description: 'Apprendre les techniques de perspective en dessin',
        duration: 25,
        difficulty: 'intermediate' as const,
        emoji: '🏗️',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: 'Techniques d\'aquarelle',
        description: 'Maîtriser la peinture à l\'eau et les dégradés',
        duration: 35,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: 'Collage artistique',
        description: 'Créer des compositions avec différents matériaux',
        duration: 40,
        difficulty: 'intermediate' as const,
        emoji: '✂️',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: 'Dessin au fusain',
        description: 'Techniques de dessin avec du charbon',
        duration: 28,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: 'Peinture acrylique',
        description: 'Apprendre à peindre avec l\'acrylique',
        duration: 32,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: 'Origami créatif',
        description: 'Plier du papier pour créer des formes 3D',
        duration: 26,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: 'Portrait réaliste',
        description: 'Techniques avancées pour dessiner des visages',
        duration: 45,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: 'Peinture numérique',
        description: 'Introduction aux outils de création numérique',
        duration: 50,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: 'Sculpture en argile',
        description: 'Créer des formes 3D avec l\'argile',
        duration: 60,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: 'Calligraphie artistique',
        description: 'L\'art de la belle écriture',
        duration: 38,
        difficulty: 'advanced' as const,
        emoji: '✒️',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: 'Peinture à l\'huile',
        description: 'Techniques traditionnelles de peinture à l\'huile',
        duration: 55,
        difficulty: 'advanced' as const,
        emoji: '🖼️',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: 'Gravure sur linoléum',
        description: 'Créer des impressions avec la gravure',
        duration: 42,
        difficulty: 'advanced' as const,
        emoji: '🖨️',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '4': [
      {
        id: '19',
        title: 'Art abstrait',
        description: 'Créer des œuvres non figuratives',
        duration: 65,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '20',
        title: 'Installation artistique',
        description: 'Créer des œuvres d\'art en 3D',
        duration: 70,
        difficulty: 'expert' as const,
        emoji: '🏛️',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '21',
        title: 'Performance artistique',
        description: 'L\'art de la performance et du spectacle',
        duration: 55,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '22',
        title: 'Art conceptuel',
        description: 'Créer des œuvres basées sur des idées',
        duration: 60,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '23',
        title: 'Art numérique avancé',
        description: 'Maîtriser les outils de création numérique',
        duration: 75,
        difficulty: 'expert' as const,
        emoji: '🖥️',
        color: 'bg-pink-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '24',
        title: 'Héritage artistique',
        description: 'Créer son propre style et sa signature',
        duration: 80,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-pink-500',
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
          <div className="bg-gradient-to-br from-pink-50 via-white to-pink-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-pink-600 hover:text-pink-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
                quiz={artsQuiz}
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
        <section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🎨</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Arts & Créativité
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Développez votre créativité et votre expression artistique à travers le dessin, 
              la peinture, le bricolage et bien plus encore !
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet d'arts en 4 niveaux, de débutant à expert
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-pink-100 border-2 border-pink-300' 
                      : 'bg-slate-50 hover:bg-pink-50'
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
                      '1': 'arts-dessin-base',
                      '2': 'arts-couleurs-primaires',
                      '3': 'arts-papier-mache',
                      '4': 'arts-peinture-doigt',
                      '5': 'arts-collage-simple',
                      '6': 'arts-modelage-pate',
                      '7': 'arts-perspective-profondeur',
                      '8': 'arts-techniques-aquarelle',
                      '9': 'arts-collage-artistique',
                      '10': 'arts-dessin-fusain',
                      '11': 'arts-peinture-acrylique',
                      '12': 'arts-origami-creatif',
                      '13': 'arts-portrait-realiste',
                      '14': 'arts-peinture-numerique',
                      '15': 'arts-sculpture-argile',
                      '16': 'arts-calligraphie-artistique',
                      '17': 'arts-peinture-huile',
                      '18': 'arts-gravure-linoleum',
                      '19': 'arts-art-abstrait',
                      '20': 'arts-installation-artistique',
                      '21': 'arts-performance-artistique',
                      '22': 'arts-art-conceptuel',
                      '23': 'arts-art-numerique-avance',
                      '24': 'arts-heritage-artistique'
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
              <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
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
              Prenez notre quiz pour vérifier ce que vous avez appris en arts
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
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