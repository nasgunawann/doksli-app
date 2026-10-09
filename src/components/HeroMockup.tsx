export default function HeroMockup() {
  return (
    <section className="reveal relative border-2 border-ink bg-white">
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 z-10 -rotate-2 border border-ink/50 bg-paper px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft"
      >
        Diperiksa
      </span>

      <figure className="relative aspect-square w-full overflow-hidden border-b-2 border-ink bg-gradient-to-br from-ink to-[#2b2822] p-6 text-paper">
        <div className="flex h-full flex-col justify-between">
          <span className="w-fit -rotate-2 border border-paper/40 px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70">
            Kabar Viral
          </span>

          <p className="font-display text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl">
            Pemerintah bagikan{' '}
            <span className="pulse-ring relative whitespace-nowrap rounded-sm border-2 border-accent px-0.5 text-accent">
              subsidi gratis
            </span>{' '}
            <span className="whitespace-nowrap align-middle border border-accent-ink bg-accent px-1.5 py-0.5 font-heading text-xs font-bold uppercase tracking-wide text-paper">
              Dimanipulasi
            </span>{' '}
            bulan depan
          </p>

          <div className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wide text-paper/60">
            <span>Dibagikan 12 rb kali</span>
            <span aria-hidden="true">·</span>
            <span>Sumber tidak jelas</span>
          </div>
        </div>
      </figure>

      <div className="p-5">
        <h2 className="font-display text-xl font-black tracking-tight text-ink">
          Contoh indikasi
        </h2>
        <p className="mt-3 text-sm text-ink-soft">
          Kotak menandai frasa yang tidak ada pada sumber aslinya.
        </p>
      </div>
    </section>
  )
}
