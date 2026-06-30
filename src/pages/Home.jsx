import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  useEffect(() => { document.querySelector('.hero')?.classList.add('hero--ready') }, [])

  return (
    <main id="main">

      <section className="hero hero--reveal">
        <div className="container container--wide">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Centre de formation · Cotonou</span>
              <h1 className="hero-headline">
                L'excellence du<br/>
                service <span className="lime">commence</span><br/>
                ici.
              </h1>
              <p className="hero-sub">
                Élite Hospitality Consulting Bénin forme les talents de l'hôtellerie, de la restauration et de l'accueil. Théorie, pratique intensive et accompagnement vers l'emploi.
              </p>
              <div className="hero-cta-row">
                <Link className="btn btn--primary btn--lg" to="/formations">Découvrir nos formations
                  <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link className="btn btn--ghost btn--lg" to="/a-propos">Qui sommes-nous ?</Link>
              </div>
              <div className="hero-meta">
                <span><strong>7</strong> · programmes certifiants</span>
                <span aria-hidden="true">·</span>
                <span><strong>80%</strong> · pratique intensive</span>
                <span aria-hidden="true">·</span>
                <span><strong>12</strong> · places par session</span>
              </div>
            </div>
            <div className="hero-media">
              <img className="hero-logo" src="/assets/img/logo.jpeg" alt="Élite Hospitality Consulting Bénin" />
            </div>
          </div>
        </div>
      </section>

      <section className="compact">
        <div className="container container--wide">
          <div className="awards-strip">
            <div className="award-cell">
              <div className="award-num">7</div>
              <div className="award-label">Programmes de formation</div>
            </div>
            <div className="award-cell">
              <div className="award-num">80%</div>
              <div className="award-label">Pratique intensive</div>
            </div>
            <div className="award-cell">
              <div className="award-num">12</div>
              <div className="award-label">Places max par groupe</div>
            </div>
            <div className="award-cell">
              <div className="award-num">—</div>
              <div className="award-label">Réponse immédiate</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Notre offre</span>
              <h2>Des services pensés<br/>pour les<br/>professionnels.</h2>
            </div>
            <p className="lede">
              De la formation initiale au conseil stratégique, de la vente de matériel à la location événementielle — Élite Hospitality Consulting Bénin couvre l'ensemble des besoins des métiers de l'hôtellerie et de la restauration au Bénin.
            </p>
          </div>

          <div className="channel-grid reveal-stagger">
            <article className="channel-card">
              <span className="label">Formation</span>
              <h3>Programmes professionnels.</h3>
              <p>Service en salle, barista, barman, housekeeping, maître d'hôtel, superviseur, accueil client — 7 formations certifiantes avec stage inclus.</p>
              <Link className="channel-line" to="/formations">Voir les programmes →</Link>
            </article>
            <article className="channel-card">
              <span className="label">Conseil</span>
              <h3>Consulting &amp; Audit.</h3>
              <p>Audit qualité, conseil en hôtellerie-restauration, accompagnement stratégique, optimisation des performances et amélioration de l'expérience client.</p>
              <Link className="channel-line" to="/services#conseil">Découvrir le consulting →</Link>
            </article>
            <article className="channel-card">
              <span className="label">Équipement</span>
              <h3>Vente &amp; Location.</h3>
              <p>Vaisselle, matériel de bar, mobilier événementiel, tables, chaises, nappes, décoration. Livraison et installation sur site incluses.</p>
              <Link className="channel-line" to="/services#equipement">Voir le matériel →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="chapter tile-section">
        <div className="container container--narrow">
          <div className="chapter-grid">
            <div>
              <span className="label">Notre vision</span>
              <h2>80% de pratique,<br/>100%<br/>d'engagement.</h2>
            </div>
            <div className="chapter-body">
              <p>
                Élite Hospitality Consulting Bénin est né d'un constat simple : le Bénin regorge de talents passionnés par les métiers de l'hôtellerie et de la restauration, mais les formations disponibles ne préparent pas assez aux réalités du terrain. C'est pourquoi nous avons créé un centre qui allie exigence pédagogique et immersion professionnelle.
              </p>
              <blockquote className="pull-quote">
                Nous voulons créer l'école que nous aurions aimé avoir.
                <cite>— Fondateur Élite Hospitality Consulting Bénin</cite>
              </blockquote>
              <p>
                Notre approche — 80% de pratique, des formateurs issus du terrain, un suivi personnalisé — est pensée pour maximiser l'employabilité de chaque apprenant. Nous construisons patiemment notre réseau de partenaires pour offrir les meilleures opportunités de stage et d'insertion professionnelle.
              </p>
              <Link className="btn btn--ghost-on-tile btn--lg" to="/a-propos">En savoir plus sur notre mission
                <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Valeurs</span>
              <h2>Six principes<br/>qui nous guident.</h2>
            </div>
            <p className="lede">
              Ce ne sont pas des slogans — ce sont les engagements que nous prenons chaque jour avec nos apprenants, nos partenaires et nos équipes.
            </p>
          </div>

          <div className="cap-bento reveal-stagger">
            <article className="cap-card cap-card--std">
              <span className="cap-num">01</span>
              <h3>Excellence.</h3>
              <p>Nous visons le plus haut niveau de qualité dans chaque formation, chaque conseil, chaque service. L'excellence est notre seule exigence.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">02</span>
              <h3>Pratique avant tout.</h3>
              <p>80% de pratique intensive, des mises en situation réelles, des stages en entreprise. On apprend en faisant.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">03</span>
              <h3>Accompagnement.</h3>
              <p>Chaque apprenant est suivi individuellement, de l'orientation à l'insertion professionnelle. Personne n'est laissé de côté.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">04</span>
              <h3>Professionnalisme.</h3>
              <p>Nos formateurs sont des professionnels en activité. Ils transmettent une expérience concrète, pas une théorie déconnectée.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">05</span>
              <h3>Innovation pédagogique.</h3>
              <p>Nous adaptons continuellement nos méthodes aux évolutions du secteur et aux besoins spécifiques de chaque promotion.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">06</span>
              <h3>Impact local.</h3>
              <p>Notre mission est de contribuer au développement du secteur hôtelier béninois en formant des talents locaux aux standards internationaux.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="snug">
        <div className="container container--wide">
          <div className="split">
            <div className="split-text">
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Insertion professionnelle</span>
              <h2>Un suivi jusqu'à<br/>l'emploi.</h2>
              <p>
                Notre engagement ne s'arrête pas à la remise du certificat. Chaque apprenant bénéficie d'un accompagnement post-formation, avec accès à notre réseau de partenaires, des ateliers CV et préparation aux entretiens, et un suivi individuel par notre coordinateur pédagogique.
              </p>
              <ul className="split-fact-list">
                <li><b>Suivi</b><span>Accompagnement post-formation personnalisé</span></li>
                <li><b>Réseau</b><span>Partenariats avec des établissements qui recrutent</span></li>
                <li><b>Ateliers</b><span>CV, lettre de motivation, entretien</span></li>
                <li><b>Objectif</b><span>Insertion professionnelle durable</span></li>
              </ul>
              <Link className="btn btn--ghost" to="/formations">Voir les formations
                <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container container--narrow">
          <span className="label" style={{ color: 'rgba(10,10,12,0.6)' }}>Contact</span>
          <h2>Prêt à nous<br/>rejoindre ?</h2>
          <p className="lede">
            Contactez-nous pour un entretien d'orientation gratuit. Nous vous aiderons à choisir la formation adaptée à votre profil et à vos objectifs professionnels.
          </p>
          <div className="cta-row">
            <Link className="btn btn--dark btn--lg" to="/contact">Nous contacter
              <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link className="btn btn--ghost btn--lg" to="/services">Voir tous les services</Link>
          </div>
        </div>
      </section>

    </main>
  )
}