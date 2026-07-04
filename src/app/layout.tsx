import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://airly.tools"),
  title: {
    default: "AIRLY TOOLS | AI Search That Understands You",
    template: "%s | AIRLY TOOLS",
  },
  description:
    "AIRLY TOOLS is the AI search engine that understands what you mean. Ask anything in plain language and get instant answers with trusted sources. Searching has never been easier.",
  keywords: [
    "AI search",
    "search engine",
    "instant answers",
    "semantic search",
    "AI assistant",
  ],
  openGraph: {
    title: "AIRLY TOOLS | AI Search That Understands You",
    description:
      "Ask anything in plain language and get instant answers with trusted sources. Searching has never been easier.",
    type: "website",
    siteName: "AIRLY TOOLS",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
