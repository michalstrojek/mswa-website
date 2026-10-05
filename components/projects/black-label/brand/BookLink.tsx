import type { AnchorHTMLAttributes, ReactNode } from "react";
import { site } from "../content/site";

type BookLinkProps = {
  className?: string;
  children?: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

/** Wszystkie CTA „Umów wizytę” prowadzą do Booksy (zewnętrzny link). */
export function BookLink({
  className,
  children = site.bookLabel,
  ...props
}: BookLinkProps) {
  return (
    <a
      href={site.booksyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
