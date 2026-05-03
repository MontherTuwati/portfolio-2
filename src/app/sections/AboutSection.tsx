'use client';

import React from 'react';

const monogramPlacements = [
  { top: '6%', left: '4%', rotate: '-14deg', size: 'text-6xl sm:text-7xl', opacity: 'opacity-[0.06]' },
  { top: '20%', left: '38%', rotate: '10deg', size: 'text-7xl sm:text-8xl', opacity: 'opacity-[0.04]' },
  { top: '52%', left: '10%', rotate: '16deg', size: 'text-5xl sm:text-6xl', opacity: 'opacity-[0.05]' },
  { top: '14%', right: '6%', rotate: '-8deg', size: 'text-5xl', opacity: 'opacity-[0.06]' },
  { top: '44%', right: '14%', rotate: '20deg', size: 'text-6xl sm:text-7xl', opacity: 'opacity-[0.035]' },
  { bottom: '10%', left: '24%', rotate: '-12deg', size: 'text-5xl sm:text-6xl', opacity: 'opacity-[0.045]' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[100dvh] w-full scroll-mt-0"
      aria-labelledby="about-heading"
    >
      <div className="grid h-[100dvh] min-h-[100dvh] w-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        {/* Left — charcoal, monograms, stat */}
        <div className="relative flex min-h-0 flex-col overflow-hidden bg-[#2a2a2a] lg:min-h-[100dvh]">
          {monogramPlacements.map((p, i) => (
            <span
              key={i}
              className={`pointer-events-none absolute select-none font-bold text-white ${p.size} ${p.opacity}`}
              style={{
                top: p.top,
                left: p.left,
                right: p.right,
                bottom: p.bottom,
                transform: `rotate(${p.rotate})`,
              }}
              aria-hidden
            >
              M
            </span>
          ))}

          <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-12 sm:py-16">
            <div className="relative flex flex-col items-center">
              <p className="text-[clamp(4rem,18vw,10rem)] font-bold leading-none tracking-tighter text-neutral-500 lg:text-[clamp(5rem,12vw,11rem)]">
                3+
              </p>
              <p className="absolute left-1/2 top-1/2 max-w-[14rem] -translate-x-1/2 -translate-y-1/2 text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.32em] text-white sm:text-xs sm:tracking-[0.36em]">
                Years of experience
              </p>
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div className="relative flex min-h-0 flex-col overflow-y-auto bg-black lg:min-h-[100dvh]">
          <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 md:px-12 lg:px-14 xl:px-16">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-400 sm:text-xs sm:tracking-[0.2em]">
              About
            </p>
            <h2
              id="about-heading"
              className="mb-8 max-w-[22ch] text-3xl font-bold uppercase leading-[1.08] tracking-tight text-white sm:max-w-none sm:mb-10 sm:text-4xl sm:leading-[1.06] md:text-5xl md:leading-[1.05] lg:text-[2.5rem] lg:leading-[1.04] xl:text-5xl"
            >
              <span className="text-white">The </span>
              <span className="text-orange-400">&apos;why&apos;</span>
              <span className="text-white">
                {' '}
                behind
                <br className="hidden sm:block" /> who I am
              </span>
            </h2>

            <div className="max-w-xl space-y-5 text-left text-sm leading-relaxed text-neutral-300 sm:space-y-6 sm:text-base sm:leading-relaxed">
              <p>
                I care about understanding the reasoning behind decisions—whether that is product,
                architecture, or a tricky bug. That mindset pushed me from early mobile work with
                Flutter and Firebase into web development with Next.js, React, and Tailwind, always
                chasing clarity and maintainable systems.
              </p>
              <p>
                Alongside engineering, I create content: what started as a side project grew into work
                for other creators, with campaigns reaching around fifteen million people within ninety
                days. I bring that same storytelling instinct to how I explain technical work and
                collaborate with teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
