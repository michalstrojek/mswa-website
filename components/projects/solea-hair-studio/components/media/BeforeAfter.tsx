import { CampaignImage } from "./CampaignImage";

type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  title: string;
};

export function BeforeAfter({ beforeSrc, afterSrc, title }: BeforeAfterProps) {
  return (
    <figure className="w-full">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div className="relative">
          <CampaignImage
            src={beforeSrc}
            alt={`${title} — przed`}
            className="aspect-[3/4]"
            objectPosition="center 18%"
          />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-taupe-deep/50 to-transparent" />
          <span className="pointer-events-none absolute left-3 top-3 text-[10px] tracking-[0.22em] text-ivory uppercase">
            Przed
          </span>
        </div>
        <div className="relative">
          <CampaignImage
            src={afterSrc}
            alt={`${title} — po`}
            className="aspect-[3/4]"
            objectPosition="center 18%"
          />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-taupe-deep/50 to-transparent" />
          <span className="pointer-events-none absolute left-3 top-3 text-[10px] tracking-[0.22em] text-ivory uppercase">
            Po
          </span>
        </div>
      </div>
      <figcaption className="mt-4 font-display text-xl text-ink italic sm:text-2xl">
        {title}
      </figcaption>
    </figure>
  );
}
