import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AIRLY TOOLS collects, uses and protects your personal data. Privacy is the foundation of our product.",
};

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "AIRLY TOOLS is operated by Airly Tools Inc., 548 Market Street, San Francisco, CA 94104, United States. For users in the European Economic Area, Airly Tools Inc. acts as the data controller for the personal data described in this policy. You can reach our privacy team at privacy@airly.tools.",
    ],
  },
  {
    heading: "Data we collect",
    paragraphs: ["We collect only what we need to run the service:"],
    list: [
      "Account data: your name, email address and password hash when you create an account.",
      "Search data: the queries you submit and the answers generated, stored so you can access your own history.",
      "Payment data: billing details processed by our payment providers. We never store full card numbers on our servers.",
      "Usage data: technical information such as device type, browser, approximate region and interaction events, used to keep the service fast and reliable.",
      "Support data: messages you send to our support team.",
    ],
  },
  {
    heading: "What we never do",
    paragraphs: ["Some things are simply off the table:"],
    list: [
      "We never sell your personal data to anyone.",
      "We never build advertising profiles about you.",
      "We never share your individual queries with advertisers or data brokers.",
      "We never use the content of your searches to train models without your explicit consent.",
    ],
  },
  {
    heading: "How we use your data",
    paragraphs: [
      "We use your data to provide and improve the service: to answer your queries, sync your history and collections across devices, process payments, prevent abuse and fraud, comply with legal obligations and communicate with you about the service. Aggregated and anonymized statistics that cannot be linked back to you may be used to improve ranking quality and system performance.",
    ],
  },
  {
    heading: "Legal bases for processing",
    paragraphs: [
      "Where the GDPR applies, we process your data on the following legal bases: performance of a contract (providing the service you signed up for), legitimate interests (securing and improving the service), consent (optional features such as personal context ranking) and compliance with legal obligations. You may withdraw consent at any time in your settings.",
    ],
  },
  {
    heading: "Data retention",
    paragraphs: [
      "Search history is retained for 30 days on the Free plan and indefinitely on paid plans, in both cases until you delete it. You can delete individual searches or your entire history at any time from the privacy dashboard. Account data is kept for as long as your account exists and deleted within 30 days of account deletion, except where the law requires longer retention, for example for tax records.",
    ],
  },
  {
    heading: "Sharing with third parties",
    paragraphs: [
      "We share data only with service providers that help us operate AIRLY TOOLS, such as cloud hosting, payment processing and email delivery. Each provider is bound by contract to process data only on our instructions and to protect it appropriately. We may also disclose data if required by law, court order or to protect the rights and safety of our users. If AIRLY TOOLS is ever involved in a merger or acquisition, we will notify you before your data is transferred.",
    ],
  },
  {
    heading: "International transfers",
    paragraphs: [
      "Our servers are located in the United States and the European Union. When data is transferred from the EEA to the United States, we rely on Standard Contractual Clauses and additional safeguards. European users can enable EU only storage in their account settings, in which case their search history never leaves the European Union.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "All data is encrypted in transit using TLS and at rest using industry standard encryption. Access to production systems is limited to a small number of engineers, protected by hardware security keys and logged. We run a public bug bounty program and undergo independent security audits every year.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Depending on where you live, you may have the right to access, correct, delete or export your personal data, to object to or restrict certain processing and to lodge a complaint with a supervisory authority. You can exercise most of these rights directly from the privacy dashboard in your account. For anything else, email privacy@airly.tools and we will respond within 30 days.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "AIRLY TOOLS is not directed at children under 16 and we do not knowingly collect personal data from them. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy as the service evolves. If the changes are material, we will notify you by email or through the service before they take effect. The date at the top of this page always shows when the policy was last revised.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "For any privacy related question or request, contact our privacy team at privacy@airly.tools or write to Airly Tools Inc., 548 Market Street, San Francisco, CA 94104, United States.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 1, 2026"
      intro="Privacy is not an afterthought at AIRLY TOOLS, it is the reason we exist. This policy explains what data we collect, why we collect it, how we protect it and the rights you have over it."
      sections={sections}
    />
  );
}
