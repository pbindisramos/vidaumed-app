# /nueva-seccion

Crea una nueva sección para la homepage de Vidaumed, siguiendo las convenciones exactas del proyecto.

## Paso 1 — Recopilar info

Si el usuario no lo especificó, pregunta:

1. **Nombre** de la sección (ej. "Testimonios", "FAQ", "Galería", "Proceso")
2. **Contenido** — ¿qué información va? ¿elementos de lista, acordeón, grid?
3. **Fondo** — `white`, `light` (stone-50) o `teal` (oscuro, texto blanco)
4. **¿Interactiva?** — acordeones, tabs, hover states → necesita `"use client"`
5. **¿Posición?** — ¿dónde va en `page.tsx`? (antes/después de qué sección)

## Paso 2 — Plantilla base

```tsx
// src/components/sections/NombreSeccion.tsx
"use client"; // solo si necesita estado o framer-motion

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { staggerContainer, cardVariant, fadeInUp, viewportConfig } from "@/lib/animations";

export default function NombreSeccion() {
  return (
    <SectionWrapper background="light" id="nombre-seccion" animate={false}>
      {/* Header de sección */}
      <motion.div
        className="text-center mb-14"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <span className="inline-block text-teal-600 text-xs font-bold tracking-widest uppercase mb-3">
          Etiqueta superior
        </span>
        <h2 className="font-heading text-4xl font-bold text-stone-800">
          Título principal
        </h2>
        <p className="text-stone-500 max-w-md mx-auto text-sm leading-relaxed mt-4">
          Subtítulo opcional
        </p>
      </motion.div>

      {/* Grid de cards con stagger */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariant}
            className="bg-white rounded-2xl border border-stone-100 p-6 shadow-[0_2px_12px_0_rgb(0,0,0,0.05)]"
          >
            {/* contenido */}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
```

## Paso 3 — Animaciones disponibles

| Variante | Uso |
|---|---|
| `fadeInUp` | Aparece desde abajo (títulos, párrafos) |
| `fadeIn` | Solo fade (imágenes, overlays) |
| `slideInLeft` | Desliza desde la izquierda (columna izquierda) |
| `slideInRight` | Desliza desde la derecha (columna derecha) |
| `staggerContainer` | Wrapper de grid con delay entre hijos |
| `cardVariant` | Cada hijo de un stagger |

Siempre pasar `viewport={viewportConfig}` — dispara una vez con `margin: -80px`.

## Paso 4 — Checklist de implementación

- [ ] Crear `src/components/sections/NombreSeccion.tsx`
- [ ] Agregar `"use client"` solo si usa hooks de React o framer-motion
- [ ] Usar `cn()` de `@/lib/utils` para clases condicionales
- [ ] Headings con `font-heading` (Playfair Display)
- [ ] Links externos: `target="_blank" rel="noopener noreferrer"`
- [ ] CTAs de reserva: `buildWhatsAppUrl()` de `@/lib/utils`
- [ ] Iconos de lucide-react — verificar nombre: `node -e "const i=require('lucide-react'); console.log(Object.keys(i).filter(k=>k.toLowerCase().includes('TERM')))"`
- [ ] Importar y agregar en `src/app/page.tsx` en la posición correcta
- [ ] Si tiene link en nav → agregar en `src/data/navigation.ts` con el `id` como href (`#nombre-seccion`)

## Guía de fondos y cuándo usarlos

| `background` | Aspecto | Cuándo |
|---|---|---|
| `white` | Blanco puro | Contenido denso (servicios, texto largo) |
| `light` | Stone-50 suave | Secciones de contraste intermedio (doctor, FAQ) |
| `teal` | Verde oscuro · texto blanco | CTA final, contacto, secciones de alto impacto |

## Datos disponibles en el proyecto

- `src/data/services.ts` — lista de tratamientos (`Service[]`)
- `src/data/navigation.ts` — ítems de nav (`NavItem[]`)
- `src/types/index.ts` — interfaces: `Service`, `NavItem`, `Testimonial`, `ContactFormData`

Si la sección necesita nuevos datos (ej. testimonios, preguntas frecuentes), agregar el array en `src/data/` y el tipo en `src/types/index.ts`.
