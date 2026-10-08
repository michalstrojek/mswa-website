import { Approach } from "@/components/Approach";
import { Cta } from "@/components/Cta";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Metamorphoses } from "@/components/Metamorphoses";
import { Pricing } from "@/components/Pricing";
import { Salon } from "@/components/Salon";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Metamorphoses />
        <Salon />
        <Team />
        <Pricing />
        <Testimonials />
        <Location />
        <Cta />
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
}
