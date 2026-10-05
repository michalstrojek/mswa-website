import { images } from "../data/images";
import { CampaignImage } from "../components/media/CampaignImage";
import { Reveal } from "../components/ui/Reveal";

export function Salon() {
  return (
    <section id="salon" className="bg-ivory pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-[8%]">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.26em] text-ink-soft uppercase">
              Salon
            </p>
          </Reveal>
          <Reveal delay={0.09}>
            <h2 className="mt-4 font-display text-[2.15rem] leading-tight font-medium text-ink sm:text-5xl">
              Miejsce, do którego chce się wracać.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-12">
          <Reveal scaleFrom={1.02}>
            <CampaignImage
              src={images.salonHero}
              alt="Główna przestrzeń salonu SOLÉA"
              className="aspect-[16/11] sm:aspect-[16/8]"
              objectPosition="center 62%"
              parallax={20}
            />
          </Reveal>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:absolute sm:right-[6%] sm:-bottom-16 sm:mt-0 sm:w-[36%] sm:gap-4 lg:-bottom-20">
            <Reveal delay={0.12} scaleFrom={1.02}>
              <CampaignImage
                src={images.salonDetail1}
                alt="Łukowe lustro i kwiaty w salonie SOLÉA"
                className="aspect-[3/4] sm:-translate-y-12"
                objectPosition="center 40%"
              />
            </Reveal>
            <Reveal delay={0.2} scaleFrom={1.02}>
              <CampaignImage
                src={images.salonDetail2}
                alt="Stanowisko salonu — kamień i światło"
                className="aspect-[3/4] mt-8 sm:mt-14"
                objectPosition="center 55%"
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.08}>
          <p className="mt-10 max-w-md text-sm leading-7 text-ink-soft sm:mt-28">
            Beż, kamień, ciepłe drewno i miękkie światło. Salon zaprojektowany
            tak, żebyś mogła zwolnić — zanim jeszcze usiądziesz.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
