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
      <Canvas camera={{ fov: 22 }} flat fallback className="opacity-50 absolute inset-0">
        <OrbitControls enableZoom={false} />
        <ambientLight />
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