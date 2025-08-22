'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function IslamicHistorySubjectPage() {
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

  const islamicHistoryLevels = [
    {
      id: 1,
      name: "Niveau 1 - Fondamentaux",
      description: "Histoire depuis la création jusqu'aux premiers prophètes",
      lessonCount: 8,
      color: "bg-green-500",
      lessons: [
        {
          id: "histoire-creation-univers",
          title: "La création de l'univers",
          description: "Depuis le début selon Ibn Kathir - Al-Bidayah wa An-Nihayah",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌌"
        },
        {
          id: "histoire-creation-terre",
          title: "La création de la Terre",
          description: "Formation de notre planète et ses merveilles",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌍"
        },
        {
          id: "histoire-creation-adam",
          title: "La création d'Adam",
          description: "Le premier être humain selon l'Islam",
          duration: 22,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👤"
        },
        {
          id: "histoire-premiers-prophètes",
          title: "Les premiers prophètes",
          description: "Noé, Ibrahim et les autres messagers",
          duration: 25,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📖"
        },
        {
          id: "histoire-moïse-pharaon",
          title: "Moïse et le Pharaon",
          description: "L'histoire de la libération des enfants d'Israël",
          duration: 28,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌊"
        },
        {
          id: "histoire-jésus-marie",
          title: "Jésus et Marie",
          description: "La naissance miraculeuse et les miracles",
          duration: 24,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👶"
        },
        {
          id: "histoire-arabie-avant-islam",
          title: "L'Arabie avant l'Islam",
          description: "La situation sociale et religieuse de la péninsule",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🏜️"
        },
        {
          id: "histoire-naissance-prophète",
          title: "La naissance du Prophète",
          description: "L'année de l'éléphant et la naissance de Muhammad",
          duration: 26,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🕊️"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Prophétie",
      description: "La vie du Prophète Muhammad ﷺ",
      lessonCount: 8,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "histoire-enfance-prophète",
          title: "L'enfance du Prophète",
          description: "Ses premières années et son éducation",
          duration: 22,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👶"
        },
        {
          id: "histoire-jeunesse-prophète",
          title: "La jeunesse du Prophète",
          description: "Ses voyages commerciaux et son mariage",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💼"
        },
        {
          id: "histoire-premiere-revelation",
          title: "La première révélation",
          description: "La grotte de Hira et le début de la prophétie",
          duration: 26,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📖"
        },
        {
          id: "histoire-premiers-musulmans",
          title: "Les premiers musulmans",
          description: "Khadija, Ali, Abou Bakr et les autres",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🤝"
        },
        {
          id: "histoire-persecution-mecque",
          title: "La persécution à La Mecque",
          description: "Les difficultés et les épreuves",
          duration: 30,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "😔"
        },
        {
          id: "histoire-hijra-madina",
          title: "L'Hijra vers Médine",
          description: "L'émigration et la fondation de la première communauté",
          duration: 32,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🐪"
        },
        {
          id: "histoire-batailles-islam",
          title: "Les batailles de l'Islam",
          description: "Badr, Uhud, Khandaq et autres",
          duration: 35,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚔️"
        },
        {
          id: "histoire-conquete-mecque",
          title: "La conquête de La Mecque",
          description: "Le retour triomphal et la clémence",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕋"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Califat",
      description: "L'ère des califes bien-guidés et des dynasties",
      lessonCount: 8,
      color: "bg-red-500",
      lessons: [
        {
          id: "histoire-califes-bien-guidés",
          title: "Les califes bien-guidés",
          description: "Abou Bakr, Omar, Othman et Ali",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👑"
        },
        {
          id: "histoire-omeyyades",
          title: "La dynastie omeyyade",
          description: "L'expansion de l'empire islamique",
          duration: 38,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        },
        {
          id: "histoire-abbassides",
          title: "La dynastie abbasside",
          description: "L'âge d'or de la civilisation islamique",
          duration: 42,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "histoire-andalousie",
          title: "L'Andalousie musulmane",
          description: "Al-Andalus et sa splendeur culturelle",
          duration: 45,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏰"
        },
        {
          id: "histoire-ottomans",
          title: "L'Empire ottoman",
          description: "La puissance turque et son héritage",
          duration: 48,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕌"
        },
        {
          id: "histoire-moghols",
          title: "L'Empire moghol",
          description: "L'Islam en Inde et ses réalisations",
          duration: 44,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕍"
        },
        {
          id: "histoire-afrique-islam",
          title: "L'Islam en Afrique",
          description: "La diffusion de l'Islam sur le continent",
          duration: 46,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌍"
        },
        {
          id: "histoire-asie-islam",
          title: "L'Islam en Asie",
          description: "L'expansion vers l'Est et l'Asie du Sud-Est",
          duration: 42,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🗺️"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Époque moderne",
      description: "L'Islam à l'époque moderne et contemporaine",
      lessonCount: 8,
      color: "bg-purple-500",
      lessons: [
        {
          id: "histoire-colonisation",
          title: "La période coloniale",
          description: "L'impact de la colonisation sur le monde musulman",
          duration: 50,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚓"
        },
        {
          id: "histoire-independance",
          title: "Les mouvements d'indépendance",
          description: "La libération des pays musulmans",
          duration: 48,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏁"
        },
        {
          id: "histoire-mondialisation",
          title: "L'Islam et la mondialisation",
          description: "Les défis de l'époque moderne",
          duration: 52,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌐"
        },
        {
          id: "histoire-diaspora",
          title: "La diaspora musulmane",
          description: "Les musulmans en Occident",
          duration: 45,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✈️"
        },
        {
          id: "histoire-technologie",
          title: "L'Islam et la technologie",
          description: "L'adaptation aux nouvelles technologies",
          duration: 55,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💻"
        },
        {
          id: "histoire-environnement",
          title: "L'Islam et l'environnement",
          description: "La responsabilité écologique en Islam",
          duration: 42,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌱"
        },
        {
          id: "histoire-futur",
          title: "L'avenir de l'Islam",
          description: "Les perspectives et les défis futurs",
          duration: 60,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔮"
        },
        {
          id: "histoire-enseignement",
          title: "Enseigner l'histoire islamique",
          description: "Transmettre ce patrimoine aux générations futures",
          duration: 65,
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
      <main className="pt-16 pb-8 bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">��</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Histoire de l'Islam
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l'histoire de l'Islam de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet d'histoire de l'Islam en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {islamicHistoryLevels.map((level) => (
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
              className="bg-amber-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl"
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
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200 hover:shadow-lg transition-shadow">
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
                  className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200 hover:shadow-lg transition-shadow">
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
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
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