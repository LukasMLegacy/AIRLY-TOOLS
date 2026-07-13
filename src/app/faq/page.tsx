import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Nelson Digital's SEO, Google Ads, landing page, and digital marketing services.",
};

const faqGroups = [
  {
    title: "Services",
    items: [
      {
        question: "What services does Nelson Digital offer?",
        answer:
          "We offer comprehensive digital marketing including SEO, Google Ads and PPC, landing page design and CRO, LLM and AI search visibility, content strategy, social media growth, technical SEO audits, and analytics. Engagements can combine several services or focus on one channel.",
      },
      {
        question: "How is LLM visibility different from traditional SEO?",
        answer:
          "Traditional SEO optimises for Google and other search engines. LLM visibility focuses on how your brand appears in AI powered tools like ChatGPT, Perplexity, and Google AI overviews. We build entity authority, structured content, and citation worthy resources so AI systems recommend your business.",
      },
      {
        question: "Do you manage Google Ads campaigns?",
        answer:
          "Yes. We set up, manage, and optimise Google Ads campaigns including search, shopping, and display. This includes keyword strategy, budget pacing, creative rotation, conversion tracking, and ongoing performance optimisation.",
      },
      {
        question: "How do landing page projects work?",
        answer:
          "We start with funnel diagnostics and conversion goals, then design and build pages aligned with your keyword themes and ad campaigns. Every project includes A/B testing recommendations and analytics setup so you can measure what converts.",
      },
      {
        question: "Can you work alongside our existing agency?",
        answer:
          "Absolutely. Many clients hire us to own the strategy layer, review vendor output, and keep initiatives pointed at the same north star. We provide vendor scorecards, quarterly war games, and executive summaries.",
      },
    ],
  },
  {
    title: "Process and engagement",
    items: [
      {
        question: "What does a typical engagement look like?",
        answer:
          "Most clients start with a Visibility Audit to establish baseline performance and a prioritised roadmap. From there, we recommend a Growth Retainer for ongoing execution or a custom Enterprise Programme for multiple channel needs. We favour phased agreements so both sides validate fit before scaling.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Technical fixes and Google Ads optimisations can show impact within weeks. SEO and content programmes typically show meaningful traffic lifts within 60 to 90 days. We set honest benchmarks upfront and report against them monthly.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Yes. Nelson Digital FZ LLC is registered in the United Arab Emirates and works with businesses worldwide. We adapt strategies to your target markets and can manage campaigns across multiple regions.",
      },
    ],
  },
  {
    title: "Account and billing",
    items: [
      {
        question: "What is the minimum commitment?",
        answer:
          "The Visibility Audit is a one time engagement. Growth Retainers require a three month initial commitment, then continue month to month. Enterprise Programmes are scoped individually with custom terms.",
      },
      {
        question: "How do I get started?",
        answer:
          "Send us a message through the contact form describing your company, what you sell, and what needs to improve online. We read every serious enquiry and reply with next steps, not an automated brochure.",
      },
      {
        question: "How do I cancel or change my retainer?",
        answer:
          "Retainers can be adjusted, paused, or cancelled with 30 days written notice after the initial three month period. Contact us on Telegram @FanvueModelsofficial or email hello@fanvuemodels.com and we will handle it promptly.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you might want to know about working with Nelson Digital. Cannot find your answer? Our team is one message away."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="mx-auto max-w-3xl space-y-14">
          {faqGroups.map((group) => (
            <Reveal key={group.title}>
              <h2 className="text-xl font-bold tracking-tight">
                {group.title}
              </h2>
              <Accordion type="single" collapsible className="mt-4 w-full">
                {group.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}

          <Reveal className="rounded-2xl border border-black/5 bg-neutral-50 p-10 text-center dark:border-white/10 dark:bg-neutral-900/40">
            <h2 className="text-2xl font-bold tracking-tight">
              Still have questions?
            </h2>
            <p className="mt-3 text-muted-foreground">
              We are happy to help with anything not covered here.
            </p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
