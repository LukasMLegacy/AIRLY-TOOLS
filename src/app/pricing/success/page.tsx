import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Send } from "lucide-react";

import { ConfettiBurst } from "@/components/confetti-burst";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Subscription confirmed",
  description: "Your Nelson Digital subscription is active.",
};

export default function PricingSuccessPage() {
  return (
    <>
      <ConfettiBurst />
      <PageHeader
        eyebrow="Pricing"
        title="You're subscribed"
        description="Payment received. Contact us to start onboarding."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>

          <h2 className="text-lg font-semibold tracking-tight">Next step</h2>
          <p className="mt-3 text-muted-foreground">
            Your payment was successful. To get started, contact us with your
            business name and goals. We will onboard your account within 1
            business day.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            A confirmation email from Stripe is on its way to your inbox.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <a
                href="https://t.me/FanvueModelsofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-4 w-4" />
                @FanvueModelsofficial
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:hello@fanvuemodels.com">
                <Mail className="h-4 w-4" />
                hello@fanvuemodels.com
              </a>
            </Button>
          </div>

          <div className="mt-6">
            <Button variant="ghost" asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
