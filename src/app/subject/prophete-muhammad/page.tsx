'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';

import { Brain, Trophy, ArrowLeft, BookOpenCheck, Heart, Building2 } from 'lucide-react';

export default function ProphetMuhammadSubjectPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);


  const handleLevelToggle = (levelId: number) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };


  const handleQuizStart = () => {
    console.log('Démarrage du quiz sur le Prophète Muhammad ﷺ');
  };

  const handleDailyChallenge = () => {
    console.log('Participation au défi quotidien sur le Prophète Muhammad ﷺ');
  };

  const prophetLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Introduction à la vie du Prophète ﷺ",
      lessonCount: 8,
      color: "bg-green-500",
      lessons: [
        {
          id: "prophete-naissance",
          title: "La naissance du Prophète ﷺ",
          description: "La nuit bénie de sa naissance et son enfance",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👶"
        },
        {
          id: "prophete-famille",
          title: "Sa famille et ses ancêtres",
          description: "La noble lignée du Prophète ﷺ",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👨‍👩‍👧‍👦"
        },
        {
          id: "prophete-enfance",
          title: "Son enfance et sa jeunesse",
          description: "Les événements marquants de sa jeunesse",
          duration: 22,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌱"
        },
        {
          id: "prophete-mariage",
          title: "Son mariage avec Khadija رضي الله عنها",
          description: "L'histoire de leur union bénie",
          duration: 25,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "💍"
        },
        {
          id: "prophete-hira",
          title: "La grotte de Hira",
          description: "Les moments de méditation et de réflexion",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🏔️"
        },
        {
          id: "prophete-revelation",
          title: "La première révélation",
          description: "L'ange Jibril et les premiers versets",
          duration: 28,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📖"
        },
        {
          id: "prophete-premiers-musulmans",
          title: "Les premiers musulmans",
          description: "Khadija, Ali, Abu Bakr et les autres",
          duration: 24,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🤝"
        },
        {
          id: "prophete-persecution",
          title: "Les débuts de la persécution",
          description: "Les difficultés des premiers temps",
          duration: 26,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "💪"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "La mission prophétique à La Mecque",
      lessonCount: 8,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "prophete-appel-public",
          title: "L'appel public à l'Islam",
          description: "La diffusion du message islamique",
          duration: 30,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📢"
        },
        {
          id: "prophete-opposition",
          title: "L'opposition des Quraysh",
          description: "Les stratégies d'opposition et de résistance",
          duration: 32,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚔️"
        },
        {
          id: "prophete-boycott",
          title: "Le boycott des Banu Hashim",
          description: "Les années difficiles du boycott",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🚫"
        },
        {
          id: "prophete-annee-tristesse",
          title: "L'année de la tristesse",
          description: "La perte de Khadija et d'Abu Talib",
          duration: 25,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "😢"
        },
        {
          id: "prophete-isra-miraj",
          title: "Le voyage nocturne et l'ascension",
          description: "Al-Isra et Al-Mi'raj",
          duration: 35,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌙"
        },
        {
          id: "prophete-premiers-pactes",
          title: "Les premiers pactes",
          description: "Les alliances avec les tribus",
          duration: 30,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🤝"
        },
        {
          id: "prophete-migration-ethiopie",
          title: "La migration vers l'Éthiopie",
          description: "La première hijra et ses enseignements",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🛶"
        },
        {
          id: "prophete-strategie-mecque",
          title: "La stratégie à La Mecque",
          description: "Les méthodes d'enseignement et de patience",
          duration: 32,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎯"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "La hijra et l'établissement à Médine",
      lessonCount: 8,
      color: "bg-red-500",
      lessons: [
        {
          id: "prophete-hijra",
          title: "La grande hijra vers Médine",
          description: "Le voyage historique vers Yathrib",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🐪"
        },
        {
          id: "prophete-construction-mosquee",
          title: "La construction de la mosquée",
          description: "La première mosquée de l'Islam",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕌"
        },
        {
          id: "prophete-constitution-medine",
          title: "La constitution de Médine",
          description: "Le premier document constitutionnel",
          duration: 38,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📜"
        },
        {
          id: "prophete-batailles",
          title: "Les grandes batailles",
          description: "Badr, Uhud, Khandaq et autres",
          duration: 45,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚔️"
        },
        {
          id: "prophete-traites",
          title: "Les traités de paix",
          description: "Hudaybiyyah et la stratégie diplomatique",
          duration: 42,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕊️"
        },
        {
          id: "prophete-conquete-mecque",
          title: "La conquête de La Mecque",
          description: "La victoire pacifique et le pardon",
          duration: 48,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        },
        {
          id: "prophete-pelerinage-adieu",
          title: "Le pèlerinage d'adieu",
          description: "Le dernier sermon et les derniers conseils",
          duration: 50,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕋"
        },
        {
          id: "prophete-fin-vie",
          title: "Les derniers jours",
          description: "Sa maladie et son décès",
          duration: 45,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "☁️"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "L'héritage et l'enseignement du Prophète ﷺ",
      lessonCount: 8,
      color: "bg-purple-500",
      lessons: [
        {
          id: "prophete-sunna",
          title: "La Sunna et son importance",
          description: "L'étude approfondie des traditions prophétiques",
          duration: 55,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "prophete-caracteres",
          title: "Ses caractères et qualités",
          description: "L'excellence morale et spirituelle",
          duration: 52,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✨"
        },
        {
          id: "prophete-enseignement",
          title: "Sa méthode d'enseignement",
          description: "Les techniques pédagogiques du Prophète ﷺ",
          duration: 58,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👨‍🏫"
        },
        {
          id: "prophete-compagnons",
          title: "Les grands compagnons",
          description: "L'étude des figures majeures de l'Islam",
          duration: 60,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👥"
        },
        {
          id: "prophete-miracles",
          title: "Les miracles du Prophète ﷺ",
          description: "L'étude des signes divins",
          duration: 65,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌟"
        },
        {
          id: "prophete-heritage",
          title: "L'héritage spirituel",
          description: "L'impact sur l'humanité et l'histoire",
          duration: 70,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏆"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-emerald-50 to-green-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-6">
              <BookOpenCheck className="w-10 h-10 text-white" />

            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Le Prophète Muhammad ﷺ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">

              Découvrez la vie exemplaire du Messager d'Allah et ses enseignements pour l'humanité

            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">

              Un programme complet sur la vie du Prophète ﷺ en 4 niveaux, respectant les sources authentiques

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

              className="bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl"

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

              Prenez notre quiz pour vérifier ce que vous avez appris sur le Prophète ﷺ

            </p>
          </div>

          {/* Cartes Quiz et Défi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Quiz */}

            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <Brain className="w-8 h-8 text-emerald-600" />

                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Quiz Niveau 1
                </h3>
                <p className="text-gray-700 mb-6">

                  Testez vos connaissances de base sur le Prophète ﷺ
                </p>
                <button
                  onClick={handleQuizStart}
                  className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"

                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-shadow">

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Défi quotidien
                </h3>
                <p className="text-gray-700 mb-6">

                  Un nouveau défi chaque jour pour approfondir vos connaissances
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


          {/* Section spéciale sur l'amour du Prophète */}
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl p-8 mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-200 rounded-full mb-4">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              L'amour du Prophète ﷺ
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              "Aucun d'entre vous n'aura la foi complète jusqu'à ce qu'il m'aime plus que son père, 
              son fils et toute l'humanité." - Hadith authentique
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                <span>Sources authentiques</span>
              </div>
              <div className="flex items-center">
                <BookOpenCheck className="w-4 h-4 mr-2" />
                <span>Valeurs islamiques</span>
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