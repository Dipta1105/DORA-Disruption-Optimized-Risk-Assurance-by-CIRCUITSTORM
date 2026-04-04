"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleMesh() {
  const ref = useRef<THREE.Points>(null);

  // Generate 2000 points randomly within a sphere
  const [positions] = React.useState(() => {
    const coords = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
        // Random spherical distribution
        const r = 2 + Math.random() * 2;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        
        coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00D1FF"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleMesh />
      </Canvas>
    </div>
  );
}
