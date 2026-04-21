import { Link } from 'react-router-dom'

export default function BuildCTA({ label = 'Ready when you are' }) {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.label}>{label}</div>
        <h2 style={styles.heading}>
          Let's <span style={styles.accent}>build it.</span>
        </h2>
        <div style={styles.buttons}>
          <Link to="/start" style={styles.btnPrimary}>Start a project →</Link>
          <a href="sms:15402394636" style={styles.btnGhost}>Or text me direct</a>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: 'var(--ink)',
    color: 'var(--paper)',
    padding: '180px 44px 140px',
    textAlign: 'center',
  },
  inner: { maxWidth: 1100, margin: '0 auto' },
  label: {
    fontFamily: "'Figtree', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--accent-soft)',
    marginBottom: 44,
  },
  heading: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(52px, 9vw, 144px)',
    lineHeight: 0.95,
    letterSpacing: '-0.04em',
    color: 'var(--paper)',
    marginBottom: 64,
  },
  accent: { color: 'var(--accent-soft)' },
  buttons: {
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    background: 'var(--accent-soft)',
    color: 'var(--ink)',
    padding: '18px 36px',
    fontSize: 16,
    fontWeight: 500,
    borderRadius: 2,
    transition: 'all 0.2s',
  },
  btnGhost: {
    color: 'var(--paper)',
    border: '1px solid rgba(246, 242, 234, 0.28)',
    padding: '18px 36px',
    fontSize: 16,
    fontWeight: 500,
    borderRadius: 2,
    transition: 'all 0.2s',
  },
}
