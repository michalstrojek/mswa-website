import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Regulamin — ${site.name}`,
  description: "Regulamin korzystania ze strony MSWA.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[640px] px-6 pt-36 pb-32 md:px-10 md:pt-44">
      <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
        Informacja prawna
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight font-normal md:text-5xl">
        Regulamin
      </h1>
      <p className="mt-10 text-[17px] leading-relaxed text-muted">
        Ta strona jest placeholderem. Pełny regulamin pojawi się przed
        publikacją serwisu.
      </p>
      <p className="mt-6 text-[17px] leading-relaxed text-muted">
        W razie pytań napisz na{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-text underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
        >
          {site.email}
        </a>
        .
      </p>
      <Link
        href="/"
        className="mt-16 inline-block text-sm tracking-[0.16em] text-muted uppercase transition-colors hover:text-accent"
      >
        ← Wróć na stronę główną
      </Link>
    </article>
  );
}
