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

## Stripe setup (test mode)

Pricing uses [Stripe Checkout](https://stripe.com/docs/payments/checkout) for hosted subscription payments. No database is required — Stripe holds subscription data.

### 1. Create products and prices

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

Copy each **Price ID** (starts with `price_`).

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

- `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` from [API keys](https://dashboard.stripe.com/test/apikeys)
- Server price IDs: `STRIPE_PRICE_*`
- Client price IDs: `NEXT_PUBLIC_STRIPE_PRICE_*` (same values as the server IDs)

### 3. Test checkout

1. Run `npm run dev` and open `/pricing`
2. Click **Subscribe** on any plan
3. Use test card `4242 4242 4242 4242`, any future expiry, any CVC
4. After payment you should land on `/pricing/success`

### 4. Webhook (optional)

To log completed checkouts locally:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copy the signing secret into `STRIPE_WEBHOOK_SECRET` in `.env.local`.

## Production build

```bash
npm run build
npm start
```

## Domain

Production site: https://nelsondigital.shop
