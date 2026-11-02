import { FermentationTimeline } from '../components/FermentationTimeline'
import { Reveal } from '../components/Reveal'

export function FermentationSection() {
  return (
    <section id="fermentasi" className="scroll-mt-28">
      <Reveal>
        <FermentationTimeline />
      </Reveal>
    </section>
  )
}
