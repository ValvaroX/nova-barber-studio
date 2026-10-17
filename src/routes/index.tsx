import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { Gallery } from '@/components/site/gallery'
import { About } from '@/components/site/about'
import { Hours } from '@/components/site/hours'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'

export const Route = createFileRoute('/')({
  component: Home,
})

/** Página única: el orden de las secciones se define acá. */
function Home() {
  return (
    <>
      <a
        href="#servicios"
        className="sr-only z-[60] rounded bg-gold px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Hours />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
