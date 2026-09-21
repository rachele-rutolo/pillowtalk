# Especificación de construcción — Prototipo Pillowtalk V4

**Para:** quien monte el prototipo en HTML, CSS y JavaScript.
**Estado:** completa. Se actualiza cuando cambie el PRD o el design system.

---

## 0. Cómo se usa este documento

Hay tres fuentes y un orden de prioridad. Cuando se contradigan, gana la de más arriba:

1. **El PRD** (`PRD-Pillowtalk.md`). Es la verdad sobre qué hace el producto y por qué. La sección 6.2 describe el onboarding pantalla a pantalla, 6.4 los requisitos no funcionales, 7.1 el enfoque técnico.
2. **Este documento.** Es la verdad sobre cómo se construye: qué pantallas hay, qué hace cada clic, qué está fijado a mano para la demo.
3. **El archivo de Figma**, página *Prototipo*, sección **V4**. Es la verdad sobre cómo se ve. Los nombres de las pantallas de este documento son exactamente los nombres de los frames.

El documento de tono de marca existe aparte y gobierna cómo se escribe, pero **el PRD gana siempre sobre él**.

**Lo que no se hace nunca:** inventar datos, cifras o fuentes. El requisito de fiabilidad de 6.4 es el diferenciador del producto, y un dato inventado lo rompe justo en la pantalla que debería demostrarlo. Donde falte un dato o una fuente, se deja un marcador visible.

---

## 1. Qué es este prototipo

Un sitio estático que se presenta como la sesión de una usuaria concreta. No aprende de nadie: **todo lo que parece personalizado está fijado a mano** (ver PRD 7.3).

- Una sola página. Las pantallas son secciones del mismo documento que se muestran y se ocultan.
- Sin framework, sin paso de compilación. HTML, CSS y JavaScript.
- CSS y JS repartidos en archivos por área, para poder trabajar en paralelo sin chocar.
- Se publica en Netlify desde GitHub. Esa URL es el entregable.

### El perfil de la demo

Todo el contenido visible tiene que ser coherente con esta persona:

| Dato | Valor |
|---|---|
| Nombre | Lola |
| Nos dirigimos a ella con | Ella |
| Identidad | Mujer |
| Orientación | Bisexual |
| Situación | En pareja monógama |
| Temas | Deseo y fantasías · Límites |
| Qué la trajo aquí | Sin responder |

El perfil no es hetero y monógamo a propósito: así la misma demo sirve de prueba del requisito de inclusividad de 6.4.

---

## 2. El recorrido de la demo

Este es el camino que se enseña en la presentación. Todo lo demás existe y funciona, pero no se recorre.

```
Pantalla de inicio del móvil
  → (tocar el icono)
Edad y términos
  → (Entrar)
Home · genérica              ← aquí se explica en voz alta que se puede seguir así
  → (clic en la franja superior)
Modal · crear cuenta
  → (Crear cuenta)
Crear cuenta
  → (Crear cuenta)
Onboarding · inicio
  → (Empezar)
Onboarding · nombre → pronombres → permisos
  → (encender los permisos, Continuar)
Onboarding · identidad → orientación → estado relacional → temas → qué te ha traído aquí
  → (Continuar)
Onboarding · notificaciones
  → (Sí, avisadme)
Onboarding · resumen
  → (Entrar)
Home · personalizada
```

---

## 3. Las pantallas

36 pantallas. El nombre es el del frame en Figma.

### Entrada

**Pantalla de inicio del móvil**
Simula la pantalla de inicio de un teléfono. Rejilla de doce iconos: once genéricos y apagados, y Pillowtalk encendido en la tercera fila, no el primero. Es el único sitio del prototipo donde se demuestra el requisito de discreción de 6.4 y US-08: la app está ahí y no dice de qué va.
**Pendiente:** el icono es provisional. El layer se llama `icono Pillowtalk · PROVISIONAL`.
- Tocar el icono de Pillowtalk → Edad y términos.

