import type { Metadata } from "next";
import { Compass, Heart, Lightbulb, Lock } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind AIRLY TOOLS and learn why we believe searching the web should feel effortless.",
};

const values = [
  {
    icon: Compass,
    title: "Answers over links",
    description:
      "We measure success by how fast you close the tab, not how long you stay. Search should end with an answer, not a list of homework.",
  },
  {
    icon: Lock,
    title: "Privacy is not a feature",
    description:
      "It is the foundation. We built AIRLY TOOLS without ad tracking from day one, so we never have to choose between you and advertisers.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity deserves speed",
    description:
      "Every second spent waiting is a thought interrupted. We obsess over latency so your ideas keep flowing.",
  },
  {
    icon: Heart,
    title: "Honest by design",
    description:
      "Every answer shows its sources. When we are not sure, we say so. Trust is earned one citation at a time.",
  },
];

const team = [
  { name: "Alex Rivera", role: "Cofounder and CEO", initials: "AR" },
  { name: "Priya Sharma", role: "Cofounder and CTO", initials: "PS" },
  { name: "Tomas Novak", role: "Head of AI", initials: "TN" },
  { name: "Lena Fischer", role: "Head of Design", initials: "LF" },
  { name: "David Okafor", role: "Head of Engineering", initials: "DO" },
  { name: "Maria Santos", role: "Head of Operations", initials: "MS" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="We think search is broken. We are fixing it."
        description="AIRLY TOOLS started with a simple frustration: finding anything online meant wading through ads, SEO spam and ten open tabs."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Our story</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              In 2023, our founders Alex and Priya were building a research
              tool and realized they spent more time searching for information
              than using it. Search engines had turned into ad platforms.
              Results were optimized for clicks, not correctness. Finding a
              straight answer felt like a small miracle.
            </p>
            <p>
              So they built something for themselves: a search box that read
              the sources, understood the question and replied with one clear,
              cited answer. Friends asked for access. Then friends of friends.
              Six months later, AIRLY TOOLS had ten thousand users and a waiting
              list.
            </p>
            <p>
              Today AIRLY TOOLS answers millions of questions every month for
              students, researchers, developers and curious people everywhere.
              We are a fully remote team of 24 across nine countries, united
              by one belief: searching for knowledge should never be the hard
              part.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-black/5 bg-neutral-50 py-24 dark:border-white/10 dark:bg-neutral-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading eyebrow="Values" title="What we stand for" />
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-neutral-900">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <SectionHeading
          eyebrow="Team"
          title="The people behind AIRLY TOOLS"
          description="A small crew with a big mission, working from nine countries around the world."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.1}>
              <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-lg font-semibold text-white dark:bg-white dark:text-neutral-900">
                  {member.initials}
                </span>
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
