import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { LuDownload, LuArrowUpRight, LuGraduationCap } from 'react-icons/lu'
import { education, imgDev, imgPortrait, profile, skillGroups, stats, values } from '../data'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import GlowCard from '../components/GlowCard'
import Counter from '../components/Counter'
import SectionTitle from '../components/SectionTitle'
import Magnetic from '../components/Magnetic'

export default function About() {
  return (
    <>
      <PageHeader eyebrow="À propos" title="Développeur créatif, autonome et passionné." subtitle="Découvrez mon parcours, mes valeurs et ce qui me motive à créer des expériences web mémorables." />

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-10 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-brand opacity-25 blur-2xl" />
            <motion.div whileHover={{ rotate: -1.5, scale: 1.02 }} className="relative overflow-hidden rounded-[2rem] border border-line">
              <img src={imgDev} alt="Poste de travail d'un développeur" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl glass p-3 pr-6 shadow-xl sm:-right-8">
              <img src={imgPortrait} alt={profile.name} className="size-14 rounded-xl object-cover" />
              <div>
                <p className="font-bold leading-tight">{profile.name}</p>
                <p className="text-xs text-muted">{profile.title}</p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Qui suis-je ?</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Développeur Front-end créatif, autonome et passionné, avec une solide expérience de création de sites web. Titulaire d'un <strong className="text-fg">Bac +3/4 professionnel de développeur d'applications React</strong> avec OpenClassrooms.
            </p>
            <p>
              Je maîtrise <strong className="text-fg">HTML, CSS, jQuery, JavaScript, React</strong>, ainsi que des bibliothèques de reporting JavaScript et des frameworks modernes.
            </p>
            <p>
              L'utilisation efficace du temps, la résolution de problèmes et les techniques de communication m'aident à garder une attitude positive dans les situations complexes. Ma volonté d'apprendre me permet de m'adapter rapidement aux situations changeantes.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href={profile.cv} download className="flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-white shadow-xl shadow-violet-500/25 transition hover:brightness-110">
                <LuDownload /> Télécharger mon CV
              </a>
            </Magnetic>
            <Link to="/contact" className="group flex items-center gap-2 font-semibold transition hover:text-accent">
              Travaillons ensemble <LuArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <GlowCard tilt className="p-6 text-center sm:p-8">
                <p className="font-display text-5xl font-bold text-gradient"><Counter to={s.value} suffix={s.suffix} /></p>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle eyebrow="Valeurs" title="Ce qui me définit" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.id} delay={(i % 3) * 0.1}>
              <GlowCard className="group h-full p-7">
                <v.icon className="text-3xl text-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                <h3 className="mt-5 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Boîte à outils */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle eyebrow="Stack" title="Ma boîte à outils" subtitle="Les technologies que j'utilise au quotidien pour donner vie à vos idées." />
        <div className="space-y-10">
          {skillGroups.map((g) => (
            <div key={g.id}>
              <Reveal><h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">{g.title}</h3></Reveal>
              <div className="flex flex-wrap gap-3">
                {g.items.map((it, i) => (
                  <Reveal key={it.name} delay={i * 0.04} direction="zoom">
                    <motion.div whileHover={{ y: -6, scale: 1.06 }} className="glass flex items-center gap-3 rounded-2xl px-5 py-3.5">
                      <it.icon className="text-2xl" style={{ color: it.color }} />
                      <span className="text-sm font-semibold">{it.name}</span>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionTitle eyebrow="Formation" title="Parcours académique" />
        {education.map((e) => (
          <Reveal key={e.id}>
            <GlowCard className="flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center">
              <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-3xl text-white"><LuGraduationCap /></span>
              <div>
                <h3 className="font-display text-xl font-bold">{e.title}</h3>
                <p className="mt-1 text-muted">{e.school} · Niveau {e.level}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </section>
    </>
  )
}
