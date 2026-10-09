type Props = {
  phrase: string
}

export default function VerdictBadge({ phrase }: Props) {
  return (
    <section className="reveal relative border-2 border-accent bg-white p-5">
      <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1.5 bg-accent" />
      <span
        aria-hidden="true"
        className="absolute -right-2 -top-3 rotate-6 border-2 border-accent-ink bg-paper px-2.5 py-1 font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent-ink"
      >
        Indikasi
      </span>
      <h2 className="font-display text-xl font-black text-accent-ink">
        Indikasi timpa teks ditemukan
      </h2>
      <p className="mt-1.5 leading-relaxed text-ink/80">
        Frasa &quot;<span className="hl font-semibold text-accent-ink">{phrase}</span>
        &quot; terbaca pada gambar, tetapi tidak ada pada kandidat sumber pembanding.
      </p>
    </section>
  )
}
