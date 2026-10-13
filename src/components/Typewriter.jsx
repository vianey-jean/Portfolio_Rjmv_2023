import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

/** Machine à écrire : tape et efface une liste de mots en boucle */
export default function Typewriter({ words, speed = 70, pause = 1600 }) {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const full = words[i % words.length]
    let t
    if (!deleting && text === full) t = setTimeout(() => setDeleting(true), pause)
    else if (deleting && text === '') {
      t = setTimeout(() => { setDeleting(false); setI((v) => v + 1) }, 250)
    } else {
      t = setTimeout(() => setText(full.slice(0, text.length + (deleting ? -1 : 1))), deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, speed, pause, reduce])

  if (reduce) return <span>{words[0]}</span>
  return (
    <span aria-label={words.join(', ')}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="ml-0.5 inline-block w-[3px] h-[1em] -mb-[0.12em] bg-accent animate-pulse" />
    </span>
  )
}
