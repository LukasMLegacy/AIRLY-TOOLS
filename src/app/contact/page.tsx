import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nelson Digital FZ LLC. Share your goals and we will reply with a sensible next step and timeline.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello"
        description="Share a short note about your company, what you sell, and what needs to improve online. We read every serious enquiry and reply with next steps, not an automated brochure."
      />

      <section className="container mx-auto px-4 py-24 md:px-6">
        <Reveal className="mx-auto max-w-2xl">
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
