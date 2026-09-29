import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/credit-risk-regulatory-reporting',
        destination: '/credit-risk-volume-1',
        permanent: true,
      },
      {
        source: '/credit-risk-20-minute-cheatsheet',
        destination: '/credit-risk-cheatsheet',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
