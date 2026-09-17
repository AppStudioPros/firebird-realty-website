import Image from "next/image";
import { ExternalLink, Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import FadeIn from "./components/FadeIn";
import HeadingUnderline from "./components/HeadingUnderline";
import NavMenu from "./components/NavMenu";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Larisa Seibel",
  jobTitle: "Licensed Real Estate Agent — Buyer's Specialist",
  description: "Licensed Florida buyer's agent based in Ormond Beach with 21+ years of experience. Specializing in first-time homebuyers, new Americans, and buyers who need a real advocate. Russian-speaking.",
  url: "https://www.firebirdrealty.net",
  telephone: "+15035474507",
  email: "larisa@firebirdrealty.net",
  address: { "@type": "PostalAddress", addressLocality: "Ormond Beach", addressRegion: "FL", addressCountry: "US" },
  areaServed: { "@type": "State", name: "Central Florida" },
  knowsLanguage: ["English", "Russian"],
  memberOf: { "@type": "Organization", name: "Park Place Real Estate" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Who is Larisa Seibel?", acceptedAnswer: { "@type": "Answer", text: "Larisa Seibel is a licensed real estate agent with 21+ years of experience based in Ormond Beach, Florida. She operates under the Firebird Realty brand and specializes in working with buyers, first-time homebuyers, and new Americans navigating homeownership for the first time." } },
    { "@type": "Question", name: "Does Larisa Seibel work with first-time homebuyers?", acceptedAnswer: { "@type": "Answer", text: "Yes. First-time homebuyers are one of Larisa's primary specialties. She walks buyers through every step of the process with patience and clarity, from initial search to closing." } },
    { "@type": "Question", name: "Does Larisa Seibel speak Russian?", acceptedAnswer: { "@type": "Answer", text: "Yes. Larisa Seibel is bilingual in English and Russian and works with Russian-speaking clients throughout Central Florida." } },
    { "@type": "Question", name: "What areas does Larisa Seibel cover?", acceptedAnswer: { "@type": "Answer", text: "Larisa serves Central Florida within a 100-mile radius of Ormond Beach, including Daytona Beach, Palm Coast, St. Augustine, DeLand, Deltona, Sanford, Orlando, and surrounding communities." } },
  ],
};

const buyerSteps = [
  { num: "01", title: "Initial Consultation", body: "We sit down, talk through your goals, timeline, and budget. No pressure, no jargon. Just an honest conversation about what's possible and what to expect." },
  { num: "02", title: "Get Pre-Approved", body: "Before you start touring homes, you need a pre-approval letter. We connect you with trusted lenders who can get this done fast. It makes your offer competitive from day one." },
  { num: "03", title: "Home Search", body: "You get access to MLS listings as they come on the market. We tour together, I point out what matters (and what to watch for), and we move quickly when the right one appears." },
  { num: "04", title: "Making an Offer", body: "When you find it, I write a strong offer and negotiate on your behalf. 21 years of negotiation experience means I know how to win without overpaying." },
  { num: "05", title: "Under Contract", body: "Inspections, contingencies, appraisals — I walk you through all of it and protect your interests every step of the way." },
  { num: "06", title: "Closing Day", body: "You get the keys. I stay involved until the very end to make sure nothing falls through the cracks. This is the moment we've been building toward." },
];

