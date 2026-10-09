import TabayyunSection from './TabayyunSection'
import ImageWithBoxes from './ImageWithBoxes'
import { demoImage, tamperBox } from '../data/dummy'

const steps = [
  'Unggah gambar yang ingin diperiksa.',
  'Doksli membaca teks pada gambar (OCR).',
  'Doksli menganalisis elemen visual gambar.',
  'Doksli mencari kandidat sumber pembanding.',
  'Teks dan visual dibandingkan, lalu indikasinya ditampilkan.',
]

export default function Landing({ onStart }: { onStart: () => void }) {
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
          <button
            onClick={onStart}
            className="btn-hard mt-8 w-full rounded-none border-2 border-ink bg-ink px-7 py-3.5 font-heading text-lg font-semibold text-paper sm:w-auto"
          >
            Periksa gambar
          </button>
          <p className="mt-4 text-sm text-ink-soft">
            Hasil berupa indikasi yang perlu diperiksa, bukan vonis akhir.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <ImageWithBoxes
            src={demoImage.src}
            alt={demoImage.alt}
            aspect={demoImage.aspect}
            boxes={[tamperBox]}
            title="Contoh indikasi"
            description="Kotak menandai frasa yang tidak ada pada sumber aslinya."
          />
        </div>
      </section>

      <section className="reveal">
        <h2 className="font-display text-3xl font-black tracking-tight text-ink">
          Cara kerja
        </h2>
        <ol className="reveal-list mt-6">
          {steps.map((step, i) => (
            <li
              key={step}
              className="flex items-baseline gap-5 border-t border-ink/15 py-4 last:border-b"
            >
              <span
                aria-hidden="true"
                className="w-12 shrink-0 font-display text-3xl font-black text-primary-strong"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-lg leading-snug">{step}</span>
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
        <button
          onClick={onStart}
          className="btn-hard mt-7 w-full rounded-none border-2 border-paper bg-paper px-7 py-3.5 font-heading text-lg font-semibold text-ink sm:w-auto"
        >
          Periksa gambar
        </button>
      </section>
    </div>
  )
}
