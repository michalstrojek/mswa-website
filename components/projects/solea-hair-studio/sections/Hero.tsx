import { images } from "../data/images";
import { Button } from "../components/ui/Button";
import { ScriptAccent } from "../components/ui/ScriptAccent";
import { CampaignImage } from "../components/media/CampaignImage";
import { ArchFrame } from "../components/shapes/ArchFrame";
import { WaveDivider } from "../components/shapes/WaveDivider";
import { bookingUrl } from "../config/booking";

const HERO_LABELS = ["Kolor", "Cięcie", "Pielęgnacja", "Stylizacja"];

export function Hero() {
  return (
    <section
      id="start"
      className="relative isolate min-h-[100svh] overflow-hidden bg-taupe-deep text-ivory"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <CampaignImage
          src={images.heroPortrait}
          alt="Kobieta z falowanymi włosami — kampania SOLÉA"
          className="absolute inset-0 h-full w-full"
          imgClassName="hero-photo"
          priority
          objectPosition="50% 32%"
          hoverZoom={false}
          parallax={18}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-taupe-deep/55 via-transparent to-taupe-deep/50 lg:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-[46%] bg-gradient-to-r from-taupe-deep from-10% via-taupe-deep/70 to-transparent lg:block" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-taupe-deep/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-taupe-deep/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-6 pt-28 pb-24 sm:px-8 lg:justify-center lg:px-12 lg:pt-20 lg:pb-28">
        <div className="max-w-[32rem]">
          <p className="text-[11px] tracking-[0.28em] text-ivory/70 uppercase">
            Naturalne piękno. Na co dzień.
          </p>
          <h1 className="mt-5 font-display text-[2.45rem] leading-[1.06] font-medium text-ivory sm:text-6xl lg:text-[4.2rem]">
            Włosy,
            <br />
            które idą
            <br />
            z Tobą.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-ivory/80">
            Kolor, cięcie i pielęgnacja w harmonii z Twoim stylem życia. Bez
            kompromisów.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={bookingUrl()} external variant="light">
              Umów wizytę →
            </Button>
            <Button href="#salon" variant="ghost" className="text-ivory">
              Zobacz nasz salon
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        <div className="absolute top-[16%] right-[8%] h-[58%] w-[10.75rem] xl:right-[9%] xl:w-[11.75rem]">
          <ArchFrame className="h-full">
            <CampaignImage
              src={images.heroArch}
              alt="Wnętrze salonu SOLÉA"
              className="h-full"
              objectPosition="center 42%"
              hoverZoom={false}
            />
          </ArchFrame>
          <ScriptAccent className="absolute top-[36%] -left-[6.4rem] -rotate-[13deg] text-[1.7rem] leading-[1.05] text-ivory/90">
            Good Hair
            <br />
            Good Mood
          </ScriptAccent>
        </div>
        <ul className="absolute right-[8.5%] bottom-[14%] space-y-1.5 text-right text-[10px] tracking-[0.28em] text-ivory/45 uppercase xl:right-[9.5%]">
          {HERO_LABELS.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 -mt-8 px-6 pb-10 lg:hidden" aria-hidden>
        <ScriptAccent className="text-[1.4rem] text-ivory/85">
          Good Hair Good Mood
        </ScriptAccent>
      </div>

      <WaveDivider variant="hero-to-ivory" />
    </section>
  );
}
