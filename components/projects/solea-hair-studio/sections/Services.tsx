import { images } from "../data/images";
import { SERVICES } from "../data/services";
import { CampaignImage } from "../components/media/CampaignImage";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { REVEAL } from "../lib/motion";

const PHOTO = {
  cut: images.cut,
  color: images.color,
  blond: images.blond,
  care: images.care,
  style: images.style,
  consult: images.consult,
} as const;

const LAYOUT = [
  {
    span: "md:col-span-1 lg:col-span-4",
    shift: "",
    aspect: "aspect-[3/4]",
    pos: "center 30%",
    parallax: 16,
  },
  {
    span: "md:col-span-1 lg:col-span-4",
    shift: "lg:mt-8",
    aspect: "aspect-[4/5]",
    pos: "center 40%",
    parallax: 0,
  },
  {
    span: "md:col-span-1 lg:col-span-4",
    shift: "lg:mt-3",
    aspect: "aspect-[3/4]",
    pos: "center 22%",
    parallax: 14,
  },
  {
    span: "md:col-span-1 lg:col-span-4",
    shift: "",
    aspect: "aspect-[4/5]",
    pos: "center 35%",
    parallax: 0,
  },
  {
    span: "md:col-span-1 lg:col-span-4",
    shift: "lg:mt-8",
    aspect: "aspect-[3/4]",
    pos: "center 28%",
    parallax: 0,
  },
  {
    span: "md:col-span-1 lg:col-span-4",
    shift: "lg:mt-3",
    aspect: "aspect-[4/3]",
    pos: "center 45%",
    parallax: 12,
  },
] as const;

export function Services() {
  return (
    <section id="uslugi" className="bg-ivory pt-14 pb-12 sm:pt-20 sm:pb-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-[8%]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[11px] tracking-[0.26em] text-ink-soft uppercase">
                Nasze usługi
              </p>
            </Reveal>
            <Reveal delay={0.09}>
              <h2 className="mt-4 font-display text-[2.15rem] leading-tight font-medium text-ink sm:text-5xl">
                Więcej możliwości.
                <br />
                Ten sam cel — Twoje piękne włosy.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Button
              href="#oferta"
              variant="ghost"
              className="shrink-0 self-start text-ink lg:mb-1.5"
            >
              Zobacz pełną ofertę →
            </Button>
          </Reveal>
        </div>

        <div
          id="oferta"
          className="mt-12 grid grid-cols-2 items-start gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:mt-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-16"
        >
          {SERVICES.map((service, index) => {
            const layout = LAYOUT[index];

            return (
              <Reveal
                key={service.id}
                delay={index * REVEAL.stagger}
                scaleFrom={1.02}
                className={`${layout.span} ${layout.shift}`}
              >
                <article className="flex flex-col">
                  <CampaignImage
                    src={PHOTO[service.image]}
                    alt={service.name}
                    className={layout.aspect}
                    objectPosition={layout.pos}
                    parallax={layout.parallax}
                  />
                  <h3 className="mt-3.5 font-display text-xl leading-snug text-ink sm:mt-4 sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-ink-soft sm:mt-2 lg:max-w-[17.5rem] xl:max-w-[19rem]">
                    {service.copy}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
