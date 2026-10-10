"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { contactForm, type ContactPayload } from "@/lib/contact";
import { isValidEmail } from "@/lib/email";
import {
  TurnstileWidget,
  type TurnstileWidgetHandle,
} from "@/components/home/TurnstileWidget";

type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "error"; message: string };

const initialValues: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  business: "",
  message: "",
};

function validate(values: ContactPayload): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = "Podaj imię lub nazwę firmy.";
  if (!values.email.trim()) {
    errors.email = "Podaj e-mail.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Wpisz prawidłowy e-mail.";
  }
  if (!values.business.trim()) {
    errors.business = "Napisz krótko, czym zajmuje się firma.";
  }
  if (!values.message.trim()) {
    errors.message = "Napisz krótko, czego potrzebujesz.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Dodaj kilka słów więcej o potrzebach.";
  }

  return errors;
}

const inputClass =
  "w-full max-w-full border-0 border-b border-text/25 bg-transparent px-0 py-3 text-[15px] leading-relaxed text-text outline-none transition-[border-color,opacity] duration-300 placeholder:text-muted/70 focus:border-accent/70 focus:opacity-100";

export function ContactForm() {
  const formId = useId();
  const turnstileRef = useRef<TurnstileWidgetHandle>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });

  function clearTurnstileToken() {
    setTurnstileToken("");
  }

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0] as keyof ContactPayload | undefined;
      if (firstKey) {
        document.getElementById(`${formId}-${firstKey}`)?.focus();
      }
      return;
    }

    if (!siteKey) {
      setStatus({ type: "error", message: contactForm.errorMessage });
      return;
    }

    if (!turnstileToken) {
      setStatus({ type: "error", message: contactForm.errorMessage });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const response = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          business: values.business.trim(),
          message: values.message.trim(),
          website: honeypot,
          turnstileToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (response.ok && data?.ok) {
        setStatus({ type: "success" });
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
          : contactForm.errorMessage;
      setStatus({ type: "error", message });
    } catch {
      clearTurnstileToken();
      turnstileRef.current?.reset();
      setStatus({ type: "error", message: contactForm.errorMessage });
    }
  }

  if (status.type === "success") {
    return (
      <div className="border-t border-text/25 pt-6" role="status" aria-live="polite">
        <p className="text-[15px] leading-relaxed text-text">
          {contactForm.successMessage}
        </p>
        <button
          type="button"
          className="mt-6 text-[13px] text-muted transition-colors hover:text-accent"
          onClick={() => setStatus({ type: "idle" })}
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  const { fields } = contactForm;
  const canSubmit =
    Boolean(siteKey) &&
    Boolean(turnstileToken) &&
    status.type !== "submitting";

  return (
    <form className="relative w-full max-w-[28rem] space-y-1" onSubmit={onSubmit} noValidate>
      {/* Honeypot — off-screen; leave empty. */}
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

      <Field id={`${formId}-name`} label={fields.name.label} required error={errors.name}>
        <input
          id={`${formId}-name`}
          name={fields.name.name}
          type="text"
          autoComplete={fields.name.autoComplete}
          required
          aria-invalid={Boolean(errors.name)}
          className={inputClass}
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
        />
      </Field>

      <Field id={`${formId}-email`} label={fields.email.label} required error={errors.email}>
        <input
          id={`${formId}-email`}
          name={fields.email.name}
          type="email"
          autoComplete={fields.email.autoComplete}
          required
          aria-invalid={Boolean(errors.email)}
          className={inputClass}
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </Field>

      <Field id={`${formId}-phone`} label={fields.phone.label} error={errors.phone}>
        <input
          id={`${formId}-phone`}
          name={fields.phone.name}
          type="tel"
          autoComplete={fields.phone.autoComplete}
          placeholder={fields.phone.placeholder}
          className={inputClass}
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
        />
      </Field>

      <Field
        id={`${formId}-business`}
        label={fields.business.label}
        required
        error={errors.business}
      >
        <input
          id={`${formId}-business`}
          name={fields.business.name}
          type="text"
          required
          aria-invalid={Boolean(errors.business)}
          className={inputClass}
          value={values.business}
          onChange={(event) => update("business", event.target.value)}
        />
      </Field>

      <Field
        id={`${formId}-message`}
        label={fields.message.label}
        required
        error={errors.message}
      >
        <textarea
          id={`${formId}-message`}
          name={fields.message.name}
          rows={4}
          required
          placeholder={fields.message.placeholder}
          aria-invalid={Boolean(errors.message)}
          className={`${inputClass} min-h-[6.5rem] resize-y break-words whitespace-pre-wrap`}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>

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
            Formularz jest chwilowo niedostępny. Napisz na kontakt@mswa.pl.
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
        <p className="mb-5 max-w-[28rem] text-[12px] leading-relaxed text-muted/90">
          Administratorem Twoich danych jest Michał Strojek (MSWA). Dane z
          formularza wykorzystujemy do obsługi zapytania i kontaktu w sprawie
          oferty, na podstawie art. 6 ust. 1 lit. b lub f RODO, zależnie od
          charakteru zapytania. W tym celu korzystamy z usług Cloudflare, Resend
          i Google. Szczegółowe informacje o przetwarzaniu danych i
          przysługujących Ci prawach znajdziesz w{" "}
          <Link
            href="/polityka-prywatnosci"
            className="text-text underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent"
          >
            Polityce prywatności
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-[12px] tracking-[0.14em] text-bg uppercase transition-colors duration-300 hover:bg-accent-soft disabled:cursor-wait disabled:opacity-70"
        >
          {status.type === "submitting" ? "Wysyłanie…" : contactForm.submitLabel}
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
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-4 first:pt-0">
      <label htmlFor={id} className="block text-[11px] tracking-[0.18em] text-muted uppercase">
        {label}
        {required ? (
          <span className="text-accent" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      <div className="mt-1">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[12px] text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