**Edad y términos**
Fecha de nacimiento en tres campos (DD / MM / AAAA) y una casilla para aceptar los términos de uso, con enlace a la política de privacidad.
**La pantalla no dice cuál es la edad mínima ni para qué se pide la fecha.** Decirlo enseñaría cuál es la respuesta que deja pasar. Por lo mismo la fecha es un campo abierto y no una pregunta de sí o no.
Es lo único obligatorio de todo el recorrido (US-26).
- Entrar → Home · genérica.
- Estado no construido: quien declara ser menor no entra. Se declara en el PRD 6.5 y no se monta.

### Home

**Home · genérica** y **Home · personalizada**
Misma estructura, dos estados. En orden: entrada al mazo, mitos, pregunta del día, contenido para ver y escuchar.
**Pendiente:** hoy el contenido de las dos es idéntico. Antes de montar hay que decidir qué piezas van en la genérica, porque la diferencia entre las dos es lo que demuestra US-25. La genérica enseña contenido para cualquiera; la personalizada, contenido coherente con el perfil de Lola.
- En la genérica, la franja superior tiene un disparador invisible (`disparador demo · abre el modal de cuenta`) que abre **Modal · crear cuenta**. Es un recurso de demo: permite al presentador hacer que el modal aparezca en el momento que quiera sin que se vea el clic. En el prototipo HTML puede ser lo mismo, o un temporizador, o un clic en cualquier parte: lo que importa es que el modal llegue cuando el presentador quiere.

### Invitaciones a crear cuenta

**Modal · crear cuenta**
Hoja inferior sobre la home atenuada. Dice que la app funciona sin cuenta y para qué sirve la cuenta.
- Crear cuenta → Crear cuenta.
- Ahora no → Home · genérica.

**Modal · al guardar**
La misma hoja, pero sobre una pantalla de contenido y disparada al guardar algo sin tener cuenta. Llega en el momento en que la cuenta le sirve al usuario: acaba de apartar algo y lo que se le ofrece es no perderlo.
- Se abre desde el botón de favorito de **Contenido · artículo**.
- Crear cuenta → Crear cuenta.
- Ahora no → Contenido · artículo.

### Cuenta

**Crear cuenta**
Google, Apple, o correo y contraseña. La contraseña lleva el icono de ojo para mostrarla.
- Crear cuenta → Onboarding · inicio.
- Ya tengo cuenta → Iniciar sesión.
- Atrás → Modal · crear cuenta.

**Iniciar sesión**
Las mismas tres vías, más el estado de error visible en la pantalla.
- Entrar → Home · personalizada.
- ¿No tienes cuenta? Crear cuenta → Crear cuenta.
- Atrás → Crear cuenta.

Quien entra con Google o con Apple no tiene contraseña propia en la app: la fila de Ajustes que permite cambiarla no aplica a todo el mundo.

### Onboarding, parte 1

Este tramo es igual de largo para todo el mundo. Nada de lo que se pregunta aquí es dato de categoría especial, por eso va antes del consentimiento. El indicador de avance muestra tres pasos.

**Onboarding · inicio** — qué es, cuánto dura.
- Empezar → Onboarding · nombre.
- Saltar → Home · genérica.

**Onboarding · nombre** — cómo llamar a la usuaria. Si ha entrado con Google o Apple, el campo llega relleno.
**Onboarding · pronombres** — Ella / Él / Elle. Es una preferencia de lenguaje de la interfaz, no una declaración de identidad: por eso no necesita consentimiento. Quien la salta recibe textos sin marca de género, y **eso obliga a que toda la copy de la app funcione sin saber el género**.

**Onboarding · permisos** y **Onboarding · permisos · aceptados**
Dos interruptores separados, apagados de partida, y un botón de continuar. Van antes de las preguntas sensibles porque el permiso se pide antes de recoger.
- Interruptor 1: lo que la usuaria responda a continuación.
- Interruptor 2: lo que haga dentro de la app (búsquedas, guardados, respuestas a la pregunta del día).
**El ramo depende solo del primer interruptor:**
- Apagados → Continuar → **Onboarding · notificaciones** (se salta toda la parte 2).
- Encendidos → Continuar → **Onboarding · identidad**.

