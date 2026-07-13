export type PricingFeature = {
  name: string;
  highlight?: boolean;
  included: boolean;
};

export type PricingVariant = {
  id: string;
  label: string;
  price: number;
  priceId: string | undefined;
  services: number;
};

export type PricingTierConfig = {
  id: string;
  name: string;
  description: string;
  highlight?: boolean;
  features: PricingFeature[];
  variants?: PricingVariant[];
  price?: number;
  priceId?: string;
  interval?: string;
};

export const SERVICE_CATALOG = [
  "SEO & Search Visibility",
  "Google Ads & PPC",
  "Landing Pages & CRO",
  "LLM & AI Search Visibility",
  "Content & Brand Strategy",
  "Analytics & Reporting",
] as const;

function envPrice(key: string): string | undefined {
  return process.env[key] || undefined;
}

export const BASIC_TIER: PricingTierConfig = {
  id: "basic",
  name: "Basic",
  description:
    "Know exactly what's holding your rankings back before you spend on execution.",
  price: 99,
  priceId: envPrice("STRIPE_PRICE_BASIC"),
  interval: "month",
  features: [
    { name: "Monthly technical SEO health audit", included: true },
    { name: "Rank tracking for 50 priority keywords", included: true },
    { name: "Indexing & crawl error alerts", included: true },
    { name: "Competitor visibility snapshot", included: true },
    { name: "Monthly action digest with fix priorities", included: true },
    { name: "Direct implementation by our team", included: false },
  ],
};

export const STANDARD_TIER: PricingTierConfig = {
  id: "standard",
  name: "Standard",
  description:
    "We don't just report problems. We fix them. Pick how many channels we run for you.",
  features: [
    { name: "Everything in Basic", included: true, highlight: true },
    {
      name: "Active managed execution on your chosen channels",
      included: true,
      highlight: true,
    },
    { name: "On page & technical SEO fixes implemented", included: true },
    { name: "Google Ads bid, budget & creative optimisation", included: true },
    {
      name: "Landing page CRO iterations tied to conversion data",
      included: true,
    },
    {
      name: "Competitor gap analysis & keyword opportunity map",
      included: true,
    },
    { name: "Dedicated senior account lead", included: false },
  ],
  variants: [
    {
      id: "standard-1x",
      label: "1 service",
      price: 185,
      priceId: envPrice("STRIPE_PRICE_STANDARD_1X"),
      services: 1,
    },
    {
      id: "standard-2x",
      label: "2 services",
      price: 315,
      priceId: envPrice("STRIPE_PRICE_STANDARD_2X"),
      services: 2,
    },
    {
      id: "standard-3x",
      label: "3 services",
      price: 343,
      priceId: envPrice("STRIPE_PRICE_STANDARD_3X"),
      services: 3,
    },
  ],
};

export const PREMIUM_TIER: PricingTierConfig = {
  id: "premium",
  name: "Premium",
  description:
    "Full depth execution for teams that need speed, senior oversight, and AI era visibility.",
  highlight: true,
  features: [
    { name: "Everything in Standard", included: true, highlight: true },
    {
      name: "Dedicated senior account lead: one strategist, zero handoffs",
      included: true,
      highlight: true,
    },
    {
      name: "LLM & AI search visibility programme (ChatGPT, Perplexity, AI overviews)",
      included: true,
    },
    { name: "48 hour SLA on critical fixes & campaign changes", included: true },
    {
      name: "90 day multiple channels growth roadmap with revenue targets",
      included: true,
    },
    {
      name: "Executive ROI dashboard with revenue attribution by channel",
      included: true,
    },
    {
      name: "Priority implementation queue with changes live within 5 business days",
      included: true,
    },
  ],
  variants: [
    {
      id: "premium-1x",
      label: "1 service",
      price: 271,
      priceId: envPrice("STRIPE_PRICE_PREMIUM_1X"),
      services: 1,
    },
    {
      id: "premium-3x",
      label: "3 services",
      price: 400,
      priceId: envPrice("STRIPE_PRICE_PREMIUM_3X"),
      services: 3,
    },
    {
      id: "premium-5x",
      label: "5 services",
      price: 572,
      priceId: envPrice("STRIPE_PRICE_PREMIUM_5X"),
      services: 5,
    },
  ],
};

export function getClientPriceIds() {
  return {
    basic: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC || "",
    standard1x: process.env.NEXT_PUBLIC_STRIPE_PRICE_STANDARD_1X || "",
    standard2x: process.env.NEXT_PUBLIC_STRIPE_PRICE_STANDARD_2X || "",
    standard3x: process.env.NEXT_PUBLIC_STRIPE_PRICE_STANDARD_3X || "",
    premium1x: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_1X || "",
    premium3x: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_3X || "",
    premium5x: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_5X || "",
  };
}

const PLAN_SLUG_TO_PRICE_KEY: Record<
  string,
  keyof ReturnType<typeof getClientPriceIds>
> = {
  basic: "basic",
  "standard-1x": "standard1x",
  "standard-2x": "standard2x",
  "standard-3x": "standard3x",
  "premium-1x": "premium1x",
  "premium-3x": "premium3x",
  "premium-5x": "premium5x",
};

export const VALID_PLAN_SLUGS = Object.keys(PLAN_SLUG_TO_PRICE_KEY);

export function getPriceIdByPlanSlug(slug: string): string | undefined {
  const key = PLAN_SLUG_TO_PRICE_KEY[slug];
  if (!key) return undefined;
  const priceId = getClientPriceIds()[key];
  return priceId || undefined;
}

export function getAllowedPriceIds(): string[] {
  return [
    BASIC_TIER.priceId,
    ...(STANDARD_TIER.variants?.map((variant) => variant.priceId) ?? []),
    ...(PREMIUM_TIER.variants?.map((variant) => variant.priceId) ?? []),
  ].filter((id): id is string => Boolean(id));
}
