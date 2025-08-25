import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figs - Empowering Your Financial Future Through Smart Investing",
  description:
    "India's Gen Z financial app designed to bridge the aspiration-action gap. Get effortless spending clarity, personalized goal journeys, and proactive financial guidance.",
  keywords: "financial app, investing, Gen Z, personal finance, savings, goals",
  authors: [{ name: "Figs Team" }],
  openGraph: {
    title: "Figs - Smart Investing for Gen Z",
    description: "Empowering Your Financial Future Through Smart Investing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Figs - Smart Investing for Gen Z",
    description: "Empowering Your Financial Future Through Smart Investing",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
