import { images } from '@/assets/images'
import { CampaignImage } from '@/components/media/CampaignImage'
import { OrganicPanel } from '@/components/shapes/OrganicPanel'
import { WaveDivider } from '@/components/shapes/WaveDivider'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function Atmosphere() {
  return (
    <section className="relative bg-ivory">
      <div className="relative overflow-hidden">
        <CampaignImage
          src={images.atmosphere}
          alt="Wnętrze salonu SOLÉA — ciepłe światło i stanowiska"
          className="aspect-[5/6] sm:aspect-[16/10] lg:aspect-[16/7.6]"
          objectPosition="center 58%"
          parallax={16}
          mask="left"
          maskDuration={1.15}
        />

        <WaveDivider variant="ivory-over-photo" position="top" />

        <div className="absolute inset-x-4 bottom-0 sm:inset-x-auto sm:left-0 sm:w-[72%] lg:top-[8%] lg:bottom-0 lg:w-[42%] xl:w-[38%]">
          <OrganicPanel className="h-full">
            <Reveal delay={0.18}>
              <h2 className="font-display text-[2.15rem] leading-tight font-medium text-ivory sm:text-4xl lg:text-[2.75rem]">
                Piękno
                <br />
                tkwi w detalach.
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-7 text-ivory/78">
                Starannie dobrane produkty, komfortowe stanowiska i atmosfera,
                do której chce się wracać.
              </p>
              <Button href="#salon" variant="text" className="mt-7 text-ivory">
                Zobacz nasz salon →
              </Button>
            </Reveal>
          </OrganicPanel>
        </div>
      </div>
    </section>
  )
}
