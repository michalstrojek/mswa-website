import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Regulamin — ${site.name}`,
  description: "Regulamin korzystania ze strony MSWA.",
};

const linkClass =
  "text-text underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent break-all";

const sectionClass = "mt-12";
const headingClass =
  "font-serif text-2xl leading-tight font-normal text-text md:text-[1.75rem]";
const listClass =
  "mt-4 list-decimal space-y-2.5 pl-5 text-[15px] leading-relaxed text-muted sm:text-[17px]";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[640px] px-6 pt-36 pb-32 md:px-10 md:pt-44">
      <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
        Informacja prawna
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight font-normal md:text-5xl">
        Regulamin serwisu internetowego MSWA
      </h1>
      <p className="mt-4 text-[13px] leading-relaxed text-muted/80">
        <strong className="font-medium text-text">
          Data aktualizacji: 8 października 2026&nbsp;r.
        </strong>
      </p>

      <section className={sectionClass} aria-labelledby="terms-1">
        <h2 id="terms-1" className={headingClass}>
          §1. Informacje ogólne
        </h2>
        <ol className={listClass}>
          <li>
            {
              "Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem "
            }
            <a href="https://mswa.pl" className={linkClass}>
              https://mswa.pl
            </a>
            .
          </li>
          <li>
            Usługodawcą jest Michał Strojek, prowadzący działalność
            nierejestrowaną pod marką MSWA — Website Agency.
          </li>
          <li>Adres usługodawcy: ul. Wokulskiego 9/15, 05-800 Pruszków.</li>
          <li>
            {"E-mail: "}
            <a href="mailto:kontakt@mswa.pl" className={linkClass}>
              kontakt@mswa.pl
            </a>
            .
          </li>
          <li>
            Korzystanie z serwisu, w tym przeglądanie treści i wysyłanie
            zapytań, jest bezpłatne.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-2">
        <h2 id="terms-2" className={headingClass}>
          §2. Dostępne usługi
        </h2>
        <ol className={listClass}>
          <li>
            Serwis umożliwia zapoznanie się z ofertą MSWA, orientacyjnymi
            cenami, portfolio i projektami demonstracyjnymi.
          </li>
          <li>
            Użytkownik może skontaktować się z usługodawcą przez formularz
            kontaktowy lub pocztę elektroniczną.
          </li>
          <li>Korzystanie z serwisu nie wymaga tworzenia konta.</li>
          <li>
            Prezentowane projekty demonstracyjne mogą zawierać fikcyjne marki,
            dane kontaktowe, opinie i przykładowe funkcjonalności. Nie stanowią
            one rzeczywistych serwisów tych przedsiębiorstw.
          </li>
          <li>
            Funkcje oznaczone jako demonstracyjne, w tym pokazowe rezerwacje,
            nie służą do dokonywania rzeczywistych rezerwacji.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-3">
        <h2 id="terms-3" className={headingClass}>
          §3. Wymagania techniczne
        </h2>
        <ol className={listClass}>
          <li>
            Do korzystania z serwisu potrzebne jest urządzenie z dostępem do
            Internetu oraz aktualna przeglądarka.
          </li>
          <li>Wybrane funkcje mogą wymagać obsługi JavaScript.</li>
          <li>
            Prawidłowe wysłanie formularza wymaga działania mechanizmu
            zabezpieczającego przed automatycznymi zgłoszeniami.
          </li>
          <li>
            Korzystanie z Internetu wiąże się z typowymi zagrożeniami, dlatego
            zaleca się stosowanie aktualnego oprogramowania i podstawowych
            środków ochrony.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-4">
        <h2 id="terms-4" className={headingClass}>
          §4. Zasady korzystania
        </h2>
        <ol className={listClass}>
          <li>
            Użytkownik zobowiązany jest korzystać z serwisu zgodnie z prawem i
            jego przeznaczeniem.
          </li>
          <li>
            Zabronione jest przesyłanie treści bezprawnych, zakłócanie działania
            strony oraz nadużywanie formularza.
          </li>
          <li>
            Usługodawca może stosować zabezpieczenia techniczne ograniczające
            ruch zautomatyzowany lub nadmierną liczbę zgłoszeń.
          </li>
          <li>
            Użytkownik powinien podawać w formularzu informacje potrzebne do
            odpowiedzi na zapytanie.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-5">
        <h2 id="terms-5" className={headingClass}>
          §5. Formularz kontaktowy
        </h2>
        <ol className={listClass}>
          <li>
            Formularz umożliwia bezpłatne przesłanie zapytania ofertowego.
          </li>
          <li>
            Wysłanie formularza wymaga uzupełnienia pól obowiązkowych i
            przejścia weryfikacji antybotowej.
          </li>
          <li>
            Przesłanie wiadomości nie oznacza zawarcia odpłatnej umowy z MSWA.
          </li>
          <li>
            Wysłanie zapytania nie zobowiązuje do zamówienia strony internetowej
            ani żadnej innej płatnej usługi.
          </li>
          <li>
            Ostateczna wycena, zakres prac, terminy oraz warunki płatności są
            ustalane indywidualnie.
          </li>
          <li>
            Usługodawca dokłada starań, aby odpowiadać na zgłoszenia bez zbędnej
            zwłoki.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-6">
        <h2 id="terms-6" className={headingClass}>
          §6. Zawarcie i zakończenie korzystania z usług elektronicznych
        </h2>
        <ol className={listClass}>
          <li>
            Korzystanie z bezpłatnej usługi przeglądania serwisu rozpoczyna się
            wraz z otwarciem strony i kończy z chwilą zaprzestania jej
            przeglądania.
          </li>
          <li>
            Korzystanie z formularza rozpoczyna się z chwilą rozpoczęcia jego
            wypełniania i kończy po wysłaniu zgłoszenia albo rezygnacji z tej
            czynności.
          </li>
          <li>
            Dalsza korespondencja oraz ewentualna odpłatna współpraca podlegają
            odrębnym ustaleniom.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-7">
        <h2 id="terms-7" className={headingClass}>
          §7. Oferta i ceny
        </h2>
        <ol className={listClass}>
          <li>
            Serwis przedstawia ofertę tworzenia stron internetowych oraz usług
            dodatkowych.
          </li>
          <li>
            Cena od 1490 zł oznacza cenę początkową realizacji w określonym
            standardowym zakresie.
          </li>
          <li>
            Ostateczna cena może zależeć od zakresu projektu oraz uzgodnionych
            dodatków.
          </li>
          <li>
            Informacje znajdujące się w serwisie nie zastępują indywidualnych
            ustaleń stron ani odrębnej umowy o wykonanie strony.
          </li>
          <li>
            Niniejszy regulamin nie określa pełnych warunków odpłatnych usług
            realizacji stron ani abonamentu MSWA Care.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-8">
        <h2 id="terms-8" className={headingClass}>
          §8. Prawa do treści
        </h2>
        <ol className={listClass}>
          <li>
            Materiały prezentowane w serwisie mogą podlegać ochronie na
            podstawie prawa autorskiego lub innych przepisów.
          </li>
          <li>
            Korzystanie z serwisu nie daje prawa do komercyjnego kopiowania
            prezentowanych projektów z naruszeniem praw uprawnionych podmiotów.
          </li>
          <li>
            Korzystanie z treści w granicach przewidzianych przez obowiązujące
            prawo jest dozwolone.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-9">
        <h2 id="terms-9" className={headingClass}>
          §9. Reklamacje
        </h2>
        <ol className={listClass}>
          <li>
            {
              "Problemy z działaniem serwisu oraz reklamacje dotyczące usług elektronicznych można zgłaszać na adres "
            }
            <a href="mailto:kontakt@mswa.pl" className={linkClass}>
              kontakt@mswa.pl
            </a>
            .
          </li>
          <li>
            Zgłoszenie powinno zawierać opis problemu i dane pozwalające udzielić
            odpowiedzi.
          </li>
          <li>
            Reklamacje będą rozpatrywane bez zbędnej zwłoki, co do zasady w ciągu
            14 dni kalendarzowych od otrzymania zgłoszenia zawierającego
            informacje niezbędne do rozpatrzenia sprawy, z uwzględnieniem
            bezwzględnie obowiązujących przepisów.
          </li>
          <li>
            Reklamacje dotyczące odpłatnych usług tworzenia stron internetowych
            będą rozpatrywane zgodnie z odrębną umową i przepisami prawa.
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-10">
        <h2 id="terms-10" className={headingClass}>
          §10. Dane osobowe
        </h2>
        <ol className={listClass}>
          <li>Administratorem danych osobowych jest Michał Strojek.</li>
          <li>
            {
              "Szczegółowe informacje o przetwarzaniu danych dostępne są w Polityce prywatności: "
            }
            <Link href="/polityka-prywatnosci" className={linkClass}>
              https://mswa.pl/polityka-prywatnosci
            </Link>
            .
          </li>
        </ol>
      </section>

      <section className={sectionClass} aria-labelledby="terms-11">
        <h2 id="terms-11" className={headingClass}>
          §11. Postanowienia końcowe
        </h2>
        <ol className={listClass}>
          <li>
            {"Regulamin jest udostępniany bezpłatnie pod adresem "}
            <a href="https://mswa.pl/regulamin" className={linkClass}>
              https://mswa.pl/regulamin
            </a>
            {
              " w sposób umożliwiający zapoznanie się z jego treścią i jej zapisanie."
            }
          </li>
          <li>
            Regulamin może być aktualizowany w związku ze zmianami prawa lub
            działania serwisu, z poszanowaniem praw użytkowników.
          </li>
          <li>
            W sprawach nieuregulowanych zastosowanie znajdują właściwe przepisy
            prawa polskiego.
          </li>
          <li>
            Regulamin nie ogranicza praw wynikających z bezwzględnie
            obowiązujących przepisów.
          </li>
        </ol>
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
