'use client';

import Link from 'next/link';
import { Baby, Users, GraduationCap, Sparkles, Heart, Brain, Star } from 'lucide-react';

const ageGroups = [
  {
    key: '3-6',
    title: '3-6 ans',
    subtitle: 'Maternelle',
    description: 'Découverte et éveil',
    icon: Baby,
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    features: ['Activités sensorielles', 'Développement du langage', 'Logique simple'],
    lessonCount: 156,
    emoji: '🍼'
  },
  {
    key: '7-10',
    title: '7-10 ans',
    subtitle: 'Primaire',
    description: 'Apprentissage fondamental',
    icon: Users,
    color: 'from-blue-400 to-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: ['Lecture et écriture', 'Calcul de base', 'Découverte scientifique'],
    lessonCount: 234,
    emoji: '🎈'
  },
  {
    key: '11-16',
    title: '11-16 ans',
    subtitle: 'Collège',
    description: 'Approfondissement',
    icon: GraduationCap,
    color: 'from-purple-400 to-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: ['Réflexion critique', 'Projets créatifs', 'Préparation lycée'],
    lessonCount: 189,
    emoji: '🚀'
  }
];

export default function AgeGroupSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Adapté à chaque âge
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des contenus spécialement conçus pour chaque étape du développement de votre enfant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ageGroups.map((group) => (
            <div
              key={group.key}
              className={`relative p-8 rounded-3xl border-2 ${group.borderColor} ${group.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <group.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl mb-2">{group.emoji}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{group.title}</h3>
                <p className="text-lg font-medium text-slate-700 mb-2">{group.subtitle}</p>
                <p className="text-slate-600">{group.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                  Points forts
                </h4>
                <ul className="space-y-2">
                  {group.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats and CTA */}
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  {group.lessonCount} leçons
                </div>
                <Link
                  href={`/age-groups/${group.key}`}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${group.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  Découvrir
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <Heart className="w-8 h-8 text-pink-400" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-20">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">Pourquoi choisir GrowSavoir ?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">🎯 Progression adaptée</h4>
                <p>Chaque leçon s&apos;appuie sur la précédente pour une progression naturelle</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">🎨 Apprentissage ludique</h4>
                <p>Jeux, quiz et activités interactives pour maintenir l&apos;engagement</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">📱 Accessible partout</h4>
                <p>Sur ordinateur, tablette ou smartphone, apprenez où vous voulez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
