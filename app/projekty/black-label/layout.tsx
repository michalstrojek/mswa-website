import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { BlackLabelShell } from "@/components/projects/black-label/layout/BlackLabelShell";
import "@/components/projects/black-label/black-label.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-bl-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-bl-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLACK LABEL — Warszawa",
  description:
    "BLACK LABEL — premium barbershop w Warszawie. Precyzja, rytuał, charakter.",
  icons: {
    icon: "/projects/black-label/favicon.svg",
  },
};

export default function BlackLabelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BlackLabelShell className={`${cormorant.variable} ${dmSans.variable}`}>
      {children}
    </BlackLabelShell>
  );
}
