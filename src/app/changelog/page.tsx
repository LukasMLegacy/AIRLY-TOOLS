import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "New features, improvements and fixes shipped to AIRLY TOOLS, updated every few weeks.",
};

const releases = [
  {
    version: "2.4",
    date: "June 18, 2026",
    tag: "New",
    highlights: [
      "Team workspaces are now generally available on the Enterprise plan.",
      "Collections can be exported to PDF and Markdown.",
      "Answer generation is 30% faster on complex research questions.",
    ],
  },
  {
    version: "2.3",
    date: "May 2, 2026",
    tag: "Improved",
    highlights: [
      "Academic mode now formats citations in APA, MLA and Chicago styles.",
      "Added support for 8 new languages including Korean and Turkish.",
      "Redesigned mobile apps with a cleaner answer view.",
    ],
  },
  {
    version: "2.2",
    date: "March 21, 2026",
    tag: "New",
    highlights: [
      "Developer mode: search documentation and code with syntax aware answers.",
      "Browser extension for Safari joins Chrome and Firefox.",
      "You can now pin favorite sources to rank them higher in your results.",
    ],
  },
  {
    version: "2.1",
    date: "February 5, 2026",
    tag: "Improved",
    highlights: [
      "Follow up questions now remember longer conversations.",
      "EU only data storage option for European users.",
      "Dark mode contrast improvements across the whole app.",
    ],
  },
  {
    version: "2.0",
    date: "December 10, 2025",
    tag: "Major",
    highlights: [
      "Brand new answer engine with citations on every single claim.",
      "Median answer time dropped below one second worldwide.",
      "Collections: save, organize and share your research.",
      "Complete visual redesign of web and mobile apps.",
    ],
  },
  {
    version: "1.8",
    date: "October 3, 2025",
    tag: "Improved",
    highlights: [
      "Personal context ranking enters public beta.",
      "New privacy dashboard: see and delete everything we store, in one place.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Changelog"
        title="What is new in AIRLY TOOLS"
        description="We ship improvements every few weeks. Here is what changed recently."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="mx-auto max-w-3xl">
          <ol className="relative space-y-12 border-l border-black/10 pl-8 dark:border-white/15">
            {releases.map((release) => (
              <li key={release.version} className="relative">
                <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-white dark:border-white/15 dark:bg-neutral-900">
                  <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
                </span>
                <Reveal>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Version {release.version}
                    </h2>
                    <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-neutral-900">
                      {release.tag}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {release.date}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {release.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
