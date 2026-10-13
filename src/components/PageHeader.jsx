import Reveal from './Reveal'
import SplitText from './SplitText'

/** En-tête commun aux pages internes */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pt-44">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="size-1.5 animate-pulse rounded-full bg-accent2" />
          {eyebrow}
        </span>
      </Reveal>
      <SplitText text={title} delay={0.1} className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-7xl lg:text-8xl" />
      {subtitle && (
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        </Reveal>
      )}
    </section>
  )
}
