# ATELIER Barbershop — vendored Vite demo (MSWA)

Isolated copy of the original Vite + Framer Motion project for static hosting at
`/demos/atelier/`.

Do not import this package into the Next.js app. Build separately, then copy
`dist/` → `../../public/demos/atelier/`.

```bash
npm install
npm run build
rm -rf ../../public/demos/atelier
mkdir -p ../../public/demos/atelier
cp -R dist/. ../../public/demos/atelier/
```

MSWA-only adaptations (vs standalone original):

- `vite.config.ts` — `base: "/demos/atelier/"`
- Image paths via `withBase()` (`import.meta.env.BASE_URL`) — absolute `/images/…`
  strings are not rewritten by Vite
- Demo booking toast (no real Booksy) via `src/lib/demo-booking.ts` + `Cta` / Services
- `noindex` meta in `index.html`
