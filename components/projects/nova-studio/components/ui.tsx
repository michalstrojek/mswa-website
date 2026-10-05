import { BOOKSY_URL } from "../lib/site";

type Variant = "solid" | "light" | "ghost" | "underline";

const variants: Record<Variant, string> = {
  solid:
    "btn-arrow inline-flex items-center gap-3 bg-ink text-cream px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase transition-opacity hover:opacity-80",
  light:
    "btn-arrow inline-flex items-center gap-3 bg-cream text-ink px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase transition-opacity hover:opacity-80",
  ghost:
    "btn-arrow inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-cream/90 hover:text-cream",
  underline:
    "btn-arrow inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink hover:opacity-60",
};

export function BookingButton({
  children = "Umów wizytę",
  variant = "solid",
  className = "",
  arrow = true,
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <a
      href={BOOKSY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant]} ${className}`}
    >
      {children}
      {arrow ? <span aria-hidden="true">→</span> : null}
    </a>
  );
}

export function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[10px] tracking-[0.32em] uppercase text-muted ${className}`}
    >
      {children}
    </p>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink transition-opacity hover:opacity-60 btn-arrow ${className}`}
    >
      {children} <span aria-hidden="true">→</span>
    </a>
  );
}
