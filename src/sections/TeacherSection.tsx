import Link from 'next/link';
import Image from 'next/image';
import { Book, Calendar, ChevronRight, Mail } from 'lucide-react';

export const TeacherSection = () => {
  return (
    <section
      id="docente"
      className="bg-gray-50 dark:bg-[#1e2939] py-16 pt-24"
      data-aos="fade-up"
    >
      <div className="container max-w-[1150px] mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <div className="inline-block rounded-full bg-primary-lime px-4 py-1 font-medium dark:text-white">
            Docente
          </div>
          <h2 className="mt-4 text-4xl font-halant font-semibold">
            Información del Docente
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-16">
          <div
            className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary-lime bg-white flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Image
              src={'/guerrita.png'}
              alt="Guerra Grados, Luis Angel"
              width={200}
              height={200}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div
            className="max-w-md text-center md:text-left bg-white dark:bg-gray-600 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-500"
            data-aos="fade"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
              Guerra Grados, Luis Angel
            </h3>
            <div className="mt-4 space-y-3 ml-5 text-lg">
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-100">
                <Mail className="h-5 w-5 text-primary-lime" />
                <p className="font-medium">lguerrag1@unmsm.edu.pe</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Calendar className="h-5 w-5 text-primary-lime" />
                <p>
                  Ciclo: <span className="font-semibold">7</span>
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Book className="h-5 w-5 text-primary-lime" />
                <p>
                  Curso:{' '}
                  <span className="font-semibold">Inteligencia Artificial</span>
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="mailto:lguerrag1@unmsm.edu.pe"
                className="inline-flex items-center gap-2 rounded-full bg-primary-lime text-black dark:text-white px-5 py-2.5 font-medium shadow hover:bg-primary-lime-dark transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="h-5 w-5" />
                Contactar por correo
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
