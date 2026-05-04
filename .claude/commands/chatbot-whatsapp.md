# /chatbot-whatsapp

Agrega un chatbot flotante a la homepage de Vidaumed que recolecta datos básicos del visitante y abre WhatsApp con un mensaje pre-armado. Sin backend, sin dependencias externas.

## Comportamiento esperado

1. Burbuja flotante fija (bottom-right, `z-50`) con icono `MessageCircle` de lucide-react.
2. Al click → panel se abre con animación framer (slide + fade desde abajo a la derecha).
3. Flujo guiado de 3 pasos:
   - **Paso 1** — chips con servicios (de `src/data/services.ts`)
   - **Paso 2** — input nombre (RHF + Zod)
   - **Paso 3** — input horario preferido (texto libre opcional)
4. Botón final "Continuar en WhatsApp" → `buildWhatsAppUrl(msg)` con mensaje:
   > Hola Dra. Vidaurre, soy {nombre}. Me interesa **{servicio}**. Horario: {horario}.
5. Mensajes saludo de la "doctora" (avatar + nombre) imitando un chat real.

## Archivos a crear / tocar

| Archivo | Rol |
|---|---|
| `src/components/widgets/ChatbotWhatsApp.tsx` | `"use client"` · panel + lógica · framer · RHF + zod (`standardSchemaResolver`) |
| `src/store/chatbot.ts` | Zustand: `isOpen`, `step`, `data`, `open()`, `next()`, `reset()` |
| `src/app/layout.tsx` | Montar `<ChatbotWhatsApp />` después del `<Footer />` |

No tocar `src/components/sections/Contact.tsx` — el form existente sigue funcionando.

## Convenciones obligatorias

- `"use client"` (usa zustand + framer + RHF).
- Estilos: `teal-600` primario, `font-heading` en títulos del panel, `cn()` para condicionales.
- Iconos solo de lucide-react: `MessageCircle`, `X`, `Send`, `ArrowLeft`. **Verificar antes de importar.**
- Link de WhatsApp con `target="_blank" rel="noopener noreferrer"`.
- Validación Zod: nombre min 2 chars; servicio requerido; horario opcional.
- Animaciones: usar variantes ya existentes en `src/lib/animations.ts` cuando aplique; si necesitas nuevas (ej. `slideInBottomRight`), agregarlas ahí.
- Accesibilidad: `aria-label` en botón flotante, `role="dialog"` en panel, cerrable con `Esc`.

## Checklist

- [ ] Burbuja flotante visible en mobile y desktop, no tapa el footer
- [ ] Panel responsive (max-w-sm en mobile, no full-screen)
- [ ] El chip de servicio seleccionado queda highlighted (`bg-teal-600 text-white`)
- [ ] Submit final abre `wa.me/56961861768?text=...` en nueva pestaña
- [ ] Estado se resetea al cerrar el panel
- [ ] No agrega dependencias nuevas a `package.json`
- [ ] `npm run lint` pasa sin warnings

## Mensaje pre-armado (template)

```ts
const msg = `Hola Dra. Vidaurre, soy ${data.nombre}. Me interesa una consulta sobre *${data.servicio}*.${data.horario ? ` Horario preferido: ${data.horario}.` : ""}`;
window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
```
