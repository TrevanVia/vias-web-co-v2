import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import BuildCTA from '../components/BuildCTA'

const faqs = [
  { q: "What's included in the $1,997?", a: "A full five-page site: home, about, services or products, contact, and one more page of your choice. Custom design, written copy, mobile-first layout, contact form, basic SEO setup, domain and email wiring, and analytics. Delivered live in 14 days." },
  { q: "What's NOT included?", a: "E-commerce / online stores, user logins or portals, multi-language sites, custom applications, or anything that requires a backend database. If your project needs those, let's talk — I'll either scope a custom quote or refer you to someone who specializes." },
  { q: "What happens after launch?", a: "You own the site. The $97/month covers hosting, security, unlimited small content updates (swap a photo, change a phone number, edit a paragraph), and direct access to me when something needs fixing. Cancel any time with 30 days notice." },
  { q: "Do I own the site?", a: "Yes. The design, the copy, the code, the domain. All yours. If you ever want to move off my hosting, I hand you the files and you're free to go." },
  { q: "How do I pay?", a: "50% deposit to start ($997), 50% on launch day. Paid via Stripe invoice. Founding Client pricing, when available, is paid in full upfront." },
  { q: "Can I add pages later?", a: "Yes. Additional pages are $297 each, which includes design, copy, and integration into the existing site." },
]

