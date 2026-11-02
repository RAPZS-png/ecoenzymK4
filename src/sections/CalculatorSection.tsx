import { Reveal } from '../components/Reveal'
import { RatioCalculator } from '../components/RatioCalculator'
import { SectionHeader } from '../components/SectionHeader'

export function CalculatorSection() {
  return (
    <section id="kalkulator" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          index="01"
          eyebrow="Kalkulator"
          title="Hitung rasio, jangan menebak."
          description="Masukkan berat bahan organik. Gula dan air mengikuti rasio baku, dan rekomendasi galon sudah menyisakan ruang gas."
        />
      </Reveal>

      <Reveal className="mt-8">
        <RatioCalculator />
      </Reveal>
    </section>
  )
}
