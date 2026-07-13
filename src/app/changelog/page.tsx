import type { Metadata } from "next";

import { ChangelogTimeline } from "@/components/changelog-timeline";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Agency milestones, service updates, and client wins from Nelson Digital FZ LLC since 2020.",
};

const releases = [
  {
    version: "2.4",
    date: "June 18, 2026",
    tag: "New",
    highlights: [
      "LLM visibility service launched with brand presence in ChatGPT, Perplexity, and AI overviews.",
      "Enterprise Programme now includes vendor oversight and quarterly executive reviews.",
      "New landing page CRO framework with built in A/B testing recommendations.",
    ],
  },
  {
    version: "2.3",
    date: "May 2, 2026",
    tag: "Improved",
    highlights: [
      "Google Ads management expanded to include Performance Max and shopping campaigns.",
      "Technical SEO audit template updated with Core Web Vitals and AI crawlability checks.",
      "Monthly reporting dashboards redesigned for clearer attribution insights.",
    ],
  },
  {
    version: "2.2",
    date: "March 21, 2026",
    tag: "New",
    highlights: [
      "Growth Retainer package launched with SEO, Ads, and content under one engagement.",
      "Added social media growth as a standalone service offering.",
      "Client portal for real time campaign performance tracking.",
    ],
  },
  {
    version: "2.1",
    date: "February 5, 2026",
    tag: "Improved",
    highlights: [
      "Visibility Audit now includes LLM presence assessment and competitor AI ranking.",
      "Expanded international campaign management to 12 new markets.",
      "Phased engagement model refined with clearer milestone definitions.",
    ],
  },
  {
    version: "2.0",
    date: "December 10, 2025",
    tag: "Major",
    highlights: [
      "Nelson Digital FZ LLC formally established in the United Arab Emirates.",
      "Full service offering launched: SEO, Google Ads, landing pages, and consulting.",
      "First 50 client engagements completed with 3.2x average traffic lift.",
      "Website and brand identity refreshed at nelsondigital.shop.",
    ],
  },
  {
    version: "1.8",
    date: "October 3, 2025",
    tag: "Improved",
    highlights: [
      "Digital marketing consultancy practice opened for strategy only engagements.",
      "Keyword research methodology standardised across all SEO programmes.",
    ],
  },
  {
    version: "1.7",
    date: "June 14, 2025",
    tag: "New",
    highlights: [
      "Landing page design and CRO added as a core service line.",
      "First enterprise client signed across three regional markets.",
      "Analytics dashboards standardised with GA4 and conversion event mapping.",
    ],
  },
  {
    version: "1.6",
    date: "November 8, 2024",
    tag: "Improved",
    highlights: [
      "Early LLM visibility research programme launched for select clients.",
      "Google Ads management expanded to shopping and remarketing campaigns.",
      "Technical SEO audit playbook updated with structured data and indexation checks.",
    ],
  },
  {
    version: "1.5",
    date: "April 22, 2024",
    tag: "New",
    highlights: [
      "Growth Retainer concept introduced for ongoing SEO and paid media execution.",
      "Content strategy service formalised with topic cluster planning.",
      "Client retention crossed 90% for the first time.",
    ],
  },
  {
    version: "1.4",
    date: "September 5, 2023",
    tag: "Improved",
    highlights: [
      "International SEO engagements opened for clients targeting multiple countries.",
      "Competitor gap analysis framework added to all audit deliverables.",
      "Team grew to five specialists across SEO, paid media, and analytics.",
    ],
  },
  {
    version: "1.3",
    date: "February 17, 2023",
    tag: "New",
    highlights: [
      "Visibility Audit product launched as a structured entry engagement.",
      "Local SEO programmes added for multi location businesses.",
      "First published case study documenting a 2.4x organic traffic lift.",
    ],
  },
  {
    version: "1.2",
    date: "July 11, 2022",
    tag: "Improved",
    highlights: [
      "Google Ads management became a standalone service offering.",
      "Monthly reporting templates introduced with channel level ROI tracking.",
      "Phased engagement model adopted to reduce risk for new clients.",
    ],
  },
  {
    version: "1.1",
    date: "March 3, 2021",
    tag: "New",
    highlights: [
      "First three retainer clients signed for ongoing SEO execution.",
      "On page optimisation and technical fixes added to delivery scope.",
      "Consulting practice named Nelson Digital and brand identity established.",
    ],
  },
  {
    version: "1.0",
    date: "January 15, 2020",
    tag: "Major",
    highlights: [
      "Nelson Digital founded as an independent SEO and digital marketing practice.",
      "First client engagements focused on keyword research and rank tracking.",
      "Core belief established: data over guesswork, honest recommendations only.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Changelog"
        title="Agency updates and milestones"
        description="Service launches, methodology improvements, and key wins since 2020."
      />

      <ChangelogTimeline releases={releases} />
    </>
  );
}
