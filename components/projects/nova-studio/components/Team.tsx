"use client";

import Image from "next/image";
import { Reveal, type RevealVariant } from "./Reveal";
import { BookingButton, Label } from "./ui";
import { team } from "../lib/site";

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
    <Reveal variant={variant} delay={delay} className={className}>
      <article className="group">
        <div className={`relative overflow-hidden bg-cream-deep ${aspect}`}>
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="img-zoom object-cover object-[50%_18%] contrast-[1.02] saturate-[0.92]"
            sizes={sizes}
          />
        </div>
        <div className="team-meta pt-2.5 lg:pt-2">
          <h3 className={nameClassName}>{member.name}</h3>
          <p className="mt-1 text-[11px] leading-none text-muted">{member.role}</p>
          <BookingButton
            variant="underline"
            className="mt-2 !text-[9px] !tracking-[0.16em] lg:mt-1.5"
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
      <div className="px-5 pb-8 pt-10 sm:px-8 lg:px-10 lg:pb-8 lg:pt-9 xl:px-12">
        <div className="flex min-w-0 flex-col gap-8 lg:flex-row lg:items-start lg:gap-6 xl:gap-8">
          <div className="min-w-0 max-w-[17.5rem] shrink-0 lg:pt-0 lg:w-[15.5rem] xl:w-[16.5rem]">
            <Reveal variant="up-sm" delay={0}>
              <Label className="mb-4">Nasz zespół</Label>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h2 className="headline text-[clamp(2rem,3.2vw,3.15rem)]">
                Ludzie,
                <br />
                którzy tworzą
                <br />
                <span className="italic-word">więcej.</span>
              </h2>
            </Reveal>
            <Reveal variant="up-sm" delay={160}>
              <p className="mt-5 max-w-[16rem] text-[11px] leading-5 tracking-[0.14em] uppercase text-muted">
                Poznaj nasz zespół i umów się do swojej stylistki.
              </p>
            </Reveal>
          </div>

          <div className="relative grid min-w-0 flex-1 grid-cols-2 items-start gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-y-8 lg:hidden">
            <MemberCard
              member={maja}
              sizes="70vw"
              nameClassName="text-[13px] tracking-[0.16em] uppercase"
              className="col-span-2 mx-auto w-[72%] max-w-[18rem] order-first sm:col-span-4"
              variant="up"
              delay={80}
            />
            <MemberCard
              member={natalia}
              sizes="40vw"
              aspect="aspect-[3/3.85]"
              className="w-full max-w-[11.5rem]"
              variant="up-sm"
              delay={160}
            />
            <MemberCard
              member={ola}
              sizes="40vw"
              aspect="aspect-[3/3.85]"
              className="w-full max-w-[12.5rem] justify-self-end"
              variant="up-sm"
              delay={240}
            />
            <MemberCard
              member={zosia}
              sizes="40vw"
              aspect="aspect-[3/3.75]"
              className="w-full max-w-[10.75rem]"
              variant="up-sm"
              delay={320}
            />
            <MemberCard
              member={julia}
              sizes="40vw"
              aspect="aspect-[3/3.75]"
              className="w-full max-w-[11.75rem] justify-self-end"
              variant="up-sm"
              delay={400}
            />
          </div>

          <div className="relative hidden min-w-0 flex-1 items-start justify-end gap-3 pr-[8%] lg:flex xl:gap-4 xl:pr-[10%]">
            <div className="flex w-[11rem] shrink-0 flex-col gap-3.5 xl:w-[11.5rem]">
              <MemberCard
                member={natalia}
                sizes="12vw"
                aspect="aspect-[3/3.85]"
                className="w-full"
                variant="left"
                delay={60}
              />
              <MemberCard
                member={zosia}
                sizes="11vw"
                aspect="aspect-[3/3.75]"
                className="w-[90%] self-end"
                variant="left"
                delay={300}
              />
            </div>

            <MemberCard
              member={maja}
              sizes="20vw"
              nameClassName="text-[13px] tracking-[0.16em] uppercase"
              className="mt-1.5 w-full max-w-[17.25rem] shrink-0 xl:max-w-[18rem]"
              variant="scale"
              delay={140}
            />

            <div className="flex w-[11rem] shrink-0 flex-col gap-3.5 xl:w-[11.5rem]">
              <MemberCard
                member={ola}
                sizes="12vw"
                aspect="aspect-[3/3.85]"
                className="w-full"
                variant="right"
                delay={220}
              />
              <MemberCard
                member={julia}
                sizes="11vw"
                aspect="aspect-[3/3.75]"
                className="w-[90%] self-start"
                variant="right"
                delay={380}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
