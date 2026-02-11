"use client";

import { Suspense, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function CoreMesh({ reducedMotion }: { reducedMotion: boolean }) {
  const color = useMemo(() => (reducedMotion ? "#8ab4ff" : "#56d7ff"), [reducedMotion]);

  useFrame((state, delta) => {
    if (reducedMotion) {
      return;
    }

    const mesh = state.scene.getObjectByName("lab-core");
    if (mesh) {
      mesh.rotation.y += delta * 0.55;
      mesh.rotation.x += delta * 0.15;
    }
  });

  return (
    <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={reducedMotion ? 0 : 0.6} floatIntensity={0.4}>
      <mesh name="lab-core">
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} metalness={0.35} roughness={0.25} />
      </mesh>
      <mesh scale={1.65}>
        <torusGeometry args={[0.9, 0.03, 24, 120]} />
        <meshStandardMaterial color="#fb923c" emissive="#7c2d12" emissiveIntensity={0.25} />
      </mesh>
    </Float>
  );
}

export default function VirtualLab3DModule() {
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const handleActivate = () => {
    if (typeof window !== "undefined") {
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }

    setActive(true);
  };

  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Interactive 3D Preview</h3>
        {!active ? (
          <button
            type="button"
            onClick={handleActivate}
            className="rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--background)] transition hover:bg-transparent hover:text-[var(--foreground)]"
          >
            Activate 3D
          </button>
        ) : (
          <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Live</span>
        )}
      </div>

      <p className="mb-4 text-sm text-[var(--muted)]">
        Lightweight R3F prototype layer for virtual lab concepts. It stays idle until activated to protect performance budgets.
      </p>

      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(160deg,#0f172a,#111827)]">
        {active ? (
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 50 }} frameloop={reducedMotion ? "demand" : "always"}>
            <color attach="background" args={["#0b1220"]} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 2, 3]} intensity={1.1} />
            <Suspense fallback={null}>
              <CoreMesh reducedMotion={reducedMotion} />
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              autoRotate={!reducedMotion}
              autoRotateSpeed={0.6}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-white/70">
            Activate to load the 3D module.
          </div>
        )}
      </div>
    </section>
  );
}
