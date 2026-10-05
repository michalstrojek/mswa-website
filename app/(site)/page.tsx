import { About } from "@/components/home/About";
import { Approach } from "@/components/home/Approach";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Offer } from "@/components/home/Offer";
import { Portfolio } from "@/components/home/Portfolio";
import { Process } from "@/components/home/Process";
import { Showcase } from "@/components/home/Showcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Approach />
      <Process />
      <Offer />
      <Showcase />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}
