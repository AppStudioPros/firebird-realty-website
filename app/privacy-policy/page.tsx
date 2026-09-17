import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Firebird Realty — Larisa Seibel",
  description: "Privacy Policy for Firebird Realty. Learn how we collect, use, and protect your personal information in accordance with Florida law.",
};

const EFFECTIVE = "September 17, 2026";

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Simple nav back */}
      <div style={{ background: "var(--deep)", padding: "14px 0" }}>
        <div className="container">
          <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
            ← Back to Firebird Realty
          </Link>
        </div>
      </div>

      <div className="container" style={{ padding: "64px 24px", maxWidth: 760 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--deep)", marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--text-light)", fontSize: "0.9rem", marginBottom: 48 }}>
          Effective Date: {EFFECTIVE} &nbsp;|&nbsp; Last Updated: {EFFECTIVE}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40, color: "var(--text-mid)", lineHeight: 1.9 }}>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>1. Who We Are</h2>
            <p>Firebird Realty is the personal real estate brand of Larisa Seibel, a licensed real estate agent operating under Park Place Real Estate in Ormond Beach, Florida. This Privacy Policy applies to the website located at firebirdrealty.net (the "Site") and governs how we collect, use, and protect information you provide when you visit or interact with the Site.</p>
            <p style={{ marginTop: 12 }}>For questions about this policy, contact us at: <a href="mailto:larisa@firebirdrealty.net" style={{ color: "var(--purple)", textDecoration: "underline" }}>larisa@firebirdrealty.net</a></p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>2. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Information you provide directly:</strong> When you contact us via email, phone, or any contact form on the Site, we may collect your name, email address, phone number, and the content of your message.</li>
              <li><strong>Automatically collected data:</strong> When you visit the Site, we may automatically collect technical information such as your IP address, browser type, device type, referring URL, pages visited, and time of visit. This is collected through standard web server logs and, if analytics are enabled, through third-party tools such as Google Analytics.</li>
              <li><strong>Cookies:</strong> The Site may use cookies and similar tracking technologies. See our <Link href="/cookie-policy" style={{ color: "var(--purple)", textDecoration: "underline" }}>Cookie Policy</Link> for details.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Respond to your inquiries and communicate with you about real estate services</li>
              <li>Provide real estate buyer representation services</li>
              <li>Improve and maintain the Site</li>
              <li>Understand how visitors use the Site (analytics)</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>4. Florida Information Protection Act (FIPA) Compliance</h2>
            <p>We take the protection of personal information seriously in accordance with the Florida Information Protection Act (Fla. Stat. § 501.171). If we become aware of a data breach that compromises personal information, we will notify affected individuals as required by Florida law — no later than 30 days after discovery of the breach where technically feasible.</p>
            <p style={{ marginTop: 12 }}>We maintain reasonable security measures to protect the personal information we collect from unauthorized access, loss, or disclosure.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>5. Third-Party Services</h2>
            <p>We may use the following third-party services that have their own privacy practices:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Google Analytics</strong> — website traffic analysis. Google&apos;s Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple)" }}>policies.google.com/privacy</a></li>
              <li><strong>Email providers</strong> — for sending and receiving email communications</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not control and are not responsible for the privacy practices of these third parties.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>6. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Contact inquiries are retained for a reasonable period to support any ongoing real estate relationship and for compliance purposes.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information, subject to legal requirements</li>
              <li>Opt out of analytics tracking (see our <Link href="/cookie-policy" style={{ color: "var(--purple)", textDecoration: "underline" }}>Cookie Policy</Link>)</li>
            </ul>
            <p style={{ marginTop: 12 }}>To exercise any of these rights, contact us at <a href="mailto:larisa@firebirdrealty.net" style={{ color: "var(--purple)", textDecoration: "underline" }}>larisa@firebirdrealty.net</a>.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>8. Children&apos;s Privacy</h2>
            <p>This Site is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last Updated&quot; date at the top of this page. Continued use of the Site after changes are posted constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>10. Contact</h2>
            <p>If you have questions about this Privacy Policy, contact:</p>
            <div style={{ marginTop: 12, padding: "20px 24px", background: "var(--cream)", borderLeft: "4px solid var(--purple)", borderRadius: "0 8px 8px 0" }}>
              <p><strong>Larisa Seibel — Firebird Realty</strong></p>
              <p>Firebird Realty LLC</p>
              <p>Ormond Beach, Florida</p>
              <p><a href="mailto:larisa@firebirdrealty.net" style={{ color: "var(--purple)" }}>larisa@firebirdrealty.net</a></p>
              <p><a href="tel:5035474507" style={{ color: "var(--purple)" }}>(503) 547-4507</a></p>
            </div>
          </section>

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
