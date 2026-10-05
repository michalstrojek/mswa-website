import Image from "next/image";
import Link from "next/link";
import {
  getProjectHref,
  hasProjectLink,
  isExternalDemo,
  type Project,
} from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const href = getProjectHref(project);
  const linked = hasProjectLink(project);
  const external = isExternalDemo(project);

  const content = (
    <>
      <div className="relative aspect-square overflow-hidden bg-elevated">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.04]"
          style={{ objectPosition: project.imagePosition }}
          sizes="(min-width: 1024px) 24vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
      </div>
      <div className="mt-4">
        <p className="text-[9px] tracking-[0.2em] text-accent uppercase">
          Projekt koncepcyjny
        </p>
        <h3 className="mt-2 font-serif text-[1.35rem] leading-none">{project.name}</h3>
        <p className="mt-2 text-[11px] tracking-[0.16em] text-muted uppercase">
          {project.category}
        </p>
        {linked ? (
          <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-text">
            Zobacz projekt
            <span className="arrow-shift" aria-hidden>
              ↗
            </span>
          </span>
        ) : null}
      </div>
    </>
  );

  if (!linked) {
    return <article className="block">{content}</article>;
  }

  return (
    <article>
      {external ? (
        <a
          href={href}
          className="group block cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <Link
          href={href}
          className="group block cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </Link>
      )}
    </article>
  );
}
