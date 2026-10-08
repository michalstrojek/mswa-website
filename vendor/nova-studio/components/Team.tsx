"use client";

import Image from "next/image";
import { LineReveal } from "@/components/LineReveal";
import { Reveal, type RevealVariant } from "@/components/Reveal";
import { BookingButton, Label } from "@/components/ui";
import { team } from "@/lib/site";

type Member = (typeof team)[number];

function MemberCard({
  member,
  sizes,
  aspect = "aspect-[3/4]",
  nameClassName = "text-[12px] tracking-[0.16em] uppercase lg:text-[13px]",
  className = "",
  variant = "up",
  delay = 0,
}: {
  member: Member;
  sizes: string;
  aspect?: string;
  nameClassName?: string;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}) {
  return (
    <Reveal variant={variant} delay={delay} className={className} duration={950}>
      <article className="group" data-cursor="→">
        <div
          className={`portrait-frame relative overflow-hidden bg-cream-deep ${aspect}`}
          style={{ transitionDelay: `${delay + 60}ms` }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="img-zoom object-cover object-[50%_18%] contrast-[1.02] saturate-[0.92]"
            sizes={sizes}
          />
        </div>
        <div className="team-meta pt-2 lg:pt-2">
          <h3 className={nameClassName}>{member.name}</h3>
          <p className="mt-1 text-[11px] leading-none text-muted">{member.role}</p>
          <BookingButton
            variant="underline"
            className="mt-1.5 !text-[9px] !tracking-[0.16em] lg:mt-1.5"
          />
        </div>
      </article>
    </Reveal>
  );
}

export function Team() {
  const [maja, ola, julia, natalia, zosia] = team;

  return (
    <section id="zespol" className="overflow-x-clip">
      <div className="px-5 pb-6 pt-7 sm:px-8 sm:pb-7 sm:pt-8 lg:px-10 lg:pb-7 lg:pt-8 xl:px-12">
        <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:gap-6 xl:gap-8">
          <div className="min-w-0 max-w-[17.5rem] shrink-0 lg:pt-0 lg:w-[15.5rem] xl:w-[16.5rem]">
            <Reveal variant="up-sm" delay={0}>
              <Label className="mb-4">Nasz zespół</Label>
            </Reveal>
            <h2 className="headline text-[clamp(2rem,3.2vw,3.15rem)]">
              <LineReveal delay={70}>
                <span className="block">Ludzie,</span>
              </LineReveal>
              <LineReveal delay={150}>
                <span className="block">którzy tworzą</span>
              </LineReveal>
              <LineReveal delay={250} duration={1050}>
                <span className="italic-word block">więcej.</span>
              </LineReveal>
            </h2>
            <Reveal variant="up-sm" delay={340}>
              <p className="mt-4 max-w-[16rem] text-[11px] leading-5 tracking-[0.14em] uppercase text-muted lg:mt-5">
                Poznaj nasz zespół i umów się do swojej stylistki.
              </p>
            </Reveal>
          </div>

          {/* Mobile / tablet — compact asymmetric: Maja + 2×2 */}
          <div className="relative grid min-w-0 flex-1 grid-cols-2 items-start gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 lg:hidden">
            <MemberCard
              member={maja}
              sizes="85vw"
              nameClassName="text-[13px] tracking-[0.16em] uppercase"
              className="col-span-2 w-full max-w-none"
              variant="scale"
              delay={80}
            />
            <MemberCard
              member={natalia}
              sizes="45vw"
              aspect="aspect-[3/3.85]"
              className="w-full"
              variant="left"
              delay={140}
            />
            <MemberCard
              member={ola}
              sizes="45vw"
              aspect="aspect-[3/3.85]"
              className="w-full"
              variant="right"
              delay={200}
            />
            <MemberCard
              member={zosia}
              sizes="45vw"
              aspect="aspect-[3/3.75]"
              className="w-full"
              variant="left"
              delay={260}
            />
            <MemberCard
              member={julia}
              sizes="45vw"
              aspect="aspect-[3/3.75]"
              className="w-full"
              variant="right"
              delay={320}
            />
          </div>

          {/* Desktop — curated editorial cluster */}
          <div className="relative hidden min-w-0 flex-1 items-start justify-end gap-3 pr-[8%] lg:flex xl:gap-4 xl:pr-[10%]">
            <div className="flex w-[11rem] shrink-0 flex-col gap-3.5 xl:w-[11.5rem]">
              <MemberCard
                member={natalia}
                sizes="12vw"
                aspect="aspect-[3/3.85]"
                className="w-full"
                variant="left"
                delay={100}
              />
              <MemberCard
                member={zosia}
                sizes="11vw"
                aspect="aspect-[3/3.75]"
                className="w-[90%] self-end"
                variant="left"
                delay={380}
              />
            </div>

            <MemberCard
              member={maja}
              sizes="20vw"
              nameClassName="text-[13px] tracking-[0.16em] uppercase"
              className="mt-1.5 w-full max-w-[17.25rem] shrink-0 xl:max-w-[18rem]"
              variant="scale"
              delay={200}
            />

            <div className="flex w-[11rem] shrink-0 flex-col gap-3.5 xl:w-[11.5rem]">
              <MemberCard
                member={ola}
                sizes="12vw"
                aspect="aspect-[3/3.85]"
                className="w-full"
                variant="right"
                delay={280}
              />
              <MemberCard
                member={julia}
                sizes="11vw"
                aspect="aspect-[3/3.75]"
                className="w-[90%] self-start"
                variant="right"
                delay={460}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
