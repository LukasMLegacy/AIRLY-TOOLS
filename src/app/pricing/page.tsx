import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { PricingCheckout } from "@/components/pricing-checkout";
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
    "SEO monitoring from $99/mo, managed execution from $185/mo, and premium multiple channels programmes from $271/mo. Every plan includes concrete deliverables: audits, fixes, Ads optimisation, and LLM visibility.",
};

const billingFaq = [
  {
    question: "How does checkout work?",
    answer:
      "Click Subscribe on any plan and you'll be redirected to Stripe Checkout, a secure hosted payment page. After payment, you'll land on a confirmation page and receive a receipt by email. No account creation required on our site.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Stripe Checkout accepts major credit and debit cards. Additional payment methods may appear depending on your region. All transactions are processed securely by Stripe.",
  },
  {
    question: "Can I cancel or change my subscription?",
    answer:
      "Yes. Subscriptions are managed through the Stripe Customer Portal, where you can cancel, update your payment method, or view invoices. Cancel anytime. Your access continues until the end of the current billing period.",
  },
  {
    question: "What's the difference between Standard and Premium?",
    answer:
      "Standard includes everything in Basic plus direct execution: SEO fixes implemented, Google Ads optimisation, landing page CRO, and competitor gap analysis. Premium adds a dedicated senior strategist, an LLM visibility programme, a 48 hour SLA on critical changes, a 90 day growth roadmap, executive ROI reporting, and a priority implementation queue.",
  },
  {
    question: "What does the service multiplier mean?",
    answer:
      "The multiplier (1x, 2x, 3x, or 5x) is how many active services from our catalog we execute for you simultaneously. For example, Standard 2x covers two services, such as SEO and Google Ads, at the same time.",
  },
  {
    question: "Is Basic a subscription or a one time purchase?",
    answer:
      "Basic is a monthly subscription ($99/mo) covering technical SEO audits, rank tracking, crawl alerts, competitor snapshots, and a monthly action digest. It does not include direct implementation. Upgrade to Standard or Premium when you want us executing fixes and campaigns for you.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Plans that scale with your ambition"
        description="Start with monitoring, then add managed execution as you grow. Every plan is billed monthly through Stripe with no hidden fees."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <PricingCheckout />
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
