"use client";

import { useMemo, useState, useCallback } from "react";
import GraphTooltip from "./graph-tooltip";

type GraphNode = {
  id: string;
  label: string;
  labelLines?: string[];
  group: "core" | "degree" | "sub";
  color: string;
  parentId?: string;
  position: { x: number; y: number };
  description?: string;
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
    position: { x: 340, y: 160 },
    description: "Accelerated master's program focusing on human-centered design and complex system architecture."
  },

  {
    id: "degree-aa",
    label: "A.A. Digital Animation",
    labelLines: ["A.A", "Digital Animation"],
    group: "degree",
    color: "#f97316",
    position: { x: 200, y: 160 },
    description: "Foundation in visual storytelling and digital content creation techniques."
  },
  {
    id: "degree-ba",
    label: "B.A. Communication and Media Studies",
    labelLines: ["B.A", "Communication &", "Media Studies"],
    group: "degree",
    color: "#facc15",
    position: { x: 480, y: 160 },
    description: "Study of effective communication strategies and media impact analysis."
  },
  {
    id: "degree-bs",
    label: "B.S. Game & Simulation",
    labelLines: ["B.S", "Game & Simulation"],
    group: "degree",
    color: "#38bdf8",
    position: { x: 340, y: 320 },
    description: "Technical degree focused on game development and simulation systems."
  },

  { 
    id: "sub-aa-1", 
    label: "Visual Storytelling", 
    group: "sub", 
    color: "#fdba74", 
    parentId: "degree-aa", 
    position: { x: 140, y: 90 },
    description: "Crafting compelling visual narratives through digital media."
  },
  { 
    id: "sub-aa-2", 
    label: "Cinematic Sequencing", 
    group: "sub", 
    color: "#fdba74", 
    parentId: "degree-aa", 
    position: { x: 120, y: 160 },
    description: "Mastering the art of scene composition and timing."
  },
  { 
    id: "sub-aa-3", 
    label: "World Atmosphere", 
    group: "sub", 
    color: "#fdba74", 
    parentId: "degree-aa", 
    position: { x: 140, y: 230 },
    description: "Creating immersive environments through visual elements."
  },

  { 
    id: "sub-ba-1", 
    label: "Rhetoric & Persuasion", 
    group: "sub", 
    color: "#fde68a", 
    parentId: "degree-ba", 
    position: { x: 540, y: 90 },
    description: "Understanding and applying effective communication strategies."
  },
  { 
    id: "sub-ba-2", 
    label: "Empathy Signals", 
    group: "sub", 
    color: "#fde68a", 
    parentId: "degree-ba", 
    position: { x: 560, y: 160 },
    description: "Recognizing and responding to user emotional cues."
  },
  { 
    id: "sub-ba-3", 
    label: "Team Alignment", 
    group: "sub", 
    color: "#fde68a", 
    parentId: "degree-ba", 
    position: { x: 540, y: 230 },
    description: "Facilitating effective cross-functional collaboration."
  },

  { 
    id: "sub-bs-1", 
    label: "Systems Design", 
    group: "sub", 
    color: "#7dd3fc", 
    parentId: "degree-bs", 
    position: { x: 230, y: 400 },
    description: "Architecting complex interactive systems and mechanics."
  },
  { 
    id: "sub-bs-2", 
    label: "Interactive Worlds", 
    group: "sub", 
    color: "#7dd3fc", 
    parentId: "degree-bs", 
    position: { x: 340, y: 440 },
    description: "Building engaging and responsive virtual environments."
  },
  { 
    id: "sub-bs-3", 
    label: "Simulation Prototyping", 
    group: "sub", 
    color: "#7dd3fc", 
    parentId: "degree-bs", 
    position: { x: 450, y: 400 },
    description: "Rapid development of physics-based simulations."
  },

  { 
    id: "sub-core-1", 
    label: "Human-Centered Flow", 
    group: "sub", 
    color: "#c4b5fd", 
    parentId: "core-ms", 
    position: { x: 260, y: 90 },
    description: "Designing intuitive user journeys and interactions."
  },
  { 
    id: "sub-core-2", 
    label: "Frictionless UX", 
    group: "sub", 
    color: "#c4b5fd", 
    parentId: "core-ms", 
    position: { x: 340, y: 60 },
    description: "Minimizing cognitive load in user interfaces."
  },
  { 
    id: "sub-core-3", 
    label: "Complexity Clarity", 
    group: "sub", 
    color: "#c4b5fd", 
    parentId: "core-ms", 
    position: { x: 420, y: 90 },
    description: "Making complex systems understandable and manageable."
  },
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
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleNodeHover = useCallback((node: GraphNode | null, event?: React.MouseEvent) => {
    setHoveredNode(node);
    if (event) {
      // Get the position relative to the viewport
      const rect = event.currentTarget.getBoundingClientRect();
      setMousePos({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    }
  }, []);

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

  const nodeSize = (group: GraphNode["group"]) => (group === "core" ? 48 : group === "degree" ? 40 : 28);
  const containerClasses = variant === "background" 
    ? `absolute inset-0 ${className ?? ""}`
    : `relative h-[460px] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] ${className ?? ""}`;

  return (
    <div className={containerClasses}>
      <div className="pointer-events-none absolute left-6 top-6 z-10 max-w-[280px] text-2xl font-bold tracking-tight text-[var(--foreground)] hidden lg:block">
        Click a circle to explore.
      </div>
      <svg className="absolute inset-0 translate-x-3 translate-y-24 scale-[1.3]" viewBox="0 0 700 520" preserveAspectRatio="xMidYMid meet">
        <g stroke="rgba(148, 163, 184, 0.75)" strokeWidth={2} fill="none">
          <defs>
            <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(148, 163, 184, 0.2)" />
              <stop offset="50%" stopColor="rgba(148, 163, 184, 0.75)" />
              <stop offset="100%" stopColor="rgba(148, 163, 184, 0.2)" />
            </linearGradient>
          </defs>
          {visibleEdges.map((edge) => {
            const source = nodesData.find((node) => node.id === edge.source);
            const target = nodesData.find((node) => node.id === edge.target);
            if (!source || !target) return null;

            // Calculate control points for the curve
            const dx = target.position.x - source.position.x;
            const dy = target.position.y - source.position.y;
            const controlX = source.position.x + dx / 2;
            const controlY = source.position.y + dy / 2;
            
            // Add some curvature based on the distance
            const curvature = 0.2;
            const midX = (source.position.x + target.position.x) / 2;
            const midY = (source.position.y + target.position.y) / 2;
            const cx1 = midX + curvature * (target.position.y - source.position.y);
            const cy1 = midY - curvature * (target.position.x - source.position.x);

            return (
              <path
                key={edge.id}
                d={`M ${source.position.x} ${source.position.y} Q ${cx1} ${cy1} ${target.position.x} ${target.position.y}`}
                stroke="url(#edge-gradient)"
                strokeDasharray={edge.dashed ? "6 6" : undefined}
                className="transition-all duration-500 ease-in-out"
                style={{
                  opacity: edge.source === activeDegree || edge.target === activeDegree ? "1" : "0.5",
                }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="12"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
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
              <g
                className="transition-all duration-500 ease-in-out"
                style={{
                  opacity: node.parentId ? (node.parentId === activeDegree ? "1" : "0.5") : "1",
                  transform: `scale(${node.parentId ? (node.parentId === activeDegree ? "1" : "0.8") : "1"})`,
                }}
              >
                <circle
                  r={size / 2 + 4}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1"
                  opacity="0.3"
                  className="transition-transform duration-300"
                  style={{
                    transform: activeDegree === node.id ? "scale(1.2)" : "scale(1)",
                  }}
                />
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
                  onMouseEnter={(e) => handleNodeHover(node, e)}
                  onMouseLeave={() => handleNodeHover(null)}
                  className="cursor-pointer origin-center animate-[nodePulseLight_4.5s_ease-in-out_infinite] dark:animate-[nodePulseDark_4.5s_ease-in-out_infinite] transition-transform duration-300 hover:scale-110"
                >
                  <animate
                    attributeName="r"
                    values={`${size/2};${size/2 + 2};${size/2}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
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
      <GraphTooltip
        x={mousePos.x}
        y={mousePos.y}
        title={hoveredNode?.label ?? ""}
        description={hoveredNode?.description}
        visible={!!hoveredNode}
      />
    </div>
  );
}