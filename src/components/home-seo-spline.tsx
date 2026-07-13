"use client";

import Link from "next/link";

import { SplineScene } from "@/components/spline-scene";
import { Spotlight } from "@/components/spotlight";
import { Button } from "@/components/ui/button";

const DEFAULT_SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const seoTags = [
  "Technical SEO",
  "Keyword research",
  "Local SEO",
  "LLM visibility",
];

export function HomeSeoSpline() {
  const scene =
    process.env.NEXT_PUBLIC_SPLINE_SCENE_URL ?? DEFAULT_SPLINE_SCENE;

  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
      <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="relative z-10 flex h-full flex-col lg:flex-row">
          <div className="flex flex-1 flex-col justify-center p-8 md:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Search visibility
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 sm:text-4xl md:text-5xl">
              Rank where buyers actually search
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-300 md:text-base">
              Technical SEO audits, on page fixes, local visibility, and LLM
              presence across Google, paid surfaces, and AI overviews. We map
              the queries that move revenue, then execute fixes that compound
              month over month.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {seoTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button
                asChild
                className="bg-white text-neutral-900 hover:bg-neutral-100"
              >
                <Link href="/pricing">
                  View plans
                  <span aria-hidden>→</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[240px] flex-1 lg:min-h-0">
            <SplineScene scene={scene} className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
