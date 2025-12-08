'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [glitchType, setGlitchType] = useState<'strong' | 'normal'>('strong');

  useEffect(() => {
    // Simple timer to complete loading
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    // Alternate between strong and normal glitch
    const glitchInterval = setInterval(() => {
      setGlitchType(prev => prev === 'strong' ? 'normal' : 'strong');
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1
          }}
          transition={{ 
            duration: 1
          }}
          className="flex flex-col items-center justify-center space-y-8"
        >
          {/* Logo with Custom Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotate: glitchType === 'strong' ? [0, 8, -6, 4, -2, 0] : [0, 0, 0, 0, 0, 0]
            }}
            transition={{ 
              delay: 0.3, 
              duration: 0.8,
              rotate: {
                duration: glitchType === 'strong' ? 0.5 : 0.4,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut"
              }
            }}
            className="relative w-48 h-48 md:w-64 md:h-64"
          >
            {/* Main Logo */}
            <Image 
              src="/logo/mt-logo.svg" 
              alt="Monther Tuwati Logo" 
              width={256}
              height={256}
              className="w-48 h-48 md:w-64 md:h-64 relative z-10"
            />
            
            {/* Glitch Layers */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Red Glitch Layer */}
              <motion.img 
                src="/logo/mt-logo.svg" 
                alt="MT Logo Glitch Red" 
                className="w-48 h-48 md:w-64 md:h-64 absolute top-0 left-0"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(7151%) hue-rotate(0deg) brightness(95%) contrast(118%)',
                  mixBlendMode: 'screen'
                }}
                animate={{
                  x: glitchType === 'strong' ? [0, 12, -10, 8, -5, 0] : [0, 8, -6, 4, -3, 0],
                  y: glitchType === 'strong' ? [0, -6, 5, -3, 2, 0] : [0, -4, 3, -2, 1, 0],
                  opacity: glitchType === 'strong' ? [0, 1, 0.9, 0.7, 0.4, 0] : [0, 1, 0.8, 0.6, 0.3, 0],
                  scale: glitchType === 'strong' ? [1, 1.05, 0.95, 1.03, 0.97, 1] : [1, 1.02, 0.98, 1.01, 0.99, 1],
                  rotate: glitchType === 'strong' ? [0, 5, -4, 3, -2, 0] : [0, 0, 0, 0, 0, 0]
                }}
                transition={{
                  duration: glitchType === 'strong' ? 0.5 : 0.4,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut"
                }}
              />
              
              {/* Cyan Glitch Layer */}
              <motion.img 
                src="/logo/mt-logo.svg" 
                alt="MT Logo Glitch Cyan" 
                className="w-48 h-48 md:w-64 md:h-64 absolute top-0 left-0"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(70%) sepia(100%) saturate(2000%) hue-rotate(180deg) brightness(100%) contrast(100%)',
                  mixBlendMode: 'screen'
                }}
                animate={{
                  x: glitchType === 'strong' ? [0, -12, 10, -8, 5, 0] : [0, -8, 6, -4, 3, 0],
                  y: glitchType === 'strong' ? [0, 6, -5, 3, -2, 0] : [0, 4, -3, 2, -1, 0],
                  opacity: glitchType === 'strong' ? [0, 0.95, 0.8, 0.6, 0.3, 0] : [0, 0.9, 0.7, 0.5, 0.2, 0],
                  scale: glitchType === 'strong' ? [1, 0.95, 1.05, 0.97, 1.03, 1] : [1, 0.98, 1.02, 0.99, 1.01, 1],
                  rotate: glitchType === 'strong' ? [0, -5, 4, -3, 2, 0] : [0, 0, 0, 0, 0, 0]
                }}
                transition={{
                  duration: glitchType === 'strong' ? 0.5 : 0.4,
                  repeat: Infinity,
                  repeatDelay: 1.8,
                  ease: "easeInOut"
                }}
              />

              {/* Additional White Glitch Layer for more intensity */}
              <motion.img 
                src="/logo/mt-logo.svg" 
                alt="MT Logo Glitch White" 
                className="w-48 h-48 md:w-64 md:h-64 absolute top-0 left-0"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(100%)',
                  mixBlendMode: 'screen'
                }}
                animate={{
                  x: glitchType === 'strong' ? [0, 8, -8, 5, -3, 0] : [0, 5, -5, 3, -2, 0],
                  y: glitchType === 'strong' ? [0, -5, 5, -2, 2, 0] : [0, -3, 3, -1, 1, 0],
                  opacity: glitchType === 'strong' ? [0, 0.8, 0.6, 0.3, 0.15, 0] : [0, 0.6, 0.4, 0.2, 0.1, 0],
                  rotate: glitchType === 'strong' ? [0, 8, -6, 4, -2, 0] : [0, 2, -2, 1, -1, 0]
                }}
                transition={{
                  duration: glitchType === 'strong' ? 0.45 : 0.35,
                  repeat: Infinity,
                  repeatDelay: 2.2,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
