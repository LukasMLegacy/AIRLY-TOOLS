"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const inputClasses =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900 dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  if (sent) {
    return (
      <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-10 text-center shadow-sm dark:border-white/10 dark:bg-neutral-900">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-semibold">Message sent</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for reaching out. Our team typically replies within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-neutral-900"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            required
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium" htmlFor="subject">
          Subject
        </label>
        <select id="subject" className={inputClasses} defaultValue="general">
          <option value="general">General question</option>
          <option value="sales">Sales and Enterprise</option>
          <option value="support">Product support</option>
          <option value="press">Press and media</option>
          <option value="partnership">Partnerships</option>
        </select>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Tell us how we can help..."
          className={inputClasses}
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full">
        Send Message
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        By submitting this form you agree to our Privacy Policy.
      </p>
    </form>
  );
}
