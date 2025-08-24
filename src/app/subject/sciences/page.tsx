'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function SciencesSubjectPage() {
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

  const scienceLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux des sciences",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "sciences-plantes",
          title: "Les plantes",
          description: "Comment poussent les plantes et les fleurs",
          duration: 8,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌱"
        },
        {
          id: "sciences-terre",
          title: "La Terre",
          description: "Notre planète et ses merveilles",
          duration: 10,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌍"
        },
        {
          id: "sciences-energie",
          title: "L'énergie",
          description: "Les différentes formes d'énergie",
          duration: 7,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "⚡"
        },
        {
          id: "sciences-animaux",
          title: "Les animaux",
          description: "Découvrir le monde animal",
          duration: 9,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🐾"
        },
        {
          id: "sciences-eau",
          title: "L'eau",
          description: "Le cycle de l'eau et ses propriétés",
          duration: 8,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "💧"
        },
        {
          id: "sciences-air",
          title: "L'air",
          description: "L'atmosphère et la respiration",
          duration: 6,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "💨"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Sciences intermédiaires",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "sciences-ecosystemes",
          title: "Les écosystèmes",
          description: "Les relations entre êtres vivants et environnement",
          duration: 12,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌿"
        },
        {
          id: "sciences-forces",
          title: "Les forces",
          description: "Gravité, magnétisme et autres forces",
          duration: 14,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔋"
        },
        {
          id: "sciences-matiere",
          title: "La matière",
          description: "Solide, liquide, gaz et changements d'état",
          duration: 15,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧪"
        },
        {
          id: "sciences-reactions-chimiques",
          title: "Les réactions chimiques",
          description: "Transformations et nouvelles substances",
          duration: 16,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚗️"
        },
        {
          id: "sciences-electricite",
          title: "L'électricité",
          description: "Courant électrique et circuits simples",
          duration: 13,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚡"
        },
        {
          id: "sciences-ondes",
          title: "Les ondes",
          description: "Son, lumière et autres types d'ondes",
          duration: 11,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌊"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Sciences avancées",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "sciences-genetique",
          title: "La génétique",
          description: "Hérédité et ADN",
          duration: 20,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧬"
        },
        {
          id: "sciences-evolution",
          title: "L'évolution",
          description: "Comment les espèces changent au fil du temps",
          duration: 18,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🦕"
        },
        {
          id: "sciences-mecanique-quantique",
          title: "La mécanique quantique",
          description: "Introduction aux phénomènes quantiques",
          duration: 25,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚛️"
        },
        {
          id: "sciences-astronomie",
          title: "L'astronomie",
          description: "L'univers, les galaxies et les planètes",
          duration: 22,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌌"
        },
        {
          id: "sciences-biotechnologie",
          title: "La biotechnologie",
          description: "Applications technologiques en biologie",
          duration: 20,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔬"
        },
        {
          id: "sciences-nanotechnologies",
          title: "Les nanotechnologies",
          description: "Science à l'échelle moléculaire",
          duration: 23,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔬"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Sciences expertes",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "sciences-physique-particules",
          title: "Physique des particules",
          description: "Les constituants fondamentaux de la matière",
          duration: 30,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚛️"
        },
        {
          id: "sciences-astrophysique",
          title: "Astrophysique avancée",
          description: "Trous noirs, énergie sombre et cosmologie",
          duration: 28,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌌"
        },
        {
          id: "sciences-biologie-synthetique",
          title: "Biologie synthétique",
          description: "Création de formes de vie artificielles",
          duration: 32,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧬"
        },
        {
          id: "sciences-climat",
          title: "Sciences du climat",
          description: "Comprendre et prévoir les changements climatiques",
          duration: 25,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌡️"
        },
        {
          id: "sciences-recherche-spatiale",
          title: "Recherche spatiale",
          description: "Exploration et colonisation de l'espace",
          duration: 35,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🚀"
        },
        {
          id: "sciences-innovation",
          title: "Innovation scientifique",
          description: "Créer et développer de nouvelles technologies",
          duration: 40,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💡"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-orange-50 to-green-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-green-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">��</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Sciences
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les sciences de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet de sciences en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {scienceLevels.map((level) => (
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
              className="bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
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
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200 hover:shadow-lg transition-shadow">
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
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
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