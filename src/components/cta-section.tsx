import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="container mx-auto px-4 py-24 md:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-6 py-20 text-center text-white dark:bg-white dark:text-neutral-900 md:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_60%)]" />
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to search smarter?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/70 dark:text-neutral-600">
            Join over 40 000 people who already find what they need in
            seconds. No credit card required.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-white text-neutral-900 hover:bg-white/90 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
              <Link href="/pricing">Get Started Free</Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="text-white hover:bg-white/10 hover:text-white dark:text-neutral-900 dark:hover:bg-neutral-900/10 dark:hover:text-neutral-900"
            >
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
