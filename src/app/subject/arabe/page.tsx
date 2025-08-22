'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function ArabicSubjectPage() {
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

  const arabicLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux de la langue arabe",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "arabe-alphabet",
          title: "الحروف الأبجدية",
          description: "تعلم الحروف العربية الـ 28 وطريقة كتابتها",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔤"
        },
        {
          id: "arabe-voyelles",
          title: "الحركات",
          description: "الفتحة والكسرة والضمة والسكون",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔊"
        },
        {
          id: "arabe-nombres",
          title: "الأرقام العربية",
          description: "تعلم العد من 1 إلى 100 باللغة العربية",
          duration: 22,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔢"
        },
        {
          id: "arabe-couleurs",
          title: "الألوان والأشكال",
          description: "تعلم أسماء الألوان والأشكال الهندسية",
          duration: 16,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🎨"
        },
        {
          id: "arabe-famille",
          title: "أفراد العائلة",
          description: "أسماء أفراد العائلة والعلاقات",
          duration: 24,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👨‍��‍👧‍👦"
        },
        {
          id: "arabe-animaux",
          title: "الحيوانات",
          description: "أسماء الحيوانات الأليفة والبرية",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🐾"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Arabe intermédiaire",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "arabe-articles",
          title: "أدوات التعريف والتنكير",
          description: "ال التعريف والتنوين وأدوات أخرى",
          duration: 25,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📝"
        },
        {
          id: "arabe-verbes",
          title: "الأفعال",
          description: "تصريف الأفعال في الماضي والمضارع",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔗"
        },
        {
          id: "arabe-adjectifs",
          title: "الصفات",
          description: "الصفات المشبهة والصفات المفضلة",
          duration: 26,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✨"
        },
        {
          id: "arabe-pluriel",
          title: "جمع المذكر والمؤنث",
          description: "قواعد جمع الأسماء والصفات",
          duration: 30,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "arabe-phrases",
          title: "الجمل البسيطة",
          description: "بناء الجمل الاسمية والفعلية",
          duration: 32,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💬"
        },
        {
          id: "arabe-questions",
          title: "أدوات الاستفهام",
          description: "كيفية طرح الأسئلة باللغة العربية",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "❓"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Arabe avancé",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "arabe-temps-verbaux",
          title: "الأزمنة",
          description: "الماضي والمضارع والأمر والمضارع المنصوب",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⏰"
        },
        {
          id: "arabe-grammaire",
          title: "قواعد النحو",
          description: "الإعراب والبناء والجملة الاسمية والفعلية",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📖"
        },
        {
          id: "arabe-morphologie",
          title: "علم الصرف",
          description: "اشتقاق الكلمات والأوزان الصرفية",
          duration: 38,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔍"
        },
        {
          id: "arabe-rhetorique",
          title: "علم البلاغة",
          description: "المجاز والكناية والاستعارة",
          duration: 42,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎭"
        },
        {
          id: "arabe-poesie",
          title: "الشعر العربي",
          description: "أوزان الشعر والقوافي والبحور",
          duration: 45,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌹"
        },
        {
          id: "arabe-litterature",
          title: "الأدب العربي",
          description: "النثر العربي والقصص والروايات",
          duration: 48,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Arabe expert",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "arabe-classique",
          title: "العربية الفصحى",
          description: "اللغة العربية الكلاسيكية والقديمة",
          duration: 50,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        },
        {
          id: "arabe-dialectes",
          title: "اللهجات العربية",
          description: "اللهجات المصرية والشامية والخليجية",
          duration: 55,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🗣️"
        },
        {
          id: "arabe-calligraphie",
          title: "فن الخط العربي",
          description: "الخط الكوفي والنسخ والرقعة",
          duration: 60,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✒️"
        },
        {
          id: "arabe-traduction",
          title: "الترجمة",
          description: "ترجمة النصوص من العربية وإليها",
          duration: 52,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔄"
        },
        {
          id: "arabe-enseignement",
          title: "تعليم العربية",
          description: "طرق تدريس اللغة العربية للناطقين بغيرها",
          duration: 58,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👨‍🏫"
        },
        {
          id: "arabe-perfectionnement",
          title: "الكمال اللغوي",
          description: "الوصول إلى مستوى متقدم في اللغة العربية",
          duration: 65,
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
      <main className="pt-16 pb-8 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">ع</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              اللغة العربية
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف اللغة العربية بطريقة تفاعلية وممتعة
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet d'arabe en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {arabicLevels.map((level) => (
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
              className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
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
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-shadow">
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
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
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
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
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