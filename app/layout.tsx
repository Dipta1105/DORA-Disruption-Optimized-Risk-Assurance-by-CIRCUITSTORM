import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ParticleBackground } from "@/components/background/ParticleBackground";
import { BottomNav } from "@/components/ui/BottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DORA - Disruption Optimized Risk Assurance",
  description: "AI-powered parametric micro-insurance platform.",
};

export const viewport: Viewport = {
  themeColor: "#0B0F1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { AuthProvider } from "@/lib/contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased selection:bg-dora-blue/30 selection:text-dora-blue">
        <AuthProvider>
          <ParticleBackground />
          <main className="relative z-10 min-h-screen flex flex-col pb-24">
            {children}
          </main>
          <BottomNav />
        </AuthProvider>
      </body>
    </html>
  );
}
