"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Float, Sparkles, Stars } from "@react-three/drei";

function BackgroundElements() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={20} size={1} speed={0.2} color="#64FED8" />

      {/* Floating geometric shapes */}
      <Float speed={0.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[-15, 10, -20]}>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#64FED8" metalness={0.8} roughness={0.2} transparent opacity={0.3} />
        </mesh>
      </Float>

      <Float speed={0.7} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh position={[15, -8, -25]}>
          <octahedronGeometry args={[1.5]} />
          <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} transparent opacity={0.2} />
        </mesh>
      </Float>

      <Float speed={0.3} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[0, 15, -30]}>
          <tetrahedronGeometry args={[3]} />
          <meshStandardMaterial color="#64FED8" metalness={0.7} roughness={0.3} transparent opacity={0.1} />
        </mesh>
      </Float>

      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      <Environment preset="night" />
    </>
  );
}

export default function FloatingStars() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} className="absolute inset-0">
        <Suspense fallback={null}>
          <BackgroundElements />
        </Suspense>
      </Canvas>
    </div>
  );
}