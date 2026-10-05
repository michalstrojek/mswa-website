import { images } from "../data/images";
import { CampaignImage } from "../components/media/CampaignImage";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { bookingUrl } from "../config/booking";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-taupe-deep text-ivory">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10 bg-gradient-to-b from-ivory to-transparent sm:h-14" />

      <div className="absolute inset-0">
        <CampaignImage
          src={images.ctaBg}
          alt=""
          className="h-full w-full"
          objectPosition="center 40%"
          hoverZoom={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-taupe-deep via-taupe-deep/78 to-taupe-deep/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-20 pb-24 sm:px-8 lg:px-[8%] lg:pt-28 lg:pb-32">
        <div className="max-w-lg">
          <Reveal y={26} duration={0.82}>
            <p className="text-[11px] tracking-[0.28em] text-ivory/70 uppercase">
              Czas na Ciebie
            </p>
            <h2 className="mt-4 font-display text-[2.5rem] leading-tight font-medium sm:text-6xl">
              Gotowa na zmianę?
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-ivory/80">
              Umów wizytę i pozwól nam zadbać o Twoje włosy.
            </p>
          </Reveal>
          <Reveal delay={0.14} y={18} duration={0.78}>
            <Button
              href={bookingUrl()}
              external
              variant="light"
              className="mt-9"
            >
              Umów termin →
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
