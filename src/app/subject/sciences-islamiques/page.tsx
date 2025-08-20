import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Sciences islamiques - GrowSavoir',
  description: 'Apprenez le Coran, les hadiths, le fiqh et l&apos;histoire des prophètes.',
};

export default function IslamicSciencesSubjectPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">📖</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Sciences islamiques
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez la richesse de la culture islamique et ses enseignements
            </p>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Nos leçons de sciences islamiques</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lesson 1 */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🕌</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Les piliers de l&apos;Islam</h3>
                <p className="text-slate-600 mb-4">Les cinq piliers fondamentaux</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">10 min</span>
                </div>
              </div>

              {/* Lesson 2 */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Les prophètes</h3>
                <p className="text-slate-600 mb-4">L&apos;histoire des messagers d&apos;Allah</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">12 min</span>
                </div>
              </div>

              {/* Lesson 3 */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🕊️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Les bonnes manières</h3>
                <p className="text-slate-600 mb-4">L&apos;éthique et les valeurs islamiques</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Niveau: Débutant</span>
                  <span className="text-sm text-slate-500">8 min</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/subjects"
                className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
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