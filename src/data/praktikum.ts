import {
  Apple,
  Blend,
  Candy,
  CookingPot,
  Droplets,
  Filter,
  Funnel,
  Grid2x2,
  Milk,
  Sparkles,
  SprayCan,
  Sprout,
  Utensils,
  Wind,
  Moon,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ToolItem = {
  id: string
  title: string
  note: string
  icon: LucideIcon
}

export const tools: ToolItem[] = [
  {
    id: 'buah',
    title: 'Potongan buah organik',
    note: 'Kulit dan sisa buah segar, sekitar 300 g',
    icon: Apple,
  },
  {
    id: 'gula',
    title: 'Gula merah',
    note: '100 g, disisir atau dipotong halus',
    icon: Candy,
  },
  {
    id: 'air',
    title: 'Air bersih',
    note: '1.000 ml, suhu ruang',
    icon: Droplets,
  },
  {
    id: 'galon',
    title: 'Galon & tutup rapat',
    note: 'Kapasitas minimal 2 L, bersih dan kering',
    icon: Milk,
  },
  {
    id: 'baskom',
    title: 'Baskom / wadah',
    note: 'Untuk mencampur larutan gula',
    icon: CookingPot,
  },
  {
    id: 'pisau',
    title: 'Pisau',
    note: 'Tajam dan bersih, khusus bahan organik',
    icon: Utensils,
  },
  {
    id: 'talenan',
    title: 'Talenan',
    note: 'Permukaan rata untuk merajang dadu',
    icon: Grid2x2,
  },
  {
    id: 'saringan',
    title: 'Saringan',
    note: 'Dipakai saat panen hari ke-90',
    icon: Filter,
  },
  {
    id: 'pengaduk',
    title: 'Alat pengaduk',
    note: 'Kayu atau plastik, hindari logam',
    icon: Blend,
  },
  {
    id: 'corong',
    title: 'Corong',
    note: 'Memudahkan penuangan ke mulut galon',
    icon: Funnel,
  },
]

export type Step = {
  number: string
  title: string
  meta: string
  note: string
  image: string
  alt: string
  caption: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Sortir Bahan',
    meta: '10 menit · bahan organik',
    note: 'Sisihkan sisa buah dan kulit dari bahan berminyak, berjamur, atau bercampur plastik. Bahan yang bersih membuat fermentasi tidak mudah gagal.',
    image: '/asset/alat%20dan%20bahan.jpeg',
    alt: 'Alat dan bahan eco-enzyme ditata di atas alas putih: galon, baskom, pisau, saringan, gula merah, dan buah.',
    caption: 'Alat dan bahan ditata sebelum praktikum.',
  },
  {
    number: '02',
    title: 'Perajangan Dadu',
    meta: '10 menit · pisau, talenan',
    note: 'Potong bahan menjadi dadu 2–3 cm agar luas permukaan fermentasi lebih besar. Hindari potongan terlalu halus yang membuat cairan keruh.',
    image: '/asset/potong%20buah.jpeg',
    alt: 'Tangan siswa memotong buah di dekat baskom dan galon.',
    caption: 'Buah dirajang menjadi potongan kecil.',
  },
  {
    number: '03',
    title: 'Penimbangan',
    meta: '5 menit · timbangan',
    note: 'Timbang bahan organik untuk menentukan rasio. Angka ini menjadi dasar gula 1 bagian dan air 10 bagian.',
    image: '/asset/timbang.jpeg',
    alt: 'Galon berisi campuran bahan eco-enzyme di atas timbangan digital.',
    caption: 'Galon ditimbang di atas timbangan digital.',
  },
  {
    number: '04',
    title: 'Pelarutan Gula',
    meta: '10 menit · baskom, pengaduk',
    note: 'Larutkan gula merah dalam air bersih sampai tidak ada gumpalan. Air hangat boleh; air mendidih tidak, karena mikroba perlu suhu yang wajar.',
    image: '/asset/aduk%20gula%20merah.jpeg',
    alt: 'Larutan gula merah disaring ke dalam baskom plastik.',
    caption: 'Larutan gula merah disaring ke baskom.',
  },
  {
    number: '05',
    title: 'Penuangan Air ke Galon',
    meta: '5 menit · corong',
    note: 'Tuang larutan gula ke galon melalui corong. Jangan mengisi sampai bibir galon; sisakan ruang untuk gas.',
    image: '/asset/masukkan%20air.jpeg',
    alt: 'Air dari botol dituang melalui corong hijau ke dalam galon.',
    caption: 'Air dituang melalui corong ke dalam galon.',
  },
  {
    number: '06',
    title: 'Pemasukan Bahan Organik & Celah Gas 20%',
    meta: '5 menit · galon',
    note: 'Masukkan potongan buah organik ke dalam galon. Pastikan ada celah udara sekitar 20% dari volume galon agar gas fermentasi punya ruang.',
    image: '/asset/potong%20buah%202.jpeg',
    alt: 'Pisang dipotong dadu di atas talenan hijau.',
    caption: 'Bahan organik dipotong dadu di talenan.',
  },
  {
    number: '07',
    title: 'Penutupan Kedap & Label Tanggal',
    meta: '5 menit · tutup, label',
    note: 'Tutup galon rapat, lalu tulis tanggal mulai dan jenis bahan pada label. Tanggal ini menentukan panen hari ke-90.',
    image: '/asset/aduk%20aduk%20ecoenzym.jpeg',
    alt: 'Dua siswa memegang galon berisi campuran buah dan larutan.',
    caption: 'Galon berisi campuran dikocok perlahan sebelum ditutup.',
  },
  {
    number: '08',
    title: 'Penyimpanan Teduh',
    meta: '90 hari · tempat teduh',
    note: 'Simpan galon di tempat teduh, kering, dan jauh dari sinar matahari langsung. Suhu ruang 25–30 °C mempercepat kerja mikroba.',
    image: '/asset/tuang%20gula%20merah.jpeg',
    alt: 'Anggota kelompok mengaduk larutan gula merah di baskom.',
    caption: 'Kelompok merapikan campuran sebelum galon disimpan.',
  },
]

