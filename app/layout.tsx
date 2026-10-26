import type { Metadata, Viewport } from "next";
import "./root.css";

const siteUrl = "https://sankettank.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sanket Tank — Full-stack Engineer",
    template: "%s — Sanket Tank",
  },
  description:
    "Full-stack engineer with 2.5+ years of experience building fast, legible web systems with React, Next.js, Angular, Node.js, and real-time infrastructure.",
  applicationName: "Sanket Tank",
  authors: [{ name: "Sanket Tank", url: siteUrl }],
  creator: "Sanket Tank",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sanket Tank",
    title: "Sanket Tank — Full-stack Engineer",
    description:
      "Full-stack engineer building fast, legible web systems. React, Next.js, Angular, Node.js, real-time infrastructure, and developer-community talks.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sanket Tank — Full-stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanket Tank — Full-stack Engineer",
    description: "Fast, legible web systems, thoughtful interfaces, and developer-community talks.",
    images: ["/og.png"],
    creator: "@sankettank6685",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
