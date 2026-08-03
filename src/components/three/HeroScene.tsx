"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

function Core() {
  const reduced = usePrefersReducedMotion();
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduced) {
      group.current.rotation.y += delta * 0.25;
      group.current.rotation.x += delta * 0.05;
    }
    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;
    group.current.rotation.y += pointer.current.x * 0.0008;
    group.current.rotation.x += -pointer.current.y * 0.0006;
  });

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1.4, 4]} />
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#3b0f6e"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.4}
          distort={reduced ? 0 : 0.35}
          speed={reduced ? 0 : 1.4}
        />
      </mesh>

      {[0, 1, 2].map((i) => (
        <Float
          key={i}
          speed={reduced ? 0 : 1.2 + i * 0.3}
          rotationIntensity={reduced ? 0 : 0.6}
          floatIntensity={reduced ? 0 : 1.4}
        >
          <mesh
            position={[
              Math.cos((i / 3) * Math.PI * 2) * 2.4,
              Math.sin((i / 3) * Math.PI * 2) * 1.1,
              Math.sin((i / 3) * Math.PI * 2) * 0.6,
            ]}
            scale={0.32}
          >
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={i === 1 ? "#ec4899" : "#6366f1"}
              roughness={0.3}
              metalness={0.5}
              emissive={i === 1 ? "#5c1440" : "#1e1a5c"}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} />
        <pointLight position={[-4, -2, -3]} intensity={0.8} color="#ec4899" />
        <pointLight position={[3, -3, 2]} intensity={0.5} color="#6366f1" />
        <Core />
      </Suspense>
    </Canvas>
  );
}
