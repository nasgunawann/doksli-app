export default function TabayyunSection() {
  return (
    <section className="reveal border-2 border-ink bg-white p-6 sm:p-8">
      <h2 className="font-display text-2xl font-black tracking-tight text-ink">
        Kenapa pemeriksaan ini penting
      </h2>

      <blockquote className="relative mt-5 pl-7 sm:pl-10">
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 select-none font-display text-7xl font-black leading-[0.6] text-primary"
        >
          &ldquo;
        </span>
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-2xl leading-[2.1] text-ink sm:text-[1.75rem]"
        >
          يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَنْ
          تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ
        </p>
        <p className="mt-3 text-lg italic leading-relaxed text-ink/85">
          Wahai orang-orang yang beriman! Jika seseorang yang fasik datang kepadamu
          membawa suatu berita, maka telitilah kebenarannya, agar kamu tidak
          mencelakakan suatu kaum karena kebodohan (kecerobohan), yang akhirnya kamu
          menyesali perbuatanmu itu.
        </p>
        <cite className="mt-3 block font-heading text-xs font-semibold uppercase tracking-[0.18em] not-italic text-ink-soft">
          QS. Al-Hujurat [49]: 6, terjemahan Kemenag RI (2019)
        </cite>
      </blockquote>

      <blockquote className="mt-6 border-t border-ink/15 pt-5">
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-2xl leading-[2.1] text-ink sm:text-[1.75rem]"
        >
          وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ ۚ إِنَّ السَّمْعَ وَالْبَصَرَ
          وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا
        </p>
        <p className="mt-3 text-lg italic leading-relaxed text-ink/85">
          Dan janganlah kamu mengikuti sesuatu yang tidak kamu ketahui. Karena
          pendengaran, penglihatan, dan hati nurani, semua itu akan dimintai
          pertanggungjawaban.
        </p>
        <cite className="mt-3 block font-heading text-xs font-semibold uppercase tracking-[0.18em] not-italic text-ink-soft">
          QS. Al-Isra&apos; [17]: 36, terjemahan Kemenag RI (2019)
        </cite>
      </blockquote>

      <p className="mt-5 leading-relaxed text-ink/80">
        Perintah tabayyun ini menuntun cara kita menyikapi berita: periksa dulu,
        baru percaya. Doksli dirancang sebagai instrumen bantu tabayyun digital, ia
        membantu meneliti berita sebelum dipercaya, bukan menggantikan penilaian
        manusia.
      </p>
    </section>
  )
}
