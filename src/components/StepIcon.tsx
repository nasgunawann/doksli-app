export type StepIconName = 'upload' | 'ocr' | 'visual' | 'search' | 'compare'

function UploadIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="icon-bob h-8 w-8">
      <path
        d="M7 26h18"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 20V6"
        stroke="var(--color-primary-strong)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 11l6-6 6 6"
        stroke="var(--color-primary-strong)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function OcrIcon() {
  return (
    <div className="relative h-8 w-8 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect x="5" y="6" width="22" height="5" fill="var(--color-ink)" opacity="0.3" />
        <rect x="5" y="15" width="16" height="3" fill="var(--color-ink)" opacity="0.45" />
        <rect x="5" y="22" width="22" height="3" fill="var(--color-ink)" opacity="0.45" />
      </svg>
      <div className="scan-beam absolute inset-0" />
    </div>
  )
}

function VisualIcon() {
  return (
    <div className="relative h-8 w-8" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect
          x="4"
          y="6"
          width="24"
          height="20"
          stroke="var(--color-ink)"
          strokeWidth="2"
        />
        <path
          d="M8 19l4.5-4.5 3.5 3.5 3-3 5 5"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          opacity="0.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="pulse-ring absolute left-[13px] top-[9px] h-[14px] w-[14px] border-2 border-dashed border-accent bg-accent-soft/40" />
    </div>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="icon-bob h-8 w-8">
      <circle
        cx="13"
        cy="13"
        r="7.5"
        stroke="var(--color-primary-strong)"
        strokeWidth="2.5"
      />
      <path
        d="M19 19l7 7"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="13" cy="13" r="1.6" fill="var(--color-accent)" />
    </svg>
  )
}

function CompareIcon() {
  return (
    <div className="relative h-8 w-8" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect x="5" y="8" width="22" height="4" fill="var(--color-ink)" opacity="0.3" />
        <rect x="5" y="20" width="10" height="4" fill="var(--color-ink)" opacity="0.45" />
      </svg>
      <div className="pulse-ring absolute left-[15px] top-[20px] h-[4px] w-[12px] bg-accent" />
    </div>
  )
}

const ICONS: Record<StepIconName, () => JSX.Element> = {
  upload: UploadIcon,
  ocr: OcrIcon,
  visual: VisualIcon,
  search: SearchIcon,
  compare: CompareIcon,
}

export default function StepIcon({ name }: { name: StepIconName }) {
  const Icon = ICONS[name]
  return <Icon />
}
