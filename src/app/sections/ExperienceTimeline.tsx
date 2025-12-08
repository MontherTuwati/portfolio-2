'use client';
import React from 'react';
import Image from 'next/image';

// Experience sorted by date, newest first (reverse chronological)
const experiences = [
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
    id: 2,
    title: 'Intern Software Developer',
    company: 'Ozon Telecom',
    year: 'May 2023 – Dec. 2023',
    description: 'Contributed to the development of a user app with React, Node.js, NestJS, MongoDB, and Redis, centralizing employee management and attendance tracking.',
    logo: '/exp_logos/ozon-logo.svg',
  },
  {
    id: 1,
    title: 'Junior Data Analyst / Core Technician',
    company: 'McEwen Mining Inc.',
    year: 'Sept. 2022 – May 2023',
    description: 'Refactored core scanner workflow using Python, automating data batch processing and centralizing geological scan data for distributed analysis.',
    logo: '/exp_logos/mcewen-logo.svg',
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <>
      <div className="mt-20 mb-16">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold leading-none">
          <span className="text-white">WORK</span>
          <br />
          <span className="text-gray-600">EXPERIENCE</span>
        </h1>
      </div>

      {/* Experience List - Matching Projects Section Style */}
      <div className="space-y-8 md:space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 md:space-x-12 group">
            {/* Company Logo */}
            <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0 rounded-2xl overflow-hidden bg-white/5 p-3 md:p-4">
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
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">{exp.company}</h3>
              </div>
              <div className="flex flex-col items-baseline gap-2 mb-2">
                <p className="text-lg md:text-xl text-orange-400">{exp.title}</p>
                <span className="text-base md:text-xl text-gray-500">{exp.year}</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">{exp.description}</p>
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