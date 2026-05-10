import type { Metadata } from "next";
import { playfair, dmSans, pinyonScript } from "@/styles/fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlowCursor from "@/components/effects/GlowCursor";
import FallingHearts from "@/components/effects/FallingHearts";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Happy Mother's Day",
  description: "A special Mother's Day wish from Vinayak & Aadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${pinyonScript.variable}`}>
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <FallingHearts />
        <GlowCursor />
        <Navbar />
        
        <main className="flex-1 flex flex-col relative z-10 w-full pt-20">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
