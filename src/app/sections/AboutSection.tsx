"use client"
import BlurText from "@/components/ui/TextAnimations/BlurText/BlurText";
import TiltedCard from "@/components/ui/TiltedCard";
import SkillTag from "@/components/SkillTag";

const devSkills = [
  'Next.js', 'Tailwind', 'React', 'Javascript', 'CSS', 'Node.js',
  'Python', 'Springboot', 'Flutterflow', 'Firebase', 'Supabase', 'MySQL'
];

const contentSkills = [
  'Figma', 'Canva', 'Unity', 'Unreal Engine', 'Godot', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator'
];

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function AboutSection() {
  return (
    <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 space-x-0">
      <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
        {/* DEVELOP Card */}
        <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
          <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">DEVELOP</h3>
          <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
            Started creating mobile applications using Flutter, FlutterFlow, and Firebase and eventually switched to Web Development using NextJS, React, and Tailwind
          </p>
          <h4 className="text-cyan-300 font-semibold mb-3 text-base">Skillset &amp; tools</h4>
          <div className="flex flex-wrap gap-2">
            {devSkills.map(skill => <SkillTag key={skill} skillName={skill} />)}
          </div>
        </div>

        {/* CREATE Card */}
        <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
          <h3 className="text-white font-bold md:text-2xl text:lg tracking-wide mb-3">CREATE</h3>
          <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
            My content creation journey evolved from a side hustle to serving other creators, achieving an average reach of 15 million within 90 days.
          </p>
          <h4 className="text-cyan-300 font-semibold mb-3 text-base">Skillset &amp; Tools</h4>
          <div className="flex flex-wrap gap-2">
            {contentSkills.map(skill => <SkillTag key={skill} skillName={skill} />)}
          </div>
        </div>
      </div>

      {/* What I do Section */}
      <div className="flex flex-col">
        <BlurText
          text="What I do"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="md:text-7xl text-3xl font-extrabold"
        />

        <div className="hidden md:block mt-10 mb-20">
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
                Monther
              </p>
            }
          />
        </div>

        <div className="md:hidden mt-10 mb-20">
          <TiltedCard
            imageSrc="/photos/tiltedcard.svg"
            altText="MontherTuwati"
            captionText="Monther Tuwati"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute">
                Monther
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}
