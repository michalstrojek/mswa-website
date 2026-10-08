/** Prefix public assets with Vite `base` (`/demos/atelier/`). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized.startsWith(`${base}/`)) return normalized;
  return `${base}${normalized}`;
}
