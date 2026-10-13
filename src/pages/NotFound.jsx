import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { LuArrowLeft } from 'react-icons/lu'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <motion.p initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 120 }} className="font-display text-[9rem] font-bold leading-none text-gradient sm:text-[13rem]">
        404
      </motion.p>
      <h1 className="mt-4 font-display text-3xl font-bold">Cette page n'existe pas</h1>
      <p className="mt-3 text-muted">Le lien est peut-être incorrect ou la page a été déplacée.</p>
      <Link to="/" className="group mt-8 flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-white shadow-xl shadow-violet-500/25">
        <LuArrowLeft className="transition-transform group-hover:-translate-x-1" /> Retour à l'accueil
      </Link>
    </section>
  )
}
