"use client";

import * as React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "For casual searchers who want a better way to find things.",
    cta: "Start for Free",
    highlighted: false,
    features: [
      "100 AI answers per month",
      "Semantic web search",
      "Citations on every answer",
      "Browser extension",
      "Search history for 30 days",
    ],
  },
  {
    name: "Pro",
    monthly: 12,
    yearly: 9,
    description: "For power users who search all day, every day.",
    cta: "Get Pro",
    highlighted: true,
    features: [
      "Unlimited AI answers",
      "Conversational follow ups",
      "Academic and developer modes",
      "Collections and sharing",
      "Personal context ranking",
      "Priority support",
      "Unlimited search history",
    ],
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    description: "For teams and companies that run on knowledge.",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Team workspaces",
      "SSO and SAML",
      "Admin controls and audit logs",
      "Custom data connectors",
      "Dedicated account manager",
      "99.9% uptime SLA",
    ],
  },
];

export function PricingPlans() {
  const [yearly, setYearly] = React.useState(true);

  return (
    <div>
      <Reveal className="flex items-center justify-center gap-4">
        <span
          className={cn(
            "text-sm font-medium",
            !yearly ? "text-foreground" : "text-muted-foreground"
          )}
        >
          Monthly
        </span>
        <button
          onClick={() => setYearly((v) => !v)}
          className="relative h-7 w-13 rounded-full bg-neutral-900 transition-colors dark:bg-white"
          aria-label="Toggle yearly billing"
        >
          <span
            className={cn(
              "absolute top-1 h-5 w-5 rounded-full bg-white transition-all dark:bg-neutral-900",
              yearly ? "left-7" : "left-1"
            )}
          />
        </button>
        <span
          className={cn(
            "text-sm font-medium",
            yearly ? "text-foreground" : "text-muted-foreground"
          )}
        >
          Yearly
          <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-400">
            Save 25%
          </span>
        </span>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.1}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border p-8",
                plan.highlighted
                  ? "border-neutral-900 bg-neutral-900 text-white shadow-xl dark:border-white dark:bg-white dark:text-neutral-900"
                  : "border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-neutral-900"
              )}
            >
              {plan.highlighted && (
                <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold dark:bg-neutral-900/10">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p
                className={cn(
                  "mt-2 text-sm",
                  plan.highlighted
                    ? "text-white/70 dark:text-neutral-600"
                    : "text-muted-foreground"
                )}
              >
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                {plan.monthly === null ? (
                  <span className="text-4xl font-bold tracking-tight">
                    Custom
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-bold tracking-tight">
                      ${yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        plan.highlighted
                          ? "text-white/70 dark:text-neutral-600"
                          : "text-muted-foreground"
                      )}
                    >
                      per month
                    </span>
                  </>
                )}
              </div>
              {plan.monthly !== null && yearly && plan.yearly > 0 && (
                <p
                  className={cn(
                    "mt-1 text-xs",
                    plan.highlighted
                      ? "text-white/60 dark:text-neutral-500"
                      : "text-muted-foreground"
                  )}
                >
                  Billed annually
                </p>
              )}
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.highlighted
                          ? "text-white dark:text-neutral-900"
                          : "text-neutral-900 dark:text-white"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className={cn(
                  "mt-8 w-full",
                  plan.highlighted
                    ? "bg-white text-neutral-900 hover:bg-white/90 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                    : ""
                )}
                variant={plan.highlighted ? "default" : "outline"}
              >
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
