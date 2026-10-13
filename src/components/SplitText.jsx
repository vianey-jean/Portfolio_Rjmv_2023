import { motion } from 'motion/react'

/** Titre animé mot par mot (masque + glissement) */
export default function SplitText({ text, className = '', delay = 0, stagger = 0.06, as = 'h1' }) {
  const Comp = motion[as] || motion.h1
  const words = text.split(' ')
  return (
    <Comp className={className} aria-label={text} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: stagger, delayChildren: delay }}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]" aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: '110%', rotate: 4 }, show: { y: 0, rotate: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Comp>
  )
}
