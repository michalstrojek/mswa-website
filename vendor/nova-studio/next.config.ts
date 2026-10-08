import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/demos/nova-studio",
  assetPrefix: "/demos/nova-studio",
  trailingSlash: true,
  images: { unoptimized: true },
  agentRules: false,
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
