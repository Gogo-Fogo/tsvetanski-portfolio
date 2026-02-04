"use client";

import { useMemo, useState } from "react";

type GraphNode = {
  id: string;
  label: string;
  labelLines?: string[];
  group: "core" | "degree" | "sub";
  color: string;
  parentId?: string;
  position: { x: number; y: number };
};

type GraphLink = {
  id: string;
  source: string;
  target: string;
  dashed?: boolean;
};

const nodesData: GraphNode[] = [
  {
    id: "core-ms",
    label: "M.S. Interaction Design & Information Architecture",
    labelLines: ["M.S", "Interaction Design &", "Information Architecture"],
    group: "core",
    color: "#7dd3fc",
    position: { x: 340, y: 160 }
  },

  {
    id: "degree-aa",
    label: "A.A. Digital Animation",
    labelLines: ["A.A", "Digital Animation"],
    group: "degree",
    color: "#f97316",
    position: { x: 200, y: 160 }
  },
  {
    id: "degree-ba",
    label: "B.A. Digital Media & Communication",
    labelLines: ["B.A", "Digital Media &", "Communication"],
    group: "degree",
    color: "#facc15",
    position: { x: 480, y: 160 }
  },
  {
    id: "degree-bs",
    label: "B.S. Game & Simulation",
    labelLines: ["B.S", "Game & Simulation"],
    group: "degree",
    color: "#38bdf8",
    position: { x: 340, y: 320 }
  },

  { id: "sub-aa-1", label: "Visual Storytelling", group: "sub", color: "#fdba74", parentId: "degree-aa", position: { x: 140, y: 90 } },
  { id: "sub-aa-2", label: "Cinematic Sequencing", group: "sub", color: "#fdba74", parentId: "degree-aa", position: { x: 120, y: 160 } },
  { id: "sub-aa-3", label: "World Atmosphere", group: "sub", color: "#fdba74", parentId: "degree-aa", position: { x: 140, y: 230 } },

  { id: "sub-ba-1", label: "Rhetoric & Persuasion", group: "sub", color: "#fde68a", parentId: "degree-ba", position: { x: 540, y: 90 } },
  { id: "sub-ba-2", label: "Empathy Signals", group: "sub", color: "#fde68a", parentId: "degree-ba", position: { x: 560, y: 160 } },
  { id: "sub-ba-3", label: "Team Alignment", group: "sub", color: "#fde68a", parentId: "degree-ba", position: { x: 540, y: 230 } },

  { id: "sub-bs-1", label: "Systems Design", group: "sub", color: "#7dd3fc", parentId: "degree-bs", position: { x: 230, y: 400 } },
  { id: "sub-bs-2", label: "Interactive Worlds", group: "sub", color: "#7dd3fc", parentId: "degree-bs", position: { x: 340, y: 440 } },
  { id: "sub-bs-3", label: "Simulation Prototyping", group: "sub", color: "#7dd3fc", parentId: "degree-bs", position: { x: 450, y: 400 } },

  { id: "sub-core-1", label: "Human-Centered Flow", group: "sub", color: "#c4b5fd", parentId: "core-ms", position: { x: 260, y: 90 } },
  { id: "sub-core-2", label: "Frictionless UX", group: "sub", color: "#c4b5fd", parentId: "core-ms", position: { x: 340, y: 60 } },
  { id: "sub-core-3", label: "Complexity Clarity", group: "sub", color: "#c4b5fd", parentId: "core-ms", position: { x: 420, y: 90 } },
];

const edgesData: GraphLink[] = [
  { id: "core-aa", source: "core-ms", target: "degree-aa", dashed: true },
  { id: "core-ba", source: "core-ms", target: "degree-ba", dashed: true },
  { id: "core-bs", source: "core-ms", target: "degree-bs", dashed: true },

  { id: "core-sub-1", source: "core-ms", target: "sub-core-1" },
  { id: "core-sub-2", source: "core-ms", target: "sub-core-2" },
  { id: "core-sub-3", source: "core-ms", target: "sub-core-3" },

  { id: "aa-sub-1", source: "degree-aa", target: "sub-aa-1" },
  { id: "aa-sub-2", source: "degree-aa", target: "sub-aa-2" },
  { id: "aa-sub-3", source: "degree-aa", target: "sub-aa-3" },

  { id: "ba-sub-1", source: "degree-ba", target: "sub-ba-1" },
  { id: "ba-sub-2", source: "degree-ba", target: "sub-ba-2" },
  { id: "ba-sub-3", source: "degree-ba", target: "sub-ba-3" },

  { id: "bs-sub-1", source: "degree-bs", target: "sub-bs-1" },
  { id: "bs-sub-2", source: "degree-bs", target: "sub-bs-2" },
  { id: "bs-sub-3", source: "degree-bs", target: "sub-bs-3" },
];

