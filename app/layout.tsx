import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import ChatWidget from "./components/ChatWidget";
import AccessibilityWidget from "./components/AccessibilityWidget";

export const metadata: Metadata = {
  title: "Firebird Realty | Larisa Seibel — Portland Metro Buyer's Agent",
  description: "Larisa Seibel is a licensed Portland metro buyer's agent with 21+ years of experience. Specializing in first-time homebuyers, new Americans, and anyone who needs a real advocate in their corner. Russian-speaking. Sherwood, OR.",
  keywords: "Firebird Realty, Larisa Seibel, Portland realtor, buyer's agent Portland Oregon, first time home buyer Portland, new Americans realtor Oregon, Russian speaking realtor Portland, Sherwood Oregon realtor",
  openGraph: {
    title: "Firebird Realty | Larisa Seibel — Portland Metro Buyer's Agent",
    description: "21+ years. First-time buyers. New Americans. Real advocacy from start to close.",
    url: "https://www.firebirdrealty.net",
    siteName: "Firebird Realty",
    type: "website",
  },
  alternates: { canonical: "https://www.firebirdrealty.net" },
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
