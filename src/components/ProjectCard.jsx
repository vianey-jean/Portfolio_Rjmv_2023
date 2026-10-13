import { motion } from 'motion/react'
import { LuArrowUpRight, LuCode } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa6'
import GlowCard from './GlowCard'

export default function ProjectCard({ project, onOpen, index = 0 }) {
  const { title, desc, image, tags, demo, github, category } = project
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <GlowCard tilt className="group flex h-full flex-col overflow-hidden !rounded-3xl">
        <button type="button" onClick={() => onOpen(project)} className="relative block aspect-[16/9] w-full overflow-hidden text-left" aria-label={`Voir le projet ${title}`} data-cursor>
          <img src={image} alt={`Aperçu du projet ${title}`} loading="lazy" className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
          <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur-md">{category}</span>
          <span className="absolute bottom-4 right-4 grid size-11 translate-y-3 place-items-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <LuArrowUpRight className="text-xl" />
          </span>
        </button>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{desc}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">{t}</li>)}
          </ul>
          <div className="mt-5 flex items-center gap-2">
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
                Démo <LuArrowUpRight />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`Code source de ${title}`} className={`flex items-center justify-center gap-1.5 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent ${demo ? '' : 'flex-1'}`}>
                <FaGithub /> {!demo && 'Code source'}
              </a>
            )}
            {!demo && !github && <span className="flex items-center gap-1.5 text-sm text-muted"><LuCode /> Bientôt</span>}
          </div>
        </div>
      </GlowCard>
    </motion.article>
  )
}
