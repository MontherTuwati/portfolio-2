'use client';

import React from 'react';
import GitHubLiveFeed from '@/components/GitHubLiveFeed';
import { creativeStack, devStack } from '@/data/techStack';
import { techIconUrl } from '@/lib/techIconSlugs';

const stackEntries: { title: string; items: readonly string[] }[] = [
  ...Object.entries(devStack).map(([title, items]) => ({ title, items })),
  { title: 'Creative & media', items: creativeStack },
];

function TechItem({ name }: { name: string }) {
  const url = techIconUrl(name);

  return (
    <div className="flex min-w-[4.25rem] flex-col items-center gap-2 sm:min-w-[5rem]">
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element -- external brand icons
        <img
          src={url}
          alt=""
          width={24}
          height={24}
          loading="lazy"
          className="h-6 w-6 object-contain"
        />
      ) : (
        <span
          className="flex h-6 w-6 items-center justify-center rounded bg-neutral-800 text-[10px] font-bold text-neutral-500"
          aria-hidden
        >
          ?
        </span>
      )}
      <span className="max-w-[6rem] text-center text-[10px] font-medium uppercase leading-tight tracking-wide text-neutral-500 sm:max-w-[5.5rem] sm:text-[11px]">
        {name}
      </span>
    </div>
  );
}

export default function TechnologiesSection() {
  return (
    <section className="mt-24 md:mt-32 lg:mt-40" aria-labelledby="technologies-heading">
      <div className="mb-10 md:mb-12 lg:mb-14">
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

      <div className="grid gap-12 lg:grid-cols-[1fr_minmax(260px,340px)] lg:items-start lg:gap-0 xl:grid-cols-[1fr_minmax(280px,380px)]">
        <div className="min-w-0 lg:border-r-4 lg:border-orange-500 lg:pr-10 xl:pr-14">
          <div className="divide-y divide-neutral-800">
            {stackEntries.map(({ title, items }) => (
              <div key={title} className="py-8 first:pt-0 lg:py-9 lg:first:pt-0">
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 md:text-sm">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-8">
                  {items.map((name) => (
                    <TechItem key={name} name={name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 border-t-4 border-orange-500 pt-10 lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14">
          <GitHubLiveFeed />
        </div>
      </div>
    </section>
  );
}
