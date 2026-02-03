"use client";

import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { ForceGraphMethods } from "react-force-graph-2d";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false });

type GraphNode = {
  id: string;
  label: string;
  group: "degree" | "skill" | "project";
  size: number;
  color: string;
  href?: string;
};

type GraphLink = {
  source: string;
  target: string;
};

const graphData = {
  nodes: [
    { id: "degree-arts", label: "A.A. Visual Arts", group: "degree", size: 14, color: "#f97316" },
    { id: "degree-comm", label: "B.A. Communication", group: "degree", size: 14, color: "#facc15" },
    { id: "degree-game", label: "B.S. Game Design", group: "degree", size: 14, color: "#38bdf8" },
    { id: "degree-ixd", label: "M.S. Interaction Design", group: "degree", size: 14, color: "#a78bfa" },

    { id: "skill-story", label: "Visual Storytelling", group: "skill", size: 6, color: "#fda4af" },
    { id: "skill-systems", label: "Systems Design", group: "skill", size: 6, color: "#94a3b8" },
    { id: "skill-ux", label: "Human Factors", group: "skill", size: 6, color: "#60a5fa" },
    { id: "skill-csharp", label: "C# / Unity", group: "skill", size: 6, color: "#34d399" },
    { id: "skill-messaging", label: "Messaging", group: "skill", size: 6, color: "#f472b6" },

    {
      id: "project-shinobi",
      label: "Shinobi Story",
      group: "project",
      size: 9,
      color: "#22d3ee",
      href: "/projects/shinobi-story"
    },
    {
      id: "project-trash",
      label: "Urban Logistics Sim",
      group: "project",
      size: 9,
      color: "#38bdf8",
      href: "/projects/trash-been"
    },
    {
      id: "project-repo",
      label: "Guilty As Arrr",
      group: "project",
      size: 9,
      color: "#818cf8",
      href: "/projects/repo-x"
    },
    {
      id: "project-cpse",
      label: "CPSE Media",
      group: "project",
      size: 9,
      color: "#f472b6",
      href: "/cpse"
    },
    {
      id: "project-vr",
      label: "VR Interaction Lab",
      group: "project",
      size: 9,
      color: "#4ade80",
      href: "/projects/vr-interaction-lab"
    }
  ] as GraphNode[],
  links: [
    { source: "degree-arts", target: "skill-story" },
    { source: "degree-comm", target: "skill-messaging" },
    { source: "degree-game", target: "skill-csharp" },
    { source: "degree-ixd", target: "skill-ux" },
    { source: "degree-game", target: "skill-systems" },
    { source: "degree-ixd", target: "skill-systems" },

    { source: "skill-story", target: "project-shinobi" },
    { source: "skill-csharp", target: "project-shinobi" },
    { source: "skill-messaging", target: "project-shinobi" },

    { source: "skill-systems", target: "project-trash" },
    { source: "skill-ux", target: "project-trash" },
    { source: "skill-csharp", target: "project-trash" },

    { source: "skill-csharp", target: "project-repo" },
    { source: "skill-ux", target: "project-repo" },

    { source: "skill-messaging", target: "project-cpse" },
    { source: "skill-story", target: "project-cpse" },
    { source: "skill-ux", target: "project-cpse" },

    { source: "skill-ux", target: "project-vr" },
    { source: "skill-csharp", target: "project-vr" }
  ] as GraphLink[]
};

const dimColor = "rgba(148, 163, 184, 0.2)";

export default function DegreeGraph() {
  const graphRef = useRef<ForceGraphMethods | null>(null);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);

  const connections = useMemo(() => {
    const map = new Map<string, Set<string>>();
    graphData.links.forEach((link) => {
      const source = link.source as string;
      const target = link.target as string;
      if (!map.has(source)) map.set(source, new Set());
      if (!map.has(target)) map.set(target, new Set());
      map.get(source)?.add(target);
      map.get(target)?.add(source);
    });
    return map;
  }, []);

  const isRelated = (nodeId: string) => {
    if (!hoveredNode) return true;
    if (hoveredNode.id === nodeId) return true;
    return connections.get(hoveredNode.id)?.has(nodeId) ?? false;
  };

  return (
    <div className="relative h-[420px] w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
      <div className="absolute left-6 top-6 z-10 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
        Interdisciplinary Web
      </div>
      <div className="absolute left-6 top-14 z-10 max-w-[220px] text-xs text-[var(--muted)]">
        Drag anchors to explore how degrees connect to skills and projects.
      </div>
      <ForceGraph2D
        ref={graphRef}
        width={540}
        height={420}
        backgroundColor="transparent"
        graphData={graphData}
        nodeRelSize={6}
        nodeVal={(node) => (node as GraphNode).size}
        nodeColor={(node) => {
          const graphNode = node as GraphNode;
          return isRelated(graphNode.id) ? graphNode.color : dimColor;
        }}
        linkColor={(link) => {
          const source = (link.source as GraphNode).id ?? (link.source as string);
          const target = (link.target as GraphNode).id ?? (link.target as string);
          if (!hoveredNode) return "rgba(148, 163, 184, 0.35)";
          return hoveredNode.id === source || hoveredNode.id === target
            ? "rgba(56, 189, 248, 0.9)"
            : "rgba(148, 163, 184, 0.1)";
        }}
        linkWidth={(link) => {
          const source = (link.source as GraphNode).id ?? (link.source as string);
          const target = (link.target as GraphNode).id ?? (link.target as string);
          if (!hoveredNode) return 1;
          return hoveredNode.id === source || hoveredNode.id === target ? 2 : 1;
        }}
        nodeLabel={(node) => (node as GraphNode).label}
        onNodeHover={(node) => {
          setHoveredNode(node ? (node as GraphNode) : null);
        }}
        onNodeClick={(node) => {
          const graphNode = node as GraphNode;
          if (graphNode.group === "project" && graphNode.href) {
            window.open(graphNode.href, "_self");
          }
        }}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const graphNode = node as GraphNode;
          const label = graphNode.label;
          const fontSize = graphNode.group === "degree" ? 12 : 10;
          ctx.font = `${fontSize / globalScale}px 'Geist', sans-serif`;
          ctx.fillStyle = graphNode.group === "degree" ? "rgba(248, 250, 252, 0.95)" : "rgba(226, 232, 240, 0.85)";
          ctx.fillText(label, (node as any).x + 10, (node as any).y + 4);
        }}
        cooldownTicks={120}
        linkDirectionalParticles={0}
        enableNodeDrag
      />
    </div>
  );
}