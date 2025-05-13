interface UnitSectionProps {
  title: string;
  children: React.ReactNode;
}

export const UnitSection = ({ title, children }: UnitSectionProps) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold font-halant mb-6">{title}</h3>
      {children}
    </div>
  );
};
