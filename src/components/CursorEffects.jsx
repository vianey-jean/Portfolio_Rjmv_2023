import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/** Halo lumineux + anneau qui suivent le curseur (uniquement souris) */
export default function CursorEffects() {
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 260, damping: 24, mass: 0.5 })
  const ry = useSpring(y, { stiffness: 260, damping: 24, mass: 0.5 })
  const gx = useSpring(x, { stiffness: 60, damping: 18 })
  const gy = useSpring(y, { stiffness: 60, damping: 18 })

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!mq.matches || reduce.matches) return
    setEnabled(true)
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => setHover(!!e.target.closest?.('a, button, input, textarea, select, [data-cursor]'))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div aria-hidden="true" style={{ x: gx, y: gy }} className="pointer-events-none fixed left-0 top-0 z-[1] -ml-48 -mt-48 size-96 rounded-full bg-accent/10 blur-3xl" />
      <motion.div
        aria-hidden="true"
        style={{ x: rx, y: ry }}
        animate={{ scale: hover ? 1.9 : 1, opacity: hover ? 0.9 : 0.6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 size-8 rounded-full border border-accent mix-blend-difference"
      />
      <motion.div aria-hidden="true" style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] size-[6px] rounded-full bg-accent" />
    </>
  )
}
