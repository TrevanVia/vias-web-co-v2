export default function SiteCard({ tag, title, tagline, features, link, imageClass }) {
  const imageStyle = {
    aspectRatio: '16 / 10',
    backgroundColor: 'var(--paper)',
    backgroundImage: `url(/${imageClass}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    borderBottom: '1px solid var(--hairline)',
  }

  return (
    <a href={link} target="_blank" rel="noreferrer" style={styles.card}
       onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(42, 31, 20, 0.12)' }}
       onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
      <div style={imageStyle} />
      <div style={styles.body}>
        <div style={styles.tag}>{tag}</div>
        <div style={styles.title}>{title}</div>
        <p style={styles.tagline}>{tagline}</p>
        <ul style={styles.features}>
          {features.map((f, i) => (
            <li key={i} style={styles.feature}>
              <span style={styles.dot} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <span style={styles.link}>Visit {link.replace('https://', '')} →</span>
      </div>
    </a>
  )
}

const styles = {
  card: {
    background: 'var(--paper-deep)',
    border: '1px solid var(--hairline)',
    borderRadius: 6,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s',
    color: 'inherit',
    textDecoration: 'none',
  },
  body: {
    padding: '36px 36px 40px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  tag: {
    fontFamily: "'Figtree', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink-faint)',
    marginBottom: 14,
  },
  title: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    color: 'var(--ink)',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: 'var(--ink-soft)',
    lineHeight: 1.5,
    marginBottom: 24,
  },
  features: {
    listStyle: 'none',
    marginBottom: 28,
    padding: 0,
  },
  feature: {
    fontSize: 14,
    color: 'var(--ink-soft)',
    padding: '8px 0',
    borderTop: '1px solid var(--hairline)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: 'var(--accent)',
    marginTop: 9,
    flexShrink: 0,
  },
  link: {
    marginTop: 'auto',
    paddingTop: 20,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--accent)',
  },
}
