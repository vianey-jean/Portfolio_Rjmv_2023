import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { profile } from '../data'

/** Écran de chargement d'intro (une seule fois par session) */
export default function Preloader() {
  const [show, setShow] = useState(() => !sessionStorage.getItem('rjmv-intro'))
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = 'hidden'
    const id = setInterval(() => setN((v) => Math.min(100, v + Math.ceil(Math.random() * 9))), 55)
    return () => clearInterval(id)
  }, [show])

  useEffect(() => {
    if (n < 100) return
    const t = setTimeout(() => {
      sessionStorage.setItem('rjmv-intro', '1')
      document.documentElement.style.overflow = ''
      setShow(false)
    }, 450)
    return () => clearTimeout(t)
  }, [n])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#07070d] text-white"
        >
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 grid size-20 place-items-center rounded-3xl bg-gradient-brand font-display text-3xl font-bold shadow-2xl shadow-violet-500/40">
            R
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-xl tracking-wide">
            {profile.name}
          </motion.p>
          <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full bg-gradient-brand" animate={{ width: `${n}%` }} transition={{ ease: 'easeOut' }} />
          </div>
          <p className="mt-4 font-mono text-sm text-white/50">{String(n).padStart(3, '0')}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
