import type { NextConfig } from "next";

const useReactCompiler = process.env.ENABLE_REACT_COMPILER === "true";

const nextConfig: NextConfig = {
  reactCompiler: useReactCompiler,

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  turbopack: {
    root: __dirname,
  },

  async rewrites() {
    console.log("Rewrites are being set up...");
    return [
      {
        source: "/api/:path*",
        destination: "https://invoice-iq-gamma.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;