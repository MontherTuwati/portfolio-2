'use client';
import React from 'react';
import Image from 'next/image';

// Experience sorted by date, newest first (reverse chronological)
const experiences = [
  {
    id: 6,
    title: 'Lead Product Engineer (Founder)',
    company: 'CatchaBite',
    year: 'May 2023 – Present',
    description: 'Founded and led product engineering for a food delivery platform, driving end-to-end development from concept to launch, architecting scalable systems, and managing cross-functional teams to deliver a seamless experience for customers and vendors.',
    logo: '/exp_logos/catchabite-logo.png',
  },
  {
    id: 5,
    title: 'Web Developer Intern',
    company: 'GAO RFID Inc.',
    year: 'May 2025 – Sept. 2025',
    description: 'Developed and enhanced web-based interfaces for RFID tracking and management systems, collaborating with engineering teams to implement responsive, data-driven features using modern front-end technologies.',
    logo: '/exp_logos/gao.png',
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: "Joe's Auto Body",
    year: 'Jan. 2025 – Sept. 2025',
    description: 'Developed and maintained a dynamic 5 page website with a custom CMS using Next.js, Tailwind CSS, and TypeScript, enabling seamless vehicle listing, booking, and customer inquiry management.',
    logo: '/exp_logos/joes-logo.svg',
  },
  {
    id: 3,
    title: 'Software Engineer I (Contract)',
    company: 'Sabratha, Ministry of Education',
    year: 'Nov. 2023 – Nov. 2024',
    description: 'Contributed and maintained the development of a Student Information System using Laravel, Django (APIs), and React, enabling seamless operations for 10,000+ students across multiple schools',
    logo: '/exp_logos/sab-uni.svg',
  },
  {
    id: 1,
    title: 'Junior Data Engineer',
    company: 'McEwen Mining Inc.',
    year: 'Sept. 2022 – May 2023',
    description: 'Refactored core scanner workflow using Python, automating data batch processing and centralizing geological scan data for distributed analysis.',
    logo: '/exp_logos/mcewen-logo.svg',
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    company: 'Ozon Telecom',
    year: 'Sept. 2021 – Jan. 2022',
    description: 'Contributed to the development of a user app with React, Node.js, NestJS, MongoDB, and Redis, centralizing employee management and attendance tracking.',
    logo: '/exp_logos/ozon-logo.svg',
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <>
      <div className="mt-20 mb-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
          <span className="text-white">WORK</span>
          <br />
          <span className="text-gray-600">EXPERIENCE</span>
        </h1>
      </div>

      {/* Experience List - Matching Projects Section Style */}
      <div className="space-y-6 md:space-y-8 lg:space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 group">
            {/* Company Logo */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative flex-shrink-0 rounded-2xl overflow-hidden bg-white/5 p-2 md:p-3 lg:p-4">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                fill
                style={{ objectFit: 'contain' }}
                className="p-1 md:p-2"
              />
            </div>

            {/* Experience Details */}
            <div className="flex-grow">
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">{exp.company}</h3>
              </div>
              <div className="flex flex-col items-baseline gap-2 mb-2">
                <p className="text-base sm:text-lg md:text-lg lg:text-xl text-orange-400">{exp.title}</p>
                <span className="text-sm sm:text-base md:text-base lg:text-xl text-gray-500">{exp.year}</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">{exp.description}</p>
            </div>

            {/* Arrow Icon - Hidden on mobile, shown on hover on desktop */}
            <div className="hidden md:flex flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceTimeline;