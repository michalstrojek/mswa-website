import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `O MSWA — ${site.name}`,
  description:
    "MSWA tworzy strony internetowe dla firm — indywidualny kierunek wizualny i pełna realizacja od pomysłu do publikacji.",
};

export default function AboutPage() {
  return (
    <article className="px-6 pt-36 pb-28 md:px-10 md:pt-44 md:pb-36 lg:px-16 lg:pb-44">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <SectionLabel>O MSWA</SectionLabel>
          <h1 className="mt-8 max-w-[720px] font-serif text-4xl leading-[1.12] font-normal md:text-5xl lg:text-[56px]">
            Dobra strona powinna wyglądać jak Twoja firma.
          </h1>
          <p className="mt-8 max-w-[560px] text-[17px] leading-relaxed text-muted">
            Najpierw poznajemy Twoją firmę, jej klientów i cel strony. Następnie
            dopasowujemy układ, treści i kierunek wizualny tak, żeby strona
            pasowała do charakteru biznesu i faktycznie spełniała swoją rolę.
          </p>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-muted">
            Ty dajesz nam wiedzę o biznesie — my zajmujemy się stroną od A do Z.
          </p>
        </Reveal>
      </div>
    </article>
  );
}
