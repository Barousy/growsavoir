'use client';

import Link from 'next/link';
import { 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Globe, 
  Code, 
  Building2, 
  History, 
  Palette,
  Heart,
  BookOpenCheck
} from 'lucide-react';

const subjects = [
  {
    slug: 'anglais',
    title: 'Anglais',
    desc: 'Langue anglaise (bases, vocabulaire, prononciation)',
    emoji: '🇬🇧',
    icon: Globe,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    lessonCount: 45,
    difficulty: 'Tous niveaux',
    duration: '15-30 min'
  },
  {
    slug: 'arabe',
    title: 'Langue arabe',
    desc: "Apprentissage de l'arabe classique et moderne",
    emoji: '🏰',
    icon: BookOpen,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    lessonCount: 78,
    difficulty: 'Tous niveaux',
    duration: '20-40 min'
  },
  {
    slug: 'prophete-muhammad',
    title: 'Le Prophète Muhammad ﷺ',
    desc: 'Vie complète du Messager d\'Allah et de Ses Compagnons',
    emoji: '🕌',
    icon: BookOpenCheck,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    lessonCount: 32,
    difficulty: 'Tous niveaux',
    duration: '25-45 min'
  },
  {
    slug: 'prophete-muhammad',
    title: 'Le Prophète Muhammad ﷺ',
    desc: 'Vie complète du Messager d\'Allah et de Ses Compagnons',
    emoji: '🕌',
    icon: BookOpenCheck,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    lessonCount: 32
  },
  {
    slug: 'francais',
    title: 'Français',
    desc: 'Grammaire, orthographe, lecture et expression',
    emoji: '📘',
    icon: BookOpen,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    lessonCount: 62,
    difficulty: 'Tous niveaux',
    duration: '18-35 min'
  },
  {
    slug: 'mathematiques',
    title: 'Mathématiques',
    desc: 'Numération, calcul, mesures, géométrie, problèmes',
    emoji: '🧮',
    icon: Calculator,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    lessonCount: 89,
    difficulty: 'Tous niveaux',
    duration: '20-40 min'
  },
  {
    slug: 'sciences',
    title: 'Sciences',
    desc: 'Découverte du monde, expériences et observations',
    emoji: '🧪',
    icon: FlaskConical,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    lessonCount: 56,
    difficulty: 'Tous niveaux',
    duration: '25-45 min'
  },
  {
    slug: 'informatique',
    title: 'Informatique',
    desc: 'Programmation, logique et culture numérique',
    emoji: '💻',
    icon: Code,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    lessonCount: 34,
    difficulty: 'Tous niveaux',
    duration: '30-50 min'
  },
  {
    slug: 'sciences-islamiques',
    title: 'Sciences islamiques',
    desc: 'Coran, hadith, fiqh et histoire des prophètes',
    emoji: '📖',
    icon: Building2,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    lessonCount: 67,
    difficulty: 'Tous niveaux',
    duration: '20-40 min'
  },
  {
    slug: 'histoire-islam',
    title: "Histoire de l'Islam",
    desc: 'Civilisation islamique et figures historiques',
    emoji: '🧭',
    icon: History,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    lessonCount: 43,
    difficulty: 'Tous niveaux',
    duration: '25-45 min'
  },
  {
    slug: 'arts',
    title: 'Arts & Créativité',
    desc: 'Dessin, peinture, bricolage et expression artistique',
    emoji: '🎨',
    icon: Palette,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    lessonCount: 38,
    difficulty: 'Tous niveaux',
    duration: '30-60 min'
  },  
  {
    slug: 'bien-etre',
    title: 'Bien-être',
    desc: 'Méditation, relaxation et développement personnel',
    emoji: '🧘',
    icon: Heart,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    lessonCount: 25,
    difficulty: 'Tous niveaux',
    duration: '15-30 min'
  }
];

export default function SubjectGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explorez nos matières
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des centaines de leçons organisées par matière pour un apprentissage structuré et progressif
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.slug}
              href={`/subject/${subject.slug}`}
              className="group block"
            >
              <div className={`relative p-6 rounded-2xl border-2 ${subject.borderColor} ${subject.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <subject.icon className="w-6 h-6 text-white" />
                </div>

                {/* Emoji */}
                <div className="absolute top-4 right-4 text-2xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {subject.emoji}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {subject.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {subject.desc}
                </p>

                {/* Additional info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Difficulté:</span>
                    <span className="font-medium">{subject.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Durée:</span>
                    <span className="font-medium">{subject.duration}</span>
                  </div>
                </div>

                {/* Lesson count and arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {subject.lessonCount} leçons
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${subject.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md`}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link
            href="/subjects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Voir toutes les matières
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
