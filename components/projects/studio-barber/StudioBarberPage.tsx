import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ValueStrip from "./components/ValueStrip/ValueStrip";
import Team from "./components/Team/Team";
import Services from "./components/Services/Services";
import Salon from "./components/Salon/Salon";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";

type StudioBarberPageProps = {
  className?: string;
};

export function StudioBarberPage({ className = "" }: StudioBarberPageProps) {
  return (
    <div
      className={["studio-barber-root", className].filter(Boolean).join(" ")}
    >
      <Header />
      <main id="tresc">
        <Hero />
        <ValueStrip />
        <Team />
        <Services />
        <Salon />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
