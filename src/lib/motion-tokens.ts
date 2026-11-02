import type { Transition, Variants } from 'motion/react'

/** Easing curves shared by every animated block. */
export const ease = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
} satisfies Record<string, [number, number, number, number]>

/** Durations in seconds. */
export const duration = {
  quick: 0.16,
  base: 0.32,
  slow: 0.6,
  slowest: 0.9,
} satisfies Record<string, number>

/** Springs for elements that need a little weight. */
export const spring = {
  gentle: {
    type: 'spring',
    stiffness: 150,
    damping: 22,
    mass: 0.9,
  },
  snappy: {
    type: 'spring',
    stiffness: 320,
    damping: 30,
    mass: 0.8,
  },
} satisfies Record<string, Transition>

/** Blur amounts in pixels used by reveal transitions. */
export const blur = {
  enter: 8,
  exit: 4,
} satisfies Record<string, number>

/** Vertical travel in pixels. */
export const offset = {
  sm: 10,
  md: 22,
  lg: 34,
} satisfies Record<string, number>

export const viewportOnce = {
  once: true,
  margin: '0px 0px -12% 0px',
} as const

export const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: offset.md,
    filter: `blur(${blur.enter}px)`,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: duration.slow,
      ease: ease.out,
    },
  },
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.04,
    },
  },
}

export const listItem: Variants = {
  hidden: {
    opacity: 0,
    y: offset.sm,
    filter: `blur(${blur.exit}px)`,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: duration.base,
      ease: ease.out,
    },
  },
}
