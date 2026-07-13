import type { Metadata } from "next";
import {
  BarChart3,
  Brain,
  Globe,
  Layers,
  Megaphone,
  MessageSquare,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nelson Digital offers SEO, Google Ads, landing pages, LLM visibility, content strategy, and analytics for businesses that want measurable online growth.",
};

const coreFeatures = [
  {
    icon: Search,
    title: "SEO & search visibility",
    description:
      "SEO at Nelson Digital is not a checklist handed to an intern. We study your category, the quality bar on the first page, and the business cases behind each cluster of keywords before anyone edits a title tag. Programs include on page optimisation, content planning by intent, site architecture, local visibility, and migration support.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & PPC",
    description:
      "Paid media should answer clear business questions: what audiences convert, which creatives fatigue, and where marginal spend still pays. We manage search, shopping, display, and social advertising with budget pacing, flighting, and creative rotation so campaigns stay profitable.",
  },
  {
    icon: Globe,
    title: "Landing pages & CRO",
    description:
      "Content supports SEO, ads, and social together. We build conversion focused landing pages with clear narratives, proof points, and A/B testing. Every page is aligned with keyword themes, funnel stage, and the objections your buyers need resolved before they enquire.",
  },
  {
    icon: Brain,
    title: "LLM & AI search visibility",
    description:
      "Search is expanding beyond Google. We help your brand appear in ChatGPT, Perplexity, Google AI overviews, and other LLM surfaces through structured content, authority building, and entity optimisation so you are found where people search next.",
  },
  {
    icon: MessageSquare,
    title: "Content & brand strategy",
    description:
      "Audiences compound when publishing cadence meets genuine curiosity. We design content systems with topic clusters, editorial calendars, and growth loops that balance evergreen education, conversion moments, and community building without burning out your team.",
  },
  {
    icon: BarChart3,
    title: "Analytics & performance",
    description:
      "Decisions need trusted numbers. We tighten tagging, goal definitions, and dashboards so marketing, sales, and leadership see the same story. Post campaign reviews and testing roadmaps ensure every optimisation cycle teaches something durable.",
  },
];

const moreFeatures = [
  {
    icon: Target,
    title: "Digital marketing consultancy",
    description:
      "A seasoned operator in the room. We pressure test plans, interpret vendor reports, and choose between competing channel bets with quarterly war games and executive summaries.",
  },
  {
    icon: TrendingUp,
    title: "Website visibility & traffic growth",
    description:
      "Visibility is more than rankings. We design experiments across search, referrals, social proof, and owned media to lift qualified visits rather than anonymous spikes.",
  },
  {
    icon: Layers,
    title: "Keyword research",
    description:
      "Keyword research is the map for both SEO and paid search. We group terms by intent, difficulty, and business value, then prioritise what to target first.",
  },
  {
    icon: Search,
    title: "Technical SEO audits",
    description:
      "A technical audit explains why crawlers might underrate your site: speed, indexation, duplicates, structured data, and mobile usability. You receive a prioritised backlog, not a generic PDF.",
  },
  {
    icon: Users,
    title: "Social media growth",
    description:
      "Growing social channels means pairing consistent publishing with community appropriate tone, formats that fit each network, and paid boosts where organic alone plateaus.",
  },
  {
    icon: Sparkles,
    title: "Online branding & strategy",
    description:
      "Brands win when every touchpoint feels intentional. We help articulate positioning, narrative arcs, and guardrails for creators and ambassadors who speak on your behalf online.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Services built for momentum"
        description="From SEO and Google Ads to landing pages and LLM visibility, we translate strategy into weekly action so early wins fund the heavier lifts that follow."
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
            title="Additional capabilities"
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
