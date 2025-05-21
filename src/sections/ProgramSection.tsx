import { UnitSection } from '@/components/UnitSection';
import { WeekCard } from '@/components/WeekCard';
import { programData } from '@/data/unit-data';

export const ProgramSection = () => {
  // Agregamos esto porque no funcionan los estilos computados
  const gridColumnClasses: { [key: number]: string } = {
    1: 'grid grid-cols-1 md:grid-cols-1 gap-6',
    2: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    3: 'grid grid-cols-1 md:grid-cols-3 gap-6',
    4: 'grid grid-cols-1 md:grid-cols-4 gap-6',
  };

  return (
    <section
      id="programa"
      className="container max-w-[1150px] mx-auto px-4 py-16 pt-24"
    >
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <div className="inline-block rounded-full bg-primary-lime px-4 py-1 font-medium dark:text-white">
          Cronograma
        </div>
        <h2 className="mt-4 text-4xl font-halant font-semibold">
          Programa del Curso y Temas por Semana
        </h2>
        <p className="mt-4 text-gray-600 text-lg dark:text-gray-400">
          Selecciona una semana para ver el contenido completo y conocer los
          grupos de trabajo especializados.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {programData.map((unit, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            {unit.title && (
              <UnitSection title={unit.title}>
                <div
                  className={
                    gridColumnClasses[unit.columns] || gridColumnClasses[1]
                  }
                >
                  {unit.weeks.map((week, weekIndex) => (
                    <div
                      key={weekIndex}
                      data-aos="fade-up"
                      data-aos-delay={weekIndex * 200}
                    >
                      <WeekCard
                        weekNumber={week.weekNumber}
                        title={week.title}
                        description={week.description}
                        variant={week.variant}
                        hasGroup={week.hasGroup}
                        groupNumber={week.groupNumber}
                        groupLink={week.groupLink}
                      />
                    </div>
                  ))}
                </div>
              </UnitSection>
            )}
            {!unit.title && (
              <div>
                <div
                  className={
                    gridColumnClasses[unit.columns] || gridColumnClasses[1]
                  }
                >
                  {unit.weeks.map((week, weekIndex) => (
                    <div
                      key={weekIndex}
                      data-aos="fade-up"
                      data-aos-delay={weekIndex * 200}
                    >
                      <WeekCard
                        weekNumber={week.weekNumber}
                        title={week.title}
                        description={week.description}
                        variant={week.variant}
                        hasGroup={week.hasGroup}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
