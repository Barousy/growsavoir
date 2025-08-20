import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/ui/HeroSection';
import SubjectGrid from '@/components/ui/SubjectGrid';
import AgeGroupSection from '@/components/ui/AgeGroupSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <SubjectGrid />
      <AgeGroupSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
