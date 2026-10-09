import { useRef, useState } from 'react'
import TabayyunSection from './TabayyunSection'
import HeroMockup from './HeroMockup'
import StepIcon, { type StepIconName } from './StepIcon'

type ImageInfo = {
  url: string
  name: string
  isExample: boolean
}

type Props = {
  onImage: (img: ImageInfo) => void
  onDemo: () => void
}

const steps: { icon: StepIconName; text: string }[] = [
  { icon: 'upload', text: 'Unggah gambar yang ingin diperiksa.' },
  { icon: 'ocr', text: 'Doksli membaca teks pada gambar (OCR).' },
  { icon: 'visual', text: 'Doksli menganalisis elemen visual gambar.' },
  { icon: 'search', text: 'Doksli mencari kandidat sumber pembanding.' },
  { icon: 'compare', text: 'Teks dan visual dibandingkan, lalu indikasinya ditampilkan.' },
]

export default function Landing({ onImage, onDemo }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')

  const openPicker = () => inputRef.current?.click()

  const handleFile = (file: File | undefined | null) => {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('File harus berupa gambar (JPG, PNG, atau WebP).')
      return
    }
    setError('')
    onImage({ url: URL.createObjectURL(file), name: file.name, isExample: false })
  }

  return (
    <div className="space-y-14">
      <section className="reveal grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Cek indikasi{' '}
            <span className="hl-sweep whitespace-nowrap text-accent-ink italic">
              timpa teks
            </span>{' '}
            pada gambar
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
            Unggah gambar yang perlu diperiksa. Doksli membaca teksnya, mencari sumber
            pembanding, lalu menampilkan indikasi jika teksnya berbeda dari sumbernya.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={openPicker}
              className="btn-hard w-full rounded-none border-2 border-ink bg-ink px-7 py-3.5 font-heading text-lg font-semibold text-paper sm:w-auto"
            >
              Unggah gambar
            </button>
            <button
              onClick={onDemo}
              className="btn-hard w-full rounded-none border-2 border-ink bg-white px-7 py-3.5 font-heading text-lg font-semibold text-ink sm:w-auto"
            >
              Coba demo
            </button>
          </div>
          {error && (
            <p
              role="alert"
              className="mt-4 border-l-4 border-accent bg-accent-soft px-4 py-2 text-sm font-semibold text-accent-ink"
            >
              {error}
            </p>
          )}
          <p className="mt-4 text-sm text-ink-soft">
            Hasil berupa indikasi yang perlu diperiksa, bukan vonis akhir.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <HeroMockup />
        </div>
      </section>

      <section className="reveal">
        <h2 className="font-display text-3xl font-black tracking-tight text-ink">
          Cara kerja
        </h2>
        <ol className="reveal-list mt-6">
          {steps.map((step, i) => (
            <li
              key={step.text}
              className="flex items-center gap-4 border-t border-ink/15 py-4 last:border-b sm:gap-5"
            >
              <span
                aria-hidden="true"
                className="w-12 shrink-0 font-display text-3xl font-black text-primary-strong"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center"
              >
                <StepIcon name={step.icon} />
              </span>
              <span className="text-lg leading-snug">{step.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <TabayyunSection />

      <section className="reveal border-2 border-ink bg-ink p-8 text-center sm:p-12">
        <h2 className="font-display text-3xl font-black tracking-tight text-paper sm:text-4xl">
          Punya gambar yang patut diteliti?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-paper/75">
          Periksa sekarang, sebelum ikut menyebarkannya.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={openPicker}
            className="btn-hard w-full rounded-none border-2 border-paper bg-paper px-7 py-3.5 font-heading text-lg font-semibold text-ink sm:w-auto"
          >
            Unggah gambar
          </button>
          <button
            onClick={onDemo}
            className="btn-hard w-full rounded-none border-2 border-paper bg-transparent px-7 py-3.5 font-heading text-lg font-semibold text-paper sm:w-auto"
          >
            Coba demo
          </button>
        </div>
      </section>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  )
}
