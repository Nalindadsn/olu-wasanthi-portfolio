import Hero from "@/components/Hero";
import { Metadata } from "next";
import Image from "next/image";

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
    url: "olu-wasanthi-portfolio.vercel.app", // Replace with your actual domain
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
export default function Home() {
  return (
    
    <div>
      <Hero/>
    </div>
  );
}
