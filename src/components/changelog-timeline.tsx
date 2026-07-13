"use client";

import { motion } from "framer-motion";

import { Timeline } from "@/components/timeline";

export type Release = {
  version: string;
  date: string;
  tag: string;
  highlights: string[];
};

export function ChangelogTimeline({ releases }: { releases: Release[] }) {
  const data = releases.map((release) => ({
    title: release.date,
    content: (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900 md:p-8"
      >
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="text-xl font-bold tracking-tight md:text-2xl">
            Version {release.version}
          </h4>
          <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-neutral-900">
            {release.tag}
          </span>
        </div>
        <ul className="mt-4 space-y-2">
          {release.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-sm text-muted-foreground md:text-base"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
              {highlight}
            </li>
          ))}
        </ul>
      </motion.div>
    ),
  }));

  return <Timeline data={data} />;
}
