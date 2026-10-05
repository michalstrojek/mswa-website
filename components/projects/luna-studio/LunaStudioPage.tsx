import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ValueStrip from "./components/ValueStrip/ValueStrip";
import Services from "./components/Services/Services";
import BeautyStrip from "./components/BeautyStrip/BeautyStrip";
import Team from "./components/Team/Team";
import Salon from "./components/Salon/Salon";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";

type LunaStudioPageProps = {
  className?: string;
};

export function LunaStudioPage({ className = "" }: LunaStudioPageProps) {
  return (
    <div className={["luna-studio-root", className].filter(Boolean).join(" ")}>
      <Header />
      <main id="tresc">
        <Hero />
        <ValueStrip />
        <Services />
        <BeautyStrip />
        <Team />
        <Salon />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
