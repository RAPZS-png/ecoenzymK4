import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { revealUp, viewportOnce } from '../lib/motion-tokens'

type RevealProps = {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={revealUp}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  )
}
