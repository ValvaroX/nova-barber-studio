import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

/** Hace aparecer su contenido con un fundido suave al entrar en pantalla. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={cn('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

/** Encabezado común de cada sección. */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-reading text-center md:mb-16">
      <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight font-semibold text-balance sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-16 bg-gold/60" aria-hidden />
      {description && (
        <p className="mt-5 text-base text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}
