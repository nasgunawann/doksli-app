# DOKSLI — Dokumentasi Mockup

> **Doksli (Deteksi Konten Asli):** Deteksi Indikasi Manipulasi Teks pada Gambar
> Digital melalui Pendekatan Multimodal Berbasis Vision-Language Model dan OCR
> sebagai Aktualisasi Nilai Tabayyun.
>
> Dokumen ini adalah dokumentasi lengkap mockup klikabel Doksli untuk lomba
> karya tulis ilmiah (KTI). Mencakup konteks, tujuan, alur, design system,
> data dummy, cara menjalankan, dan roadmap lanjutan.

---

## 1. Ringkasan Proyek

Doksli adalah gagasan sistem bantu verifikasi konten digital yang dirancang
untuk memeriksa indikasi **timpa teks** (penambahan/pengubahan teks pada gambar
sehingga maknanya bergeser) pada gambar digital. Sistem menggabungkan tiga
komponen: analisis visual, ekstraksi teks (OCR), dan pencarian serta pencocokan
dengan sumber pembanding.

Repo ini berisi **mockup klikabel** dari Doksli: antarmuka berjalan penuh dan
dapat didemokan, dengan hasil deteksi menggunakan **data dummy** (tanpa OCR/VLM
asli). Tujuannya agar juri dapat melihat dan mencoba pengalaman produk tanpa
perlu infrastruktur model.

---

## 2. Konteks & Latar Belakang

Perkembangan media digital mempermudah penyebaran informasi sekaligus
meningkatkan penyebaran hoaks di Indonesia.

- Mafindo mencatat **2.119 hoaks** pada semester pertama 2024, dengan **31,6%**
  di antaranya berkaitan dengan Pemilu.
- Kementerian Komunikasi dan Informatika mencatat **2.882 konten hoaks Pemilu
  2024** yang berasal dari **203 isu** hoaks.
- Pemerintah menyediakan moderasi konten dan kanal aduan (aduankonten.id);
  Mafindo dan lembaga pemeriksa fakta melakukan verifikasi serta literasi
  digital. Namun deteksi manipulasi visual yang cepat dan halus tetap menjadi
  tantangan.

**Timpa teks** adalah manipulasi dengan menambahkan, mengubah, atau mengganti
informasi tekstual pada gambar tanpa mengubah keseluruhan elemen visualnya.
Manipulasi dapat menyasar judul berita, nama tokoh, tanggal, lokasi, kutipan,
atau keterangan pada foto/screenshot. Akibatnya, gambar yang secara visual
tampak autentik dapat menghasilkan makna yang berbeda.

Penelitian menunjukkan screenshot sering diperlakukan sebagai bukti visual yang
kredibel meskipun dapat diedit (Inwood & Zappavigna, 2024). Kajian disinformasi
multimodal menunjukkan elemen gambar dan teks bekerja bersama membangun narasi
yang tampak autentik (Comito et al., 2023). Dengan demikian, keaslian gambar
tidak otomatis menjamin kebenaran informasi yang menyertainya.

Karena itu, deteksi timpa teks tidak cukup hanya melihat perubahan visual secara
keseluruhan. Analisis visual perlu dilengkapi ekstraksi teks dan pembandingan
terhadap sumber relevan agar ketidaksesuaian dapat diperiksa sistematis
(Abdali et al., 2021; Comito et al., 2023).

---

## 3. Dasar Etis — Tabayyun

Upaya teknis Doksli berpijak pada prinsip **tabayyun** dalam Islam.

**QS. Al-Hujurat [49]: 6** memerintahkan umat Islam untuk meneliti kebenaran
berita sebelum mempercayai atau menyebarkannya. Kata *fatabayyan* menunjukkan
adanya proses memperoleh kejelasan terhadap informasi, sehingga berita tidak
diterima hanya berdasarkan kesan, tampilan, atau klaim pihak penyampai.

Prinsip ini diperkuat **QS. Al-Isra' [17]: 36** tentang **tawaqquf** — menahan
diri dari mengikuti sesuatu yang belum diketahui kebenarannya. Tawaqquf adalah
sikap awal untuk tidak terburu-buru percaya, sedangkan tabayyun adalah proses
aktif memperoleh kepastian sebelum informasi dijadikan dasar tindakan.

