import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import FloatingContactBubble from "@/components/floating-contact-bubble";
import CommandPaletteProvider from "@/components/site/command-palette-provider";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import { themeBootstrapScript } from "@/components/site/theme";
import { SITE_NAME, SITE_ROLE, SITE_URL } from "@/content/project-helpers";
import styles from "@/components/site/site.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Georgi Tsvetanski builds XR simulations, gameplay systems and interactive tools, from research prototypes to shipped games.";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_ROLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | ${SITE_ROLE}`,
    description,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_ROLE}`,
    description,
  },
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NuqsAdapter>
          <CommandPaletteProvider>
            <a href="#main" className={styles.skipLink}>
              Skip to content
            </a>
            <SmoothScrollProvider />
            <SiteHeader />
            <div id="main" tabIndex={-1} className="outline-none">
              {children}
            </div>
            <SiteFooter />
            <FloatingContactBubble />
            <Toaster richColors position="top-center" closeButton />
          </CommandPaletteProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
