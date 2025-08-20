'use client';

import { Star, Quote, Heart, ThumbsUp, Award } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amina B.',
    role: 'Maman de 3 enfants',
    avatar: '👩‍👧‍👦',
    rating: 5,
    content: 'GrowSavoir a transformé l\'apprentissage de mes enfants. Les leçons d\'arabe sont particulièrement bien faites et ils adorent les quiz interactifs !',
    subject: 'Langue arabe',
    age: '7-10 ans'
  },
  {
    id: 2,
    name: 'Thomas L.',
    role: 'Papa de 2 enfants',
    avatar: '👨‍👧‍👦',
    rating: 5,
    content: 'Les mathématiques sont devenues un jeu ! Mon fils de 8 ans progresse énormément grâce aux exercices progressifs et ludiques.',
    subject: 'Mathématiques',
    age: '7-10 ans'
  },
  {
    id: 3,
    name: 'Fatima Z.',
    role: 'Maman de 4 enfants',
    avatar: '👩‍👦‍👦‍👧',
    rating: 5,
    content: 'Parfait pour l\'éducation islamique. Les leçons sont adaptées à chaque âge et respectent nos valeurs. Mes enfants adorent !',
    subject: 'Sciences islamiques',
    age: '3-6 ans'
  },
  {
    id: 4,
    name: 'Marc D.',
    role: 'Papa de 1 enfant',
    avatar: '👨‍👧',
    rating: 5,
    content: 'L\'interface est intuitive et les contenus sont de qualité. Ma fille de 5 ans peut naviguer seule et apprend en autonomie.',
    subject: 'Français',
    age: '3-6 ans'
  },
  {
    id: 5,
    name: 'Sarah M.',
    role: 'Maman de 2 enfants',
    avatar: '👩‍👦‍👧',
    rating: 5,
    content: 'Les sciences sont expliquées de manière simple et amusante. Mes enfants font maintenant des expériences à la maison !',
    subject: 'Sciences',
    age: '11-16 ans'
  },
  {
    id: 6,
    name: 'Karim A.',
    role: 'Papa de 3 enfants',
    avatar: '👨‍👦‍👦‍👧',
    rating: 5,
    content: 'L\'anglais est enseigné de façon naturelle. Mes enfants ont fait d\'énormes progrès en quelques mois seulement.',
    subject: 'Anglais',
    age: '7-10 ans'
  }
];

const stats = [
  { label: 'Parents satisfaits', value: '98%', icon: Heart },
  { label: 'Enfants engagés', value: '95%', icon: ThumbsUp },
  { label: 'Progression constatée', value: '92%', icon: Award },
  { label: 'Recommandation', value: '99%', icon: Star }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ce que disent les parents
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez les témoignages de parents qui ont transformé l&aposapprentissage de leurs enfants
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-blue-400 opacity-60" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-4 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Subject and age */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {testimonial.subject}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {testimonial.age}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-2xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez des milliers de familles satisfaites
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Commencez gratuitement et découvrez pourquoi GrowSavoir est la plateforme d&aposapprentissage préférée des parents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Commencer gratuitement
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Voir plus de témoignages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
