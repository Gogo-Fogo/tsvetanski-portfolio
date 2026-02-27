"use client";

import { useMemo, useState, useCallback, useEffect, useRef } from "react";
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

type Vec2 = { x: number; y: number };

type LayoutNode = GraphNode & {
  anchorPosition: Vec2;
  isExpandedSub: boolean;
};

type LabelLayout = {
  dx: number;
  dy: number;
  width: number;
  height: number;
  lineHeight: number;
  fontSize: number;
  lines: string[];
  anchorDx: number;
  anchorDy: number;
  maxDisplacement?: number;
};

type Box = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

type LayoutConfig = {
  desktopMinWidth: number;
  baseSubSpacing: number;
  spreadRadians: number;
  fallbackSpacingStep: number;
  fallbackSpacingAttempts: number;
  iterations: number;
  labelCollisionPadding: number;
  circleCollisionPadding: number;
  nodeSpring: number;
  labelSpring: number;
  subMaxDisplacement: number;
  labelMaxDisplacement: number;
  labelHorizontalPadding: number;
  labelVerticalPadding: number;
  viewBoxMargin: number;
};

type ExpandedBranchPreset = {
  subNodeOffsets?: Record<string, Vec2>;
  subLabelOffsets?: Record<string, Vec2>;
  activeLabelOffset?: Vec2;
  subLabelMaxDisplacement?: number;
  activeLabelMaxDisplacement?: number;
  lockSubNodePositions?: boolean;
  lockSubLabelPositions?: boolean;
  focusPanBias?: Vec2;
  focusZoom?: number;
  excludeActiveLabelInFocus?: boolean;
  centerOnNode?: boolean;
};

type AllExpandedLayoutOverrides = {
  nodeOffsets?: Record<string, Vec2>;
  labelOffsets?: Record<string, Vec2>;
};

type LayoutEditorTargetKind = "sub-node" | "sub-label" | "active-label" | "all-node" | "all-label";

type LayoutEditorTarget = {
  kind: LayoutEditorTargetKind;
  nodeId: string;
};

type LayoutEditorDragState = {
  target: LayoutEditorTarget;
  startClient: Vec2;
  startOffset: Vec2;
};

type LayoutMetrics = {
  labelOverlaps: number;
  circleOverlaps: number;
  outOfBounds: number;
  displacement: number;
  score: number;
};

type GraphLayoutResult = {
  nodes: LayoutNode[];
  nodeById: Map<string, LayoutNode>;
  labelLayouts: Map<string, LabelLayout>;
  labelBoxes: Map<string, Box>;
  focusBounds: Box | null;
};

type SolverResult = GraphLayoutResult & {
  metrics: LayoutMetrics;
};

const VIEWBOX_WIDTH = 700;
const VIEWBOX_HEIGHT = 520;
const LAYOUT_EDITOR_STORAGE_KEY = "degree-graph-layout-overrides-v3";
const LAYOUT_EDITOR_ALL_STORAGE_KEY = "degree-graph-all-layout-overrides-v1";
const LAYOUT_EDITOR_ACCESS_KEY = "degree-graph-layout-editor-access-v1";
const COLLAPSED_ZOOM_MULTIPLIER = 1.27;
const COLLAPSED_CENTER_BIAS: Vec2 = { x: 0, y: 50 };
const ALL_EXPANDED_ZOOM_MULTIPLIER = 0.95;
const ALL_EXPANDED_CENTER_BIAS: Vec2 = { x: 0, y: 42 };
const ALL_EXPANDED_SUB_SPREAD_MULTIPLIER = 1.55;
const ALL_EXPANDED_LAYOUT_ITERATIONS = 14;
const ALL_EXPANDED_SUB_MAX_DISPLACEMENT = 72;
const ALL_EXPANDED_LABEL_MAX_DISPLACEMENT = 220;
const ALL_EXPANDED_FALLBACK_SPREAD_ATTEMPTS = 6;
const ALL_EXPANDED_SPREAD_STEP = 0.12;
const ALL_EXPANDED_NODE_SPRING = 0.08;
const ALL_EXPANDED_LABEL_SPRING = 0.03;

const LAYOUT_CONFIG: LayoutConfig = {
  desktopMinWidth: 1024,
  baseSubSpacing: 130,
  spreadRadians: Math.PI / 4,
  fallbackSpacingStep: 8,
  fallbackSpacingAttempts: 3,
  iterations: 8,
  labelCollisionPadding: 6,
  circleCollisionPadding: 8,
  nodeSpring: 0.18,
  labelSpring: 0.16,
  subMaxDisplacement: 90,
  labelMaxDisplacement: 120,
  labelHorizontalPadding: 12,
  labelVerticalPadding: 4,
  viewBoxMargin: 12,
};

const EDGE_CURVATURE = 0.2;

const DESKTOP_EXPANDED_PRESETS: Record<string, ExpandedBranchPreset> = {
  "degree-aa": {
    subNodeOffsets: {
      "sub-aa-1": { x: -96, y: -83 },
      "sub-aa-2": { x: -129, y: 9 },
      "sub-aa-3": { x: -96, y: 100 },
    },
    subLabelOffsets: {
      "sub-aa-1": { x: -49, y: 26 },
      "sub-aa-2": { x: -72, y: 28 },
      "sub-aa-3": { x: -48, y: 25 },
    },
    activeLabelOffset: { x: 51, y: 77 },
    subLabelMaxDisplacement: 0,
    activeLabelMaxDisplacement: 0,
    lockSubNodePositions: true,
    lockSubLabelPositions: true,
    focusPanBias: { x: 0, y: -52 },
    excludeActiveLabelInFocus: false,
  },
  "degree-ba": {
    subNodeOffsets: {
      "sub-ba-1": { x: 99, y: -86 },
      "sub-ba-2": { x: 124, y: 12 },
      "sub-ba-3": { x: 64, y: 88 },
    },
    subLabelOffsets: {
      "sub-ba-1": { x: 46, y: 26 },
      "sub-ba-2": { x: 21, y: 32 },
      "sub-ba-3": { x: 61, y: 30 },
    },
    activeLabelOffset: { x: -70, y: -107 },
    subLabelMaxDisplacement: 0,
    activeLabelMaxDisplacement: 0,
    lockSubNodePositions: true,
    lockSubLabelPositions: true,
    focusPanBias: { x: 6, y: -56 },
    excludeActiveLabelInFocus: false,
  },
  "degree-bs": {
    subNodeOffsets: {
      "sub-bs-1": { x: 101, y: 15 },
      "sub-bs-2": { x: 0, y: 112 },
      "sub-bs-3": { x: -104, y: 10 },
    },
    subLabelOffsets: {
      "sub-bs-1": { x: 3, y: 31 },
      "sub-bs-2": { x: 0, y: 30 },
      "sub-bs-3": { x: 0, y: 30 },
    },
    activeLabelOffset: { x: -95, y: -93 },
    subLabelMaxDisplacement: 0,
    activeLabelMaxDisplacement: 0,
    lockSubNodePositions: true,
    lockSubLabelPositions: true,
    focusPanBias: { x: 16, y: -78 },
    excludeActiveLabelInFocus: false,
    centerOnNode: true,
  },
  "core-ms": {
    subNodeOffsets: {
      "sub-core-1": { x: -72, y: -51 },
      "sub-core-2": { x: 1, y: -82 },
      "sub-core-3": { x: 71, y: -52 },
    },
    subLabelOffsets: {
      "sub-core-1": { x: -58, y: -61 },
      "sub-core-2": { x: 3, y: -61 },
      "sub-core-3": { x: 59, y: -57 },
    },
    activeLabelOffset: { x: 1, y: 56 },
    subLabelMaxDisplacement: 0,
    activeLabelMaxDisplacement: 0,
    lockSubNodePositions: true,
    lockSubLabelPositions: true,
    focusPanBias: { x: 0, y: 24 },
    excludeActiveLabelInFocus: false,
  },
};

const ALL_EXPANDED_SUB_LABEL_PRESETS: Record<string, Vec2> = {
  "sub-aa-1": { x: -44, y: 24 },
  "sub-core-1": { x: -56, y: 22 },
  "sub-core-2": { x: 0, y: 24 },
  "sub-core-3": { x: 10, y: 22 },
  "sub-ba-1": { x: 50, y: 42 },
  "sub-ba-2": { x: 38, y: 30 },
  "sub-ba-3": { x: 40, y: 32 },
};

const getMergedExpandedPreset = (
  degreeId: string | null,
  overrides?: Record<string, ExpandedBranchPreset>
): ExpandedBranchPreset | undefined => {
  if (!degreeId) return undefined;

  const basePreset = DESKTOP_EXPANDED_PRESETS[degreeId];
  const overridePreset = overrides?.[degreeId];
  if (!basePreset && !overridePreset) return undefined;

  return {
    ...basePreset,
    ...overridePreset,
    subNodeOffsets: {
      ...(basePreset?.subNodeOffsets ?? {}),
      ...(overridePreset?.subNodeOffsets ?? {}),
    },
    subLabelOffsets: {
      ...(basePreset?.subLabelOffsets ?? {}),
      ...(overridePreset?.subLabelOffsets ?? {}),
    },
  };
};

const nodeSize = (group: GraphNode["group"]) => (group === "core" ? 48 : group === "degree" ? 40 : 28);

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const clampPan = (nextPan: Vec2, zoomLevel: number): Vec2 => {
  // Pan is applied in SVG user units (viewBox space). Keep bounds generous so focus logic
  // isn't fighting this clamp.
  const xBounds = VIEWBOX_WIDTH * zoomLevel;
  const yBounds = VIEWBOX_HEIGHT * zoomLevel;
  return {
    x: clamp(nextPan.x, -xBounds, xBounds),
    y: clamp(nextPan.y, -yBounds, yBounds),
  };
};

const vectorLength = (vector: Vec2) => Math.hypot(vector.x, vector.y);

const normalizeVector = (vector: Vec2, fallback: Vec2 = { x: 0, y: -1 }): Vec2 => {
  const magnitude = vectorLength(vector);
  if (magnitude < 0.0001) return fallback;
  return { x: vector.x / magnitude, y: vector.y / magnitude };
};

