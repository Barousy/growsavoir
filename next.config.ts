import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: '/subjects/:slug*', destination: '/subject/:slug*', permanent: true },
    ];
  },
};

export default nextConfig;
