import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { services, skillGroups, timeline } from '../data'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import GlowCard from '../components/GlowCard'
import SectionTitle from '../components/SectionTitle'

function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const height = useSpring(scrollYProgress, { stiffness: 100, damping: 24 })

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      <div aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px bg-line md:left-1/2" />
      <motion.div aria-hidden="true" style={{ scaleY: height }} className="absolute bottom-0 left-5 top-0 w-px origin-top bg-gradient-to-b from-accent to-accent2 md:left-1/2" />

      <ol className="space-y-14">
        {timeline.map((t, i) => {
          const left = i % 2 === 0
          return (
            <li key={t.id} className="relative pl-14 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
              <motion.span
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="absolute left-5 top-6 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full bg-gradient-brand text-lg text-white shadow-lg shadow-violet-500/30 md:left-1/2"
              >
                <t.icon />
              </motion.span>
              <Reveal direction={left ? 'right' : 'left'} className={left ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}>
                <GlowCard className="p-7">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.type} · {t.period}</span>
                  <h3 className="mt-3 font-display text-xl font-bold">{t.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent2">{t.place}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t.desc}</p>
                  <ul className={`mt-4 flex flex-wrap gap-1.5 ${left ? 'md:justify-end' : ''}`}>
                    {t.tags.map((tag) => <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">{tag}</li>)}
                  </ul>
                </GlowCard>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <PageHeader eyebrow="Expérience" title="Un parcours bâti sur la pratique." subtitle="Formation, projets et missions : voici comment j'ai construit mon expertise en développement front-end." />

      <section className="mx-auto max-w-6xl px-6 py-10"><Timeline /></section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Expertises" title="Mes domaines de compétences" subtitle="Je vous donne le meilleur dans chacune de mes expertises." />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.1}>
              <GlowCard className="group flex h-full gap-5 p-7">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-2xl text-white shadow-lg shadow-violet-500/25 transition-transform duration-500 group-hover:rotate-[10deg]"><s.icon /></span>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle eyebrow="Technologies" title="Stack technique" />
        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.id} delay={gi * 0.1}>
              <GlowCard className="h-full p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{g.title}</h3>
                <ul className="mt-5 grid grid-cols-2 gap-3">
                  {g.items.map((it) => (
                    <li key={it.name} className="flex items-center gap-2.5 text-sm font-medium">
                      <it.icon className="shrink-0 text-lg" style={{ color: it.color }} /> {it.name}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
