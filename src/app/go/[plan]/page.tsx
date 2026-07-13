import type { Metadata } from "next";

import { GoCheckout } from "@/components/go-checkout";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Redirecting to secure Stripe checkout.",
  robots: { index: false, follow: false },
};

export default async function GoPlanPage({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan } = await params;

  return <GoCheckout plan={plan} />;
}
