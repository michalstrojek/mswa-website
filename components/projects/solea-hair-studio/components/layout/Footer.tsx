import { Button } from "../ui/Button";
import { bookingUrl } from "../../config/booking";
import { SITE } from "../../config/site";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-taupe-deep text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-20">
        <div>
          <p className="font-display text-2xl tracking-[0.24em] uppercase">
            {SITE.name}
          </p>
          <p className="mt-2 text-[11px] tracking-[0.28em] text-ivory/60 uppercase">
            Hair Studio
          </p>
        </div>

        <div className="text-sm leading-7 text-ivory/80">
          <p>{SITE.address}</p>
          <p>{SITE.postal}</p>
          <p className="mt-3">
            <a href={SITE.phoneHref} className="hover:text-ivory">
              {SITE.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${SITE.email}`} className="hover:text-ivory">
              {SITE.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.2em] text-ivory/50 uppercase">
            Godziny
          </p>
          <ul className="mt-3 space-y-1 text-sm text-ivory/80">
            {SITE.hours.map((row) => (
              <li
                key={row.days}
                className="flex justify-between gap-6 md:block lg:flex"
              >
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.18em] uppercase hover:text-cream"
          >
            Instagram
          </a>
          <Button href={bookingUrl()} external variant="light">
            Booksy →
          </Button>
        </div>
      </div>
    </footer>
  );
}
