import { AnimatePresence, motion } from 'motion/react'
import { LuPlus } from 'react-icons/lu'

export default function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={`glass rounded-2xl transition-colors ${open ? 'border-accent/40' : ''}`}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold sm:p-6">
        {q}
        <motion.span animate={{ rotate: open ? 135 : 0 }} className={`grid size-8 shrink-0 place-items-center rounded-full ${open ? 'bg-gradient-brand text-white' : 'bg-bg2 text-fg'}`}>
          <LuPlus />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <p className="px-5 pb-6 text-muted leading-relaxed sm:px-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
