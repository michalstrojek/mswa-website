/** Must match `basePath` in next.config.ts (Next unoptimized images skip auto-prefix). */
export const ASSET_BASE = "/demos/nova-studio";

export function withBase(path: string): string {
  if (/^https?:\/\//i.test(path) || path.startsWith("//")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized.startsWith(`${ASSET_BASE}/`)) return normalized;
  return `${ASSET_BASE}${normalized}`;
}
