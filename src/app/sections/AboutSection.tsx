'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ABOUT_PORTRAIT = '/images/portrait.svg';

export default function AboutSection() {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-0 max-lg:min-h-0 lg:h-[115dvh] lg:min-h-0"
      aria-labelledby="about-heading"
    >
      <div className="grid w-full grid-cols-1 grid-rows-[64dvh_auto] sm:grid-rows-[66dvh_auto] lg:h-full lg:min-h-0 lg:grid-cols-2 lg:grid-rows-1">
        {/* Left — photo */}
        <div className="relative h-full min-h-0 min-w-0 overflow-hidden bg-neutral-950 lg:min-h-0">
          {!portraitFailed ? (
            <Image
              src={ABOUT_PORTRAIT}
              alt="Monther Tuwati"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
              unoptimized={ABOUT_PORTRAIT.endsWith('.svg')}
              onError={() => setPortraitFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 px-6 text-center">
              <p className="text-sm text-neutral-500">
                Could not load portrait. Check{' '}
                <code className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-xs text-neutral-400">
                  {ABOUT_PORTRAIT}
                </code>{' '}
                under <code className="text-neutral-400">public/</code>.
              </p>
            </div>
          )}
        </div>

        <div className="relative min-h-0 bg-black max-lg:overflow-visible lg:h-full lg:overflow-y-auto lg:overscroll-y-contain">
          <div className="flex w-full max-w-2xl flex-col justify-start px-6 pb-20 pt-12 sm:px-10 sm:pb-24 sm:pt-14 md:px-12 lg:mx-0 lg:max-w-none lg:min-h-full lg:justify-center lg:px-14 lg:pb-24 lg:pt-16 xl:px-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 sm:mb-6 sm:text-sm sm:tracking-[0.22em]">
              About
            </p>
            <h2
              id="about-heading"
              className="mb-8 max-w-[22ch] text-4xl font-bold uppercase leading-[1.06] tracking-tight text-white sm:max-w-none sm:mb-10 sm:text-5xl sm:leading-[1.05] md:text-6xl md:leading-[1.04] lg:mb-12 lg:text-6xl lg:leading-[1.03] xl:text-7xl"
            >
              <span className="text-white">The </span>
              <span className="text-orange-400">&apos;why&apos;</span>
              <span className="text-white">
                {' '}
                behind
                <br className="hidden sm:block" /> who I am
              </span>
            </h2>

            <div className="max-w-2xl space-y-6 text-left text-base leading-relaxed text-neutral-200 sm:space-y-7 sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed">
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
