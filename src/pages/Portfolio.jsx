import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { LuSearch } from 'react-icons/lu'
import { categories, projects } from '../data'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Reveal from '../components/Reveal'

export default function Portfolio() {
  const [cat, setCat] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.id, c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length])),
    []
  )
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter(
      (p) => (cat === 'all' || p.category === cat) && (!q || `${p.title} ${p.desc} ${p.tags.join(' ')}`.toLowerCase().includes(q))
    )
  }, [cat, query])

  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Mes projets & réalisations." subtitle="Applications React, sites JavaScript, bibliothèque npm : découvrez tout ce que j'ai construit." />

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <LayoutGroup>
            <div role="tablist" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id} role="tab" aria-selected={cat === c.id} onClick={() => setCat(c.id)}
                  className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors"
                >
                  {cat === c.id && <motion.span layoutId="cat-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} className="absolute inset-0 rounded-full bg-gradient-brand" />}
                  <span className={`relative flex items-center gap-2 ${cat === c.id ? 'text-white' : 'text-muted hover:text-fg'}`}>
                    {c.label}
                    <span className={`rounded-full px-1.5 font-mono text-[10px] ${cat === c.id ? 'bg-white/25' : 'bg-bg2'}`}>{counts[c.id]}</span>
                  </span>
                </button>
              ))}
            </div>
          </LayoutGroup>

          <label className="relative block md:w-64">
            <span className="sr-only">Rechercher un projet</span>
            <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher…"
              className="w-full rounded-full border border-line bg-bg2/60 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
            />
          </label>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => <ProjectCard key={p.id} project={p} onOpen={setSelected} index={i} />)}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center text-muted">
            Aucun projet ne correspond à votre recherche.
          </motion.p>
        )}
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
