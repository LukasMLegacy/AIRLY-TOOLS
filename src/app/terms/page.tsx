import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and Conditions governing use of the Nelson Digital FZ LLC website and digital marketing consulting services.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction and acceptance",
    paragraphs: [
      "These Terms and Conditions constitute a legally binding agreement between you and Nelson Digital FZ LLC, a company incorporated in a United Arab Emirates free zone (the Company, we, us, or our).",
      "By accessing, browsing, or using the website at https://nelsondigital.shop/, submitting an enquiry through our contact form, or otherwise interacting with our online presence, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must discontinue use of the Website immediately.",
    ],
  },
  {
    heading: "Company identification",
    paragraphs: [
      "The Company is duly registered and operates under the following details:",
    ],
    list: [
      "Legal name: Nelson Digital FZ LLC",
      "Jurisdiction of incorporation: United Arab Emirates (free zone company)",
      "Website: https://nelsondigital.shop/",
    ],
  },
  {
    heading: "Nature of business",
    paragraphs: [
      "Nelson Digital FZ LLC is a digital marketing and consulting company. Our core activities include, without limitation:",
      "The Company does not provide banking, payment processing, money transmission, currency exchange, investment advisory, brokerage, insurance, lending, or any other regulated financial services. Nothing on this Website constitutes financial, legal, tax, or investment advice.",
    ],
    list: [
      "Digital marketing strategy, advisory, and consulting",
      "Search engine optimisation (SEO) leadership, audits, and roadmap development",
      "Google Ads and PPC campaign management",
      "Landing page design, CRO, and funnel optimisation",
      "LLM and AI search visibility programmes",
      "Growth programme design, funnel optimisation, and acquisition planning",
      "Campaign oversight, performance analysis, and marketing operations support",
      "Retainer based advisory and phased consulting engagements",
    ],
  },
  {
    heading: "Website use licence",
    paragraphs: [
      "Subject to your compliance with these Terms, we grant you a limited, not exclusive, not transferable, revocable licence to access and use the Website for lawful personal or internal business purposes. You may not:",
    ],
    list: [
      "Copy, reproduce, distribute, or create derivative works from Website content except as permitted by applicable law",
      "Use automated systems (bots, scrapers, crawlers) to access the Website without our prior written consent",
      "Attempt to gain unauthorised access to any systems, networks, or data connected to the Website",
      "Introduce malware, viruses, or harmful code",
      "Interfere with the proper functioning or security of the Website",
      "Misrepresent your identity or affiliation when contacting us or submitting enquiries",
      "Use the Website for any unlawful, fraudulent, or abusive purpose",
    ],
  },
  {
    heading: "Client services and separate agreements",
    paragraphs: [
      "Information on this Website about our services is provided for general informational purposes only and does not constitute an offer, solicitation, or binding commitment. Any engagement for paid services requires a separate written agreement executed by authorised representatives of both parties.",
      "In the event of any conflict between these Terms and a signed client agreement, the signed client agreement shall prevail with respect to the subject matter of that engagement.",
    ],
  },
  {
    heading: "Fees, invoicing, and payment terms",
    paragraphs: [
      "Fees for services, payment schedules, currencies, and invoicing terms are defined exclusively in applicable client agreements. Unless otherwise agreed in writing, all fees are exclusive of applicable taxes, duties, and third party costs. The Company reserves the right to suspend or terminate services for nonpayment in accordance with contractual terms.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "All content on the Website is owned by or licensed to the Company and protected by applicable intellectual property laws. The Nelson Digital name and associated branding may not be used without our prior written consent.",
      "Ownership of deliverables and work product created under client engagements is governed by the relevant client agreement. Unless expressly assigned, pre existing tools, methodologies, and operational expertise remain the Company's property.",
    ],
  },
  {
    heading: "Acceptable use and compliance",
    paragraphs: [
      "You agree not to use our Website or services to promote, facilitate, or engage in:",
      "We reserve the right to refuse or terminate any engagement that we reasonably believe poses legal, reputational, or compliance risk.",
    ],
    list: [
      "Illegal activities or content prohibited under UAE law or the laws of any applicable jurisdiction",
      "Deceptive, misleading, or fraudulent practices",
      "Content that infringes third party intellectual property, privacy, or publicity rights",
      "Hate speech, harassment, discrimination, or content that violates platform policies",
      "Products or services restricted by applicable advertising standards",
      "Activities that violate sanctions, export controls, or trade restrictions",
    ],
  },
  {
    heading: "Money laundering and sanctions",
    paragraphs: [
      "The Company is committed to compliance with applicable money laundering (AML), counter terrorist financing (CTF), and economic sanctions laws and regulations, including requirements applicable in the United Arab Emirates and international standards where relevant to our operations.",
      "We may conduct customer due diligence, request identification and corporate documentation, verify the source of funds where appropriate, and monitor transactions for suspicious activity. By using this Website or entering into a business relationship with us, you represent that you are not subject to sanctions and that funds used in any engagement are derived from lawful sources.",
    ],
  },
  {
    heading: "Confidentiality",
    paragraphs: [
      "Information that is not public and exchanged during commercial discussions or under client agreements shall be treated as confidential by both parties to the extent described in applicable contracts or, in the absence of a contract, with reasonable care and only for the purpose of evaluating or performing the proposed engagement.",
    ],
  },
  {
    heading: "Disclaimers",
    paragraphs: [
      "The Website and its content are provided on an as is and as available basis without warranties of any kind, whether express, implied, or statutory, including but not limited to warranties of merchantability, fitness for a particular purpose, not infringing on third party rights, accuracy, or uninterrupted availability.",
      "We do not warrant that marketing outcomes, rankings, traffic levels, conversion rates, or return on spend will be achieved. Performance depends on numerous external factors beyond our control.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, the Company and its directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity, arising from or related to your use of the Website or these Terms.",
      "Our aggregate liability arising from or relating to the Website (excluding liability that cannot be excluded under applicable law) shall not exceed one hundred United States dollars (USD 100) or the minimum amount permitted by law, whichever is greater.",
    ],
  },
  {
    heading: "Indemnification",
    paragraphs: [
      "You agree to indemnify, defend, and hold harmless the Company and its affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from your breach of these Terms, your misuse of the Website, or your violation of any applicable law or third party rights.",
    ],
  },
  {
    heading: "Privacy and data protection",
    paragraphs: [
      "Our collection and processing of personal data is described in our Privacy Policy, which forms an integral part of these Terms.",
    ],
  },
  {
    heading: "Governing law and dispute resolution",
    paragraphs: [
      "These Terms are governed by and construed in accordance with the laws of the United Arab Emirates, without regard to conflict of law principles. Any dispute arising out of or in connection with these Terms or the Website shall be subject to the exclusive jurisdiction of the courts of the United Arab Emirates, unless mandatory applicable law requires otherwise.",
      "Before initiating formal proceedings, the parties agree to attempt to resolve disputes in good faith through direct communication via our Contact page.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "For questions regarding these Terms, please contact us at legal@nelsondigital.shop or through the Contact page on this Website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="May 22, 2026"
      intro="These Terms and Conditions govern access to and use of this website and describe the legal framework under which Nelson Digital FZ LLC operates its digital marketing and consulting business."
      sections={sections}
    />
  );
}
