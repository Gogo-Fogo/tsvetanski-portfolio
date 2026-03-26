import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import ThemeToggle from "./theme-toggle";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import CommandPaletteLazy from "@/components/command-palette-lazy";
import FloatingContactBubble from "@/components/floating-contact-bubble";

const themeBootstrapScript = `
(() => {
  try {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = systemPrefersDark ? 'dark' : 'light';

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
  }
})();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgi Tsvetanski | Technical Designer for XR, Games & Interactive Tools",
  description: "Technical designer and spatial interaction prototyper building XR experiences, gameplay systems, and interactive tools, with a background in storytelling, communication, and production.",
  metadataBase: new URL("https://www.tsvetanski.com"),
  openGraph: {
    title: "Georgi Tsvetanski | Technical Designer for XR, Games & Interactive Tools",
    description: "Technical designer and spatial interaction prototyper building XR experiences, gameplay systems, and interactive tools, with a background in storytelling, communication, and production.",
    url: "https://www.tsvetanski.com",
    siteName: "Georgi Tsvetanski Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgi Tsvetanski | Technical Designer for XR, Games & Interactive Tools",
    description: "Technical designer and spatial interaction prototyper building XR experiences, gameplay systems, and interactive tools, with a background in storytelling, communication, and production.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>
          <SmoothScrollProvider />
          <ThemeToggle />
          <FloatingContactBubble />
          <CommandPaletteLazy />
          <Toaster richColors position="bottom-right" closeButton />
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
