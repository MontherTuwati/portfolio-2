'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    { text: '$ npm run dev', color: 'text-green-400', delay: 50 },
    { text: '> Starting development server...', color: 'text-blue-400', delay: 100 },
    { text: '> Compiling components...', color: 'text-yellow-400', delay: 100 },
    { text: '> Loading API...', color: 'text-purple-400', delay: 100 },
    { text: '> Initializing Database...', color: 'text-pink-400', delay: 100 },
    { text: '> Building portfolio assets...', color: 'text-orange-400', delay: 100 },
    { text: '> Optimizing images...', color: 'text-cyan-400', delay: 100 },
    { text: '> Ready! Server running on localhost:3000', color: 'text-green-400', delay: 150 },
    { text: '', color: 'text-white', delay: 200 },
    { text: 'Welcome to Monther Tuwati\'s Portfolio', color: 'text-orange-500', delay: 100 },
    { text: 'Software Engineer • Full Stack Developer', color: 'text-gray-300', delay: 100 },
    { text: '', color: 'text-white', delay: 200 },
    { text: 'Press any key to continue...', color: 'text-gray-500', delay: 50 }
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setTimeout(() => {
        onComplete();
      }, 300);
      return;
    }

    const currentLineData = terminalLines[currentLine];
    if (!currentLineData) return;

    const timeout = setTimeout(() => {
      if (currentLineData.text === '') {
        setCurrentLine(prev => prev + 1);
        return;
      }

      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= currentLineData.text.length) {
          setDisplayedText(currentLineData.text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
          }, 100);
        }
      }, 25);

      return () => clearInterval(typeInterval);
    }, currentLineData.delay);

    return () => clearTimeout(timeout);
  }, [currentLine, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        {/* Terminal Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-4xl mx-8 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-400 text-sm font-mono">terminal</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm min-h-[400px] bg-gray-900">
            <div className="space-y-1">
              {terminalLines.slice(0, currentLine).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${line.color} ${line.text === '' ? 'h-4' : ''}`}
                >
                  {line.text}
                </motion.div>
              ))}
              
              {/* Current typing line */}
              {currentLine < terminalLines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${terminalLines[currentLine]?.color} flex items-center`}
                >
                  <span>{displayedText}</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1"
                  >
                    _
                  </motion.span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Matrix-style background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500/10 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              {Math.random().toString(36).substring(7)}
            </motion.div>
          ))}
        </div>

        {/* Glitch effect overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0, 0.1, 0],
            x: [0, -2, 2, 0]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-red-500/5 via-green-500/5 to-blue-500/5"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
