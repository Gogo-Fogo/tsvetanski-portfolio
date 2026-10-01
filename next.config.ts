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
    // The project list moved from /career to /projects (2026-10). Old category filters map
    // onto the new category names; the search query (?q=) passes through untouched.
    {
      source: "/career",
      has: [{ type: "query", key: "filter", value: "games" }],
      destination: "/projects?category=gameplay",
      permanent: true,
    },
    {
      source: "/career",
      has: [{ type: "query", key: "filter", value: "(?<f>xr|tools)" }],
      destination: "/projects?category=:f",
      permanent: true,
    },
    { source: "/career", destination: "/projects", permanent: true },
    // Case-study slugs renamed to match their titles (2026-10).
    { source: "/projects/repo-x", destination: "/projects/guilty-as-arrr", permanent: true },
    { source: "/projects/vr-microgames", destination: "/projects/shift-culture-vr", permanent: true },
    { source: "/projects/vr-interaction-lab", destination: "/projects/vr-drift-simulator", permanent: true },
    // Breda was a duplicate of the Trash Been case study.
    { source: "/projects/breda", destination: "/projects/trash-been", permanent: true },
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
