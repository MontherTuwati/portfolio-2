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
    <main className="min-h-screen font-poppins text-white pt-20 md:pt-0">
      {/* Two Column Layout - Only for Hero and About sections */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column - TiltedCard (sticky within this container only) */}
        <div className="hidden md:flex md:w-5/12 lg:w-1/3 md:pl-10 lg:pl-16 xl:pl-20 md:pr-6 lg:pr-8 xl:pr-12 md:pt-6 lg:pt-8 xl:pt-12 justify-center items-start min-w-0">
          <div className="sticky top-24 self-start flex justify-center w-full">
            <div className="w-[320px] md:w-[360px] lg:w-[450px] xl:w-[580px]">
              <div className="h-[420px] md:h-[480px] lg:h-[540px] xl:h-[680px]">
                <TiltedCard
                  imageSrc="/photos/tiltedcard.svg"
                  altText="MontherTuwati"
                  captionText="Monther Tuwati"
                  containerHeight="100%"
                  containerWidth="120%"
                  imageHeight="100%"
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

        {/* Right Column - Hero and About only */}
        <div className="w-full md:w-7/12 lg:w-2/3 p-4 md:p-6 lg:p-8 xl:p-12">
          <div id="home">
            <HeroSection />
          </div>
          <div id="about">
            <AboutSection />
          </div>
        </div>
      </div>

      {/* Full Width - Remaining sections after About */}
      <div className="p-4 md:p-6 lg:p-8 xl:p-12">
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

      {/* Full Width Footer */}
      <FooterSection />
    </main>
  );
}