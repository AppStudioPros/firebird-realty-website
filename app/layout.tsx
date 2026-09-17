import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import ChatWidget from "./components/ChatWidget";
import AccessibilityWidget from "./components/AccessibilityWidget";

export const metadata: Metadata = {
  title: "Firebird Realty | Larisa Seibel — Florida Buyer's Agent | Ormond Beach, FL",
  description: "Larisa Seibel is a licensed Florida buyer's agent with 21+ years of experience based in Ormond Beach. Specializing in first-time homebuyers, new Americans, and Russian-speaking buyers throughout Central Florida.",
  keywords: "Firebird Realty, Larisa Seibel, Florida buyer's agent, Ormond Beach realtor, Central Florida realtor, first time home buyer Florida, new Americans realtor Florida, Russian speaking realtor Florida, Daytona Beach buyer's agent, buyer's agent Volusia County",
  openGraph: {
    title: "Firebird Realty | Larisa Seibel — Florida Buyer's Agent",
    description: "21+ years in Florida real estate. First-time buyers. New Americans. Bilingual English & Russian. Real advocacy from first conversation to closing day.",
    url: "https://firebirdrealty.net",
    siteName: "Firebird Realty",
    type: "website",
    images: [{ url: "https://firebirdrealty.net/larisa-hero-desk.jpg", width: 1200, height: 630, alt: "Larisa Seibel — Florida Buyer's Agent, Firebird Realty" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firebird Realty | Larisa Seibel — Florida Buyer's Agent",
    description: "21+ years in Florida real estate. First-time buyers. New Americans. Bilingual English & Russian.",
    images: ["https://firebirdrealty.net/larisa-hero-desk.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://firebirdrealty.net" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
        <AccessibilityWidget />
        <ChatWidget />
      </body>
    </html>
  );
}
