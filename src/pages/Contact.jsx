import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  useScrollReveal()
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.nom.value,
      email: form.email.value,
      sujet: form.sujet.value,
      tel: form.tel.value,
      message: form.message.value,
    }

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()

      setFormData(data)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function closeModal() {
    setStatus('idle')
    setFormData(null)
  }

  return (
    <>
      <main id="main">

        <section className="hero">
          <div className="container container--wide">
            <div className="hero-grid">
              <div className="hero-text">
                <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Réponse immédiate</span>
                <h1 className="hero-headline">
                  Envoyez un<br />
                  <span className="lime">message,</span> recevez<br />
                  une vraie réponse.
                </h1>
                <p className="hero-sub">
                  Pas de chatbot, pas de formulaire sans réponse. Chaque message est lu et traité par un membre de notre équipe. Nous nous engageons à vous répondre immédiatement.
                </p>
                <div className="hero-cta-row">
                  <a className="btn btn--primary btn--lg" href="#formulaire">Envoyer un message</a>
                  <a className="btn btn--ghost btn--lg" href="#canaux">Autres moyens de nous joindre</a>
                </div>
                <div className="hero-meta">
                  <span><strong>Immédiat</strong> · réponse instantanée</span>
                  <span aria-hidden="true">·</span>
                  <span><strong>3</strong> · canaux de contact</span>
                  <span aria-hidden="true">·</span>
                  <span><strong>Certification</strong> · à la clé</span>
                </div>
              </div>
              <div className="hero-media">
                <img src="/assets/img/contact-hero.jpg" alt="Bureau Élite Hospitality Consulting Bénin — un espace de travail dédié à l'accueil des apprenants." />
                <div className="floating-tag ft-top">
                  <span className="pill">Contact</span>
                  Élite Hospitality Consulting Bénin · COTONOU
                </div>
                <div className="floating-tag ft-bottom">
                  info @ elitehospitality.consulting
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="canaux" className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Trois canaux</span>
                <h2>Choisissez le<br />bon moyen de<br />nous joindre.</h2>
              </div>
              <p className="lede">
                Inscription, information, devis, location — chaque demande trouve le bon interlocuteur. Nous gardons ces canaux séparés pour garantir une réponse rapide et personnalisée.
              </p>
            </div>

            <div className="channel-grid reveal-stagger">
              <article className="channel-card">
                <span className="label">01 / Inscriptions &amp; Formations</span>
                <h3>Pour les apprenants.</h3>
                <p>Inscription aux formations, information sur les programmes, orientation, calendrier des sessions. L'équipe pédagogique vous répond personnellement.</p>
                <a className="channel-line" href="mailto:info@elitehospitality.consulting">info @ elitehospitality.consulting</a>
                <span className="mono" style={{ color: 'var(--fg-mute)' }}>Équipe pédagogique · Réponse immédiate</span>
              </article>

              <article className="channel-card" id="telephone">
                <span className="label label--lime">02 / Téléphone &amp; WhatsApp</span>
                <h3>Pour une réponse rapide.</h3>
                <p>Notre équipe est disponible par téléphone et WhatsApp pour toute question urgente, information rapide ou demande de rappel.</p>
                <a className="channel-line" href="tel:+2290140146491">+229 01 40 14 64 91</a>
                <a className="channel-line" href="https://wa.me/22945563069">WhatsApp : +229 45 56 30 69</a>
                <span className="mono" style={{ color: 'var(--fg-mute)' }}>Lun–Ven 08h–18h · Sam 09h–13h</span>
              </article>

              <article className="channel-card" id="entreprise">
                <span className="label">03 / Entreprises &amp; Partenariats</span>
                <h3>Pour les professionnels.</h3>
                <p>Demande de devis formation entreprise, audit qualité, conseil, mise à disposition de personnel, location de matériel événementiel, vente d'équipement.</p>
                <a className="channel-line" href="mailto:info@elitehospitality.consulting">info @ elitehospitality.consulting</a>
                <span className="mono" style={{ color: 'var(--fg-mute)' }}>Service commercial · Devis immédiat</span>
              </article>
            </div>
          </div>
        </section>

      <section id="formulaire" className="reveal">
        <div className="container container--narrow">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Formulaire de contact</span>
                <h2>Racontez-nous<br />votre projet.</h2>
              </div>
              <p className="lede">
                Un paragraphe suffit. Nous lisons chaque message personnellement et vous répondons immédiatement. Pas de formulaire sans réponse.
              </p>
            </div>

            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="f-name">Votre nom</label>
                  <input id="f-name" name="nom" type="text" required placeholder="Jean Dupont" />
                </div>
                <div className="form-field">
                  <label htmlFor="f-sujet">Sujet</label>
                  <select id="f-sujet" name="sujet" defaultValue="Inscription à une formation">
                    <option>Inscription à une formation</option>
                    <option>Information sur les programmes</option>
                    <option>Formation en entreprise</option>
                    <option>Demande de conseil / audit</option>
                    <option>Achat de matériel</option>
                    <option>Personnel pour événement</option>
                    <option>Location de matériel événementiel</option>
                    <option>Partenariat</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="f-email">Email</label>
                  <input id="f-email" name="email" type="email" required placeholder="jean@exemple.com" />
                </div>
                <div className="form-field">
                  <label htmlFor="f-tel">Téléphone</label>
                  <input id="f-tel" name="tel" type="tel" placeholder="+229 01 XX XX XX XX" />
                </div>
              </div>

              <div className="form-row form-row--full">
                <div className="form-field">
                  <label htmlFor="f-message">Votre message</label>
                  <textarea id="f-message" name="message" required
                    placeholder="Bonjour, je souhaiterais des informations sur la formation Service en salle. Je suis intéressé par la session de juillet. Pouvez-vous m'envoyer le programme détaillé et les modalités d'inscription ?" />
                </div>
              </div>

              <div className="form-actions">
                <small>En soumettant, vous acceptez que nous vous répondions à l'adresse indiquée. Aucun partage avec des tiers.</small>
                <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                  <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
              {status === 'error' && (
                <p style={{ color: 'var(--lime)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', textAlign: 'center' }}>Erreur — veuillez réessayer. Si le problème persiste, écrivez-nous à info@elitehospitality.consulting</p>
              )}
            </form>
          </div>
        </section>

      <section className="snug tile-section reveal">
        <div className="container container--wide">
          <div className="split">
            <div className="split-text">
              <span className="eyebrow eyebrow--on-tile"><span className="dot" aria-hidden="true"></span>Nos coordonnées</span>
                <h2>Passer nous voir<br />ou nous écrire.</h2>
                <p>
                  Notre centre est ouvert du lundi au samedi. Les visites sont possibles sur rendez-vous — contactez-nous pour convenir d'un créneau.
                </p>
                <ul className="split-fact-list">
                  <li><b>Adresse</b><span>Cotonou, Bénin (centre-ville)</span></li>
                  <li><b>Téléphone</b><span>+229 01 40 14 64 91</span></li>
                  <li><b>WhatsApp</b><span>+229 45 56 30 69</span></li>
                  <li><b>Email</b><span>info@elitehospitality.consulting</span></li>
                  <li><b>Horaires</b><span>Lun–Ven 08h–18h · Sam 09h–13h</span></li>
                  <li><b>Fermé</b><span>Jours fériés · Déc 25 – Jan 01</span></li>
                </ul>
                <a className="btn btn--ghost-on-tile btn--lg" href="#formulaire">Envoyer un message
                  <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
              <div className="split-img">
                <img src="/assets/img/contact-room.jpg" alt="Centre Élite Hospitality Consulting Bénin à Cotonou — espace d'accueil et d'information." />
                <span className="ft-corner">Cotonou · Bénin</span>
              </div>
            </div>
          </div>
        </section>

      <section className="reveal">
        <div className="container container--wide">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true"></span>Questions fréquentes</span>
                <h2>Les questions<br />que l'on nous<br />pose le plus.</h2>
              </div>
              <p className="lede">
                Ces questions reviennent sur presque chaque appel. Si la vôtre n'est pas dans la liste, écrivez-nous — la réponse est immédiate.
              </p>
            </div>

            <div className="faq-grid reveal-stagger">
              <div className="faq-card">
                <h3>Quels sont les prérequis pour s'inscrire ?</h3>
                <p>Nos formations sont accessibles à partir du niveau BAC. Certains programmes acceptent les niveaux inférieurs sur entretien de motivation. Aucune expérience préalable n'est requise pour les formations débutantes.</p>
              </div>
              <div className="faq-card">
                <h3>Comment se déroule l'inscription ?</h3>
                <p>Contactez-nous par email, téléphone ou WhatsApp. Nous vous proposons un entretien d'orientation gratuit pour déterminer la formation adaptée à votre profil et vos objectifs.</p>
              </div>
              <div className="faq-card">
                <h3>Proposez-vous des formations en soirée ?</h3>
                <p>Oui, nous proposons des sessions en soirée (18h–20h) pour les professionnels en activité. Les horaires sont adaptés selon la demande.</p>
              </div>
              <div className="faq-card">
                <h3>Les formations sont-elles certifiantes ?</h3>
                <p>Oui, chaque formation délivre une certification attestant des compétences acquises. Les certifications sont reconnues par nos entreprises partenaires.</p>
              </div>
              <div className="faq-card">
                <h3>Puis-je financer ma formation ?</h3>
                <p>Nous proposons plusieurs facilités de paiement. Contactez-nous pour connaître les options disponibles selon votre situation.</p>
              </div>
              <div className="faq-card">
                <h3>Proposez-vous des formations pour les entreprises ?</h3>
                <p>Oui, nous intervenons directement dans les établissements pour former le personnel sur site. Devis personnalisé immédiat.</p>
              </div>
            </div>
          </div>
        </section>

      <section className="closing-cta reveal">
        <div className="container container--narrow">
          <span className="label" style={{ color: 'rgba(10,10,12,0.6)' }}>Dernier mot</span>
            <h2>Envoyez un vrai<br />message. Vous<br />aurez une vraie réponse.</h2>
            <p className="lede">
              Nous n'utilisons pas de robots pour filtrer les demandes. Chaque message est lu par un membre de l'équipe Élite Hospitality Consulting Bénin, qui vous répondra personnellement.
            </p>
            <div className="cta-row">
              <a className="btn btn--dark btn--lg" href="#formulaire">Ouvrir le formulaire
                <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a className="btn btn--ghost btn--lg" href="mailto:info@elitehospitality.consulting">Ou écrivez directement</a>
            </div>
          </div>
        </section>

      </main>

      {status === 'success' && (
        <div className="modal-overlay open" onClick={closeModal}>
          <div className="modal-card open" onClick={e => e.stopPropagation()}>
            <button className="modal-x" onClick={closeModal} aria-label="Fermer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <span className="modal-badge">Message envoyé</span>
            <h2 className="modal-title">Merci {formData?.name} !</h2>
            <p className="modal-desc">
              Nous avons bien reçu votre message et nous vous répondrons immédiatement à <strong>{formData?.email}</strong>.
            </p>
            <ul className="modal-check">
              <li>Réponse immédiate par email</li>
              {formData?.tel && <li>Ou par téléphone au {formData.tel}</li>}
              <li>Équipe Élite Hospitality Consulting Bénin</li>
            </ul>
            <div className="modal-actions">
              <button className="btn btn--primary btn--lg" onClick={closeModal}>
                Compris
                <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
