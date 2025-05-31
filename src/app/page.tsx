import {
  AboutSection,
  CTASection,
  FooterSection,
  HeroSection,
  ProgramSection,
  TeacherSection,
} from '@/sections';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-white transition-all duration-500 text-black">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ProgramSection />

      <TeacherSection />

      <CTASection />

      <FooterSection />
    </div>
  );
}
