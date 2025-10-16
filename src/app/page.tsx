"use client"

import React, { useState, useEffect } from "react";
import TiltedCard from "@/components/ui/TiltedCard";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceTimeline from "./sections/ExperienceTimeline";
import AllProjects from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import LoadingAnimation from "@/components/ui/LoadingAnimation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="min-h-screen font-poppins text-white">
      {/* Two Column Layout - Only for main content sections */}
      <div className="flex">
        {/* Left Column - TiltedCard (only for main sections) */}
        <div className="w-1/3 p-12 flex justify-center items-start">
          <div className="hidden md:block sticky top-24 self-start">
            <TiltedCard
              imageSrc="/photos/tiltedcard.svg"
              altText="MontherTuwati"
              captionText="Monther Tuwati"
              containerHeight="600px"
              containerWidth="500px"
              imageHeight="700px"
              imageWidth="500px"
              rotateAmplitude={10}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute top-5 left-85">
                  Monther Tuwati
                </p>
              }
            />
          </div>
        </div>

        {/* Right Column - All Content Sections */}
        <div className="w-2/3 p-12">
          <div id="home">
            <HeroSection />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="experience">
            <ExperienceTimeline />
          </div>
          <div id="projects">
            <AllProjects />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </div>
      
      {/* Full Width Footer */}
      <FooterSection />
    </main>
  );
}