const clampDisplacement = (value: Vec2, anchor: Vec2, maxDistance: number): Vec2 => {
  const delta = { x: value.x - anchor.x, y: value.y - anchor.y };
  const distance = vectorLength(delta);
  if (distance <= maxDistance) return value;
  const direction = normalizeVector(delta, { x: 1, y: 0 });
  return {
    x: anchor.x + direction.x * maxDistance,
    y: anchor.y + direction.y * maxDistance,
  };
};

const centerOfBox = (box: Box): Vec2 => ({
  x: (box.left + box.right) / 2,
  y: (box.top + box.bottom) / 2,
});

const boxesOverlap = (a: Box, b: Box, padding = 0) =>
  a.left - padding < b.right + padding &&
  a.right + padding > b.left - padding &&
  a.top - padding < b.bottom + padding &&
  a.bottom + padding > b.top - padding;

const toLabelBox = (node: LayoutNode, layout: LabelLayout): Box => ({
  left: node.position.x + layout.dx - layout.width / 2 - LAYOUT_CONFIG.labelHorizontalPadding,
  right: node.position.x + layout.dx + layout.width / 2 + LAYOUT_CONFIG.labelHorizontalPadding,
  top: node.position.y + layout.dy - LAYOUT_CONFIG.labelVerticalPadding,
  bottom: node.position.y + layout.dy + layout.height + LAYOUT_CONFIG.labelVerticalPadding,
});

const toCircleBox = (node: LayoutNode, padding = 0): Box => {
  const radius = nodeSize(node.group) / 2 + 4 + padding;
  return {
    left: node.position.x - radius,
    right: node.position.x + radius,
    top: node.position.y - radius,
    bottom: node.position.y + radius,
  };
};

const edgeControlPoint = (source: Vec2, target: Vec2): Vec2 => {
  const midX = (source.x + target.x) / 2;
  const midY = (source.y + target.y) / 2;
  return {
    x: midX + EDGE_CURVATURE * (target.y - source.y),
    y: midY - EDGE_CURVATURE * (target.x - source.x),
  };
};

const quadraticPoint = (p0: Vec2, p1: Vec2, p2: Vec2, t: number): Vec2 => {
  const invT = 1 - t;
  return {
    x: invT * invT * p0.x + 2 * invT * t * p1.x + t * t * p2.x,
    y: invT * invT * p0.y + 2 * invT * t * p1.y + t * t * p2.y,
  };
};

const curveIntersectsBox = (
  p0: Vec2,
  p1: Vec2,
  p2: Vec2,
  box: Box,
  padding = 0,
  samples = 24
) => {
  const left = box.left - padding;
  const right = box.right + padding;
  const top = box.top - padding;
  const bottom = box.bottom + padding;

  for (let i = 0; i <= samples; i += 1) {
    const t = i / samples;
    const point = quadraticPoint(p0, p1, p2, t);
    if (point.x >= left && point.x <= right && point.y >= top && point.y <= bottom) {
      return true;
    }
  }

  return false;
};

const closestPointOnCurve = (p0: Vec2, p1: Vec2, p2: Vec2, target: Vec2, samples = 24): Vec2 => {
  let closestPoint = p0;
  let closestDistance = Number.POSITIVE_INFINITY;

  for (let i = 0; i <= samples; i += 1) {
    const t = i / samples;
    const point = quadraticPoint(p0, p1, p2, t);
    const distance = vectorLength({ x: target.x - point.x, y: target.y - point.y });
    if (distance < closestDistance) {
      closestDistance = distance;
      closestPoint = point;
    }
  }

  return closestPoint;
};

const buildVisibleLayoutNodes = (
  activeDegree: string | null,
  spacing: number,
  isDesktop: boolean,
  activePreset?: ExpandedBranchPreset,
  expandAllBranches = false,
  allExpandedSpreadMultiplier = ALL_EXPANDED_SUB_SPREAD_MULTIPLIER
): LayoutNode[] => {
  const nodes = nodesData
    .filter(
      (node) =>
        expandAllBranches ||
        coreIds.has(node.id) ||
        (activeDegree ? node.parentId === activeDegree : false)
    )
    .map((node) => ({
      ...node,
      position: { ...node.position },
      anchorPosition: { ...node.position },
      isExpandedSub: expandAllBranches ? node.group === "sub" : activeDegree ? node.parentId === activeDegree : false,
    }));

  if (expandAllBranches) {
    const nodeById = new Map(nodes.map((node) => [node.id, node]));
    nodes.forEach((node) => {
      if (node.group !== "sub" || !node.parentId) return;
      const parentNode = nodeById.get(node.parentId);
      if (!parentNode) return;

      const baseOffset = {
        x: node.position.x - parentNode.position.x,
        y: node.position.y - parentNode.position.y,
      };
      const spreadOffset = {
        x: baseOffset.x * allExpandedSpreadMultiplier,
        y: baseOffset.y * allExpandedSpreadMultiplier,
      };

      node.position = {
        x: parentNode.position.x + spreadOffset.x,
        y: parentNode.position.y + spreadOffset.y,
      };
      node.anchorPosition = { ...node.position };
    });
    return nodes;
  }

  if (!activeDegree) return nodes;

  const activeNode = nodes.find((node) => node.id === activeDegree);
  if (!activeNode) return nodes;

  const subNodes = nodes.filter((node) => node.isExpandedSub);
  const coreNode = nodesData.find((node) => node.id === "core-ms");
  let awayAngle = -Math.PI / 2;

  if (activeDegree !== "core-ms" && coreNode) {
    awayAngle = Math.atan2(
      activeNode.position.y - coreNode.position.y,
      activeNode.position.x - coreNode.position.x
    );
  }

  const candidateAngles = subNodes
    .map((_, index) => awayAngle + (index - (subNodes.length - 1) / 2) * LAYOUT_CONFIG.spreadRadians)
    .map((angle) => ({ angle, yDirection: Math.sin(angle) }))
    .sort((a, b) => a.yDirection - b.yDirection);

  const orderedSubNodes = [...subNodes].sort((a, b) => a.anchorPosition.y - b.anchorPosition.y);

  orderedSubNodes.forEach((node, index) => {
    const angle = candidateAngles[index]?.angle ?? awayAngle;
    const nextPosition = {
      x: activeNode.position.x + Math.cos(angle) * spacing,
      y: activeNode.position.y + Math.sin(angle) * spacing,
    };
    node.position = nextPosition;
    node.anchorPosition = { ...nextPosition };
  });

  if (isDesktop) {
    if (activePreset?.subNodeOffsets) {
      subNodes.forEach((node) => {
        const offset = activePreset.subNodeOffsets?.[node.id];
        if (!offset) return;
        const nextPosition = {
          x: activeNode.position.x + offset.x,
          y: activeNode.position.y + offset.y,
        };
        node.position = nextPosition;
        node.anchorPosition = { ...nextPosition };
      });
    }
  }

  return nodes;
};

const buildBaseLabelLayouts = (
  nodes: LayoutNode[],
  activeDegree: string | null,
  isDesktop: boolean,
  activePreset?: ExpandedBranchPreset,
  expandAllBranches = false
): Map<string, LabelLayout> => {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const layouts = new Map<string, LabelLayout>();

  const getSubLabelLines = (label: string) => {
    const words = label.split(" ");
    if (words.length < 2 || label.length <= 14) return [label];
    const splitIndex = Math.ceil(words.length / 2);
    return [words.slice(0, splitIndex).join(" "), words.slice(splitIndex).join(" ")];
  };

  nodes.forEach((node) => {
    const size = nodeSize(node.group);
    const lines =
      node.labelLines ??
      (node.group === "sub" ? getSubLabelLines(node.label) : [node.label]);
    const isCore = node.id === "core-ms";
    const fontSize = isCore ? 12 : node.group === "degree" ? 12 : 9;
    const lineHeight = isCore ? 14 : node.group === "degree" ? 14 : 12;
    const width = Math.max(...lines.map((line) => line.length)) * (fontSize * 0.8);
    const height = lines.length * lineHeight + 10;
    const defaultLabelOffset = isCore
      ? -(size / 2 + lineHeight * (lines.length - 1))
      : size / 2 + (node.id === "degree-ba" ? 62 : node.group === "degree" ? 52 : 44);
    const labelOffset =
      isDesktop && activeDegree === node.id && node.group === "degree"
        ? defaultLabelOffset + 36
        : defaultLabelOffset;
    const allModeDegreeLabelOffset = expandAllBranches && node.group === "degree" ? 10 : 0;

    let dx = 0;
    let dy = labelOffset + allModeDegreeLabelOffset - height + 4;
    let maxDisplacement: number | undefined;

    if (expandAllBranches && isCore) {
      // Keep the central program label clear of top-row sub labels in ALL mode.
      dy = -(size / 2 + 60);
    }

    if (isDesktop && activeDegree === node.id && activePreset?.activeLabelOffset) {
      dx = activePreset.activeLabelOffset.x;
      dy = activePreset.activeLabelOffset.y;
      if (typeof activePreset.activeLabelMaxDisplacement === "number") {
        maxDisplacement = activePreset.activeLabelMaxDisplacement;
      }
    }

    if ((node.isExpandedSub && activeDegree) || (expandAllBranches && node.group === "sub")) {
      const allExpandedSubLabelPreset = expandAllBranches
        ? ALL_EXPANDED_SUB_LABEL_PRESETS[node.id]
        : undefined;
      const subLabelPreset = allExpandedSubLabelPreset ?? activePreset?.subLabelOffsets?.[node.id];
      if (subLabelPreset) {
        dx = subLabelPreset.x;
        dy = subLabelPreset.y;
        if (typeof activePreset?.subLabelMaxDisplacement === "number") {
          maxDisplacement = activePreset.subLabelMaxDisplacement;
        }
      } else {
        const parentNode = node.parentId ? nodeById.get(node.parentId) : undefined;
        if (parentNode) {
          const angle = Math.atan2(
            node.position.y - parentNode.position.y,
            node.position.x - parentNode.position.x
          );
          const sideShiftBase = expandAllBranches ? 52 : 38;
          const sideShiftRatio = expandAllBranches ? 0.5 : 0.35;
          const sideShift = Math.cos(angle) * Math.min(sideShiftBase, width * sideShiftRatio);
          const belowOffset = size / 2 + (expandAllBranches ? 20 : 16);
          const aboveOffset = -(size / 2 + height + (expandAllBranches ? 16 : 12));
          const directionalY = Math.sin(angle);
          const shouldPlaceAbove = expandAllBranches
            ? directionalY < -0.2 || node.position.y > VIEWBOX_HEIGHT - 130
            : directionalY > 0.35 || node.position.y > VIEWBOX_HEIGHT - 130;

          dx = sideShift;
          dy = shouldPlaceAbove ? aboveOffset : belowOffset;
        }
      }
    }

    layouts.set(node.id, {
      dx,
      dy,
      width,
      height,
      lineHeight,
      fontSize,
      lines,
      anchorDx: dx,
      anchorDy: dy,
      maxDisplacement,
    });
  });

  return layouts;
};

