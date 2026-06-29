import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/formations', label: 'Formations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('ehc-theme') !== 'light')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('ehc-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 4)
      setHidden(y > 80 && y > lastY)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${hidden ? ' is-hidden' : ''}`}>
        <div className="container container--wide">
          <nav className="nav" aria-label="Principal">
            <Link className="brand" to="/"><img className="brand-logo" src="/assets/img/logo.jpeg" alt="EHC" /> EHC</Link>
            <div className="nav-links" role="navigation">
              {links.map(l => (
                <Link key={l.to} to={l.to} aria-current={location.pathname === l.to ? 'page' : undefined}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="nav-cta-row">
              <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Mode clair' : 'Mode sombre'}>
                {dark ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
              <Link to="/contact" className="btn btn--primary btn--sm">
                Nous contacter
                <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <button className="nav-toggle" aria-label="Ouvrir le menu" aria-expanded={open}
                onClick={() => setOpen(!open)}>
                <span aria-hidden="true"></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-drawer${open ? ' open' : ''}`} id="mobile-drawer" aria-hidden={!open}>
        <button className="drawer-close" onClick={() => setOpen(false)}>Fermer</button>
        {links.map(l => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
      </div>
    </>
  )
}