export type Phase = {
  id: string
  period: string
  days: string
  title: string
  note: string
  icon: LucideIcon
}

export const phases: Phase[] = [
  {
    id: 'minggu-1',
    period: 'Minggu 1',
    days: 'Hari 1–7',
    title: 'Buang gas',
    note: 'Longgarkan tutup galon 10–15 detik setiap 2–3 hari. Gas dari fermentasi awal perlu keluar agar galon tidak menggembung.',
    icon: Wind,
  },
  {
    id: 'bulan-1-3',
    period: 'Bulan 1–3',
    days: 'Hari 8–89',
    title: 'Fase dorman',
    note: 'Simpan di tempat gelap dan kering. Tutup rapat, jangan diaduk, dan hindari membuka galon tanpa perlu.',
    icon: Moon,
  },
  {
    id: 'hari-90',
    period: 'Hari ke-90',
    days: 'Panen',
    title: 'Saring & panen',
    note: 'Saring ampas dengan saringan bersih, lalu simpan cairan di botol gelap. Ampasnya bisa dikomposkan.',
    icon: Filter,
  },
]

export type Usage = {
  id: string
  use: string
  icon: LucideIcon
  dose: string
  ratio: string
  method: string
}

export const usages: Usage[] = [
  {
    id: 'lantai',
    use: 'Pembersih lantai',
    icon: SprayCan,
    dose: '10 ml',
    ratio: '1 : 100',
    method: 'Campur dengan 1 L air, tuang ke pel, lalu lap hingga kering.',
  },
  {
    id: 'piring',
    use: 'Sabun cuci piring',
    icon: Sparkles,
    dose: '100 ml',
    ratio: '1 : 10',
    method: 'Campur dengan 1 L air dan sabun secukupnya; kocok sebelum dipakai.',
  },
  {
    id: 'pupuk',
    use: 'Pupuk cair semprot',
    icon: Sprout,
    dose: '2 ml',
    ratio: '1 : 500',
    method: 'Campur dengan 1 L air, semprot ke daun pada pagi atau sore.',
  },
]

export const sections = [
  { id: 'kalkulator', index: '01', label: 'Kalkulator rasio' },
  { id: 'alat-bahan', index: '02', label: 'Alat & bahan' },
  { id: 'langkah-pembuatan', index: '03', label: 'Langkah pembuatan' },
  { id: 'fermentasi', index: '04', label: 'Protokol fermentasi' },
  { id: 'manfaat', index: '05', label: 'Manfaat & takaran' },
] as const
