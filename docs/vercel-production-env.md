# Vercel Production Environment Setup

Complete guide for deploying Nelson Digital with Stripe Live and Resend.

## 1. Regenerate Stripe secret key (required)

Your live secret key was shared in chat. Before going live:

1. Open [Stripe API keys](https://dashboard.stripe.com/apikeys) in **Live** mode
2. Click **Roll key** on the secret key
3. Copy the new `sk_live_...` value

The publishable key (`pk_live_...`) can stay or be rolled for safety.

## 2. Price IDs (already mapped)

These live price IDs match your Stripe products:

| Plan | Amount | Price ID |
|------|--------|----------|
| Basic | $99/mo | `price_1TsnPU78zXjxJfeKwnOmZXLc` |
| Standard 1x | $185/mo | `price_1TsnQ878zXjxJfeK1rJJFr7r` |
| Standard 2x | $315/mo | `price_1TsnQd78zXjxJfeK0DmJj7ZN` |
| Standard 3x | $343/mo | `price_1TsnR978zXjxJfeKkopjhWsv` |
| Premium 1x | $271/mo | `price_1TsnRb78zXjxJfeK5sHBmZ28` |
| Premium 3x | $400/mo | `price_1TsnRy78zXjxJfeKjmx6aeKG` |
| Premium 5x | $572/mo | `price_1TsnSO78zXjxJfeKUAVpkKD2` |

## 3. Add variables in Vercel

Vercel → your project → **Settings → Environment Variables**

Add each variable below. Scope: **Production** (and Preview if you want staging).

```
STRIPE_SECRET_KEY          → sk_live_... (regenerated key)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY → pk_live_...

STRIPE_PRICE_BASIC         → price_1TsnPU78zXjxJfeKwnOmZXLc
STRIPE_PRICE_STANDARD_1X   → price_1TsnQ878zXjxJfeK1rJJFr7r
STRIPE_PRICE_STANDARD_2X   → price_1TsnQd78zXjxJfeK0DmJj7ZN
STRIPE_PRICE_STANDARD_3X   → price_1TsnR978zXjxJfeKkopjhWsv
STRIPE_PRICE_PREMIUM_1X    → price_1TsnRb78zXjxJfeK5sHBmZ28
STRIPE_PRICE_PREMIUM_3X    → price_1TsnRy78zXjxJfeKjmx6aeKG
STRIPE_PRICE_PREMIUM_5X    → price_1TsnSO78zXjxJfeKUAVpkKD2

NEXT_PUBLIC_STRIPE_PRICE_BASIC       → price_1TsnPU78zXjxJfeKwnOmZXLc
NEXT_PUBLIC_STRIPE_PRICE_STANDARD_1X → price_1TsnQ878zXjxJfeK1rJJFr7r
NEXT_PUBLIC_STRIPE_PRICE_STANDARD_2X → price_1TsnQd78zXjxJfeK0DmJj7ZN
NEXT_PUBLIC_STRIPE_PRICE_STANDARD_3X → price_1TsnR978zXjxJfeKkopjhWsv
NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_1X  → price_1TsnRb78zXjxJfeK5sHBmZ28
NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_3X  → price_1TsnRy78zXjxJfeKjmx6aeKG
NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_5X  → price_1TsnSO78zXjxJfeKUAVpkKD2

STRIPE_WEBHOOK_SECRET      → whsec_... (step 4)
NEXT_PUBLIC_SITE_URL       → https://nelsondigital.shop

RESEND_API_KEY             → re_... (step 5)
CONTACT_FROM_EMAIL         → Nelson Digital <hello@nelsondigital.shop>
```

After saving all variables: **Deployments → Redeploy** (env loads only on new deploy).

## 4. Stripe webhook (live)

1. [Developers → Webhooks → Add endpoint](https://dashboard.stripe.com/webhooks) in **Live** mode
2. **Endpoint URL:** `https://nelsondigital.shop/api/stripe/webhook`
3. **Events:** select `checkout.session.completed` only
4. Create endpoint → copy **Signing secret** (`whsec_...`)
5. Add as `STRIPE_WEBHOOK_SECRET` in Vercel → redeploy
6. Test: complete a checkout → Webhooks tab should show event with status **200**

## 5. Resend (contact form)

1. Create account at [resend.com](https://resend.com)
2. Add and verify domain `nelsondigital.shop` (DNS records in your registrar)
3. Create API key → add as `RESEND_API_KEY` in Vercel
4. Set `CONTACT_FROM_EMAIL` to an address on the verified domain
5. Submissions are delivered to `hello@fanvuemodels.com`

Without `RESEND_API_KEY`, `/contact` returns a 500 error.

## 6. Verify production

1. Open `https://nelsondigital.shop/pricing`
2. Click **Subscribe** on any plan
3. Complete checkout with a real card (live mode charges real money)
4. Confirm redirect to `/pricing/success`
5. Check Stripe Dashboard → Payments and Subscriptions
6. Check Stripe → Webhooks → last event is **200**

## Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| Stripe is not configured yet | Missing `NEXT_PUBLIC_STRIPE_PRICE_*` | Add all 7 client price IDs + redeploy |
| Stripe price IDs are not configured | Missing `STRIPE_PRICE_*` | Add all 7 server price IDs |
| Invalid priceId | Mismatched client/server IDs | Ensure pairs match exactly |
| Redirect to localhost | Missing `NEXT_PUBLIC_SITE_URL` | Set `https://nelsondigital.shop` |
| Webhook 500 | Missing or wrong `STRIPE_WEBHOOK_SECRET` | Copy signing secret from webhook endpoint |
| Contact form error | Missing `RESEND_API_KEY` or unverified domain | Complete Resend setup |
