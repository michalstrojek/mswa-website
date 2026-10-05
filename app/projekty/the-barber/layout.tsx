import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "@/components/projects/the-barber/the-barber.css";

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-tb-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-tb-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE BARBER — Ekskluzywny Barbershop dla Mężczyzn",
  description:
    "Więcej niż strzyżenie. Twój nowy wizerunek. Premium barbershop w sercu miasta — strzyżenie, broda, rytuały dla dżentelmena.",
};

export default function TheBarberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${oswald.variable} ${inter.variable}`}>{children}</div>
  );
}