const applySimpleLabelPush = (
  nodes: LayoutNode[],
  activeDegree: string | null,
  labelLayouts: Map<string, LabelLayout>
) => {
  if (!activeDegree) return;
  const activeNode = nodes.find((node) => node.id === activeDegree);
  if (!activeNode) return;

  const activeSubBoxes = nodes
    .filter((node) => node.isExpandedSub)
    .map((node) => toLabelBox(node, labelLayouts.get(node.id)!));

  nodes.forEach((node) => {
    if (node.isExpandedSub || node.id === activeDegree) return;
    const layout = labelLayouts.get(node.id);
    if (!layout) return;

    let attempts = 0;
    while (attempts < 6) {
      const labelBox = toLabelBox(node, layout);
      const collides = activeSubBoxes.some((subBox) => boxesOverlap(labelBox, subBox));
      if (!collides) break;

      const direction = normalizeVector(
        {
          x: node.position.x - activeNode.position.x,
          y: node.position.y - activeNode.position.y,
        },
        { x: 0, y: -1 }
      );
      layout.dx += direction.x * 18;
      layout.dy += direction.y * 18;
      attempts += 1;
    }
  });
};

const resolveSubNodeCircleCollisions = (nodes: LayoutNode[]) => {
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];
      if (!nodeA.isExpandedSub && !nodeB.isExpandedSub) continue;

      const radiusA = nodeSize(nodeA.group) / 2 + 4 + LAYOUT_CONFIG.circleCollisionPadding;
      const radiusB = nodeSize(nodeB.group) / 2 + 4 + LAYOUT_CONFIG.circleCollisionPadding;
      const minDistance = radiusA + radiusB;

      const delta = {
        x: nodeA.position.x - nodeB.position.x,
        y: nodeA.position.y - nodeB.position.y,
      };
      const distance = vectorLength(delta);
      if (distance >= minDistance) continue;

      const direction = normalizeVector(delta, { x: 1, y: 0 });
      const pushDistance = minDistance - distance + 0.5;

      if (nodeA.isExpandedSub && nodeB.isExpandedSub) {
        nodeA.position.x += direction.x * (pushDistance / 2);
        nodeA.position.y += direction.y * (pushDistance / 2);
        nodeB.position.x -= direction.x * (pushDistance / 2);
        nodeB.position.y -= direction.y * (pushDistance / 2);
        continue;
      }

      if (nodeA.isExpandedSub) {
        nodeA.position.x += direction.x * pushDistance;
        nodeA.position.y += direction.y * pushDistance;
      } else if (nodeB.isExpandedSub) {
        nodeB.position.x -= direction.x * pushDistance;
        nodeB.position.y -= direction.y * pushDistance;
      }
    }
  }
};

const resolveLabelLabelCollisions = (
  nodes: LayoutNode[],
  labelLayouts: Map<string, LabelLayout>
) => {
  for (let i = 0; i < nodes.length; i += 1) {
    const nodeA = nodes[i];
    const layoutA = labelLayouts.get(nodeA.id);
    if (!layoutA) continue;

    for (let j = i + 1; j < nodes.length; j += 1) {
      const nodeB = nodes[j];
      const layoutB = labelLayouts.get(nodeB.id);
      if (!layoutB) continue;

      const boxA = toLabelBox(nodeA, layoutA);
      const boxB = toLabelBox(nodeB, layoutB);
      if (!boxesOverlap(boxA, boxB, LAYOUT_CONFIG.labelCollisionPadding)) continue;

      const overlapX = Math.min(boxA.right - boxB.left, boxB.right - boxA.left);
      const overlapY = Math.min(boxA.bottom - boxB.top, boxB.bottom - boxA.top);
      const centerA = centerOfBox(boxA);
      const centerB = centerOfBox(boxB);

      if (overlapX < overlapY) {
        const direction = centerA.x <= centerB.x ? -1 : 1;
        const push = overlapX / 2 + LAYOUT_CONFIG.labelCollisionPadding;
        layoutA.dx += direction * push;
        layoutB.dx -= direction * push;
      } else {
        const direction = centerA.y <= centerB.y ? -1 : 1;
        const push = overlapY / 2 + LAYOUT_CONFIG.labelCollisionPadding;
        layoutA.dy += direction * push;
        layoutB.dy -= direction * push;
      }
    }
  }
};

const resolveLabelCircleCollisions = (
  nodes: LayoutNode[],
  labelLayouts: Map<string, LabelLayout>
) => {
  nodes.forEach((labelNode) => {
    const layout = labelLayouts.get(labelNode.id);
    if (!layout) return;

    let currentBox = toLabelBox(labelNode, layout);
    nodes.forEach((circleNode) => {
      const circlePadding =
        circleNode.id === labelNode.id
          ? LAYOUT_CONFIG.circleCollisionPadding + 14
          : LAYOUT_CONFIG.circleCollisionPadding;
      const circleBox = toCircleBox(circleNode, circlePadding);
      if (!boxesOverlap(currentBox, circleBox)) return;

      const overlapX = Math.min(currentBox.right - circleBox.left, circleBox.right - currentBox.left);
      const overlapY = Math.min(currentBox.bottom - circleBox.top, circleBox.bottom - currentBox.top);
      const labelCenter = centerOfBox(currentBox);
      const direction = normalizeVector(
        {
          x: labelCenter.x - circleNode.position.x,
          y: labelCenter.y - circleNode.position.y,
        },
        { x: 0, y: -1 }
      );
      const push = Math.min(overlapX, overlapY) + 2;
      layout.dx += direction.x * push;
      layout.dy += direction.y * push;
      currentBox = toLabelBox(labelNode, layout);
    });
  });
};

const resolveLabelEdgeCurveCollisions = (
  nodes: LayoutNode[],
  labelLayouts: Map<string, LabelLayout>,
  activeDegree: string
) => {
  const activeNode = nodes.find((node) => node.id === activeDegree);
  if (!activeNode) return;

  const activeSubNodes = nodes.filter((node) => node.isExpandedSub && node.parentId === activeDegree);
  if (activeSubNodes.length === 0) return;

  const labelNodes = nodes.filter((node) => node.id === activeDegree || node.isExpandedSub);
  activeSubNodes.forEach((subNode) => {
    const controlPoint = edgeControlPoint(activeNode.position, subNode.position);

    labelNodes.forEach((labelNode) => {
      const layout = labelLayouts.get(labelNode.id);
      if (!layout) return;

      const labelBox = toLabelBox(labelNode, layout);
      if (!curveIntersectsBox(activeNode.position, controlPoint, subNode.position, labelBox, 5)) {
        return;
      }

      const center = centerOfBox(labelBox);
      const closestPoint = closestPointOnCurve(
        activeNode.position,
        controlPoint,
        subNode.position,
        center
      );
      const fallback = {
        x: -(subNode.position.y - activeNode.position.y),
        y: subNode.position.x - activeNode.position.x,
      };
      const away = normalizeVector(
        { x: center.x - closestPoint.x, y: center.y - closestPoint.y },
        fallback
      );
      const push = labelNode.isExpandedSub ? 12 : 10;
      layout.dx += away.x * push;
      layout.dy += away.y * push;
    });
  });
};

const clampLabelToBounds = (node: LayoutNode, layout: LabelLayout) => {
  // Allow a tiny extra left range for the AA top label so it can clear its node/curve.
  const margin = node.id === "sub-aa-1" ? 0 : LAYOUT_CONFIG.viewBoxMargin;
  const box = toLabelBox(node, layout);

  if (box.left < margin) {
    layout.dx += margin - box.left;
  }
  if (box.right > VIEWBOX_WIDTH - margin) {
    layout.dx -= box.right - (VIEWBOX_WIDTH - margin);
  }
  if (box.top < margin) {
    layout.dy += margin - box.top;
  }
  if (box.bottom > VIEWBOX_HEIGHT - margin) {
    layout.dy -= box.bottom - (VIEWBOX_HEIGHT - margin);
  }
};

const computeLabelBoxes = (
  nodes: LayoutNode[],
  labelLayouts: Map<string, LabelLayout>
): Map<string, Box> => {
  const boxes = new Map<string, Box>();
  nodes.forEach((node) => {
    const layout = labelLayouts.get(node.id);
    if (!layout) return;
    boxes.set(node.id, toLabelBox(node, layout));
  });
  return boxes;
};

const computeFocusBounds = (
  activeDegree: string | null,
  nodes: LayoutNode[],
  labelLayouts: Map<string, LabelLayout>,
  activePreset?: ExpandedBranchPreset
): Box | null => {
  if (!activeDegree) return null;
  const focusNodes = nodes.filter((node) => node.id === activeDegree || node.isExpandedSub);
  if (focusNodes.length === 0) return null;

  let bounds: Box | null = null;
  const includeBox = (box: Box) => {
    if (!bounds) {
      bounds = { ...box };
      return;
    }
    bounds.left = Math.min(bounds.left, box.left);
    bounds.right = Math.max(bounds.right, box.right);
    bounds.top = Math.min(bounds.top, box.top);
    bounds.bottom = Math.max(bounds.bottom, box.bottom);
  };

  focusNodes.forEach((node) => {
    // Include glow + animation breathing room so circles do not look clipped at edges.
    includeBox(toCircleBox(node, 16));
    const labelLayout = labelLayouts.get(node.id);
    if (!labelLayout) return;
    if (activePreset?.excludeActiveLabelInFocus && node.id === activeDegree) return;
    includeBox(toLabelBox(node, labelLayout));
  });

  return bounds;
};

