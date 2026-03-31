import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OMS Steel Casting | Precision Casting Solutions for Heavy Industries",
  description:
    "OMS Steel Casting — Jamshedpur-based steel foundry manufacturing high-quality wear-resistant castings for steel plants, cement plants, thermal power, sugar mills, and mining industries.",
  keywords:
    "steel casting, wear resistant castings, blow bars, grinding media, jaw plates, liners, Jamshedpur, Adityapur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full bg-zinc-950 text-gray-200 antialiased">
        {children}
      </body>
    </html>
  );
}
