import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls, ContactShadows, Float, PresentationControls } from '@react-three/drei';
import PerfumeBottle from './PerfumeBottle';
import GoldParticles from './GoldParticles';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';

const HeroScene = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas 
        dpr={isMobile ? 1 : [1, 2]} 
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#D6AD70" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.1}>
            <PresentationControls 
              global 
              config={{ mass: 2, tension: 500 }} 
              snap={{ mass: 4, tension: 1500 }} 
              rotation={[0, 0, 0]} 
              polar={[-Math.PI / 4, Math.PI / 4]} 
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <PerfumeBottle />
              </Float>
            </PresentationControls>
          </ScrollControls>
          
          {!isMobile && <GoldParticles count={150} />}
          
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={4} color="#000000" />
          <Environment preset="city" />
          
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} intensity={1.2} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
