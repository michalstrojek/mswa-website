import Link from "next/link";
import { site } from "../content/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] bg-ink">
      <div className="container-editorial flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display m-0 text-2xl tracking-[0.12em] text-ivory">
            BLACK LABEL
          </p>
          <p className="meta-label mt-3 m-0">
            {site.established}
            <span className="mx-2 text-brass" aria-hidden>
              ·
            </span>
            {site.location}
          </p>
          <p className="section-copy mt-4 max-w-[28ch]">{site.footerNote}</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <Link href={site.ofertaHref} className="meta-label hover:text-brass-soft">
            Oferta
          </Link>
          <Link href={site.galeriaHref} className="meta-label hover:text-brass-soft">
            Galeria
          </Link>
          <Link href={site.kontaktHref} className="meta-label hover:text-brass-soft">
            Kontakt
          </Link>
          <a
            href={site.instagram.href}
            target="_blank"
            rel="noreferrer"
            className="meta-label hover:text-brass-soft"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
