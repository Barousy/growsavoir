'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function ArtsSubjectPage() {
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

  const artsLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux des arts",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "arts-dessin-base",
          title: "Dessin de base",
          description: "Lignes, formes et perspectives simples",
          duration: 15,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "✏️"
        },
        {
          id: "arts-couleurs-primaires",
          title: "Couleurs primaires",
          description: "Rouge, bleu, jaune et leurs mélanges",
          duration: 12,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🎨"
        },
        {
          id: "arts-papier-decoupe",
          title: "Papier et découpage",
          description: "Techniques de base du papier",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "✂️"
        },
        {
          id: "arts-peinture-au-doigt",
          title: "Peinture au doigt",
          description: "Créer avec ses mains",
          duration: 14,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👆"
        },
        {
          id: "arts-collage-simple",
          title: "Collage simple",
          description: "Assembler des matériaux",
          duration: 16,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📎"
        },
        {
          id: "arts-modelage-argile",
          title: "Modelage d'argile",
          description: "Sculpter des formes simples",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🧱"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Arts intermédiaires",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "arts-aquarelle",
          title: "Aquarelle",
          description: "Peinture à l'eau et transparence",
          duration: 25,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌊"
        },
        {
          id: "arts-perspective",
          title: "Perspective",
          description: "Créer l'illusion de profondeur",
          duration: 22,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏗️"
        },
        {
          id: "arts-portrait",
          title: "Portrait",
          description: "Dessiner le visage humain",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👤"
        },
        {
          id: "arts-paysage",
          title: "Paysage",
          description: "Représenter la nature",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏞️"
        },
        {
          id: "arts-impression",
          title: "Techniques d'impression",
          description: "Gravure et monotype",
          duration: 30,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🖨️"
        },
        {
          id: "arts-mosaique",
          title: "Mosaïque",
          description: "Art de l'assemblage coloré",
          duration: 26,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧩"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Arts avancés",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "arts-huile",
          title: "Peinture à l'huile",
          description: "Techniques traditionnelles",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🖼️"
        },
        {
          id: "arts-abstrait",
          title: "Art abstrait",
          description: "Formes et couleurs non figuratives",
          duration: 32,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎭"
        },
        {
          id: "arts-sculpture",
          title: "Sculpture",
          description: "Créer en trois dimensions",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🗿"
        },
        {
          id: "arts-numerique",
          title: "Art numérique",
          description: "Créer avec la technologie",
          duration: 38,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💻"
        },
        {
          id: "arts-installation",
          title: "Installation",
          description: "Art dans l'espace",
          duration: 45,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        },
        {
          id: "arts-performance",
          title: "Performance",
          description: "Art vivant et éphémère",
          duration: 42,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎪"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Arts experts",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "arts-contemporain",
          title: "Art contemporain",
          description: "Tendances actuelles et concepts",
          duration: 50,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎨"
        },
        {
          id: "arts-restauration",
          title: "Restauration d'art",
          description: "Préserver et restaurer les œuvres",
          duration: 55,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔧"
        },
        {
          id: "arts-critique",
          title: "Critique d'art",
          description: "Analyser et évaluer les œuvres",
          duration: 45,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📝"
        },
        {
          id: "arts-commissariat",
          title: "Commissariat d'exposition",
          description: "Organiser et présenter l'art",
          duration: 60,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        },
        {
          id: "arts-enseignement",
          title: "Enseignement artistique",
          description: "Transmettre la passion de l'art",
          duration: 48,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👨‍🏫"
        },
        {
          id: "arts-heritage",
          title: "Héritage artistique",
          description: "Créer pour la postérité",
          duration: 65,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏺"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">��</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Arts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les arts de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet d'arts en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {artsLevels.map((level) => (
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
              className="bg-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
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
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200 hover:shadow-lg transition-shadow">
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
                  className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
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
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
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