type Box = {
  left: number
  top: number
  width: number
  height: number
  label: string
}

type Props = {
  src: string
  alt: string
  aspect: number
  boxes: Box[]
  title: string
  description: string
}

export default function ImageWithBoxes({ src, alt, aspect, boxes, title, description }: Props) {
  const width = aspect >= 1 ? 1 : aspect
  const height = aspect >= 1 ? 1 / aspect : 1
  const offsetX = (1 - width) / 2
  const offsetY = (1 - height) / 2

  return (
    <section className="reveal relative border-2 border-ink bg-white">
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 z-10 -rotate-2 border border-ink/50 bg-paper px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft"
      >
        Diperiksa
      </span>
      <figure className="relative aspect-square w-full overflow-hidden border-b-2 border-ink">
        <img src={src} alt={alt} className="h-full w-full object-contain" />
        {boxes.map((b) => (
          <span
            key={b.label}
            className="pulse-ring absolute rounded-sm border-2 border-accent"
            style={{
              left: `${(offsetX + width * (b.left / 100)) * 100}%`,
              top: `${(offsetY + height * (b.top / 100)) * 100}%`,
              width: `${width * b.width}%`,
              height: `${height * b.height}%`,
            }}
          >
            <span className="absolute -top-7 left-0 -rotate-2 whitespace-nowrap border border-accent-ink bg-accent px-1.5 py-0.5 font-heading text-xs font-bold uppercase tracking-wide text-paper">
              {b.label}
            </span>
          </span>
        ))}
      </figure>
      <div className="p-5">
        <h2 className="font-display text-xl font-black tracking-tight text-ink">
          {title}
        </h2>
        <p className="mt-3 text-sm text-ink-soft">{description}</p>
      </div>
    </section>
  )
}