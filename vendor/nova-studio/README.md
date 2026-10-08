# NOVA STUDIO — vendored Next.js static demo (MSWA)

Isolated copy of the original Next.js project (`fryjzer 2 `) for static hosting at
`/demos/nova-studio/`.

Do not import this package into the MSWA Next.js app. Build separately, then copy
`out/` → `../../public/demos/nova-studio/`.

```bash
npm install
npm run build
rm -rf ../../public/demos/nova-studio
mkdir -p ../../public/demos/nova-studio
cp -R out/. ../../public/demos/nova-studio/
```

MSWA-only adaptations (vs standalone original):

- `next.config.ts` — `output: "export"`, `basePath` / `assetPrefix`: `/demos/nova-studio`
- Image paths prefixed for static hosting (`lib/asset.ts` / `lib/site.ts`) — Next
  `images.unoptimized` does not auto-apply `basePath` to string `src`s
- Demo booking toast (no real Booksy)
- `robots: noindex` in `app/layout.tsx`