const getLayoutMetrics = (
  nodes: LayoutNode[],
  labelLayouts: Map<string, LabelLayout>
): LayoutMetrics => {
  const labelBoxes = computeLabelBoxes(nodes, labelLayouts);
  const boxes = nodes.map((node) => ({ id: node.id, box: labelBoxes.get(node.id)! }));

  let labelOverlaps = 0;
  for (let i = 0; i < boxes.length; i += 1) {
    for (let j = i + 1; j < boxes.length; j += 1) {
      if (boxesOverlap(boxes[i].box, boxes[j].box, LAYOUT_CONFIG.labelCollisionPadding)) {
        labelOverlaps += 1;
      }
    }
  }

  let circleOverlaps = 0;
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];
      if (!nodeA.isExpandedSub && !nodeB.isExpandedSub) continue;

      const radiusA = nodeSize(nodeA.group) / 2 + 4 + LAYOUT_CONFIG.circleCollisionPadding;
      const radiusB = nodeSize(nodeB.group) / 2 + 4 + LAYOUT_CONFIG.circleCollisionPadding;
      const minDistance = radiusA + radiusB;
      const distance = vectorLength({
        x: nodeA.position.x - nodeB.position.x,
        y: nodeA.position.y - nodeB.position.y,
      });

      if (distance < minDistance) circleOverlaps += 1;
    }
  }

  let outOfBounds = 0;
  nodes.forEach((node) => {
    const box = labelBoxes.get(node.id);
    if (!box) return;
    const margin = LAYOUT_CONFIG.viewBoxMargin;
    if (
      box.left < margin ||
      box.right > VIEWBOX_WIDTH - margin ||
      box.top < margin ||
      box.bottom > VIEWBOX_HEIGHT - margin
    ) {
      outOfBounds += 1;
    }
  });

  let displacement = 0;
  nodes.forEach((node) => {
    if (!node.isExpandedSub) return;
    displacement += vectorLength({
      x: node.position.x - node.anchorPosition.x,
      y: node.position.y - node.anchorPosition.y,
    });
  });
  labelLayouts.forEach((layout) => {
    displacement += vectorLength({
      x: layout.dx - layout.anchorDx,
      y: layout.dy - layout.anchorDy,
    });
  });

  return {
    labelOverlaps,
    circleOverlaps,
    outOfBounds,
    displacement,
    score: labelOverlaps * 1000 + circleOverlaps * 850 + outOfBounds * 650 + displacement,
  };
};

const solveDesktopLayout = (
  activeDegree: string,
  spacing: number,
  activePreset?: ExpandedBranchPreset
): SolverResult => {
  const lockSubNodePositions = !!activePreset?.lockSubNodePositions;
  const lockSubLabelPositions = !!activePreset?.lockSubLabelPositions;
  const nodes = buildVisibleLayoutNodes(activeDegree, spacing, true, activePreset);
  const labelLayouts = buildBaseLabelLayouts(nodes, activeDegree, true, activePreset, false);

  for (let iteration = 0; iteration < LAYOUT_CONFIG.iterations; iteration += 1) {
    if (!lockSubNodePositions) {
      resolveSubNodeCircleCollisions(nodes);
    }
    if (!lockSubLabelPositions) {
      resolveLabelLabelCollisions(nodes, labelLayouts);
      resolveLabelCircleCollisions(nodes, labelLayouts);
      resolveLabelEdgeCurveCollisions(nodes, labelLayouts, activeDegree);
    }

    if (!lockSubNodePositions) {
      nodes.forEach((node) => {
        if (!node.isExpandedSub) return;
        node.position.x += (node.anchorPosition.x - node.position.x) * LAYOUT_CONFIG.nodeSpring;
        node.position.y += (node.anchorPosition.y - node.position.y) * LAYOUT_CONFIG.nodeSpring;
        const clampedPosition = clampDisplacement(
          node.position,
          node.anchorPosition,
          LAYOUT_CONFIG.subMaxDisplacement
        );
        node.position.x = clampedPosition.x;
        node.position.y = clampedPosition.y;
      });
    }

    nodes.forEach((node) => {
      const layout = labelLayouts.get(node.id);
      if (!layout) return;

      const lockCurrentLabel =
        node.isExpandedSub && lockSubLabelPositions && typeof layout.maxDisplacement === "number";
      const lockActiveLabel =
        node.id === activeDegree && typeof layout.maxDisplacement === "number" && layout.maxDisplacement === 0;

      if (!lockCurrentLabel && !lockActiveLabel) {
        layout.dx += (layout.anchorDx - layout.dx) * LAYOUT_CONFIG.labelSpring;
        layout.dy += (layout.anchorDy - layout.dy) * LAYOUT_CONFIG.labelSpring;
      } else {
        layout.dx = layout.anchorDx;
        layout.dy = layout.anchorDy;
      }

      const maxDisplacement = layout.maxDisplacement ?? LAYOUT_CONFIG.labelMaxDisplacement;
      if (maxDisplacement === 0) {
        layout.dx = layout.anchorDx;
        layout.dy = layout.anchorDy;
      } else {
        const clampedLayout = clampDisplacement(
          { x: layout.dx, y: layout.dy },
          { x: layout.anchorDx, y: layout.anchorDy },
          maxDisplacement
        );
        layout.dx = clampedLayout.x;
        layout.dy = clampedLayout.y;
      }
      clampLabelToBounds(node, layout);
    });
  }

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const labelBoxes = computeLabelBoxes(nodes, labelLayouts);
  const focusBounds = computeFocusBounds(activeDegree, nodes, labelLayouts, activePreset);
  const metrics = getLayoutMetrics(nodes, labelLayouts);

  return {
    nodes,
    nodeById,
    labelLayouts,
    labelBoxes,
    focusBounds,
    metrics,
  };
};

