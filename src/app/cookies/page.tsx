import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Nelson Digital FZ LLC uses cookies and similar technologies, and how you can control them.",
};

const sections: LegalSection[] = [
  {
    heading: "What are cookies",
    paragraphs: [
      "Cookies are small text files that a website stores on your device to remember information about your visit. Similar technologies include local storage and session storage. In this policy we use the word cookies to cover all of them.",
    ],
  },
  {
    heading: "How we use cookies",
    paragraphs: [
      "Nelson Digital FZ LLC uses cookies to keep the Website functioning properly and to understand how visitors interact with our pages. We group them into the following categories:",
    ],
    list: [
      "Strictly necessary cookies: required for the Website to work at all. They protect against cross site request forgery and maintain session state. These cannot be switched off.",
      "Analytics cookies: help us understand how visitors use the Website so we can improve content and navigation. Data is aggregated and does not identify individual users.",
      "Functional cookies: remember your choices such as language and display preferences so the Website behaves consistently between visits.",
    ],
  },
  {
    heading: "What we do not use",
    paragraphs: [
      "We do not use advertising cookies, cross site tracking cookies, or social media tracking pixels for third party ad targeting. There are no third party ad networks on any Nelson Digital page.",
    ],
  },
  {
    heading: "Cookies we set",
    paragraphs: ["The cookies used by this Website include:"],
    list: [
      "nd_session: maintains your session state. Strictly necessary. Expires with your session.",
      "nd_csrf: protects forms against cross site request forgery. Strictly necessary. Expires with your session.",
      "nd_prefs: stores your display preferences. Functional. Expires after 12 months.",
      "nd_consent: remembers your cookie choices. Strictly necessary. Expires after 12 months.",
      "nd_analytics: collects anonymised usage data. Analytics. Expires after 12 months.",
    ],
  },
  {
    heading: "Managing cookies",
    paragraphs: [
      "You can manage cookies that are not essential through your browser settings. Most browsers allow you to block or delete cookies entirely; note that blocking strictly necessary cookies may affect Website functionality. Instructions for managing cookies can be found in the help pages of every major browser.",
      "Where required by applicable law, we obtain consent for cookies that are not essential before they are placed on your device.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "If we add or change cookies, we will update this page and, where required, ask for your consent again. The date at the top shows the latest revision.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about our use of cookies? Email privacy@nelsondigital.shop and we will be happy to explain.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="May 22, 2026"
      intro="This policy explains how Nelson Digital FZ LLC uses cookies and similar technologies on nelsondigital.shop. We use as few as possible and none of them track you around the web for advertising."
      sections={sections}
    />
  );
}
