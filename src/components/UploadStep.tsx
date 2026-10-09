import { useRef, useState } from 'react'

type ImageInfo = {
  url: string
  name: string
  isExample: boolean
}

type Props = {
  onImage: (img: ImageInfo) => void
}

export default function UploadStep({ onImage }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)

  const handleFile = (file: File | undefined | null) => {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('File harus berupa gambar (JPG, PNG, atau WebP).')
      return
    }
    setError('')
    onImage({ url: URL.createObjectURL(file), name: file.name, isExample: false })
  }

  const openPicker = () => inputRef.current?.click()

  return (
    <div className="reveal space-y-8 lg:max-w-3xl">
      <div>
        <h1 className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Unggah gambar
        </h1>
        <p className="mt-3 leading-relaxed text-ink/75">
          Pilih gambar dari perangkat, atau coba contoh timpa teks yang sudah
          disediakan.
        </p>
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-label="Pilih atau jatuhkan gambar ke area ini"
        onClick={openPicker}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') openPicker()
        }}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          handleFile(e.dataTransfer.files[0])
        }}
        className={`btn-hard cursor-pointer rounded-none border-2 p-10 text-center ${
          dragOver
            ? 'border-ink bg-ink text-paper'
            : 'border-ink bg-white text-ink hover:-translate-y-0.5'
        }`}
      >
        <svg
          viewBox="0 0 48 48"
          className="mx-auto h-12 w-12"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="7" width="38" height="34" rx="2" />
          <circle cx="17" cy="19" r="4" />
          <path d="M5 34l10-9 8 7 7-6 13 11" />
        </svg>
        <p className="mt-4 font-heading font-semibold">
          Jatuhkan gambar di sini, atau ketuk untuk memilih file.
        </p>
        <p className={`mt-1 text-sm ${dragOver ? 'text-paper/70' : 'text-ink-soft'}`}>
          JPG, PNG, atau WebP.
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {error && (
        <p
          role="alert"
          className="border-l-4 border-accent bg-accent-soft px-4 py-2 text-sm font-semibold text-accent-ink"
        >
          {error}
        </p>
      )}

      <div className="border-t-2 border-ink pt-8">
        <button
          onClick={() =>
            onImage({ url: '/timpa.jpg', name: 'timpa.jpg', isExample: true })
          }
          className="btn-hard flex w-full items-center gap-4 rounded-none border-2 border-ink bg-white p-3 text-left sm:w-auto"
        >
          <img
            src="/timpa.jpg"
            alt=""
            className="h-16 w-24 shrink-0 border border-ink/20 object-cover"
          />
          <span className="font-heading font-semibold text-ink">
            Coba contoh timpa teks
          </span>
        </button>
      </div>
    </div>
  )
}
