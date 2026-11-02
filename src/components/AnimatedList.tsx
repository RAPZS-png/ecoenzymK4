import { motion, useReducedMotion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'
import { listItem, stagger, viewportOnce } from '../lib/motion-tokens'
import { padTwo } from '../lib/format'

export type AnimatedListEntry = {
  id: string
  title: string
  note: string
  icon: LucideIcon
}

type AnimatedListProps = {
  items: AnimatedListEntry[]
  label?: string
}

export function AnimatedList({
  items,
  label = 'Daftar alat dan bahan',
}: AnimatedListProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.ul
      aria-label={label}
      className="grid gap-3 sm:grid-cols-2"
      variants={stagger}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={viewportOnce}
    >
      {items.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.li
            key={item.id}
            variants={listItem}
            className="group flex min-w-0 items-start gap-3 rounded-xl border border-line bg-surface-raised p-4 transition-colors duration-200 hover:border-line-strong"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-primary transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary-soft">
              <Icon className="size-4" strokeWidth={1.7} aria-hidden="true" />
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                <span className="font-mono text-label text-ink-soft">
                  {padTwo(index + 1)}
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">{item.note}</p>
            </div>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
