import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Firebird Realty — Larisa Seibel",
  description: "Cookie Policy for Firebird Realty. Learn what cookies we use and how to control them.",
};

const EFFECTIVE = "September 17, 2026";

export default function CookiePolicy() {
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
          Cookie Policy
        </h1>
        <p style={{ color: "var(--text-light)", fontSize: "0.9rem", marginBottom: 48 }}>
          Effective Date: {EFFECTIVE} &nbsp;|&nbsp; Last Updated: {EFFECTIVE}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40, color: "var(--text-mid)", lineHeight: 1.9 }}>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help websites function properly and allow site owners to understand how their site is being used. Cookies do not give us access to your computer or any personal information beyond what you choose to share with us.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>Cookies We Use</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ padding: "18px 20px", background: "var(--cream)", borderLeft: "4px solid var(--purple)", borderRadius: "0 8px 8px 0" }}>
                <p style={{ fontWeight: 700, color: "var(--deep)", marginBottom: 6 }}>Essential Cookies</p>
                <p style={{ fontSize: "0.92rem" }}>These cookies are necessary for the Site to function. They include your cookie consent preference (so we don&apos;t ask you every visit). These cannot be disabled.</p>
                <p style={{ fontSize: "0.85rem", marginTop: 8, color: "var(--text-light)" }}>Example: <code>cookie_consent</code> — stores your Accept/Decline choice. Expires: 12 months.</p>
              </div>

              <div style={{ padding: "18px 20px", background: "var(--cream)", borderLeft: "4px solid var(--gold)", borderRadius: "0 8px 8px 0" }}>
                <p style={{ fontWeight: 700, color: "var(--deep)", marginBottom: 6 }}>Analytics Cookies (optional)</p>
                <p style={{ fontSize: "0.92rem" }}>If you accept cookies, we may use Google Analytics to understand how visitors use the Site — which pages are visited, how long people stay, and where visitors come from. This data is aggregated and anonymous. No personally identifiable information is collected through analytics.</p>
                <p style={{ fontSize: "0.85rem", marginTop: 8, color: "var(--text-light)" }}>Provider: Google Analytics (_ga, _gid, _gat). These cookies are only placed if you click &quot;Accept.&quot;</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>Your Choices</h2>
            <p>When you first visit the Site, a banner will ask you to accept or decline optional cookies. Your choice is saved for 12 months.</p>
            <ul style={{ paddingLeft: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Accept</strong> — essential cookies plus analytics cookies will be set.</li>
              <li><strong>Decline</strong> — only the essential cookie consent preference cookie will be set. No analytics cookies will run.</li>
            </ul>
            <p style={{ marginTop: 12 }}>You can also control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a new cookie is set. Note that disabling cookies may affect the functionality of some websites.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>How to Change Your Preference</h2>
            <p>To change your cookie preference at any time, clear your browser cookies for this site and reload the page — the consent banner will reappear. You can also email us at <a href="mailto:larisa@firebirdrealty.net" style={{ color: "var(--purple)", textDecoration: "underline" }}>larisa@firebirdrealty.net</a> with any questions.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>Third-Party Cookies</h2>
            <p>We do not place third-party advertising cookies. If analytics is enabled (with your consent), Google Analytics may set its own cookies. Google&apos;s use of data is governed by their <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple)", textDecoration: "underline" }}>Privacy Policy</a>. You can opt out of Google Analytics across all websites using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple)", textDecoration: "underline" }}>Google Analytics Opt-out Browser Add-on</a>.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--deep)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>Contact</h2>
            <p>Questions about our use of cookies? Contact us at <a href="mailto:larisa@firebirdrealty.net" style={{ color: "var(--purple)", textDecoration: "underline" }}>larisa@firebirdrealty.net</a>.</p>
          </section>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", paddingTop: 16 }}>
            <Link href="/privacy-policy" style={{ color: "var(--purple)", textDecoration: "underline", fontSize: "0.9rem" }}>Privacy Policy</Link>
            <Link href="/terms-of-service" style={{ color: "var(--purple)", textDecoration: "underline", fontSize: "0.9rem" }}>Terms of Service</Link>
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
