import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LuArrowUpRight, LuX } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa6'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.documentElement.style.overflow = '' }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          role="dialog" aria-modal="true" aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-line bg-bg shadow-2xl"
            data-lenis-prevent
          >
            <button onClick={onClose} aria-label="Fermer" className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:rotate-90 hover:bg-black">
              <LuX />
            </button>
            <img src={project.image} alt={`Aperçu de ${project.title}`} className="aspect-[16/9] w-full object-cover object-top" />
            <div className="p-6 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">{project.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => <li key={t} className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">{t}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-semibold text-white transition hover:brightness-110">
                    Voir la démo <LuArrowUpRight />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-line px-6 py-3 font-semibold transition hover:border-accent hover:text-accent">
                    <FaGithub /> Code source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
