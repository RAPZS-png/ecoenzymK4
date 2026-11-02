import { ArrowUp, Leaf } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-line pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="flex items-center gap-2 font-mono text-label uppercase text-primary">
              <Leaf className="size-3.5" aria-hidden="true" />
              Catatan praktikum sekolah
            </p>
            <p className="mt-3 font-serif text-2xl leading-tight text-ink">
              Dari limbah dapur, kembali ke tanah.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Dokumentasi ini dibuat untuk tugas kelompok praktikum IPA. Ampas
              fermentasi dikomposkan, wadah dipakai ulang, dan tidak ada bahan yang
              dibuang percuma.
            </p>
          </div>

          <a
            href="#atas"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-line bg-surface-raised px-4 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-line-strong hover:bg-surface-muted"
          >
            Kembali ke atas
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>Eco-Enzyme · Lab Notes — 2026</p>
          <p className="font-mono text-label uppercase">
            Zero-waste · 1 : 3 : 10 · 90 hari
          </p>
        </div>
      </div>
    </footer>
  )
}
