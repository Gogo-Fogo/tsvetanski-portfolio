import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Project Portfolio | Georgi Tsvetanski",
  description: "Selected projects spanning XR simulation, gameplay prototyping, multiplayer systems, tools, design research, and cinematic storytelling.",
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
