import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melisa Çevik",
  description: "My personal blog built with Next.js",
  authors: [{ name: "Melisa Çevik" }],
  keywords: ["blog", "technology", "web development", "Next.js", "React", "software engineering"],
  creator: "Melisa Çevik",
  openGraph: {
    title: "Melisa Çevik",
    description: "My personal blog built with Next.js",
    type: "website",
    locale: "tr_TR",
    siteName: "Melisa Çevik",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.melisacevik.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen bg-slate-300/50 dark:bg-gray-900 text-slate-900 dark:text-white pb-24 md:pb-8">
            <Header />
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
