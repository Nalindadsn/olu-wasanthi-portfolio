import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- PREMIUM METADATA CONFIGURATION ---
export const metadata: Metadata = {
  title: {
    default: "Olu Wasanthi | Fine Art Drawing Artist",
    template: "%s | Olu Wasanthi"
  },
  description: "Exploring the delicate balance of light and shadow through charcoal and graphite narratives by Sri Lankan artist Olu Wasanthi.",
  openGraph: {
    title: "Olu Wasanthi | Fine Art Drawing Artist",
    description: "Hand-drawn narratives on archival medium. Explore the digital gallery of charcoal and graphite works.",
    url: "https://oluwasanthi.com", // Replace with your actual domain
    siteName: "Olu Wasanthi",
    images: [
      {
        url: "/olu-wasanthi.png", // Recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "Olu Wasanthi Fine Art Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olu Wasanthi | Fine Art Artist",
    description: "Charcoal and graphite narratives by Sri Lankan artist Olu Wasanthi.",
    images: ["/olu-wasanthi.png"],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning // Recommended when using ThemeProvider
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0d0d0d] transition-colors duration-700">
        <NextTopLoader
          color="#d97706" // Changed to Amber to match the "Lily" accent color
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px rgba(217, 119, 6, 0.5)"
          zIndex={1600}
        />
        <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}