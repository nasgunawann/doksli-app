export const pipelineStages = [
  'Membaca teks pada gambar (OCR)',
  'Menganalisis elemen visual',
  'Mencari kandidat sumber pembanding',
  'Membandingkan teks dan visual',
]

export const demoImage = {
  src: '/timpa.jpg',
  alt: 'Konten berita parodi dengan judul "Hercules Siap Kirim Ojol HP BARU Jika Menyerang Rumah dan Kantor Ormas"',
  aspect: 1080 / 1531,
}

// ponytail: koordinat dari OCR nyata (Windows.Media.Ocr) atas timpa.jpg 1080x1531,
// frasa "HP BARU" x 309-791 px, y 895-1015 px. Disimpan dalam ruang gambar asli;
// ImageWithBoxes menggeser ke ruang contain dalam kontainer persegi.
export const tamperBox = {
  left: 27,
  top: 58.4,
  width: 48,
  height: 7.8,
  label: 'DIMANIPULASI',
}

export const tamperedPhrase = 'HP BARU'

export const detectedTextParts = [
  'Hercules Siap Kirim Ojol ',
  'HP BARU',
  ' Jika Menyerang Rumah dan Kantor Ormas',
]

export const detectedText = detectedTextParts.join('')

export const sourceImage = {
  src: '/doksli.png',
  alt: 'Kandidat sumber pembanding dengan judul "Hercules siap kirim Ojol ke Neraka jika menyerang Rumah dan Kantor Grib"',
  headline: 'Hercules siap kirim Ojol ke Neraka jika menyerang Rumah dan Kantor Grib',
  origin: 'Unggahan Instagram voxarea, klarifikasi pernyataan Ketua Umum GRIB Jaya, September 2026',
  url: 'https://www.instagram.com/p/Dcu9y-7EU9Q/',
  clarificationUrl: 'https://www.youtube.com/watch?v=Epdl49E1ABw',
}

// ponytail: hasil gambar mirip ala reverse image search. Sumber asli cuma 2 aset
// (timpa.jpg yang diperiksa, doksli.png pembanding), jadi entri lain pakai ulang
// aset itu dengan konteks situs berbeda — realistis: versi manipulasi ikut beredar
// di banyak kanal, sedangkan sumber asli muncul sebagai kecocokan terkuat.
export const visualMatches = [
  {
    src: sourceImage.src,
    site: 'Instagram',
    title: 'Unggahan Instagram voxarea',
    display: 'instagram.com › voxarea',
    url: sourceImage.url,
    best: true,
    faviconBg: '#e1306c',
  },
  {
    src: sourceImage.src,
    site: 'YouTube',
    title: 'Klarifikasi Hercules di TribunNews',
    display: 'youtube.com › watch',
    url: sourceImage.clarificationUrl,
    faviconBg: '#e02020',
  },
  {
    src: demoImage.src,
    site: 'X',
    title: 'Unggahan @voxarea — versi yang beredar',
    display: 'x.com › voxarea',
    url: 'https://x.com/',
    faviconBg: '#1c1b18',
  },
  {
    src: demoImage.src,
    site: 'Lampung Post',
    title: 'Artikel pakai versi "HP BARU"',
    display: 'lampungpost.com › nasional',
    url: 'https://www.lampungpost.com/',
    faviconBg: '#0f766e',
  },
  {
    src: demoImage.src,
    site: 'Facebook',
    title: 'Sebaran di grup Ormas',
    display: 'facebook.com › groups',
    url: 'https://www.facebook.com/',
    faviconBg: '#1877f2',
  },
  {
    src: demoImage.src,
    site: 'Kaskus',
    title: 'Diskusi klaim di forum',
    display: 'kaskus.co.id › thread',
    url: 'https://www.kaskus.co.id/',
    faviconBg: '#6b675e',
  },
]

export const diffRows = [
  {
    part: 'Pembuka',
    source: 'Hercules siap kirim Ojol',
    detected: 'Hercules Siap Kirim Ojol',
    same: true,
  },
  {
    part: 'Frasa aksi',
    source: 'ke Neraka',
    detected: 'HP BARU',
    same: false,
  },
  {
    part: 'Penutup',
    source: 'jika menyerang Rumah dan Kantor Grib',
    detected: 'Jika Menyerang Rumah dan Kantor Ormas',
    same: false,
  },
]

export const disclaimer =
  'Hasil ini adalah bantuan awal untuk pemeriksaan dan tetap memerlukan penilaian kritis pengguna.'
