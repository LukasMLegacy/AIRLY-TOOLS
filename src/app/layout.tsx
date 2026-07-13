import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AppShell } from "@/components/app-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nelsondigital.shop"),
  title: {
    default: "Nelson Digital FZ LLC | Digital Marketing & Consulting",
    template: "%s | Nelson Digital",
  },
  description:
    "Nelson Digital FZ LLC helps businesses grow online through SEO, Google Ads, landing pages, LLM visibility, and data driven digital marketing consulting in the United Arab Emirates.",
  keywords: [
    "SEO agency",
    "digital marketing",
    "Google Ads",
    "landing pages",
    "LLM visibility",
    "search engine optimisation",
    "marketing consulting",
  ],
  openGraph: {
    title: "Nelson Digital FZ LLC | Digital Marketing & Consulting",
    description:
      "Grow online with sharper SEO, stronger visibility, and marketing decisions grounded in data instead of guesswork.",
    type: "website",
    siteName: "Nelson Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
