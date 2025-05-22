'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const HeroButton = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Height of our navbar
      const offsetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <Link
        href="#sobre"
        onClick={(e) => scrollToSection(e, 'sobre')}
        className="inline-flex items-center gap-2 rounded-full bg-primary-lime px-6 py-3 font-medium text-black hover:bg-primary-lime/80 transition-colors dark:text-white"
      >
        Ver Información Completa
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
};
