import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'
import { whatsappUrl } from '@/lib/links'

export function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-card via-background to-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 size-80 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
          />
          <p className="relative mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Contacto
          </p>
          <h2 className="relative mx-auto max-w-2xl font-display text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            ¿Listo para tu próximo corte?
          </h2>
          <p className="relative mx-auto mt-5 max-w-reading text-base text-muted-foreground sm:text-lg">
            Escribinos por WhatsApp y te respondemos con los horarios disponibles.
          </p>
          <Button
            asChild
            size="lg"
            className="relative mt-10 h-14 rounded-full px-10 text-base shadow-[0_0_50px_-12px_var(--gold)]"
          >
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-6" />
              Escribir por WhatsApp
            </a>
          </Button>
          <p className="relative mt-6 text-xs text-muted-foreground">
            Sitio de demostración: el número de WhatsApp es de ejemplo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
