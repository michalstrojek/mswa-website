/**
 * DSA notice-and-action form (art. 16 DSA).
 * Delivery: functions/api/dsa.ts (Resend via Cloudflare Pages).
 */

import { isValidEmail, EMAIL_MAX_LENGTH } from "./email";

export const DSA_REPORT_TYPES = ["standard", "child_exploitation"] as const;
export type DsaReportType = (typeof DSA_REPORT_TYPES)[number];

export type DsaPayload = {
  reportType: DsaReportType;
  urls: string;
  reason: string;
  details: string;
  name: string;
  email: string;
  goodFaith: boolean;
};

export const dsaForm = {
  endpoint: "/api/dsa",
  submitLabel: "Wyślij zgłoszenie DSA",
  successMessage:
    "Zgłoszenie zostało przyjęte. Jeśli podałeś adres e-mail, wyślemy potwierdzenie odbioru bez zbędnej zwłoki. Samo zgłoszenie nie usuwa automatycznie treści.",
  errorMessage:
    "Nie udało się wysłać zgłoszenia. Spróbuj ponownie lub napisz na kontakt@mswa.pl z tematem „DSA — zgłoszenie”.",
  confirmationNote:
    "Potwierdzenie odbioru wysyłamy wyłącznie wtedy, gdy podasz adres e-mail do odpowiedzi.",
} as const;

export const DSA_LIMITS = {
  urls: 4000,
  reason: 5000,
  details: 5000,
  name: 200,
  email: EMAIL_MAX_LENGTH,
  maxUrlCount: 20,
  subjectName: 80,
} as const;

export type DsaFieldErrors = Partial<
  Record<keyof DsaPayload | "form", string>
>;

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/** Split URL field into individual http(s) URLs (whitespace / comma / newline). */
export function parseDsaUrls(raw: string): string[] {
  const parts = raw
    .split(/[\s,;]+/)
    .map((part) => part.trim())
    .filter(Boolean);
  const unique: string[] = [];
  for (const part of parts) {
    if (!unique.includes(part)) unique.push(part);
  }
  return unique;
}

export function validateDsaPayload(values: DsaPayload): DsaFieldErrors {
  const errors: DsaFieldErrors = {};
  const reportType = values.reportType;
  const isException = reportType === "child_exploitation";

  if (!DSA_REPORT_TYPES.includes(reportType)) {
    errors.reportType = "Wybierz typ zgłoszenia.";
  }

  const urls = parseDsaUrls(values.urls);
  if (urls.length === 0) {
    errors.urls = "Podaj co najmniej jeden dokładny adres URL treści.";
  } else if (urls.length > DSA_LIMITS.maxUrlCount) {
    errors.urls = `Możesz podać maksymalnie ${DSA_LIMITS.maxUrlCount} adresów URL.`;
  } else if (values.urls.trim().length > DSA_LIMITS.urls) {
    errors.urls = "Lista adresów URL jest zbyt długa.";
  } else if (urls.some((url) => !isHttpUrl(url))) {
    errors.urls =
      "Każdy adres musi być pełnym URL zaczynającym się od http:// lub https://.";
  }

  const reason = values.reason.trim();
  if (!reason) {
    errors.reason = "Opisz, dlaczego uważasz treść za nielegalną.";
  } else if (reason.length < 20) {
    errors.reason = "Dodaj nieco więcej uzasadnienia (co najmniej kilka zdań).";
  } else if (reason.length > DSA_LIMITS.reason) {
    errors.reason = "Uzasadnienie jest zbyt długie.";
  }

  const details = values.details.trim();
  if (details.length > DSA_LIMITS.details) {
    errors.details = "Dodatkowy opis jest zbyt długi.";
  }

  const name = values.name.trim();
  const email = values.email.trim();

  if (!isException) {
    if (!name) {
      errors.name = "Podaj imię lub nazwę.";
    } else if (name.length > DSA_LIMITS.name) {
      errors.name = "Imię lub nazwa jest zbyt długa.";
    }
    if (!email) {
      errors.email = "Podaj adres e-mail do odpowiedzi.";
    } else if (!isValidEmail(email)) {
      errors.email = "Wpisz prawidłowy e-mail.";
    }
  } else {
    if (name.length > DSA_LIMITS.name) {
      errors.name = "Imię lub nazwa jest zbyt długa.";
    }
    if (email && !isValidEmail(email)) {
      errors.email = "Wpisz prawidłowy e-mail albo pozostaw pole puste.";
    }
  }

  if (!values.goodFaith) {
    errors.goodFaith =
      "Potwierdź, że zgłoszenie składasz w dobrej wierze oraz że informacje są prawdziwe i kompletne.";
  }

  return errors;
}

export function isDsaReportType(value: unknown): value is DsaReportType {
  return (
    typeof value === "string" &&
    (DSA_REPORT_TYPES as readonly string[]).includes(value)
  );
}
