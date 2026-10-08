"use client";

import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { BookingButton, Label } from "@/components/ui";
import { useInView } from "@/hooks/useInView";
import { testimonialWall, type TestimonialTile } from "@/lib/site";

const toneClass: Record<TestimonialTile["tone"], string> = {
  cream: "bg-cream text-ink ring-1 ring-line/80",
  deep: "bg-cream-deep text-ink",
  ink: "bg-ink text-cream",
  accent: "bg-ink text-cream",
};

const sizeClass: Record<TestimonialTile["size"], string> = {
  sm: "min-h-[10.5rem] min-[390px]:min-h-[11.5rem] lg:min-h-[12.5rem]",
  md: "min-h-[12.5rem] min-[390px]:min-h-[14rem] lg:min-h-[16.5rem]",
  lg: "min-h-[14.5rem] min-[390px]:min-h-[16rem] lg:min-h-[22rem]",
};

function Stars({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`inline-flex gap-0.5 text-[10px] tracking-[0.12em] ${
        light ? "text-cream/70" : "text-ink/45"
      }`}
      aria-hidden="true"
    >
      {"★★★★★"}
    </span>
  );
}

function Tile({
  item,
  index,
  visible,
}: {
  item: TestimonialTile;
  index: number;
  visible: boolean;
}) {
  const light = item.tone === "ink" || item.tone === "accent";

  // Mobile masonry (≥390): featured spans 2 cols; desktop keeps 4-col dense grid
  const span =
    item.size === "lg"
      ? "min-[390px]:col-span-2 lg:col-span-2 lg:row-span-2"
      : item.size === "md" && index % 7 === 2
        ? "min-[390px]:col-span-2 lg:col-span-1"
        : "";

  return (
    <article
      className={`testimonial-tile group relative flex flex-col justify-between overflow-hidden p-4 min-[390px]:p-5 sm:p-6 ${toneClass[item.tone]} ${sizeClass[item.size]} ${span} ${
        visible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${60 + index * 45}ms` }}
    >
      <div>
        {item.showStars ? (
          <div className="mb-3 flex items-center gap-2.5 min-[390px]:mb-4">
            <Stars light={light} />
            {item.rating ? (
              <span
                className={`font-display text-[12px] tracking-[0.14em] ${
                  light ? "text-cream/80" : "text-ink/55"
                }`}
              >
                {item.rating}
              </span>
            ) : null}
          </div>
        ) : (
          <p
            className={`mb-3 text-[9px] tracking-[0.28em] uppercase min-[390px]:mb-4 ${
              light ? "text-cream/45" : "text-muted"
            }`}
          >
            Opinia
          </p>
        )}

        <p
          className={`font-display text-[clamp(1rem,3.8vw,1.35rem)] leading-[1.15] tracking-[-0.01em] ${
            item.size === "lg"
              ? "text-[clamp(1.2rem,4.2vw,2.1rem)] leading-[1.05]"
              : ""
          }`}
        >
          „{item.quote}”
        </p>
      </div>

      <footer
        className={`mt-4 text-[10px] tracking-[0.18em] uppercase min-[390px]:mt-6 ${
          light ? "text-cream/55" : "text-muted"
        }`}
      >
        {item.author}
        <span className={`mx-1.5 ${light ? "text-cream/30" : "text-line"}`}>/</span>
        {item.detail}
      </footer>
    </article>
  );
}

export function Testimonials() {
  const [gridRef, visible] = useInView<HTMLDivElement>({ amount: 0.06 });

  return (
    <section
      id="opinie"
      className="overflow-x-clip px-5 py-11 sm:px-8 sm:py-12 lg:px-10 lg:py-16 xl:px-12"
    >
      <div className="mb-8 flex min-w-0 flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="min-w-0 max-w-[34rem]">
          <Reveal variant="up-sm">
            <Label className="mb-4 lg:mb-5">Mówią o nas</Label>
          </Reveal>
          <h2 className="headline text-[clamp(2.15rem,4.4vw,3.9rem)]">
            <LineReveal delay={80}>
              <span className="block">Dobre włosy.</span>
            </LineReveal>
            <LineReveal delay={200} duration={1050}>
              <span className="block">
                Dobre <span className="italic-word">słowa.</span>
              </span>
            </LineReveal>
          </h2>
        </div>
        <Reveal variant="up-sm" delay={220}>
          <p className="max-w-[16rem] text-[12px] leading-5 tracking-[0.08em] uppercase text-muted lg:pb-1 lg:text-right">
            Głosy klientek.
            <br />
            Bez filtrów, bez scenariusza.
          </p>
        </Reveal>
      </div>

      <div
        ref={gridRef}
        className="testimonial-wall grid grid-cols-1 gap-2.5 min-[390px]:grid-cols-2 min-[390px]:gap-3 min-[390px]:[grid-auto-flow:dense] lg:grid-cols-4 lg:gap-4"
      >
        {testimonialWall.map((item, i) => (
          <Tile key={`${item.author}-${i}`} item={item} index={i} visible={visible} />
        ))}
      </div>

      <Reveal variant="up-sm" delay={120}>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 lg:mt-12 lg:gap-5 lg:pt-8">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted">
            Średnia ocen · 5.0 · Booksy & Google
          </p>
          <BookingButton variant="underline">Dołącz do nich</BookingButton>
        </div>
      </Reveal>
    </section>
  );
}
