// src/app/page.tsx
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Award, Play, Star, CheckCircle } from 'lucide-react';

const features = [
  {
    name: 'Cours structurés',
    description: 'Apprentissage progressif avec des parcours adaptés à votre niveau',
    icon: BookOpen,
  },
  {
    name: 'Communauté active',
    description: 'Rejoignez des milliers d\'apprenants et partagez vos progrès',
    icon: Users,
  },
  {
    name: 'Certifications',
    description: 'Obtenez des diplômes reconnus pour valider vos compétences',
    icon: Award,
  },
];

const stats = [
  { label: 'Cours disponibles', value: '100+' },
  { label: 'Apprenants actifs', value: '1000+' },
  { label: 'Matières couvertes', value: '15+' },
  { label: 'Taux de satisfaction', value: '98%' },
];

const testimonials = [
  {
    content: 'GrowSavoir a transformé ma façon d\'apprendre. Les cours sont clairs et progressifs.',
    author: 'Marie L.',
    role: 'Étudiante',
    rating: 5,
  },
  {
    content: 'Une plateforme exceptionnelle pour se former en continu. Je recommande vivement !',
    author: 'Thomas B.',
    role: 'Développeur',
    rating: 5,
  },
  {
    content: 'Parfait pour mes enfants. Ils adorent l\'approche interactive et ludique.',
    author: 'Sophie M.',
    role: 'Parent',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Apprenez avec{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GrowSavoir
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
              Découvrez une nouvelle façon d&apos;apprendre avec notre plateforme éducative 
              interactive et personnalisée. Des cours structurés pour tous les niveaux.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/courses"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Commencer à apprendre
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pourquoi choisir GrowSavoir ?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Notre plateforme combine innovation technologique et pédagogie éprouvée
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="text-center">
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d&apos;apprenants qui ont déjà transformé leur vie 
            grâce à nos cours structurés et personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              Créer un compte gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explorer les cours
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ce que disent nos apprenants
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez les témoignages de ceux qui ont transformé leur apprentissage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Commencez votre voyage d&apos;apprentissage aujourd&apos;hui
          </h2>
          <p className="text-gray-300 mb-8">
            Rejoignez GrowSavoir et découvrez le plaisir d&apos;apprendre
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

