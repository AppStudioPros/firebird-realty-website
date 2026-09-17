import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Firebird Realty — Larisa Seibel",
  description: "Terms of Service for Firebird Realty. Read the terms governing use of this website and real estate services.",
};

const EFFECTIVE = "September 17, 2026";

export default function TermsOfService() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ background: "var(--deep)", padding: "14px 0" }}>
        <div className="container">
          <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
            ← Back to Firebird Realty
          </Link>
        </div>
      </div>

      <div className="container" style={{ padding: "64px 24px", maxWidth: 760 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--deep)", marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ color: "var(--text-light)", fontSize: "0.9rem", marginBottom: 48 }}>
          Effective Date: {EFFECTIVE} &nbsp;|&nbsp; Last Updated: {EFFECTIVE}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40, color: "var(--text-mid)", lineHeight: 1.9 }}>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>1. Acceptance of Terms</h2>
            <p>By accessing or using the website at firebirdrealty.net (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site. These terms apply to all visitors and users of the Site.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>2. About Firebird Realty</h2>
            <p>Firebird Realty is the personal real estate brand of Larisa Seibel, the owner and designated broker of Firebird Realty LLC, a licensed Florida real estate corporation. All real estate services are provided through Firebird Realty LLC. Larisa Seibel operates as a buyer&apos;s agent and represents buyers only — not sellers. All real estate services are provided in accordance with applicable Florida law and the regulations of the Florida Real Estate Commission (FREC).</p>
            <p style={{ marginTop: 12 }}>Florida Real Estate License: <strong>BK3563702</strong><br />Brokerage: Firebird Realty LLC (License: CQ1068763)</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>3. Florida Agency Disclosure</h2>
            <p>Under Florida Statute § 475.278, real estate licensees are required to disclose their agency relationship with clients. Larisa Seibel operates as a <strong>single agent</strong> representing buyers. As a single agent, Larisa owes fiduciary duties to her buyer clients, including loyalty, confidentiality, obedience, full disclosure, accounting, and the duty to use skill, care, and diligence.</p>
            <p style={{ marginTop: 12 }}>This disclosure is provided for informational purposes. Formal agency disclosure documentation will be provided at the time of first substantive contact for real estate services as required by Florida law.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>4. No Real Estate or Legal Advice</h2>
            <p>The content on this Site is provided for general informational purposes only. Nothing on this Site constitutes legal advice, financial advice, or a guarantee of real estate outcomes. Market conditions, property values, and transaction outcomes vary and are not guaranteed.</p>
            <p style={{ marginTop: 12 }}>Real estate transactions involve complex legal and financial matters. We strongly encourage all buyers to consult with qualified legal and financial professionals in addition to working with a licensed real estate agent.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>5. Accuracy of Information</h2>
            <p>We make reasonable efforts to ensure the information on this Site is accurate and up to date. However, we make no warranties or representations regarding the completeness, accuracy, reliability, or suitability of any information on the Site. Real estate market information, property details, and related content may change without notice.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>6. Equal Housing Opportunity</h2>
            <p>Firebird Realty and Larisa Seibel are committed to the principles of the Fair Housing Act and Florida fair housing laws. We do not discriminate on the basis of race, color, religion, sex, national origin, disability, familial status, or any other protected class. All persons are entitled to equal professional service.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>7. Intellectual Property</h2>
            <p>All content on this Site, including text, images, graphics, and design, is the property of Larisa Seibel / Firebird Realty unless otherwise noted. You may not reproduce, distribute, or use any content from this Site without prior written permission.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>8. Third-Party Links</h2>
            <p>This Site may contain links to third-party websites, including Innovative Home Loan and other partner services. These links are provided for convenience only. We do not control and are not responsible for the content, privacy practices, or accuracy of third-party websites.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Larisa Seibel and Firebird Realty shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of or inability to use this Site or the information contained herein. Our total liability for any claim related to this Site shall not exceed one hundred dollars ($100).</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>10. Governing Law</h2>
            <p>These Terms of Service are governed by and construed in accordance with the laws of the State of Florida. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Volusia County, Florida.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>11. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms of Service at any time. Changes will be effective upon posting to the Site with an updated effective date. Continued use of the Site after changes are posted constitutes your acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>12. Contact</h2>
            <div style={{ marginTop: 12, padding: "20px 24px", background: "var(--cream)", borderLeft: "4px solid var(--purple)", borderRadius: "0 8px 8px 0" }}>
              <p><strong>Larisa Seibel — Firebird Realty</strong></p>
              <p>Firebird Realty LLC | Ormond Beach, Florida | Broker License: BK3563702</p>
              <p><a href="mailto:larisa@firebirdrealty.net" style={{ color: "var(--purple)" }}>larisa@firebirdrealty.net</a></p>
              <p><a href="tel:5035474507" style={{ color: "var(--purple)" }}>(503) 547-4507</a></p>
            </div>
          </section>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", paddingTop: 16 }}>
            <Link href="/privacy-policy" style={{ color: "var(--purple)", textDecoration: "underline", fontSize: "0.9rem" }}>Privacy Policy</Link>
            <Link href="/cookie-policy" style={{ color: "var(--purple)", textDecoration: "underline", fontSize: "0.9rem" }}>Cookie Policy</Link>
          </div>
        </div>
      </div>

      <footer style={{ background: "var(--deep)", padding: "32px 0", textAlign: "center", marginTop: 64 }}>
        <div className="container">
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Larisa Seibel | Firebird Realty | Firebird Realty LLC | Equal Housing Opportunity
          </p>
        </div>
      </footer>
    </div>
  );
}
