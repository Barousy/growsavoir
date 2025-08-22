import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/ui/HeroSection';
import SubjectGrid from '@/components/ui/SubjectGrid';
import LevelSection from '@/components/ui/LevelSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <SubjectGrid />
      <LevelSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
