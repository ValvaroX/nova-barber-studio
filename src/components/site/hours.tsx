import { Clock, Info, MapPin } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/site/reveal'
import { hours, location } from '@/config/site'

export function Hours() {
  return (
    <section id="horarios" className="border-y border-border bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading eyebrow="Horarios y ubicación" title="Dónde y cuándo encontrarnos" />

        <Reveal className="mx-auto mb-10 flex max-w-2xl items-start gap-3 rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 text-sm">
          <Info className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
          <p>
            <strong className="font-semibold text-gold">Datos de demostración:</strong>{' '}
            los horarios y la dirección de esta sección son ficticios.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-lg border border-border bg-card p-7 sm:p-9">
            <h3 className="flex items-center gap-3 font-display text-2xl font-semibold">
              <Clock className="size-5 text-gold" aria-hidden />
              Horarios
            </h3>
            <dl className="mt-6 divide-y divide-border">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-foreground/85">{h.day}</dt>
                  <dd
                    className={
                      h.time === 'Cerrado'
                        ? 'text-muted-foreground'
                        : 'font-semibold tabular-nums text-foreground'
                    }
                  >
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal
            delay={150}
            className="relative overflow-hidden rounded-lg border border-border bg-card p-7 sm:p-9"
          >
            {/* Mapa decorativo: líneas que simulan calles (no es un mapa real) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--gold)_1px,transparent_1px),linear-gradient(90deg,var(--gold)_1px,transparent_1px)] [background-size:44px_44px]"
            />
            <div className="relative">
              <h3 className="flex items-center gap-3 font-display text-2xl font-semibold">
                <MapPin className="size-5 text-gold" aria-hidden />
                Ubicación
              </h3>
              <address className="mt-6 not-italic">
                <p className="font-display text-3xl font-semibold">{location.address}</p>
                <p className="mt-1 text-lg text-muted-foreground">{location.city}</p>
              </address>
              <div className="mt-8 flex items-center gap-4">
                <span className="relative grid size-14 place-items-center rounded-full border border-gold/50 bg-background">
                  <span className="absolute inset-0 animate-ping rounded-full border border-gold/40 motion-reduce:animate-none" />
                  <MapPin className="size-6 text-gold" aria-hidden />
                </span>
                <p className="text-sm text-muted-foreground">{location.note}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
