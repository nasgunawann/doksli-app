import { useState } from 'react'
import Landing from './components/Landing'
import UploadStep from './components/UploadStep'
import ProcessingStep from './components/ProcessingStep'
import ResultStep from './components/ResultStep'
import { detectedText, tamperedPhrase } from './data/dummy'

type Step = 'landing' | 'upload' | 'processing' | 'result'

type ImageInfo = {
  url: string
  name: string
  isExample: boolean
}

export default function App() {
  const [step, setStep] = useState<Step>('landing')
  const [image, setImage] = useState<ImageInfo | null>(null)

  const startWith = (img: ImageInfo) => {
    setImage(img)
    setStep('processing')
  }

  if (import.meta.env.DEV) {
    console.assert(
      detectedText.includes(tamperedPhrase),
      'dummy.ts: teks terdeteksi harus memuat frasa yang ditandai',
    )
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-2xl items-baseline justify-between px-4 py-3.5 lg:max-w-4xl">
          <p className="font-display text-2xl font-black tracking-tight text-ink">
            Doksli<span className="text-accent">.</span>
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8 lg:max-w-4xl lg:py-12">
        {step === 'landing' && (
          <Landing
            onImage={startWith}
            onDemo={() =>
              startWith({ url: '/timpa.jpg', name: 'timpa.jpg', isExample: true })
            }
          />
        )}

        {step === 'upload' && <UploadStep onImage={startWith} />}

        {step === 'processing' && image && (
          <ProcessingStep image={image} onDone={() => setStep('result')} />
        )}

        {step === 'result' && image && (
          <ResultStep
            image={image}
            onRestart={() => {
              setImage(null)
              setStep('upload')
            }}
          />
        )}
      </main>
    </div>
  )
}
