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
    "Answers to the most common questions about AIRLY TOOLS, the AI search engine that understands you.",
};

const faqGroups = [
  {
    title: "Product",
    items: [
      {
        question: "What exactly is AIRLY TOOLS?",
        answer:
          "AIRLY TOOLS is an AI search engine. Instead of returning a list of links, it reads the most relevant sources for you and replies with one clear answer, complete with citations you can verify. Think of it as a very fast research assistant that lives in your search bar.",
      },
      {
        question: "How is it different from a regular search engine?",
        answer:
          "Regular search engines match keywords and rank pages, then leave the reading to you. AIRLY TOOLS understands the meaning of your question, gathers information from multiple sources and synthesizes a direct answer. You get the conclusion first and the links second.",
      },
      {
        question: "Can I trust the answers?",
        answer:
          "Every answer includes citations that link straight to the original sources, so you can verify any claim in one click. When sources disagree or evidence is thin, AIRLY TOOLS says so instead of guessing. We believe honesty beats confidence.",
      },
      {
        question: "What languages does AIRLY TOOLS support?",
        answer:
          "AIRLY TOOLS currently understands questions in more than 30 languages including English, Spanish, German, French, Slovak, Czech, Japanese and Portuguese. Answers are returned in the language you ask in.",
      },
      {
        question: "Does AIRLY TOOLS work on mobile?",
        answer:
          "Yes. We have native apps for iOS and Android, and the web app works beautifully in any mobile browser. Your history and collections sync across all devices.",
      },
    ],
  },
  {
    title: "Privacy and data",
    items: [
      {
        question: "Do you track my searches?",
        answer:
          "We store your search history only so you can access it yourself, and you can delete it at any time. We never build advertising profiles, never sell data to third parties and never share your queries with advertisers. Privacy is the foundation of the product.",
      },
      {
        question: "Are my searches used to train AI models?",
        answer:
          "No, not by default. Model improvement uses anonymized, aggregated patterns only, and you can opt out entirely in your settings with a single switch.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "All data is encrypted in transit and at rest and stored in certified data centers in the United States and the European Union. European users can choose EU only storage in their account settings.",
      },
    ],
  },
  {
    title: "Account and billing",
    items: [
      {
        question: "Do I need an account to use AIRLY TOOLS?",
        answer:
          "You can try AIRLY TOOLS without an account. Creating a free account unlocks search history, collections and syncing across devices.",
      },
      {
        question: "How does the free plan work?",
        answer:
          "The free plan includes 100 AI answers per month plus unlimited classic semantic search. The allowance resets at the start of each month and you never get charged automatically.",
      },
      {
        question: "How do I cancel my subscription?",
        answer:
          "Go to account settings, choose Billing and click Cancel subscription. You keep Pro access until the end of the period you paid for. You can also just email support and we will handle it for you.",
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
        description="Everything you might want to know about AIRLY TOOLS. Cannot find your answer? Our team is one message away."
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
              <Link href="/contact">Contact Support</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
