import { cn } from '../lib/cn'

type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  tone = 'light',
}: SectionHeaderProps) {
  const dark = tone === 'dark'

  return (
    <header className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'font-mono text-label uppercase',
            dark ? 'text-[var(--deep-highlight)]' : 'text-primary',
          )}
        >
          {index}
        </span>
        <span
          aria-hidden="true"
          className={cn('h-px w-8', dark ? 'bg-on-deep/25' : 'bg-line-strong')}
        />
        <span
          className={cn(
            'font-mono text-label uppercase',
            dark ? 'text-on-deep-muted' : 'text-ink-soft',
          )}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          'mt-4 font-serif text-section',
          dark ? 'text-on-deep' : 'text-ink',
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-on-deep-muted' : 'text-ink-soft',
          )}
        >
          {description}
        </p>
      )}
    </header>
  )
}
