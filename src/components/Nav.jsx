import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Nav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleProcess = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navStyle = {
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
  }

  const logoStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: '5px',
    color: 'var(--ink)',
  }

  const desktopLink = {
    fontSize: 14,
    color: 'var(--ink-soft)',
    fontWeight: 500,
    transition: 'color 0.2s',
  }

  const activeStyle = { color: 'var(--accent)' }

  const ctaStyle = {
    fontSize: 14,
    color: 'var(--ink)',
    border: '1px solid var(--ink)',
    padding: '9px 18px',
    borderRadius: 2,
    transition: 'all 0.2s',
    fontWeight: 500,
  }

  const toggleStyle = {
    display: 'none',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 8,
    width: 44,
    height: 44,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const barStyle = {
    display: 'block',
    width: 22,
    height: 2,
    background: 'var(--ink)',
    margin: '2px 0',
  }

  const mobileMenuStyle = {
    display: 'none',
    position: 'fixed',
    top: 74,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--paper)',
    zIndex: 99,
    padding: '32px 44px',
    transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
    opacity: menuOpen ? 1 : 0,
    transition: 'transform 0.3s ease, opacity 0.2s ease',
    pointerEvents: menuOpen ? 'auto' : 'none',
  }

  const mobileLink = (isActive) => ({
    color: isActive ? 'var(--accent)' : 'var(--ink)',
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 600,
    fontSize: 28,
    letterSpacing: '-0.02em',
    padding: '18px 0',
    display: 'block',
    borderBottom: '1px solid var(--hairline)',
  })

  const mobileCtaStyle = {
    background: 'var(--ink)',
    color: 'var(--paper)',
    padding: '18px 24px',
    borderRadius: 2,
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 32,
    display: 'block',
    letterSpacing: '0.02em',
  }

  return (
    <>
      <nav style={navStyle}>
        <Link to="/" style={logoStyle}>VIA'S</Link>

        <div className="nav-links" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
          <NavLink to="/pricing" style={({ isActive }) => ({ ...desktopLink, ...(isActive ? activeStyle : {}) })}>Pricing</NavLink>
          <Link to="/#process" onClick={handleProcess} style={desktopLink}>Process</Link>
          <NavLink to="/work" style={({ isActive }) => ({ ...desktopLink, ...(isActive ? activeStyle : {}) })}>Work</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ ...desktopLink, ...(isActive ? activeStyle : {}) })}>About</NavLink>
          <NavLink to="/start" style={ctaStyle}>Start a project</NavLink>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={toggleStyle}>
          <span style={barStyle} />
          <span style={barStyle} />
          <span style={barStyle} />
        </button>
      </nav>

      <div className="mobile-menu" style={mobileMenuStyle}>
        <NavLink to="/pricing" style={({ isActive }) => mobileLink(isActive)}>Pricing</NavLink>
        <NavLink to="/work" style={({ isActive }) => mobileLink(isActive)}>Work</NavLink>
        <NavLink to="/about" style={({ isActive }) => mobileLink(isActive)}>About</NavLink>
        <NavLink to="/start" style={mobileCtaStyle}>Start a project →</NavLink>
      </div>
    </>
  )
}