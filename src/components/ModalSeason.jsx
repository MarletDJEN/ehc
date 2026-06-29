import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ModalSeason() {
  const [show, setShow] = useState(false)
  const closeRef = useRef(null)

  useEffect(() => {
    const seen = sessionStorage.getItem('ehc-season-seen')
    if (seen) return
    const t = setTimeout(() => {
      setShow(true)
    }, 2000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!show) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [show])

  function close() {
    sessionStorage.setItem('ehc-season-seen', '1')
    setShow(false)
  }

  return (
    <div className={`modal-overlay${show ? ' open' : ''}`} onClick={close} role="dialog" aria-modal="true" aria-label="Promotion saisonnière">
      <div className={`modal-card${show ? ' open' : ''}`} onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={close} aria-label="Fermer" ref={closeRef}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <span className="modal-badge">Disponibilités · Fin d'année</span>
        <h2 className="modal-title">Besoin de personnel<br/>pour vos fêtes ?</h2>

        <p className="modal-desc">
          Mariages, réveillons, séminaires de fin d'année — Élite Hospitality Consulting Bénin met à votre disposition des serveurs, barmans, maîtres d'hôtel et superviseurs formés à nos standards d'excellence. Nous louons également tout le matériel événementiel nécessaire (tables, chaises, vaisselle, décoration).
        </p>

        <ul className="modal-check">
          <li>Mise à disposition de personnel qualifié</li>
          <li>Location de matériel événementiel</li>
          <li>Devis immédiat · Livraison incluse</li>
        </ul>

        <div className="modal-actions">
          <Link className="btn btn--primary btn--lg" to="/contact" onClick={close}>
            Nous contacter
            <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <button className="btn btn--ghost btn--lg" onClick={close}>
            Plus tard
          </button>
        </div>
      </div>
    </div>
  )
}
