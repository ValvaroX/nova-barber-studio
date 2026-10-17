import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Reveal, SectionHeading } from '@/components/site/reveal'
import { gallery } from '@/config/site'
import { imageSrcSet, imageUrl } from '@/lib/links'

export function Gallery() {
  // Índice de la imagen abierta en grande (null = cerrada).
  const [active, setActive] = useState<number | null>(null)
  const current = active === null ? null : gallery[active]

  const step = (delta: number) =>
    setActive((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length))

  return (
    <section id="galeria" className="border-y border-border bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Galería"
          title="El estudio y nuestro trabajo"
          description="Tocá una imagen para verla en grande."
        />

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal
              as="li"
              key={item.file + i}
              delay={(i % 3) * 100}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block size-full overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                aria-label={`Ampliar imagen: ${item.alt}`}
              >
                <img
                  src={imageUrl(item.file, 600)}
                  srcSet={imageSrcSet(item.file, [400, 600, 900])}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={750}
                  className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={current !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent
          className="max-w-[calc(100%-2rem)] border-border bg-background p-2 sm:max-w-3xl [&_[data-slot=dialog-close]]:z-10 [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:bg-background/80 [&_[data-slot=dialog-close]]:p-2 [&_[data-slot=dialog-close]]:opacity-100"
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') step(1)
            if (event.key === 'ArrowLeft') step(-1)
          }}
        >
          <DialogTitle className="sr-only">{current?.alt ?? 'Imagen'}</DialogTitle>
          <DialogDescription className="sr-only">
            Usá las flechas para ver la imagen anterior o siguiente.
          </DialogDescription>
          {current && (
            <div className="relative">
              <img
                src={imageUrl(current.file, 1200)}
                alt={current.alt}
                className="max-h-[80vh] w-full rounded-md object-contain"
              />
              <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Imagen anterior"
                  className="grid size-10 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:text-gold"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Imagen siguiente"
                  className="grid size-10 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:text-gold"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
              <p className="px-2 pt-3 pb-1 text-center text-sm text-muted-foreground">
                {current.alt}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
