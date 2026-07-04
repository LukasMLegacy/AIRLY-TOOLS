import type { Metadata } from "next";
import {
  BookOpen,
  Brain,
  Code2,
  Globe,
  Layers,
  MessageSquare,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore everything Lumina can do: semantic search, instant answers, AI summaries, privacy by default and much more.",
};

const coreFeatures = [
  {
    icon: Search,
    title: "Semantic search",
    description:
      "Traditional search matches keywords. Lumina matches meaning. Ask about that movie where time runs backwards and get the right answer, even if you never mention the title. Our models understand context, synonyms and intent, so vague questions still lead to precise results.",
  },
  {
    icon: Zap,
    title: "Instant answers",
    description:
      "Waiting is the enemy of curiosity. Lumina answers in under a second for most queries, powered by a globally distributed index and models optimized for speed. You ask, you read, you move on with your day.",
  },
  {
    icon: Sparkles,
    title: "AI summaries with citations",
    description:
      "Every answer comes with sources you can inspect. Lumina condenses long articles, reviews and papers into a few clear sentences and always shows where each claim comes from. Trust, but verify, in one click.",
  },
  {
    icon: MessageSquare,
    title: "Conversational follow ups",
    description:
      "Search is rarely a single question. Ask a follow up and Lumina remembers what you were talking about. Narrow down, compare options or ask for more detail without repeating yourself.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by default",
    description:
      "We do not sell your data, build ad profiles or track you across the web. Searches are encrypted in transit and at rest, and you can wipe your history at any time with a single click.",
  },
  {
    icon: Globe,
    title: "Search everything",
    description:
      "The web, news, academic papers, product catalogs, code repositories and forums. Lumina brings them together in one search box so you never have to think about where to look.",
  },
];

const moreFeatures = [
  {
    icon: Layers,
    title: "Collections",
    description:
      "Save answers and sources into shareable collections for research projects, trip planning or team knowledge.",
  },
  {
    icon: Code2,
    title: "Developer mode",
    description:
      "Search documentation and code with syntax aware results. Copy working snippets straight from the answer.",
  },
  {
    icon: BookOpen,
    title: "Academic mode",
    description:
      "Prioritize peer reviewed sources and get citations formatted for your bibliography.",
  },
  {
    icon: Smartphone,
    title: "Everywhere you are",
    description:
      "Native apps for iOS and Android plus browser extensions for Chrome, Firefox and Safari.",
  },
  {
    icon: Users,
    title: "Team workspaces",
    description:
      "Share collections, searches and answers with your team. Knowledge stays in one place.",
  },
  {
    icon: Brain,
    title: "Personal context",
    description:
      "Optionally let Lumina learn your preferences to rank results the way you would. Fully under your control.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Search that works the way you think"
        description="Lumina replaces keyword guessing and endless tabs with one clear answer. Here is everything under the hood."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="space-y-20">
          {coreFeatures.map((feature, i) => (
            <Reveal key={feature.title}>
              <div
                className={`flex flex-col gap-8 md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-black/5 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:border-white/10 dark:from-neutral-900 dark:to-neutral-800">
                    <feature.icon className="h-16 w-16 text-neutral-300 dark:text-neutral-600" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-neutral-50 py-24 dark:border-white/10 dark:bg-neutral-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="And more"
            title="Small details, big difference"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {moreFeatures.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 0.1}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-neutral-900">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
