import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Header } from "@/components/Header";

const delius = Funnel_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
      <body className={`${delius.className} bg-slate-300/50 dark:bg-gray-900 text-slate-900 dark:text-white`} suppressHydrationWarning>
        <main className="lg:max-w-2xl md:max-w-full mx-4 flex flex-col md:flex-row mt-2 sm:mt-8 lg:mx-auto">
          <ThemeProvider>
            <div className="min-h-screen pb-24 md:pb-8 w-full">
              <Header />
              {children}
            </div>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