const coreIds = new Set(["core-ms", "degree-aa", "degree-ba", "degree-bs"]);

type DegreeGraphProps = {
  variant?: "card" | "background";
  className?: string;
};

export default function DegreeGraph({ variant = "card", className }: DegreeGraphProps) {
  const [activeDegree, setActiveDegree] = useState<string | null>(null);

  const visibleNodes = useMemo(() => {
    return nodesData.filter((node) => {
      if (coreIds.has(node.id)) return true;
      return activeDegree ? node.parentId === activeDegree : false;
    });
  }, [activeDegree]);

  const visibleEdges = useMemo(() => {
    const visibleIds = new Set(visibleNodes.map((node) => node.id));
    return edgesData.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target));
  }, [visibleNodes]);

  const handleNodeClick = (nodeId: string, group: GraphNode["group"]) => {
    if (group === "degree" || group === "core") {
      setActiveDegree((prev) => (prev === nodeId ? null : nodeId));
    }
  };

  const isBackground = variant === "background";
  const nodeSize = (group: GraphNode["group"]) => (group === "core" ? 48 : group === "degree" ? 40 : 28);

  return (
    <div
      className={
        isBackground
          ? `absolute inset-0 ${className ?? ""}`
          : `relative h-[460px] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] ${
              className ?? ""
            }`
      }
    >
      {!isBackground ? (
        <div className="pointer-events-none absolute left-6 top-6 z-10 max-w-[280px] text-2xl font-bold tracking-tight text-[var(--foreground)]">
          Click a circle to explore.
        </div>
      ) : null}
      <svg className="absolute inset-0 translate-x-3 translate-y-24 scale-[1.3]" viewBox="0 0 700 520" preserveAspectRatio="xMidYMid meet">
        <g stroke="rgba(148, 163, 184, 0.75)" strokeWidth={2} fill="none">
          {visibleEdges.map((edge) => {
            const source = nodesData.find((node) => node.id === edge.source);
            const target = nodesData.find((node) => node.id === edge.target);
            if (!source || !target) return null;
            return (
              <line
                key={edge.id}
                x1={source.position.x}
                y1={source.position.y}
                x2={target.position.x}
                y2={target.position.y}
                strokeDasharray={edge.dashed ? "6 6" : undefined}
              />
            );
          })}
        </g>
        {visibleNodes.map((node) => {
          const size = nodeSize(node.group);
          const labelLines = node.labelLines ?? [node.label];
          const isCore = node.id === "core-ms";
          const fontSize = isCore ? 12 : node.group === "degree" ? 12 : 10;
          const lineHeight = isCore ? 14 : node.group === "degree" ? 14 : 12;
          const labelWidth = Math.max(...labelLines.map((line) => line.length)) * (fontSize * 0.8);
          const labelHeight = labelLines.length * lineHeight + 10;
          const labelOffset = isCore
            ? -(size / 2 + lineHeight * (labelLines.length - 1))
            : size / 2 + (node.id === "degree-ba" ? 62 : node.group === "degree" ? 52 : 44);
          return (
            <g key={node.id} transform={`translate(${node.position.x}, ${node.position.y})`}>
              <circle
                r={size / 2}
                fill={node.color}
                style={{
                  // Lower intensity for subtle glow, higher for stronger pulse
                  // Use hex transparency to preserve the node color in the glow.
                  // Example: #7dd3fc55 (light) and #7dd3fcaa (strong).
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error CSS variables for SVG presentation
                  "--node-glow": `${node.color}55`,
                  "--node-glow-strong": `${node.color}aa`,
                }}
                filter="drop-shadow(0 0 10px rgba(0,0,0,0.25))"
                onClick={() => handleNodeClick(node.id, node.group)}
                className="cursor-pointer origin-center animate-[nodePulseLight_4.5s_ease-in-out_infinite] dark:animate-[nodePulseDark_4.5s_ease-in-out_infinite]"
              />
              <g transform={`translate(0, ${labelOffset - labelHeight + 4})`}>
                <rect
                  x={-labelWidth / 2 - 12}
                  y={-4}
                  width={labelWidth + 24}
                  height={labelHeight + 8}
                  rx={10}
                  fill="transparent"
                  stroke="rgba(148, 163, 184, 0.45)"
                  strokeDasharray="6 6"
                />
                <text
                  x={0}
                  y={lineHeight}
                  textAnchor="middle"
                  style={{ fontSize: `${fontSize}px` }}
                  className="font-semibold uppercase tracking-[0.22em] fill-[var(--muted)]"
                >
                  {labelLines.map((line, index) => (
                    <tspan key={line} x={0} dy={index === 0 ? 0 : lineHeight}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}