import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Anglais - GrowSavoir',
  description: 'Apprenez l&apos;anglais avec nos leçons interactives et amusantes.',
};

export default function EnglishSubjectPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🇬🇧</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Apprendre l&apos;anglais
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez l&apos;anglais de manière ludique avec nos leçons interactives
            </p>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Nos leçons d&apos;anglais</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lesson 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔤</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">L&apos;alphabet anglais</h3>
                <p className="text-slate-600 mb-4">Apprenez à prononcer les 26 lettres</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">5 min</span>
                </div>
              </div>

              {/* Lesson 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">👋</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Salutations</h3>
                <p className="text-slate-600 mb-4">Hello, Good morning, How are you?</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">8 min</span>
                </div>
              </div>

              {/* Lesson 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Les couleurs</h3>
                <p className="text-slate-600 mb-4">Red, blue, green et bien plus encore</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">6 min</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/subjects"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Retour aux matières
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}