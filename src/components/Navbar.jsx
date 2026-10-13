import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { LuArrowUpRight, LuMenu, LuX } from 'react-icons/lu'
import { navLinks, socials } from '../data'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const { pathname } = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 30)
    setHidden(y > 300 && y > prev && !open)
  })

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => { document.documentElement.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[60] flex justify-center px-4 pt-4"
      >
        <nav
          aria-label="Navigation principale"
          className={`flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 ${
            scrolled ? 'glass border-line shadow-xl shadow-black/10' : 'border-transparent bg-transparent'
          }`}
        >
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className="relative block rounded-full px-4 py-2 text-sm font-medium">
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span layoutId="nav-pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} className="absolute inset-0 rounded-full bg-accent/15 ring-1 ring-accent/30" />
                      )}
                      <span className={`relative transition-colors ${isActive ? 'text-accent' : 'text-muted hover:text-fg'}`}>{l.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <NavLink to="/contact" className="hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg transition hover:scale-105 sm:flex">
              Me contacter <LuArrowUpRight />
            </NavLink>
            <button
              type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="grid size-9 place-items-center rounded-full border border-line md:hidden"
            >
              {open ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2rem) 2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col justify-center bg-bg/95 px-8 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.li key={l.to} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.07 }}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `block font-display text-4xl font-bold tracking-tight ${isActive ? 'text-gradient' : 'text-fg'}`}>
                    <span className="mr-3 font-mono text-sm text-muted">0{i + 1}</span>
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              {socials.slice(0, 5).map((s, i) => (
                <motion.a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + i * 0.05 }}
                  className="glass grid size-11 place-items-center rounded-2xl text-lg">
                  <s.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
