import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

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
        description="Thank you for choosing Nelson Digital. Your subscription is active and we'll be in touch shortly to onboard your account."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-muted-foreground">
            A confirmation email from Stripe is on its way. You can manage your
            subscription, update payment details, or cancel anytime through the
            Stripe Customer Portal.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
