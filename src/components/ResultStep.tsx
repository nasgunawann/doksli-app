import {
  demoImage,
  detectedTextParts,
  diffRows,
  disclaimer,
  tamperBox,
  tamperedPhrase,
} from '../data/dummy'
import DiffTable from './DiffTable'
import ImageWithBoxes from './ImageWithBoxes'
import VerdictBadge from './VerdictBadge'
import VisualMatches from './VisualMatches'

type Props = {
  image: { url: string; name: string; isExample: boolean }
  onRestart: () => void
}

export default function ResultStep({ image, onRestart }: Props) {
  return (
    <div className="space-y-10">
      <header className="reveal lg:max-w-3xl">
        <h1 className="border-b-4 border-ink pb-3 font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Hasil pemeriksaan
        </h1>
        <p className="mt-3 text-ink/70">
          Contoh hasil dengan data contoh, bukan analisis sungguhan.
        </p>
      </header>

      {!image.isExample && (
        <p
          role="note"
          className="reveal border-l-4 border-primary bg-primary-soft p-4 text-sm leading-relaxed lg:max-w-3xl"
        >
          Gambar Anda ({image.name}) belum bisa dianalisis sungguhan oleh prototipe
          ini. Hasil di bawah merujuk gambar contoh yang sudah tersedia.
        </p>
      )}

      <div className="reveal grid gap-8 lg:grid-cols-2">
        <ImageWithBoxes
          src={demoImage.src}
          alt={demoImage.alt}
          aspect={demoImage.aspect}
          boxes={[tamperBox]}
          title="Gambar yang diperiksa"
          description="Frasa bertanda aksen menandai teks yang terindikasi berbeda dari sumber pembanding."
        />

        <section className="border-2 border-ink bg-white p-6">
          <div className="space-y-8">
            <VerdictBadge phrase={tamperedPhrase} />

            <section>
              <h2 className="font-display text-xl font-black tracking-tight text-ink">
                Teks yang terbaca dari gambar
              </h2>
              <p className="mt-3 border-2 border-ink bg-white p-4 leading-relaxed">
                {detectedTextParts[0]}
                <mark className="hl font-semibold text-accent-ink">
                  {detectedTextParts[1]}
                </mark>
                {detectedTextParts[2]}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-black tracking-tight text-ink">
                Perbandingan teks
              </h2>
              <div className="mt-3">
                <DiffTable rows={diffRows} />
              </div>
            </section>
          </div>
        </section>
      </div>

      <VisualMatches />

      <section
        role="note"
        className="reveal border-2 border-dashed border-accent-ink/50 bg-accent-soft/60 p-5"
      >
        <h2 className="font-display text-lg font-black text-accent-ink">Disclaimer</h2>
        <p className="mt-1 leading-relaxed text-accent-ink">
          {disclaimer} Sistem menampilkan indikasi dan bukti pembanding, bukan vonis.
          Keputusan akhir tetap milik Anda.
        </p>
      </section>

      <div className="reveal">
        <button
          onClick={onRestart}
          className="btn-hard w-full rounded-none border-2 border-ink bg-ink px-6 py-3 font-heading font-semibold text-paper sm:w-auto"
        >
          Periksa gambar lain
        </button>
      </div>
    </div>
  )
}
