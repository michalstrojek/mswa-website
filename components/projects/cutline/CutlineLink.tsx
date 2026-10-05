import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

const BASE = "/projekty/cutline";

/** Map original Vite/react-router paths onto the MSWA CUTLINE route. */
export function cutlineHref(to: string): string {
  if (to === "/") return BASE;
  if (to.startsWith("/#")) return `${BASE}${to.slice(1)}`;
  if (to.startsWith("#")) return to;
  if (to.startsWith("/")) return `${BASE}${to}`;
  return to;
}

type CutlineLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function CutlineLink({
  to,
  children,
  className,
  onClick,
}: CutlineLinkProps) {
  return (
    <Link href={cutlineHref(to)} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
