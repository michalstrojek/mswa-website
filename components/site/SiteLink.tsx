"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function hashFrom(href: string) {
  if (href.startsWith("#")) return href.slice(1);
  if (href.startsWith("/#")) return href.slice(2);
  return null;
}

function isExternal(href: string) {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

export function SiteLink({ href, children, className, onClick }: SiteLinkProps) {
  const pathname = usePathname();
  const hash = hashFrom(href);
  const resolved = hash && pathname !== "/" ? `/#${hash}` : href;

  if (isExternal(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={resolved}
      className={className}
      onClick={(event) => {
        onClick?.();
        if (href === "/" && pathname === "/") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        if (!hash || pathname !== "/") return;

        const target = document.getElementById(hash);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Stay on `/` without a hash so refresh opens the hero, not a section.
        if (window.location.hash) {
          history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}`,
          );
        }
      }}
    >
      {children}
    </Link>
  );
}
