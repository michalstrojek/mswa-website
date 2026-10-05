import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Source_Sans_3,
  Zilla_Slab,
} from "next/font/google";
import { CutlineShell } from "@/components/projects/cutline/CutlineShell";
import "@/components/projects/cutline/cutline.css";

const zillaSlab = Zilla_Slab({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cutline-display",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cutline-condensed",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
