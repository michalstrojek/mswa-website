import { site } from "./content/site";
import { BookLink } from "./BookLink";
import { CutlineLink } from "./CutlineLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-chrome/10 bg-navy text-ivory/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8 md:py-12">
        <div>
          <p className="font-display text-lg font-semibold tracking-wide text-ivory">
            {site.name} {site.tagline.toUpperCase()}
          </p>
          <p className="mt-2 font-body text-sm text-ivory/45">
            © {year} {site.name}. Wszelkie prawa zastrzeżone.
          </p>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-8 gap-y-3 font-condensed text-sm tracking-[0.16em] uppercase"
          aria-label="Stopka"
        >
          <CutlineLink
            to="/#oferta-preview"
            className="transition-colors hover:text-ivory"
          >
            Oferta
          </CutlineLink>
          <CutlineLink
            to="/#atmosfera"
            className="transition-colors hover:text-ivory"
          >
            Galeria
          </CutlineLink>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ivory"
          >
            Instagram
          </a>
          <CutlineLink
            to="/#kontakt"
            className="transition-colors hover:text-ivory"
          >
            Kontakt
          </CutlineLink>
          <BookLink className="text-ivory transition-colors hover:text-tungsten">
            Umów wizytę
          </BookLink>
        </nav>
      </div>
    </footer>
  );
}
