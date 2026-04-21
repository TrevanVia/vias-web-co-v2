import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Nav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleProcess = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav style={styles.nav(scrolled)}>
      <Link to="/" style={styles.logo}>VIA'S</Link>

      <div className="nav-links" style={styles.links}>
        <NavLink to="/pricing" style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.active : {}) })}>
          Pricing
        </NavLink>
        <Link to="/#process" onClick={handleProcess} style={styles.link}>
          Process
        </Link>
        <NavLink to="/work" style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.active : {}) })}>
          Work
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.active : {}) })}>
          About
        </NavLink>
        <NavLink to="/start" style={({ isActive }) => ({ ...styles.cta, ...(isActive ? { background: 'var(--ink)', color: 'var(--paper)' } : {}) })}>
          Start a project
        </NavLink>
      </div>
    </nav>
  )
}

const styles = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '22px 44px',
    background: scrolled ? 'rgba(246, 242, 234, 0.92)' : 'rgba(246, 242, 234, 0.82)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--hairline)',
    transition: 'background 0.2s',
  }),
  logo: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: '5px',
    color: 'var(--ink)',
  },
  links: {
    display: 'flex',
    gap: 40,
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    color: 'var(--ink-soft)',
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  active: {
    color: 'var(--accent)',
  },
  cta: {
    fontSize: 14,
    color: 'var(--ink)',
    border: '1px solid var(--ink)',
    padding: '9px 18px',
    borderRadius: 2,
    transition: 'all 0.2s',
    fontWeight: 500,
  },
}
