import Image from 'next/image';
import { HeroButton } from '@/components/HeroButton';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="container max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-16 pt-24"
    >
      <div className="flex flex-col justify-center space-y-6 text-center lg:text-left lg:pl-16 xl:pl-0">
        <h1
          className="text-4xl sm:text-5xl font-montserrat font-bold leading-tight bg-gradient-to-r from-gray-500 dark:from-gray-100 via-[#83c53c] dark:via-[#a1d866] to-primary-lime bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Inteligencia Artificial
        </h1>
        <p
          className="text-gray-600 dark:text-gray-100 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Descubre los fundamentos teóricos y prácticos que te prepararán para
          diseñar, implementar y evaluar soluciones inteligentes en distintos
          ámbitos.
        </p>
        <HeroButton />
      </div>
      <div
        className="relative flex items-center justify-center"
        data-aos="fade"
        data-aos-delay="300"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
      >
        <div className="relative z-10">
          <Image
            src={'/hero.png'}
            width={400}
            height={400}
            alt="Inteligencia Artificial"
            className="rounded-lg"
          />
          <div
            className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-lime"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div className="h-8 w-8 rounded-full bg-white"></div>
          </div>
          <div
            className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-white border border-primary-lime"
            data-aos="fade"
            data-aos-delay="600"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div className="h-8 w-8 rounded-full bg-primary-lime"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
