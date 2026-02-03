"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { ForceGraphMethods } from "react-force-graph-2d";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false });

type GraphNode = {
  id: string;
  label: string;
  group: "core" | "degree" | "sub";
  size: number;
  color: string;
  parentId?: string;
};

type GraphLink = {
  source: string;
  target: string;
};

const graphData = {
  nodes: [
    { id: "core-ms", label: "M.S. Interaction Design", group: "core", size: 18, color: "#7dd3fc" },

    { id: "degree-aa", label: "A.A. Digital Animation", group: "degree", size: 12, color: "#f97316" },
    { id: "degree-ba", label: "B.A. Communication", group: "degree", size: 12, color: "#facc15" },
    { id: "degree-bs", label: "B.S. Game & Simulation", group: "degree", size: 12, color: "#38bdf8" },

    { id: "sub-aa-1", label: "Visual Storytelling", group: "sub", size: 6, color: "#fdba74", parentId: "degree-aa" },
    { id: "sub-aa-2", label: "Cinematic Sequencing", group: "sub", size: 6, color: "#fdba74", parentId: "degree-aa" },
    { id: "sub-aa-3", label: "World Atmosphere", group: "sub", size: 6, color: "#fdba74", parentId: "degree-aa" },

    { id: "sub-ba-1", label: "Rhetoric & Persuasion", group: "sub", size: 6, color: "#fde68a", parentId: "degree-ba" },
    { id: "sub-ba-2", label: "Empathy Signals", group: "sub", size: 6, color: "#fde68a", parentId: "degree-ba" },
    { id: "sub-ba-3", label: "Team Alignment", group: "sub", size: 6, color: "#fde68a", parentId: "degree-ba" },

    { id: "sub-bs-1", label: "Systems Design", group: "sub", size: 6, color: "#7dd3fc", parentId: "degree-bs" },
    { id: "sub-bs-2", label: "Interactive Worlds", group: "sub", size: 6, color: "#7dd3fc", parentId: "degree-bs" },
    { id: "sub-bs-3", label: "Simulation Prototyping", group: "sub", size: 6, color: "#7dd3fc", parentId: "degree-bs" },

    { id: "sub-core-1", label: "Human-Centered Flow", group: "sub", size: 6, color: "#c4b5fd", parentId: "core-ms" },
    { id: "sub-core-2", label: "Frictionless UX", group: "sub", size: 6, color: "#c4b5fd", parentId: "core-ms" },
    { id: "sub-core-3", label: "Complexity Clarity", group: "sub", size: 6, color: "#c4b5fd", parentId: "core-ms" }
  ] as GraphNode[],
  links: [
    { source: "core-ms", target: "degree-aa" },
    { source: "core-ms", target: "degree-ba" },
    { source: "core-ms", target: "degree-bs" },

    { source: "core-ms", target: "sub-core-1" },
    { source: "core-ms", target: "sub-core-2" },
    { source: "core-ms", target: "sub-core-3" },

    { source: "degree-aa", target: "sub-aa-1" },
    { source: "degree-aa", target: "sub-aa-2" },
    { source: "degree-aa", target: "sub-aa-3" },

    { source: "degree-ba", target: "sub-ba-1" },
    { source: "degree-ba", target: "sub-ba-2" },
    { source: "degree-ba", target: "sub-ba-3" },

    { source: "degree-bs", target: "sub-bs-1" },
    { source: "degree-bs", target: "sub-bs-2" },
    { source: "degree-bs", target: "sub-bs-3" }
  ] as GraphLink[]
};

const dimColor = "rgba(148, 163, 184, 0.2)";

type DegreeGraphProps = {
  variant?: "card" | "background";
  className?: string;
  interactive?: boolean;
};

