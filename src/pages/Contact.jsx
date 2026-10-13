import { motion } from 'motion/react'
import { LuArrowUpRight, LuClock, LuMail } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { profile } from '../data'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import GlowCard from '../components/GlowCard'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'

const channels = [
  { icon: LuMail, label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: `+${profile.whatsapp}`, href: `https://wa.me/${profile.whatsapp}` },
]

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Parlons de votre projet." subtitle="Remplissez le formulaire : votre message m'arrive directement par e-mail et je vous réponds rapidement." />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal direction="right">
          <GlowCard className="p-6 sm:p-10">
            <ContactForm />
          </GlowCard>
        </Reveal>

        <div className="space-y-5">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.1 + i * 0.1} direction="left">
              <motion.a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" whileHover={{ x: 6 }} className="group flex items-center gap-5 rounded-3xl glass p-6 transition-colors hover:border-accent/50">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-2xl text-white"><c.icon /></span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{c.label}</p>
                  <p className="mt-1 truncate font-semibold">{c.value}</p>
                </div>
                <LuArrowUpRight className="text-xl text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </motion.a>
            </Reveal>
          ))}

          <Reveal delay={0.3} direction="left">
            <div className="flex items-center gap-4 rounded-3xl glass p-6">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-2xl text-emerald-500"><LuClock /></span>
              <div>
                <p className="font-semibold">Réponse rapide</p>
                <p className="mt-0.5 text-sm text-muted">Je réponds généralement sous 24 à 48 h.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4} direction="left">
            <GlowCard className="p-6">
              <p className="font-display text-lg font-bold">Retrouvez-moi aussi sur</p>
              <SocialLinks className="mt-4" />
            </GlowCard>
          </Reveal>
        </div>
      </section>
    </>
  )
}
