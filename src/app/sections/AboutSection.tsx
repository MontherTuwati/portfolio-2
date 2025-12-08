"use client"
import BlurText from "@/components/ui/TextAnimations/BlurText/BlurText";
import TiltedCard from "@/components/ui/TiltedCard";
import SkillTag from "@/components/SkillTag";

const devStack = {
  Languages: [
    'Java', 'Python', 'TypeScript', 'JavaScript', 'C++', 'C#', 'PHP', 'HTML/CSS'
  ],
  Frameworks: [
    'React', 'React Native', 'Vue.js', 'Next.js', 'Laravel', 'Tailwind',
    'Electron.js', 'Express.js', 'Django', 'Bootstrap', 'Node.js', 'Spring', 'MySQL', 'PostgreSQL',
    'MongoDB', 'SQLite', 'Redis'
  ],
  Tools: [
    'Git', 'Docker', 'Azure', 'Firebase', 'Google Cloud',
    'VS Code', 'PyCharm', 'Eclipse'
  ]
};


const contentSkills = [
  'Figma', 'Canva', 'Unity', 'Unreal Engine', 'Godot', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator'
];

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function AboutSection() {
  return (
    <>
    <div className="mt-20">
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold leading-none">
        <span className="text-white">ABOUT</span>
        <br />
        <span className="text-gray-600">ME</span>
      </h1>
    </div>
    <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full mt-10 mb-20 gap-6 md:gap-8">
      <div className="flex flex-col md:flex-row w-full max-w-6xl px-4 md:px-0 gap-6 md:gap-8">
        {/* DEVELOP Card */}
        <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
          <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">DEVELOP</h3>
          <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
            Started creating mobile applications using Flutter, FlutterFlow, and Firebase and eventually switched to Web Development using NextJS, React, and Tailwind
          </p>
          
          <div className="mb-4">
            <h4 className="text-orange-400 font-semibold mb-3 text-base">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {devStack.Languages.map(language => <SkillTag key={language} skillName={language} />)}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-orange-400 font-semibold mb-3 text-base">Frameworks & Backend</h4>
            <div className="flex flex-wrap gap-2">
              {devStack.Frameworks.map(framework => <SkillTag key={framework} skillName={framework} />)}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-orange-400 font-semibold mb-3 text-base">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {devStack.Tools.map(tool => <SkillTag key={tool} skillName={tool} />)}
            </div>
          </div>
        </div>

        {/* CREATE Card */}
        <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
          <h3 className="text-white font-bold md:text-2xl text:lg tracking-wide mb-3">CREATE</h3>
          <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
            My content creation journey evolved from a side hustle to serving other creators, achieving an average reach of 15 million within 90 days.
          </p>
          <h4 className="text-orange-400 font-semibold mb-3 text-base">Skillset &amp; Tools</h4>
          <div className="flex flex-wrap gap-2">
            {contentSkills.map(skill => <SkillTag key={skill} skillName={skill} />)}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
