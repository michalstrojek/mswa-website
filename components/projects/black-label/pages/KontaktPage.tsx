import { BookLink } from "../brand/BookLink";
import { site } from "../content/site";

export function KontaktPage() {
  return (
    <main className="page-main">
      <div className="container-editorial page-intro">
        <p className="meta-label mb-5">Rezerwacja</p>
        <h1 className="page-title">Kontakt</h1>
        <p className="section-copy mt-5 max-w-[42ch]">
          Najwygodniej umówisz wizytę przez Booksy. Możesz też zadzwonić
          albo napisać na Instagramie — potwierdzimy godzinę i przygotujemy miejsce.
        </p>
      </div>

      <div className="container-editorial contact-page">
        <div className="contact-page__block">
          <p className="meta-label mb-3">Adres</p>
          <p className="contact-line">
            {site.contact.address}
            <br />
            {site.contact.city}
          </p>
        </div>

        <div className="contact-page__block">
          <p className="meta-label mb-3">Telefon</p>
          <a href={site.contact.phoneHref} className="contact-line hover:text-brass-soft">
            {site.contact.phone}
          </a>
        </div>

        <div className="contact-page__block">
          <p className="meta-label mb-3">Godziny otwarcia</p>
          <ul className="hours-list">
            {site.contact.hours.map((row) => (
              <li key={row.days}>
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-page__block">
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

        <div className="contact-page__cta">
          <BookLink className="editorial-link" />
          <span className="meta-label text-ivory-muted">
            otwiera Booksy w nowej karcie
          </span>
        </div>
      </div>
    </main>
  );
}
