/** Fond ambiant : aurores animées + grille + grain */
export default function Background() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden noise">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -top-40 -left-32 size-[42rem] rounded-full bg-accent/25 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 size-[36rem] rounded-full bg-accent2/20 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute -bottom-52 left-1/4 size-[34rem] rounded-full bg-fuchsia-500/15 blur-[130px] animate-blob [animation-delay:-12s]" />
      <div className="absolute inset-0 bg-grid" />
    </div>
  )
}