Hemat tafsir:

- Quraish Shihab (2002): ayat tersebut menjadi pedoman hidup sosial berdasarkan
  informasi yang jelas dan dapat dipertanggungjawabkan.
- Sayyid Qutb (2003): larangan mengikuti sesuatu tanpa pengetahuan mencakup
  berita maupun penilaian terhadap peristiwa.
- Kajian digital tabayyun (Asfar et al., 2024; Zhahira & Nurrohim, 2026;
  Syafiq & Mundhir, 2026) menempatkan pemeriksaan kredibilitas sumber,
  klarifikasi, validasi fakta, dan tanggung jawab moral sebagai bagian
  penerapan tabayyun di ruang digital, termasuk terhadap manipulasi visual dan
  deepfake.

Doksli diposisikan sebagai **instrumen tabayyun digital**: teknologi yang
membantu manusia menerapkan nilai Al-Qur'an dalam menghadapi informasi digital,
bukan pengganti penilaian manusia.

---

## 4. Tujuan

1. Menyediakan **mockup klikabel** Doksli untuk keperluan demo pada lomba KTI.
2. Menunjukkan pengalaman pengguna verifikasi gambar secara mandiri: baca teks →
   cari sumber pembanding → bandingkan → tampilkan indikasi.
3. Mengaktualisasikan nilai tabayyun (QS. Al-Hujurat [49]: 6) menjadi produk
   digital yang dapat dilihat dan dicoba.
4. Menjadi bahan visual pendukung esai (slide/demo) tanpa bergantung pada model
   AI asli.

---

## 5. Ruang Lingkup & Batasan

**Termasuk:**

- Antarmuka klikabel berjalan penuh (landing, upload, proses, hasil).
- Simulasi pipeline 4 tahap dan hasil deteksi memakai **data dummy**.
- Satu skenario hasil: **"Indikasi timpa teks"**.
- Light mode, mobile-first, tetap rapi di desktop.
- Dokumentasi ini.

**Tidak termasuk (sengaja dibatasi):**

