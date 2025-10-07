import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WildWays Global – Explore Kashmir Tours & Adventures",
  description: "WildWays Global offers unforgettable tour and travel experiences in Kashmir. Discover scenic landscapes, lakes, mountains, and cultural adventures with us.",
  keywords: [
    "Kashmir tours",
    "Kashmir travel",
    "tourism in Kashmir",
    "adventure trips Kashmir",
    "WildWays Global",
    "travel agency Kashmir",
    "holiday packages Kashmir"
  ],
  authors: [{ name: "WildWays Global" }],
  openGraph: {
    title: "WildWays Global – Explore Kashmir Tours & Adventures",
    description: "Unforgettable travel experiences in Kashmir. Scenic landscapes, lakes, mountains & cultural tours.",
    url: "https://wildwaysglobal.com",
    siteName: "WildWays Global",
    type: "website",
    locale: "en_US",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
