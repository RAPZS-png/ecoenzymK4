import { TriangleAlert } from 'lucide-react'
import { AnimatedList } from '../components/AnimatedList'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { tools } from '../data/praktikum'

export function ToolsSection() {
  return (
    <section id="alat-bahan" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          index="02"
          eyebrow="Persediaan"
          title="Sepuluh alat dan bahan."
          description="Siapkan semuanya sebelum mulai. Alat yang bersih dan kering mengurangi risiko fermentasi gagal."
        />
      </Reveal>

      <div className="mt-8">
        <AnimatedList items={tools} />
      </div>

      <Reveal>
        <div className="mt-4 flex gap-3 rounded-xl border border-accent/25 bg-accent-soft/50 p-4">
          <TriangleAlert
            className="mt-0.5 size-4 shrink-0 text-accent"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-medium text-ink">Hindari bahan berminyak.</span>{' '}
            Sisa makanan berminyak, daging, dan bahan berjamur bisa membuat
            fermentasi gagal dan berbau busuk.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
