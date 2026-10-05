type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] tracking-[0.22em] text-accent uppercase ${className}`}
    >
      {children}
    </p>
  );
}
