import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container container--wide">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand"><span className="brand-mark" aria-hidden="true"></span> EHC</span>
            <p>Élite Hospitality Consulting Bénin — Centre de formation et de conseil en hôtellerie-restauration. L'excellence du service commence ici.</p>
            <span className="label">Lun–Ven 08h–18h · Sam 09h–13h</span>
          </div>
          <div>
            <h4>EHC</h4>
            <ul>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/a-propos#equipe">Équipe</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>
          <div>
            <h4>Formations</h4>
            <ul>
              <li><Link to="/formations">Nos programmes</Link></li>
              <li><Link to="/formations#calendrier">Calendrier</Link></li>
              <li><Link to="/contact">Inscription</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Nous écrire</Link></li>
              <li><a href="tel:+2290140146491">Téléphone</a></li>
              <li><a href="https://wa.me/22945563069">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 EHC Bénin · Élite Hospitality Consulting</span>
          <div className="footer-meta-links">
            <a href="#">Confidentialité</a>
            <a href="#">Mentions légales</a>
            <a href="#">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
