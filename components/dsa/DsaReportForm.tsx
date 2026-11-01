"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import {
  dsaForm,
  validateDsaPayload,
  type DsaFieldErrors,
  type DsaPayload,
  type DsaReportType,
} from "@/lib/dsa";
import {
  TurnstileWidget,
  type TurnstileWidgetHandle,
} from "@/components/home/TurnstileWidget";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; confirmationSent: boolean }
  | { type: "error"; message: string };

const initialValues: DsaPayload = {
  reportType: "standard",
  urls: "",
  reason: "",
  details: "",
  name: "",
  email: "",
  goodFaith: false,
};

const inputClass =
  "w-full max-w-full border-0 border-b border-text/25 bg-transparent px-0 py-3 text-[15px] leading-relaxed text-text outline-none transition-[border-color,opacity] duration-300 placeholder:text-muted/70 focus:border-accent/70 focus:opacity-100";

export function DsaReportForm() {
  const formId = useId();
  const turnstileRef = useRef<TurnstileWidgetHandle>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
  const [values, setValues] = useState<DsaPayload>(initialValues);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [errors, setErrors] = useState<DsaFieldErrors>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const isException = values.reportType === "child_exploitation";
  const identityRequired = !isException;

  function clearTurnstileToken() {
    setTurnstileToken("");
  }

  function update<K extends keyof DsaPayload>(key: K, value: DsaPayload[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function setReportType(next: DsaReportType) {
    update("reportType", next);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateDsaPayload(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const order: Array<keyof DsaPayload> = [
        "reportType",
        "urls",
        "reason",
        "details",
        "name",
        "email",
        "goodFaith",
      ];
      const firstKey = order.find((key) => nextErrors[key]);
      if (firstKey) {
        document.getElementById(`${formId}-${firstKey}`)?.focus();
      }
      return;
    }

    if (!siteKey) {
      setStatus({ type: "error", message: dsaForm.errorMessage });
      return;
    }

    if (!turnstileToken) {
      setStatus({
        type: "error",
        message:
          "Dokończ weryfikację antybotową, a następnie wyślij zgłoszenie ponownie.",
      });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const response = await fetch(dsaForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportType: values.reportType,
          urls: values.urls.trim(),
          reason: values.reason.trim(),
          details: values.details.trim(),
          name: values.name.trim(),
          email: values.email.trim(),
          goodFaith: true,
          website: honeypot,
          turnstileToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; confirmationSent?: boolean }
        | null;

      if (response.ok && data?.ok) {
        setStatus({
          type: "success",
          confirmationSent: Boolean(data.confirmationSent),
        });
        setValues(initialValues);
        setHoneypot("");
        clearTurnstileToken();
        turnstileRef.current?.reset();
        setErrors({});
        return;
      }

      clearTurnstileToken();
      turnstileRef.current?.reset();
      const message =
        response.status === 429 || data?.error === "rate_limited"
          ? "Zbyt wiele prób. Odczekaj chwilę i spróbuj ponownie."
          : dsaForm.errorMessage;
      setStatus({ type: "error", message });
    } catch {
      clearTurnstileToken();
      turnstileRef.current?.reset();
      setStatus({ type: "error", message: dsaForm.errorMessage });
    }
  }

  if (status.type === "success") {
    return (
      <div className="border-t border-text/25 pt-6" role="status" aria-live="polite">
        <p className="text-[15px] leading-relaxed text-text">
          {dsaForm.successMessage}
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">
          {status.confirmationSent
            ? "Na podany adres e-mail wysłaliśmy potwierdzenie odbioru."
            : dsaForm.confirmationNote}
        </p>
        <button
          type="button"
          className="mt-6 text-[13px] text-muted transition-colors hover:text-accent"
          onClick={() => setStatus({ type: "idle" })}
        >
          Wyślij kolejne zgłoszenie
        </button>
      </div>
    );
  }

  const canSubmit =
    Boolean(siteKey) &&
    Boolean(turnstileToken) &&
    status.type !== "submitting";

  return (
    <form
      className="relative w-full max-w-[36rem] space-y-1"
      onSubmit={onSubmit}
      noValidate
      aria-describedby={`${formId}-distinction`}
    >
      <p id={`${formId}-distinction`} className="sr-only">
        Formularz zgłoszeń DSA dotyczy wyłącznie nielegalnych treści na stronach
        utrzymywanych przez MSWA. Nie służy do zapytań handlowych ani reklamacji.
      </p>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden opacity-0"
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <fieldset className="pt-0">
        <legend className="block text-[11px] tracking-[0.18em] text-muted uppercase">
          Typ zgłoszenia
          <span className="text-accent" aria-hidden>
            {" "}
            *
          </span>
        </legend>
        <div className="mt-4 space-y-3">
          <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-relaxed text-text">
            <input
              id={`${formId}-reportType-standard`}
              type="radio"
              name="reportType"
              value="standard"
              checked={values.reportType === "standard"}
              onChange={() => setReportType("standard")}
              className="mt-1"
            />
            <span>
              Zwykłe zgłoszenie — wymagane imię lub nazwa oraz e-mail do
              odpowiedzi
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-relaxed text-text">
            <input
              id={`${formId}-reportType-exception`}
              type="radio"
              name="reportType"
              value="child_exploitation"
              checked={values.reportType === "child_exploitation"}
              onChange={() => setReportType("child_exploitation")}
              className="mt-1"
            />
            <span>
              Wyjątek — treść związana z przestępstwami z art. 3–7 dyrektywy
              2011/93/UE (wykorzystywanie seksualne dzieci). Imię i e-mail są
              opcjonalne; nie wymagamy konta.
            </span>
          </label>
        </div>
        {errors.reportType ? (
          <p className="mt-2 text-[12px] text-accent" role="alert">
            {errors.reportType}
          </p>
        ) : null}
      </fieldset>

      <Field
        id={`${formId}-urls`}
        label="Dokładny URL lub URL-e treści"
        required
        error={errors.urls}
        hint="Jeden adres w linii albo oddzielone spacją / przecinkiem. Nie przesyłaj plików ani materiałów — wystarczy adres i uzasadnienie."
      >
        <textarea
          id={`${formId}-urls`}
          name="urls"
          rows={3}
          required
          inputMode="url"
          autoComplete="off"
          placeholder="https://przyklad.pl/strona#sekcja"
          aria-invalid={Boolean(errors.urls)}
          className={`${inputClass} min-h-[5rem] resize-y break-words whitespace-pre-wrap`}
          value={values.urls}
          onChange={(event) => update("urls", event.target.value)}
        />
      </Field>

      <Field
        id={`${formId}-reason`}
        label="Uzasadnienie zarzutu"
        required
        error={errors.reason}
        hint="Dlaczego uważasz, że wskazana treść jest nielegalna."
      >
        <textarea
          id={`${formId}-reason`}
          name="reason"
          rows={5}
          required
          aria-invalid={Boolean(errors.reason)}
          className={`${inputClass} min-h-[7rem] resize-y break-words whitespace-pre-wrap`}
          value={values.reason}
          onChange={(event) => update("reason", event.target.value)}
        />
      </Field>

      <Field
        id={`${formId}-details`}
        label="Dodatkowe dane pozwalające odnaleźć treść"
        error={errors.details}
        hint="Opcjonalnie: opis lokalizacji na stronie, zrzut kontekstu tekstowego, data publikacji."
      >
        <textarea
          id={`${formId}-details`}
          name="details"
          rows={3}
          aria-invalid={Boolean(errors.details)}
          className={`${inputClass} min-h-[5rem] resize-y break-words whitespace-pre-wrap`}
          value={values.details}
          onChange={(event) => update("details", event.target.value)}
        />
      </Field>

      <Field
        id={`${formId}-name`}
        label="Imię lub nazwa"
        required={identityRequired}
        error={errors.name}
        hint={
          identityRequired
            ? undefined
            : "Opcjonalne przy wyjątku dotyczącym dyrektywy 2011/93/UE."
        }
      >
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required={identityRequired}
          aria-invalid={Boolean(errors.name)}
          className={inputClass}
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
        />
      </Field>

      <Field
        id={`${formId}-email`}
        label="E-mail do odpowiedzi"
        required={identityRequired}
        error={errors.email}
        hint={
          identityRequired
            ? "Na ten adres wyślemy potwierdzenie odbioru i informację o decyzji."
            : "Opcjonalne. Jeśli podasz e-mail, wyślemy potwierdzenie odbioru."
        }
      >
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required={identityRequired}
          aria-invalid={Boolean(errors.email)}
          className={inputClass}
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </Field>

      <div className="pt-5">
        <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-text">
          <input
            id={`${formId}-goodFaith`}
            name="goodFaith"
            type="checkbox"
            checked={values.goodFaith}
            required
            aria-invalid={Boolean(errors.goodFaith)}
            className="mt-1"
            onChange={(event) => update("goodFaith", event.target.checked)}
          />
          <span>
            Oświadczam w dobrej wierze, że informacje i zarzuty zawarte w tym
            zgłoszeniu są prawdziwe i kompletne.
            <span className="text-accent" aria-hidden>
              {" "}
              *
            </span>
          </span>
        </label>
        {errors.goodFaith ? (
          <p className="mt-2 text-[12px] text-accent" role="alert">
            {errors.goodFaith}
          </p>
        ) : null}
      </div>

      <div className="pt-5">
        {siteKey ? (
          <TurnstileWidget
            ref={turnstileRef}
            siteKey={siteKey}
            onToken={setTurnstileToken}
            onExpire={clearTurnstileToken}
            onError={clearTurnstileToken}
          />
        ) : (
          <p className="text-[13px] leading-relaxed text-muted">
            Formularz jest chwilowo niedostępny. Wyślij zgłoszenie na{" "}
            <a
              href="mailto:kontakt@mswa.pl?subject=DSA%20%E2%80%94%20zg%C5%82oszenie"
              className="text-text underline decoration-accent/40 underline-offset-2"
            >
              kontakt@mswa.pl
            </a>
            .
          </p>
        )}
      </div>

      {status.type === "error" ? (
        <div
          className="pt-4 text-[14px] leading-relaxed text-muted"
          role="alert"
          aria-live="assertive"
        >
          <p>{status.message}</p>
        </div>
      ) : null}

      <div className="pt-7">
        <p className="mb-5 max-w-[36rem] text-[12px] leading-relaxed text-muted/90">
          Administratorem danych jest Michał Strojek (MSWA). Dane ze zgłoszenia
          DSA przetwarzamy w celu obsługi mechanizmu z art. 16 DSA oraz
          związanych obowiązków prawnych. W tym celu korzystamy z usług
          Cloudflare i Resend. Szczegóły:{" "}
          <Link
            href="/polityka-prywatnosci"
            className="text-text underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent"
          >
            Polityka prywatności
          </Link>
          . Formularz nie wymaga logowania ani konta.
        </p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-[12px] tracking-[0.14em] text-bg uppercase transition-colors duration-300 hover:bg-accent-soft disabled:cursor-wait disabled:opacity-70"
        >
          {status.type === "submitting" ? "Wysyłanie…" : dsaForm.submitLabel}
          {status.type !== "submitting" ? (
            <span className="arrow-shift" aria-hidden>
              →
            </span>
          ) : null}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-5 first:pt-0">
      <label
        htmlFor={id}
        className="block text-[11px] tracking-[0.18em] text-muted uppercase"
      >
        {label}
        {required ? (
          <span className="text-accent" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-2 text-[13px] leading-relaxed text-muted">
          {hint}
        </p>
      ) : null}
      <div className="mt-1">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[12px] text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
