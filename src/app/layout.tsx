import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgi Tsvetanski | Spatial Interaction Prototyper & Simulation Engineer",
  description: "T-Shaped Developer bridging Technical Engineering and Human Factors. Building precise spatial systems for training and mission-critical environments.",
  metadataBase: new URL("https://tsvetanski.com"),
  openGraph: {
    title: "Georgi Tsvetanski | Spatial Interaction Prototyper & Simulation Engineer",
    description: "T-Shaped Developer bridging Technical Engineering and Human Factors. Building precise spatial systems for training and mission-critical environments.",
    url: "https://tsvetanski.com",
    siteName: "Georgi Tsvetanski Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Georgi Tsvetanski Portfolio"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgi Tsvetanski | Spatial Interaction Prototyper & Simulation Engineer",
    description: "T-Shaped Developer bridging Technical Engineering and Human Factors. Building precise spatial systems for training and mission-critical environments.",
    images: ["/og-image.svg"]
  }
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
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}



