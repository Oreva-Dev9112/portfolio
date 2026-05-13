'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

type Tone = { base: string; rim: string };

function Blob({ tone }: { tone: Tone }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={2.4}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color={tone.base}
          attach="material"
          distort={0.45}
          speed={1.4}
          roughness={0.18}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}

export function Blob3D({ tone }: { tone: Tone }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 3, 5]} intensity={1.1} color={tone.rim} />
      <directionalLight position={[-4, -2, -3]} intensity={0.55} color={tone.base} />
      <pointLight position={[0, 0, 4]} intensity={0.35} color={tone.rim} />
      <Suspense fallback={null}>
        <Blob tone={tone} />
      </Suspense>
    </Canvas>
  );
}
