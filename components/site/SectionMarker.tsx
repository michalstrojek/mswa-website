type SectionMarkerProps = {
  n: string;
  label: string;
  /** Placement variant — keep markers from looking mechanical */
  place?: "rail-left" | "rail-right" | "header-end" | "above" | "corner";
  className?: string;
};

const placeClass: Record<NonNullable<SectionMarkerProps["place"]>, string> = {
  "rail-left":
    "pointer-events-none absolute top-16 left-3 hidden rotate-180 [writing-mode:vertical-rl] lg:block xl:left-5",
  "rail-right":
    "pointer-events-none absolute top-24 right-3 hidden [writing-mode:vertical-rl] lg:block xl:right-5",
  "header-end": "hidden shrink-0 self-end sm:block",
  above: "mb-3 block",
  corner: "absolute top-4 right-6 hidden md:block lg:top-6 lg:right-10",
};

export function SectionMarker({
  n,
  label,
  place = "above",
  className = "",
}: SectionMarkerProps) {
  return (
    <p
      className={`section-marker text-[10px] tracking-[0.22em] text-muted/70 uppercase ${placeClass[place]} ${className}`}
      aria-hidden
    >
      <span className="text-accent/80">{n}</span>
      <span className="mx-1.5 text-muted/40">/</span>
      <span>{label}</span>
    </p>
  );
}
