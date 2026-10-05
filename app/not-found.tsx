import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] tracking-[0.22em] text-accent uppercase">404</p>
      <h1 className="mt-6 font-serif text-4xl font-normal md:text-5xl">
        Nie znaleziono strony.
      </h1>
      <Link
        href="/"
        className="mt-10 text-[12px] tracking-[0.18em] uppercase transition-colors hover:text-accent"
      >
        ← {site.name}
      </Link>
    </section>
  );
}
