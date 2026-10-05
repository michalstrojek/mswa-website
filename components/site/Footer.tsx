import { SiteLink } from "@/components/site/SiteLink";
import { site } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M14 8.2h2.2V5.4H14c-2.3 0-3.9 1.7-3.9 4.1v1.7H8.2v2.8h1.9V19h3.1v-5h2.2l.4-2.8h-2.6V9.7c0-.8.3-1.5 1.8-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-pad border-t border-line py-14 md:px-10 lg:px-16 lg:py-16">
      <div className="site-shell grid gap-9 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="font-serif text-2xl tracking-[0.18em]">{site.name}</p>
          <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-muted">
            Strony internetowe dla firm.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-3.5 lg:col-span-4 lg:justify-center"
          aria-label="Stopka"
        >
          {site.footerNav.map((item) => (
            <SiteLink
              key={item.href}
              href={item.href}
              className="text-[12px] tracking-[0.14em] text-muted uppercase transition-colors hover:text-text"
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>

        <div className="space-y-4 lg:col-span-4 lg:text-right">
          <p>
            <a
              href={`mailto:${site.email}`}
              className="text-[13px] text-muted transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </p>
          <div className="flex items-center gap-5 text-muted lg:justify-end">
            <a
              href={site.instagram.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram ${site.instagram.handle}`}
              className="transition-colors hover:text-accent"
            >
              <InstagramIcon />
            </a>
            <a
              href={site.facebook.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook MSWA"
              className="transition-colors hover:text-accent"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="site-shell mt-11 flex flex-col gap-4 border-t border-line pt-6 text-[11px] tracking-[0.08em] text-muted/70 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.name}</p>
        <div className="flex gap-6">
          <SiteLink href="/polityka-prywatnosci" className="transition-colors hover:text-text">
            Polityka prywatności
          </SiteLink>
          <SiteLink href="/regulamin" className="transition-colors hover:text-text">
            Regulamin
          </SiteLink>
        </div>
      </div>
    </footer>
  );
}
