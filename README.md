# Nova Barber Studio — sitio de demostración

Landing page profesional para una barbería ficticia, creada por **NovaWeb** como demostración comercial. Es una sola página con fondo oscuro, detalles dorados y blancos, animaciones suaves y diseño adaptable a computadoras, tablets y celulares.

> Todos los datos (precios, horarios, dirección y número de WhatsApp) son ficticios.

## Tecnologías

| Para qué                | Tecnología                                                   |
| ----------------------- | ------------------------------------------------------------ |
| Framework               | TanStack Start (React 19 + TanStack Router), con Vite        |
| Estilos                 | Tailwind CSS 4 + variables de color en `src/styles.css`      |
| Componentes base        | shadcn/ui (Radix UI): botones, menú lateral, visor de fotos  |
| Íconos                  | lucide-react + logo SVG de WhatsApp                          |
| Tipografías             | Google Fonts: Cormorant Garamond (títulos) y Manrope (texto) |
| Imágenes                | Generadas con IA para este proyecto (uso libre), optimizadas con Netlify Image CDN |
| Hosting                 | Netlify                                                      |

No hay base de datos, reservas ni pagos: los turnos se consultan por WhatsApp.

## Cómo correrlo en tu computadora

```bash
npm install
npm run dev        # http://localhost:3000
# o, con las funciones de Netlify (optimización de imágenes incluida):
netlify dev        # http://localhost:8888
```

## Estructura del código

```
src/
├── config/site.ts          ← TODO el contenido editable (textos, precios, horarios, WhatsApp…)
├── lib/links.ts            ← arma el enlace de WhatsApp y las URLs de imágenes optimizadas
├── components/site/        ← una sección por archivo
│   ├── navbar.tsx          barra de navegación + menú para celulares
│   ├── hero.tsx            portada con título y botón "Consultar turno"
│   ├── services.tsx        servicios y precios
│   ├── gallery.tsx         galería con visor ampliado
│   ├── about.tsx           presentación de la barbería
│   ├── hours.tsx           horarios y ubicación (marcados como demostración)
│   ├── contact.tsx         llamado a la acción de WhatsApp
│   ├── footer.tsx          pie con la marca NovaWeb
│   ├── whatsapp-float.tsx  botón flotante de WhatsApp
│   └── reveal.tsx          animación de aparición al hacer scroll + títulos de sección
├── routes/index.tsx        la página: define el orden de las secciones
├── routes/__root.tsx       <head>: título, descripción, fuentes
└── styles.css              colores, tipografías y animaciones
public/img/                 imágenes del sitio
```

## Cómo funciona cada sección

1. **Navegación** — fija arriba; transparente sobre la portada y con fondo al bajar. En celulares se reemplaza por un botón ☰ que abre un panel lateral.
2. **Portada** — foto a pantalla completa con un leve zoom de entrada. "Consultar turno" abre WhatsApp con un mensaje ya escrito; "Ver servicios" baja a la lista.
3. **Servicios** — tarjetas generadas desde la lista `services`. Cada "Consultar →" abre WhatsApp con el nombre del servicio en el mensaje.
4. **Galería** — grilla de fotos; al tocar una se abre en grande, con flechas (también con el teclado ← →).
5. **Nosotros** — foto y texto breve con tres destacados. No incluye reseñas de clientes.
6. **Horarios y ubicación** — tabla de horarios y dirección, con un aviso visible de que son datos de demostración.
7. **Contacto** — botón grande de WhatsApp. También hay un botón flotante verde en todas las pantallas.
8. **Pie de página** — enlaces a las secciones y "Diseño y desarrollo por NovaWeb".

## Cómo modificar el sitio

### Textos, precios, horarios y WhatsApp → `src/config/site.ts`

- **WhatsApp**: cambiá `whatsapp.number` (solo dígitos, con código de país; ej. Argentina `549` + área + número) y `whatsapp.defaultMessage`.
- **Precios / servicios**: editá, agregá o borrá objetos en `services`. `featured: true` le pone la etiqueta "Recomendado".
- **Horarios y dirección**: listas `hours` y `location`.
- **Portada y "Nosotros"**: objetos `site.hero` y `site.about`.
- **Menú**: `navLinks` (el `id` debe coincidir con el de la sección).
- **Crédito de NovaWeb**: `developer.url` — si ponés la URL de tu web, el nombre pasa a ser un enlace.

### Colores y tipografías → `src/styles.css`

Al principio del archivo, en `:root`:

```css
--gold: #c9a45c;        /* dorado principal (botones, detalles) */
--gold-light: #e6cd94;  /* dorado claro (brillos) */
--ink: #0b0b0c;         /* fondo */
--ink-soft: #141416;    /* fondo de tarjetas */
--ivory: #f5f1e8;       /* texto */
```

Para cambiar tipografías, modificá `--font-heading` / `--font-body` y el enlace de Google Fonts en `src/routes/__root.tsx`.

### Imágenes → `public/img/`

Copiá tus fotos en `public/img/` y poné el nombre del archivo en `src/config/site.ts` (`hero.image`, `about.image` o la lista `gallery`, con su texto `alt`). No hace falta achicarlas: Netlify las redimensiona y convierte a WebP automáticamente.

### Título de la pestaña y descripción para Google → `src/routes/__root.tsx`

Variables `siteName` y `siteDescription`.
