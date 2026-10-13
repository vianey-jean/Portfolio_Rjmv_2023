import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

/** Carte glass avec halo lumineux qui suit la souris + inclinaison 3D optionnelle */
export default function GlowCard({ children, className = '', tilt = false, as = 'div', ...rest }) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 180, damping: 18 })
  const sy = useSpring(py, { stiffness: 180, damping: 18 })
  const rotateX = useTransform(sy, [0, 1], [8, -8])
  const rotateY = useTransform(sx, [0, 1], [-8, 8])
  const Comp = motion[as] || motion.div

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    ref.current.style.setProperty('--mx', `${x}px`)
    ref.current.style.setProperty('--my', `${y}px`)
    px.set(x / r.width)
    py.set(y / r.height)
  }
  const onLeave = () => { px.set(0.5); py.set(0.5) }

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={tilt ? { rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d' } : undefined}
      className={`spotlight glass rounded-3xl ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  )
}
