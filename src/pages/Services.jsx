import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Services() {
  useScrollReveal()
  return (
    <main id="main">
      <section className="hero">
        <div className="container container--wide">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Huit pôles · Un centre</span>
              <h1 className="hero-headline">
                Huit services,<br />
                <span className="lime">une mission</span><br />
                vous former.
              </h1>
              <p className="hero-sub">
                De la formation initiale au conseil stratégique, de la vente de matériel à la location événementielle — Élite Hospitality Consulting Bénin couvre l'ensemble des besoins des professionnels de l'hôtellerie et de la restauration au Bénin.
              </p>
              <div className="hero-cta-row">
                <a className="btn btn--primary btn--lg" href="#formation">Formation professionnelle</a>
                <a className="btn btn--ghost btn--lg" href="#accompagnement">Accompagnement</a>
              </div>
              <div className="hero-meta">
                <span><strong>8</strong> · pôles de services</span>
                <span aria-hidden="true">·</span>
                <span><strong>12</strong> · apprenants max par groupe</span>
                <span aria-hidden="true">·</span>
                <span><strong>Suivi</strong> · accompagnement personnalisé</span>
              </div>
            </div>
            <div className="hero-media">
              <img src="/assets/img/services-hero.jpg" alt="Programme de formation Élite Hospitality Consulting Bénin — supports pédagogiques et matériel professionnel." loading="lazy" width="720" height="480" />
              <div className="floating-tag ft-top">
                <span className="pill">Pôle 01</span>
                Formation · Élite Hospitality Consulting Bénin
              </div>
              <div className="floating-tag ft-bottom">
                Théorique + pratique intensive
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formation" className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Pôle 01</span>
              <h2>Formation<br />professionnelle.</h2>
            </div>
            <p className="lede">
              Des programmes complets pour maîtriser chaque métier de l'hôtellerie et de la restauration. Théorie, pratique intensive et stage en entreprise.
            </p>
          </div>

          <div className="tier-grid reveal-stagger">
            <article className="tier-card featured">
              <span className="label">Métiers de la table</span>
              <h3>Service en salle</h3>
              <span className="tier-meta">12 semaines · Débouchés garantis</span>
              <hr className="tier-divider" />
              <p>De l'art de la table au service à l'assiette, en passant par le conseil client et la gestion des allergies. Formation complète aux standards internationaux.</p>
              <ul className="tier-list">
                <li>Techniques de service (à la française, à l'anglaise)</li>
                <li>Art de la table et dressage</li>
                <li>Accord mets et boissons</li>
                <li>Gestion des allergies et régimes spéciaux</li>
                <li>Service du vin et décantage</li>
                <li>Stage en restaurant partenaire (4 semaines)</li>
              </ul>
              <Link className="btn btn--dark" to="/contact">S'inscrire</Link>
            </article>

            <article className="tier-card">
              <span className="label">Bar</span>
              <h3>Barista &amp; Barman</h3>
              <span className="tier-meta">8 semaines · Niveau débutant à avancé</span>
              <hr className="tier-divider" />
              <p>Maîtrisez l'art du café et du cocktail. De l'espresso parfait au cocktail signature, une formation complète pour exceller derrière le bar.</p>
              <ul className="tier-list">
                <li>Barista : torréfaction, extraction, latte art</li>
                <li>Barman : cocktails classiques et création</li>
                <li>Gestion des stocks et des commandes</li>
                <li>Hygiène et sécurité au bar</li>
                <li>Service et relation client au comptoir</li>
                <li>Stage en bar/restaurant (2 semaines)</li>
              </ul>
              <Link className="btn btn--ghost" to="/contact">S'inscrire</Link>
            </article>

            <article className="tier-card">
              <span className="label">Hôtellerie</span>
              <h3>Housekeeping</h3>
              <span className="tier-meta">6 semaines · Certification incluse</span>
              <hr className="tier-divider" />
              <p>Formation complète aux métiers de l'entretien et de la gestion des chambres et espaces hôteliers. Standards de propreté internationaux.</p>
              <ul className="tier-list">
                <li>Techniques de nettoyage professionnel</li>
                <li>Gestion du linge et de la lingerie</li>
                <li>Préparation et inspection des chambres</li>
                <li>Produits et matériels d'entretien</li>
                <li>Organisation et planning du travail</li>
                <li>Stage en hôtel partenaire (2 semaines)</li>
              </ul>
              <Link className="btn btn--ghost" to="/contact">S'inscrire</Link>
            </article>
          </div>

          <div className="tier-grid reveal-stagger" style={{ marginTop: 'var(--space-5)' }}>
            <article className="tier-card">
              <span className="label">Direction</span>
              <h3>Maître d'hôtel</h3>
              <span className="tier-meta">10 semaines · Management</span>
              <hr className="tier-divider" />
              <p>Formation à la gestion et à la coordination du service en salle. Supervision des équipes, relation client haut de gamme, gestion des événements.</p>
              <ul className="tier-list">
                <li>Supervision et coordination du service</li>
                <li>Gestion des réservations et du plan de salle</li>
                <li>Relation client VIP et gestion des réclamations</li>
                <li>Organisation de réceptions et banquets</li>
                <li>Management d'équipe en salle</li>
                <li>Stage en établissement haut de gamme</li>
              </ul>
              <Link className="btn btn--ghost" to="/contact">S'inscrire</Link>
            </article>

            <article className="tier-card">
              <span className="label">Supervision</span>
              <h3>Superviseur</h3>
              <span className="tier-meta">8 semaines · Encadrement</span>
              <hr className="tier-divider" />
              <p>Formation aux fonctions d'encadrement et de supervision dans l'hôtellerie-restauration. Management d'équipe, contrôle qualité, reporting.</p>
              <ul className="tier-list">
                <li>Management et leadership d'équipe</li>
                <li>Contrôle qualité et standards de service</li>
                <li>Gestion des plannings et des effectifs</li>
                <li>Reporting et indicateurs de performance</li>
                <li>Communication interne et gestion de conflits</li>
                <li>Stage pratique en entreprise</li>
              </ul>
              <Link className="btn btn--ghost" to="/contact">S'inscrire</Link>
            </article>

            <article className="tier-card">
              <span className="label">Relation client</span>
              <h3>Accueil &amp; Communication</h3>
              <span className="tier-meta">4 semaines · Fondamentaux</span>
              <hr className="tier-divider" />
              <p>Les bases de l'accueil client et de la communication professionnelle. Première impression, gestion des appels, réclamations et satisfaction client.</p>
              <ul className="tier-list">
                <li>Techniques d'accueil physique et téléphonique</li>
                <li>Communication professionnelle écrite et orale</li>
                <li>Gestion des réclamations et des situations difficiles</li>
                <li>Image de marque et tenue professionnelle</li>
                <li>Outils de fidélisation client</li>
                <li>Mise en situation et jeux de rôle</li>
              </ul>
              <Link className="btn btn--ghost" to="/contact">S'inscrire</Link>
            </article>
          </div>
        </div>
      </section>

      <section id="accompagnement" className="tile-section reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow eyebrow--on-tile"><span className="dot" aria-hidden="true"></span>Pôle 02</span>
              <h2>Accompagnement<br />pédagogique.</h2>
            </div>
            <p className="lede">
              Un suivi complet de l'apprenant, de l'inscription à la certification. Parcours personnalisé, évaluation continue et accompagnement vers l'emploi.
            </p>
          </div>

          <div className="process-grid reveal-stagger">
            <article className="process-card">
              <h3>Inscription &amp; Orientation</h3>
              <p>Test de niveau et entretien individuel pour orienter chaque apprenant vers la formation adaptée à son profil et ses objectifs.</p>
            </article>
            <article className="process-card">
              <h3>Planification</h3>
              <p>Programme sur mesure établi en fonction du niveau initial, des objectifs professionnels et des disponibilités de l'apprenant.</p>
            </article>
            <article className="process-card">
              <h3>Suivi administratif</h3>
              <p>Gestion complète des dossiers, des présences, des évaluations et de la communication avec les apprenants et les familles.</p>
            </article>
            <article className="process-card">
              <h3>Formation théorique</h3>
              <p>Cours en salle animés par des formateurs experts, supports pédagogiques numériques et imprimés, études de cas réels.</p>
            </article>
            <article className="process-card">
              <h3>Pratique intensive</h3>
              <p>Ateliers pratiques, mises en situation professionnelle, exercices en conditions réelles dans notre centre équipé.</p>
            </article>
            <article className="process-card">
              <h3>Stage en entreprise</h3>
              <p>Immersion professionnelle dans nos entreprises partenaires, encadrée par un tuteur et suivie par l'équipe pédagogique.</p>
            </article>
            <article className="process-card">
              <h3>Perfectionnement</h3>
              <p>Sessions de perfectionnement pour les professionnels en activité souhaitant monter en compétences ou se spécialiser.</p>
            </article>
            <article className="process-card">
              <h3>Évaluation &amp; Certification</h3>
              <p>Évaluation continue tout au long du parcours, examen final théorique et pratique, délivrance d'une certification reconnue.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="entreprise" className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Pôle 03</span>
              <h2>Formation &amp;<br />accompagnement<br />des entreprises.</h2>
            </div>
            <p className="lede">
              Des solutions sur mesure pour les établissements hôteliers et de restauration qui souhaitent élever le niveau de leur service.
            </p>
          </div>

          <div className="cap-bento reveal-stagger">
            <article className="cap-card cap-card--std">
              <span className="cap-num">Sur site</span>
              <h3>Formation en entreprise.</h3>
              <p>Nos formateurs se déplacent dans votre établissement pour former votre personnel à vos standards et à vos besoins spécifiques.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">Terrain</span>
              <h3>Accompagnement terrain.</h3>
              <p>Un consultant Élite Hospitality Consulting Bénin intervient directement dans vos services pour coacher vos équipes en situation réelle.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">Qualité</span>
              <h3>Standards qualité.</h3>
              <p>Mise en place de procédures standardisées, de fiches techniques et de contrôles qualité adaptés à votre établissement.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">Performance</span>
              <h3>Optimisation.</h3>
              <p>Analyse des processus, identification des axes d'amélioration et déploiement de solutions pour optimiser vos performances.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">Encadrement</span>
              <h3>Coaching d'équipes.</h3>
              <p>Programme de développement des compétences managériales pour vos superviseurs et chefs de service.</p>
            </article>

            <article className="cap-card cap-card--std">
              <span className="cap-num">Suivi</span>
              <h3>Audit de suivi.</h3>
              <p>Évaluation régulière des progrès, rapports d'étape et recommandations pour une amélioration continue.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="tile-section reveal" id="conseil">
        <div className="container container--narrow">
          <div className="section-head">
            <div>
              <span className="eyebrow eyebrow--on-tile"><span className="dot" aria-hidden="true"></span>Pôle 04</span>
              <h2>Conseil &amp;<br />Consulting.</h2>
            </div>
            <p className="lede">
              Une expertise pointue pour les établissements qui cherchent à améliorer leur qualité de service, leur organisation et leur compétitivité.
            </p>
          </div>

          <div className="faq-grid reveal-stagger">
            <div className="faq-card">
              <h3>Audit de qualité de service</h3>
              <p>Évaluation complète de votre établissement : accueil, service, propreté, organisation. Rapport détaillé avec plan d'action priorisé.</p>
            </div>
            <div className="faq-card">
              <h3>Conseil en hôtellerie-restauration</h3>
              <p>Accompagnement stratégique pour l'ouverture, la rénovation ou le repositionnement de votre établissement. Étude de marché, concept, business plan.</p>
            </div>
            <div className="faq-card">
              <h3>Accompagnement stratégique</h3>
              <p>Définition de votre stratégie de développement, optimisation de votre offre, conseil en marketing et communication hôtelière.</p>
            </div>
            <div className="faq-card">
              <h3>Amélioration de l'expérience client</h3>
              <p>Analyse du parcours client, identification des points de friction, déploiement de solutions pour une expérience mémorable.</p>
            </div>
            <div className="faq-card">
              <h3>Suivi et amélioration continue</h3>
              <p>Mise en place d'indicateurs de performance, tableaux de bord, enquêtes de satisfaction et plans d'action correctifs.</p>
            </div>
            <div className="faq-card">
              <h3>Développement des compétences</h3>
              <p>Diagnostic des compétences de vos équipes, plan de formation individualisé, accompagnement au changement.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="equipement" className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Pôles 05 &amp; 06</span>
              <h2>Vente &amp;<br />Location de<br />matériel.</h2>
            </div>
            <p className="lede">
              Tout l'équipement professionnel pour votre établissement ou votre événement. Vaisselle, matériel de bar, mobilier événementiel. Livraison et installation incluses.
            </p>
          </div>

          <div className="channel-grid reveal-stagger">
            <article className="channel-card">
              <span className="label">Vente</span>
              <h3>Matériel de réception.</h3>
              <p>Vaisselle, verres, couverts, glacières, matériel de bar, matériel de service. Qualité professionnelle pour établissements exigeants.</p>
              <Link className="channel-line" to="/contact">Demander un catalogue →</Link>
            </article>
            <article className="channel-card">
              <span className="label">Location</span>
              <h3>Matériel événementiel.</h3>
              <p>Tables, chaises, nappes, décorations, vaisselle complète, plats chauffants, bains-marie, matériel de buffet pour tous types d'événements.</p>
              <Link className="channel-line" to="/contact">Demander un devis →</Link>
            </article>
            <article className="channel-card">
              <span className="label">Services</span>
              <h3>Livraison &amp; installation.</h3>
              <p>Livraison sur site, installation complète du matériel, récupération après l'événement. Conseils personnalisés pour vos événements.</p>
              <Link className="channel-line" to="/contact">Nous contacter</Link>
            </article>
          </div>
        </div>
      </section>

      <section id="personnel" className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Pôle 08</span>
              <h2>Mise à disposition<br />de personnel<br />qualifié.</h2>
            </div>
            <p className="lede">
              Vous organisez un mariage, un séminaire, un cocktail ou une réception ? Nous mettons à votre disposition des professionnels formés à nos standards d'excellence.
            </p>
          </div>

          <div className="channel-grid reveal-stagger">
            <article className="channel-card">
              <span className="label">Service en salle</span>
              <h3>Serveurs &amp; Chefs de rang.</h3>
              <p>Personnel de salle qualifié pour le service à l'assiette, le service au buffet, le vin et le décantage. Adapté à tout type d'établissement et de réception.</p>
            </article>
            <article className="channel-card">
              <span className="label">Bar</span>
              <h3>Barmans &amp; Baristas.</h3>
              <p>Professionnels du bar pour vos cocktails et votre café. Création de carte, service au comptoir et en salle, gestion du bar pendant l'événement.</p>
            </article>
            <article className="channel-card">
              <span className="label">Encadrement</span>
              <h3>Maîtres d'hôtel &amp; Superviseurs.</h3>
              <p>Coordination du service, gestion des équipes, relation client haut de gamme. Pour les réceptions qui exigent une parfaite maîtrise du protocole.</p>
            </article>
          </div>

          <div className="center-row" style={{ marginTop: 'var(--space-7)', justifyContent: 'center' }}>
            <Link className="btn btn--primary btn--lg" to="/contact">
              Demander du personnel pour mon événement
              <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="closing-cta reveal">
        <div className="container container--narrow">
          <span className="label" style={{ color: 'rgba(10,10,12,0.6)' }}>Pôle 07</span>
          <h2>De la formation<br />à l'emploi.</h2>
          <p className="lede">
            Notre mission ne s'arrête pas à la certification. Nous accompagnons chaque apprenant vers l'insertion professionnelle grâce à notre réseau de partenaires et à un suivi personnalisé post-formation.
          </p>
          <div className="cta-row">
            <Link className="btn btn--dark btn--lg" to="/contact">
              Rejoindre Élite Hospitality Consulting Bénin
              <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link className="btn btn--ghost btn--lg" to="/formations">Voir les formations</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
