import { images } from "../data/images";
import { TRANSFORMATIONS } from "../data/transformations";
import { BeforeAfter } from "../components/media/BeforeAfter";
import { Reveal } from "../components/ui/Reveal";

const PHOTO = {
  before1: images.before1,
  after1: images.after1,
  before2: images.before2,
  after2: images.after2,
  before3: images.before3,
  after3: images.after3,
} as const;

export function Transformations() {
  return (
    <section className="bg-ivory pb-8 pt-4 sm:pb-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-[8%]">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.26em] text-ink-soft uppercase">
              Metamorfozy
            </p>
          </Reveal>
          <Reveal delay={0.09}>
            <h2 className="mt-4 font-display text-[2.2rem] leading-tight font-medium text-ink sm:text-5xl">
              Widoczna zmiana.
              <br />
              Naturalny efekt.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {TRANSFORMATIONS.map((item, index) => (
            <div
              key={item.id}
              className={
                index === 1 ? "md:mt-16" : index === 2 ? "md:mt-8" : ""
              }
            >
              <BeforeAfter
                title={item.title}
                beforeSrc={PHOTO[item.before]}
                afterSrc={PHOTO[item.after]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
