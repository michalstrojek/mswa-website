import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Polityka prywatności — ${site.name}`,
  description: "Informacje o przetwarzaniu danych na stronie MSWA.",
};

const linkClass =
  "text-text underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent break-all";

const sectionClass = "mt-12";
const headingClass =
  "font-serif text-2xl leading-tight font-normal text-text md:text-[1.75rem]";
const paragraphClass = "mt-4 text-[15px] leading-relaxed text-muted sm:text-[17px]";
const listClass =
  "mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted sm:text-[17px]";
const strongInBody = "font-medium text-text";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[640px] px-6 pb-32 pt-36 md:px-10">
      <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
        Informacja prawna
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight font-normal md:text-5xl">
        Polityka prywatności MSWA
      </h1>
      <p className="mt-4 text-[13px] leading-relaxed text-muted/80">
        Data aktualizacji: 8 października 2026&nbsp;r.
      </p>

      <section className={sectionClass} aria-labelledby="privacy-1">
        <h2 id="privacy-1" className={headingClass}>
          1. Administrator danych
        </h2>
        <p className={paragraphClass}>
          {
            "Administratorem danych osobowych związanych z korzystaniem z serwisu mswa.pl jest Michał Strojek, prowadzący działalność nierejestrowaną pod marką MSWA — Website Agency."
          }
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
        <p className={paragraphClass}>
          W sprawach dotyczących ochrony danych można kontaktować się pod
          wskazanym adresem e-mail lub korespondencyjnie.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-2">
        <h2 id="privacy-2" className={headingClass}>
          2. Zakres przetwarzanych danych
        </h2>
        <p className={paragraphClass}>
          Korzystając z formularza kontaktowego, użytkownik może przekazać:
        </p>
        <ul className={listClass}>
          <li>imię lub nazwę firmy;</li>
          <li>adres e-mail;</li>
          <li>numer telefonu (opcjonalnie);</li>
          <li>informacje o rodzaju działalności;</li>
          <li>treść zapytania.</li>
        </ul>
        <p className={paragraphClass}>
          W związku z działaniem strony i jej zabezpieczeń mogą być również
          przetwarzane dane techniczne, w szczególności adres IP, informacje o
          urządzeniu i przeglądarce oraz dane związane z korzystaniem z serwisu
          i weryfikacją antybotową.
        </p>
        <p className={paragraphClass}>
          Prosimy o nieprzesyłanie danych szczególnych kategorii, które nie są
          potrzebne do obsługi zapytania.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-3">
        <h2 id="privacy-3" className={headingClass}>
          3. Cele i podstawy przetwarzania
        </h2>
        <p className={`${paragraphClass} ${strongInBody}`}>
          Obsługa zapytań ofertowych i kontakt z użytkownikiem.
        </p>
        <p className={paragraphClass}>
          Dane są wykorzystywane w celu odpowiedzi na wiadomości, omówienia
          potrzeb oraz przygotowania propozycji współpracy.
        </p>
        <p className={paragraphClass}>
          Podstawą prawną jest art. 6 ust. 1 lit. b RODO, gdy osoba kontaktuje
          się w celu podjęcia działań przed zawarciem własnej umowy, albo art.
          6 ust. 1 lit. f RODO, gdy kontakt dotyczy np. osoby reprezentującej
          firmę. Uzasadnionym interesem administratora jest prowadzenie
          korespondencji biznesowej.
        </p>
        <p className={`${paragraphClass} ${strongInBody}`}>
          Realizacja umów i obowiązków prawnych.
        </p>
        <p className={paragraphClass}>
          Jeżeli dochodzi do współpracy, dane mogą być przetwarzane w celu
          wykonania umowy, jej rozliczenia i spełnienia obowiązków wynikających
          z prawa, odpowiednio na podstawie art. 6 ust. 1 lit. b, c lub f RODO.
        </p>
        <p className={`${paragraphClass} ${strongInBody}`}>
          Bezpieczeństwo serwisu.
        </p>
        <p className={paragraphClass}>
          Dane techniczne mogą być przetwarzane w celu przeciwdziałania spamowi,
          nadużyciom i nieuprawnionym działaniom. Podstawą jest art. 6 ust. 1
          lit. f RODO.
        </p>
        <p className={`${paragraphClass} ${strongInBody}`}>
          Dochodzenie i obrona roszczeń.
        </p>
        <p className={paragraphClass}>
          W uzasadnionych przypadkach dane mogą być przechowywane w celu
          ustalenia, dochodzenia lub obrony roszczeń, na podstawie art. 6 ust. 1
          lit. f RODO.
        </p>
        <p className={paragraphClass}>
          Dane z formularza nie są automatycznie wykorzystywane do newslettera
          ani wysyłania niezamówionych wiadomości marketingowych.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-4">
        <h2 id="privacy-4" className={headingClass}>
          4. Dobrowolność podania danych
        </h2>
        <p className={paragraphClass}>
          Podanie danych jest dobrowolne, jednak uzupełnienie pól wymaganych
          formularza jest konieczne, aby przesłać zgłoszenie.
        </p>
        <p className={paragraphClass}>Numer telefonu jest opcjonalny.</p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-5">
        <h2 id="privacy-5" className={headingClass}>
          5. Odbiorcy danych
        </h2>
        <p className={paragraphClass}>
          W związku z funkcjonowaniem serwisu korzystamy z następujących usług:
        </p>
        <ul className={listClass}>
          <li>
            <span className={strongInBody}>Cloudflare</span> — hosting, obsługa
            formularza, zabezpieczenia, Turnstile i przekierowywanie poczty;
          </li>
          <li>
            <span className={strongInBody}>Resend</span> — techniczna wysyłka
            wiadomości przesyłanych z formularza;
          </li>
          <li>
            <span className={strongInBody}>Google (Gmail)</span> — odbieranie,
            przechowywanie i obsługa korespondencji e-mail.
          </li>
        </ul>
        <p className={paragraphClass}>
          Dane są przekazywane tym dostawcom w zakresie wynikającym z
          korzystania z ich usług i ich odpowiednich ról w przetwarzaniu
          informacji.
        </p>
        <p className={paragraphClass}>
          Dane mogą być także udostępniane uprawnionym organom, jeżeli wymagają
          tego przepisy prawa.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-6">
        <h2 id="privacy-6" className={headingClass}>
          6. Przekazywanie danych poza EOG
        </h2>
        <p className={paragraphClass}>
          Korzystanie z usług Cloudflare, Resend i Google może wiązać się z
          przetwarzaniem danych poza Europejskim Obszarem Gospodarczym, w
          szczególności w Stanach Zjednoczonych.
        </p>
        <p className={paragraphClass}>
          Resend przechowuje dane wiadomości w USA i deklaruje stosowanie
          standardowych klauzul umownych oraz mechanizmów związanych z EU–US
          Data Privacy Framework.
        </p>
        <p className={paragraphClass}>
          Sposób przetwarzania i zabezpieczenia transferów przez pozostałych
          dostawców wynikają z warunków ich usług oraz mających zastosowanie
          mechanizmów prawnych.
        </p>
        <p className={paragraphClass}>
          {
            "W celu uzyskania informacji o stosowanych zabezpieczeniach transferów i możliwości otrzymania ich kopii można skontaktować się z administratorem pod adresem "
          }
          <a href="mailto:kontakt@mswa.pl" className={linkClass}>
            kontakt@mswa.pl
          </a>
          .
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-7">
        <h2 id="privacy-7" className={headingClass}>
          7. Okres przechowywania danych
        </h2>
        <p className={`${paragraphClass} ${strongInBody}`}>
          Zapytania, które nie zakończyły się współpracą, przechowujemy co do
          zasady przez okres nie dłuższy niż 6 miesięcy od ostatniego kontaktu.
        </p>
        <p className={paragraphClass}>
          Jeżeli rozmowy dotyczące współpracy są nadal prowadzone, dane mogą być
          przechowywane przez czas potrzebny do ich zakończenia.
        </p>
        <p className={paragraphClass}>
          W przypadku zawarcia umowy dane związane z realizacją i rozliczeniem
          usługi mogą być przechowywane przez okres wynikający z przepisów
          prawa, obowiązków dokumentacyjnych lub właściwych terminów dochodzenia
          i obrony roszczeń.
        </p>
        <p className={paragraphClass}>
          Dostawcy techniczni mogą stosować własne okresy retencji. Resend
          deklaruje standardowo 30-dniowy okres przechowywania wiadomości i
          logów na planach Free, Pro i Scale.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-8">
        <h2 id="privacy-8" className={headingClass}>
          8. Cookies i podobne technologie
        </h2>
        <p className={paragraphClass}>
          W głównej części serwisu MSWA nie wykorzystujemy własnych narzędzi
          analitycznych, takich jak Google Analytics czy Meta Pixel.
        </p>
        <p className={paragraphClass}>
          Cloudflare, w tym Turnstile, może wykorzystywać mechanizmy techniczne
          służące ochronie serwisu i rozpoznawaniu zautomatyzowanego ruchu.
        </p>
        <p className={paragraphClass}>
          Część projektów demonstracyjnych może korzystać z pamięci przeglądarki,
          np. localStorage lub sessionStorage, do zapamiętywania wybranego
          języka albo stanu nawigacji.
        </p>
        <p className={paragraphClass}>
          Niektóre projekty demonstracyjne pobierają czcionki z usług Google
          Fonts, co może powodować nawiązanie połączenia z serwerami Google.
        </p>
        <p className={paragraphClass}>
          Użytkownik może zarządzać obsługą cookies i pamięci przeglądarki
          poprzez jej ustawienia. Ograniczenie niektórych mechanizmów może
          wpływać na dostępność lub prawidłowe działanie funkcji serwisu.
        </p>
        <p className={paragraphClass}>
          Jeżeli w przyszłości zostaną wdrożone technologie wymagające
          uprzedniej zgody, zostanie zastosowany odpowiedni mechanizm jej
          uzyskiwania.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-9">
        <h2 id="privacy-9" className={headingClass}>
          9. Cloudflare Turnstile
        </h2>
        <p className={paragraphClass}>
          Formularz kontaktowy jest zabezpieczony usługą Cloudflare Turnstile,
          która pomaga odróżniać użytkowników od zautomatyzowanego ruchu.
        </p>
        <p className={paragraphClass}>
          Cloudflare może w tym celu analizować sygnały techniczne, takie jak
          adres IP, informacje o przeglądarce, urządzeniu i połączeniu.
        </p>
        <p className={paragraphClass}>
          Informacje dotyczące przetwarzania danych przez Turnstile:
        </p>
        <p className={paragraphClass}>
          <a
            href="https://www.cloudflare.com/turnstile-privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            https://www.cloudflare.com/turnstile-privacy-policy/
          </a>
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-10">
        <h2 id="privacy-10" className={headingClass}>
          10. Prawa użytkownika
        </h2>
        <p className={paragraphClass}>
          Na zasadach określonych w RODO użytkownik ma prawo do:
        </p>
        <ul className={listClass}>
          <li>dostępu do swoich danych;</li>
          <li>ich sprostowania;</li>
          <li>usunięcia danych;</li>
          <li>ograniczenia przetwarzania;</li>
          <li>
            wniesienia sprzeciwu wobec przetwarzania opartego na prawnie
            uzasadnionym interesie;
          </li>
          <li>
            przenoszenia danych, gdy spełnione są odpowiednie warunki.
          </li>
        </ul>
        <p className={paragraphClass}>
          {
            "W celu realizacji praw należy skontaktować się z administratorem pod adresem "
          }
          <a href="mailto:kontakt@mswa.pl" className={linkClass}>
            kontakt@mswa.pl
          </a>
          .
        </p>
        <p className={paragraphClass}>
          Użytkownik ma również prawo wniesienia skargi do Prezesa Urzędu
          Ochrony Danych Osobowych (PUODO).
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-11">
        <h2 id="privacy-11" className={headingClass}>
          11. Zautomatyzowane podejmowanie decyzji
        </h2>
        <p className={paragraphClass}>
          Administrator nie wykorzystuje danych z formularza do
          zautomatyzowanego podejmowania decyzji wywołujących skutki prawne lub
          podobnie istotnie wpływających na użytkownika w rozumieniu art. 22
          RODO.
        </p>
        <p className={paragraphClass}>
          Serwis korzysta z automatycznych zabezpieczeń antybotowych, które mogą
          ograniczać przesyłanie nieprawidłowych zgłoszeń.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-12">
        <h2 id="privacy-12" className={headingClass}>
          12. Bezpieczeństwo
        </h2>
        <p className={paragraphClass}>
          Stosujemy środki techniczne służące ochronie danych, w tym HTTPS,
          walidację formularza, Turnstile oraz ograniczenia nadmiernej liczby
          zgłoszeń.
        </p>
        <p className={paragraphClass}>
          Żadne rozwiązanie techniczne nie eliminuje jednak całkowicie ryzyka
          związanego z przesyłaniem danych przez Internet.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-13">
        <h2 id="privacy-13" className={headingClass}>
          13. Aktualizacje dokumentu
        </h2>
        <p className={paragraphClass}>
          Polityka prywatności może być aktualizowana w związku ze zmianami
          przepisów, wykorzystywanych technologii lub sposobu działania serwisu.
        </p>
        <p className={paragraphClass}>
          Aktualna wersja znajduje się pod adresem:
        </p>
        <p className={paragraphClass}>
          <a href="https://mswa.pl/polityka-prywatnosci" className={linkClass}>
            https://mswa.pl/polityka-prywatnosci
          </a>
        </p>
      </section>

      <Link
        href="/"
        className="mt-16 inline-block text-sm tracking-[0.16em] text-muted uppercase transition-colors hover:text-accent"
      >
        ← Wróć na stronę główną
      </Link>
    </article>
  );
}
