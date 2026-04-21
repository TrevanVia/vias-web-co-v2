export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.logo}>VIA'S</div>
        <div style={styles.meta}>Web design for the New River Valley · Floyd, VA</div>
        <div style={styles.meta}>© 2026 Via's Web Co.</div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'var(--ink)',
    padding: '56px 44px',
    borderTop: '1px solid rgba(246, 242, 234, 0.08)',
  },
  inner: {
    maxWidth: 1360,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 24,
  },
  logo: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: 20,
    letterSpacing: '5px',
    color: 'var(--paper)',
  },
  meta: {
    fontSize: 13,
    color: 'rgba(246, 242, 234, 0.48)',
    letterSpacing: '0.04em',
  },
}
