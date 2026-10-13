import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LuArrowUpRight } from 'react-icons/lu'
import { scrollToTop } from '../lib/lenis'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}
          onClick={() => scrollToTop(false)}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-violet-500/30"
        >
          <LuArrowUpRight className="-rotate-45 text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
