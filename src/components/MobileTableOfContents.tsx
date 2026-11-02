import { useRef } from 'react'
import { ChevronDown, List } from 'lucide-react'
import { sections } from '../data/praktikum'

export function MobileTableOfContents() {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const close = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false
    }
  }

  return (
    <details
      ref={detailsRef}
      className="group rounded-xl border border-line bg-surface-raised"
    >
      <summary className="toc-summary flex min-h-12 cursor-pointer items-center justify-between gap-3 px-4">
        <span className="flex items-center gap-2 text-sm font-medium text-ink">
          <List className="size-4 text-primary" aria-hidden="true" />
          Daftar isi
        </span>
        <span className="flex items-center gap-2 font-mono text-label uppercase text-ink-soft">
          5 bagian
          <ChevronDown
            className="size-4 transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </span>
      </summary>

      <nav aria-label="Daftar isi" className="border-t border-line p-2">
        <ol className="grid gap-0.5">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={close}
                className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm text-ink-soft transition-colors duration-200 hover:bg-surface-muted hover:text-ink"
              >
                <span className="font-mono text-label text-primary">
                  {section.index}
                </span>
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  )
}
