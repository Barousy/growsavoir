import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Arts & Créativité - GrowSavoir',
  description: 'Découvrez le dessin, la peinture, le bricolage et l&apos;expression artistique.',
};

export default function ArtsSubjectPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🎨</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Arts & Créativité
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Libérez votre créativité avec nos leçons d&apos;art et de bricolage
            </p>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Nos leçons d&apos;art et créativité</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lesson 1 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✏️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dessin de base</h3>
                <p className="text-slate-600 mb-4">Apprenez les techniques de dessin</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">10 min</span>
                </div>
              </div>

              {/* Lesson 2 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Peinture à l&apos;aquarelle</h3>
                <p className="text-slate-600 mb-4">Créez de belles peintures colorées</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">15 min</span>
                </div>
              </div>

              {/* Lesson 3 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Bricolage créatif</h3>
                <p className="text-slate-600 mb-4">Fabriquez des objets uniques</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">12 min</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/subjects"
                className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
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