'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useVisitorCount } from '@/hooks/useVisitorCount';

export const Navbar = () => {
  const activeSection = useActiveSection();
  const visitorCount = useVisitorCount();

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-600 shadow-sm w-full lg:px-20 xl:px-70">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href={'/'} className="flex items-center">
          <Image
            src="https://eventosindustrial.unmsm.edu.pe/cirsos/img/logo_unmsm.png"
            alt="UNMSM Logo"
            width={160}
            height={80}
          />
        </Link>
        <nav className="hidden md:flex md items-center gap-4 lg:gap-8">
          <Link
            href="#"
            onClick={(e) => scrollToSection(e, 'hero')}
            className={`transition-colors px-3 py-1 rounded-full ${
              activeSection === 'hero'
                ? 'bg-primary-lime dark:text-white'
                : 'hover:bg-primary-lime/50'
            }`}
          >
            Inicio
          </Link>
          <Link
            href="#sobre"
            onClick={(e) => scrollToSection(e, 'sobre')}
            className={`transition-colors px-3 py-1 rounded-full ${
              activeSection === 'sobre'
                ? 'bg-primary-lime dark:text-white'
                : 'hover:bg-primary-lime/50'
            }`}
          >
            Sobre el Curso
          </Link>
          <Link
            href="#programa"
            onClick={(e) => scrollToSection(e, 'programa')}
            className={`transition-colors px-3 py-1 rounded-full ${
              activeSection === 'programa'
                ? 'bg-primary-lime dark:text-white'
                : 'hover:bg-primary-lime/50'
            }`}
          >
            Programa
          </Link>
          <Link
            href="#docente"
            onClick={(e) => scrollToSection(e, 'docente')}
            className={`transition-colors px-3 py-1 rounded-full ${
              activeSection === 'docente'
                ? 'bg-primary-lime dark:text-white'
                : 'hover:bg-primary-lime/50'
            }`}
          >
            Docente
          </Link>
          {/* <Link
            href="#contacto"
            onClick={(e) => scrollToSection(e, 'contacto')}
            className={`transition-colors px-3 py-1 rounded-full ${
              activeSection === 'contacto'
                ? 'bg-primary-lime dark:text-white'
                : 'hover:bg-primary-lime/50'
            }`}
          >
            Contacto
          </Link> */}
        </nav>
        <div className="flex items-center gap-2">
          <div className="text-gray-600 dark:text-gray-100">Visitantes:</div>
          <div className="rounded-full bg-primary-lime px-4 py-2 font-medium dark:text-white">
            {visitorCount.toLocaleString()}
          </div>
        </div>
      </div>
    </header>
  );
};
