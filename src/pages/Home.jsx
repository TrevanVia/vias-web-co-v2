import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SiteCard from '../components/SiteCard'
import BuildCTA from '../components/BuildCTA'

const processSteps = [
  { num: '01', when: 'Day 1', title: 'A real conversation.', body: "Thirty minutes on the phone or over coffee. I figure out what your business actually needs and whether I'm the right person to build it. No pitch deck." },
  { num: '02', when: 'Days 2 – 4', title: 'Design and copy.', body: "I draft the site and write the copy. You look at it, tell me what's off, and we fix it. One round. No endless revision cycles that eat three months." },
  { num: '03', when: 'Days 5 – 12', title: 'Build and test.', body: "I build it out, test it on every device, wire up your domain and email, and set up your analytics. You see progress every couple of days." },
  { num: '04', when: 'Day 14', title: 'Launch.', body: "The site goes live. I walk you through how to request changes and hand you the keys. And I'm still here the next time something comes up." },
]

export default function Home() {
  return (
    <>
      <SEO path="/" />

      {/* HERO */}
      <section className="hero-section" style={styles.hero}>
        <div style={styles.heroMeta}>
          <span style={styles.heroDot}></span>
          <span>Accepting projects · Summer 2026</span>
        </div>

        <h1 style={styles.h1}>
          Websites for the New River <span style={styles.accent}>Valley.</span>
        </h1>

        <div className="hero-footer" style={styles.heroFooter}>
          <p className="hero-sub" style={styles.heroSub}>
            Small, sharp sites for the businesses that make the NRV what it is. Flat pricing, fourteen-day turnarounds, and a local guy who picks up the phone.
          </p>
          <div className="hero-cta-group" style={styles.ctaGroup}>
            <Link to="/start" className="btn-primary">Start a project →</Link>
            <Link to="/pricing" className="btn-ghost">See pricing</Link>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <div style={styles.credsStrip}>
        <div className="creds-inner" style={styles.credsInner}>
          <span>Based in Floyd, VA</span>
          <span style={styles.mark}>◆</span>
          <span>Serving the NRV</span>
          <span style={styles.mark}>◆</span>
          <span>One project at a time</span>
          <span style={styles.mark}>◆</span>
          <span>Est. 2026</span>
        </div>
      </div>

      {/* PROCESS */}
      <section style={styles.processSection} id="process">
        <div style={styles.sectionInner}>
          <div className="section-lead">
            <span className="section-label">Process</span>
            <div className="section-head">
              <h2>Two weeks, beginning to end.</h2>
              <p>Most agencies turn a small website into a six-month project. There's no reason for that. Here's how we actually get it done.</p>
            </div>
          </div>

          <div style={styles.processList}>
            {processSteps.map(step => (
              <div key={step.num} className="process-item-mobile" style={styles.processItem}>
                <div>
                  <div style={styles.processNum}>{step.num}</div>
                  <div style={styles.processWhen}>{step.when}</div>
                </div>
                <div><h3 style={styles.processTitle}>{step.title}</h3></div>
                <div><p style={styles.processBody}>{step.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITES I'VE BUILT (teaser) */}
      <section style={styles.workSection}>
        <div className="section-lead">
          <span className="section-label">Sites I've built</span>
          <div className="section-head">
            <h2>What I can do.</h2>
            <p>A couple of recent projects that show the range of what's possible. Both built and maintained by me.</p>
          </div>
        </div>

        <div className="work-grid-mobile" style={styles.workGrid}>
          <SiteCard
            tag="Real estate · 2026"
            title="Trevan Via Realty"
            tagline="A lead-generation site for a NRV real estate business, built from the ground up."
            features={[
              'Full active-listings system with featured property integration',
              'Home value lead capture form with email automation',
              'Five detailed area guides covering the entire NRV market',
              'SEO optimization, structured data, and Open Graph branding',
              'Mobile-first responsive design with custom lightbox gallery',
            ]}
            link="https://trevanviarealty.com"
            imageClass="work-realty"
          />
          <SiteCard
            tag="Data product · 2026"
            title="VIAcast Baseball"
            tagline="A Statcast-powered MLB projection engine, built end-to-end as a solo developer."
            features={[
              'Projections for 900+ hitters and 1,200+ pitchers, all MiLB levels',
              'Seven-layer composite model using Baseball Savant data',
              'Pitch arsenal grading system with percentile bars and letter grades',
              'Automated daily tweet system via GitHub Actions',
              'Player-of-the-day, leaderboards, research, and methodology sections',
            ]}
            link="https://viacastbaseball.com"
            imageClass="work-viacast"
          />
        </div>

        <div style={styles.workCTA}>
          <Link to="/work" className="btn-ghost">See full details →</Link>
        </div>
      </section>

      <BuildCTA />
    </>
  )
}

const styles = {
  hero: {
    padding: '180px 44px 120px',
    maxWidth: 1360,
    margin: '0 auto',
  },
  heroMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    fontFamily: "'Figtree', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'var(--ink-faint)',
    marginBottom: 56,
  },
  heroDot: {
    width: 6, height: 6,
    borderRadius: '50%',
    background: 'var(--accent)',
    boxShadow: '0 0 0 3px rgba(160, 67, 42, 0.15)',
    display: 'inline-block',
  },
  h1: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(56px, 10vw, 148px)',
    lineHeight: 0.92,
    letterSpacing: '-0.04em',
    color: 'var(--ink)',
    marginBottom: 64,
    maxWidth: '14ch',
  },
  accent: { color: 'var(--accent)' },
  heroFooter: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 60,
    alignItems: 'end',
    paddingTop: 40,
    borderTop: '1px solid var(--hairline)',
  },
  heroSub: {
    fontSize: 'clamp(17px, 1.4vw, 19px)',
    color: 'var(--ink-soft)',
    maxWidth: 520,
    lineHeight: 1.55,
  },
  ctaGroup: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
  },
  credsStrip: {
    borderTop: '1px solid var(--hairline-strong)',
    borderBottom: '1px solid var(--hairline-strong)',
    background: 'var(--paper-deep)',
    padding: '24px 44px',
  },
  credsInner: {
    maxWidth: 1360,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 24,
    fontFamily: "'Figtree', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--ink-soft)',
  },
  mark: { color: 'var(--sage)', fontSize: 11 },
  processSection: {
    background: 'var(--paper-deep)',
    padding: '140px 44px',
  },
  sectionInner: { maxWidth: 1360, margin: '0 auto' },
  processList: { borderTop: '1px solid var(--hairline-strong)' },
  processItem: {
    display: 'grid',
    gridTemplateColumns: '140px 1fr 1fr',
    gap: 60,
    padding: '56px 0',
    borderBottom: '1px solid var(--hairline-strong)',
    alignItems: 'start',
  },
  processNum: {
    fontFamily: "'Newsreader', serif",
    fontWeight: 400,
    fontSize: 52,
    lineHeight: 1,
    color: 'var(--accent)',
    letterSpacing: '-0.02em',
  },
  processWhen: {
    fontFamily: "'Figtree', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink-faint)',
    marginTop: 18,
  },
  processTitle: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(26px, 2.4vw, 32px)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    color: 'var(--ink)',
    marginTop: 10,
  },
  processBody: {
    fontSize: 16,
    color: 'var(--ink-soft)',
    lineHeight: 1.6,
    maxWidth: 440,
    marginTop: 10,
  },
  workSection: {
    padding: '140px 44px',
    maxWidth: 1360,
    margin: '0 auto',
  },
  workGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    marginTop: 32,
  },
  workCTA: {
    marginTop: 64,
    textAlign: 'center',
  },
}
