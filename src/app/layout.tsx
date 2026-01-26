import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollToTop from "@/components/ui/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | DevFlow",
  description: "Full-stack Developer & AI Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CustomCursor />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col px-6 pt-0 pb-12 md:px-12 lg:px-24">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
