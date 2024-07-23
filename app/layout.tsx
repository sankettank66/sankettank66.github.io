import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanket Tank - Portfolio",
  description: "Explore Sanket Tank's professional portfolio built with Next.js, Acernity UI, and Tailwind CSS. Discover a fully responsive interface featuring smooth animations and a sleek dark mode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={clsx(inter.className, 'scrollbar-thumb-rounded-full', 'scrollbar-track-rounded-full', 'scrollbar', 'scrollbar-thumb-slate-700', 'scrollbar-track-slate-300', 'h-32', 'overflow-y-scroll','w-full')}>
        {children}
      </body>
    </html>
  );
}