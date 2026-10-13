import { motion } from 'motion/react'
import { socials } from '../data'

/** Grille d'icônes de réseaux sociaux avec couleur de marque au survol */
export default function SocialLinks({ items = socials, size = 'md', className = '' }) {
  const dim = size === 'lg' ? 'size-12 text-xl' : size === 'sm' ? 'size-9 text-base' : 'size-11 text-lg'
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`}>
      {items.map((s, i) => (
        <motion.li key={s.id} initial={{ opacity: 0, y: 14, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04, type: 'spring', stiffness: 260, damping: 18 }}>
          <motion.a
            href={s.href}
            target={s.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            whileHover={{ y: -5, scale: 1.12, backgroundColor: s.color, color: '#fff', borderColor: s.color }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className={`glass grid place-items-center rounded-2xl text-fg ${dim}`}
          >
            <s.icon />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  )
}
