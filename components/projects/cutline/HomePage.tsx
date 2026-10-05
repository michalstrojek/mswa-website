import { Hero } from "./Hero";
import { IdentityStrip } from "./IdentityStrip";
import { Team } from "./Team";
import { Atmosphere } from "./Atmosphere";
import { ServicesPreview } from "./ServicesPreview";
import { About } from "./About";
import { InstagramStrip } from "./InstagramStrip";
import { Contact } from "./Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <IdentityStrip />
      <Team />
      <Atmosphere />
      <ServicesPreview />
      <About />
      <InstagramStrip />
      <Contact />
    </>
  );
}
