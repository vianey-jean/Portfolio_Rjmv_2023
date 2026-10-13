import { motion } from 'motion/react'

const offsets = {
  up: { y: 40 }, down: { y: -40 }, left: { x: 50 }, right: { x: -50 }, zoom: { scale: 0.9 }, none: {},
}

/** Apparition au scroll (fade + slide + léger flou) */
export default function Reveal({ children, direction = 'up', delay = 0, duration = 0.7, className = '', as = 'div', once = true, ...rest }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      initial={{ opacity: 0, filter: 'blur(8px)', ...offsets[direction] }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  )
}
