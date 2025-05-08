import { ChevronRight } from 'lucide-react';

export interface WeekCardProps {
  weekNumber: number;
  title: string;
  description: string;
  groupNumber?: number;
  variant?: 'light' | 'dark' | 'green' | 'white';
  hasGroup?: boolean;
  groupLink?: string;
}

export const WeekCard = ({
  weekNumber,
  title,
  description,
  groupNumber,
  variant = 'light',
  hasGroup = true,
  groupLink = '#',
}: WeekCardProps) => {
  const variants = {
    light: 'bg-gray-50 text-black border-gray-200',
    dark: 'bg-gray-800 text-white border-gray-200',
    green: 'bg-[#d8ffaa] text-black border-gray-200',
    white: 'bg-white text-black border-gray-200',
  };

  const badgeVariants = {
    light: 'bg-[#c1ff72] text-black',
    dark: 'bg-[#c1ff72] text-black',
    green: 'bg-black text-white',
    white: 'bg-black text-white',
  };

  const buttonVariants = {
    light: 'bg-black text-white hover:bg-gray-800',
    dark: 'bg-white text-black hover:bg-gray-200',
    green: 'bg-black text-white hover:bg-gray-800',
    white: 'bg-black text-white hover:bg-gray-800',
  };

  const descriptionVariants = {
    light: 'text-gray-600',
    dark: 'text-gray-300',
    green: 'text-gray-700',
    white: 'text-gray-600',
  };

  return (
    <div
      className={`rounded-lg border p-6 relative overflow-hidden ${variants[variant]}`}
    >
      <div
        className={`absolute top-0 left-0 px-3 py-1 text-sm font-medium ${badgeVariants[variant]}`}
      >
        Semana {weekNumber}
      </div>
      <div className="mt-6">
        <h4 className="font-bold">{title}</h4>
        <p className={`mt-2 text-sm ${descriptionVariants[variant]}`}>
          {description}
        </p>
        {hasGroup && (
          <a
            href={groupLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs transition-colors ${buttonVariants[variant]}`}
          >
            Ver Página de {groupNumber || weekNumber}
            <ChevronRight className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
};
