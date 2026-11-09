import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/components/projects/the-barber/the-barber.css";

const oswald = localFont({
  src: "../../../fonts/oswald/Oswald[wght].ttf",
  weight: "500 700",
  variable: "--font-tb-display",
  display: "swap",
});

const inter = localFont({
  src: "../../../fonts/inter/Inter[opsz,wght].ttf",
  weight: "300 600",
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
