'use client';

import React, { useCallback, useEffect, useState } from 'react';

const GITHUB_USER = 'monthertuwati';
const CACHE_KEY = 'portfolio-github-activity';
const CACHE_MS = 5 * 60 * 1000;

type CommitRow = {
  sha: string;
  message: string;
  date: string;
  repo: string;
};

type GitHubEvent = {
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    commits?: { sha: string; message: string }[];
  };
};

function parseEvents(events: GitHubEvent[]): CommitRow[] {
  const rows: CommitRow[] = [];
  const seen = new Set<string>();

  for (const ev of events) {
    if (ev.type !== 'PushEvent' || !ev.payload.commits?.length) continue;
    const date = ev.created_at.slice(0, 10);
    for (const c of ev.payload.commits) {
      if (seen.has(c.sha)) continue;
      seen.add(c.sha);
      const line = c.message.split('\n')[0]?.trim() || 'Update';
      rows.push({
        sha: c.sha.slice(0, 7),
        message: line.length > 72 ? `${line.slice(0, 69)}…` : line,
        date,
        repo: ev.repo.name,
      });
      if (rows.length >= 5) return rows;
    }
  }
  return rows;
}

function readCache(): CommitRow[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { t, rows } = JSON.parse(raw) as { t: number; rows: CommitRow[] };
    if (Date.now() - t > CACHE_MS) return null;
    return rows;
  } catch {
    return null;
  }
}

function writeCache(rows: CommitRow[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), rows }));
  } catch {
    /* ignore quota */
  }
}

export default function GitHubLiveFeed() {
  const [rows, setRows] = useState<CommitRow[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  const load = useCallback(async () => {
    const cached = readCache();
    if (cached?.length) {
      setRows(cached);
      setStatus('ok');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=25`,
        { headers: { Accept: 'application/vnd.github+json' } },
      );
      if (!res.ok) throw new Error(String(res.status));
      const events = (await res.json()) as GitHubEvent[];
      const next = parseEvents(events);
      setRows(next);
      if (next.length) writeCache(next);
      setStatus('ok');
    } catch {
      setStatus('error');
      setRows([]);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div>
      <div className="mb-6 flex items-baseline gap-2">
        <h3 className="text-3xl font-bold tracking-tight text-neutral-600 sm:text-4xl">LIVE</h3>
        <span className="inline-block size-2.5 shrink-0 bg-orange-500 sm:size-3" aria-hidden />
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 sm:text-sm">
            <span className="fab fa-github text-lg text-white" aria-hidden />
            <span>Live feed / GitHub</span>
          </div>
          <span className="rounded-full border border-orange-500/50 bg-orange-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-orange-400">
            • Live
          </span>
        </div>

        <ul className="space-y-0 divide-y divide-neutral-800">
          {status === 'loading' &&
            [0, 1, 2].map((i) => (
              <li key={i} className="flex animate-pulse gap-3 py-3 first:pt-0">
                <div className="h-4 w-14 rounded bg-neutral-800" />
                <div className="h-4 flex-1 rounded bg-neutral-800" />
                <div className="h-4 w-16 rounded bg-neutral-800" />
              </li>
            ))}

          {status !== 'loading' &&
            rows.map((r) => (
              <li key={r.sha} className="flex flex-col gap-1 py-3 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] leading-snug text-neutral-200 sm:text-sm">{r.message}</p>
                  <p className="mt-1 font-mono text-[11px] text-neutral-500">
                    {r.repo} · <span className="text-orange-400/90">{r.sha}</span>
                  </p>
                </div>
                <time className="shrink-0 font-mono text-[11px] text-neutral-500 sm:text-xs" dateTime={r.date}>
                  {r.date}
                </time>
              </li>
            ))}

          {status === 'ok' && rows.length === 0 && (
            <li className="py-6 text-center text-sm text-neutral-500">No recent push activity yet.</li>
          )}

          {status === 'error' && (
            <li className="py-6 text-center text-sm text-neutral-500">
              Could not load GitHub activity. Try again later.
            </li>
          )}
        </ul>

        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 transition-colors hover:text-orange-300"
        >
          View profile
          <span className="fas fa-arrow-up-right-from-square text-[10px]" aria-hidden />
        </a>
      </div>

      <div className="mt-4 flex flex-wrap justify-between gap-2 font-mono text-[10px] uppercase tracking-wider text-neutral-600 sm:text-xs">
        <span>Source · GitHub API</span>
        <span>Refresh · 5 min cache</span>
      </div>
    </div>
  );
}
