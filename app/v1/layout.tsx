import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio archive",
  description: "The archived v1 portfolio of Sanket Tank.",
  alternates: {
    canonical: "/v1",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`v1-root ${inter.className}`}>
      <main id="legacy-content">{children}</main>
      <Link className="archive-badge" href="/" aria-label="Return to the current portfolio">
        <span aria-hidden="true">←</span>
        Current portfolio
      </Link>
    </div>
  );
}
