import { BookLink } from "../brand/BookLink";
import { Reveal } from "../motion/Reveal";
import { services } from "../content/services";

export function OfertaPage() {
  return (
    <main className="page-main">
      <div className="container-editorial page-intro">
        <p className="meta-label mb-5">Cennik</p>
        <h1 className="page-title">Oferta</h1>
        <p className="section-copy mt-5 max-w-[42ch]">
          Precyzyjna lista usług. Bez zbędnych pakietów —
          tylko to, czego potrzebujesz i na co poświęcamy czas.
        </p>
      </div>

      <div className="container-editorial">
        <Reveal>
          <div className="price-list" role="list">
            {services.map((service) => (
              <article key={service.name} className="price-row" role="listitem">
                <div className="price-row__main">
                  <h2 className="price-row__name">{service.name}</h2>
                  {service.description ? (
                    <p className="price-row__desc">{service.description}</p>
                  ) : null}
                </div>
                <div className="price-row__aside">
                  <span className="price-row__duration">{service.duration}</span>
                  <span className="price-row__price">{service.price}</span>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
        <div className="mt-14 flex justify-end">
          <BookLink className="editorial-link" />
        </div>
      </div>
    </main>
  );
}
