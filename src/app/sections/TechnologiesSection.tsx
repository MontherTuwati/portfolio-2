'use client';

import React from 'react';
import SkillTag from '@/components/SkillTag';
import { creativeStack, devStack } from '@/data/techStack';

const stackEntries: { title: string; items: readonly string[] }[] = [
  ...Object.entries(devStack).map(([title, items]) => ({ title, items })),
  { title: 'Creative & media', items: creativeStack },
];

export default function TechnologiesSection() {
  return (
    <section className="mt-24 md:mt-32 lg:mt-40" aria-labelledby="technologies-heading">
      <div className="mb-10 md:mb-14">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 md:text-sm">
          Technologies
        </p>
        <h2
          id="technologies-heading"
          className="text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Stack &amp; code
        </h2>
      </div>

      <div className="space-y-10 border-l-4 border-orange-500 pl-6 md:pl-10">
        {stackEntries.map(({ title, items }) => (
          <div key={title}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 md:text-sm">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((name) => (
                <SkillTag key={name} skillName={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
