'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function WellbeingSubjectPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1); // Niveau 1 ouvert par défaut

  const handleLevelToggle = (levelId: number) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  const handleQuizStart = () => {
    console.log('Démarrage du quiz');
  };

  const handleDailyChallenge = () => {
    console.log('Participation au défi quotidien');
  };

  const wellbeingLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux du bien-être",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "bien-etre-respiration",
          title: "Respiration consciente",
          description: "Apprendre à respirer correctement",
          duration: 10,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🫁"
        },
        {
          id: "bien-etre-relaxation",
          title: "Techniques de relaxation",
          description: "Se détendre et se calmer",
          duration: 12,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "😌"
        },
        {
          id: "bien-etre-sommeil",
          title: "Hygiène du sommeil",
          description: "Améliorer la qualité du sommeil",
          duration: 15,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "😴"
        },
        {
          id: "bien-etre-nutrition",
          title: "Nutrition équilibrée",
          description: "Manger sainement au quotidien",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🥗"
        },
        {
          id: "bien-etre-activite-physique",
          title: "Activité physique douce",
          description: "Bouger sans se faire mal",
          duration: 14,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🚶"
        },
        {
          id: "bien-etre-emotions",
          title: "Gestion des émotions",
          description: "Comprendre et accepter ses émotions",
          duration: 16,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "💭"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Bien-être intermédiaire",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "bien-etre-meditation",
          title: "Méditation guidée",
          description: "Pratiquer la méditation quotidienne",
          duration: 20,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧘"
        },
        {
          id: "bien-etre-yoga",
          title: "Yoga doux",
          description: "Postures et enchaînements simples",
          duration: 25,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧘‍♀️"
        },
        {
          id: "bien-etre-gestion-stress",
          title: "Gestion du stress",
          description: "Techniques anti-stress efficaces",
          duration: 22,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "😰"
        },
        {
          id: "bien-etre-relations",
          title: "Relations saines",
          description: "Cultiver des relations positives",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🤝"
        },
        {
          id: "bien-etre-creativite",
          title: "Expression créative",
          description: "Libérer sa créativité",
          duration: 18,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎨"
        },
        {
          id: "bien-etre-nature",
          title: "Connexion à la nature",
          description: "Se ressourcer en pleine nature",
          duration: 20,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌿"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Bien-être avancé",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "bien-etre-mindfulness",
          title: "Pleine conscience",
          description: "Vivre l'instant présent",
          duration: 30,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌅"
        },
        {
          id: "bien-etre-yoga-avance",
          title: "Yoga avancé",
          description: "Postures complexes et équilibre",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧘‍♂️"
        },
        {
          id: "bien-etre-therapie",
          title: "Techniques thérapeutiques",
          description: "Méthodes de guérison naturelle",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💆"
        },
        {
          id: "bien-etre-spiritualite",
          title: "Développement spirituel",
          description: "Explorer sa dimension spirituelle",
          duration: 38,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✨"
        },
        {
          id: "bien-etre-energie",
          title: "Gestion de l'énergie",
          description: "Optimiser son niveau d'énergie",
          duration: 32,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚡"
        },
        {
          id: "bien-etre-transformation",
          title: "Transformation personnelle",
          description: "Changer et évoluer consciemment",
          duration: 45,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🦋"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Bien-être expert",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "bien-etre-enseignement",
          title: "Enseigner le bien-être",
          description: "Transmettre ses connaissances",
          duration: 50,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👨‍🏫"
        },
        {
          id: "bien-etre-coaching",
          title: "Coaching en bien-être",
          description: "Accompagner les autres",
          duration: 55,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎯"
        },
        {
          id: "bien-etre-recherche",
          title: "Recherche en bien-être",
          description: "Étudier et développer de nouvelles approches",
          duration: 60,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔬"
        },
        {
          id: "bien-etre-innovation",
          title: "Innovation en bien-être",
          description: "Créer de nouvelles méthodes",
          duration: 48,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💡"
        },
        {
          id: "bien-etre-leadership",
          title: "Leadership en bien-être",
          description: "Diriger des projets de bien-être",
          duration: 52,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👑"
        },
        {
          id: "bien-etre-heritage",
          title: "Héritage de bien-être",
          description: "Créer un impact durable",
          duration: 65,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-teal-50 to-green-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-green-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white"></span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Bien-être
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez le bien-être de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet de bien-être en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {wellbeingLevels.map((level) => (
              <LevelCard
                key={level.id}
                level={level}
                isExpanded={expandedLevel === level.id}
                onToggle={handleLevelToggle}
              />
            ))}
          </div>

          {/* Bouton pour voir toutes les leçons du niveau 1 */}
          <div className="text-center mb-12">
            <button
              onClick={() => setExpandedLevel(1)}
              className="bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Voir toutes les leçons du niveau 1
            </button>
          </div>

          {/* Section Quiz et Défis */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testez vos connaissances
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Prenez notre quiz pour vérifier ce que vous avez appris
            </p>
          </div>

          {/* Cartes Quiz et Défi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Quiz */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <Brain className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Quiz Niveau 1
                </h3>
                <p className="text-gray-700 mb-6">
                  Testez vos connaissances de base
                </p>
                <button
                  onClick={handleQuizStart}
                  className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Défi quotidien
                </h3>
                <p className="text-gray-700 mb-6">
                  Un nouveau défi chaque jour
                </p>
                <button
                  onClick={handleDailyChallenge}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Participer
                </button>
              </div>
            </div>
          </div>

          {/* Bouton retour */}
          <div className="text-center">
            <a
              href="/subjects"
              className="inline-flex items-center bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              ← Retour aux matières
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}