export default function Pricing() {
  return (
    <>
      <SEO title="Pricing" description="One package, one price. $1,997 flat for a five-page small business website, delivered in 14 days." path="/pricing" />

      <section style={styles.hero}>
        <span className="section-label">Pricing</span>
        <h1 style={styles.h1}>One package. <br />One <span style={styles.accent}>price.</span></h1>
        <p style={styles.sub}>
          No sales calls, no line-item quotes, no surprise bills on month four. One flat rate, delivered in two weeks, and you know the number before we start.
        </p>
      </section>

      {/* PRICE CARD */}
      <section style={styles.priceSection}>
        <div style={styles.priceInner}>
          <div className="price-card-grid" style={styles.priceCard}>
            <div>
              <div style={styles.priceName}>The Standard</div>
              <div style={styles.priceSub}>Five-page local business site</div>
            </div>
            <div>
              <div style={styles.priceAmount}>$1,997
                <span style={styles.priceUnit}>One-time · delivered in 14 days</span>
              </div>
            </div>
          </div>

          <div className="price-hosting-grid" style={styles.priceHosting}>
            <div style={styles.priceHostingLeft}>
              <strong style={{ color: 'var(--paper)', fontWeight: 600 }}>Plus $97/month</strong> for hosting, security, unlimited content updates, and a direct line to me when you need something changed. Cancel any time.
            </div>
            <div style={styles.priceHostingRight}>$97<span style={styles.per}>/mo</span></div>
          </div>

          <div style={styles.priceCTA}>
            <Link to="/start" style={styles.btnAccent}>Start a project →</Link>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={styles.includedSection}>
        <div style={styles.includedInner}>
          <span className="section-label">What's included</span>
          <div className="included-grid-mobile" style={styles.includedGrid}>
            {[
              ['Five custom pages', 'Home, about, services, contact, plus one more. Designed from scratch for your business.'],
              ['Written copy', 'I write the words myself, based on how you actually talk about your business.'],
              ['Mobile-first design', 'Tested on every phone, every tablet, every screen size.'],
              ['Domain & email setup', "Wire up your domain, set up email forwarding, configure DNS. All of it."],
              ['Contact form', "Lead capture that actually emails you when someone fills it out."],
              ['Basic SEO', "Title tags, meta descriptions, Open Graph, structured data, sitemap, submitted to Google."],
              ['Analytics', 'Plausible or Google Analytics, whichever you prefer. Simple dashboard you can actually read.'],
              ['Launch and handover', "Walked through how to request changes. I'm still here after."],
            ].map(([title, body], i) => (
              <div key={i} style={styles.includedItem}>
                <h3 style={styles.includedTitle}>{title}</h3>
                <p style={styles.includedBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.faqSection}>
        <div style={styles.faqInner}>
          <span className="section-label">Questions</span>
          <h2 style={styles.faqHeading}>The usual ones.</h2>

          <div style={styles.faqList}>
            {faqs.map((faq, i) => (
              <div key={i} style={styles.faqItem}>
                <h3 style={styles.faqQ}>{faq.q}</h3>
                <p style={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BuildCTA />
    </>
  )
}

const styles = {
  hero: {
    padding: '180px 44px 80px',
    maxWidth: 1100,
    margin: '0 auto',
  },
  h1: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(60px, 10vw, 148px)',
    lineHeight: 0.92,
    letterSpacing: '-0.04em',
    color: 'var(--ink)',
    margin: '40px 0 40px',
  },
  accent: { color: 'var(--accent)' },
  sub: {
    fontSize: 'clamp(18px, 1.8vw, 22px)',
    color: 'var(--ink-soft)',
    lineHeight: 1.55,
    maxWidth: 680,
    fontWeight: 400,
  },
  priceSection: {
    background: 'var(--ink)',
    color: 'var(--paper)',
    padding: '120px 44px',
  },
  priceInner: { maxWidth: 900, margin: '0 auto' },
  priceCard: {
    borderTop: '1px solid rgba(246, 242, 234, 0.18)',
    borderBottom: '1px solid rgba(246, 242, 234, 0.18)',
    padding: '56px 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 60,
    alignItems: 'center',
  },
  priceName: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(30px, 3.2vw, 42px)',
    letterSpacing: '-0.03em',
    color: 'var(--paper)',
    marginBottom: 12,
  },
  priceSub: {
    fontSize: 14,
    color: 'rgba(246, 242, 234, 0.6)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  priceAmount: {
    fontFamily: "'Newsreader', serif",
    fontWeight: 400,
    fontSize: 'clamp(72px, 10vw, 128px)',
    lineHeight: 1,
    letterSpacing: '-0.04em',
    color: 'var(--paper)',
  },
  priceUnit: {
    display: 'block',
    fontFamily: "'Figtree', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(246, 242, 234, 0.55)',
    marginTop: 12,
  },
  priceHosting: {
    padding: '32px 0',
    borderBottom: '1px solid rgba(246, 242, 234, 0.1)',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 40,
    alignItems: 'center',
  },
  priceHostingLeft: {
    fontSize: 15,
    color: 'rgba(246, 242, 234, 0.75)',
    lineHeight: 1.6,
    maxWidth: 520,
  },
  priceHostingRight: {
    fontFamily: "'Newsreader', serif",
    fontSize: 36,
    color: 'var(--paper)',
    letterSpacing: '-0.01em',
  },
  per: {
    fontFamily: "'Figtree', sans-serif",
    fontSize: 14,
    color: 'rgba(246, 242, 234, 0.55)',
    marginLeft: 4,
  },
  priceCTA: { textAlign: 'center', marginTop: 56 },
  btnAccent: {
    background: 'var(--accent-soft)',
    color: 'var(--ink)',
    padding: '18px 36px',
    fontSize: 16,
    fontWeight: 500,
    borderRadius: 2,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
  },
  includedSection: {
    padding: '140px 44px',
  },
  includedInner: { maxWidth: 1100, margin: '0 auto' },
  includedGrid: {
    marginTop: 60,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '48px 80px',
  },
  includedItem: {
    borderTop: '1px solid var(--hairline)',
    paddingTop: 20,
  },
  includedTitle: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: '-0.02em',
    color: 'var(--ink)',
    marginBottom: 10,
  },
  includedBody: {
    fontSize: 15,
    color: 'var(--ink-soft)',
    lineHeight: 1.6,
  },
  faqSection: {
    background: 'var(--paper-deep)',
    padding: '140px 44px',
  },
  faqInner: { maxWidth: 900, margin: '0 auto' },
  faqHeading: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(40px, 5.5vw, 72px)',
    lineHeight: 1,
    letterSpacing: '-0.035em',
    color: 'var(--ink)',
    margin: '32px 0 60px',
  },
  faqList: {
    borderTop: '1px solid var(--hairline-strong)',
  },
  faqItem: {
    padding: '36px 0',
    borderBottom: '1px solid var(--hairline-strong)',
  },
  faqQ: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: '-0.02em',
    color: 'var(--ink)',
    marginBottom: 12,
  },
  faqA: {
    fontSize: 16,
    color: 'var(--ink-soft)',
    lineHeight: 1.7,
    maxWidth: 760,
  },
}
