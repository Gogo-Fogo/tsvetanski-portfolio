"use client";

import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function PugModel() {
  const { scene } = useGLTF("/models/cranky-pug.glb");

  const { fixedScene, offset } = useMemo(() => {
    const meshBox = new THREE.Box3();

    scene.traverse((child: any) => {
      if (!child.isMesh) return;

      // Expand bounding box using mesh geometry only (excludes armature bones)
      meshBox.expandByObject(child);

      // Fix x-ray: force depth writing on all materials
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((mat: any) => {
        mat.depthWrite = true;
        mat.depthTest = true;
        if (mat.opacity <= 0) mat.opacity = 1;
        if (mat.opacity >= 0.95) {
          mat.transparent = false;
          mat.opacity = 1;
        }
        mat.needsUpdate = true;
      });
    });

    const center = new THREE.Vector3();
    meshBox.getCenter(center);

    return { fixedScene: scene, offset: center };
  }, [scene]);

  return (
    <group position={[-offset.x, -offset.y, -offset.z]}>
      <primitive object={fixedScene} />
    </group>
  );
}

useGLTF.preload("/models/cranky-pug.glb");

export default function CrankyPugViewer() {
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const handleActivate = () => {
    if (typeof window !== "undefined") {
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
    setActive(true);
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
      <div className="aspect-square w-full">
        {!active ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[linear-gradient(160deg,#0f172a,#111827)]">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">Cranky — Interactive 3D</span>
            <button
              type="button"
              onClick={handleActivate}
              className="rounded-full border border-white/20 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70 transition hover:border-white/60 hover:text-white"
            >
              View in 3D
            </button>
          </div>
        ) : (
          <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 1.9, 3.8], fov: 36 }}
            frameloop={reducedMotion ? "demand" : "always"}
          >
            <color attach="background" args={["#0b1220"]} />
            <ambientLight intensity={1.8} />
            <directionalLight position={[2, 4, 4]} intensity={1.6} />
            <directionalLight position={[-2, 2, 2]} intensity={1.0} />
            <directionalLight position={[0, -1, 3]} intensity={0.6} />
            <Suspense fallback={null}>
              <PugModel />
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              autoRotate={!reducedMotion}
              autoRotateSpeed={0.8}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              target={[0, 0, 0]}
            />
          </Canvas>
        )}
      </div>
    </div>
  );
}