### Onboarding, parte 2

Solo existe si el primer permiso está encendido. Todo lo que se pregunta aquí es dato de categoría especial del RGPD y todo se puede omitir. El indicador muestra cinco pasos.

En orden: **identidad** (selección única + campo abierto), **orientación** (chips, selección múltiple + campo abierto), **estado relacional** (selección única + campo abierto), **temas** (chips: cómo funciona el cuerpo, comunicación en pareja, deseo y fantasías, límites, consentimiento, masturbación), **qué te ha traído aquí** (checkbox, selección múltiple, con "Prefiero no decirlo").

Temas y "qué te ha traído aquí" no son dos listas del mismo tipo: una pregunta qué le interesa, la otra por qué está aquí. La segunda va la última porque es la más íntima.

En todas: Continuar y Saltar llevan a la siguiente. Atrás vuelve a la anterior.

### Cierre

**Onboarding · notificaciones**
Se piden al final y también a quien ha omitido todas las preguntas: son el único mecanismo que genera ocasión de uso (US-20).
- Sí, avisadme → Onboarding · resumen.
- Ahora no → Onboarding · resumen.

**Onboarding · resumen**
Cierra un onboarding completo. Quien lo abandona a medias no lo ve.
- Entrar → Home · personalizada.

### App

Estas pantallas ya existían y están cableadas entre ellas por la navbar y los botones de atrás. No las toca el onboarding salvo donde se dice.

**Explorar**, **Explorar · detalle card**, **Explorar · pregunta del día**
**Biblioteca**, **Biblioteca · búsqueda activa**, **Búsqueda · con resultados**, **Búsqueda · sin resultados**, **Biblioteca · Favoritos**, **Biblioteca · Ver más tarde**
**Contenido · artículo**, **Contenido · vídeo**, **Contenido · pódcast**, **Reproductor a pantalla completa**
**Perfil**

**Perfil · Datos**
Una sola pantalla con todos los datos del onboarding y sus dos permisos, cada uno con su valor y su acción. Lo que se omitió aparece como pendiente y se puede añadir.
- Se abre desde la fila Datos de **Perfil**.
- Atrás → Perfil.
- En Ajustes, la fila de cuenta muestra "borrar cuenta" a quien tiene cuenta e "iniciar sesión" a quien no la tiene.

---

## 4. Lo que en Figma son dos pantallas y en HTML es una sola

Figma no tiene estado: un botón lleva a un sitio y ya. En HTML sí lo hay, así que varias parejas de frames se colapsan.

| En Figma | En HTML |
|---|---|
| Home · genérica y Home · personalizada | Una home con dos estados de contenido |
| Onboarding · permisos y · permisos · aceptados | Una pantalla con dos interruptores de verdad |
| Los chips y checkbox marcados o no | Estado real del control |
| Modal · crear cuenta y Modal · al guardar | Un mismo componente de hoja inferior, con dos textos |

Los interruptores de la pantalla de permisos, en Figma, se encienden los dos a la vez porque no hay estado. **En HTML tienen que ser independientes**, porque el PRD 6.4 exige un consentimiento granular y dos interruptores que se encienden juntos no lo son.

---

## 5. Reglas que no se rompen

Vienen del PRD. Si el código las contradice, el código está mal.

1. Solo la edad y los términos son obligatorios. Todo lo demás se salta, pregunta a pregunta o de una vez.
2. La pantalla de edad no nombra el límite ni explica para qué se pide.
3. El consentimiento necesita una acción de la usuaria. Los interruptores están apagados de partida: una casilla marcada de antemano no es un consentimiento válido.
4. Sin el primer permiso no hay parte 2. No se hace ninguna pregunta sensible antes de tenerlo.
5. El resumen solo cierra un onboarding completo.
6. Los pronombres viven fuera del consentimiento y la identidad dentro.
7. Quien no responde nada ve contenido genérico, no una versión recortada de la app.
8. La finalidad que se declara es la que existe. La V4 no tiene profesionales, así que el consentimiento no los menciona.
9. Todo contenido lleva autoría o revisión identificable, y los datos llevan fuente. Donde no la haya, marcador visible.
10. Los textos que explican cómo funciona algo o qué pasa con los datos se escriben limpios y directos. El ingenio va en el titular, y en el consentimiento no va en ninguna parte.

