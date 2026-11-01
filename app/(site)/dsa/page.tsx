import type { Metadata } from "next";
import Link from "next/link";
import { DsaReportForm } from "@/components/dsa/DsaReportForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `DSA — punkt kontaktowy i zgłaszanie treści — ${site.name}`,
  description:
    "Punkt kontaktowy DSA MSWA oraz mechanizm zgłaszania nielegalnych treści na stronach utrzymywanych przez MSWA (Care / Care Plus).",
};

const linkClass =
  "text-text underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent break-all";

const sectionClass = "mt-12";
const headingClass =
  "font-serif text-2xl leading-tight font-normal text-text md:text-[1.75rem]";
const paragraphClass =
  "mt-4 text-[15px] leading-relaxed text-muted sm:text-[17px]";
const listClass =
  "mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted sm:text-[17px]";

export default function DsaPage() {
  return (
    <article className="mx-auto max-w-[640px] px-6 pb-32 pt-36 md:px-10 md:pt-44">
      <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
        Obowiązki informacyjne
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight font-normal md:text-5xl">
        DSA — punkt kontaktowy i zgłaszanie nielegalnych treści
      </h1>
      <p className="mt-4 text-[13px] leading-relaxed text-muted/80">
        Stan na 1 listopada 2026&nbsp;r. Informacje dotyczą ostrożnościowego
        modelu usług MSWA Care i MSWA Care Plus (strony klientów utrzymywane
        przez MSWA na infrastrukturze Cloudflare). Ta strona nie rozstrzyga
        ostatecznej kwalifikacji każdej przyszłej usługi MSWA.
      </p>

      <section className={sectionClass} aria-labelledby="dsa-subject">
        <h2 id="dsa-subject" className={headingClass}>
          Podmiot
        </h2>
        <p className={paragraphClass}>
          Michał Strojek, prowadzący działalność nierejestrowaną pod marką MSWA
          — Website Agency.
        </p>
        <p className={paragraphClass}>
          Adres: ul. Wokulskiego 9/15, 05-800 Pruszków.
        </p>
        <p className={paragraphClass}>
          {"E-mail: "}
          <a href="mailto:kontakt@mswa.pl" className={linkClass}>
            kontakt@mswa.pl
          </a>
          .
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="dsa-art11">
        <h2 id="dsa-art11" className={headingClass}>
          Punkt kontaktowy dla organów (art. 11 DSA)
        </h2>
        <p className={paragraphClass}>
          Elektroniczny punkt kontaktowy dla organów państw członkowskich,
          Komisji i Rady ds. Usług Cyfrowych:{" "}
          <a href="mailto:kontakt@mswa.pl" className={linkClass}>
            kontakt@mswa.pl
          </a>
          .
        </p>
        <p className={paragraphClass}>
          Języki komunikacji z organami:{" "}
          <strong className="font-medium text-text">polski</strong> oraz{" "}
          <strong className="font-medium text-text">angielski</strong>.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="dsa-art12">
        <h2 id="dsa-art12" className={headingClass}>
          Punkt kontaktowy dla odbiorców usługi (art. 12 DSA)
        </h2>
        <p className={paragraphClass}>
          Elektroniczny punkt kontaktowy dla odbiorców usługi:{" "}
          <a href="mailto:kontakt@mswa.pl" className={linkClass}>
            kontakt@mswa.pl
          </a>{" "}
          oraz formularz zgłoszeń DSA poniżej. Zapewniamy kontakt z człowiekiem —
          nie ograniczamy się do odpowiedzi wyłącznie automatycznej.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="dsa-scope">
        <h2 id="dsa-scope" className={headingClass}>
          Zakres zgłoszeń
        </h2>
        <p className={paragraphClass}>
          Zgłoszenia dotyczą konkretnych treści na stronach internetowych
          klientów utrzymywanych przez MSWA w ramach MSWA Care lub MSWA Care
          Plus. Zgłaszający powinien podać:
        </p>
        <ul className={listClass}>
          <li>uzasadnienie, dlaczego treść ma być nielegalna;</li>
          <li>dokładny adres URL (lub URL-e) oraz — w razie potrzeby — dodatkowe dane pozwalające odnaleźć treść;</li>
          <li>
            oświadczenie o dobrej wierze oraz o prawdziwości i kompletności
            informacji.
          </li>
        </ul>
        <p className={paragraphClass}>
          Co do zasady zgłaszający podaje imię lub nazwę oraz adres e-mail. Wyjątek:
          przy zgłoszeniach dotyczących informacji uznawanych za związane z
          przestępstwami z art. 3–7 dyrektywy 2011/93/UE (wykorzystywanie
          seksualne dzieci) tych danych nie wymagamy. Nie wymagamy zakładania
          konta. Nie prosimy o przesyłanie materiałów przedstawiających
          wykorzystywanie dzieci — wystarczy URL i uzasadnienie.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="dsa-process">
        <h2 id="dsa-process" className={headingClass}>
          Przyjęcie, ocena i decyzja
        </h2>
        <p className={paragraphClass}>
          Gdy osoba poda elektroniczny adres do odpowiedzi, system wysyła
          automatyczne potwierdzenie odbioru bez zbędnej zwłoki (osobna
          wiadomość e-mail). Następnie MSWA ocenia zgłoszenie terminowo,
          rzetelnie, obiektywnie i bez arbitralności.
        </p>
        <p className={paragraphClass}>
          Decyzję w sprawie wskazanej treści odnotowujemy w korespondencji
          dotyczącej zgłoszenia. Osobę, która podała adres e-mail, informujemy
          ręcznie o decyzji oraz o faktycznie dostępnych środkach jej
          zakwestionowania (art. 16 ust. 5 DSA). Rozpatrywanie zgłoszeń i
          decyzje wykonuje człowiek.
        </p>
        <p className={paragraphClass}>
          Samo zgłoszenie nie usuwa automatycznie treści. Nie obiecujemy
          sztywnego terminu typu „24 godziny” — tam, gdzie DSA wymaga działania
          „bez zbędnej zwłoki”, stosujemy to sformułowanie.
        </p>
        <p className={paragraphClass}>
          Jeżeli MSWA ograniczy treść lub usługę z przyczyn objętych art. 17
          DSA, przekaże dotkniętemu klientowi lub odbiorcy wymagane uzasadnienie,
          chyba że do konkretnej decyzji stosuje się przewidziany prawem wyjątek.
        </p>
        <p className={paragraphClass}>
          Dane osoby zgłaszającej nie są automatycznie ujawniane klientowi.
          Formularz nie przyjmuje ani nie przechowuje plików z nielegalnymi
          materiałami — wystarczą URL i uzasadnienie.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="dsa-moderation">
        <h2 id="dsa-moderation" className={headingClass}>
          Faktyczny model moderacji
        </h2>
        <p className={paragraphClass}>
          Zgłoszenia są oceniane indywidualnie przez człowieka. MSWA nie stosuje
          automatycznego usuwania treści na podstawie samego wpływu formularza
          ani narzędzi automatycznej moderacji treści w rozumieniu decyzji
          „bez udziału człowieka”. Nie deklarujemy innych narzędzi, których nie
          używamy.
        </p>
        <p className={paragraphClass}>
          Formularz jest chroniony usługą Cloudflare Turnstile oraz
          ograniczeniem nadmiernej liczby zgłoszeń w infrastrukturze Cloudflare
          Pages.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="dsa-distinction">
        <h2 id="dsa-distinction" className={headingClass}>
          Zgłoszenie DSA a kontakt handlowy
        </h2>
        <p className={paragraphClass}>
          Mechanizm z art. 16 DSA służy wyłącznie zgłaszaniu konkretnych
          nielegalnych treści na stronach utrzymywanych przez MSWA. Nie zastępuje
          zwykłego zapytania handlowego ani reklamacji dotyczących oferty MSWA.
        </p>
        <ul className={listClass}>
          <li>
            Zapytania o ofertę, Care / Care Plus i realizację stron:{" "}
            <Link href="/#kontakt" className={linkClass}>
              formularz kontaktowy
            </Link>{" "}
            lub{" "}
            <a href="mailto:kontakt@mswa.pl" className={linkClass}>
              kontakt@mswa.pl
            </a>
            .
          </li>
          <li>
            Aktualny regulamin serwisu mswa.pl:{" "}
            <Link href="/regulamin" className={linkClass}>
              /regulamin
            </Link>
            .
          </li>
        </ul>
        <p className={paragraphClass}>
          Osobny regulamin utrzymania stron klientów — jeżeli nie jest jeszcze
          zatwierdzony i publicznie dostępny — nie jest tu przedstawiany jako
          obowiązujący. Jego zatwierdzenie i publikacja pozostają warunkiem
          pełnej dokumentacji umownej pakietu hostingu Care / Care Plus.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="dsa-form">
        <h2 id="dsa-form" className={headingClass}>
          Formularz zgłoszenia (art. 16 DSA)
        </h2>
        <p className={paragraphClass}>
          Możesz skorzystać z formularza poniżej albo wysłać zgłoszenie
          bezpośrednio na{" "}
          <a
            href="mailto:kontakt@mswa.pl?subject=DSA%20%E2%80%94%20zg%C5%82oszenie"
            className={linkClass}
          >
            kontakt@mswa.pl
          </a>
          . Formularz nie wymaga logowania.
        </p>
        <div className="mt-8">
          <DsaReportForm />
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="dsa-refs">
        <h2 id="dsa-refs" className={headingClass}>
          Podstawa prawna (odniesienia)
        </h2>
        <ul className={listClass}>
          <li>
            Rozporządzenie (UE) 2022/2065 (DSA), w szczególności art. 3, 11, 12,
            14, 16–18 —{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2022/2065"
              className={linkClass}
              rel="noreferrer"
              target="_blank"
            >
              eur-lex.europa.eu
            </a>
            .
          </li>
          <li>
            Informacje UKE o prawach wynikających z DSA —{" "}
            <a
              href="https://uke.gov.pl/uslugi-cyfrowe/prawa-obywateli-wynikajace-z-dsa/"
              className={linkClass}
              rel="noreferrer"
              target="_blank"
            >
              uke.gov.pl
            </a>
            .
          </li>
          <li>
            Polska nowelizacja: Dz.U. 2026 poz. 1296 (wejście w życie
            6.11.2026). Sam DSA stosuje się zasadniczo od 17.02.2024.
          </li>
        </ul>
      </section>
    </article>
  );
}