export default function DegreeGraph({
  variant = "card",
  className,
  interactive = variant !== "background"
}: DegreeGraphProps) {
  const isBackground = variant === "background";
  const graphRef = useRef<ForceGraphMethods | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pulseRef = useRef(0);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [activeDegree, setActiveDegree] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 540, height: 420 });

  useEffect(() => {
    const updateSize = () => {
      if (isBackground) {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        return;
      }

      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
        return;
      }
      setDimensions({ width: 520, height: 420 });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [isBackground]);

  useEffect(() => {
    if (isBackground || !graphRef.current) return;
    graphRef.current.centerAt(0, 0, 0);
    graphRef.current.zoom(0.95, 0);
  }, [isBackground]);

  useEffect(() => {
    if (!graphRef.current) return;
    let animationFrame: number;

    const tick = () => {
      pulseRef.current = (pulseRef.current + 0.04) % (Math.PI * 2);
      graphRef.current?.refresh();
      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

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

  const isVisible = (node: GraphNode) => {
    if (node.group !== "sub") return true;
    return activeDegree ? node.parentId === activeDegree : false;
  };

  const layoutGraphData = useMemo(() => {
    const barY = -40;
    const positions: Record<string, { fx: number; fy: number }> = {
      "core-ms": { fx: 0, fy: barY },
      "degree-aa": { fx: -110, fy: barY },
      "degree-ba": { fx: 110, fy: barY },
      "degree-bs": { fx: 0, fy: barY + 130 }
    };

    const subOffsets: Record<string, Array<[number, number]>> = {
      "core-ms": [
        [-70, -70],
        [0, -100],
        [70, -70]
      ],
      "degree-aa": [
        [-90, -50],
        [-110, 0],
        [-90, 50]
      ],
      "degree-ba": [
        [90, -50],
        [110, 0],
        [90, 50]
      ],
      "degree-bs": [
        [-60, 65],
        [0, 90],
        [60, 65]
      ]
    };

    const subCounts: Record<string, number> = {};
    const nodesWithPositions = graphData.nodes.map((node) => {
      const fixed = positions[node.id];
      if (fixed) {
        return { ...node, ...fixed };
      }
      if (node.group === "sub" && node.parentId) {
        const parentPos = positions[node.parentId];
        const index = subCounts[node.parentId] ?? 0;
        subCounts[node.parentId] = index + 1;
        const offsets = subOffsets[node.parentId] ?? [];
        const [offsetX, offsetY] = offsets[index] ?? [0, 0];
        if (parentPos) {
          return {
            ...node,
            fx: parentPos.fx + offsetX,
            fy: parentPos.fy + offsetY
          };
        }
      }
      return node;
    });

    return { ...graphData, nodes: nodesWithPositions };
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      ref={containerRef}
      className={
        isBackground
          ? `absolute inset-0 ${className ?? ""}`
          : `relative h-[420px] w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] ${
              className ?? ""
            }`
      }
    >
      {!isBackground ? (
        <>
          <div className="pointer-events-none absolute left-6 top-6 z-10 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            T-SHAPED EDUCATION MAP
          </div>
          <div className="pointer-events-none absolute left-6 top-14 z-10 max-w-[240px] text-xs text-[var(--muted)]">
            Click a degree to reveal the sub-skills. Core diamond anchors the T.
          </div>
        </>
      ) : null}
      <ForceGraph2D
        ref={graphRef}
        width={dimensions.width}
        height={dimensions.height}
        pixelRatio={1}
        backgroundColor="transparent"
        graphData={layoutGraphData}
        nodeRelSize={isBackground ? 4 : 6}
        nodeVal={(node) => (node as GraphNode).size}
        nodeColor={(node) => {
          const graphNode = node as GraphNode;
          if (!isVisible(graphNode)) return "rgba(148, 163, 184, 0)";
          return isRelated(graphNode.id) ? graphNode.color : dimColor;
        }}
        linkColor={(link) => {
          if (isBackground) return "rgba(148, 163, 184, 0.15)";
          const source = (link.source as GraphNode).id ?? (link.source as string);
          const target = (link.target as GraphNode).id ?? (link.target as string);
          const sourceNode = layoutGraphData.nodes.find((node) => node.id === source);
          const targetNode = layoutGraphData.nodes.find((node) => node.id === target);
          if (sourceNode && !isVisible(sourceNode)) return "rgba(148, 163, 184, 0)";
          if (targetNode && !isVisible(targetNode)) return "rgba(148, 163, 184, 0)";
          if (!hoveredNode) return "rgba(148, 163, 184, 0.35)";
          return hoveredNode.id === source || hoveredNode.id === target
            ? "rgba(56, 189, 248, 0.9)"
            : "rgba(148, 163, 184, 0.1)";
        }}
        linkWidth={(link) => {
          if (isBackground) return 1;
          const source = (link.source as GraphNode).id ?? (link.source as string);
          const target = (link.target as GraphNode).id ?? (link.target as string);
          const sourceNode = layoutGraphData.nodes.find((node) => node.id === source);
          const targetNode = layoutGraphData.nodes.find((node) => node.id === target);
          if (sourceNode && !isVisible(sourceNode)) return 0;
          if (targetNode && !isVisible(targetNode)) return 0;
          if (!hoveredNode) return 1;
          return hoveredNode.id === source || hoveredNode.id === target ? 2 : 1;
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          const graphNode = node as GraphNode;
          if (!isVisible(graphNode)) return;
          const x = (node as any).x as number;
          const y = (node as any).y as number;
          const radius = graphNode.size + 14;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }}
        nodeLabel={(node) => (node as GraphNode).label}
        onNodeHover={
          !interactive
            ? undefined
            : (node) => {
                setHoveredNode(node ? (node as GraphNode) : null);
              }
        }
        onNodeClick={
          !interactive
            ? undefined
            : (node) => {
                const graphNode = node as GraphNode;
                if (graphNode.group === "degree") {
                  setActiveDegree((prev) => (prev === graphNode.id ? null : graphNode.id));
                }
                if (graphNode.group === "core") {
                  setActiveDegree(null);
                }
              }
        }
        nodeCanvasObject={(node, ctx, globalScale) => {
          const graphNode = node as GraphNode;
          const label = graphNode.label;
          if (!isVisible(graphNode)) {
            return;
          }
          const x = (node as any).x as number;
          const y = (node as any).y as number;
          const pulse = 1 + 0.1 * Math.sin(pulseRef.current + graphNode.size);
          const radius = graphNode.size * pulse;
          const fontSize = graphNode.group === "core" ? 15 : graphNode.group === "degree" ? 13 : 11;

          const text = label;
          const textX = x + radius + 6;
          const textY = y + 4;
          const paddingX = 6;
          const paddingY = 3;

          ctx.font = `${fontSize / globalScale}px 'Geist', sans-serif`;
          const textWidth = ctx.measureText(text).width;
          const chipWidth = textWidth + paddingX * 2;
          const chipHeight = fontSize / globalScale + paddingY * 2;

          ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
          ctx.strokeStyle = "rgba(226, 232, 240, 0.55)";
          ctx.lineWidth = 1 / globalScale;

          const chipX = textX - paddingX;
          const chipY = textY - chipHeight + paddingY;

          ctx.beginPath();
          const radiusChip = 6 / globalScale;
          ctx.moveTo(chipX + radiusChip, chipY);
          ctx.lineTo(chipX + chipWidth - radiusChip, chipY);
          ctx.quadraticCurveTo(chipX + chipWidth, chipY, chipX + chipWidth, chipY + radiusChip);
          ctx.lineTo(chipX + chipWidth, chipY + chipHeight - radiusChip);
          ctx.quadraticCurveTo(
            chipX + chipWidth,
            chipY + chipHeight,
            chipX + chipWidth - radiusChip,
            chipY + chipHeight
          );
          ctx.lineTo(chipX + radiusChip, chipY + chipHeight);
          ctx.quadraticCurveTo(chipX, chipY + chipHeight, chipX, chipY + chipHeight - radiusChip);
          ctx.lineTo(chipX, chipY + radiusChip);
          ctx.quadraticCurveTo(chipX, chipY, chipX + radiusChip, chipY);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "rgba(248, 250, 252, 0.98)";
          ctx.fillText(text, textX, textY);
        }}
        nodeCanvasObjectMode="after"
        cooldownTicks={0}
        d3AlphaDecay={1}
        d3VelocityDecay={1}
        linkDirectionalParticles={0}
        enableNodeDrag={false}
        enableZoomPanInteraction={interactive}
      />
    </div>
  );
}