'use client';
import React from 'react';
import Image from 'next/image';
import BlurText from '@/components/ui/TextAnimations/BlurText/BlurText';
import TrueFocus from '@/components/ui/TextAnimations/TrueFocus/TrueFocus';
import CircularText from '@/components/ui/TextAnimations/CircularText/CircularText';
import Squares from '@/components/ui/Backgrounds/Squares/Squares';
import Particles from '@/components/ui/Backgrounds/Particles';

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="relative w-full h-full pt-20 overflow-hidden">
        {/* Particles background only in this section */}
        <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
        <div className="w-full flex justify-center items-center my-4 text-center font-bold relative px-4">
          <BlurText
            text="Monther Tuwati"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-9xl md:text-7xl text-4xl"
          />
        </div>

        <div className="font-bold text-center opacity-0 animate-fadeIn mt-3">
          <TrueFocus
            sentence="Developer   Father   Passion"
            manualMode
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          />
        </div>

        <div className="w-full items-center mt-8 relative h-[300px] hidden md:block">
          <CircularText
            text="SCROLL-DOWN*SCROLL-DOWN*"
            onHover="slowDown"
            spinDuration={5}
            className="absolute left-45 bottom-10"
          />
          <Image
            src="/logo/mt-logo.svg"
            alt="MT Logo"
            width={50}
            height={45}
            className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 absolute left-40 bottom-5"
          />
        </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
}
