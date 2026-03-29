'use client';

import React, { useState } from "react";
import CountUp from "@/components/ui/TextAnimations/CountUp/CountUp";
import { motion, AnimatePresence } from "framer-motion";
import TiltedCard from "@/components/ui/TiltedCard";

const stats = [
  { value: 3, label: 'YEARS OF\nEXPERIENCE', duration: 1.5 },
  { value: 21, label: 'PROJECTS\nCOMPLETED', duration: 2 },
  { value: 13, label: 'WORLDWIDE\nCLIENTS', duration: 2.5 },
];

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
    collapsed: { height: "8rem", transition: { duration: 0.5, ease: "easeInOut" } },
    expanded:  { height: "auto", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1, y: 0, scale: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const arrowVariants = {
    collapsed: { rotate: 0 },
    expanded:  { rotate: 90 },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Right Column — TiltedCard */}
      <div className="hidden md:block md:w-[32%] lg:w-[34%] xl:w-[36%] order-last sticky top-0 h-screen overflow-hidden">
        <TiltedCard
          imageSrc="/photos/tiltedcard.svg"
          altText="Monther Tuwati"
          captionText="Monther Tuwati"
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={8}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
        />
      </div>

      {/* Left Column — Hero Content */}
      <div className="flex-1 flex flex-col justify-center p-4 pt-24 md:p-6 md:pt-28 lg:p-8 lg:pt-28 xl:p-12 xl:pt-32">

      {/* Greeting */}
      <motion.p
        className="text-gray-500 text-sm sm:text-base tracking-[0.25em] uppercase mb-4 font-light"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi, I am
      </motion.p>

      {/* Name */}
      <motion.h1
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="text-white">MONTHER</span>
        <br />
        <span className="text-gray-600">TUWATI</span>
      </motion.h1>

      {/* Role with orange accent line */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <div className="w-10 h-px bg-orange-500 flex-shrink-0" />
        <p className="text-orange-400 text-sm sm:text-base md:text-lg font-medium tracking-widest uppercase">
          Software Engineer &nbsp;/&nbsp; Founder
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        Love crafting software that solves meaningful problems.{" "}
        <br className="hidden sm:block" />
        Turning ideas into scalable, maintainable solutions.
      </motion.p>

      {/* Stats */}
      <motion.div
        className="flex flex-row justify-start items-start gap-3 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-12 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-left">
            <div className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-2">
              +<CountUp from={0} to={stat.value} direction="up" duration={stat.duration} className="count-up-text" />
            </div>
            <div className="text-gray-400 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight whitespace-pre-line">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl gap-4 sm:gap-6 md:gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
      >
        {/* Frontend Card */}
        <motion.div
          className="bg-orange-500 rounded-2xl p-4 sm:p-6 relative overflow-hidden cursor-pointer"
          onClick={() => toggleCard('frontend')}
          variants={cardVariants}
          animate={expandedCard === 'frontend' ? 'expanded' : 'collapsed'}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-orange-300 rounded-lg flex items-center justify-center">
            <i className="fas fa-code text-gray-800 text-base sm:text-lg" />
          </div>
          <h3 className="text-white font-bold text-lg sm:text-xl mt-10 sm:mt-12 leading-tight">FRONTEND<br />DEVELOPMENT</h3>
          <motion.div
            className="absolute bottom-4 right-4"
            variants={arrowVariants}
            animate={expandedCard === 'frontend' ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <i className="fas fa-arrow-right text-gray-800 text-lg" />
          </motion.div>
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
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
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
          className="bg-gray-800 border border-gray-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden cursor-pointer"
          onClick={() => toggleCard('backend')}
          variants={cardVariants}
          animate={expandedCard === 'backend' ? 'expanded' : 'collapsed'}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gray-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-server text-orange-500 text-base sm:text-lg" />
          </div>
          <h3 className="text-white font-bold text-lg sm:text-xl mt-10 sm:mt-12 leading-tight">BACKEND<br />DEVELOPMENT</h3>
          <motion.div
            className="absolute bottom-4 right-4"
            variants={arrowVariants}
            animate={expandedCard === 'backend' ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <i className="fas fa-arrow-right text-orange-500 text-lg" />
          </motion.div>
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
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,107,53,0.3)" }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      </div>{/* end left column */}
    </div>
  );
}