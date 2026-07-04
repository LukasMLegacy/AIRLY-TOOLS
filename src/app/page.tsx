import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  Globe,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { BackgroundPaths } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AIRLY TOOLS | AI Search That Understands You",
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
    icon: MessageSquare,
    title: "Ask in your own words",
    description:
      "Type a question the way you would ask a friend. No keywords, no operators, no tricks required.",
  },
  {
    icon: Brain,
    title: "AIRLY TOOLS understands intent",
    description:
      "Our AI reads between the lines, figures out what you actually mean and scans millions of sources in real time.",
  },
  {
    icon: Sparkles,
    title: "Get a clear answer",
    description:
      "Receive one concise answer with citations you can verify, instead of ten blue links you have to read yourself.",
  },
];

const features = [
  {
    icon: Search,
    title: "Semantic search",
    description:
      "AIRLY TOOLS understands meaning, not just keywords. Ask vague questions and still get precise results.",
  },
  {
    icon: Zap,
    title: "Instant answers",
    description:
      "Median response time under one second. Answers arrive before you finish reaching for your coffee.",
  },
  {
    icon: Globe,
    title: "The whole web, one box",
    description:
      "Products, papers, news, code and more. One search box that covers everything you care about.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by default",
    description:
      "No ad tracking, no selling your data, no creepy profiles. Your searches belong to you.",
  },
  {
    icon: Brain,
    title: "AI summaries",
    description:
      "Long articles condensed into a few sentences with sources attached, so you can decide what to read deeply.",
  },
  {
    icon: MessageSquare,
    title: "Follow up naturally",
    description:
      "Refine any answer with a follow up question. AIRLY TOOLS remembers the context of your conversation.",
  },
];

const stats = [
  { value: "40K+", label: "Active users" },
  { value: "12M", label: "Questions answered" },
  { value: "0.8s", label: "Median answer time" },
  { value: "99.9%", label: "Uptime" },
];

const testimonials = [
  {
    quote:
      "I stopped opening ten tabs to compare products. AIRLY TOOLS gives me the comparison in one answer with sources. It saves me hours every week.",
    name: "Sarah Chen",
    role: "Product Manager at Northwind",
  },
  {
    quote:
      "As a researcher I was skeptical about AI answers. The citations changed my mind. I can verify everything in one click.",
    name: "Dr. Miguel Alvarez",
    role: "Research Scientist",
  },
  {
    quote:
      "Our whole support team switched to AIRLY TOOLS. Finding documentation and past solutions is now instant instead of a ten minute hunt.",
    name: "Emma Kowalski",
    role: "Head of Support at Globex",
  },
];

export default function HomePage() {
  return (
    <>
      <BackgroundPaths title="AIRLY TOOLS" />

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
          title="From question to answer in seconds"
          description="Three simple steps stand between you and exactly what you were looking for."
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
            title="One question. One answer. Done."
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
                    best lightweight laptop for travel under $1000
                  </span>
                </div>
                <div className="mt-6 rounded-xl bg-neutral-50 p-5 dark:bg-neutral-800/60">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4" />
                    AIRLY TOOLS answer
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Based on 27 recent reviews, the best pick right now is the
                    Zephyr Air 13 at $949. It weighs 1.1 kg, lasts 18 hours on
                    battery and handles everyday work with ease. If you need
                    more ports, the Nova Book 14 at $899 is a close second.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["techreview.com", "laptopmag.com", "wired.com"].map(
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
          eyebrow="Features"
          title="Everything you need, nothing you dread"
          description="Built from the ground up for people who value their time and their privacy."
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
              Explore all features
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
          title="People love searching again"
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
