import { site } from "./content/site";
import { BookLink } from "./BookLink";
import { CutlineLink } from "./CutlineLink";

export function Hero() {
  const { hero } = site;
  const [line1, line2] = hero.headline.split("\n");

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-walnut">
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="hero-photo h-full w-full object-cover object-[52%_42%] md:object-[50%_38%]"
          width={2268}
          height={4032}
          fetchPriority="high"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,35,50,0.35)_0%,rgba(61,43,31,0.15)_28%,rgba(61,43,31,0.2)_52%,rgba(26,35,50,0.72)_78%,rgba(26,35,50,0.88)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_35%,rgba(232,200,154,0.12),transparent_55%)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-[1] mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-28 pb-12 sm:pb-16 md:px-8 md:pb-20 lg:pb-24">
        <div className="hero-copy max-w-lg md:max-w-xl">
          <div>
            <p className="font-display text-[clamp(2.2rem,6.2vw,4.15rem)] leading-[0.95] font-semibold tracking-[0.045em] text-ivory">
              {site.name}
            </p>
            <p className="mt-2 font-condensed text-[clamp(0.9rem,2vw,1.15rem)] font-medium tracking-[0.4em] text-tungsten/90 uppercase">
              {site.tagline}
            </p>
          </div>

          <h1 className="mt-10 font-display text-[clamp(1.4rem,3.2vw,2.05rem)] leading-[1.25] font-medium text-ivory/95 md:mt-12">
            <span className="block">{line1}</span>
            <span className="block">{line2}</span>
          </h1>

          <p className="mt-6 max-w-md font-body text-[0.98rem] leading-[1.65] text-ivory/75 md:mt-7 md:text-[1.05rem]">
            {hero.support}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
            <BookLink className="btn-book btn-book-light">
              Umów wizytę
              <span className="btn-book-arrow" aria-hidden="true">
                →
              </span>
            </BookLink>
            <CutlineLink
              to="/#oferta-preview"
              className="btn-ghost inline-flex min-h-12 items-center justify-center border border-chrome/55 px-7 py-3 font-condensed text-[0.95rem] font-medium tracking-[0.18em] text-ivory uppercase"
            >
              Zobacz ofertę
            </CutlineLink>
          </div>
        </div>
      </div>
    </section>
  );
}
