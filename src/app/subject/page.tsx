import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import SubjectGrid from '@/components/ui/SubjectGrid';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Tous les sujets - GrowSavoir',
  description: 'Découvrez tous nos sujets éducatifs et commencez l&apos;apprentissage.',
};

export default function SubjectsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Tous nos sujets
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Une collection complète de sujets éducatifs pour tous les âges et tous les niveaux
            </p>
          </div>
        </section>

        {/* Subject Grid */}
        <SubjectGrid />

        {/* CTA Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Prêt à commencer l&apos;apprentissage ?
            </h2>
            <p className="text-slate-600 mb-8">
              Choisissez un sujet et commencez votre voyage éducatif dès aujourd&apos;hui !
            </p>
            <a
              href="/signup"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Commencer gratuitement
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}