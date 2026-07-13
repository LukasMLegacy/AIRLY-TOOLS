import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy describing how Nelson Digital FZ LLC collects, uses, and protects personal data.",
};

const sections: LegalSection[] = [
  {
    heading: "Data controller",
    paragraphs: [
      "The data controller responsible for your personal data is Nelson Digital FZ LLC, a company incorporated in a United Arab Emirates free zone. For privacy related enquiries, please use our Contact page and mark your message Privacy Request. Registered office and licence details are provided to active clients during formal onboarding.",
    ],
  },
  {
    heading: "Scope and applicability",
    paragraphs: [
      "This Privacy Policy applies to personal data processed through our Website, contact enquiries, pre contractual communications, client onboarding, and service delivery where we act as a data controller. Where we process personal data on behalf of clients as part of consulting or marketing services, we act as a data processor and processing is governed by separate data processing agreements.",
      "This Policy is designed to comply with the UAE Federal Decree Law No. 45 of 2021 on the Protection of Personal Data (PDPL), the EU General Data Protection Regulation (GDPR) where applicable, the UK GDPR, and other relevant privacy laws.",
    ],
  },
  {
    heading: "Categories of personal data we collect",
    paragraphs: [
      "Depending on your interaction with us, we may collect the following categories of personal data. We do not intentionally collect special categories of personal data through this Website.",
    ],
    list: [
      "Identity and contact data: name, email address, company name, job title, telephone number (if provided)",
      "Communication data: messages and correspondence submitted via our contact form or email",
      "Technical and usage data: IP address, browser type, device type, operating system, referring URLs, pages viewed, and access timestamps",
      "Compliance and business data: corporate registration documents, identification documents, beneficial ownership information, and payment related information collected during onboarding and AML/KYC procedures where applicable",
      "Analytics data: aggregated or pseudonymised website usage data",
    ],
  },
  {
    heading: "How we collect personal data",
    paragraphs: [
      "We collect personal data through:",
    ],
    list: [
      "Information you provide directly (contact form, email, contractual documents)",
      "Automated technologies when you browse the Website (server logs, cookies as described in our Cookie Policy)",
      "Third parties where permitted by law (publicly available business registries, referral partners, identity verification providers)",
    ],
  },
  {
    heading: "Purposes and legal bases for processing",
    paragraphs: [
      "We process personal data for the following purposes: responding to enquiries (legitimate interests; steps prior to entering a contract), providing services (performance of a contract; legitimate interests), legal and compliance obligations including AML/CTF (legal obligations), website security and improvement (legitimate interests), and marketing communications where permitted (legitimate interests or consent). You may opt out of marketing communications at any time.",
    ],
  },
  {
    heading: "Data sharing and recipients",
    paragraphs: [
      "We may share personal data with service providers (hosting, email, analytics, CRM, professional advisers) under contractual safeguards, regulatory and law enforcement authorities where required by law, and parties to corporate transactions with appropriate safeguards.",
      "We do not sell personal data or share it for third party independent marketing without consent where required.",
    ],
  },
  {
    heading: "International data transfers",
    paragraphs: [
      "Your personal data may be processed in the UAE and in other countries where our service providers operate. Where transfers are subject to restrictions, we implement appropriate safeguards such as Standard Contractual Clauses or other recognised mechanisms.",
    ],
  },
  {
    heading: "Data retention",
    paragraphs: [
      "We retain personal data only as long as necessary:",
    ],
    list: [
      "Contact enquiries: up to 24 months from last communication, unless a relationship is established",
      "Client records: for the engagement duration and up to 7 years thereafter, or longer where required by law",
      "Server logs: typically up to 12 months",
      "Compliance documentation: as required by AML/CTF and corporate laws",
    ],
  },
  {
    heading: "Security measures",
    paragraphs: [
      "We implement appropriate technical and organisational measures including access controls, secure hosting, encryption in transit where supported, staff confidentiality obligations, and vendor due diligence. No method of transmission is completely secure.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Depending on applicable law, you may have rights to access, rectification, erasure, restriction, portability, objection, withdrawal of consent, and complaint to a supervisory authority. Contact us via the Contact page to exercise your rights. We will respond within applicable legal timeframes.",
      "EEA/UK users may contact their local data protection authority or the ICO at ico.org.uk. UAE enquiries regarding PDPL compliance may be directed to the UAE Data Office in accordance with applicable procedures.",
    ],
  },
  {
    heading: "Children's privacy",
    paragraphs: [
      "Our Website is not intended for individuals under 18. We do not knowingly collect data from children.",
    ],
  },
  {
    heading: "Automated decision making",
    paragraphs: [
      "We do not use automated decision making producing legal or similarly significant effects through this Website.",
    ],
  },
  {
    heading: "Changes to this Privacy Policy",
    paragraphs: [
      "We may update this Policy from time to time. Material changes will be posted on this page with an updated Last updated date.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "For privacy enquiries, contact us at privacy@nelsondigital.shop or through our Contact form (Privacy Request). See also our Terms of Service.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="May 22, 2026"
      intro="This Privacy Policy explains how Nelson Digital FZ LLC collects, uses, stores, and protects personal data when you visit our website or communicate with us, and describes your rights under applicable data protection laws."
      sections={sections}
    />
  );
}
