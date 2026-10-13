import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import { LuArrowRight, LuArrowUpRight, LuDownload, LuSparkles } from 'react-icons/lu'
import { allSkills, faqs, imgDev, imgPortrait, process, profile, projects, services, stats } from '../data'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import Typewriter from '../components/Typewriter'
import Magnetic from '../components/Magnetic'
import Marquee from '../components/Marquee'
import Counter from '../components/Counter'
import SectionTitle from '../components/SectionTitle'
import GlowCard from '../components/GlowCard'
import SocialLinks from '../components/SocialLinks'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import FaqItem from '../components/FaqItem'
import { socials } from '../data'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120])
  const yText = useTransform(scrollYProgress, [0, 1], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div style={{ y: yText, opacity }}>
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            Disponible pour de nouveaux projets
          </span>
        </Reveal>

        <p className="mt-8 font-mono text-sm text-muted">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>{'<'}</motion.span>
          {' '}Bonjour, je suis{' '}
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>{'/>'}</motion.span>
        </p>
        <SplitText text={profile.name} delay={0.2} className="mt-3 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.5rem]" />
        <Reveal delay={0.5}>
          <h2 className="mt-5 min-h-[2.5rem] font-display text-2xl font-semibold text-gradient sm:text-4xl">
            <Typewriter words={profile.roles} />
          </h2>
        </Reveal>
        <Reveal delay={0.65}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={0.8} className="mt-9 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Link to="/portfolio" className="group flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-white shadow-xl shadow-violet-500/25 transition hover:brightness-110">
              Voir mes projets <LuArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="/contact" className="flex items-center gap-2 rounded-full border border-line bg-bg2/50 px-7 py-4 font-semibold backdrop-blur transition hover:border-accent hover:text-accent">
              Me contacter
            </Link>
          </Magnetic>
          <a href={profile.cv} download className="flex items-center gap-2 px-2 py-4 text-sm font-semibold text-muted transition hover:text-accent">
            <LuDownload /> Mon CV
          </a>
        </Reveal>

        <Reveal delay={0.95} className="mt-10 flex items-center gap-5">
          <SocialLinks items={socials.slice(0, 5)} size="sm" />
        </Reveal>
      </motion.div>

      <motion.div style={{ y: yImg }} initial={{ opacity: 0, scale: 0.85, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-6 rounded-[3rem] bg-gradient-brand opacity-30 blur-3xl" />
        <div className="relative animate-float">
          <div className="absolute -inset-[2px] animate-spin-slow rounded-[2.2rem] bg-[conic-gradient(from_0deg,var(--accent),var(--accent2),transparent,var(--accent))] opacity-70 blur-[1px]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-bg">
            <img src={imgDev} alt="Poste de développeur avec éditeur de code ouvert" className="aspect-[4/5] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          </div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="absolute -left-6 bottom-10 flex items-center gap-3 rounded-2xl glass p-3 pr-5 shadow-xl">
            <img src={imgPortrait} alt={profile.name} className="size-12 rounded-xl object-cover" />
            <div>
              <p className="text-sm font-bold leading-tight">{profile.name.split(' ')[0]}</p>
              <p className="text-xs text-muted">React · Front-end</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className="absolute -right-5 top-12 flex items-center gap-2 rounded-2xl glass px-4 py-3 shadow-xl">
            <LuSparkles className="text-accent" />
            <span className="text-sm font-semibold">16+ projets</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted lg:flex" aria-hidden="true">
        <span className="font-mono uppercase tracking-[0.25em]">Scroll</span>
        <span className="relative h-10 w-[22px] rounded-full border border-line">
          <motion.span animate={{ y: [4, 20, 4] }} transition={{ repeat: Infinity, duration: 1.8 }} className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-accent" />
        </span>
      </motion.div>
    </section>
  )
}

export default function Home() {
  const [selected, setSelected] = useState(null)
  const [openFaq, setOpenFaq] = useState(1)
  const featured = projects.filter((p) => p.featured).slice(0, 6)

  return (
    <>
      <Hero />

      {/* Technologies */}
      <section className="py-10" aria-label="Technologies maîtrisées">
        <Marquee items={allSkills.slice(0, 12)} />
        <Marquee items={allSkills.slice(6)} reverse className="mt-4" />
      </section>

      {/* Chiffres */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <GlowCard tilt className="p-6 text-center sm:p-8">
                <p className="font-display text-5xl font-bold text-gradient sm:text-6xl"><Counter to={s.value} suffix={s.suffix} /></p>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Ce que je fais" title="Des solutions web de A à Z" subtitle="De la conception à la mise en ligne, je prends en charge chaque étape de votre projet." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.1}>
              <GlowCard className="group h-full p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-brand text-2xl text-white shadow-lg shadow-violet-500/25 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
                  <s.icon />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projets */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Réalisations" title="Projets à la une" subtitle="Une sélection de projets réalisés durant ma formation et mes missions." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => <ProjectCard key={p.id} project={p} onOpen={setSelected} index={i} />)}
        </div>
        <Reveal className="mt-12 text-center">
          <Magnetic>
            <Link to="/portfolio" className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 font-semibold transition hover:border-accent hover:text-accent">
              Voir tous les projets <LuArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Magnetic>
        </Reveal>
      </section>

      {/* Processus */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Méthode" title="Comment je travaille" subtitle="Un processus simple et transparent, pensé pour que vous gardiez la main." />
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[3.1rem] hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent lg:block" />
          {process.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12}>
              <div className="relative h-full rounded-3xl glass p-7">
                <span className="relative z-10 grid size-12 place-items-center rounded-full bg-bg font-mono text-sm font-bold text-accent ring-1 ring-accent/50">0{p.id}</span>
                <h3 className="mt-6 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.06}>
              <FaqItem q={f.q} a={f.a} open={openFaq === f.id} onToggle={() => setOpenFaq(openFaq === f.id ? null : f.id)} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