const computeGraphLayout = (
  activeDegree: string | null,
  isDesktop: boolean,
  activePreset?: ExpandedBranchPreset,
  expandAllBranches = false,
  allExpandedOverrides?: AllExpandedLayoutOverrides
): GraphLayoutResult => {
  if (expandAllBranches) {
    let bestLayout:
      | {
          nodes: LayoutNode[];
          labelLayouts: Map<string, LabelLayout>;
          metrics: LayoutMetrics;
        }
      | null = null;

    for (
      let attempt = 0;
      attempt <= ALL_EXPANDED_FALLBACK_SPREAD_ATTEMPTS;
      attempt += 1
    ) {
      const spreadMultiplier = ALL_EXPANDED_SUB_SPREAD_MULTIPLIER + attempt * ALL_EXPANDED_SPREAD_STEP;
      const nodes = buildVisibleLayoutNodes(
        null,
        LAYOUT_CONFIG.baseSubSpacing,
        isDesktop,
        undefined,
        true,
        spreadMultiplier
      );
      if (allExpandedOverrides?.nodeOffsets) {
        nodes.forEach((node) => {
          const offset = allExpandedOverrides.nodeOffsets?.[node.id];
          if (!offset) return;
          node.position.x += offset.x;
          node.position.y += offset.y;
          node.anchorPosition.x += offset.x;
          node.anchorPosition.y += offset.y;
        });
      }

      const labelLayouts = buildBaseLabelLayouts(nodes, null, isDesktop, undefined, true);
      if (allExpandedOverrides?.labelOffsets) {
        labelLayouts.forEach((layout, nodeId) => {
          const offset = allExpandedOverrides.labelOffsets?.[nodeId];
          if (!offset) return;
          layout.dx += offset.x;
          layout.dy += offset.y;
          layout.anchorDx += offset.x;
          layout.anchorDy += offset.y;
        });
      }

      for (let iteration = 0; iteration < ALL_EXPANDED_LAYOUT_ITERATIONS; iteration += 1) {
        resolveSubNodeCircleCollisions(nodes);
        resolveLabelLabelCollisions(nodes, labelLayouts);
        resolveLabelCircleCollisions(nodes, labelLayouts);
        resolveLabelEdgeCurveCollisions(nodes, labelLayouts, "core-ms");
        resolveLabelEdgeCurveCollisions(nodes, labelLayouts, "degree-aa");
        resolveLabelEdgeCurveCollisions(nodes, labelLayouts, "degree-ba");
        resolveLabelEdgeCurveCollisions(nodes, labelLayouts, "degree-bs");

        nodes.forEach((node) => {
          if (!node.isExpandedSub) return;
          node.position.x += (node.anchorPosition.x - node.position.x) * ALL_EXPANDED_NODE_SPRING;
          node.position.y += (node.anchorPosition.y - node.position.y) * ALL_EXPANDED_NODE_SPRING;
          const clampedPosition = clampDisplacement(
            node.position,
            node.anchorPosition,
            ALL_EXPANDED_SUB_MAX_DISPLACEMENT
          );
          node.position.x = clampedPosition.x;
          node.position.y = clampedPosition.y;
        });

        nodes.forEach((node) => {
          const layout = labelLayouts.get(node.id);
          if (!layout) return;

          layout.dx += (layout.anchorDx - layout.dx) * ALL_EXPANDED_LABEL_SPRING;
          layout.dy += (layout.anchorDy - layout.dy) * ALL_EXPANDED_LABEL_SPRING;
          const clampedLayout = clampDisplacement(
            { x: layout.dx, y: layout.dy },
            { x: layout.anchorDx, y: layout.anchorDy },
            ALL_EXPANDED_LABEL_MAX_DISPLACEMENT
          );
          layout.dx = clampedLayout.x;
          layout.dy = clampedLayout.y;
          clampLabelToBounds(node, layout);
        });
      }

      // Final settle pass: resolve lingering label overlaps without spring pull-back.
      for (let settleIteration = 0; settleIteration < 14; settleIteration += 1) {
        resolveLabelLabelCollisions(nodes, labelLayouts);
        resolveLabelCircleCollisions(nodes, labelLayouts);
        resolveLabelEdgeCurveCollisions(nodes, labelLayouts, "core-ms");
        resolveLabelEdgeCurveCollisions(nodes, labelLayouts, "degree-aa");
        resolveLabelEdgeCurveCollisions(nodes, labelLayouts, "degree-ba");
        resolveLabelEdgeCurveCollisions(nodes, labelLayouts, "degree-bs");

        nodes.forEach((node) => {
          const layout = labelLayouts.get(node.id);
          if (!layout) return;
          const clampedLayout = clampDisplacement(
            { x: layout.dx, y: layout.dy },
            { x: layout.anchorDx, y: layout.anchorDy },
            ALL_EXPANDED_LABEL_MAX_DISPLACEMENT
          );
          layout.dx = clampedLayout.x;
          layout.dy = clampedLayout.y;
          clampLabelToBounds(node, layout);
        });
      }

      const metrics = getLayoutMetrics(nodes, labelLayouts);
      const isBetterCandidate =
        !bestLayout ||
        metrics.labelOverlaps < bestLayout.metrics.labelOverlaps ||
        (metrics.labelOverlaps === bestLayout.metrics.labelOverlaps &&
          metrics.circleOverlaps < bestLayout.metrics.circleOverlaps) ||
        (metrics.labelOverlaps === bestLayout.metrics.labelOverlaps &&
          metrics.circleOverlaps === bestLayout.metrics.circleOverlaps &&
          metrics.outOfBounds < bestLayout.metrics.outOfBounds) ||
        (metrics.labelOverlaps === bestLayout.metrics.labelOverlaps &&
          metrics.circleOverlaps === bestLayout.metrics.circleOverlaps &&
          metrics.outOfBounds === bestLayout.metrics.outOfBounds &&
          metrics.score < bestLayout.metrics.score);

      if (isBetterCandidate) {
        bestLayout = {
          nodes: nodes.map((node) => ({
            ...node,
            position: { ...node.position },
            anchorPosition: { ...node.anchorPosition },
          })),
          labelLayouts: new Map(
            Array.from(labelLayouts.entries()).map(([nodeId, layout]) => [
              nodeId,
              { ...layout },
            ])
          ),
          metrics,
        };
      }

      if (
        metrics.labelOverlaps === 0 &&
        metrics.circleOverlaps === 0 &&
        metrics.outOfBounds === 0
      ) {
        break;
      }
    }

    if (bestLayout) {
      const nodeById = new Map(bestLayout.nodes.map((node) => [node.id, node]));
      const labelBoxes = computeLabelBoxes(bestLayout.nodes, bestLayout.labelLayouts);
      return {
        nodes: bestLayout.nodes,
        nodeById,
        labelLayouts: bestLayout.labelLayouts,
        labelBoxes,
        focusBounds: null,
      };
    }
  }

  if (activeDegree && isDesktop) {
    let bestLayout: SolverResult | null = null;

    for (let attempt = 0; attempt <= LAYOUT_CONFIG.fallbackSpacingAttempts; attempt += 1) {
      const spacing = LAYOUT_CONFIG.baseSubSpacing + attempt * LAYOUT_CONFIG.fallbackSpacingStep;
      const candidate = solveDesktopLayout(activeDegree, spacing, activePreset);
      if (!bestLayout || candidate.metrics.score < bestLayout.metrics.score) {
        bestLayout = candidate;
      }

      if (
        candidate.metrics.labelOverlaps === 0 &&
        candidate.metrics.circleOverlaps === 0 &&
        candidate.metrics.outOfBounds === 0
      ) {
        bestLayout = candidate;
        break;
      }
    }

    if (bestLayout) {
      return {
        nodes: bestLayout.nodes,
        nodeById: bestLayout.nodeById,
        labelLayouts: bestLayout.labelLayouts,
        labelBoxes: bestLayout.labelBoxes,
        focusBounds: bestLayout.focusBounds,
      };
    }
  }

  const nodes = buildVisibleLayoutNodes(activeDegree, LAYOUT_CONFIG.baseSubSpacing, isDesktop, activePreset, false);
  const labelLayouts = buildBaseLabelLayouts(nodes, activeDegree, isDesktop, activePreset, false);
  applySimpleLabelPush(nodes, activeDegree, labelLayouts);

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const labelBoxes = computeLabelBoxes(nodes, labelLayouts);
  const focusBounds = computeFocusBounds(activeDegree, nodes, labelLayouts, activePreset);

  return { nodes, nodeById, labelLayouts, labelBoxes, focusBounds };
};

type DegreeGraphProps = {
  variant?: "card" | "background";
  className?: string;
};

