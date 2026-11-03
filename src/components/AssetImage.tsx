import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '../lib/cn'

type AssetImageProps = {
  src: string
  alt: string
  eager?: boolean
  className?: string
}

type Status = 'loading' | 'ready' | 'error'

export function AssetImage({ src, alt, eager = false, className }: AssetImageProps) {
  const [status, setStatus] = useState<Status>('loading')

  return (
    <div className={cn('relative', className)}>
      {status === 'loading' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse overflow-hidden rounded-xl border border-[var(--image-border)] bg-surface-muted"
        >
          <div className="h-full w-full bg-linear-to-r from-transparent via-surface-raised/50 to-transparent" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setStatus('ready')}
        onError={() => setStatus('error')}
        className={cn(
          'aspect-video w-full rounded-xl border border-[var(--image-border)] object-cover transition duration-500 ease-out-soft',
          status === 'ready' ? 'opacity-100 blur-0' : 'opacity-0 blur-sm',
        )}
      />

      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--image-border)] bg-surface-muted text-ink-soft">
          <ImageOff className="size-5" aria-hidden="true" />
          <span className="font-mono text-label uppercase">Gambar tidak tersedia</span>
        </div>
      )}
    </div>
  )
}
