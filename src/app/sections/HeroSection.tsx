'use client';

import React, { useState } from "react";
import CountUp from "@/components/ui/TextAnimations/CountUp/CountUp";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const frontendSkills = [
    "React", "Next.js", "React Native", "Vue.js", 
    "Flutter", "Laravel", "JavaScript", "CSS3"
  ];

  const backendSkills = [
    "Node.js", "Django", "Express.js", "PostgreSQL", 
    "MongoDB", "REST APIs", "GraphQL", "Docker"
  ];

  const toggleCard = (cardType: string) => {
    setExpandedCard(expandedCard === cardType ? null : cardType);
  };

  const cardVariants = {
    collapsed: {
      height: "8rem",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    expanded: {
      height: "auto",
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const arrowVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 90 }
  };

  return (
    <div>
        {/* Hero Section */}
        <div className="mb-10">
          <h1 className="text-9xl font-bold leading-none mb-6">
            <span className="text-white">SOFTWARE</span>
            <br />
            <span className="text-gray-600">ENGINEER</span>
          </h1>
          <p className="text-gray-400 text-2xl leading-relaxed max-w-3xl">
          Love crafting software that solves meaningful problems. <br /> Turn ideas into scalable, maintainable solutions. <br /> Blend precision, performance, and innovation in every build.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-start items-start gap-12 mb-16">
          <div className="text-left">
            <div className="text-8xl font-bold text-white mb-2">
              +<CountUp
                from={0}
                to={3}
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
            </div>
            <div className="text-gray-400 text-2xl leading-tight">
              YEARS OF<br/>EXPERIENCE
            </div>
          </div>
          <div className="text-left">
            <div className="text-8xl font-bold text-white mb-2">
              +<CountUp
                from={0}
                to={26}
                direction="up"
                duration={2}
                className="count-up-text"
              />
            </div>
            <div className="text-gray-400 text-2xl leading-tight">
              PROJECTS<br/>COMPLETED
            </div>
          </div>
          <div className="text-left">
            <div className="text-8xl font-bold text-white mb-2">
              +<CountUp
                from={0}
                to={43}
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
            </div>
            <div className="text-gray-400 text-2xl leading-tight">
              WORLDWIDE<br/>CLIENTS
            </div>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 w-full max-w-4xl gap-8">
          {/* Frontend Card */}
          <motion.div 
            className="bg-orange-500 rounded-2xl p-6 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => toggleCard('frontend')}
            variants={cardVariants}
            animate={expandedCard === 'frontend' ? 'expanded' : 'collapsed'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-4 left-4 w-10 h-10 bg-orange-300 rounded-lg flex items-center justify-center">
              <i className="fas fa-code text-gray-800 text-lg"></i>
            </div>
            <h3 className="text-white font-bold text-xl mt-12 leading-tight">FRONTEND<br/>DEVELOPMENT</h3>
            <motion.div 
              className="absolute bottom-4 right-4"
              variants={arrowVariants}
              animate={expandedCard === 'frontend' ? 'expanded' : 'collapsed'}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <i className="fas fa-arrow-right text-gray-800 text-lg"></i>
            </motion.div>
            
            {/* Expanded Skills */}
            <AnimatePresence>
              {expandedCard === 'frontend' && (
                <motion.div 
                  className="mt-6 pt-4 border-t border-orange-300/30"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {frontendSkills.map((skill, index) => (
                      <motion.div 
                        key={skill}
                        className="bg-gray-800/20 text-white text-sm px-3 py-2 rounded-lg text-center font-medium"
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Backend Card */}
          <motion.div 
            className="bg-gray-800 border border-gray-800 rounded-2xl p-6 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => toggleCard('backend')}
            variants={cardVariants}
            animate={expandedCard === 'backend' ? 'expanded' : 'collapsed'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-4 left-4 w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-server text-orange-500 text-lg"></i>
            </div>
            <h3 className="text-white font-bold text-xl mt-12 leading-tight">BACKEND<br/>DEVELOPMENT</h3>
            <motion.div 
              className="absolute bottom-4 right-4"
              variants={arrowVariants}
              animate={expandedCard === 'backend' ? 'expanded' : 'collapsed'}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <i className="fas fa-arrow-right text-orange-500 text-lg"></i>
            </motion.div>
            
            {/* Expanded Skills */}
            <AnimatePresence>
              {expandedCard === 'backend' && (
                <motion.div 
                  className="mt-6 pt-4 border-t border-gray-600/30"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {backendSkills.map((skill, index) => (
                      <motion.div 
                        key={skill}
                        className="bg-orange-500/20 text-white text-sm px-3 py-2 rounded-lg text-center font-medium"
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 53, 0.3)" }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
    </div>
  );
}