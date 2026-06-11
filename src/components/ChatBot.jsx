import { useState, useRef, useEffect } from 'react'
import faq from '../data/faq'

function matchAnswer(input, faqs) {
  const q = input.toLowerCase().trim()
  const words = q.split(/\s+/)
  let best = { idx: -1, score: 0 }

  faqs.forEach((item, i) => {
    const kw = item.q.toLowerCase()
    let score = 0
    for (const w of words) {
      if (w.length < 3) continue
      if (kw.includes(w)) score += 1
    }
    if (score > best.score) best = { idx: i, score }
  })

  return best.score > 0 ? best.idx : -1
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([
    { from: 'bot', text: '👋 Bonjour ! Je suis le chatbot EHC. Posez-moi une question ou choisissez un sujet ci-dessous.' }
  ])
  const [input, setInput] = useState('')
  const [showQuick, setShowQuick] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  function addMsg(from, text) { setMsgs(p => [...p, { from, text }]) }

  function handleQuick(q) {
    setShowQuick(false)
    addMsg('user', q)
    setTimeout(() => {
      const idx = faq.findIndex(f => f.q === q)
      if (idx !== -1) addMsg('bot', faq[idx].a)
      setShowQuick(true)
    }, 400)
  }

  function handleSend(e) {
    e?.preventDefault()
    const v = input.trim()
    if (!v) return
    setInput('')
    setShowQuick(false)
    addMsg('user', v)
    setTimeout(() => {
      const idx = matchAnswer(v, faq)
      if (idx !== -1) addMsg('bot', faq[idx].a)
      else addMsg('bot', "Je n'ai pas trouvé de réponse à votre question. Vous pouvez nous contacter directement par email (ehc.benin@gmail.com) ou téléphone (+229 01 40 14 64 91).")
      setShowQuick(true)
    }, 500)
  }

  return (
    <>
      <button className={`chat-btn${open ? ' is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Ouvrir le chat">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      <div className={`chat-panel${open ? ' open' : ''}`} role="dialog" aria-label="Chat EHC">
        <div className="chat-header">
          <div>
            <span className="chat-brand">EHC</span>
            <span className="chat-title">Chat</span>
          </div>
          <span className="chat-status">En ligne</span>
        </div>

        <div className="chat-body">
          {msgs.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg--${m.from}`}>
              {m.from === 'bot' && <span className="chat-avatar">E</span>}
              <div className="chat-bubble">
                {m.text.split('\n').map((l, j) => <p key={j}>{l}</p>)}
              </div>
            </div>
          ))}
          {showQuick && msgs.length < 4 && (
            <div className="chat-quick">
              <p className="chat-quick-label">Sujets fréquents :</p>
              {faq.slice(0, 5).map(f => (
                <button key={f.q} className="chat-quick-btn" onClick={() => handleQuick(f.q)}>
                  {f.q}
                </button>
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form className="chat-foot" onSubmit={handleSend}>
          <input ref={inputRef} type="text" placeholder="Écrivez votre question…" value={input}
            onChange={e => setInput(e.target.value)} />
          <button type="submit" disabled={!input.trim()} aria-label="Envoyer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
      </div>
    </>
  )
}
