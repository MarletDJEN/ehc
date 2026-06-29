import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, sujet, tel, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nom, email et message requis' })
  }

  const sujetFinal = sujet || 'Demande de contact'
  const from = process.env.SMTP_FROM || 'info@elitehospitality.consulting'

  const clientHtml = `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2>Merci pour votre message, ${name}.</h2>
      <p>Nous avons bien reçu votre demande et nous vous répondrons immédiatement.</p>
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <h3>Récapitulatif</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666;">Sujet</td><td style="padding: 8px 0;">${sujetFinal}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Message</td><td style="padding: 8px 0;">${message}</td></tr>
        ${tel ? `<tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0;">${tel}</td></tr>` : ''}
      </table>
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <p style="color: #666; font-size: 14px;">Élite Hospitality Consulting Bénin · Cotonou, Bénin</p>
    </div>
  `

  const adminHtml = `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2>Nouveau message de contact</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666; width: 120px;">Nom</td><td style="padding: 8px 0;">${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        ${tel ? `<tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0;">${tel}</td></tr>` : ''}
        <tr><td style="padding: 8px 0; color: #666;">Sujet</td><td style="padding: 8px 0;">${sujetFinal}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <h3>Message</h3>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  `

  try {
    await Promise.all([
      transporter.sendMail({
        from,
        to: email,
        subject: 'Nous avons bien reçu votre message — Élite Hospitality Consulting Bénin',
        html: clientHtml,
      }),
      transporter.sendMail({
        from,
        to: 'info@elitehospitality.consulting',
        subject: `Nouveau contact — ${sujetFinal}`,
        html: adminHtml,
      }),
    ])

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return res.status(500).json({ error: "Erreur lors de l'envoi des emails" })
  }
}
