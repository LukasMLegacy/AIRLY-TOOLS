"use client";

import * as React from "react";
import Link from "next/link";
import Loader from "@/components/box-loader";
import { Button } from "@/components/ui/button";
import { getPriceIdByPlanSlug } from "@/lib/pricing";

const MIN_LOADING_MS = 4000;

async function startCheckout(priceId: string): Promise<string> {
  const res = await fetch("/api/stripe/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Checkout failed");
  }

  const data = await res.json();
  if (!data.url) {
    throw new Error("Checkout failed");
  }

  return data.url;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function GoCheckout({ plan }: { plan: string }) {
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const priceId = getPriceIdByPlanSlug(plan);

    if (!priceId) {
      setError("This plan link is not valid.");
      return;
    }

    let cancelled = false;

    async function redirect() {
      try {
        const [url] = await Promise.all([
          startCheckout(priceId!),
          delay(MIN_LOADING_MS),
        ]);

        if (!cancelled) {
          window.location.href = url;
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Something went wrong");
        }
      }
    }

    redirect();

    return () => {
      cancelled = true;
    };
  }, [plan]);

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-muted-foreground">{error}</p>
        <Button asChild className="mt-6">
          <Link href="/pricing">View all plans</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Loader />
      <p className="mt-8 text-lg font-medium">Redirecting to secure checkout</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Please wait while we connect you to Stripe.
      </p>
    </div>
  );
}
