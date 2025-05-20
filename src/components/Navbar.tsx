'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return activeSection;
}

function useVisitorCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api', {
          next: { revalidate: 259200 }, // Revalidate every 3 days
        });
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Fallback to random count if API fails
        setCount(Math.floor(Math.random() * 900) + 1100);
      }
    };

    fetchVisitorCount();
  }, []);

  return count;
}

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm w-full lg:px-20 xl:px-70">
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
                ? 'bg-primary-lime'
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
                ? 'bg-primary-lime'
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
                ? 'bg-primary-lime'
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
                ? 'bg-primary-lime'
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
                ? 'bg-primary-lime'
                : 'hover:bg-primary-lime/50'
            }`}
          >
            Contacto
          </Link> */}
        </nav>
        <div className="flex items-center gap-2">
          <div className="text-gray-600">Visitantes:</div>
          <div className="rounded-full bg-primary-lime px-4 py-2 font-medium">
            {visitorCount.toLocaleString()}
          </div>
        </div>
      </div>
    </header>
  );
};
