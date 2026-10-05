import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projectSlugs } from "@/lib/projects";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  // Static demo routes take precedence for live projects.
  return projectSlugs
    .filter(
      (slug) =>
        slug !== "cutline" &&
        slug !== "black-label" &&
        slug !== "the-barber" &&
        slug !== "luna-studio" &&
        slug !== "studio-barber" &&
        slug !== "atelier" &&
        slug !== "nova-studio" &&
        slug !== "solea",
    )
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: site.name };
  return {
    title: `${project.name} — ${site.name}`,
    description: project.description,
  };
}

export default async function ProjectHoldingPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="tresc" className="relative flex min-h-screen items-end overflow-hidden bg-bg">
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          className="img-grade object-cover"
          style={{ objectPosition: project.imagePosition }}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-bg/20" />

      <div className="relative z-10 w-full px-6 pb-16 md:px-10 lg:px-16 lg:pb-24">
        <Link
          href="/#portfolio"
          className="text-[11px] tracking-[0.2em] text-muted uppercase transition-colors hover:text-accent"
        >
          ← Portfolio
        </Link>
        <p className="mt-16 text-[11px] tracking-[0.22em] text-accent uppercase">
          Projekt koncepcyjny · {project.category}
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-none font-normal md:text-7xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </main>
  );
}
