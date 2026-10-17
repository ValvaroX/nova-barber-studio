import { site } from '@/config/site'

/** Enlace de WhatsApp con un mensaje precargado. */
export function whatsappUrl(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

/**
 * Imagen optimizada por Netlify Image CDN: redimensiona y convierte a WebP
 * para que la página cargue rápido. `file` es el nombre dentro de /public/img.
 */
export function imageUrl(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=70`
}

/** `srcSet` con varios anchos para que cada pantalla descargue el tamaño justo. */
export function imageSrcSet(file: string, widths: number[]) {
  return widths.map((w) => `${imageUrl(file, w)} ${w}w`).join(', ')
}
