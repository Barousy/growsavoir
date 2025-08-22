'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function ProphetMuhammadSubjectPage() {
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

  const prophetLevels = [
    {
      id: 1,
      name: "Niveau 1 - Fondamentaux",
      description: "Vie et mission du Prophète Muhammad ﷺ",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "prophete-naissance",
          title: "La naissance du Prophète",
          description: "L'année de l'éléphant et la naissance miraculeuse",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👶"
        },
        {
          id: "prophete-enfance",
          title: "L'enfance du Prophète",
          description: "Ses premières années et son éducation",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌱"
        },
        {
          id: "prophete-jeunesse",
          title: "La jeunesse du Prophète",
          description: "Ses voyages commerciaux et son mariage avec Khadija",
          duration: 22,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "💼"
        },
        {
          id: "prophete-premiere-revelation",
          title: "La première révélation",
          description: "La grotte de Hira et le début de la prophétie",
          duration: 25,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📖"
        },
        {
          id: "prophete-premiers-musulmans",
          title: "Les premiers musulmans",
          description: "Khadija, Ali, Abou Bakr et les premiers convertis",
          duration: 24,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🤝"
        },
        {
          id: "prophete-persecution",
          title: "La persécution à La Mecque",
          description: "Les difficultés et les épreuves des premiers musulmans",
          duration: 26,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "😔"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Hijra et Médine",
      description: "L'émigration et la fondation de la communauté",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "prophete-hijra",
          title: "L'Hijra vers Médine",
          description: "L'émigration et la fondation de la première communauté musulmane",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🐪"
        },
        {
          id: "prophete-mosquee",
          title: "La construction de la mosquée",
          description: "La première mosquée de l'Islam et son importance",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕌"
        },
        {
          id: "prophete-constitution",
          title: "La Constitution de Médine",
          description: "Le premier document constitutionnel de l'Islam",
          duration: 30,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📜"
        },
        {
          id: "prophete-fratrie",
          title: "La fraternisation",
          description: "L'union entre les Muhajirun et les Ansar",
          duration: 26,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🤗"
        },
        {
          id: "prophete-premieres-batailles",
          title: "Les premières batailles",
          description: "Badr, Uhud et les défis militaires",
          duration: 32,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚔️"
        },
        {
          id: "prophete-traités",
          title: "Les traités de paix",
          description: "La diplomatie et les accords avec les tribus",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🤝"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Conquêtes et expansion",
      description: "L'expansion de l'Islam et la victoire finale",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "prophete-conquete-mecque",
          title: "La conquête de La Mecque",
          description: "Le retour triomphal et la clémence du Prophète",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕋"
        },
        {
          id: "prophete-batailles-finales",
          title: "Les batailles finales",
          description: "Hunayn, Ta'if et la consolidation du pouvoir",
          duration: 38,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏹"
        },
        {
          id: "prophete-pelerinage-adieu",
          title: "Le pèlerinage d'adieu",
          description: "Le dernier pèlerinage et le sermon d'adieu",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕊️"
        },
        {
          id: "prophete-derniers-jours",
          title: "Les derniers jours",
          description: "La maladie et les derniers moments du Prophète",
          duration: 32,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "😢"
        },
        {
          id: "prophete-succession",
          title: "La question de la succession",
          description: "Les événements après la mort du Prophète",
          duration: 36,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👑"
        },
        {
          id: "prophete-heritage",
          title: "L'héritage du Prophète",
          description: "L'impact durable de sa mission et de son message",
          duration: 42,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Enseignements et sagesse",
      description: "Les enseignements profonds et la sagesse prophétique",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "prophete-sagesse",
          title: "La sagesse prophétique",
          description: "Les paroles de sagesse et les conseils du Prophète",
          duration: 45,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💡"
        },
        {
          id: "prophete-ethique",
          title: "L'éthique prophétique",
          description: "Les valeurs morales et le comportement exemplaire",
          duration: 48,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✨"
        },
        {
          id: "prophete-relations",
          title: "Les relations humaines",
          description: "Comment le Prophète traitait les gens",
          duration: 42,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👥"
        },
        {
          id: "prophete-femmes",
          title: "Le respect des femmes",
          description: "L'attitude du Prophète envers les femmes",
          duration: 44,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👩"
        },
        {
          id: "prophete-enfants",
          title: "L'amour des enfants",
          description: "Comment le Prophète traitait les enfants",
          duration: 38,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👶"
        },
        {
          id: "prophete-enseignement",
          title: "L'art d'enseigner",
          description: "Les méthodes d'enseignement du Prophète",
          duration: 50,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👨‍🏫"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">🕊️</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Le Prophète Muhammad ﷺ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez la vie et les enseignements du Prophète Muhammad ﷺ
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet sur le Prophète Muhammad ﷺ en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {prophetLevels.map((level) => (
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
              className="bg-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl"
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
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
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
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200 hover:shadow-lg transition-shadow">
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
                  className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
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