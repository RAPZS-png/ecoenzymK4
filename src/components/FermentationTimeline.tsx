import { TriangleAlert } from 'lucide-react'
import { phases } from '../data/praktikum'
import { cn } from '../lib/cn'
import { SectionHeader } from './SectionHeader'

export function FermentationTimeline() {
  return (
    <div className="overflow-hidden rounded-2xl bg-surface-deep p-5 text-on-deep shadow-deep sm:p-8 lg:p-10">
      <SectionHeader
        tone="dark"
        index="04"
        eyebrow="Protokol"
        title="Tiga fase, sembilan puluh hari."
        description="Fermentasi berjalan sendiri asal kondisi wadah dijaga. Periksa gas pada minggu pertama, lalu biarkan galon bekerja tanpa gangguan."
      />

      <ol className="mt-9 grid gap-7 lg:grid-cols-3 lg:gap-0">
        {phases.map((phase, index) => {
          const Icon = phase.icon

          return (
            <li
              key={phase.id}
              className={cn(
                'border-t border-on-deep/15 pt-5 lg:border-l lg:border-t-0 lg:px-6 lg:pt-0',
                index === 0 && 'lg:border-l-0 lg:pl-0',
                index === phases.length - 1 && 'lg:pr-0',
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-label uppercase text-primary-soft">
                  {phase.period}
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-on-deep/20 text-on-deep-muted">
                  <Icon className="size-3.5" strokeWidth={1.7} aria-hidden="true" />
                </span>
              </div>

              <p className="mt-3 font-mono text-label uppercase text-on-deep-muted">
                {phase.days}
              </p>
              <h3 className="mt-1 font-serif text-2xl text-on-deep">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-deep-muted">
                {phase.note}
              </p>
            </li>
          )
        })}
      </ol>

      <div className="mt-9 border-t border-on-deep/15 pt-5">
        <div className="flex items-center justify-between font-mono text-label uppercase text-on-deep-muted">
          <span>Hari 0</span>
          <span>Panen hari 90</span>
        </div>
        <div
          className="mt-2 h-1 overflow-hidden rounded-full bg-on-deep/15"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-linear-to-r from-primary-soft/70 via-primary-soft/40 to-primary-soft/20" />
        </div>
      </div>

      <div className="mt-6 flex gap-3 rounded-xl border border-on-deep/15 bg-on-deep/5 p-4">
        <TriangleAlert
          className="mt-0.5 size-4 shrink-0 text-primary-soft"
          aria-hidden="true"
        />
        <p className="text-xs leading-relaxed text-on-deep-muted">
          <span className="font-medium text-on-deep">
            Jangan tutup terlalu rapat di minggu pertama.
          </span>{' '}
          Longgarkan tutup saat membuang gas, lalu kencangkan kembali. Bau asam
          segar adalah tanda normal; bau busuk berarti campuran perlu diperiksa.
        </p>
      </div>
    </div>
  )
}
