import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/resume",
      destination: "/resume.pdf",
      permanent: true,
    },
    {
      source: "/projects/v4n-gogo-figurine-lab",
      destination: "/projects/figuresmith",
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
