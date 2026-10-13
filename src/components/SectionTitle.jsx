import Reveal from './Reveal'
import SplitText from './SplitText'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', as = 'h2' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  return (
    <div className={`flex flex-col gap-4 mb-14 ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-accent">
            <span className="size-1.5 rounded-full bg-accent2 animate-pulse" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <SplitText as={as} text={title} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]" />
      {subtitle && (
        <Reveal delay={0.15}>
          <p className="max-w-2xl text-muted text-base sm:text-lg leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
