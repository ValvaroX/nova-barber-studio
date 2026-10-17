import { Clock } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/site/reveal'
import { services } from '@/config/site'
import { whatsappUrl } from '@/lib/links'
import { cn } from '@/lib/utils'

export function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Nuestros servicios"
          description="Precios de referencia para esta demostración. Consultá disponibilidad por WhatsApp."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.name} delay={(i % 3) * 100}>
              <article
                className={cn(
                  'group relative flex h-full flex-col rounded-lg border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-25px_var(--gold)] motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                  service.featured ? 'border-gold/50' : 'border-border',
                )}
              >
                {service.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold tracking-widest text-primary-foreground uppercase">
                    Recomendado
                  </span>
                )}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{service.name}</h3>
                  <p className="font-display text-2xl font-semibold whitespace-nowrap text-gold">
                    {service.price}
                  </p>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="size-4" aria-hidden />
                    {service.duration}
                  </span>
                  <a
                    href={whatsappUrl(
                      `Hola, quiero consultar un turno para: ${service.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gold underline-offset-4 hover:underline"
                    aria-label={`Consultar turno para ${service.name} por WhatsApp`}
                  >
                    Consultar →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
