import type { Metadata } from "next";
import { Compass, Heart, Lightbulb, Lock } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nelson Digital FZ LLC is a digital marketing and consulting practice built for operators who want measurable online growth.",
};

const values = [
  {
    icon: Compass,
    title: "Data over guesswork",
    description:
      "Every recommendation spells out why it matters, what it costs in effort, and how we will know it worked. No buzzword decks, no inflated retainers.",
  },
  {
    icon: Lock,
    title: "Phased, transparent engagements",
    description:
      "We favour phased agreements so both sides validate fit before scaling spend. Economics stay transparent and incentives align around outcomes.",
  },
  {
    icon: Lightbulb,
    title: "SEO + paid + content as one system",
    description:
      "Tactics should not work in silos. We combine organic search, paid acquisition, and content so marketing stays coherent from first impression to conversion.",
  },
  {
    icon: Heart,
    title: "Honest recommendations",
    description:
      "Consultations stay candid. You get plain language advice, ranked priorities, and nothing padded for the sake of a longer contract.",
  },
];

const team = [
  { name: "Ryan Nelson", role: "Founder & Strategy Lead", initials: "RN" },
  { name: "Olga Nelson", role: "Cofounder & Operations", initials: "ON" },
  { name: "Tomas Novak", role: "Head of SEO", initials: "TN" },
  { name: "Lena Fischer", role: "Head of Paid Media", initials: "LF" },
  { name: "David Okafor", role: "Head of Analytics", initials: "DO" },
  { name: "Maria Santos", role: "Client Success Lead", initials: "MS" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Built for practitioners"
        description="Nelson Digital FZ LLC exists so operators never have to decode buzzwords alone. We specialise in marketing work that lifts online presence and keeps teams rowing toward measurable outcomes."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Our story</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Nelson Digital started when our founders saw the same pattern
              repeat across dozens of businesses: stagnant organic curves,
              uneven brand signals across touchpoints, and campaigns that
              reported vanity wins while pipelines stayed quiet.
            </p>
            <p>
              We built a consultancy around structured discovery, honest
              benchmarks, and roadmaps clients can execute internally or with
              outside partners. Our practice sits at the intersection of search,
              positioning, and modern funnel design, from SEO and Google Ads to
              landing pages and LLM visibility.
            </p>
            <p>
              Today Nelson Digital FZ LLC works with businesses and creators
              across industries from our base in the United Arab Emirates.
              Whether you run a lean team or partner with agencies elsewhere,
              we can own the strategy layer, review vendor output, and keep
              initiatives pointed at the same north star.
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
          title="The people behind Nelson Digital"
          description="Experienced marketers and consultants committed to helping businesses grow online responsibly."
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
