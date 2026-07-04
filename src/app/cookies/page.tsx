import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Lumina uses cookies and similar technologies, and how you can control them.",
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
      "Lumina uses a deliberately small number of cookies, and none of them are used for advertising. We group them into two categories:",
    ],
    list: [
      "Essential cookies: required for the service to work at all. They keep you signed in, remember your session and protect against cross site request forgery. These cannot be switched off.",
      "Preference cookies: remember your choices such as language, theme and search settings so the service behaves consistently between visits.",
    ],
  },
  {
    heading: "What we do not use",
    paragraphs: [
      "We do not use advertising cookies, cross site tracking cookies or social media tracking pixels. There are no third party ad networks on any Lumina page. Analytics on our marketing pages are collected through a privacy friendly, cookieless system that stores no personal identifiers.",
    ],
  },
  {
    heading: "Cookies we set",
    paragraphs: ["The complete list of cookies used by Lumina:"],
    list: [
      "lumina_session: keeps you signed in to your account. Essential. Expires after 30 days.",
      "lumina_csrf: protects forms against cross site request forgery. Essential. Expires with your session.",
      "lumina_prefs: stores your theme and language preferences. Preference. Expires after 12 months.",
      "lumina_consent: remembers your cookie choices. Essential. Expires after 12 months.",
    ],
  },
  {
    heading: "Managing cookies",
    paragraphs: [
      "You can control preference cookies from the cookie settings link in the footer of our website. You can also configure your browser to block or delete cookies entirely; note that blocking essential cookies will prevent you from signing in. Instructions for managing cookies can be found in the help pages of every major browser.",
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
      "Questions about our use of cookies? Email privacy@lumina.search and we will be happy to explain.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="June 1, 2026"
      intro="This policy explains how Lumina uses cookies and similar technologies. The short version: we use as few as possible and none of them track you around the web."
      sections={sections}
    />
  );
}
