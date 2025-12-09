"use client"

import React, { useState } from "react";
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
      <div className="flex flex-col md:flex-row">
        {/* Left Column - TiltedCard (only for main sections) */}
        <div className="hidden md:block md:w-5/12 lg:w-1/3 md:p-6 lg:p-8 xl:p-12 flex justify-center items-start">
          <div className="sticky top-24 self-start">
            <div className="w-[280px] md:w-[320px] lg:w-[400px] xl:w-[500px]">
              <div className="h-[420px] md:h-[480px] lg:h-[540px] xl:h-[600px]">
                <TiltedCard
                  imageSrc="/photos/tiltedcard.svg"
                  altText="MontherTuwati"
                  captionText="Monther Tuwati"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="116.67%"
                  imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                  overlayContent={
                  <p className="bg-transparent px-3 py-1.5 md:px-4 md:py-2 border-1 border-dashed border-white rounded-lg font-bold text-sm md:text-base lg:text-lg text-white absolute top-4 right-4 md:top-5 md:right-5" style={{ opacity: 0.9 }}>
                    Monther<br />Tuwati
                  </p>
                }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - All Content Sections */}
        <div className="w-full md:w-7/12 lg:w-2/3 p-4 md:p-6 lg:p-8 xl:p-12">
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