import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the AIRLY TOOLS team. Questions, feedback, sales or press, we would love to hear from you.",
};

const contactDetails = [
  {
    icon: Mail,
    title: "Email us",
    lines: ["hello@airly.tools", "support@airly.tools"],
  },
  {
    icon: MapPin,
    title: "Visit us",
    lines: ["Airly Tools Inc.", "548 Market Street, San Francisco, CA 94104"],
  },
  {
    icon: Clock,
    title: "Response time",
    lines: ["Within one business day", "Enterprise customers within 4 hours"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Questions about the product, pricing or partnerships? Send us a message and we will get back to you quickly."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="space-y-8">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                    <detail.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{detail.title}</h3>
                    {detail.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
