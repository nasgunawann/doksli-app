import { useEffect, useState } from 'react'
import { pipelineStages } from '../data/dummy'

type Props = {
  image: { url: string; name: string }
  onDone: () => void
}

const STAGE_MS = 800

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path
        d="M4 10l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check-path"
      />
    </svg>
  )
}

export default function ProcessingStep({ image, onDone }: Props) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const tick = setInterval(() => {
      setCurrent((c) => Math.min(c + 1, pipelineStages.length - 1))
    }, STAGE_MS)
    const done = setTimeout(onDone, pipelineStages.length * STAGE_MS)
    return () => {
      clearInterval(tick)
      clearTimeout(done)
    }
  }, [onDone])

  const progress = (current / (pipelineStages.length - 1)) * 100

  return (
    <div className="reveal space-y-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
      <h1 className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl lg:col-span-2">
        Memeriksa gambar
      </h1>

      <figure className="relative overflow-hidden border-2 border-ink bg-white lg:col-start-1 lg:row-start-2">
        <img
          src={image.url}
          alt="Gambar yang sedang diperiksa"
          className="block w-full"
        />
        <span aria-hidden="true" className="scan-beam pointer-events-none absolute inset-0" />
      </figure>

      <div className="lg:col-start-2 lg:row-start-2 lg:self-center">
        <div
          role="progressbar"
          aria-label="Kemajuan pemeriksaan"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-1.5 bg-ink/10"
        >
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ol aria-label="Tahap pemeriksaan" className="mt-2">
          {pipelineStages.map((label, i) => {
            const done = i < current
            const active = i === current
            return (
              <li
                key={label}
                className="flex items-center gap-3 border-b border-ink/15 py-3"
              >
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center"
                  aria-hidden="true"
                >
                  {done ? (
                    <span className="text-primary-strong">
                      <CheckIcon />
                    </span>
                  ) : active ? (
                    <span className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent motion-safe:animate-spin" />
                  ) : (
                    <span className="font-display text-lg font-black text-ink/35">
                      {i + 1}
                    </span>
                  )}
                </span>
                <span className={done ? 'text-ink/60' : 'font-semibold'}>
                  {label}
                </span>
                <span
                  className={`ml-auto font-heading text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    done
                      ? 'text-primary-strong'
                      : active
                        ? 'text-accent-ink'
                        : 'text-ink/40'
                  }`}
                >
                  {done ? 'Selesai' : active ? 'Diproses' : 'Menunggu'}
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
