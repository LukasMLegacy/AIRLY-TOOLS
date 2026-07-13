# Nelson Digital

Marketing website for [Nelson Digital FZ LLC](https://nelsondigital.shop), a digital marketing and consulting agency specialising in SEO, Google Ads, landing pages, and LLM visibility.

Built with Next.js (App Router), TypeScript, Tailwind CSS, framer motion and shadcn/ui components.

## Pages

- `/` home with animated hero, services, testimonials and CTA
- `/features` full services overview
- `/pricing` subscription plans with Stripe Checkout (Basic, Standard, Premium)
- `/pricing/success` confirmation after successful checkout
- `/pricing/cancel` return page when checkout is abandoned
- `/about` story, values and team
- `/contact` contact form
- `/faq` frequently asked questions
- `/changelog` agency milestones and updates
- `/terms`, `/privacy`, `/cookies` legal pages

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Stripe setup

Pricing uses [Stripe Checkout](https://stripe.com/docs/payments/checkout) for hosted subscription payments. No database is required — Stripe holds subscription data.

Copy [`.env.example`](.env.example) to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

For production deployment on Vercel, see [`docs/vercel-production-env.md`](docs/vercel-production-env.md).

### Test mode (local development)

In the [Stripe Dashboard (test mode)](https://dashboard.stripe.com/test/products), create **7 recurring monthly prices**:

| Plan | Amount |
|------|--------|
| Basic | $99/mo |
| Standard 1x | $185/mo |
| Standard 2x | $315/mo |
| Standard 3x | $343/mo |
| Premium 1x | $271/mo |
| Premium 3x | $400/mo |
| Premium 5x | $572/mo |

Use test API keys (`pk_test_...`, `sk_test_...`) and test price IDs in `.env.local`.

### Test checkout

1. Run `npm run dev` and open `/pricing`
2. Click **Subscribe** on any plan
3. Use test card `4242 4242 4242 4242`, any future expiry, any CVC
4. After payment you should land on `/pricing/success`

### Webhook (local)

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copy the signing secret into `STRIPE_WEBHOOK_SECRET` in `.env.local`.

### Production (live mode)

Live price IDs are pre mapped in `.env.example`. You still need to:

1. Regenerate your `sk_live_` secret key if it was ever exposed
2. Add all env variables in Vercel (Production scope)
3. Create a live webhook at `https://nelsondigital.shop/api/stripe/webhook`
4. Set up Resend for the contact form

Full step by step: [`docs/vercel-production-env.md`](docs/vercel-production-env.md)

## Production build

```bash
npm run build
npm start
```

## Domain

Production site: https://nelsondigital.shop
