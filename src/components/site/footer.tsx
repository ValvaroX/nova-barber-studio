import { Logo } from '@/components/site/navbar'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'
import { developer, navLinks, site } from '@/config/site'
import { whatsappUrl } from '@/lib/links'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {site.tagline}. Cortes, barba y afeitado clásico con estilo.
          </p>
        </div>

        <nav aria-label="Secciones">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Secciones
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Turnos
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <WhatsAppIcon className="size-4" />
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {year} {site.name}. Sitio de demostración con datos ficticios.
          </p>
          <p>
            Diseño y desarrollo por{' '}
            {developer.url ? (
              <a
                href={developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                {developer.name}
              </a>
            ) : (
              <span className="font-semibold text-gold">{developer.name}</span>
            )}
          </p>
        </div>
      </div>
    </footer>
  )
}
