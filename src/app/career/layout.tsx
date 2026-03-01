import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Project Portfolio | Georgi Tsvetanski",
  description: "13 projects spanning XR simulation, networked multiplayer, game design, level design, and cinematic storytelling. Unity (C#), Photon Fusion, Unreal Engine.",
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
