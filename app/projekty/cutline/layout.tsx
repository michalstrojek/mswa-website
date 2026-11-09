import type { Metadata } from "next";
import localFont from "next/font/local";
import { CutlineShell } from "@/components/projects/cutline/CutlineShell";
import "@/components/projects/cutline/cutline.css";

const zillaSlab = localFont({
  src: [
    {
      path: "../../../fonts/zilla-slab/ZillaSlab-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../fonts/zilla-slab/ZillaSlab-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../fonts/zilla-slab/ZillaSlab-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../fonts/zilla-slab/ZillaSlab-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../fonts/zilla-slab/ZillaSlab-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../fonts/zilla-slab/ZillaSlab-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-cutline-display",
  display: "swap",
});

const barlowCondensed = localFont({
  src: [
    {
      path: "../../../fonts/barlow-condensed/BarlowCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../fonts/barlow-condensed/BarlowCondensed-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../fonts/barlow-condensed/BarlowCondensed-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../fonts/barlow-condensed/BarlowCondensed-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../fonts/barlow-condensed/BarlowCondensed-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../fonts/barlow-condensed/BarlowCondensed-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../fonts/barlow-condensed/BarlowCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../fonts/barlow-condensed/BarlowCondensed-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-cutline-condensed",
  display: "swap",
});

const sourceSans = localFont({
  src: [
    {
      path: "../../../fonts/source-sans-3/SourceSans3[wght].ttf",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "../../../fonts/source-sans-3/SourceSans3-Italic[wght].ttf",
      weight: "400 600",
      style: "italic",
    },
  ],
  variable: "--font-cutline-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CUTLINE Barbershop",
  description:
    "CUTLINE — klasyczny barbershop o amerykańskim charakterze.",
  icons: {
    icon: "/projects/cutline/favicon.svg",
  },
};

export default function CutlineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CutlineShell
      className={`${zillaSlab.variable} ${barlowCondensed.variable} ${sourceSans.variable}`}
    >
      {children}
    </CutlineShell>
  );
}
