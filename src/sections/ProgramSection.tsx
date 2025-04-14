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
    <section id="programa" className="container mx-auto px-4 py-16 pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-block rounded-full bg-[#c1ff72] px-4 py-1 text-sm font-medium">
          Cronograma
        </div>
        <h2 className="mt-4 text-3xl font-bold">
          Programa del Curso y Temas por Semana
        </h2>
        <p className="mt-4 text-gray-600">
          Selecciona una semana para ver el contenido completo y conocer los
          grupos de trabajo especializados.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {programData.map((unit, index) => (
          <div key={index}>
            {unit.title && (
              <UnitSection title={unit.title}>
                <div
                  className={
                    gridColumnClasses[unit.columns] || gridColumnClasses[1]
                  }
                >
                  {unit.weeks.map((week, weekIndex) => (
                    <WeekCard
                      key={weekIndex}
                      weekNumber={week.weekNumber}
                      title={week.title}
                      description={week.description}
                      variant={week.variant}
                      hasGroup={week.hasGroup}
                      groupNumber={week.groupNumber}
                      groupLink={week.groupLink}
                    />
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
                    <WeekCard
                      key={weekIndex}
                      weekNumber={week.weekNumber}
                      title={week.title}
                      description={week.description}
                      variant={week.variant}
                      hasGroup={week.hasGroup}
                    />
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
