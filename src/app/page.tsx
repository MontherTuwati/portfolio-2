"use client"

import React from "react";
import Image from "next/image";

// Import your components and blocks
// Removed GooeyNav import
import BlurText from "@/components/ui/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/components/ui/TextAnimations/TrueFocus/TrueFocus";
import CircularText from "@/components/ui/TextAnimations/CircularText/CircularText";
// ScrollReveal is imported but not used in the provided code snippet, keep if used elsewhere
// import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";
import TiltedCard from "@/components/ui/TiltedCard";
import ExperienceTimeline from '@/app/sections/ExperienceTimeline';
import SkillTag from '@/components/SkillTag'; // Assuming SkillTag is in components folder
import AllProjects from "@/app/sections/ProjectsSection";
import ContactSection from '@/app/sections/ContactSection';
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Home() {
  // Removed mobileMenuOpen state
  return (
    // The cursor: 'none' style is now applied globally in layout.tsx
    // Removed outer div as layout.tsx now handles the main structure
    // <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy"> // Removed this line
    <> {/* Added React Fragment wrapper */}
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-10"> {/* Added padding top to account for fixed header */}
        <HeroSection />
        <AboutSection />
        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5">
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />

        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 font-extrabold">
          <BlurText
            text=" My Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>

        {/* Projects Section Start */}
        {/* Modified this div to use a grid layout for two columns */}
          <div className="w-full px-4 md:px-8 mt-10">
            <AllProjects />
          </div>
        {/* Projects Section End */}

        <ContactSection />
      </main>


      {/* Footer Section - Consider moving this to layout.tsx as well for consistency */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20"> {/* Added margin top */}
        <p>&copy; {new Date().getFullYear()} Monther Tuwati. All rights reserved.</p> {/* Updated name */}
      </footer>
    </> // Closed React Fragment wrapper
    // </div> // Removed this closing tag
  );
}