import { Recycle, ShieldCheck } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { UsageTable } from '../components/UsageTable'

const notes = [
  {
    icon: ShieldCheck,
    title: 'Uji di area kecil',
    body: 'Semprotkan ke sudut tersembunyi lebih dulu. Hentikan pemakaian bila permukaan berubah warna.',
  },
  {
    icon: Recycle,
    title: 'Sisa ampas',
    body: 'Ampas saringan tidak dibuang. Campurkan ke kompos atau kubur sebagai penyubur tanah.',
  },
]

export function BenefitsSection() {
  return (
    <section id="manfaat" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          index="05"
          eyebrow="Pemakaian"
          title="Manfaat dan takaran pakai."
          description="Eco-enzyme selalu diencerkan sebelum dipakai. Takaran di bawah ini berlaku untuk satu liter air."
        />
      </Reveal>

      <Reveal className="mt-8">
        <UsageTable />
      </Reveal>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {notes.map((note) => {
          const Icon = note.icon

          return (
            <div
              key={note.title}
              className="flex gap-3 rounded-xl border border-line bg-surface-raised p-4"
            >
              <Icon
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-ink">{note.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  {note.body}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-soft">
        Jangan mencampur eco-enzyme dengan pemutih atau bahan kimia keras. Simpan
        cairan di botol gelap, berlabel, dan jauh dari jangkauan anak.
      </p>
    </section>
  )
}
