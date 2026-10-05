import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { Philosophy } from "./sections/Philosophy";
import { Atmosphere } from "./sections/Atmosphere";
import { Services } from "./sections/Services";
import { Transformations } from "./sections/Transformations";
import { Team } from "./sections/Team";
import { Salon } from "./sections/Salon";
import { FinalCta } from "./sections/FinalCta";

export function SoleaHairStudioPage({ className = "" }: { className?: string }) {
  return (
    <div className={["solea-root", className].filter(Boolean).join(" ")}>
      <a href="#start" className="skip-link">
        Przejdź do treści
      </a>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Atmosphere />
        <Services />
        <Transformations />
        <Team />
        <Salon />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
