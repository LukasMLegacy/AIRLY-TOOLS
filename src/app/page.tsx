import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Brain,
  Globe,
  Megaphone,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

import { BackgroundPaths } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nelson Digital FZ LLC | Digital Marketing & Consulting",
};

const trustedBy = [
  "Northwind",
  "Acme Corp",
  "Globex",
  "Initech",
  "Umbrella",
  "Stark Labs",
];

const steps = [
  {
    icon: Search,
    title: "Discover your market",
    description:
      "We map your competitive set, search demand, and current visibility across Google, paid channels, and AI search surfaces.",
  },
  {
    icon: Target,
    title: "Plan with clarity",
    description:
      "You receive a prioritised roadmap with ranked recommendations, effort estimates, and clear milestones without inflated retainers.",
  },
  {
    icon: Sparkles,
    title: "Execute and compound",
    description:
      "We launch SEO, Google Ads, landing pages, and LLM visibility work, then optimise from live signals so growth compounds over time.",
  },
];

const features = [
  {
    icon: Search,
    title: "SEO & search visibility",
    description:
      "Technical audits, on page optimisation, local SEO, and keyword research structured around the queries that move revenue.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & PPC",
    description:
      "Search, display, and shopping campaigns with disciplined budget pacing, creative rotation, and conversion focused optimisation.",
  },
  {
    icon: Globe,
    title: "Landing pages & CRO",
    description:
      "Conversion focused landing pages, A/B testing, and funnel diagnostics that turn qualified traffic into enquiries and sales.",
  },
  {
    icon: Brain,
    title: "LLM & AI search visibility",
    description:
      "Brand presence in ChatGPT, Perplexity, and AI overviews so your business shows up where people search next.",
  },
  {
    icon: Sparkles,
    title: "Content & brand strategy",
    description:
      "Topic clusters, editorial calendars, and positioning that balance evergreen education with conversion moments.",
  },
  {
    icon: BarChart3,
    title: "Analytics & performance",
    description:
      "Dashboards, attribution reviews, and post campaign retrospectives so every optimisation cycle teaches something durable.",
  },
];

const stats = [
  { value: "120+", label: "Clients served" },
  { value: "340", label: "Campaigns delivered" },
  { value: "3.2x", label: "Avg. traffic lift" },
  { value: "94%", label: "Client retention" },
];

const testimonials = [
  {
    quote:
      "Nelson Digital gave us a ranked SEO roadmap in week one. Six months later our organic traffic tripled and Google Ads finally pays for itself.",
    name: "Sarah Chen",
    role: "Marketing Director at Northwind",
  },
  {
    quote:
      "They pressure tested our agency's work and found gaps we missed for two years. Honest, data driven, and no buzzword decks.",
    name: "Dr. Miguel Alvarez",
    role: "Founder, Alvarez Consulting",
  },
  {
    quote:
      "Our landing pages used to convert at 1.2%. After Nelson Digital's CRO work we're at 4.8% with the same ad spend and nearly five times the leads.",
    name: "Emma Kowalski",
    role: "Head of Growth at Globex",
  },
];

export default function HomePage() {
  return (
    <>
      <BackgroundPaths title="Nelson Digital" />

      <section className="border-y border-black/5 bg-neutral-50 py-12 dark:border-white/10 dark:bg-neutral-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Trusted by teams at
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {trustedBy.map((name) => (
                <span
                  key={name}
                  className="text-lg font-semibold tracking-tight text-neutral-400 dark:text-neutral-600"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From audit to measurable growth"
          description="Three phases that turn strategy into weekly action and compounding results."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-neutral-900">
                <span className="absolute right-6 top-6 text-5xl font-bold text-neutral-100 dark:text-neutral-800">
                  {i + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                  <step.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-neutral-50 py-24 dark:border-white/10 dark:bg-neutral-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="See it in action"
            title="One audit. Clear priorities. Real results."
          />
          <Reveal className="mx-auto mt-14 max-w-3xl" delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-900">
              <div className="flex items-center gap-2 border-b border-black/5 px-5 py-3 dark:border-white/10">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 rounded-xl border border-black/10 px-4 py-3 dark:border-white/15">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm md:text-base">
                    SEO visibility audit for commercial plumbing services, Dubai
                  </span>
                </div>
                <div className="mt-6 rounded-xl bg-neutral-50 p-5 dark:bg-neutral-800/60">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4" />
                    Nelson Digital summary
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    47 ranking opportunities identified across local and
                    commercial intent. Top priority: fix technical crawl
                    errors, launch Google Business Profile optimisation, and
                    build three service landing pages. Projected 2.8x organic
                    traffic within 90 days based on comparable engagements.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Technical SEO", "Local SEO", "Google Ads", "LLM listing"].map(
                      (source) => (
                        <span
                          key={source}
                          className="rounded-full border border-black/10 px-3 py-1 text-xs text-muted-foreground dark:border-white/15"
                        >
                          {source}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Everything your growth needs"
          description="SEO, paid media, landing pages, and AI search visibility in one coherent plan across discovery and conversion."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-neutral-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/features">
              Explore all services
              <span aria-hidden>→</span>
            </Link>
          </Button>
        </Reveal>
      </section>

      <section className="border-y border-black/5 bg-neutral-900 py-20 text-white dark:border-white/10 dark:bg-neutral-900/60">
        <div className="container mx-auto grid grid-cols-2 gap-10 px-4 md:grid-cols-4 md:px-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-4xl font-bold tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Operators trust our recommendations"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-neutral-900">
                <blockquote className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
