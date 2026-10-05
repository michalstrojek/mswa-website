import type { ReactNode } from "react";

type OrganicPanelProps = {
  children: ReactNode;
  className?: string;
};

export function OrganicPanel({ children, className = "" }: OrganicPanelProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 640 720"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,64 C72,18 150,6 214,22 C268,36 292,92 304,176 C318,278 328,368 306,470 C284,572 236,656 176,720 H0 Z"
          fill="var(--color-taupe-deep)"
        />
      </svg>
      <div className="relative z-10 rounded-t-[3rem] bg-taupe-deep px-8 py-10 sm:px-12 sm:py-12 lg:rounded-none lg:bg-transparent lg:pt-20 lg:pr-10 lg:pb-16 lg:pl-12">
        {children}
      </div>
    </div>
  );
}
