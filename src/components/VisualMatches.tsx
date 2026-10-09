import { visualMatches } from '../data/dummy'

export default function VisualMatches() {
  return (
    <section className="reveal border-2 border-ink bg-white p-6">
      <h2 className="border-b-2 border-ink pb-2 font-display text-xl font-black tracking-tight text-ink">
        Gambar dan sumber yang mirip
      </h2>
      <p className="mt-3 text-sm text-ink-soft">
        Hasil pencarian gambar yang mirip. Buka tautannya langsung sebelum menyimpulkan.
      </p>

      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visualMatches.map((m, i) => (
          <li key={m.url + i}>
            <a
              href={m.url}
              target="_blank"
              rel="noreferrer"
              className={`group block h-full border-2 bg-white transition-colors ${
                m.best ? 'border-accent' : 'border-ink/20 hover:border-ink'
              }`}
            >
              <div className="relative aspect-square overflow-hidden border-b-2 border-ink/20">
                <img
                  src={m.src}
                  alt={`Cuplikan dari ${m.site}: ${m.title}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {m.best && (
                  <span className="absolute left-2 top-2 border border-accent-ink/50 bg-accent-soft px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-accent-ink">
                    Kecocokan terkuat
                  </span>
                )}
              </div>
              <div className="flex items-start gap-2 p-3">
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: m.faviconBg }}
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold text-white"
                >
                  {m.site.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {m.site}
                  </p>
                  <p className="mt-0.5 line-clamp-2 font-heading text-sm font-semibold leading-snug text-primary-strong group-hover:underline">
                    {m.title}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-ink-soft">{m.display}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-ink/15 pt-3 text-sm text-ink-soft">
        Kandidat ini hasil pencarian, bukan bukti otentik otomatis.
      </p>
    </section>
  )
}