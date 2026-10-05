import type { Metadata } from "next";
import { ProjectCard } from "@/components/home/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { portfolioProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Portfolio — ${site.name}`,
  description:
    "Projekty koncepcyjne MSWA — strony internetowe o różnym charakterze, dopasowane do firm.",
};

export default function ProjectsPage() {
  return (
    <section className="px-6 pt-36 pb-28 md:px-10 md:pt-44 md:pb-36 lg:px-16 lg:pb-44">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.12] font-normal md:text-5xl lg:text-[56px]">
            Każda firma ma inny charakter.
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted">
            Projekty koncepcyjne MSWA — różne kierunki wizualne dla różnych firm.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {portfolioProjects.map((project, index) => (
            <Reveal key={project.slug} delay={`${(index % 3) * 70}ms`}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
