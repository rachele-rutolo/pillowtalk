# Pillowtalk · prototipo V4

Sitio estático. HTML, CSS y JavaScript, sin framework y sin paso de compilación.
Se publica en Netlify desde GitHub y esa URL es el entregable.

## Cómo se abre en local

Con doble clic en `index.html` funciona. Para que sea igual que en Netlify (rutas
absolutas, cabeceras) conviene servirlo:

```
python -m http.server 8000
```

y abrir `http://localhost:8000`.

## Cómo está organizado

```
index.html          todas las pantallas, cada una una <section class="screen">
css/tokens.css      colores, radios, espaciado y medidas, sacados de Figma
css/base.css        tipografías, reset, el dispositivo, hojas inferiores
css/components.css  botón, navbar y demás componentes del design system
css/screens.css     lo propio de cada pantalla
js/state.js         el estado de la sesión y el perfil fijado de la demo
js/router.js        qué pantalla se ve y qué hace cada clic
js/app.js           arranque, navbar, ripple y barra de desarrollo
fonts/              Tiny Tiny en .woff2, viaja dentro del repositorio
assets/icons/       iconos exportados de Figma
media/              audio y vídeo cortos del reproductor
docs/               la spec de construcción
```

## Navegación

Un botón navega con `data-ir="id-de-pantalla"`, vuelve con `data-atras`,
abre una hoja inferior con `data-abre="modal-cuenta"` y la cierra con `data-cierra`.
No hace falta escribir JavaScript para cablear una pantalla nueva.

## Barra de desarrollo

Arriba a la izquierda hay un desplegable para saltar a cualquier pantalla y ver
el estado de la sesión. Se oculta y se muestra con la tecla **D**. No forma parte
de la demo.

## Lo que aún no está

El icono definitivo de la app y los archivos de audio y vídeo. La reproducción
es simulada: el mini player aparece, pero no suena nada.
