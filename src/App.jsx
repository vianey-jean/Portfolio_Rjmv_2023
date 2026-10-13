import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Lenis from 'lenis'
import { ThemeProvider } from './context/ThemeContext'
import { lenisRef, scrollToTop } from './lib/lenis'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CursorEffects from './components/CursorEffects'
import Preloader from './components/Preloader'
import BackToTop from './components/BackToTop'
import PageTransition from './components/PageTransition'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Experience = lazy(() => import('./pages/Experience'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const titles = {
  '/': 'Jean RABEMANALINA — Développeur Front-end React',
  '/a-propos': 'À propos — Jean RABEMANALINA',
  '/experience': 'Expérience — Jean RABEMANALINA',
  '/portfolio': 'Portfolio — Jean RABEMANALINA',
  '/contact': 'Contact — Jean RABEMANALINA',
}

function Shell() {
  const location = useLocation()

  // Défilement fluide (Lenis)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.09, smoothWheel: true })
    lenisRef.current = lenis
    return () => { lenis.destroy(); lenisRef.current = null }
  }, [])

  // Retour en haut + titre à chaque changement de page
  useEffect(() => {
    scrollToTop(true)
    document.title = titles[location.pathname] || 'Page introuvable — Jean RABEMANALINA'
  }, [location.pathname])

  return (
    <>
      <Preloader />
      <Background />
      <ScrollProgress />
      <CursorEffects />
      <Navbar />

      {/* Rideau de transition entre les pages */}
      <motion.div
        key={`curtain-${location.pathname}`}
        aria-hidden="true"
        initial={{ scaleY: 1 }} animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
        style={{ originY: 0 }}
        className="pointer-events-none fixed inset-0 z-[90] bg-gradient-brand"
      />

      <Suspense fallback={<div className="min-h-screen" />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/a-propos" element={<PageTransition><About /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      </Suspense>

      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  )
}
