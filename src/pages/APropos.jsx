import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

export default function APropos() {
  useScrollReveal()
  return (
    <main id="main">

      <section className="hero">
        <div className="container container--wide">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Nouveau centre · Cotonou</span>
              <h1 className="hero-headline">
                Une équipe,<br/>
                une mission,<br/>
                <span className="lime">une exigence</span>.
              </h1>
              <p className="hero-sub">
                Élite Hospitality Consulting Bénin est un centre de formation et de conseil dédié aux métiers de l'hôtellerie, de la restauration et de l'accueil. Notre mission : former des professionnels compétents, passionnés et prêts à exceller.
              </p>
              <div className="hero-cta-row">
                <a className="btn btn--primary btn--lg" href="#equipe">Notre équipe</a>
                <Link className="btn btn--ghost btn--lg" to="/contact">Nous contacter</Link>
              </div>
              <div className="hero-meta">
                <span><strong>Formation</strong> · professionnelle certifiante</span>
                <span aria-hidden="true">·</span>
                <span><strong>Pédagogie</strong> · théorie + pratique intensive</span>
                <span aria-hidden="true">·</span>
                <span><strong>Insertion</strong> · accompagnement vers l'emploi</span>
              </div>
            </div>
            <div className="hero-media">
              <img src="assets/img/studio-hero.jpg" alt="Centre de formation Élite Hospitality Consulting Bénin à Cotonou — salle de cours équipée." />
              <div className="floating-tag ft-top">
                <span className="pill">Centre</span>
                COTONOU · BÉNIN
              </div>
              <div className="floating-tag ft-bottom">
                Formation · Conseil · Équipement
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter reveal">
        <div className="container container--narrow">
          <div className="chapter-grid">
            <div>
              <span className="label">Notre vision</span>
              <h2>Une mission<br/>simple : former<br/>autrement.</h2>
            </div>
            <div className="chapter-body">
              <p>
                Élite Hospitality Consulting Bénin est né d'un constat simple : le Bénin regorge de talents passionnés par les métiers de l'hôtellerie et de la restauration, mais les formations disponibles ne préparent pas assez aux réalités du terrain. C'est pourquoi nous avons créé un centre qui allie exigence pédagogique et immersion professionnelle, avec une approche résolument tournée vers la pratique.
              </p>
              <blockquote className="pull-quote">
                Nous voulons créer l'école que nous aurions aimé avoir.
                <cite>— Fondateur Élite Hospitality Consulting Bénin</cite>
              </blockquote>
              <p>
                Notre approche — 80% de pratique, des formateurs issus du terrain, un suivi personnalisé — est pensée pour maximiser l'employabilité de chaque apprenant. Nous construisons patiemment notre réseau de partenaires pour offrir les meilleures opportunités de stage et d'insertion professionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="compact">
        <div className="container container--wide">
          <div className="awards-strip">
            <div className="award-cell">
              <div className="award-num">80%</div>
              <div className="award-label">Pratique intensive</div>
            </div>
            <div className="award-cell">
              <div className="award-num">12</div>
              <div className="award-label">Places max par groupe</div>
            </div>
            <div className="award-cell">
              <div className="award-num">100%</div>
              <div className="award-label">Accompagnement personnalisé</div>
            </div>
            <div className="award-cell">
              <div className="award-num">24h</div>
              <div className="award-label">Délai de réponse</div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Nos valeurs</span>
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

      <section id="equipe" className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>L'équipe</span>
              <h2>Des professionnels<br/>passionnés par<br/>la transmission.</h2>
            </div>
            <p className="lede">
              Nos formateurs sont des professionnels en activité, passionnés par la transmission de leur savoir-faire.
            </p>
          </div>

          <div className="team-grid reveal-stagger">
            <div className="team-card">
              <div className="t-role">Fondateur · Directeur pédagogique</div>
            </div>
            <div className="team-card">
              <div className="t-role">Responsable formation · Service en salle</div>
            </div>
            <div className="team-card">
              <div className="t-role">Formateur barista & barman</div>
            </div>
            <div className="team-card">
              <div className="t-role">Formatrice housekeeping</div>
            </div>
            <div className="team-card">
              <div className="t-role">Formateur accueil & communication</div>
            </div>
            <div className="team-card">
              <div className="t-role">Consultante · Audit qualité</div>
            </div>
            <div className="team-card">
              <div className="t-role">Coordinateur pédagogique</div>
            </div>
            <div className="team-card">
              <div className="t-role">Assistante administrative</div>
            </div>
          </div>
        </div>
      </section>

      <section className="snug">
        <div className="container container--wide">
          <div className="split">
            <div className="split-text">
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Notre centre</span>
              <h2>Des locaux<br/>conçus pour la<br/>formation pratique.</h2>
              <p>
                Notre centre de formation est situé à Cotonou, dans un espace entièrement équipé pour la formation pratique : salle de restaurant pédagogique, bar-école, cuisine d'application, chambre témoin pour le housekeeping. Chaque espace reproduit les conditions réelles d'exercice du métier.
              </p>
              <ul className="split-fact-list">
                <li><b>Adresse</b><span>Cotonou, Bénin (centre-ville)</span></li>
                <li><b>Horaires</b><span>Lun–Ven 08h–18h · Sam 09h–13h</span></li>
                <li><b>Capacité</b><span>Jusqu'à 12 apprenants par session</span></li>
                <li><b>Équipement</b><span>Salle de restaurant · Bar · Cuisine · Chambre témoin</span></li>
                <li><b>Parking</b><span>Parking gratuit pour les apprenants</span></li>
              </ul>
              <Link className="btn btn--ghost" to="/contact">Nous rendre visite
                <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
            <div className="split-img">
              <img src="assets/img/studio-brooklyn.jpg" alt="Salle de restaurant pédagogique du centre Élite Hospitality Consulting Bénin." />
              <span className="ft-corner">Cotonou · Bénin</span>
            </div>
          </div>
        </div>
      </section>

      <section className="snug reveal">
        <div className="container container--wide">
          <div className="split split--reverse">
            <div className="split-text">
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Engagement</span>
              <h2>Un suivi jusqu'à<br/>l'emploi.</h2>
              <p>
                Notre engagement ne s'arrête pas à la remise du certificat. Chaque apprenant bénéficie d'un accompagnement post-formation, avec accès à notre réseau de partenaires, des ateliers CV et préparation aux entretiens, et un suivi individuel par notre coordinateur pédagogique.
              </p>
              <ul className="split-fact-list">
                <li><b>Suivi</b><span>Accompagnement post-formation personnalisé</span></li>
                <li><b>Réseau</b><span>Partenariats avec des établissements qui recrutent</span></li>
                <li><b>Ateliers</b><span>CV, lettre de motivation, entretien</span></li>
                <li><b>Objectif</b><span>Insertion professionnelle durable</span></li>
                <li><b>Résultat</b><span>Employabilité maximisée</span></li>
              </ul>
              <Link className="btn btn--ghost" to="/contact">Rejoindre Élite Hospitality Consulting Bénin
                <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
            <div className="split-img">
              <img src="assets/img/studio-berlin.jpg" alt="Salle de formation Élite Hospitality Consulting Bénin — apprentissage pratique." />
              <span className="ft-corner">Élite Hospitality Consulting Bénin · Cotonou</span>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-cta reveal">
        <div className="container container--narrow">
          <h2>Envie de nous<br/>rejoindre ou de<br/>nous recruter ?</h2>
          <p className="lede">
            Nous cherchons des formateurs passionnés et des entreprises partenaires. Rejoignez l'aventure Élite Hospitality Consulting Bénin et contribuons ensemble à l'excellence du service au Bénin.
          </p>
          <div className="cta-row">
            <Link className="btn btn--dark btn--lg" to="/contact">Nous contacter
              <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link className="btn btn--ghost btn--lg" to="/formations">Voir les formations</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
