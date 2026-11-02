import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { Leaf } from 'lucide-react'

export function SiteHeader() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  })
  const reduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#atas"
          className="group flex min-h-11 min-w-0 items-center gap-3 rounded-lg"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line bg-primary-soft text-primary transition-colors duration-200 group-hover:border-primary/40">
            <Leaf className="size-4" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-serif text-lg leading-none tracking-tight text-ink">
              Eco-Enzyme
            </span>
            <span className="mt-1 truncate font-mono text-label uppercase text-ink-soft">
              Catatan praktikum
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <span className="hidden items-center gap-2 font-mono text-label uppercase text-ink-soft md:flex">
            Fermentasi anaerobik
          </span>
          <span className="hidden h-4 w-px bg-line md:block" aria-hidden="true" />
          <span className="font-mono text-xs tracking-wide text-ink">1 : 3 : 10</span>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        className="h-px origin-left bg-primary"
        style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
      />
    </header>
  )
}
