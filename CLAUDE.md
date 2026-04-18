@AGENTS.md

# Vidaumed App — Contexto del proyecto

## ¿Qué es esto?
Landing page de **Vidaumed**, clínica de medicina estética en Temuco, Chile. Dirigida por la **Dra. Teresa Vidaurre** (cirujana · Univ. del Desarrollo · Licencia SIS 434431). El objetivo del sitio es convertir visitas en consultas vía WhatsApp.

## Stack de producción

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js (App Router) | 16 | Framework fullstack |
| React | 19 | UI |
| TypeScript | 5 | Tipado estricto |
| Tailwind CSS | 4 | Estilos (sin config file — usa `@theme` en CSS) |
| Framer Motion | 12 | Animaciones y transiciones |
| Zustand | 5 | Estado global de UI |
| React Hook Form | 7 | Manejo de formularios |
| Zod | 4 | Validación de esquemas |
| `@hookform/resolvers` | 5 | Usa `standardSchemaResolver` (Zod v4 implementa Standard Schema) |
| lucide-react | 1 | Iconos — **verificar nombre antes de importar** (v1.x no tiene `Instagram`, etc.) |
| tailwind-merge + clsx | latest | `cn()` en `src/lib/utils.ts` |

## Arquitectura de carpetas

```
src/
├── app/
│   ├── layout.tsx           # RootLayout: fuentes Inter+Playfair, Header, Footer
│   ├── page.tsx             # Homepage: compone secciones en orden
│   └── globals.css          # @theme Tailwind v4, utilities globales
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # "use client" · sticky · zustand · framer AnimatePresence
│   │   └── Footer.tsx       # Server Component · lucide icons
│   ├── sections/            # Una sección = un componente
│   │   ├── Hero.tsx         # "use client" · framer · blobs animados · stats card
│   │   ├── ValueProps.tsx   # "use client" · framer stagger · 3 pilares
│   │   ├── DoctorProfile.tsx# "use client" · slide in/out · credential chips
│   │   ├── Services.tsx     # "use client" · framer stagger grid de 8 tratamientos
│   │   └── Contact.tsx      # "use client" · RHF + Zod · WhatsApp submit
│   └── ui/
│       ├── Button.tsx       # "use client" · framer whileHover/Tap · variants
│       ├── Card.tsx         # "use client" · framer whileHover lift
│       └── SectionWrapper.tsx # "use client" · fadeInUp whileInView
├── store/
│   └── ui.ts               # Zustand: isMobileMenuOpen, toggle, close
├── hooks/
│   └── useScrolled.ts      # SSR-safe scroll detection
├── lib/
│   ├── utils.ts            # cn(), formatPhone(), buildWhatsAppUrl()
│   └── animations.ts       # Framer variants: fadeInUp, slideIn*, stagger, viewportConfig
├── data/
│   ├── services.ts         # Service[] — lista oficial de tratamientos
│   └── navigation.ts       # NavItem[] — links del menú
└── types/index.ts          # Service, NavItem, ContactFormData, Testimonial
```

## Convenciones de código

- **"use client" solo cuando**: `useState`, `useEffect`, `useRef`, framer-motion, zustand hooks.
- **Secciones**: `animate={false}` en `<SectionWrapper>` cuando se manejan animaciones manualmente dentro de la sección (evita doble animación).
- **Headings**: clase `font-heading` (Playfair Display) en todo `<h1>`, `<h2>`, `<h3>`.
- **Clases CSS**: usar `cn()` de `@/lib/utils` para condicionales — nunca string concatenation.
- **Iconos lucide**: verificar existencia antes de usar. `node -e "const i=require('lucide-react'); console.log(Object.keys(i).filter(k=>k.toLowerCase().includes('term')))"`.
- **Links externos**: siempre `target="_blank" rel="noopener noreferrer"`.
- **Imágenes**: usar `next/image` con dimensiones explícitas. Sin `<img>` directo.
- **Sin emojis** como iconos en producción — usar lucide-react.

## Paleta de marca

| Token Tailwind | Hex | Uso principal |
|---|---|---|
| `teal-600` | `#0d9488` | Primario: botones, acentos, links |
| `teal-700` | `#0f766e` | Hover de primario |
| `teal-100` | `#ccfbf1` | Fondos suaves, chips, badges |
| `teal-300` | `#5eead4` | Acentos sobre fondos oscuros |
| `stone-800` | `#292524` | Titulares sobre blanco |
| `stone-600` | `#57534e` | Párrafos, texto secundario |
| `stone-50`  | `#fafaf9` | Fondo de sección "light" |
| `stone-950` | `#0c0a09` | Footer background |

Tailwind v4 — custom tokens en `globals.css` bajo `@theme inline { --color-brand-* }`.

## Datos reales del negocio

```
WhatsApp:  +56 9 618 61768  →  buildWhatsAppUrl(msg) en src/lib/utils.ts
Email:     vidaumed@gmail.com
Instagram: @vidaumed
Location:  Temuco, Chile
Doctor:    Dra. Teresa Vidaurre · SIS 434431 · Univ. del Desarrollo
```

## Reglas de negocio (no modificar sin confirmación)

1. La **evaluación inicial es gratuita** — mencionarlo en CTAs.
2. Todos los botones de reserva abren WhatsApp (`buildWhatsAppUrl`). No hay backend.
3. El formulario de contacto envía a WhatsApp al hacer submit.
4. **No inventar tratamientos** — la lista oficial vive en `src/data/services.ts`.
5. El formulario usa **standardSchemaResolver** (no `zodResolver`) por incompatibilidad de Zod v4 con hookform resolvers v5 legacy.

## Comandos

```bash
npm run dev     # http://localhost:3000
npm run build   # Build de producción
npm run lint    # ESLint
```

## Skills disponibles

- `/nueva-seccion` — Guía para crear nuevas secciones siguiendo las convenciones del proyecto.
