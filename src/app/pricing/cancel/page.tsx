import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Checkout cancelled",
  description: "Your checkout was cancelled. No charge was made.",
};

export default function PricingCancelPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Checkout cancelled"
        description="No payment was taken. You can return to pricing and choose a plan whenever you're ready."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="text-muted-foreground">
            If you ran into an issue or have questions about which plan fits
            your business, we're happy to help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/pricing">View pricing</Link>
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
