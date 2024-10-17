import { NextPage } from 'next'
"use client";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

interface Props {}

const Scene = () => {
    let texture = useTexture("./club.png");
    let tex = useRef(null);
    useFrame((_, delta) => {
      if (tex.current) (tex.current as THREE.Mesh).rotation.y += delta;
    });
    return (
      <group rotation={[0, 0.2, 0.5]}>
        <mesh ref={tex}>
          <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
          <meshStandardMaterial
            side={THREE.DoubleSide}
            map={texture}
            transparent
          />
        </mesh>
      </group>
    );
  };

const Hero: NextPage<Props> = ({}) => {
  return <div className="w-full h-screen bg-black flex justify-center items-center">
  <Canvas camera={{ fov: 22 }} flat fallback>
    <OrbitControls enableZoom={false} />
    <ambientLight />
    <Scene />
  </Canvas>
</div>
}

export default Hero