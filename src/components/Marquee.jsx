/** Bandeau défilant infini (pause au survol) */
export default function Marquee({ items, reverse = false, className = '' }) {
  const list = [...items, ...items]
  return (
    <div className={`marquee-mask overflow-hidden ${className}`} aria-hidden="true">
      <div className={`flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] ${reverse ? '[animation-direction:reverse]' : ''}`}>
        {list.map((it, i) => (
          <div key={i} className="glass flex items-center gap-3 rounded-2xl px-5 py-3 whitespace-nowrap">
            {it.icon && <it.icon className="text-2xl" style={{ color: it.color }} />}
            <span className="font-medium text-sm">{it.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
