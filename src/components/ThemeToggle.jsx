import { useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'

/** Interrupteur clair / sombre : pastille coulissante + icône qui pivote */
export default function ThemeToggle({ className = '' }) {
  const { isDark, toggle } = useTheme()
  const ref = useRef(null)

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      title={isDark ? 'Mode clair' : 'Mode sombre'}
      onClick={() => toggle(ref.current)}
      className={`relative flex h-9 w-[68px] shrink-0 items-center rounded-full border border-line bg-bg2/80 p-1 transition-colors hover:border-accent/60 ${className}`}
    >
      <LuSun className="absolute left-2.5 text-sm text-amber-500/80" />
      <LuMoon className="absolute right-2.5 text-sm text-accent2/80" />
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className={`relative z-10 grid size-7 place-items-center rounded-full bg-gradient-brand text-white shadow-md ${isDark ? 'ml-auto' : ''}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="grid place-items-center"
          >
            {isDark ? <LuMoon className="text-sm" /> : <LuSun className="text-sm" />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  )
}
