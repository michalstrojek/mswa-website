import { SiteLink } from "@/components/site/SiteLink";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
};

const variants = {
  solid:
    "group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-[12px] tracking-[0.14em] text-bg uppercase transition-[background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-soft",
  outline:
    "group inline-flex items-center justify-center gap-2 rounded-full border border-text/30 px-6 py-2.5 text-[11px] tracking-[0.16em] text-text uppercase transition-[border-color,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-text/70 hover:bg-text/[0.04]",
  ghost:
    "group inline-flex items-center justify-center gap-2 text-[14px] text-text/85 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-text",
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <SiteLink
      href={href}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </SiteLink>
  );
}
