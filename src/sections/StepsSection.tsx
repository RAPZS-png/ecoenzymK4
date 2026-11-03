import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { StepCard } from '../components/StepCard'
import { steps } from '../data/praktikum'

export function StepsSection() {
  return (
    <section id="langkah-pembuatan" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          index="03"
          eyebrow="Prosedur"
          title="Sembilan langkah, satu galon."
          description="Kerjakan berurutan dan jaga semua alat tetap kering. Setiap langkah mencatat hal yang perlu diperhatikan."
        />
      </Reveal>

      <ol className="mt-8 space-y-5">
        {steps.map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </ol>
    </section>
  )
}
