type Row = {
  part: string
  source: string
  detected: string
  same: boolean
}

type Props = {
  rows: Row[]
}

export default function DiffTable({ rows }: Props) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm sm:min-w-0">
        <thead>
          <tr className="border-b-2 border-ink">
            <th
              scope="col"
              className="py-2 pr-4 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft"
            >
              Bagian
            </th>
            <th
              scope="col"
              className="py-2 pr-4 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft"
            >
              Sumber pembanding
            </th>
            <th
              scope="col"
              className="py-2 pr-4 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft"
            >
              Gambar terdeteksi
            </th>
            <th
              scope="col"
              className="py-2 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.part}
              className={`border-b border-ink/15 last:border-0 ${r.same ? '' : 'bg-accent-soft/60'}`}
            >
              <td className="py-3 pr-4 font-semibold">{r.part}</td>
              <td className="py-3 pr-4 text-ink/70">{r.source}</td>
              <td className="py-3 pr-4">
                {r.same ? (
                  r.detected
                ) : (
                  <span className="hl font-semibold text-accent-ink">{r.detected}</span>
                )}
              </td>
              <td className="py-3">
                {r.same ? (
                  <span className="inline-block border border-ink/40 px-2 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
                    Sama
                  </span>
                ) : (
                  <span className="inline-block border border-accent bg-accent px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-paper">
                    Berbeda
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
