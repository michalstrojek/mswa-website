/**
 * Contact / lead form configuration.
 * Delivery is handled by functions/api/contact.ts (Resend via Cloudflare Pages).
 */

export const contactForm = {
  endpoint: "/api/contact",
  submitLabel: "Porozmawiajmy",
  successMessage: "Wiadomość wysłana. Odezwę się wkrótce.",
  errorMessage:
    "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na kontakt@mswa.pl.",
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
