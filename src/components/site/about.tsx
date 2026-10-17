import { Reveal } from '@/components/site/reveal'
import { site } from '@/config/site'
import { imageSrcSet, imageUrl } from '@/lib/links'

export function About() {
  const { about } = site
  return (
    <section id="nosotros" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-content items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="absolute -inset-3 translate-x-4 translate-y-4 rounded-lg border border-gold/40"
          />
          <img
            src={imageUrl(about.image, 700)}
            srcSet={imageSrcSet(about.image, [500, 700, 1000])}
            sizes="(min-width: 768px) 28rem, 90vw"
            alt={about.imageAlt}
            loading="lazy"
            decoding="async"
            width={700}
            height={875}
            className="relative aspect-[4/5] w-full rounded-lg object-cover"
          />
        </Reveal>

        <Reveal delay={150}>
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Nosotros
          </p>
          <h2 className="font-display text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            {about.title}
          </h2>
          <div className="mt-5 h-px w-16 bg-gold/60" aria-hidden />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {about.highlights.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-2xl font-semibold text-gold sm:text-3xl">
                  {h.value}
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{h.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
