/**
 * CONTENIDO DEL SITIO — Nova Barber Studio
 *
 * Todo el texto editable de la página vive en este archivo: nombre, WhatsApp,
 * servicios y precios, galería, presentación, horarios y ubicación.
 * Cambiá los valores y la página se actualiza sola; no hace falta tocar los
 * componentes.
 */

export const site = {
  name: 'Nova Barber Studio',
  shortName: 'Nova',
  tagline: 'Barbería de autor',

  /**
   * WhatsApp: número en formato internacional, solo dígitos, sin "+",
   * espacios ni guiones. Ej.: Argentina 54 + 9 + código de área + número.
   * El número actual es de DEMOSTRACIÓN: reemplazalo por el real del cliente.
   */
  whatsapp: {
    number: '5491100000000',
    defaultMessage:
      'Hola Nova Barber Studio, quiero consultar disponibilidad de turnos.',
  },

  hero: {
    eyebrow: 'Barbería de autor · Desde 2026',
    title: 'Estilo, precisión y carácter',
    highlight: 'en cada corte.',
    subtitle:
      'Cortes clásicos y modernos, perfilado de barba y afeitado tradicional en un espacio pensado para que te relajes.',
    primaryCta: 'Consultar turno',
    secondaryCta: 'Ver servicios',
    image: 'hero.png',
  },

  about: {
    title: 'Un estudio para quienes cuidan los detalles',
    paragraphs: [
      'Nova Barber Studio nace de la idea de unir la barbería clásica con una mirada actual. Cada servicio empieza con una charla para entender tu estilo y termina con un acabado prolijo que dura.',
      'Trabajamos con turnos para dedicarle a cada persona el tiempo que merece, en un ambiente tranquilo, con buena música y productos de calidad.',
    ],
    highlights: [
      { value: 'Con turno', label: 'Atención sin esperas' },
      { value: '1 a 1', label: 'Atención personalizada' },
      { value: 'Premium', label: 'Productos profesionales' },
    ],
    image: 'about.png',
    imageAlt: 'Barbero de pie con delantal negro dentro del estudio',
  },
}

/** Servicios y precios (ficticios). `price` se muestra tal cual está escrito. */
export const services = [
  {
    name: 'Corte clásico',
    description: 'Corte a tijera o máquina, lavado y peinado final.',
    duration: '40 min',
    price: '$12.000',
  },
  {
    name: 'Fade / Degradé',
    description: 'Degradé a medida con terminación a navaja.',
    duration: '50 min',
    price: '$14.000',
  },
  {
    name: 'Perfilado de barba',
    description: 'Diseño, recorte y perfilado con toalla caliente.',
    duration: '30 min',
    price: '$9.000',
  },
  {
    name: 'Afeitado tradicional',
    description: 'Navaja, espuma, toalla caliente y bálsamo post afeitado.',
    duration: '40 min',
    price: '$11.000',
  },
  {
    name: 'Corte + Barba',
    description: 'El combo completo para salir impecable.',
    duration: '70 min',
    price: '$19.000',
    featured: true,
  },
  {
    name: 'Corte infantil',
    description: 'Para menores de 12 años, con paciencia y buena onda.',
    duration: '30 min',
    price: '$9.500',
  },
]

/** Galería: los archivos van en /public/img. `alt` describe la imagen. */
export const gallery = [
  { file: 'g-fade.png', alt: 'Barbero realizando un degradé con máquina' },
  { file: 'g-beard.png', alt: 'Perfilado de barba con tijera y peine' },
  { file: 'g-shave.png', alt: 'Afeitado tradicional con navaja y espuma' },
  { file: 'g-chair.png', alt: 'Sillón de barbero frente a un espejo dorado' },
  { file: 'g-tools.png', alt: 'Herramientas de barbería sobre mármol negro' },
  { file: 'hero.png', alt: 'Interior del estudio con sillones y espejos' },
]

/** Horarios y ubicación — DATOS DE DEMOSTRACIÓN. */
export const hours = [
  { day: 'Lunes', time: 'Cerrado' },
  { day: 'Martes a Viernes', time: '10:00 – 20:00' },
  { day: 'Sábados', time: '09:00 – 18:00' },
  { day: 'Domingos', time: 'Cerrado' },
]

export const location = {
  address: 'Av. Ejemplo 1234',
  city: 'Ciudad Demo',
  note: 'Dirección ficticia, solo con fines de demostración.',
}

/** Enlaces de la barra de navegación (el `id` coincide con cada sección). */
export const navLinks = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'galeria', label: 'Galería' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'contacto', label: 'Contacto' },
]

/** Desarrollador del sitio (pie de página). Si `url` está vacío, se muestra solo el nombre. */
export const developer = {
  name: 'NovaWeb',
  url: '',
}
