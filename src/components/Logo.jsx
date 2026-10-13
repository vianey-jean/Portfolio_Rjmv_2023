import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} aria-label="Accueil" className="group flex items-center gap-2.5">
      <motion.span whileHover={{ rotate: 12, scale: 1.08 }} className="grid size-9 place-items-center rounded-xl bg-gradient-brand font-display text-lg font-bold text-white shadow-lg shadow-violet-500/30">
        R
      </motion.span>
      <span className="hidden font-display text-lg font-bold tracking-tight sm:block">
        RJMV<span className="text-accent">.</span>
      </span>
    </Link>
  )
}
