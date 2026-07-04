import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { PricingPlans } from "@/components/pricing-plans";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Lumina. Start free, upgrade when you are ready. No hidden fees, cancel anytime.",
};

const billingFaq = [
  {
    question: "Can I try Pro before paying?",
    answer:
      "Yes. Every new account gets a 14 day Pro trial with full access to all features. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, PayPal, Apple Pay and Google Pay. Enterprise customers can pay by invoice.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Absolutely. You can cancel your subscription from your account settings at any moment. You keep Pro access until the end of your billing period and we never charge you again after that.",
  },
  {
    question: "What happens if I go over the Free plan limit?",
    answer:
      "Nothing bad. Lumina keeps working as a regular search engine and your AI answer allowance refills at the start of the next month. You can upgrade whenever you want unlimited answers.",
  },
  {
    question: "Do you offer discounts for students or nonprofits?",
    answer:
      "Yes. Students and verified nonprofit organizations get 50% off the Pro plan. Contact our support team with proof of status and we will set you up.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "If you are not happy with Pro within the first 30 days, write to us and we will refund you in full. No questions asked.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing, no surprises"
        description="Start free and upgrade when you are ready. Every plan includes cited answers and privacy by default."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <PricingPlans />
      </section>

      <section className="border-t border-black/5 bg-neutral-50 py-24 dark:border-white/10 dark:bg-neutral-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Billing questions"
            title="Frequently asked about pricing"
          />
          <Reveal className="mx-auto mt-12 max-w-2xl" delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {billingFaq.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
