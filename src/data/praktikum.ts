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
  note: string
  image: string
  alt: string
  caption: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Alat dan Bahan',
    note: 'Tata galon, baskom, pisau, talenan, saringan, gula merah, dan buah di meja bersih. Pastikan semua alat kering sebelum dipakai.',
    image: '/asset/alat%20dan%20bahan.jpeg',
    alt: 'Alat dan bahan eco-enzyme ditata di atas alas putih: galon, baskom, pisau, talenan, saringan, gula merah, dan buah.',
    caption: 'Alat dan bahan ditata sebelum praktikum.',
  },
  {
    number: '02',
    title: 'Penimbangan',
    note: 'Timbang bahan organik untuk menentukan rasio. Gula mengikuti sepertiga berat bahan, sedangkan air sepuluh per tiga berat bahan.',
    image: '/asset/timbang.jpeg',
    alt: 'Galon berisi campuran bahan eco-enzyme di atas timbangan digital.',
    caption: 'Berat bahan organik dicatat sebelum dicampur.',
  },
  {
    number: '03',
    title: 'Potong Buah',
    note: 'Potong buah dan kulit menjadi dadu 2–3 cm. Ukuran yang seragam membantu fermentasi berjalan merata.',
    image: '/asset/potong%20buah.jpeg',
    alt: 'Tangan siswa memotong buah di dekat baskom dan galon.',
    caption: 'Buah dirajang menjadi potongan kecil.',
  },
  {
    number: '04',
    title: 'Masukkan Buah',
    note: 'Masukkan potongan buah ke dalam galon. Sisakan ruang gas sekitar 20% dari volume galon agar tidak meluap.',
    image: '/asset/buah%20ke%20galon.jpeg',
    alt: 'Tangan memasukkan potongan buah ke dalam galon bening.',
    caption: 'Potongan buah dimasukkan ke dalam galon.',
  },
  {
    number: '05',
    title: 'Tuang Air ke Galon',
    note: 'Tuang air bersih melalui corong. Jangan mengisi sampai bibir galon agar gas masih punya ruang.',
    image: '/asset/masukkan%20air.jpeg',
    alt: 'Air dari botol dituang melalui corong hijau ke dalam galon.',
    caption: 'Air dituang melalui corong ke dalam galon.',
  },
  {
    number: '06',
    title: 'Pelarutan Gula',
    note: 'Larutkan gula merah dalam air sampai tidak ada gumpalan. Aduk hingga seluruh gula tercampur rata.',
    image: '/asset/aduk%20gula%20merah.jpeg',
    alt: 'Larutan gula merah diaduk di dalam baskom plastik.',
    caption: 'Gula merah dilarutkan sampai rata.',
  },
  {
    number: '07',
    title: 'Tuang Gula ke Dalam Galon',
    note: 'Tuang larutan gula ke dalam galon melalui corong. Pastikan tidak ada endapan yang tertinggal di baskom.',
    image: '/asset/tuang%20gula%20merah.jpeg',
    alt: 'Anggota kelompok menuang larutan gula merah ke dalam galon.',
    caption: 'Larutan gula dituang ke galon.',
  },
  {
    number: '08',
    title: 'Tutup Galon dan Aduk',
    note: 'Tutup galon rapat, lalu kocok perlahan agar bahan tercampur. Tulis tanggal mulai dan jenis bahan pada label.',
    image: '/asset/aduk%20aduk%20ecoenzym.jpeg',
    alt: 'Dua siswa memegang dan mengocok galon berisi campuran buah dan larutan.',
    caption: 'Galon ditutup dan dikocok perlahan.',
  },
  {
    number: '09',
    title: 'Penyimpanan',
    note: 'Simpan galon di tempat teduh dan kering, jauh dari sinar matahari langsung. Longgarkan tutup 10–15 detik setiap 2–3 hari pada minggu pertama.',
    image: '/asset/penyimpanan%20ecoenzym.jpeg',
    alt: 'Tiga galon berisi campuran eco-enzyme disimpan berjajar di lantai.',
    caption: 'Galon disimpan selama 90 hari.',
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
