'use client';

import React from "react";
import CountUp from "@/components/ui/TextAnimations/CountUp/CountUp";
import { motion } from "framer-motion";

const stats = [
  { value: 3, label: 'YEARS OF\nEXPERIENCE', duration: 1.5 },
  { value: 21, label: 'PROJECTS\nCOMPLETED', duration: 2 },
  { value: 13, label: 'WORLDWIDE\nCLIENTS', duration: 2.5 },
];

export default function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Content */}
      <div className="flex flex-col justify-center p-4 pt-24 md:p-6 md:pt-28 lg:p-8 lg:pt-28 xl:p-12 xl:pt-32">

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
        <div className="w-10 h-px bg-orange-500 flex-shrink-0" />
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

      </div>{/* end left column */}
    </div>
  );
}