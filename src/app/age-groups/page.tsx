import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import AgeGroupSection from '@/components/ui/AgeGroupSection';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Groupes d&apos;âge - GrowSavoir',
  description: 'Contenu adapté à chaque étape du développement de votre enfant.',
};

export default function AgeGroupsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Contenu par âge
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Des activités et leçons adaptées à chaque étape du développement de votre enfant
            </p>
          </div>
        </section>

        {/* Age Groups Section */}
        <AgeGroupSection />

        {/* Additional Info */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Pourquoi adapter le contenu à l&apos;âge ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Développement cognitif</h3>
                <p className="text-slate-600">
                  Chaque âge a ses capacités d&apos;apprentissage spécifiques. Notre contenu respecte ces étapes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Motivation</h3>
                <p className="text-slate-600">
                  Des défis adaptés maintiennent l&apos;intérêt et encouragent la progression.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}