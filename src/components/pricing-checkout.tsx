"use client";

import * as React from "react";

import {
  PricingCards,
  buildTierFromConfig,
  type PricingTier,
} from "@/components/pricing-cards";
import { cn } from "@/lib/utils";
import {
  BASIC_TIER,
  PREMIUM_TIER,
  STANDARD_TIER,
  getClientPriceIds,
} from "@/lib/pricing";

function VariantSelector({
  variants,
  selectedId,
  onSelect,
  highlight,
}: {
  variants: { id: string; label: string; price: number; services: number }[];
  selectedId: string;
  onSelect: (id: string) => void;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          onClick={() => onSelect(variant.id)}
          className={cn(
            "rounded-full border px-2 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm",
            selectedId === variant.id
              ? highlight
                ? "border-white bg-white text-neutral-900"
                : "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
              : highlight
                ? "border-neutral-700 text-neutral-400 hover:border-neutral-500"
                : "border-neutral-200 text-neutral-600 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-400"
          )}
        >
          {variant.services}x · ${variant.price}
        </button>
      ))}
    </div>
  );
}

async function startCheckout(priceId: string): Promise<string | null> {
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
  return data.url ?? null;
}

export function PricingCheckout() {
  const priceIds = getClientPriceIds();
  const [standardVariant, setStandardVariant] = React.useState("standard-1x");
  const [premiumVariant, setPremiumVariant] = React.useState("premium-1x");
  const [loadingId, setLoadingId] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubscribe = async (tierId: string, priceId: string) => {
    if (!priceId) {
      setError(
        "Stripe is not configured yet. Add price IDs to your .env.local file."
      );
      return;
    }

    setError(null);
    setLoadingId(tierId);

    try {
      const url = await startCheckout(priceId);
      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoadingId(null);
    }
  };

  const selectedStandard =
    STANDARD_TIER.variants!.find((v) => v.id === standardVariant) ??
    STANDARD_TIER.variants![0];

  const selectedPremium =
    PREMIUM_TIER.variants!.find((v) => v.id === premiumVariant) ??
    PREMIUM_TIER.variants![0];

  const standardPriceIdMap: Record<string, string> = {
    "standard-1x": priceIds.standard1x,
    "standard-2x": priceIds.standard2x,
    "standard-3x": priceIds.standard3x,
  };

  const premiumPriceIdMap: Record<string, string> = {
    "premium-1x": priceIds.premium1x,
    "premium-3x": priceIds.premium3x,
    "premium-5x": priceIds.premium5x,
  };

  const basicTier: PricingTier = buildTierFromConfig(BASIC_TIER, {
    price: BASIC_TIER.price!,
    cta: {
      text: "Subscribe",
      loading: loadingId === "basic",
      disabled: loadingId !== null,
      onClick: () => handleSubscribe("basic", priceIds.basic),
    },
  });

  const standardTier: PricingTier = buildTierFromConfig(STANDARD_TIER, {
    price: selectedStandard.price,
    variantSelector: (
      <VariantSelector
        variants={STANDARD_TIER.variants!}
        selectedId={standardVariant}
        onSelect={setStandardVariant}
      />
    ),
    cta: {
      text: "Subscribe",
      loading: loadingId === "standard",
      disabled: loadingId !== null,
      onClick: () =>
        handleSubscribe("standard", standardPriceIdMap[standardVariant]),
    },
  });

  const premiumTier: PricingTier = buildTierFromConfig(PREMIUM_TIER, {
    price: selectedPremium.price,
    variantSelector: (
      <VariantSelector
        variants={PREMIUM_TIER.variants!}
        selectedId={premiumVariant}
        onSelect={setPremiumVariant}
        highlight
      />
    ),
    cta: {
      text: "Subscribe",
      loading: loadingId === "premium",
      disabled: loadingId !== null,
      onClick: () =>
        handleSubscribe("premium", premiumPriceIdMap[premiumVariant]),
    },
  });

  return (
    <div>
      {error && (
        <div className="mx-auto mb-6 max-w-2xl rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
          {error}
        </div>
      )}
      <PricingCards
        tiers={[basicTier, standardTier, premiumTier]}
        className="gap-6"
        sectionClassName="py-0"
      />
    </div>
  );
}
