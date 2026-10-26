import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "../v2/components/ThemeProvider";
import { SiteChrome } from "../v2/components/SiteChrome";
import "../v2/styles/portfolio.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: { absolute: "Sanket Tank — Full-stack Engineer" },
  description:
    "Full-stack engineer with 2.5+ years of experience building fast, legible web systems with React, Next.js, Angular, Node.js, and real-time infrastructure.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://sankettank.me",
    title: "Sanket Tank — Full-stack Engineer",
    description:
      "Fast, legible web systems, thoughtful interfaces, and developer-community talks.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanket Tank — Full-stack Engineer",
    description:
      "Fast, legible web systems, thoughtful interfaces, and developer-community talks.",
    images: ["/og.png"],
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div
        className={`v2-root ${archivo.variable} ${instrument.variable} ${mono.variable}`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-frame">
          <SiteChrome />
          <main id="main-content" className="site-column">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
