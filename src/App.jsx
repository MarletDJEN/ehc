import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import ModalSeason from './components/ModalSeason'
import Home from './pages/Home'
import Formations from './pages/Formations'
import APropos from './pages/APropos'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.3, easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)) })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ChatBot />
      <ModalSeason />
    </>
  )
}
