import { useRef } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from 'motion/react'
import { duration, ease, textStagger } from '../lib/motion-tokens'

type SpanProps = Omit<HTMLMotionProps<'span'>, 'children'>

export interface TextRevealProps extends SpanProps {
  children: string
  by?: 'word' | 'character' | 'line'
  lines?: string[]
  once?: boolean
  blur?: boolean
  /**
   * Offset applied to the stagger timing so several reveals can continue one
   * sequence instead of starting at the same time.
   */
  startIndex?: number
}

interface RevealPart {
  value: string
  animated: boolean
  line: boolean
  staggerIndex: number
}

function splitRevealText(
  value: string,
  by: TextRevealProps['by'],
  lines?: string[],
): RevealPart[] {
  if (by === 'line') {
    const explicitLines = lines?.length ? lines : value.split(/\r?\n/)

    return explicitLines.map((line, index) => ({
      value: line,
      animated: true,
      line: true,
      staggerIndex: index,
    }))
  }

  const parts = by === 'character' ? Array.from(value) : value.split(/(\s+)/)
  let staggerIndex = 0

  return parts.filter(Boolean).map((part) => {
    const animated = !/^\s+$/.test(part)
    const currentIndex = staggerIndex
    if (animated) staggerIndex += 1

    return {
      value: part,
      animated,
      line: false,
      staggerIndex: currentIndex,
    }
  })
}

export function TextReveal({
  children,
  by = 'word',
  lines,
  once = true,
  blur = true,
  startIndex = 0,
  className,
  ...props
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const visible = useInView(ref, { once, amount: 0.45 })
  const reduceMotion = useReducedMotion() ?? false
  const parts = splitRevealText(children, by, lines)
  const stagger = textStagger[by]

  return (
    <motion.span
      {...props}
      ref={ref}
      className={['inline', className].filter(Boolean).join(' ')}
    >
      {/* The accessible name lives on the parent heading; this markup is visual only. */}
      <span className="whitespace-pre-wrap" aria-hidden="true">
        {parts.map((part, index) => {
          if (!part.animated) {
            return <span key={`${part.value}-${index}`}>{part.value}</span>
          }

          const delay = (startIndex + part.staggerIndex) * stagger

          return (
            <span
              key={`${part.value}-${index}`}
              className={
                part.line
                  ? 'block -mx-[0.12em] -mt-[0.06em] -mb-[0.18em] overflow-hidden px-[0.12em] pt-[0.06em] pb-[0.18em]'
                  : 'inline-block -my-[0.18em] overflow-hidden py-[0.18em] align-bottom'
              }
            >
              <motion.span
                className="inline-block will-change-[transform,opacity]"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        filter: blur ? 'blur(6px)' : 'none',
                        transform: part.line
                          ? 'translateY(112%)'
                          : 'translateY(100%)',
                      }
                }
                animate={
                  reduceMotion
                    ? { opacity: visible ? 1 : 0 }
                    : visible
                      ? {
                          opacity: 1,
                          transform: 'translateY(0%)',
                          filter: blur ? 'blur(0px)' : 'none',
                        }
                      : {
                          opacity: 0,
                          filter: blur ? 'blur(6px)' : 'none',
                          transform: part.line
                            ? 'translateY(112%)'
                            : 'translateY(100%)',
                        }
                }
                transition={
                  reduceMotion
                    ? { duration: duration.quick }
                    : part.line
                      ? {
                          transform: {
                            duration: duration.slow,
                            ease: ease.out,
                            delay,
                          },
                          filter: {
                            duration: duration.slow,
                            ease: ease.out,
                            delay,
                          },
                          opacity: {
                            duration: duration.considered,
                            ease: ease.inOut,
                            delay,
                          },
                        }
                      : {
                          duration: duration.base,
                          ease: ease.out,
                          delay,
                        }
                }
              >
                {part.value || '\u00a0'}
              </motion.span>
            </span>
          )
        })}
      </span>
    </motion.span>
  )
}