---

## 6. Design system

Está en la página *Design System* del archivo de Figma. Los componentes se usan como están: no se rehacen en CSS a mano.

### Estilos de texto

| Estilo | Fuente | Tamaño |
|---|---|---|
| Titular/L | DM Sans Regular | 32 |
| Titular/M | DM Sans Regular | 20 |
| Encabezado | DM Sans SemiBold | 16 |
| Cuerpo/Destacado | DM Sans SemiBold | 14 |
| Cuerpo/Regular | DM Sans Regular | 14 |
| Secundario | DM Sans Regular | 12 |
| Detalle/Regular | DM Sans Regular | 10 |
| Detalle/Fuente | DM Sans Bold | 10 |
| Lettering/XL · L · M | Tiny Tiny Regular | 48 · 32 · 20 |

Las pantallas del onboarding ya están enlazadas a estos estilos, así que los tamaños del prototipo salen de aquí y no se escriben a mano. La única excepción es **Pantalla de inicio del móvil**, que imita la pantalla de un teléfono y no es interfaz de la app.

### Color y radios

Los tokens de color están documentados en los bloques **Primitive**, **Background**, **Content** y **Border** de esa misma página. Como variables locales solo existe la colección **Radius** (`sm`, `md`, `lg`, `xl`, `full`).

### Tipografías

**DM Sans** para la interfaz, desde Google Fonts. **Tiny Tiny** para el lettering de las cards, de autoría propia del equipo: el archivo tiene que viajar **dentro del repositorio**, en `.woff2`, declarado con `@font-face`. Si no viaja, se ve bien solo en los ordenadores que la tengan instalada y cae a una tipografía de sustitución en cualquier otro dispositivo.

### Componentes

Con variantes: Button, Text Input, Checkbox, Radio button, Switch, Tab Button, Badge, Modal, Chip de filtro, Card pregunta del día, Card vídeo, Card de mito, Pieza de contenido, Botón favorito, Botón ver más tarde, Indicador guardado, Ficha de autoría, Botón reproducir, Mini player, Segmento de avance, Fila de dato.

Sin variantes: Navbar, Bloque de fuente, Bloque de feedback, Indicador de avance, Cabecera de onboarding, Entrada al mazo, Botón atrás.

Iconos: ocho vienen de una librería externa (plus, x, check, caret, arrow) y cuatro son locales (apple, google, eye, eye-slash). Se exportan de Figma y viven en el repositorio.

Una cosa práctica: en **Text Input**, las propiedades *Helper Text* y *Label* no ocultan sus capas al apagarse. En las pantallas del onboarding esas partes ya están ocultas a mano, así que no hay que tocarlas; solo conviene saberlo al crear campos nuevos.

### Catálogo de animaciones

La página *Design System* tiene una sección **Animaciones** con micro-animaciones e interacciones ya elegidas, cada una con su origen y **su código copiable dentro de la ficha**. Hay al menos: el swipe de cartas del mazo (HTML y JavaScript a medida, listo para pegar), un ripple de botón y un checkbox.

Dos avisos:
- El swipe de cartas está en HTML y JavaScript plano: se puede usar tal cual.
- Algunas fichas vienen de Animate UI y están en React y TypeScript. **No se pueden pegar en este prototipo**, que no lleva framework. De esas se toma la idea y el comportamiento, no el código.

---

## 7. Lo que sigue abierto

- **El contenido de la Home genérica frente a la personalizada.** Hoy las dos pantallas son idénticas. La diferencia entre ellas es lo que demuestra US-25, así que hay que decidir qué piezas ve quien no ha respondido nada.
- **El icono definitivo de la app.** El de la springboard es provisional.
- **Medios reproducibles.** Hoy la reproducción es simulada: la barra avanza y el tiempo corre, pero no hay archivo detrás. Un audio corto y un vídeo corto la convierten en real.