- OCR/VLM/backend asli.
- Reverse image search nyata.
- Dua state hasil lain dari esai ("tidak ada perbedaan", "belum dapat
  diverifikasi") — lihat Roadmap.
- Autentikasi, penyimpanan riwayat, dark mode, router multi-halaman.

Hasil pada mockup diberi label **contoh/dummy** agar jujur: ini prototipe, bukan
sistem produksi.

---

## 6. Prinsip Etis Produk

Prinsip berikut wajib tercermin di antarmuka, bukan sekadar dokumen:

1. **Hasil = indikasi, bukan vonis.** Sistem tidak menyimpulkan gambar pasti
   asli atau pasti palsu; ia menampilkan indikasi yang harus diperiksa.
2. **Disclaimer selalu tampil** di layar hasil: "Hasil ini adalah bantuan awal
   untuk pemeriksaan dan tetap memerlukan penilaian kritis pengguna."
3. **Transparansi sumber.** Sumber pembanding ditampilkan beserta keterbatasannya;
   kandidat sumber tidak langsung dianggap dokumentasi asli.
4. **Bahasa hati-hati.** Gunakan "indikasi", "terdeteksi", "perlu diperiksa
   lebih lanjut" — hindari "pasti", "terbukti".

---

## 7. Arsitektur Teknis

**Stack:** Vite + React + TypeScript + Tailwind CSS. Light mode, mobile-first.
Tidak ada router, state library, atau backend.

**Tooling:** Node.js v24, npm v11.

**Struktur folder:**

```
doksli-app/
├─ DOKUMENTASI.md            # dokumen ini
├─ index.html                 # font Lexend + Source Sans 3 via Google Fonts
├─ package.json
├─ tsconfig.json
├─ vite.config.ts             # plugin React + Tailwind v4 (@tailwindcss/vite)
├─ public/
│  ├─ timpa.jpg              # gambar contoh (manipulasi)
│  └─ doksli.png             # gambar sumber pembanding (asli)
├─ src/
│  ├─ main.tsx               # entry
│  ├─ App.tsx                # state machine wizard
│  ├─ index.css              # token desain (@theme Tailwind v4)
│  ├─ vite-env.d.ts
│  ├─ data/
│  │  └─ dummy.ts            # seluruh data dummy
│  └─ components/
│     ├─ Landing.tsx
│     ├─ UploadStep.tsx
│     ├─ ProcessingStep.tsx
│     ├─ ResultStep.tsx
│     ├─ TabayyunSection.tsx
│     ├─ VerdictBadge.tsx
│     ├─ DiffTable.tsx
│     ├─ SourceCard.tsx
│     └─ ImageWithBoxes.tsx
```

Catatan: memakai Tailwind v4 lewat plugin `@tailwindcss/vite`; tidak ada
`tailwind.config.js`/`postcss.config.js` (token lewat `@theme` di `index.css`).

**State wizard** (`App.tsx`): `step` ∈ {`landing`, `upload`, `processing`,
`result`}. Tombol "Coba contoh" me-load `public/timpa.jpg`, pindah ke
`processing`, jalankan timer tahap (~3 dtk), lalu ke `result`.

---

## 8. Design System

Palet dan tipografi diambil dari rekomendasi UI-UX design system, dikurasi
dengan aturan anti-slop (hindari default AI).

**Warna:**

| Peran       | Nilai     | Catatan                                   |
|-------------|-----------|-------------------------------------------|
| Primary     | `#0D9488` | teal — identitas, tombol utama            |
| Secondary   | `#14B8A6` | teal terang — aksen sekunder              |
| Accent/CTA  | `#F97316` | oranye — khusus penanda verdict/peringatan|
| Background  | `#F0FDFA` | teal sangat muda                          |
| Text        | `#134E4A` | teks utama                                |
| Netral      | slate     | border, teks sekunder                     |

**Tipografi:** Lexend (heading) + Source Sans 3 (body). Keduanya bukan font
default AI (bukan Inter/Geist/Space Grotesk) dan cocok untuk kesan tepercaya,
terbaca, dan aksesibel.

**Aturan dosis (anti-slop):**

- Satu accent saja (oranye hanya untuk verdict), tidak disebar ke semua elemen.
- Radius terbatas: CTA boleh besar, komponen lain kecil. Tidak semua pill.
- Shadow hanya sebagai penanda elevasi nyata, bukan default tiap kartu.
- Tanpa glassmorphism, glow, background grid, emoji sebagai ikon, atau badge
  eyebrow di atas headline.
- Motion hanya di layar proses (bukan loop tanpa henti).

---

## 9. Alur Pengguna

Esai mendefinisikan 5 langkah mekanisme kerja Doksli. Mockup memetakannya ke
wizard 4 layar:

| Langkah esai                                    | Layar mockup      |
|-------------------------------------------------|-------------------|
| 1. Mengunggah gambar                            | **Upload**        |
| 2. Membaca & menganalisis gambar (OCR + visual) | **Proses**        |
| 3. Mencari kandidat sumber pembanding           | **Proses**        |
| 4. Membandingkan teks & informasi visual        | **Proses**        |
| 5. Menampilkan hasil pemeriksaan                | **Hasil**         |

Pintu masuk: **Landing** (brand, cara kerja, tabayyun) → CTA ke Upload.

---

## 10. Detail Tiap Layar

Tata letak responsif: mobile satu kolom; di layar ≥1024px kontainer melebar ke
`max-w-4xl` dan **Hasil serta Proses menjadi dua kolom** (kiri: gambar terdeteksi +
verdict + teks OCR; kanan: sumber pembanding + tabel diff + disclaimer) agar
perbandingan terlihat sekali pandang. Landing dan Unggah tetap satu kolom
(`max-w-3xl`) karena naratif dan isinya pendek.

### 10.1 Landing

- Brand **Doksli** + tagline (Deteksi Konten Asli).
- CTA utama: "Periksa gambar".
- Bagian **Cara kerja** — 5 langkah esai (bukan template "3 langkah"):
  upload → baca/analisis → cari sumber → bandingkan → tampilkan hasil.
- Bagian **Tabayyun** — kutipan QS. Al-Hujurat [49]: 6 dan tawaqquf sebagai
  landasan etis; menegaskan Doksli sebagai instrumen tabayyun digital.

### 10.2 Upload

- Dropzone untuk drag/drop gambar, plus tombol pilih file.
- Tombol **"Coba contoh"** yang me-load `public/timpa.jpg`.
- Gambar apa pun yang diunggah tetap melewati pipeline dummy dan berakhir pada
  hasil "Indikasi timpa teks" (diberi label contoh).

### 10.3 Proses

- Checklist 4 tahap beranimasi sesuai esai: (1) Membaca teks (OCR) →
  (2) Analisis visual → (3) Mencari sumber pembanding → (4) Membandingkan.
- Durasi total ±3 detik, lalu otomatis pindah ke Hasil.
- Motion dihormati `prefers-reduced-motion`.

### 10.4 Hasil

- Gambar yang diunggah dengan **bounding box** menyorot area `HP BARU`.
- **VerdictBadge:** "Indikasi timpa teks ditemukan".
- **Teks OCR terdeteksi** dari gambar.
- **SourceCard:** kandidat sumber pembanding (`doksli.png`) dengan teks asli
  "Hercules siap kirim Ojol ke Neraka…".
- **DiffTable:** perbedaan teks asli vs terdeteksi (contoh: "ke Neraka" →
  "HP BARU").
- **Disclaimer** wajib: hasil adalah bantuan awal, perlu penilaian kritis.

---

## 11. Data Dummy

Seluruhnya di `src/data/dummy.ts`. Contoh gambar: `timpa.jpg` (manipulasi) vs
`doksli.png` (asli).

**Teks OCR pada gambar terdeteksi (dummy):**

> Hercules Siap Kirim Ojol **HP BARU** Jika Menyerang Rumah dan Kantor Ormas

**Teks pada sumber pembanding (dummy, dari `doksli.png`):**

> Hercules siap kirim Ojol **ke Neraka** jika menyerang Rumah dan Kantor Grib

**Bounding box** (koordinat relatif terhadap gambar, persen dari lebar/tinggi)
menyorot frasa "HP BARU" pada baris kedua teks besar. Koordinat diukur dengan OCR
nyata (Windows.Media.Ocr) atas `timpa.jpg` 1080x1531: kata "HP" di x=309, "BARU" di
x=490, y≈912-998 px, lalu dibulatkan ke persen.

**Baris diff:**

| Elemen    | Sumber pembanding | Gambar terdeteksi | Status       |
|-----------|-------------------|-------------------|--------------|
| Pembuka   | "Hercules siap kirim Ojol" | "Hercules Siap Kirim Ojol" | Sama |
| Frasa aksi| "ke Neraka"       | "HP BARU"         | Berbeda      |
| Penutup   | "jika menyerang Rumah dan Kantor Grib" | "Jika Menyerang Rumah dan Kantor Ormas" | Berbeda |

Catatan: `timpa.jpg` dan `doksli.png` adalah contoh nyata fenomena timpa teks
dari media sosial (kreator parodi "yujinntimpa"/"kasitau.initimpa"), dipakai
murni sebagai bahan demo.

---

## 12. Skenario Demo (untuk Juri)

1. Buka Landing. Jelaskan Doksli + dasar tabayyun (QS. Al-Hujurat 6).
2. Klik "Periksa gambar" → masuk Upload.
3. Klik **"Coba contoh"** → `timpa.jpg` termuat.
4. Amati layar Proses: 4 tahap berjalan berurutan.
5. Layar Hasil muncul: bounding box menandai "HP BARU", verdict indikasi,
   tabel diff menampilkan perubahan dari "ke Neraka".
6. Tunjukkan SourceCard dan disclaimer: sistem menunjukkan indikasi + bukti
   pembanding, bukan menghakimi; pengguna tetap menilai.

---

## 13. Menjalankan & Build

```bash
npm install      # pasang dependensi
npm run dev      # jalankan dev server (default http://localhost:5173)
npm run build    # build produksi ke dist/
npm run preview  # pratinjau hasil build
```

---

## 14. Kriteria Verifikasi

Mockup dianggap selesai bila:

- [ ] Alur Landing → Upload → Proses → Hasil berjalan tanpa error.
- [ ] "Coba contoh" memuat `timpa.jpg` dan menghasilkan layar Hasil.
- [ ] Bounding box muncul di area teks yang dimanipulasi.
- [ ] Verdict, teks OCR, SourceCard, DiffTable, dan disclaimer tampil.
- [ ] Light mode konsisten; tidak ada emoji-ikon/grid/glow/eyebrow-badge.
- [ ] Kontras teks ≥ 4.5:1; focus state keyboard terlihat.
- [ ] `prefers-reduced-motion` dihormati.
- [ ] Responsif di 375px, 768px, 1024px; tanpa scroll horizontal.
- [ ] `npm run build` sukses tanpa error TypeScript.

---

## 15. Roadmap Lanjutan

- Integrasi **OCR** asli (mis. Tesseract/PaddleOCR) + **VLM** untuk analisis
  multimodal.
- **Reverse image search** dan pencarian teks ke arsip berita.
- Dua state hasil lain: **"tidak ada perbedaan"** dan **"belum dapat
  diverifikasi"**.
- Backend + penyimpanan riwayat pemeriksaan.
- Mode gelap, multi-bahasa.
- Penilaian ketidaksesuaian visual (bukan hanya teks).

---

## 16. Referensi

Dikutip dari daftar pustaka esai Doksli:

- Abdali, S., et al. (2021). Detecting misinformation from website screenshots
  using visual features. *Proceedings of the International AAAI Conference on
  Web and Social Media.* https://doi.org/10.1609/icwsm.v15i1.18036
- Asfar, K., Prayoga, A., & Hidayatullah. (2024). Tabayyun digital QS.
  Al-Hujurat ayat 6 sebagai etika komunikasi Islam di era hoaks. *Al-Aqwam:
  Jurnal Studi Al-Qur'an dan Tafsir, 3*(2), 187–199.
- Comito, C., Caroprese, L., & Zumpano, E. (2023). Multimodal fake news
  detection on social media: A survey of deep learning techniques. *Social
  Network Analysis and Mining, 13*, 101. https://doi.org/10.1007/s13278-023-01104-w
- Inwood, O., & Zappavigna, M. (2024). The legitimation of screenshots as
  visual evidence in social media. *Visual Communication.*
- Kementerian Agama RI. (2019). *Al-Qur'an dan terjemahannya: Edisi
  penyempurnaan 2019.* Lajnah Pentashihan Mushaf Al-Qur'an.
- Kementerian Komunikasi dan Informatika RI. (2024). *Jaga ruang digital:
  Menkominfo tangani 203 isu hoaks Pemilu 2024.*
- Li, Q., et al. (2024). Towards multimodal disinformation detection by
  vision-language knowledge interaction. *Information Fusion, 102*, 102037.
  https://doi.org/10.1016/j.inffus.2023.102037
- Masyarakat Anti Fitnah Indonesia. (2024, November 2). *Indonesia Fact
  Checking Summit (IFCS) 2024.*
- Newman, E. J., & Schwarz, N. (2024). Misinformation and its correction:
  Continued influence and the role of context. *Current Opinion in
  Psychology, 55*, 101778.
- Pradana, R. H., et al. (2026). Dekonstruksi narasi visual: Analisis fenomena
  hoaks timpa teks di media sosial. *Jurnal Media Akademik (JMA), 4*(6).
- Qutb, S. (2003). *Tafsir fi zilalil Qur'an (Jilid 7).* Gema Insani Press.
- Shihab, M. Q. (2002). *Tafsir Al-Mishbah (Jilid 7).* Lentera Hati.
- Sinthuja, M., et al. (2024). Extraction of text from images using deep
  learning. *Procedia Computer Science, 235*, 789–798.
- Syafiq, M., & Mundhir. (2026). Digital tabayyun in the age of deepfakes:
  A double movement interpretation of QS. Al-Hujurat [49]:6. *Al-Fahmu, 5*(2),
  672–684.
- Zhahira, Y. S., & Nurrohim, A. (2026). Tabayyun sebagai etika verifikasi
  informasi: Analisis tafsir tematik QS. Al-Hujurat: 6 terhadap disinformasi di
  media sosial. *Al Karima, 10*(2), 391–415.