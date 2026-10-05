import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: process.cwd(),
  images: {
    unoptimized: true,
  },
  // Serve static demo folders without requiring /index.html in the URL
  // (needed for SPA basepaths like LUCENTE under /demos/restauracja-wloska).
  // Note: do not force trailing-slash redirects — Next static serving fights them
  // and creates loops. Demos that use relative assets should set <base href>.
  async rewrites() {
    return [
      {
        source: "/demos/:slug",
        destination: "/demos/:slug/index.html",
      },
      {
        source: "/demos/:slug/",
        destination: "/demos/:slug/index.html",
      },
    ];
  },
};

export default nextConfig;
