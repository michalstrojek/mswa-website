/**
 * Shared e-mail shape check for client + server.
 * Intentionally simple (no external lib). Server still re-validates.
 */
export const EMAIL_MAX_LENGTH = 254;

/** Practical RFC-ish pattern: local@domain.tld (rejects spaces and trailing dots). */
const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!email || email.length > EMAIL_MAX_LENGTH) return false;
  if (email.includes("..") || email.startsWith(".") || email.endsWith(".")) {
    return false;
  }
  return EMAIL_RE.test(email);
}
