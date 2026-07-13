import { NextRequest, NextResponse } from "next/server";

import { getAllowedPriceIds } from "@/lib/pricing";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();

    if (!priceId || typeof priceId !== "string") {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const allowedPriceIds = getAllowedPriceIds();
    if (allowedPriceIds.length === 0) {
      return NextResponse.json(
        { error: "Stripe price IDs are not configured" },
        { status: 500 }
      );
    }

    if (!allowedPriceIds.includes(priceId)) {
      return NextResponse.json({ error: "Invalid priceId" }, { status: 400 });
    }

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing/cancel`,
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Checkout session could not be created" },
      { status: 500 }
    );
  }
}
