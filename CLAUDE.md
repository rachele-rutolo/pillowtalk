# Pillowtalk — prototipo V4

Antes de escribir nada, lee **`PRD-Pillowtalk.md`** y **`docs/spec-prototipo.md`**. El PRD dice qué hace el producto y por qué; la spec dice cómo se construye y qué hace cada pantalla. Si se contradicen, gana el PRD.

## Reglas

1. **No inventes datos, cifras ni fuentes.** La fiabilidad es el diferenciador del producto. Donde falte un dato o una fuente, deja un marcador visible.
2. **No inventes decisiones de diseño.** Si algo no está en el PRD, en la spec o en Figma, pregunta.
3. **Los textos salen de Figma.** Lo que falte se escribe siguiendo el tono de marca, y los textos de consentimiento, edad y permisos se escriben limpios y sin ingenio.
4. **Sin framework y sin paso de compilación.** HTML, CSS y JavaScript. Una sola página: las pantallas son secciones que se muestran y se ocultan.
5. **CSS y JS en archivos separados por área**, para poder trabajar en paralelo sin chocar en las mismas líneas.
6. **Nadie trabaja sobre `main`.** Rama propia, sincronizada con `main` a diario, y se une en trozos pequeños y terminados.
7. **Accesibilidad de verdad:** `<button>`, `<a href>`, `<input>` con su `<label>`. Nunca un `div` con `onclick`. Zonas táctiles de 44 px o más.
8. **La tipografía Tiny Tiny viaja dentro del repositorio** en `.woff2`, declarada con `@font-face`. Si no viaja, se ve bien solo en los ordenadores que la tengan instalada.

## Las diez reglas de producto

Están en la sección 5 de la spec. Si el código las contradice, el código está mal. Las dos que más se olvidan:

- **Los dos permisos del onboarding son independientes.** En Figma se encienden juntos porque Figma no tiene estado; aquí no. Un consentimiento que no se puede dar por separado no es granular.
- **La pantalla de edad no dice cuál es la edad mínima ni para qué se pide.**

## Fuentes

- Figma: página *Prototipo*, sección **V4**. Los nombres de las pantallas en la spec son los nombres de los frames.
- Design system: página *Design System* del mismo archivo. Tiene dos defectos conocidos, listados en la sección 6 de la spec.
