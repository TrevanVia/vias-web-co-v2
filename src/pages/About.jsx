import SEO from '../components/SEO'
import BuildCTA from '../components/BuildCTA'

export default function About() {
  return (
    <>
      <SEO title="About" description="Floyd County native, running a real estate business and a web design business. Here's who I am and how I work." path="/about" />

      <section style={styles.hero}>
        <span className="section-label">About</span>
        <h1 style={styles.h1}>
          Floyd native, <span style={styles.accent}>building things.</span>
        </h1>

        <p style={styles.bio}>
          I'm Trevan Via, born and raised in Floyd County. Graduated in 2019, never left, and now I run two businesses out of here: <strong style={styles.strong}>a real estate practice and this web design shop.</strong>
        </p>

        <p style={styles.bio}>
          I started building websites because I kept meeting small business owners in the NRV who needed one and couldn't find anyone local they trusted. The choice was either a $5,000 agency in Roanoke or a $300 Fiverr freelancer who'd ghost them. There wasn't a middle. So I built it.
        </p>

        <p style={styles.bio}>
          The real estate work keeps me grounded in what small business owners actually deal with. The web work is what I do when I'm not showing houses. Both businesses share the same promise: I answer my phone.
        </p>

        <div style={styles.howWrap}>
          <div style={styles.howLabel}>How I work</div>
          <div style={styles.howGrid}>
            {[
              ['Flat pricing, always.', "You see the price before we start. I don't do hourly billing, line-item quotes, or surprise invoices. One number, one deliverable."],
              ['Fourteen days, every time.', "Every project has the same timeline. No six-month agency slogs. Fast doesn't mean rushed. It means I respect your time."],
              ['Real copy that sounds like you.', "I write your site's copy myself, based on how you actually talk about your business. No corporate jargon, no filler."],
              ['Still here after launch.', "A lot of designers disappear once the check clears. I don't. Monthly hosting gets you updates, fixes, and a human to call."],
            ].map(([title, body], i) => (
              <div key={i} style={styles.howItem}>
                <h3 style={styles.howTitle}>{title}</h3>
                <p style={styles.howBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.sign}>
          <span style={styles.signName}>Trevan Via</span>
          <span style={styles.signRole}>— founder, Via's Web Co.</span>
        </div>
      </section>

      <BuildCTA />
    </>
  )
}

const styles = {
  hero: {
    padding: '180px 44px 120px',
    maxWidth: 980,
    margin: '0 auto',
  },
  h1: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(52px, 8vw, 108px)',
    lineHeight: 0.95,
    letterSpacing: '-0.04em',
    color: 'var(--ink)',
    margin: '40px 0 80px',
    maxWidth: '16ch',
  },
  accent: { color: 'var(--accent)' },
  bio: {
    fontSize: 'clamp(20px, 2.2vw, 26px)',
    lineHeight: 1.55,
    color: 'var(--ink)',
    marginBottom: 32,
    maxWidth: 680,
    fontWeight: 400,
  },
  strong: { fontWeight: 600, color: 'var(--accent)' },
  howWrap: {
    borderTop: '1px solid var(--hairline)',
    paddingTop: 80,
    marginTop: 80,
  },
  howLabel: {
    fontFamily: "'Figtree', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink-faint)',
    marginBottom: 40,
  },
  howGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px 64px',
  },
  howItem: {},
  howTitle: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 26,
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    color: 'var(--ink)',
    marginBottom: 12,
  },
  howBody: {
    fontSize: 16,
    color: 'var(--ink-soft)',
    lineHeight: 1.6,
  },
  sign: {
    marginTop: 100,
    paddingTop: 40,
    borderTop: '1px solid var(--hairline)',
    display: 'flex',
    alignItems: 'baseline',
    gap: 16,
    flexWrap: 'wrap',
  },
  signName: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
  },
  signRole: {
    fontSize: 14,
    color: 'var(--ink-faint)',
    fontWeight: 500,
  },
}
