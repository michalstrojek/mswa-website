# SOLÉA Hair Studio — vendored Vite demo (MSWA)

Isolated copy of the original Vite project for static hosting at
`/demos/solea-hair-studio/`.

Do not import this package into the Next.js app. Build separately, then copy
`dist/` → `../../public/demos/solea-hair-studio/`.

```bash
npm install
npm run build
rm -rf ../../public/demos/solea-hair-studio
mkdir -p ../../public/demos/solea-hair-studio
cp -R dist/. ../../public/demos/solea-hair-studio/
```

MSWA-only adaptations (vs standalone original):

- `vite.config.ts` — `base: "/demos/solea-hair-studio/"`
- Demo booking toast (no real Booksy)
- `noindex` meta in `index.html`
