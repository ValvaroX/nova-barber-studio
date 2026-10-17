import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'
import { site } from '@/config/site'
import { imageSrcSet, imageUrl, whatsappUrl } from '@/lib/links'

export function Hero() {
  const { hero } = site
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <img
        src={imageUrl(hero.image, 1600)}
        srcSet={imageSrcSet(hero.image, [800, 1200, 1600, 2000])}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full animate-[hero-zoom_18s_ease-out_both] object-cover motion-reduce:animate-none"
      />
      {/* Degradados para que el texto se lea sobre la foto */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/30"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto w-full max-w-content px-4 pt-24 pb-20 sm:px-6">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 motion-reduce:animate-none">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" aria-hidden />
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl">
            {hero.title} <span className="text-gold-gradient italic">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-foreground/75">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-8 text-base shadow-[0_0_40px_-10px_var(--gold)]"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                {hero.primaryCta}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-foreground/30 bg-transparent px-8 text-base hover:border-gold hover:bg-transparent hover:text-gold dark:bg-transparent"
            >
              <a href="#servicios">{hero.secondaryCta}</a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        aria-label="Bajar a servicios"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-foreground/50 transition-colors hover:text-gold sm:block"
      >
        <ChevronDown className="size-7 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  )
}
