import { motion, useReducedMotion } from 'motion/react'
import type { Step } from '../data/praktikum'
import { revealUp, viewportOnce } from '../lib/motion-tokens'
import { AssetImage } from './AssetImage'

type StepCardProps = {
  step: Step
}

export function StepCard({ step }: StepCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.li
      variants={revealUp}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={viewportOnce}
      className="min-w-0"
    >
      <article className="grid overflow-hidden rounded-2xl border border-line bg-surface-raised lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <div className="min-w-0 p-3 sm:p-4 lg:pr-2">
          <AssetImage
            src={step.image}
            alt={step.alt}
            eager={step.number === '01'}
          />
          <p className="mt-2 px-1 text-xs leading-relaxed text-ink-soft">
            {step.caption}
          </p>
        </div>

        <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:border-l lg:border-line lg:py-8 lg:pl-6 lg:pr-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-label uppercase text-primary">Step</span>
            <span className="font-serif text-3xl leading-none text-ink">
              {step.number}
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>

          <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-3xl">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.note}</p>
        </div>
      </article>
    </motion.li>
  )
}
