"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const inputClasses =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900 dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-10 text-center shadow-sm dark:border-white/10 dark:bg-neutral-900">
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
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
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
            name="email"
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
        <select
          id="subject"
          name="subject"
          className={inputClasses}
          defaultValue="general"
        >
          <option value="general">General enquiry</option>
          <option value="seo">SEO Audit</option>
          <option value="ads">Google Ads</option>
          <option value="enterprise">Enterprise Programme</option>
          <option value="partnership">Partnerships</option>
        </select>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us how we can help..."
          className={inputClasses}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        By submitting this form you agree to our Privacy Policy.
      </p>
    </form>
  );
}