export default function DegreeGraph({ variant = "card", className }: DegreeGraphProps) {
  const [activeDegree, setActiveDegree] = useState<string | null>(null);
  const [expandAllBranches, setExpandAllBranches] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [layoutEditorAccessEnabled] = useState(false);
  const [layoutEditorEnabled, setLayoutEditorEnabled] = useState(false);
  const [layoutEditorPanelCollapsed, setLayoutEditorPanelCollapsed] = useState(true);
  const [editorSelection, setEditorSelection] = useState<LayoutEditorTarget | null>(null);
  const [editorDrag, setEditorDrag] = useState<LayoutEditorDragState | null>(null);
  const [copyNotice, setCopyNotice] = useState<string | null>(null);
  const [lastEditedDegree, setLastEditedDegree] = useState<string | null>(null);
  const [presetOverrides, setPresetOverrides] = useState<Record<string, ExpandedBranchPreset>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(LAYOUT_EDITOR_STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return {};
      return parsed as Record<string, ExpandedBranchPreset>;
    } catch {
      return {};
    }
  });
  const [allExpandedOverrides, setAllExpandedOverrides] = useState<AllExpandedLayoutOverrides>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(LAYOUT_EDITOR_ALL_STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return {};
      return parsed as AllExpandedLayoutOverrides;
    } catch {
      return {};
    }
  });
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(min-width: ${LAYOUT_CONFIG.desktopMinWidth}px)`).matches;
  });

  const activePreset = useMemo(
    () => getMergedExpandedPreset(activeDegree, presetOverrides),
    [activeDegree, presetOverrides]
  );

  const toggleLayoutEditor = useCallback(() => {
    if (!layoutEditorAccessEnabled) return;
    setLayoutEditorEnabled((current) => {
      const next = !current;
      if (!next) {
        setEditorDrag(null);
        setEditorSelection(null);
      } else {
        setLayoutEditorPanelCollapsed(true);
      }
      return next;
    });
  }, [layoutEditorAccessEnabled]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(`(min-width: ${LAYOUT_CONFIG.desktopMinWidth}px)`);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!layoutEditorAccessEnabled) return;
    window.localStorage.setItem(LAYOUT_EDITOR_ACCESS_KEY, "1");
  }, [layoutEditorAccessEnabled]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LAYOUT_EDITOR_STORAGE_KEY, JSON.stringify(presetOverrides));
  }, [presetOverrides]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LAYOUT_EDITOR_ALL_STORAGE_KEY, JSON.stringify(allExpandedOverrides));
  }, [allExpandedOverrides]);

  useEffect(() => {
    if (!copyNotice) return;
    const timeoutId = window.setTimeout(() => setCopyNotice(null), 1600);
    return () => window.clearTimeout(timeoutId);
  }, [copyNotice]);

  useEffect(() => {
    if (!layoutEditorAccessEnabled) return;
    const handleEditorToggle = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;

      if (
        event.key.toLowerCase() === "e" &&
        (event.shiftKey || event.altKey)
      ) {
        event.preventDefault();
        toggleLayoutEditor();
        return;
      }

      if (layoutEditorEnabled && event.shiftKey && event.key.toLowerCase() === "h") {
        event.preventDefault();
        setLayoutEditorPanelCollapsed((current) => !current);
      }
    };

    window.addEventListener("keydown", handleEditorToggle);
    return () => window.removeEventListener("keydown", handleEditorToggle);
  }, [layoutEditorAccessEnabled, layoutEditorEnabled, toggleLayoutEditor]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (layoutEditorEnabled) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }, [layoutEditorEnabled, pan]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan(clampPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }, zoom));
  }, [isDragging, dragStart, zoom]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleZoom = (delta: number) => {
    setZoom((prev) => {
      const nextZoom = clamp(prev + delta * 0.1, 0.5, 2);
      setPan((currentPan) => clampPan(currentPan, nextZoom));
      return nextZoom;
    });
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const closeActiveBranch = useCallback(() => {
    setActiveDegree(null);
    setExpandAllBranches(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const toggleExpandAllBranches = useCallback(() => {
    setHoveredNode(null);
    setActiveDegree(null);
    setEditorSelection(null);
    setEditorDrag(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setExpandAllBranches((current) => !current);
  }, []);

  const handleNodeHover = useCallback((node: GraphNode | null, event?: React.MouseEvent) => {
    setHoveredNode(node);
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const containerRect = event.currentTarget.closest('div')?.getBoundingClientRect();
      if (containerRect) {
        // Position tooltip relative to viewport, ensuring it stays within bounds
        const tooltipWidth = 200; // Approximate tooltip width
        const tooltipHeight = 100; // Approximate tooltip height
        const padding = 20;
        
        // Default position above the node
        let x = rect.left + rect.width / 2;
        let y = rect.top - tooltipHeight - padding;

        // Keep tooltip within horizontal bounds
        x = Math.min(Math.max(x, containerRect.left + tooltipWidth/2 + padding), 
                    containerRect.right - tooltipWidth/2 - padding);

        // If tooltip would go above viewport, show it below the node instead
        if (y < containerRect.top + padding) {
          y = rect.bottom + padding;
        }

        // If tooltip would go below viewport, show it above the node
        if (y + tooltipHeight > containerRect.bottom - padding) {
          y = rect.top - tooltipHeight - padding;
        }

        setMousePos({ x, y });
      }
    }
  }, []);

  const graphLayout = useMemo(
    () =>
      computeGraphLayout(
        activeDegree,
        isDesktop,
        activePreset,
        expandAllBranches,
        layoutEditorAccessEnabled ? allExpandedOverrides : undefined
      ),
    [
      activeDegree,
      isDesktop,
      activePreset,
      expandAllBranches,
      allExpandedOverrides,
      layoutEditorAccessEnabled,
    ]
  );
  const visibleNodes = graphLayout.nodes;
  const visibleNodeById = graphLayout.nodeById;
  const labelLayouts = graphLayout.labelLayouts;
  const activeLayoutNode = activeDegree ? visibleNodeById.get(activeDegree) : undefined;
  const zoomScaleMultiplier = 1.3;
  const allExpandedRenderScale = zoom * ALL_EXPANDED_ZOOM_MULTIPLIER;
  const collapsedRenderScale = zoom * COLLAPSED_ZOOM_MULTIPLIER;
  const overviewRenderScale = expandAllBranches ? allExpandedRenderScale : collapsedRenderScale;
  const overviewCenterBias = expandAllBranches ? ALL_EXPANDED_CENTER_BIAS : COLLAPSED_CENTER_BIAS;
  const collapsedGraphBounds = useMemo<Box | null>(() => {
    if (activeDegree) return null;

    let bounds: Box | null = null;
    const includeBox = (box: Box) => {
      if (!bounds) {
        bounds = { ...box };
        return;
      }
      bounds.left = Math.min(bounds.left, box.left);
      bounds.right = Math.max(bounds.right, box.right);
      bounds.top = Math.min(bounds.top, box.top);
      bounds.bottom = Math.max(bounds.bottom, box.bottom);
    };

    visibleNodes.forEach((node) => {
      includeBox(toCircleBox(node, 10));
      const layout = labelLayouts.get(node.id);
      if (!layout) return;
      includeBox(toLabelBox(node, layout));
    });

    return bounds;
  }, [activeDegree, labelLayouts, visibleNodes]);
  const collapsedRenderOffset = useMemo<Vec2>(() => {
    if (!collapsedGraphBounds) return { x: 0, y: 0 };
    const center = centerOfBox(collapsedGraphBounds);
    const targetCenter = {
      x: VIEWBOX_WIDTH / 2 + overviewCenterBias.x,
      y: VIEWBOX_HEIGHT / 2 + overviewCenterBias.y,
    };

    // transform order is translate(...) scale(...), so final position is:
    // p' = scale * p + translate. Account for scale when centering.
    return {
      x: targetCenter.x - center.x * overviewRenderScale,
      y: targetCenter.y - center.y * overviewRenderScale,
    };
  }, [collapsedGraphBounds, overviewCenterBias, overviewRenderScale]);

  const computeFocusPan = useCallback(
    (
      focusPoint: Vec2,
      zoomFactor: number,
      focusPanBias: Vec2,
      nextRenderYOffset: number
    ): Vec2 | null => {
      const svg = svgRef.current;
      if (!svg) return null;

      const rect = svg.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return null;

      // Note: the <g> transform is applied in SVG user units (viewBox space), then mapped into
      // the viewport via the viewBox/preserveAspectRatio transform.
      const viewScale = Math.min(rect.width / VIEWBOX_WIDTH, rect.height / VIEWBOX_HEIGHT);
      const offsetX = (rect.width - VIEWBOX_WIDTH * viewScale) / 2;
      const offsetY = (rect.height - VIEWBOX_HEIGHT * viewScale) / 2;

      // Keep focused content out from under the title/controls overlay (px -> user units).
      const paddingTopPx = 60;
      const paddingBottomPx = 24;
      const centerPx = {
        x: rect.width / 2,
        y: (paddingTopPx + (rect.height - paddingBottomPx)) / 2,
      };
      const centerUser = {
        x: (centerPx.x - offsetX) / viewScale,
        y: (centerPx.y - offsetY) / viewScale,
      };

      const contentScale = zoomFactor * zoomScaleMultiplier;
      const targetTranslate = {
        x: centerUser.x - contentScale * focusPoint.x + focusPanBias.x,
        y: centerUser.y - contentScale * focusPoint.y + focusPanBias.y,
      };

      return clampPan(
        {
          x: targetTranslate.x,
          y: targetTranslate.y - nextRenderYOffset,
        },
        zoomFactor
      );
    },
    [zoomScaleMultiplier]
  );

  const computeFocusPanForBounds = useCallback(
    (
      bounds: Box,
      zoomFactor: number,
      focusPanBias: Vec2,
      nextRenderYOffset: number,
      focusPoint?: Vec2
    ): Vec2 | null => {
      const svg = svgRef.current;
      if (!svg) return null;

      const rect = svg.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return null;

      const viewScale = Math.min(rect.width / VIEWBOX_WIDTH, rect.height / VIEWBOX_HEIGHT);
      const offsetX = (rect.width - VIEWBOX_WIDTH * viewScale) / 2;
      const offsetY = (rect.height - VIEWBOX_HEIGHT * viewScale) / 2;

      // Keep focused content out from under the title/controls overlay (px -> user units).
      const paddingXPx = 24;
      const paddingTopPx = 60;
      const paddingBottomPx = 24;

      const contentScale = zoomFactor * zoomScaleMultiplier;

      // Bounds fit constraints expressed in SVG user units.
      let minX = (paddingXPx - offsetX) / viewScale - contentScale * bounds.left;
      let maxX =
        (rect.width - paddingXPx - offsetX) / viewScale - contentScale * bounds.right;
      let minY = (paddingTopPx - offsetY) / viewScale - contentScale * bounds.top;
      let maxY =
        (rect.height - paddingBottomPx - offsetY) / viewScale - contentScale * bounds.bottom;

      // If the bounds can't fit (bigger than viewport), collapse to a centered range.
      if (minX > maxX) {
        const mid = (minX + maxX) / 2;
        minX = mid;
        maxX = mid;
      }
      if (minY > maxY) {
        const mid = (minY + maxY) / 2;
        minY = mid;
        maxY = mid;
      }

      const centerPx = {
        x: rect.width / 2,
        y: (paddingTopPx + (rect.height - paddingBottomPx)) / 2,
      };
      const centerUser = {
        x: (centerPx.x - offsetX) / viewScale,
        y: (centerPx.y - offsetY) / viewScale,
      };

      const desiredFocusUser = focusPoint
        ? focusPoint
        : { x: (bounds.left + bounds.right) / 2, y: (bounds.top + bounds.bottom) / 2 };

      const desiredTranslate = {
        x: centerUser.x - contentScale * desiredFocusUser.x + focusPanBias.x,
        y: centerUser.y - contentScale * desiredFocusUser.y + focusPanBias.y,
      };

      return clampPan(
        {
          x: clamp(desiredTranslate.x, minX, maxX),
          y: clamp(desiredTranslate.y, minY, maxY) - nextRenderYOffset,
        },
        zoomFactor
      );
    },
    [zoomScaleMultiplier]
  );

  const setEditorTargetOffset = useCallback(
    (target: LayoutEditorTarget, offset: Vec2) => {
      const normalizedOffset = {
        x: Math.round(offset.x),
        y: Math.round(offset.y),
      };

      if (expandAllBranches) {
        if (target.kind === "all-node") {
          setAllExpandedOverrides((current) => ({
            ...current,
            nodeOffsets: {
              ...(current.nodeOffsets ?? {}),
              [target.nodeId]: normalizedOffset,
            },
          }));
          return;
        }

        if (target.kind === "all-label") {
          setAllExpandedOverrides((current) => ({
            ...current,
            labelOffsets: {
              ...(current.labelOffsets ?? {}),
              [target.nodeId]: normalizedOffset,
            },
          }));
        }
        return;
      }

      if (!activeDegree) return;
      setPresetOverrides((current) => {
        const next = { ...current };
        const branchPreset = { ...(next[activeDegree] ?? {}) };

        if (target.kind === "sub-node") {
          branchPreset.subNodeOffsets = {
            ...(branchPreset.subNodeOffsets ?? {}),
            [target.nodeId]: normalizedOffset,
          };
        } else if (target.kind === "sub-label") {
          branchPreset.subLabelOffsets = {
            ...(branchPreset.subLabelOffsets ?? {}),
            [target.nodeId]: normalizedOffset,
          };
        } else {
          branchPreset.activeLabelOffset = normalizedOffset;
        }

        next[activeDegree] = branchPreset;
        return next;
      });
      setLastEditedDegree(activeDegree);
    },
    [activeDegree, expandAllBranches]
  );

  const resolveEditorTargetOffset = useCallback(
    (target: LayoutEditorTarget): Vec2 | null => {
      if (expandAllBranches) {
        if (target.kind === "all-node") {
          return allExpandedOverrides.nodeOffsets?.[target.nodeId] ?? { x: 0, y: 0 };
        }
        if (target.kind === "all-label") {
          return allExpandedOverrides.labelOffsets?.[target.nodeId] ?? { x: 0, y: 0 };
        }
      }

      if (!activeDegree) return null;
      const node = visibleNodeById.get(target.nodeId);
      if (!node) return null;

      if (target.kind === "sub-node") {
        if (!activeLayoutNode) return null;
        return {
          x: node.position.x - activeLayoutNode.position.x,
          y: node.position.y - activeLayoutNode.position.y,
        };
      }

      const layout = labelLayouts.get(target.nodeId);
      if (!layout) return null;
      return { x: layout.dx, y: layout.dy };
    },
    [activeDegree, activeLayoutNode, allExpandedOverrides.labelOffsets, allExpandedOverrides.nodeOffsets, expandAllBranches, labelLayouts, visibleNodeById]
  );

  const beginEditorDrag = useCallback(
    (event: React.MouseEvent, target: LayoutEditorTarget, startOffset: Vec2) => {
      const canEditCurrentLayout = !!activeDegree || expandAllBranches;
      if (!layoutEditorEnabled || !isDesktop || !canEditCurrentLayout) return;
      event.preventDefault();
      event.stopPropagation();
      setEditorSelection(target);
      setEditorDrag({
        target,
        startClient: { x: event.clientX, y: event.clientY },
        startOffset,
      });
    },
    [activeDegree, expandAllBranches, isDesktop, layoutEditorEnabled]
  );

  useEffect(() => {
    if (!layoutEditorEnabled || !editorDrag) return;

    const dragScale = zoom * zoomScaleMultiplier;
    const handleMove = (event: MouseEvent) => {
      const dx = (event.clientX - editorDrag.startClient.x) / dragScale;
      const dy = (event.clientY - editorDrag.startClient.y) / dragScale;
      setEditorTargetOffset(editorDrag.target, {
        x: editorDrag.startOffset.x + dx,
        y: editorDrag.startOffset.y + dy,
      });
    };

    const handleUp = () => {
      setEditorDrag(null);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [editorDrag, layoutEditorEnabled, setEditorTargetOffset, zoom, zoomScaleMultiplier]);

  useEffect(() => {
    if (!layoutEditorEnabled || !editorSelection) return;

    const handleNudge = (event: KeyboardEvent) => {
      const key = event.key;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Escape"].includes(key)) return;
      event.preventDefault();

      if (key === "Escape") {
        setEditorSelection(null);
        return;
      }

      const currentOffset = resolveEditorTargetOffset(editorSelection);
      if (!currentOffset) return;

      const step = event.shiftKey ? 10 : 2;
      const delta = { x: 0, y: 0 };
      if (key === "ArrowLeft") delta.x = -step;
      if (key === "ArrowRight") delta.x = step;
      if (key === "ArrowUp") delta.y = -step;
      if (key === "ArrowDown") delta.y = step;

      setEditorTargetOffset(editorSelection, {
        x: currentOffset.x + delta.x,
        y: currentOffset.y + delta.y,
      });
    };

    window.addEventListener("keydown", handleNudge);
    return () => window.removeEventListener("keydown", handleNudge);
  }, [editorSelection, layoutEditorEnabled, resolveEditorTargetOffset, setEditorTargetOffset]);

  const copyActivePreset = useCallback(async () => {
    const sourceDegree = activeDegree ?? lastEditedDegree;
    if (!sourceDegree) return;
    const mergedPreset = getMergedExpandedPreset(sourceDegree, presetOverrides);
    if (!mergedPreset) return;

    const payload = `"${sourceDegree}": ${JSON.stringify(mergedPreset, null, 2)}`;
    try {
      await navigator.clipboard.writeText(payload);
      setCopyNotice("Preset copied");
    } catch {
      setCopyNotice("Clipboard blocked");
    }
  }, [activeDegree, lastEditedDegree, presetOverrides]);

  const resetActiveBranchEdits = useCallback(() => {
    if (!activeDegree) return;
    setPresetOverrides((current) => {
      if (!current[activeDegree]) return current;
      const next = { ...current };
      delete next[activeDegree];
      return next;
    });
    setCopyNotice("Branch reset");
  }, [activeDegree]);

  const hasAllExpandedOverrides = useMemo(() => {
    const nodeCount = Object.keys(allExpandedOverrides.nodeOffsets ?? {}).length;
    const labelCount = Object.keys(allExpandedOverrides.labelOffsets ?? {}).length;
    return nodeCount + labelCount > 0;
  }, [allExpandedOverrides.labelOffsets, allExpandedOverrides.nodeOffsets]);

  const resetAllExpandedEdits = useCallback(() => {
    setAllExpandedOverrides({});
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(LAYOUT_EDITOR_ALL_STORAGE_KEY);
    }
    setCopyNotice("ALL view reset");
  }, []);

  const clearAllBranchEdits = useCallback(() => {
    setPresetOverrides({});
    setAllExpandedOverrides({});
    setLastEditedDegree(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(LAYOUT_EDITOR_STORAGE_KEY);
      window.localStorage.removeItem(LAYOUT_EDITOR_ALL_STORAGE_KEY);
    }
    setCopyNotice("All local edits cleared");
  }, []);

  const visibleEdges = useMemo(() => {
    const visibleIds = new Set(visibleNodes.map((node) => node.id));
    return edgesData.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target));
  }, [visibleNodes]);

  const getAwayDirection = useCallback((nodeId: string): Vec2 => {
    const node = nodesData.find((entry) => entry.id === nodeId);
    const coreNode = nodesData.find((entry) => entry.id === "core-ms");
    if (!node || !coreNode || nodeId === "core-ms") return { x: 0, y: -1 };
    return normalizeVector(
      {
        x: node.position.x - coreNode.position.x,
        y: node.position.y - coreNode.position.y,
      },
      { x: 0, y: -1 }
    );
  }, []);

  const handleNodeClick = (nodeId: string, group: GraphNode["group"]) => {
    if (group !== "degree" && group !== "core") return;

    if (expandAllBranches) {
      setExpandAllBranches(false);
    }

    if (activeDegree === nodeId) {
      closeActiveBranch();
      return;
    }

    const node = nodesData.find((currentNode) => currentNode.id === nodeId);
    if (!node) return;

    const desktopPreset = isDesktop ? getMergedExpandedPreset(nodeId, presetOverrides) : undefined;
    const zoomFactor = desktopPreset?.focusZoom ?? 1.4;
    setZoom(zoomFactor);

    if (isDesktop) {
      const preset = desktopPreset;
      const focusPanBias = preset?.focusPanBias ?? { x: 0, y: -14 };
      const nextRenderYOffset = nodeId === "core-ms" ? 136 : 96;
      const nextLayout = computeGraphLayout(nodeId, true, preset);
      const focusBounds = nextLayout.focusBounds;

      const nextPan = focusBounds
        ? computeFocusPanForBounds(
            focusBounds,
            zoomFactor,
            focusPanBias,
            nextRenderYOffset,
            preset?.centerOnNode ? node.position : undefined
          )
        : computeFocusPan(node.position, zoomFactor, focusPanBias, nextRenderYOffset);

      if (nextPan) setPan(nextPan);
    } else {
      const awayDirection = getAwayDirection(nodeId);
      const focusPadding = 70;
      setPan(
        clampPan(
          {
            x: -(node.position.x - VIEWBOX_WIDTH / 2) * zoomFactor - awayDirection.x * focusPadding,
            y: -(node.position.y - VIEWBOX_HEIGHT / 2) * zoomFactor - awayDirection.y * focusPadding,
          },
          zoomFactor
        )
      );
    }

    setActiveDegree(nodeId);
  };

  const containerClasses = variant === "background" 
    ? `absolute inset-0 ${className ?? ""}`
    : `relative h-[460px] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] ${className ?? ""}`;
  const renderYOffset = activeDegree
    ? isDesktop && activeDegree === "core-ms"
      ? 136
      : 96
    : 0;
  const renderScale = activeDegree ? zoom * zoomScaleMultiplier : overviewRenderScale;
  const renderXOffset = activeDegree ? 0 : collapsedRenderOffset.x;
  const renderBaseYOffset = activeDegree ? 0 : collapsedRenderOffset.y;

  return (
    <div className={containerClasses} data-testid="degree-graph">
      <div className="pointer-events-none absolute left-6 top-6 z-10 max-w-[280px] text-2xl font-bold tracking-tight text-[var(--foreground)] hidden lg:block">
        Click a circle to explore.
      </div>
      <div className="absolute right-4 top-4 z-20 flex gap-2">
        {activeDegree && (
          <button
            onClick={closeActiveBranch}
            className="rounded-full bg-[var(--surface)] p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        )}
        <button
          onClick={() => handleZoom(1)}
          className="rounded-full bg-[var(--surface)] p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <button
          onClick={() => handleZoom(-1)}
          className="rounded-full bg-[var(--surface)] p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <button
          onClick={handleReset}
          className="rounded-full bg-[var(--surface)] p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
        </button>
        <button
          onClick={toggleExpandAllBranches}
          className={`rounded-full bg-[var(--surface)] px-3 py-2 text-[10px] font-semibold tracking-[0.08em] transition-colors ${
            expandAllBranches
              ? "text-sky-300 hover:text-sky-200"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
          title={expandAllBranches ? "Switch to default view" : "Expand all branches"}
        >
          {expandAllBranches ? "DEFAULT" : "ALL"}
        </button>
        {layoutEditorAccessEnabled && (
          <button
            onClick={toggleLayoutEditor}
            className={`rounded-full bg-[var(--surface)] px-3 py-2 text-xs font-semibold tracking-[0.08em] transition-colors ${
              layoutEditorEnabled
                ? "text-cyan-300 hover:text-cyan-200"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
            title="Toggle layout editor (Shift+E or Alt+E)"
          >
            EDIT
          </button>
        )}
      </div>
      {layoutEditorAccessEnabled && layoutEditorEnabled && (
        layoutEditorPanelCollapsed ? (
          <div className="absolute bottom-3 left-3 z-30 flex items-center gap-2 rounded-lg border border-cyan-400/35 bg-[var(--surface)]/92 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300">
            <span>Editor On</span>
            <button
              onClick={() => setLayoutEditorPanelCollapsed(false)}
              className="rounded border border-cyan-400/40 px-1.5 py-0.5 text-[9px] text-cyan-200"
              title="Expand panel (Shift+H)"
            >
              Show
            </button>
          </div>
        ) : (
          <div className="absolute bottom-3 left-3 z-30 max-w-[320px] rounded-lg border border-cyan-400/35 bg-[var(--surface)]/95 px-3 py-2 text-[11px] tracking-[0.04em] text-[var(--muted)]">
            <div className="flex items-center justify-between">
              <div className="font-semibold uppercase text-cyan-300">Layout Editor On</div>
              <button
                onClick={() => setLayoutEditorPanelCollapsed(true)}
                className="rounded border border-cyan-400/35 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.08em] text-cyan-200"
                title="Collapse panel (Shift+H)"
              >
                Hide
              </button>
            </div>
            <div>Hotkeys: Shift+E or Alt+E toggle editor, Shift+H hide panel</div>
            <div>
              {expandAllBranches
                ? "ALL mode: drag circles / label boxes. Arrow keys nudge selected (Shift = faster)."
                : "Branch mode: drag sub circles / label boxes. Arrow keys nudge selected (Shift = faster)."}
            </div>
            <div className="mt-1 flex flex-wrap gap-2">
              <button
                onClick={copyActivePreset}
                disabled={expandAllBranches || (!activeDegree && !lastEditedDegree)}
                className="rounded-md border border-cyan-400/40 px-2 py-1 text-[10px] font-semibold uppercase text-cyan-300 disabled:opacity-40"
              >
                Copy {activeDegree ? "Active" : "Last"} Preset
              </button>
              <button
                onClick={resetActiveBranchEdits}
                disabled={expandAllBranches || !activeDegree || !presetOverrides[activeDegree]}
                className="rounded-md border border-slate-400/40 px-2 py-1 text-[10px] font-semibold uppercase text-slate-300 disabled:opacity-40"
              >
                Reset Branch Edits
              </button>
              <button
                onClick={resetAllExpandedEdits}
                disabled={!expandAllBranches || !hasAllExpandedOverrides}
                className="rounded-md border border-sky-400/40 px-2 py-1 text-[10px] font-semibold uppercase text-sky-300 disabled:opacity-40"
              >
                Reset ALL View Edits
              </button>
              <button
                onClick={clearAllBranchEdits}
                disabled={Object.keys(presetOverrides).length === 0 && !hasAllExpandedOverrides}
                className="rounded-md border border-amber-400/40 px-2 py-1 text-[10px] font-semibold uppercase text-amber-300 disabled:opacity-40"
              >
                Clear Local Edits
              </button>
              {copyNotice && <span className="pt-1 text-[10px] text-cyan-200">{copyNotice}</span>}
            </div>
          </div>
        )
      )}
      <svg 
        ref={svgRef}
        className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="transition-transform duration-[350ms] ease-out"
          style={{
            transform: `translate(${pan.x + renderXOffset}px, ${pan.y + renderYOffset + renderBaseYOffset}px) scale(${renderScale})`,
            transformOrigin: "0 0",
          }}
        >
          <g stroke="rgba(148, 163, 184, 0.75)" strokeWidth={2} fill="none">
            <defs>
              <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(148, 163, 184, 0.2)" />
                <stop offset="50%" stopColor="rgba(148, 163, 184, 0.75)" />
                <stop offset="100%" stopColor="rgba(148, 163, 184, 0.2)" />
              </linearGradient>
            </defs>
            {visibleEdges.map((edge) => {
              const source = visibleNodeById.get(edge.source);
              const target = visibleNodeById.get(edge.target);
              if (!source || !target) return null;
              const isActiveBranchEdge = !!(
                activeDegree &&
                (edge.source === activeDegree ||
                  edge.target === activeDegree ||
                  source.isExpandedSub ||
                  target.isExpandedSub)
              );
              const edgeOpacity =
                activeDegree && isDesktop
                  ? isActiveBranchEdge
                    ? "0.9"
                    : "0.12"
                  : edge.source === activeDegree || edge.target === activeDegree
                    ? "1"
                    : "0.5";

              // Add some curvature based on the distance
              const curvature = EDGE_CURVATURE;
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
                  className="transition-all duration-[350ms] ease-in-out"
                  style={{
                    opacity: edgeOpacity,
                  }}
                >
                  {(!activeDegree || isActiveBranchEdge) && (
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="12"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  )}
                </path>
              );
            })}
          </g>
          {visibleNodes.map((node) => {
          const size = nodeSize(node.group);
          const labelLayout = labelLayouts.get(node.id);
          if (!labelLayout) return null;

          const showLabel = !(
            isDesktop &&
            activeDegree &&
            !node.isExpandedSub &&
            node.id !== activeDegree
          );
          const isDimmedContext = !!(
            isDesktop &&
            activeDegree &&
            !node.isExpandedSub &&
            node.id !== activeDegree
          );
          const isEditingBranch = layoutEditorEnabled && isDesktop && !!activeDegree && !expandAllBranches;
          const isEditingAll = layoutEditorEnabled && isDesktop && expandAllBranches;
          const canEditBranchSubNode = isEditingBranch && node.isExpandedSub && !!activeLayoutNode;
          const nodeEditorTarget = isEditingAll
            ? ({ kind: "all-node", nodeId: node.id } as LayoutEditorTarget)
            : canEditBranchSubNode
              ? ({ kind: "sub-node", nodeId: node.id } as LayoutEditorTarget)
              : null;
          const nodeDragStartOffset =
            nodeEditorTarget?.kind === "all-node"
              ? allExpandedOverrides.nodeOffsets?.[node.id] ?? { x: 0, y: 0 }
              : canEditBranchSubNode && activeLayoutNode
                ? {
                    x: node.position.x - activeLayoutNode.position.x,
                    y: node.position.y - activeLayoutNode.position.y,
                  }
                : null;

          const labelEditorTarget =
            showLabel && isEditingAll
              ? ({ kind: "all-label", nodeId: node.id } as LayoutEditorTarget)
              : isEditingBranch && showLabel
                ? node.isExpandedSub
                  ? ({ kind: "sub-label", nodeId: node.id } as LayoutEditorTarget)
                  : node.id === activeDegree
                    ? ({ kind: "active-label", nodeId: node.id } as LayoutEditorTarget)
                    : null
              : null;
          const labelDragStartOffset =
            labelEditorTarget?.kind === "all-label"
              ? allExpandedOverrides.labelOffsets?.[node.id] ?? { x: 0, y: 0 }
              : { x: labelLayout.dx, y: labelLayout.dy };

          const isSelectedNodeHandle = !!(
            editorSelection &&
            (editorSelection.kind === "sub-node" || editorSelection.kind === "all-node") &&
            editorSelection.nodeId === node.id
          );
          const isSelectedLabel = !!(
            labelEditorTarget &&
            editorSelection &&
            editorSelection.kind === labelEditorTarget.kind &&
            editorSelection.nodeId === labelEditorTarget.nodeId
          );

          const {
            dx,
            dy,
            width: labelWidth,
            height: labelHeight,
            lineHeight,
            fontSize,
            lines: labelLines,
          } = labelLayout;

          return (
            <g key={node.id} transform={`translate(${node.position.x}, ${node.position.y})`}>
              <g
                className="transition-all duration-[350ms] ease-in-out"
                style={{
                  opacity: node.parentId
                    ? activeDegree
                      ? node.parentId === activeDegree
                        ? "1"
                        : "0.4"
                      : "1"
                    : isDimmedContext
                      ? "0.22"
                      : "1",
                  transform: `scale(${
                    node.parentId
                      ? activeDegree
                        ? node.parentId === activeDegree
                          ? "1"
                          : "0.8"
                        : "1"
                      : "1"
                  })`,
                }}
              >
                <circle
                  r={size / 2 + 4}
                  fill="none"
                  stroke={isSelectedNodeHandle ? "#22d3ee" : node.color}
                  strokeWidth={isSelectedNodeHandle ? "2" : "1"}
                  opacity={isSelectedNodeHandle ? "0.75" : "0.3"}
                  className="transition-transform duration-[350ms]"
                  style={{
                    transform: activeDegree === node.id ? "scale(1.2)" : "scale(1)",
                  }}
                />
                <circle
                  r={size / 2}
                  fill={node.color}
                  data-node-id={node.id}
                  style={{
                    // Lower intensity for subtle glow, higher for stronger pulse
                    // Use hex transparency to preserve the node color in the glow.
                    // Example: #7dd3fc55 (light) and #7dd3fcaa (strong).
                    // @ts-expect-error CSS variables for SVG presentation
                    "--node-glow": `${node.color}55`,
                    "--node-glow-strong": `${node.color}aa`,
                  }}
                  filter="drop-shadow(0 0 10px rgba(0,0,0,0.25))"
                  onClick={() => {
                    if (layoutEditorEnabled && isDesktop) return;
                    handleNodeClick(node.id, node.group);
                  }}
                  onMouseDown={(event) => {
                    if (!nodeEditorTarget || !nodeDragStartOffset) return;
                    beginEditorDrag(event, nodeEditorTarget, nodeDragStartOffset);
                  }}
                  onMouseEnter={(e) => handleNodeHover(node, e)}
                  onMouseLeave={() => handleNodeHover(null)}
                  data-editor-handle={nodeEditorTarget ? "true" : undefined}
                  className={`origin-center animate-[nodePulseLight_4.5s_ease-in-out_infinite] dark:animate-[nodePulseDark_4.5s_ease-in-out_infinite] ${
                    nodeEditorTarget ? "cursor-move" : "cursor-pointer"
                  }`}
                >
                  <animate
                    attributeName="r"
                    values={`${size/2};${size/2 + 2};${size/2}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g
                className="transition-[transform,opacity] duration-[350ms] ease-out"
                transform={`translate(${dx}, ${dy})`}
                opacity={showLabel ? 1 : 0}
                onMouseDown={(event) => {
                  if (!labelEditorTarget) return;
                  beginEditorDrag(event, labelEditorTarget, labelDragStartOffset);
                }}
                style={{ cursor: labelEditorTarget ? "grab" : "default" }}
                data-editor-handle={labelEditorTarget ? "true" : undefined}
              >
                <rect
                  x={-labelWidth / 2 - 12}
                  y={-4}
                  width={labelWidth + 24}
                  height={labelHeight + 8}
                  rx={10}
                  fill={activeDegree ? "var(--surface)" : "transparent"}
                  fillOpacity={activeDegree ? 0.9 : 1}
                  stroke={isSelectedLabel ? "rgba(34, 211, 238, 0.95)" : "rgba(148, 163, 184, 0.45)"}
                  strokeWidth={isSelectedLabel ? 1.4 : 1}
                  strokeDasharray="6 6"
                />
                <text
                  x={0}
                  y={lineHeight}
                  textAnchor="middle"
                  style={{ fontSize: `${fontSize}px` }}
                  className={`font-semibold uppercase ${
                    node.group === "sub" ? "tracking-[0.14em]" : "tracking-[0.18em]"
                  } fill-[var(--muted)]`}
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
        </g>
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
