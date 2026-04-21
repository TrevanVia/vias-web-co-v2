import SEO from '../components/SEO'
import SiteCard from '../components/SiteCard'
import BuildCTA from '../components/BuildCTA'

export default function Work() {
  return (
    <>
      <SEO title="Work" description="Recent projects by Via's Web Co. — a NRV real estate lead-gen site and a Statcast-powered MLB projection engine." path="/work" />

      <section style={styles.hero}>
        <span className="section-label">Sites I've built</span>
        <h1 style={styles.h1}>What I can <span style={styles.accent}>do.</span></h1>
        <p style={styles.sub}>
          Two recent projects that show the range. A lead-generation site for a real estate business. A data product with thousands of moving parts. Both built and maintained by me.
        </p>
      </section>

      <section style={styles.grid}>
        <div style={styles.inner}>
          <SiteCard
            tag="Real estate · 2026"
            title="Trevan Via Realty"
            tagline="A lead-generation site for a NRV real estate business, built from the ground up."
            features={[
              'Full active-listings system with featured property integration',
              'Home value lead capture form with email automation via Web3Forms',
              'Five detailed area guides covering the entire NRV market',
              'SEO optimization with Open Graph tags and JSON-LD structured data',
              'Mobile-first responsive design with custom lightbox photo gallery',
              'Google reviews testimonial section pulled from Business Profile',
              'Deployed on Vercel with continuous integration from GitHub',
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
              'Seven-layer composite model using three years of Baseball Savant data',
              'Pitch arsenal grading system with percentile bars and letter grades',
              'Automated daily tweet system via GitHub Actions cron jobs',
              'Player-of-the-day feature with full statistical breakdown',
              'Interactive leaderboard, roster, compare, and research tools',
              'Full methodology documentation and custom value/dollar calculations',
            ]}
            link="https://viacastbaseball.com"
            imageClass="work-viacast"
          />
        </div>
      </section>

      <BuildCTA label="Yours could be next" />
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
  },
  grid: {
    padding: '60px 44px 140px',
  },
  inner: {
    maxWidth: 1360,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
  },
}
