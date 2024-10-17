"use client";
import { NextPage } from "next";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { FlipLink } from "./Zoop";

interface Props {}

const Scene = () => {
  const texture = useTexture("./club.png");
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; // Reduced rotation speed
    }
  });

  return (
    <group rotation={[0, 0.2, 0.5]}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 1, 32, 1, true]} /> {/* Reduced segment count */}
        <meshBasicMaterial
          side={THREE.DoubleSide}
          map={texture}
          transparent
        />
      </mesh>
    </group>
  );
};

const Hero: NextPage<Props> = ({}) => {
  const textRef = useRef(null);
  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      gsap.to(textElement, {
        x: "-50%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
     <Canvas
    camera={{ fov: 22 }}
    flat
    className="opacity-50 absolute inset-0"
    dpr={[1, 2]} // Limit pixel ratio
    performance={{ min: 0.5 }} // Allow frame rate to drop for better performance
  >
    <OrbitControls enableZoom={false} />
    <Scene />
  </Canvas>
      
      <div className="absolute inset-x-0 top-1/4 text-center z-20 text-[#f5f1eb] flex justify-center items-center gap-3  text-3xl select-none font-grotesque">

        <FlipLink href="">
        SUPPORT.
        </FlipLink>  <FlipLink href="">
        CONNECTION.
        </FlipLink>  <FlipLink href="">
        GROWTH
        </FlipLink>
      </div>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden">
        <p
          ref={textRef}
          className="text-[#f5f1eb] text-[30vw] leading-none font-bold whitespace-nowrap flex select-none"
          style={{ width: "200%" }}
        >
          <span className="pr-4 mr-8">LOCAL PULSE</span>
          <span className="pr-4 mr-8">LOCAL PULSE</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;