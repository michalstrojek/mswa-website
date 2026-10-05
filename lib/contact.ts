/**
 * Contact / lead form configuration.
 * Wire delivery by setting CONTACT_FORM_WEBHOOK_URL on Cloudflare Pages
 * (handled by functions/api/contact.ts for the static export).
 */

export const contactForm = {
  endpoint: "/api/contact",
  submitLabel: "Porozmawiajmy",
  successMessage:
    "Dziękujemy. Wiadomość została wysłana — odezwiemy się wkrótce.",
  notConfiguredMessage:
    "Formularz nie jest jeszcze podłączony do wysyłki. Napisz bezpośrednio na e-mail lub Instagram.",
  errorMessage:
    "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz do nas bezpośrednio.",
  reassurance: [
    "Bezpłatna rozmowa wstępna.",
    "Wysłanie formularza do niczego nie zobowiązuje.",
    "Najpierw poznajemy firmę i potrzeby — szczegóły ustalamy później.",
  ],
  fields: {
    name: {
      name: "name",
      label: "Imię / firma",
      required: true,
      autoComplete: "organization",
    },
    email: {
      name: "email",
      label: "E-mail",
      required: true,
      autoComplete: "email",
    },
    phone: {
      name: "phone",
      label: "Telefon",
      required: false,
      autoComplete: "tel",
      placeholder: "Opcjonalnie",
    },
    business: {
      name: "business",
      label: "Czym zajmuje się Twoja firma?",
      required: true,
      autoComplete: "off",
    },
    message: {
      name: "message",
      label: "Czego potrzebujesz?",
      required: true,
      placeholder: "Napisz kilka słów o stronie, której potrzebujesz.",
    },
  },
} as const;

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
};

/** Legacy webhook shape — kept for existing delivery integrations. */
export type ContactWebhookPayload = {
  name: string;
  salon: string;
  contact: string;
  links: string;
  message: string;
};

export function toWebhookPayload(values: ContactPayload): ContactWebhookPayload {
  const contact = [values.email.trim(), values.phone.trim()]
    .filter(Boolean)
    .join(" · ");

  return {
    name: values.name.trim(),
    salon: values.business.trim(),
    contact,
    links: values.phone.trim(),
    message: values.message.trim(),
  };
}
