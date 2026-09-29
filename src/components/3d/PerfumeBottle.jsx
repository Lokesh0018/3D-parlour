import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const PerfumeBottle = () => {
  const groupRef = useRef();
  const scroll = useScroll();

  useFrame((state) => {
    // Floating animation
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.1;
      // Base rotation
      groupRef.current.rotation.y = t * 0.2;
      
      // Scroll-based rotation/positioning
      if (scroll) {
        const offset = scroll.offset;
        groupRef.current.position.x = offset * 2;
        groupRef.current.rotation.y += offset * Math.PI * 2;
      }
    }
  });

  // Materials for luxury look
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x000000,
    metalness: 0.9,
    roughness: 0.1,
    transmission: 0.9,
    thickness: 1.5,
    ior: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xd6ad70,
    metalness: 1,
    roughness: 0.2,
  });

  const liquidMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x221a10,
    metalness: 0.2,
    roughness: 0.1,
    transmission: 0.8,
    thickness: 2,
  });

  return (
    <group ref={groupRef} scale={[1.2, 1.2, 1.2]} position={[2, 0, 0]}>
      {/* Bottle Body - Glass */}
      <mesh material={glassMaterial} castShadow>
        <boxGeometry args={[2, 3, 1]} />
      </mesh>
      
      {/* Liquid inside */}
      <mesh material={liquidMaterial} scale={[0.95, 0.95, 0.95]}>
        <boxGeometry args={[2, 2.8, 1]} />
      </mesh>

      {/* Bottle Neck - Gold */}
      <mesh position={[0, 1.7, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.3, 0.4, 0.4, 32]} />
      </mesh>

      {/* Spray Nozzle */}
      <mesh position={[0, 1.95, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
      </mesh>

      {/* Cap - Dark/Gold */}
      <mesh position={[0, 2.3, 0]} material={glassMaterial} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
      </mesh>
      
      {/* Cap Accent - Gold */}
      <mesh position={[0, 2.3, 0]} material={goldMaterial}>
        <boxGeometry args={[0.82, 0.1, 0.82]} />
      </mesh>

      {/* Brand Plate */}
      <mesh position={[0, 0, 0.51]} material={goldMaterial}>
        <planeGeometry args={[1.2, 0.8]} />
      </mesh>
    </group>
  );
};

export default PerfumeBottle;
