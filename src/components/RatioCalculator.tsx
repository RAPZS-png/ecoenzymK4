import { useId, useState } from 'react'
import { Candy, Container, Droplets, RotateCcw, Scale } from 'lucide-react'
import { formatDecimal, formatInteger } from '../lib/format'

const DEFAULT_GRAMS = '300'

function parseGrams(raw: string): number {
  const normalized = raw.replace(',', '.').replace(/[^\d.]/g, '')
  const value = Number.parseFloat(normalized)
  return Number.isFinite(value) ? Math.max(0, value) : 0
}

export function RatioCalculator() {
  const [input, setInput] = useState(DEFAULT_GRAMS)
  const inputId = useId()
  const hintId = useId()

  const grams = parseGrams(input)
  const sugar = grams / 3
  const water = (grams * 10) / 3
  const total = grams + sugar + water
  const containerLiters = Math.round((total * 1.2) / 1000)

  const handleChange = (value: string) => {
    setInput(value.replace(/[^\d.,]/g, ''))
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-card">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="p-5 sm:p-7 lg:p-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-label uppercase text-primary">
              <Scale className="size-3.5" aria-hidden="true" />
              Input bahan
            </div>
            <button
              type="button"
              onClick={() => setInput(DEFAULT_GRAMS)}
              aria-label="Reset berat bahan ke 300 gram"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 font-mono text-label uppercase text-ink-soft transition-colors duration-200 hover:bg-surface-muted hover:text-ink"
            >
              <RotateCcw className="size-3" aria-hidden="true" />
              Reset
            </button>
          </div>

          <label htmlFor={inputId} className="mt-7 block text-sm font-medium text-ink">
            Berat bahan organik
          </label>

          <div className="mt-2 flex items-baseline gap-3 rounded-xl border border-line-strong bg-surface px-4 py-3 transition-colors duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-focus/20">
            <input
              id={inputId}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              enterKeyHint="done"
              value={input}
              onChange={(event) => handleChange(event.target.value)}
              placeholder="300"
              aria-describedby={hintId}
              className="w-full min-w-0 bg-transparent font-serif text-4xl leading-none text-ink outline-none placeholder:text-ink-soft/50"
            />
            <span className="shrink-0 font-mono text-label uppercase text-ink-soft">
              gram
            </span>
          </div>

          <p id={hintId} className="mt-3 text-sm leading-relaxed text-ink-soft">
            Ketik berat limbah organik. Hasil dihitung otomatis dari rasio gula 1 :
            bahan 3 : air 10.
          </p>

          <div className="mt-7">
            <div className="flex items-center justify-between font-mono text-label uppercase text-ink-soft">
              <span>Komposisi</span>
              <span>1 : 3 : 10</span>
            </div>

            <div
              className="mt-2 flex h-2 overflow-hidden rounded-full border border-line bg-surface"
              aria-hidden="true"
            >
              <span className="bg-accent" style={{ flexGrow: 1 }} />
              <span className="bg-primary/55" style={{ flexGrow: 3 }} />
              <span className="bg-primary" style={{ flexGrow: 10 }} />
            </div>

            <div className="mt-2 flex justify-between font-mono text-label uppercase text-ink-soft">
              <span>Gula</span>
              <span>Bahan</span>
              <span>Air</span>
            </div>
          </div>
        </div>

        <div className="border-t border-line bg-surface-muted/50 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
          <p className="font-mono text-label uppercase text-ink-soft">Hasil hitung</p>

          <dl className="mt-5 space-y-4">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
              <dt className="flex items-center gap-2 text-sm text-ink-soft">
                <Candy className="size-4 text-accent" aria-hidden="true" />
                Gula merah
              </dt>
              <dd className="text-right">
                <span className="flex items-baseline justify-end gap-1.5 font-serif text-2xl tabular-nums text-ink">
                  {formatDecimal(sugar)}
                  <span className="font-sans text-xs font-normal text-ink-soft">g</span>
                </span>
                <span className="mt-1 block font-mono text-label text-ink-soft">
                  (± {formatInteger(sugar)} gr)
                </span>
              </dd>
            </div>

            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
              <dt className="flex items-center gap-2 text-sm text-ink-soft">
                <Droplets className="size-4 text-primary" aria-hidden="true" />
                Air bersih
              </dt>
              <dd className="text-right">
                <span className="flex items-baseline justify-end gap-1.5 font-serif text-2xl tabular-nums text-ink">
                  {formatDecimal(water)}
                  <span className="font-sans text-xs font-normal text-ink-soft">ml</span>
                </span>
                <span className="mt-1 block font-mono text-label text-ink-soft">
                  (± {formatInteger(water)} ml)
                </span>
              </dd>
            </div>
          </dl>

          <div className="mt-6 rounded-xl border border-primary/25 bg-primary-soft p-4">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-surface-raised">
                <Container className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-label uppercase text-primary-strong">
                  Kapasitas galon
                </p>
                <p
                  aria-live="polite"
                  aria-atomic="true"
                  className="mt-1 font-serif text-3xl leading-none text-ink"
                >
                  {containerLiters > 0 ? `${formatInteger(containerLiters)} L` : '—'}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-primary-strong/80">
                  Dibulatkan ke liter terdekat. Sudah mencakup ruang gas 20%; pilih
                  wadah di atasnya bila tersedia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 border-t border-line px-5 py-3 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>Rumus: gula = bahan ÷ 3 · air = bahan × 10 ÷ 3</span>
        <span className="font-mono text-label uppercase">Ruang gas 20%</span>
      </div>
    </div>
  )
}