const whyLarisa = [
  "21+ years in Florida real estate — she's seen every market condition",
  "Bilingual in English and Russian",
  "Artist background — an eye for space, layout, and potential that most agents don't have",
  "Specializes in first-time buyers who need guidance, not pressure",
  "Deep knowledge of the new Americans homebuying experience",
  "Partner of a licensed mortgage broker — access to financing insight at every stage",
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{ background: "#1d092c", padding: "12px 0", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "block", lineHeight: 0 }}>
            <Image
              src="/logo-nav.jpg"
              alt="Firebird Realty"
              width={6328}
              height={2959}
              style={{ height: 61, width: "auto", display: "block" }}
              priority
            />
          </a>
          <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div className="nav-desktop" style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="#process" className="nav-link">Process</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="tel:5035474507" className="nav-link">(503) 547-4507</a>
            </div>
            <NavMenu />
            <a href="mailto:larisa@firebirdrealty.net" className="btn-purple nav-contact-btn" style={{ padding: "9px 20px", fontSize: "0.85rem", width: "auto" }}>
              Contact Larisa
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ── HERO ────────────────────────────────────────────── */}
        <section className="hero-bg" style={{ color: "#fff", padding: "80px 0 0", position: "relative", overflow: "hidden" }}>
          {/* Background logo watermark */}
          <Image
            src="/hero-bg-logo.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", opacity: 0.35, zIndex: 0 }}
            aria-hidden="true"
            priority
          />
          <div className="container" style={{ paddingBottom: 60, position: "relative", zIndex: 1 }}>
            <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "60px", alignItems: "stretch" }}>
              <FadeIn delay={0} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div className="pulse-badge" style={{ marginBottom: 20 }}>
                  <span className="tag" style={{ background: "rgba(123,47,190,0.2)", color: "#D4ADFF" }}>
                    Ormond Beach, Florida
                  </span>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <span className="lang-pill">Говорим по-русски &nbsp;|&nbsp; Russian-Speaking</span>
                </div>
                <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.03em", fontFamily: "'Playfair Display', serif" }}>
                  Your Buyer&apos;s Advocate<br />
                  <span style={{ color: "#C084FC" }}>in Florida.</span>
                </h1>
                <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 40, maxWidth: 520 }}>
                  21 years of experience. A genuine specialist in first-time buyers and new Americans. Someone in your corner from the first conversation to the day you get your keys.
                </p>
                <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="mailto:larisa@firebirdrealty.net" className="btn-purple">
                    Start Your Home Search <ArrowRight size={16} />
                  </a>
                  <a href="tel:5035474507" className="btn-white">
                    Call Larisa
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={180} direction="none" className="hero-photo-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image
                  src="/larisa-hero-desk.jpg"
                  alt="Larisa Seibel — Florida Buyer's Agent, Firebird Realty"
                  width={2400}
                  height={3598}
                  className="hero-photo-img"
                  style={{
                    display: "block",
                    width: "100%",
                    maxWidth: 357,
                    height: "auto",
                    borderRadius: 14,
                    boxShadow: "0 8px 48px rgba(123,47,190,0.3)",
                  }}
                  priority
                />
              </FadeIn>
            </div>
          </div>

          {/* Trust bar */}
          <div style={{ background: "rgba(0,0,0,0.25)", marginTop: 0, position: "relative", zIndex: 1 }}>
            <div className="container">
              <div className="trust-bar">
                {[
                  { stat: "21+", label: "Years in Florida Real Estate" },
                  { stat: "Bilingual", label: "English & Russian" },
                  { stat: "Buyers First", label: "Your advocate, not the seller's" },
                  { stat: "MLS Access", label: "Every active listing, every day" },
                ].map(({ stat, label }) => (
                  <div key={label} className="trust-item">
                    <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "#C084FC", marginBottom: 4 }}>{stat}</p>
                    <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY LARISA ──────────────────────────────────────── */}
        <section className="section" style={{ background: "#fff", textAlign: "center" }}>
          <div className="container-narrow">
            <FadeIn>
              <span className="tag" style={{ background: "var(--purple-light)", color: "var(--purple)" }}>Why work with Larisa</span>
              <HeadingUnderline>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--deep)", letterSpacing: "-0.02em" }}>
                  A buyer&apos;s agent who actually shows up
                </h2>
              </HeadingUnderline>
            </FadeIn>
            <FadeIn delay={100}>
              <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.9, marginBottom: 44 }}>
                Larisa has been doing this since 2005. She knows the neighborhoods, the market rhythms, the inspection red flags, and the negotiation moves that get her buyers into homes — often in competitive situations where other agents come home empty-handed.
              </p>
            </FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
              {whyLarisa.map((item, i) => (
                <FadeIn key={item} delay={i * 60}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "var(--cream)", border: "1px solid var(--border)", borderLeft: "4px solid var(--purple)", borderRadius: "0 10px 10px 0", padding: "16px 20px" }}>
                    <CheckCircle size={18} color="var(--purple)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.97rem", color: "var(--text-dark)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section id="process" className="section" style={{ background: "var(--cream)", textAlign: "center" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "var(--gold-light)", color: "var(--gold)" }}>The Buying Process</span>
              <HeadingUnderline>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--deep)", letterSpacing: "-0.02em" }}>
                  What buying a home with Larisa looks like
                </h2>
              </HeadingUnderline>
            </FadeIn>
            <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
              {buyerSteps.map((step, i) => (
                <FadeIn key={step.num} delay={i * 80}>
                  <div className="step-card" style={{ height: "100%" }}>
                    <p style={{ fontSize: "2rem", fontWeight: 900, color: "var(--purple)", opacity: 0.25, marginBottom: 12, letterSpacing: "-0.03em", lineHeight: 1 }}>{step.num}</p>
                    <p style={{ fontWeight: 800, color: "var(--deep)", marginBottom: 10, fontSize: "1rem" }}>{step.title}</p>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-mid)", lineHeight: 1.75 }}>{step.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT LARISA ─────────────────────────────────────── */}
        <section id="about" className="section" style={{ background: "#fff" }}>
          <div className="container">
            <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <FadeIn>
                <div className="about-photo-glow" style={{ borderRadius: 16, overflow: "hidden", border: "2px solid #7B2FBE" }}>
                  <Image src="/larisa-about.jpg" alt="Larisa Seibel — Florida Buyer's Agent, Firebird Realty" width={2400} height={1920} className="about-photo" style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 380, display: "block" }} />
                </div>
              </FadeIn>
              <FadeIn delay={120}>
                <span className="tag" style={{ background: "var(--purple-light)", color: "var(--purple)" }}>About Larisa</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.3rem)", fontWeight: 800, color: "var(--deep)", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  21 years. Real expertise.<br />Real results.
                </h2>
                <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.9, marginBottom: 18 }}>
                  Larisa has been helping buyers in Central Florida since 2005. She came to real estate from an artist's background — and that background shows in the way she sees homes. She notices things most agents miss. She understands how space lives, how light moves through rooms, and what a floor plan tells you about how a family will actually function in a home.
                </p>
                <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.9, marginBottom: 18 }}>
                  She has a particular passion for first-time buyers and new Americans navigating homeownership for the first time. She speaks Russian, and has spent much of her career working with immigrant families and others who needed more than just a transaction — they needed a guide.
                </p>
                <p style={{ fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.9, marginBottom: 32 }}>
                  She operates through Park Place Real Estate under her own brand, Firebird Realty — a name that reflects her approach. Resilient, tenacious, and always moving forward.
                </p>
                <a href="mailto:larisa@firebirdrealty.net" className="btn-purple">
                  Work With Larisa <ArrowRight size={16} />
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAMILY / PERSONAL ────────────────────────────────── */}
        <section className="section" style={{ background: "var(--cream)", textAlign: "center" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "var(--purple-light)", color: "var(--purple)" }}>The Person Behind the Agent</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.3rem)", fontWeight: 800, color: "var(--deep)", marginBottom: 20, letterSpacing: "-0.02em" }}>
                She knows what home means
              </h2>
              <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, var(--purple), var(--gold))", borderRadius: 2, margin: "0 auto 32px" }} />
              <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.9, maxWidth: 640, margin: "0 auto 48px" }}>
                Home isn&apos;t just square footage and school districts. It&apos;s where life happens. Larisa has bought, designed, and renovated numerous properties over her career — she brings that lived experience to every client relationship.
              </p>
            </FadeIn>
            <div className="family-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 800, margin: "0 auto" }}>
              <FadeIn delay={80}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "2px solid #2a0d3e" }}>
                  <Image src="/larisa-family-1.jpg" alt="Larisa Seibel with family" width={400} height={300} style={{ objectFit: "cover", width: "100%", height: 280, display: "block" }} />
                </div>
              </FadeIn>
              <FadeIn delay={160}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "2px solid #2a0d3e" }}>
                  <Image src="/larisa-family-2.jpg" alt="Larisa Seibel with family" width={400} height={300} style={{ objectFit: "cover", width: "100%", height: 280, display: "block" }} />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── NEW AMERICANS ────────────────────────────────────── */}
        <section className="section hero-bg" style={{ color: "#fff", textAlign: "center" }}>
          <div className="container-narrow">
            <FadeIn>
              <span className="tag" style={{ background: "rgba(123,47,190,0.2)", color: "#D4ADFF" }}>For New Americans</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em", fontFamily: "'Playfair Display', serif" }}>
                Buying a home in a new country<br />is different. We get that.
              </h2>
              <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, var(--purple-bright), var(--gold))", borderRadius: 2, margin: "0 auto 28px" }} />
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.9, marginBottom: 20 }}>
                The American homebuying process has its own language, its own rules, and its own pace. For someone navigating it in an unfamiliar system — sometimes in an unfamiliar language — it can be overwhelming.
              </p>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.9, marginBottom: 40 }}>
                Larisa has spent much of her career working with new Americans and immigrant families buying their first home in the U.S. She speaks Russian, she understands the questions people are sometimes afraid to ask, and she has the patience to walk through every step until it makes sense.
              </p>
              <a href="mailto:larisa@firebirdrealty.net" className="btn-purple">
                Get in Touch <ArrowRight size={16} />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ── CROSS-PROMO — JASON ──────────────────────────────── */}
        <section className="section-sm" style={{ background: "var(--gold-light)", textAlign: "center" }}>
          <div className="container-narrow">
            <FadeIn>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>Partner Service</p>
              <p style={{ fontSize: "1.05rem", color: "var(--deep)", lineHeight: 1.8, marginBottom: 20 }}>
                Already working with Larisa on buying a home? Her partner Jason Seibel is a licensed mortgage broker with 20+ years of experience who can handle your pre-approval and financing.
              </p>
              <a href="https://innovativehomeloan.com" target="_blank" rel="noopener noreferrer" className="btn-outline-purple" style={{ fontSize: "0.9rem" }}>
                Innovative Home Loan <ExternalLink size={14} />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────── */}
        <section id="contact" className="section" style={{ background: "#fff", textAlign: "center" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "var(--purple-light)", color: "var(--purple)" }}>Get in Touch</span>
              <HeadingUnderline>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--deep)", letterSpacing: "-0.02em" }}>
                  Ready to start your search?
                </h2>
              </HeadingUnderline>
              <p style={{ color: "var(--text-mid)", maxWidth: 480, margin: "0 auto 12px", lineHeight: 1.8 }}>
                Reach out any time. First conversations are free, low-pressure, and focused on what you actually need.
              </p>
              {/* FREC 61J2-10.025: brokerage name adjacent to contact info */}
              <p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginBottom: 36 }}>
                Larisa Seibel | Park Place Real Estate | Licensed Florida Real Estate Agent
              </p>
            </FadeIn>
            <div className="contact-cards" style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center", maxWidth: 680, margin: "0 auto" }}>
              {[
                { href: "tel:5035474507", label: "(503) 547-4507", sub: "Call or text", icon: Phone },
                { href: "mailto:larisa@firebirdrealty.net", label: "larisa@firebirdrealty.net", sub: "Email Larisa", icon: Mail },
                { href: "https://maps.google.com/?q=Ormond+Beach,FL", label: "Ormond Beach, FL", sub: "Serving Central Florida", icon: MapPin, external: true },
              ].map(({ href, label, sub, icon: Icon, external }, i) => (
                <FadeIn key={label} delay={i * 80} style={{ flex: "0 1 calc(33% - 18px)", minWidth: 200 }}>
                  <a href={href} className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textDecoration: "none", cursor: "pointer" }}
                     {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <div style={{ width: 46, height: 46, borderRadius: 10, background: "rgba(196,98,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={20} color="var(--purple)" />
                    </div>
                    <span style={{ fontWeight: 700, color: "var(--deep)", fontSize: "0.9rem", textAlign: "center" }}>{label}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{sub}</span>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ background: "var(--deep)", color: "rgba(255,255,255,0.5)", padding: "44px 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ fontWeight: 800, color: "#fff", marginBottom: 6, fontSize: "1.05rem" }}>
            <span style={{ color: "var(--purple)" }}>Firebird</span> Realty
          </p>
          <p style={{ fontSize: "0.85rem", marginBottom: 4, color: "rgba(255,255,255,0.6)" }}>Larisa Seibel | Licensed Real Estate Agent | Ormond Beach, Florida</p>
          {/* FREC required: brokerage name adjacent to contact info */}
          <p style={{ fontSize: "0.82rem", marginBottom: 4, color: "rgba(255,255,255,0.5)" }}>
            Park Place Real Estate &nbsp;|&nbsp; FL License: [PENDING — CONFIRM WITH CLIENT]
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 20, marginTop: 12, fontSize: "0.82rem" }}>
            <a href="tel:5035474507" style={{ color: "rgba(255,255,255,0.5)" }}>(503) 547-4507</a>
            <a href="mailto:larisa@firebirdrealty.net" style={{ color: "rgba(255,255,255,0.5)" }}>larisa@firebirdrealty.net</a>
            <a href="https://innovativehomeloan.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple)" }}>Innovative Home Loan</a>
          </div>

          {/* Equal Housing Opportunity logo */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 20 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Equal Housing Opportunity">
              <rect width="32" height="32" rx="4" fill="rgba(255,255,255,0.08)" />
              {/* House shape */}
              <polygon points="16,4 28,14 26,14 26,27 6,27 6,14 4,14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round"/>
              {/* Door */}
              <rect x="13" y="19" width="6" height="8" fill="rgba(255,255,255,0.3)" />
              {/* Equal sign */}
              <line x1="11" y1="14" x2="21" y2="14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="11" y1="17" x2="21" y2="17" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textAlign: "left", lineHeight: 1.4 }}>
              Equal Housing<br />Opportunity
            </span>
          </div>

          {/* Legal page links */}
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginBottom: 16, fontSize: "0.78rem" }}>
            <a href="/privacy-policy" style={{ color: "rgba(255,255,255,0.35)" }}>Privacy Policy</a>
            <a href="/terms-of-service" style={{ color: "rgba(255,255,255,0.35)" }}>Terms of Service</a>
            <a href="/cookie-policy" style={{ color: "rgba(255,255,255,0.35)" }}>Cookie Policy</a>
          </div>

          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.6 }}>
            © {new Date().getFullYear()} Larisa Seibel / Firebird Realty. All information deemed reliable but not guaranteed.<br />
            This website does not constitute legal or financial advice. Larisa Seibel operates as a buyer&apos;s agent only.
          </p>
        </div>
      </footer>
    </>
  );
}
