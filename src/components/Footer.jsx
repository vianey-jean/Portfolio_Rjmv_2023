import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { LuArrowUpRight, LuMail } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { navLinks, profile, allSkills } from '../data'
import Logo from './Logo'
import Marquee from './Marquee'
import Magnetic from './Magnetic'
import SocialLinks from './SocialLinks'
import { scrollToTop } from '../lib/lenis'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-line">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="py-8">
        <Marquee items={allSkills} />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Un projet en tête ?</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Créons quelque chose <span className="text-gradient">d'exceptionnel</span> ensemble.
            </h2>
          </div>
          <Magnetic>
            <Link to="/contact" className="group relative flex size-36 items-center justify-center rounded-full bg-gradient-brand text-center font-semibold text-white shadow-2xl shadow-violet-500/30 sm:size-40">
              <span className="absolute inset-0 rounded-full bg-accent/40 animate-pulse-ring" />
              <span className="relative flex flex-col items-center gap-1 text-sm">
                Démarrer
                <LuArrowUpRight className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Magnetic>
        </div>

        {/* Colonnes */}
        <div className="mt-20 grid gap-12 border-t border-line pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{profile.tagline}</p>
            <div className="mt-6"><SocialLinks size="md" /></div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent">
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={profile.cv} download className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent">
                  <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                  Télécharger mon CV
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 transition-colors hover:text-accent">
                  <LuMail className="text-accent" /> {profile.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-accent">
                  <FaWhatsapp className="text-accent" /> +{profile.whatsapp.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})$/, '$1 $2 $3 $4 $5')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                </span>
                Disponible pour de nouveaux projets
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {year} {profile.name}. Tous droits réservés.</p>
          <p className="font-mono">React 19 · Vite · Tailwind CSS · Motion</p>
          <motion.button whileHover={{ y: -3 }} onClick={() => scrollToTop(false)} className="flex items-center gap-1.5 font-medium text-fg transition-colors hover:text-accent">
            Haut de page <LuArrowUpRight className="-rotate-45" />
          </motion.button>
        </div>
      </div>

      {/* Mot géant décoratif */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden text-center font-display text-[22vw] font-bold leading-[0.75] tracking-tighter text-fg/[0.04] sm:text-[17vw]">
        RJMV-2026
      </div>
    </footer>
  )
}
