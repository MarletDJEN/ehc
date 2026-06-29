import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Formations() {
  useScrollReveal()
  return (
      <main id="main">
        <section className="hero">
          <div className="container container--wide">
            <div className="hero-grid">
              <div className="hero-text">
                <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Nos formations · Cotonou</span>
                <h1 className="hero-headline">
                  Chaque formation<br/>
                  <span className="lime">construite</span> pour<br/>
                  vous faire grandir.
                </h1>
                <p className="hero-sub">
                  De l'initiation au perfectionnement, chaque programme Élite Hospitality Consulting Bénin est conçu pour transformer des passionnés en professionnels accomplis. Théorie, pratique intensive et stage en entreprise pour une employabilité maximale.
                </p>
                <div className="hero-cta-row">
                  <a className="btn btn--primary btn--lg" href="#programmes">Voir les programmes</a>
                  <a className="btn btn--ghost btn--lg" href="#calendrier">Calendrier des sessions</a>
                </div>
                <div className="hero-meta">
                  <span><strong>7</strong> · programmes disponibles</span>
                  <span aria-hidden="true">·</span>
                  <span><strong>12</strong> · places par session</span>
                  <span aria-hidden="true">·</span>
                  <span><strong>Certification</strong> · à la clé</span>
                </div>
              </div>
              <div className="hero-media">
                <img src="assets/img/hero-archive.jpg" alt="Formation pratique en situation réelle — apprenants Élite Hospitality Consulting Bénin en salle." />
                <div className="floating-tag ft-top">
                  <span className="pill">Formation</span>
                  Élite Hospitality Consulting Bénin · Cotonou
                </div>
                <div className="floating-tag ft-bottom">
                  Théorie + Pratique + Stage
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="programmes" className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Nos formations</span>
                <h2>Sept programmes<br/>pour tous les<br/>niveaux.</h2>
              </div>
              <p className="lede">
                Débutant ou confirmé, chaque programme est adapté à votre niveau et à vos objectifs professionnels. Toutes nos formations sont certifiantes.
              </p>
            </div>

            <div className="filter-row center-row">
              <button className="btn btn--primary btn--sm">Tous · 7</button>
              <button className="btn btn--ghost btn--sm">Service · 1</button>
              <button className="btn btn--ghost btn--sm">Bar · 2</button>
              <button className="btn btn--ghost btn--sm">Hôtellerie · 1</button>
              <button className="btn btn--ghost btn--sm">Direction · 1</button>
              <button className="btn btn--ghost btn--sm">Management · 1</button>
              <button className="btn btn--ghost btn--sm">Accueil · 1</button>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="container container--wide">
            <div className="work-grid reveal-stagger">
              <Link className="work-item work-item--xl reveal" to="/services#formation">
                <div className="wm">
                  <img src="assets/img/work-atrium.jpg" alt="Service en salle dans un restaurant gastronomique." />
                  <span className="wm-pill">Service</span>
                  <span className="wm-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Service en salle</div>
                    <div className="wm-cap">12 semaines · Certification · Stage inclus</div>
                  </div>
                  <div className="wm-cap">Niv. 01</div>
                </div>
              </Link>

              <Link className="work-item work-item--sm reveal" to="/services#formation">
                <div className="wm">
                  <img src="assets/img/work-still-1.jpg" alt="Préparation de cocktails au bar." />
                  <span className="wm-pill">Bar</span>
                  <span className="wm-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Barista & Barman</div>
                    <div className="wm-cap">8 semaines · Débutant à avancé</div>
                  </div>
                  <div className="wm-cap">Niv. 02</div>
                </div>
              </Link>

              <Link className="work-item work-item--md reveal" to="/services#formation">
                <div className="wm">
                  <img src="assets/img/work-arch.jpg" alt="Professionnel du housekeeping." />
                  <span className="wm-pill">Hôtellerie</span>
                  <span className="wm-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Housekeeping</div>
                    <div className="wm-cap">6 semaines · Entretien hôtelier</div>
                  </div>
                  <div className="wm-cap">Niv. 03</div>
                </div>
              </Link>

              <Link className="work-item work-item--md reveal" to="/services#formation">
                <div className="wm">
                  <img src="assets/img/work-food.jpg" alt="Maître d'hôtel supervisant le service." />
                  <span className="wm-pill">Direction</span>
                  <span className="wm-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Maître d'hôtel</div>
                    <div className="wm-cap">10 semaines · Management salle</div>
                  </div>
                  <div className="wm-cap">Niv. 04</div>
                </div>
              </Link>

              <Link className="work-item work-item--sm reveal" to="/services#formation">
                <div className="wm">
                  <img src="assets/img/work-portrait-1.jpg" alt="Superviseur en restauration." />
                  <span className="wm-pill">Management</span>
                  <span className="wm-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Superviseur</div>
                    <div className="wm-cap">8 semaines · Encadrement</div>
                  </div>
                  <div className="wm-cap">Niv. 05</div>
                </div>
              </Link>

              <Link className="work-item work-item--lg reveal" to="/services#formation">
                <div className="wm">
                  <img src="assets/img/work-product.jpg" alt="Formation en accueil client." />
                  <span className="wm-pill">Accueil</span>
                  <span className="wm-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Accueil & Communication</div>
                    <div className="wm-cap">4 semaines · Relation client</div>
                  </div>
                  <div className="wm-cap">Niv. 06</div>
                </div>
              </Link>

              <Link className="work-item work-item--sm reveal" to="/services#formation">
                <div className="wm">
                  <img src="assets/img/work-still-2.jpg" alt="Communication professionnelle en milieu hôtelier." />
                  <span className="wm-pill">Communication</span>
                  <span className="wm-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Communication pro</div>
                    <div className="wm-cap">4 semaines · Gestion client</div>
                  </div>
                  <div className="wm-cap">Niv. 07</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

      <section className="chapter tile-section reveal">
            <div className="chapter-grid">
              <div>
                <span className="label">Parcours type · Niv. 01</span>
                <h2>Service en salle —<br/>12 semaines pour<br/>devenir un pro.</h2>
              </div>
              <div className="chapter-body">
                <p>
                  Le programme Service en salle est notre formation phare. 12 semaines intensives qui transforment un débutant en professionnel du service capable d'évoluer dans tout type d'établissement, du bistrot de quartier au restaurant gastronomique.
                </p>
                <blockquote className="pull-quote">
                  Ce qui fait un bon serveur ? La technique s'apprend. Le sens du service, lui, se transmet.
                  <cite>— Formateur Élite Hospitality Consulting Bénin</cite>
                </blockquote>
                <p>
                  Le programme alterne cours théoriques (art de la table, œnologie, techniques de service), ateliers pratiques (dressage, service à l'assiette, découpage) et 4 semaines de stage immersif dans nos restaurants partenaires. À l'issue de la formation, l'apprenant reçoit une certification et un accompagnement personnalisé vers l'emploi.
                </p>
                <Link className="btn btn--ghost-on-tile btn--lg" to="/services#formation">Voir le détail du programme
                  <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>
        </section>

      <section id="calendrier" className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Calendrier · 2026</span>
                <h2>Prochaines<br/>sessions.</h2>
              </div>
              <p className="lede">
                Les inscriptions sont ouvertes. Chaque session est limitée à 12 participants pour garantir un accompagnement personnalisé.
              </p>
            </div>

            <ul className="split-fact-list" style={{ marginTop: 'var(--space-6)' }}>
              <li><b>Service en salle</b><span>Session juillet · 12 semaines · Cotonou · 6 places restantes</span></li>
              <li><b>Barista & Barman</b><span>Session août · 8 semaines · Cotonou · 8 places restantes</span></li>
              <li><b>Housekeeping</b><span>Session juillet · 6 semaines · Cotonou · 9 places restantes</span></li>
              <li><b>Maître d'hôtel</b><span>Session septembre · 10 semaines · Cotonou · 4 places restantes</span></li>
              <li><b>Superviseur</b><span>Session août · 8 semaines · Cotonou · 7 places restantes</span></li>
              <li><b>Accueil & Communication</b><span>Session juillet · 4 semaines · Cotonou · 10 places restantes</span></li>
              <li><b>Communication pro</b><span>Session septembre · 4 semaines · Cotonou · 11 places restantes</span></li>
            </ul>

            <div className="center-row" style={{ marginTop: 'var(--space-7)', justifyContent: 'center', gap: 'var(--space-3)' }}>
              <button className="btn btn--ghost btn--sm">‹ Juillet</button>
              <span className="mono" style={{ color: 'var(--fg-mute)', padding: '0 var(--space-3)' }}>Sessions 2026</span>
              <button className="btn btn--primary btn--sm">Août ›</button>
            </div>
          </div>
        </section>

      <section id="inscription" className="closing-cta reveal">
        <div className="container container--narrow">
          <span className="label" style={{ color: 'rgba(10,10,12,0.6)' }}>Inscription</span>
            <h2>Prêt à rejoindre<br/>la prochaine<br/>session ?</h2>
            <p className="lede">
              Contactez-nous pour un entretien d'orientation gratuit. Nous vous aiderons à choisir la formation adaptée à votre profil et à vos objectifs.
            </p>
            <div className="cta-row">
              <Link className="btn btn--dark btn--lg" to="/contact">S'inscrire maintenant
                <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link className="btn btn--ghost btn--lg" to="/services">Voir les services</Link>
            </div>
          </div>
        </section>
      </main>
  )
}
