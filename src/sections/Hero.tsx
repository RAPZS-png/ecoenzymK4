import { motion, useReducedMotion } from 'motion/react'
import { FlaskConical, Users } from 'lucide-react'
import { duration, ease } from '../lib/motion-tokens'

const ratios = [
  { label: 'Gula merah', value: '1 bagian', color: 'bg-accent' },
  { label: 'Bahan organik', value: '3 bagian', color: 'bg-primary/55' },
  { label: 'Air bersih', value: '10 bagian', color: 'bg-primary' },
]

export function Hero() {
  const reduceMotion = useReducedMotion()
  const initial = reduceMotion ? false : { opacity: 0, y: 18 }
  const animate = { opacity: 1, y: 0 }
  const transition = { duration: duration.slow, ease: ease.out }

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="lab-grid pointer-events-none absolute inset-0 opacity-50"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.8fr)] lg:items-end lg:gap-12">
          <motion.div initial={initial} animate={animate} transition={transition}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 font-mono text-label uppercase text-primary-strong">
                <Users className="size-3" aria-hidden="true" />
                Tugas kelompok
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-raised px-3 py-1 font-mono text-label uppercase text-ink-soft">
                Kelas X · IPA
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl font-serif text-hero text-ink">
              Dokumentasi Praktikum:{' '}
              <span className="whitespace-nowrap italic text-primary">Eco-Enzyme</span>{' '}
              Ramah Lingkungan
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Fermentasi anaerobik 90 hari dari limbah dapur. Tiga bahan, satu
              galon, dan cara pakai yang bisa diulang.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
              Eco-enzyme adalah cairan hasil fermentasi limbah organik dapur, gula
              merah, dan air dengan perbandingan 1 : 3 : 10. Setelah 90 hari,
              hasilnya dipakai sebagai pembersih, pupuk cair, dan pengurai organik.
            </p>

            <dl className="mt-9 grid max-w-2xl grid-cols-3 divide-x divide-line border-y border-line">
              <div className="py-4 pr-3 sm:pr-5">
                <dt className="font-mono text-label uppercase text-ink-soft">Durasi</dt>
                <dd className="mt-1 font-serif text-xl leading-none tracking-tight text-ink sm:text-2xl">
                  90 hari
                </dd>
              </div>
              <div className="px-3 py-4 sm:px-5">
                <dt className="font-mono text-label uppercase text-ink-soft">Rasio</dt>
                <dd className="mt-1 font-serif text-xl leading-none tracking-tight text-ink sm:text-2xl">
                  1 : 3 : 10
                </dd>
              </div>
              <div className="py-4 pl-3 sm:pl-5">
                <dt className="font-mono text-label uppercase text-ink-soft">Ampas</dt>
                <dd className="mt-1 font-serif text-xl leading-none tracking-tight text-ink sm:text-2xl">
                  Dikompos
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.aside
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}
            aria-label="Ringkasan spesimen eco-enzyme"
            className="w-full max-w-md lg:justify-self-end"
          >
            <div className="rounded-2xl border border-line bg-surface-raised p-5 shadow-card sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-dashed border-line pb-4">
                <span className="font-mono text-label uppercase text-ink-soft">
                  Spesimen 001
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2 py-1 font-mono text-label uppercase text-primary-strong">
                  Anaerobik
                </span>
              </div>

              <p className="mt-5 font-mono text-label uppercase text-ink-soft">
                Rasio baku
              </p>
              <p className="mt-1 font-serif text-5xl leading-none tracking-tight text-ink">
                1 : 3 : 10
              </p>

              <dl className="mt-6 space-y-2.5 border-t border-line pt-4">
                {ratios.map((ratio) => (
                  <div
                    key={ratio.label}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <dt className="flex items-center gap-2 text-ink-soft">
                      <span
                        className={`size-1.5 rounded-full ${ratio.color}`}
                        aria-hidden="true"
                      />
                      {ratio.label}
                    </dt>
                    <dd className="font-mono text-xs text-ink">{ratio.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex items-start gap-3 rounded-lg bg-surface-muted p-3">
                <FlaskConical
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-mono text-label uppercase text-ink-soft">
                    Target panen
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink">Hari ke-90</p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                Suhu ruang 25–30 °C, celah gas 20%, dan galon tertutup rapat setelah
                minggu pertama.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
