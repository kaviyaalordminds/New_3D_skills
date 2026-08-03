"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export type AssetVariant = "alley" | "oak" | "drone" | "sword";

function Spinner({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.y += delta * 0.5;
  });

  return <group ref={group}>{children}</group>;
}

function Alley() {
  const heights = [0.6, 1.4, 0.9, 1.8, 1.1];
  return (
    <>
      {heights.map((h, i) => (
        <mesh key={i} position={[(i - heights.length / 2) * 0.4, h / 2 - 0.6, 0]}>
          <boxGeometry args={[0.28, h, 0.28]} />
          <meshStandardMaterial
            color="#2a2440"
            roughness={0.4}
            metalness={0.6}
            emissive={i % 2 === 0 ? "#ec4899" : "#7c3aed"}
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
    </>
  );
}

function Oak() {
  return (
    <>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.12, 0.16, 0.9, 8]} />
        <meshStandardMaterial color="#6366f1" roughness={0.6} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <coneGeometry args={[0.85, 1.3, 8]} />
        <meshStandardMaterial
          color="#7c3aed"
          roughness={0.4}
          metalness={0.3}
          emissive="#3b0f6e"
          emissiveIntensity={0.3}
        />
      </mesh>
    </>
  );
}

function Drone() {
  return (
    <>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#ec4899"
          roughness={0.2}
          metalness={0.6}
          emissive="#5c1440"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.95, 0.05, 12, 32]} />
        <meshStandardMaterial color="#6366f1" roughness={0.3} metalness={0.7} />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 4) * Math.PI * 2) * 0.95,
            0,
            Math.sin((i / 4) * Math.PI * 2) * 0.95,
          ]}
          scale={0.18}
        >
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial color="#f5f3ff" roughness={0.1} metalness={0.8} />
        </mesh>
      ))}
    </>
  );
}

function Sword() {
  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.16, 1.5, 0.05]} />
        <meshStandardMaterial color="#f5f3ff" roughness={0.15} metalness={0.85} />
      </mesh>
      <mesh position={[0, 1.3, 0]}>
        <coneGeometry args={[0.11, 0.35, 4]} />
        <meshStandardMaterial color="#f5f3ff" roughness={0.15} metalness={0.85} />
      </mesh>
      <mesh position={[0, -0.28, 0]}>
        <boxGeometry args={[0.55, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#7c3aed"
          roughness={0.3}
          metalness={0.6}
          emissive="#3b0f6e"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.06, 0.05, 0.5, 8]} />
        <meshStandardMaterial color="#2a2440" roughness={0.6} metalness={0.3} />
      </mesh>
    </group>
  );
}

const variants: Record<AssetVariant, () => React.ReactNode> = {
  alley: Alley,
  oak: Oak,
  drone: Drone,
  sword: Sword,
};

export default function AssetPreviewScene({ variant }: { variant: AssetVariant }) {
  const Shape = variants[variant];

  return (
    <Canvas
      dpr={[1, 1.25]}
      frameloop="always"
      camera={{ position: [0, 0.2, 3.4], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 4]} intensity={1.3} />
        <pointLight position={[-2, -1, 2]} intensity={0.4} color="#ec4899" />
        <Spinner>
          <Shape />
        </Spinner>
      </Suspense>
    </Canvas>
  );
}
