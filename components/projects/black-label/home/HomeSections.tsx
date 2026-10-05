import Link from "next/link";
import {
  archiveImage,
  homeGallery,
  instagramPreviews,
} from "../content/gallery";
import { services } from "../content/services";
import { site } from "../content/site";
import { BookLink } from "../brand/BookLink";
import { Reveal } from "../motion/Reveal";
import { GalleryGrid } from "./GalleryGrid";

export function HomeSections() {
  return (
    <>
      <section id="o-nas" className="home-block" aria-labelledby="about-heading">
        <div className="container-editorial about-story">
          <Reveal className="about-story__copy">
            <p className="meta-label mb-5">{site.about.eyebrow}</p>
            <h2 id="about-heading" className="section-title">
              {site.about.heading}
            </h2>
            <div className="about-badges">
              <span>{site.established}</span>
              <span>{site.location}</span>
            </div>
            <p className="about-story__accent">{site.about.accent}</p>
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="section-copy about-story__p">
                {paragraph}
              </p>
            ))}
            <Link href={site.ofertaHref} className="editorial-link mt-8 inline-flex">
              Zobacz ofertę
            </Link>
          </Reveal>

          <Reveal className="about-story__photo" delay={0.1}>
            <figure className="media-frame about-archive m-0">
              <img
                src={archiveImage.src}
                alt={archiveImage.alt}
                className="media-frame__image about-archive__image"
                loading="lazy"
              />
              <figcaption className="about-archive__cap">
                Wejście · {site.contact.address} · {site.location}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="home-block home-block--gallery" aria-labelledby="gallery-heading">
        <div className="container-editorial">
          <Reveal className="section-head">
            <div>
              <p className="meta-label mb-4">Realizacje</p>
              <h2 id="gallery-heading" className="section-title">
                Galeria
              </h2>
            </div>
            <Link href={site.galeriaHref} className="editorial-link">
              Zobacz galerię
            </Link>
          </Reveal>

          <GalleryGrid images={homeGallery} />
        </div>
      </section>

      <section className="home-block" aria-labelledby="menu-heading">
        <div className="container-editorial offer-layout">
          <Reveal>
            <p className="meta-label mb-4">Cennik</p>
            <h2 id="menu-heading" className="section-title">
              Oferta
            </h2>
            <p className="section-copy mt-5 max-w-[36ch]">
              Czytelne usługi, stałe czasy, konkretne ceny.
              Bez pakietów marketingowych — tylko to, co robimy dobrze.
            </p>
            <Link href={site.ofertaHref} className="editorial-link mt-8 inline-flex">
              Pełna oferta
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="price-list" role="list">
              {services.map((service) => (
                <article key={service.name} className="price-row" role="listitem">
                  <div className="price-row__main">
                    <h3 className="price-row__name">{service.name}</h3>
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
        </div>
      </section>

      <section className="home-block home-block--instagram" aria-labelledby="instagram-heading">
        <div className="container-editorial">
          <Reveal className="section-head">
            <div>
              <p className="meta-label mb-3">Social</p>
              <h2 id="instagram-heading" className="section-title section-title--compact">
                Instagram
              </h2>
              <p className="section-copy mt-3">{site.instagram.handle}</p>
            </div>
            <a
              href={site.instagram.href}
              target="_blank"
              rel="noreferrer"
              className="editorial-link"
            >
              Odwiedź Instagram
            </a>
          </Reveal>

          <div className="ig-row">
            {instagramPreviews.map((image) => (
              <a
                key={image.alt}
                href={site.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="ig-row__item"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="media-frame__image"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block--contact" aria-labelledby="contact-heading">
        <div className="container-editorial contact-layout">
          <Reveal>
            <p className="meta-label mb-4">Lokalizacja</p>
            <h2 id="contact-heading" className="section-title">
              Kontakt
            </h2>
            <p className="section-copy mt-5 max-w-[32ch]">
              Rezerwacja przez Booksy zajmuje chwilę. Jeśli wolisz rozmowę —
              zadzwoń albo napisz na Instagramie. Potwierdzimy termin i przygotujemy fotel.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="contact-details">
            <div>
              <p className="meta-label mb-3">Adres</p>
              <p className="contact-line">
                {site.contact.address}
                <br />
                {site.contact.city}
              </p>
            </div>
            <div>
              <p className="meta-label mb-3">Telefon</p>
              <a href={site.contact.phoneHref} className="contact-line hover:text-brass-soft">
                {site.contact.phone}
              </a>
            </div>
            <div>
              <p className="meta-label mb-3">Godziny</p>
              <ul className="hours-list">
                {site.contact.hours.map((row) => (
                  <li key={row.days}>
                    <span>{row.days}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="meta-label mb-3">Instagram</p>
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="contact-line hover:text-brass-soft"
              >
                {site.instagram.handle}
              </a>
            </div>
            <BookLink className="editorial-link mt-1 w-fit" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
