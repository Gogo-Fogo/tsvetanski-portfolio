"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
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

const LAYOUT_CONFIG: LayoutConfig = {
  desktopMinWidth: 1024,
  baseSubSpacing: 130,
  spreadRadians: Math.PI / 3,
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

const nodeSize = (group: GraphNode["group"]) => (group === "core" ? 48 : group === "degree" ? 40 : 28);

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const clampPan = (nextPan: Vec2, zoomLevel: number): Vec2 => {
  const bounds = 200 * zoomLevel;
  return {
    x: clamp(nextPan.x, -bounds, bounds),
    y: clamp(nextPan.y, -bounds, bounds),
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

const buildVisibleLayoutNodes = (activeDegree: string | null, spacing: number): LayoutNode[] => {
  const nodes = nodesData
    .filter((node) => coreIds.has(node.id) || (activeDegree ? node.parentId === activeDegree : false))
    .map((node) => ({
      ...node,
      position: { ...node.position },
      anchorPosition: { ...node.position },
      isExpandedSub: activeDegree ? node.parentId === activeDegree : false,
    }));

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

  subNodes.forEach((node, index) => {
    const angle = awayAngle + (index - (subNodes.length - 1) / 2) * LAYOUT_CONFIG.spreadRadians;
    const nextPosition = {
      x: activeNode.position.x + Math.cos(angle) * spacing,
      y: activeNode.position.y + Math.sin(angle) * spacing,
    };
    node.position = nextPosition;
    node.anchorPosition = { ...nextPosition };
  });

  return nodes;
};

const buildBaseLabelLayouts = (
  nodes: LayoutNode[],
  activeDegree: string | null,
  isDesktop: boolean
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
        ? defaultLabelOffset + 24
        : defaultLabelOffset;

    let dx = 0;
    let dy = labelOffset - height + 4;

    if (node.isExpandedSub && activeDegree) {
      const parentNode = node.parentId ? nodeById.get(node.parentId) : undefined;
      if (parentNode) {
        const angle = Math.atan2(
          node.position.y - parentNode.position.y,
          node.position.x - parentNode.position.x
        );
        const projectedHalfExtent =
          Math.abs(Math.cos(angle)) * (width / 2 + LAYOUT_CONFIG.labelHorizontalPadding) +
          Math.abs(Math.sin(angle)) * (height / 2 + LAYOUT_CONFIG.labelVerticalPadding);
        const radialDistance = size / 2 + 14 + projectedHalfExtent;
        dx = Math.cos(angle) * radialDistance;
        dy = Math.sin(angle) * radialDistance - height / 2 + 4;
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
      if (circleNode.id === labelNode.id) return;
      const circleBox = toCircleBox(circleNode, LAYOUT_CONFIG.circleCollisionPadding);
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

const clampLabelToBounds = (node: LayoutNode, layout: LabelLayout) => {
  const margin = LAYOUT_CONFIG.viewBoxMargin;
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
  labelLayouts: Map<string, LabelLayout>
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
    includeBox(toCircleBox(node, 8));
    const labelLayout = labelLayouts.get(node.id);
    if (labelLayout) includeBox(toLabelBox(node, labelLayout));
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

const solveDesktopLayout = (activeDegree: string, spacing: number): SolverResult => {
  const nodes = buildVisibleLayoutNodes(activeDegree, spacing);
  const labelLayouts = buildBaseLabelLayouts(nodes, activeDegree, true);

  for (let iteration = 0; iteration < LAYOUT_CONFIG.iterations; iteration += 1) {
    resolveSubNodeCircleCollisions(nodes);
    resolveLabelLabelCollisions(nodes, labelLayouts);
    resolveLabelCircleCollisions(nodes, labelLayouts);

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

    nodes.forEach((node) => {
      const layout = labelLayouts.get(node.id);
      if (!layout) return;

      layout.dx += (layout.anchorDx - layout.dx) * LAYOUT_CONFIG.labelSpring;
      layout.dy += (layout.anchorDy - layout.dy) * LAYOUT_CONFIG.labelSpring;

      const clampedLayout = clampDisplacement(
        { x: layout.dx, y: layout.dy },
        { x: layout.anchorDx, y: layout.anchorDy },
        LAYOUT_CONFIG.labelMaxDisplacement
      );
      layout.dx = clampedLayout.x;
      layout.dy = clampedLayout.y;
      clampLabelToBounds(node, layout);
    });
  }

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const labelBoxes = computeLabelBoxes(nodes, labelLayouts);
  const focusBounds = computeFocusBounds(activeDegree, nodes, labelLayouts);
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

const computeGraphLayout = (activeDegree: string | null, isDesktop: boolean): GraphLayoutResult => {
  if (activeDegree && isDesktop) {
    let bestLayout: SolverResult | null = null;

    for (let attempt = 0; attempt <= LAYOUT_CONFIG.fallbackSpacingAttempts; attempt += 1) {
      const spacing = LAYOUT_CONFIG.baseSubSpacing + attempt * LAYOUT_CONFIG.fallbackSpacingStep;
      const candidate = solveDesktopLayout(activeDegree, spacing);
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

  const nodes = buildVisibleLayoutNodes(activeDegree, LAYOUT_CONFIG.baseSubSpacing);
  const labelLayouts = buildBaseLabelLayouts(nodes, activeDegree, isDesktop);
  applySimpleLabelPush(nodes, activeDegree, labelLayouts);

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const labelBoxes = computeLabelBoxes(nodes, labelLayouts);
  const focusBounds = computeFocusBounds(activeDegree, nodes, labelLayouts);

  return { nodes, nodeById, labelLayouts, labelBoxes, focusBounds };
};

type DegreeGraphProps = {
  variant?: "card" | "background";
  className?: string;
};

export default function DegreeGraph({ variant = "card", className }: DegreeGraphProps) {
  const [activeDegree, setActiveDegree] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(min-width: ${LAYOUT_CONFIG.desktopMinWidth}px)`).matches;
  });

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

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }, [pan]);

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
    setZoom(1);
    setPan({ x: 0, y: 0 });
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
    () => computeGraphLayout(activeDegree, isDesktop),
    [activeDegree, isDesktop]
  );
  const visibleNodes = graphLayout.nodes;
  const visibleNodeById = graphLayout.nodeById;
  const labelLayouts = graphLayout.labelLayouts;

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

    if (activeDegree === nodeId) {
      closeActiveBranch();
      return;
    }

    const node = nodesData.find((currentNode) => currentNode.id === nodeId);
    if (!node) return;

    const zoomFactor = 1.4;
    setZoom(zoomFactor);

    if (isDesktop) {
      const nextLayout = computeGraphLayout(nodeId, true);
      const focusBounds = nextLayout.focusBounds;
      if (focusBounds) {
        const focusCenterX = (focusBounds.left + focusBounds.right) / 2;
        const focusCenterY = (focusBounds.top + focusBounds.bottom) / 2;
        const targetPan = {
          x: -(focusCenterX - VIEWBOX_WIDTH / 2) * zoomFactor,
          y: -(focusCenterY - VIEWBOX_HEIGHT / 2) * zoomFactor,
        };
        setPan(clampPan(targetPan, zoomFactor));
      } else {
        setPan(
          clampPan(
            {
              x: -(node.position.x - VIEWBOX_WIDTH / 2) * zoomFactor,
              y: -(node.position.y - VIEWBOX_HEIGHT / 2) * zoomFactor,
            },
            zoomFactor
          )
        );
      }
    } else {
      const awayDirection = getAwayDirection(nodeId);
      const focusPadding = 70;
      setPan(
        clampPan(
          {
            x: -(node.position.x - 350) * zoomFactor - awayDirection.x * focusPadding,
            y: -(node.position.y - 260) * zoomFactor - awayDirection.y * focusPadding,
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

  return (
    <div className={containerClasses}>
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
      </div>
      <svg 
        className="absolute inset-0 transition-transform duration-[350ms] ease-out cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          transform: `translate(${pan.x}px, ${pan.y + 96}px) scale(${zoom * 1.3})`,
        }}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
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
          ) && !(isDesktop && activeDegree === "core-ms" && node.id === "core-ms");
          const isDimmedContext = !!(
            isDesktop &&
            activeDegree &&
            !node.isExpandedSub &&
            node.id !== activeDegree
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
                    ? node.parentId === activeDegree
                      ? "1"
                      : "0.4"
                    : isDimmedContext
                      ? "0.22"
                      : "1",
                  transform: `scale(${node.parentId ? (node.parentId === activeDegree ? "1" : "0.8") : "1"})`,
                }}
              >
                <circle
                  r={size / 2 + 4}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1"
                  opacity="0.3"
                  className="transition-transform duration-[350ms]"
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
                    // @ts-expect-error CSS variables for SVG presentation
                    "--node-glow": `${node.color}55`,
                    "--node-glow-strong": `${node.color}aa`,
                  }}
                  filter="drop-shadow(0 0 10px rgba(0,0,0,0.25))"
                  onClick={() => handleNodeClick(node.id, node.group)}
                  onMouseEnter={(e) => handleNodeHover(node, e)}
                  onMouseLeave={() => handleNodeHover(null)}
                  className="cursor-pointer origin-center animate-[nodePulseLight_4.5s_ease-in-out_infinite] dark:animate-[nodePulseDark_4.5s_ease-in-out_infinite]"
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
              >
                <rect
                  x={-labelWidth / 2 - 12}
                  y={-4}
                  width={labelWidth + 24}
                  height={labelHeight + 8}
                  rx={10}
                  fill={activeDegree ? "var(--surface)" : "transparent"}
                  fillOpacity={activeDegree ? 0.7 : 1}
                  stroke="rgba(148, 163, 184, 0.45)"
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
