import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks, site } from '@/config/site'
import { whatsappUrl } from '@/lib/links'
import { cn } from '@/lib/utils'

export function Logo() {
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-2.5 rounded-sm"
      aria-label={`${site.name} — volver al inicio`}
    >
      <span className="grid size-9 place-items-center rounded-full border border-gold/60 font-display text-lg font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-background">
        N
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-semibold tracking-wide">
          Nova
        </span>
        <span className="block text-[0.6rem] font-semibold tracking-[0.35em] text-gold uppercase">
          Barber Studio
        </span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Sección elegida desde el menú móvil; se desplaza al cerrar el panel.
  const pendingTarget = useRef<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300 motion-reduce:transition-none',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6"
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="relative text-sm font-medium text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:text-gold hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full px-5 sm:inline-flex">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Consultar turno
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] max-w-xs border-border bg-background"
              onCloseAutoFocus={(event) => {
                const id = pendingTarget.current
                if (!id) return
                event.preventDefault()
                pendingTarget.current = null
                requestAnimationFrame(() => {
                  document.getElementById(id)?.scrollIntoView()
                  history.replaceState(null, '', `#${id}`)
                })
              }}
            >
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <SheetDescription className="sr-only">
                Navegación por las secciones del sitio
              </SheetDescription>
              <div className="flex h-full flex-col px-6 pt-16 pb-8">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={(event) => {
                          event.preventDefault()
                          pendingTarget.current = link.id
                          setOpen(false)
                        }}
                        className="block border-b border-border py-4 font-display text-2xl transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-auto rounded-full">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    Consultar turno por WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
