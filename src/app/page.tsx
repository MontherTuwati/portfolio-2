"use client"

import React, { useState } from "react";
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
      <div id="home">
        <HeroSection />
      </div>

      <div id="about" className="p-4 md:p-6 lg:p-8 xl:p-12">
        <AboutSection />
      </div>

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

      <FooterSection />
    </main>
  );
}