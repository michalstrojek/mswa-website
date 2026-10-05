import Image from "next/image";
import type { CSSProperties } from "react";
import type { MockupDevice } from "@/lib/mockups";

type DeviceMockupProps = {
  name: string;
  image: string;
  imageAlt: string;
  device: MockupDevice;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Extra class on the outer shell (shadows, animation hooks) */
  shellClassName?: string;
  shellStyle?: CSSProperties;
};

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="flex h-6 items-center gap-1.5 border-b border-text/10 bg-soft/90 px-2.5 sm:h-7 sm:px-3">
      <span className="h-1.5 w-1.5 rounded-full bg-text/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-text/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-text/25" />
      <span className="ml-1.5 truncate text-[7px] tracking-[0.14em] text-muted/70 uppercase sm:ml-2 sm:text-[8px]">
        {label}
      </span>
    </div>
  );
}

export function DeviceMockup({
  name,
  image,
  imageAlt,
  device,
  priority = false,
  sizes = "(min-width: 1024px) 28vw, 55vw",
  className = "",
  shellClassName = "",
  shellStyle,
}: DeviceMockupProps) {
  if (device === "mobile") {
    return (
      <div className={className}>
        {/* iPhone-style frame — thinner corners + Dynamic Island */}
        <div
          className={`relative rounded-[1.05rem] bg-gradient-to-b from-[#3a3a3c] via-[#1c1c1e] to-[#0a0a0a] p-[2px] shadow-[0_28px_70px_-32px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.12)] sm:rounded-[1.15rem] sm:p-[2.5px] ${shellClassName}`}
          style={shellStyle}
        >
          <div className="relative overflow-hidden rounded-[0.9rem] bg-black sm:rounded-[1rem]">
            <div className="relative aspect-[9/19.5]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={priority}
                className="object-cover object-top"
                sizes={sizes}
              />
              {/* Dynamic Island */}
              <div
                className="absolute top-[6px] left-1/2 z-10 flex h-[10px] w-[30%] -translate-x-1/2 items-center justify-center rounded-full bg-black sm:top-[7px] sm:h-[12px]"
                aria-hidden
              >
                <span className="absolute right-[16%] h-[3.5px] w-[3.5px] rounded-full bg-[#2a2a2c] sm:h-[4px] sm:w-[4px]" />
              </div>
              {/* Home indicator */}
              <div
                className="absolute bottom-[5px] left-1/2 z-10 h-[2px] w-[30%] -translate-x-1/2 rounded-full bg-white/40 sm:bottom-[6px] sm:h-[2.5px]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (device === "tablet") {
    return (
      <div className={className}>
        {/* iPad-style frame — thin aluminum bezel */}
        <div
          className={`relative rounded-[0.85rem] bg-gradient-to-b from-[#6e6e73] via-[#3a3a3c] to-[#1c1c1e] p-[2px] shadow-[0_30px_75px_-36px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.18)] sm:rounded-[1rem] sm:p-[2.5px] ${shellClassName}`}
          style={shellStyle}
        >
          <div className="relative overflow-hidden rounded-[0.7rem] bg-black sm:rounded-[0.85rem]">
            <div className="relative aspect-[3/4]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={priority}
                className="object-cover object-top"
                sizes={sizes}
              />
              {/* Home indicator */}
              <div
                className="absolute bottom-[5px] left-1/2 z-10 h-[2.5px] w-[22%] -translate-x-1/2 rounded-full bg-white/30 sm:bottom-[6px] sm:h-[3px]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        className={`overflow-hidden rounded-[10px] border border-text/12 bg-elevated shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] sm:rounded-[12px] ${shellClassName}`}
        style={shellStyle}
      >
        <BrowserChrome label={name} />
        <div className="relative aspect-[16/10]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  );
}
