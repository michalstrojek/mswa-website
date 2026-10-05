import { images } from "../data/images";
import { TEAM } from "../data/team";
import { CampaignImage } from "../components/media/CampaignImage";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { bookingUrl } from "../config/booking";

const PHOTO = {
  maja: images.maja,
  natalia: images.natalia,
  julia: images.julia,
  lena: images.lena,
  zosia: images.zosia,
} as const;

function ctaLabel(name: string) {
  const inflected: Record<string, string> = {
    Maja: "MAJĄ",
    Natalia: "NATALIĄ",
    Julia: "JULIĄ",
    Lena: "LENĄ",
    Zosia: "ZOSIĄ",
  };
  return `Umów wizytę z ${inflected[name] ?? name.toUpperCase()} →`;
}

export function Team() {
  const [maja, natalia, julia, lena, zosia] = TEAM;

  return (
    <section id="zespol" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-[8%]">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.26em] text-ink-soft uppercase">
              Zespół
            </p>
          </Reveal>
          <Reveal delay={0.09}>
            <h2 className="mt-4 font-display text-[2.2rem] leading-tight font-medium text-ink sm:text-5xl">
              Osoby, którym powierzasz włosy.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          <Reveal
            className="col-span-2 lg:col-span-6 lg:row-span-2"
            scaleFrom={1.025}
          >
            <Member member={maja} featured />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3 lg:mt-10">
            <Member member={natalia} />
          </Reveal>
          <Reveal delay={0.18} className="lg:col-span-3 lg:mt-4">
            <Member member={julia} />
          </Reveal>
          <Reveal delay={0.14} className="lg:col-span-3 lg:col-start-7 lg:mt-2">
            <Member member={lena} />
          </Reveal>
          <Reveal delay={0.22} className="lg:col-span-3 lg:mt-6">
            <Member member={zosia} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Member({
  member,
  featured = false,
}: {
  member: (typeof TEAM)[number];
  featured?: boolean;
}) {
  return (
    <article>
      <CampaignImage
        src={PHOTO[member.id]}
        alt={`${member.name} — ${member.specialty}`}
        className={
          featured
            ? "aspect-[4/5] max-h-[70vh] lg:w-[88%]"
            : "aspect-[3/4] max-h-[56vh]"
        }
        objectPosition="center 18%"
        parallax={featured ? 16 : 0}
      />
      <h3 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
        {member.name}
      </h3>
      <p className="mt-1 text-[12px] tracking-[0.16em] text-ink-soft uppercase">
        {member.specialty}
      </p>
      <Button
        href={bookingUrl({ stylist: member.id })}
        external
        variant="text"
        className="mt-3 text-ink"
      >
        {ctaLabel(member.name)}
      </Button>
    </article>
  );
}
