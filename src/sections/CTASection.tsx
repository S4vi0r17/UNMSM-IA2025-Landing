import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section
      className="container max-w-[1150px] mx-auto px-4 py-16 pt-24"
      data-aos="fade-up"
    >
      <div
        className="rounded-2xl bg-primary-lime-light p-8 md:p-12"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-halant font-semibold text-black">
            Conoce a tu Grupo de Trabajo
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Consulta la información de los grupos de trabajo, integrantes y
            proyectos asignados en el documento compartido. Allí encontrarás
            todos los detalles necesarios para coordinar con tu equipo.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
            <Link
              href="https://docs.google.com/spreadsheets/d/1NzHW1RoytIM2Jzhz6YZdyVffpY3kcYYvDvgebaV7clM/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-gray-800 transition-all hover:-translate-y-0.5 shadow-md"
            >
              Ver Grupos de Trabajo
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
