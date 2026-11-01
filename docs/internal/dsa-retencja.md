# Retencja zgłoszeń DSA — instrukcja operatorska (MSWA)

Przewodnik dla operatora MSWA. Nie jest częścią treści publikowanej na
mswa.pl. Repozytorium `mswa-website` jest publiczne — ten plik nie zawiera
sekretów, kluczy API ani szczegółów konfiguracji bezpieczeństwa.

## Zasada

- Standardowo: przechowywanie nie dłużej niż 6 miesięcy od ostatniego kontaktu
  w danej sprawie DSA.
- Dłużej: tylko przy konkretnej podstawie prawnej albo uzasadnionej potrzebie
  ustalenia, dochodzenia lub obrony roszczeń.
- Usuwanie jest ręczne. Nie ma automatu kasującego zgłoszenia DSA w skrzynce
  administratora.

## Gdzie leżą dane

| Miejsce | Co jest | Retencja w praktyce |
|---|---|---|
| Skrzynka `kontakt@mswa.pl` | Wiadomości z tematem zaczynającym się od `DSA —`, odpowiedzi, potwierdzenia, decyzje | Główne miejsce przechowywania. Wymaga ręcznego przeglądu i usuwania. |
| Resend | Kopia techniczna wysyłki | Według planu Resend — standardowo ok. 30 dni logów/wiadomości (Free/Pro/Scale). Nie zastępuje retencji w skrzynce. |
| Cloudflare | Dane związane z hostingiem i zabezpieczeniem formularza | Według dostawcy; nie archiwum spraw DSA. |

## Procedura comiesięczna (ok. 15. dnia miesiąca)

1. W skrzynce wyszukaj wiadomości DSA (np. temat zawierający `DSA`).
2. Dla każdej nici ustal datę ostatniego kontaktu w sprawie.
3. Jeśli minęło co najmniej 6 miesięcy i brak podstawy do dłuższego trzymania:
   - usuń wątek trwale,
   - nie przekazuj danych zgłaszającego klientowi „na zapas”.
4. Jeśli sprawa jest otwarta, trwa spór albo jest obowiązek prawny: zostaw i
   oznacz wątek w skrzynce (np. etykieta `DSA-HOLD`).
5. Resend: nie wymaga osobnej akcji kasowania po ok. 30 dniach. Nie polegaj na
   Resend jako archiwum.

## Po decyzji w sprawie (art. 16 ust. 5 / art. 17 DSA)

1. Odpisz zgłaszającemu (jeśli podał e-mail): decyzja oraz faktycznie dostępne
   środki zakwestionowania.
2. Przy ograniczeniu treści lub usługi: przekaż uzasadnienie klientowi lub
   odbiorcy (art. 17), chyba że wyjątek prawny.
3. Nie ujawniaj automatycznie danych zgłaszającego klientowi.
4. Odnotuj datę decyzji w tej samej nici e-mail (liczy się do „ostatniego
   kontaktu”).

## Czego nie robić

- Nie obiecuj automatycznego usuwania po 6 miesiącach.
- Nie przechowuj załączników z nielegalnymi materiałami — formularz ich nie
  przyjmuje; wystarczy URL.
- Nie umieszczaj w tym pliku kluczy, haseł ani sekretów środowiskowych.
