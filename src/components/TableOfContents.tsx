import { useEffect, useState } from 'react'
import { cn } from '../lib/cn'
import { sections } from '../data/praktikum'

export function TableOfContents() {
  const [active, setActive] = useState<string>(sections[0].id)

  useEffect(() => {
    const update = () => {
      const probe = window.innerHeight * 0.28
      let current: string = sections[0].id

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= probe) {
          current = section.id
        }
      }

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <aside className="hidden lg:block">
      <nav aria-label="Daftar isi" className="sticky top-28">
        <p className="font-mono text-label uppercase text-ink-soft">Daftar isi</p>

        <ol className="mt-3 border-l border-line">
          {sections.map((section) => {
            const isActive = active === section.id

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'group -ml-px flex min-h-11 items-center gap-3 border-l-2 py-2 pl-4 text-sm transition-colors duration-200',
                    isActive
                      ? 'border-primary font-medium text-ink'
                      : 'border-transparent text-ink-soft hover:text-ink',
                  )}
                >
                  <span
                    className={cn(
                      'font-mono text-label transition-colors duration-200',
                      isActive ? 'text-primary' : 'text-ink-soft group-hover:text-primary',
                    )}
                  >
                    {section.index}
                  </span>
                  <span>{section.label}</span>
                </a>
              </li>
            )
          })}
        </ol>

        <div className="mt-8 rounded-xl border border-line bg-surface-raised p-4">
          <p className="font-mono text-label uppercase text-ink-soft">Rasio baku</p>
          <p className="mt-2 font-serif text-2xl tracking-tight text-ink">1 : 3 : 10</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-soft">
            Gula merah · bahan · air
          </p>

          <div className="mt-4 flex h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
            <span className="bg-accent" style={{ flexGrow: 1 }} />
            <span className="bg-primary/55" style={{ flexGrow: 3 }} />
            <span className="bg-primary" style={{ flexGrow: 10 }} />
          </div>

          <p className="mt-3 font-mono text-label uppercase text-ink-soft">
            Fermentasi 90 hari
          </p>
        </div>
      </nav>
    </aside>
  )
}
