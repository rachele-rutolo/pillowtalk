/* ==========================================================================
   Pillowtalk · contenido
   Guardar en listas, el bloque de feedback y las dos listas guardadas.
   Favoritos y Ver más tarde no vienen llenas: enseñan lo que la usuaria
   ha guardado de verdad durante la sesión.
   ========================================================================== */

window.PT = window.PT || {};

/* Las piezas que existen en el prototipo. El formato decide la forma de
   la miniatura y si lleva botón de reproducir. */
/* Contenidos de la biblioteca (documento "Contenidos Pillowtalk"). Bloque:
   "general" o "libido" (falta de deseo). Autores y fuentes son de ejemplo. */
PT.CATALOGO = {
  "a-punto-g": {"titulo": "El punto G no es un botón mágico", "meta": "artículo · 5 min", "tipo": "articulo", "pantalla": "contenido-articulo", "img": "assets/imagen2_panel_3_mejorado.png", "bloque": "general", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "OMS · Salud sexual y reproductiva, guía divulgativa", "cuerpo": ["Durante años se ha hablado del punto G como si fuera un botón: lo encuentras, lo presionas, y pasa algo. La anatomía cuenta otra historia — es una zona, no un punto, y su sensibilidad varía muchísimo de una persona a otra e incluso de un día a otro en la misma persona. Convertirlo en objetivo suele generar justo lo contrario de lo que se busca: presión, autoobservación y menos placer, no más."]},
  "a-porno-consentimiento": {"titulo": "Lo que el porno no te enseña sobre el consentimiento", "meta": "artículo · 6 min", "tipo": "articulo", "pantalla": "contenido-articulo", "img": "assets/imagen2_panel_4_mejorado.png", "bloque": "general", "autor": "Diego Ferrer", "autoria": {"nombre": "Diego Ferrer", "rol": "Psicólogo sanitario · colegiado nº M-8842"}, "fuente": "FESS · Federación Española de Sociedades de Sexología, guía de educación sexual", "cuerpo": ["En el porno nadie pregunta '¿esto te gusta?' porque el guion ya lo decidió. Fuera de la pantalla, esa pregunta no es un trámite ni corta el rollo: es la diferencia entre dos personas que quieren lo mismo y una que solo lo asume. Consentir no es solo decir que sí una vez, es poder cambiar de opinión sin que eso sea un problema."]},
  "a-dilatadores": {"titulo": "Dilatadores vaginales: no son solo para el dolor", "meta": "artículo · 4 min", "tipo": "articulo", "pantalla": "contenido-articulo", "img": "assets/imagen1_panel_4_mejorado.png", "bloque": "general", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "SEC · Sociedad Española de Contracepción, material informativo", "cuerpo": ["Cuando se habla de dilatadores, casi siempre es en el contexto de una molestia — vaginismo, una cirugía, la menopausia. Pero usarlos no exige tener un diagnóstico: son una forma progresiva y sin presión de explorar sensaciones, al ritmo que cada quien decida, con o sin pareja."]},
  "a-te-cuesta-llegar": {"titulo": "Por qué te cuesta llegar (y no es solo cabeza)", "meta": "artículo · 6 min", "tipo": "articulo", "pantalla": "contenido-articulo", "img": "assets/contenidos/a-te-cuesta-llegar.jpg", "bloque": "general", "autor": "Diego Ferrer", "autoria": {"nombre": "Diego Ferrer", "rol": "Psicólogo sanitario · colegiado nº M-8842"}, "fuente": "OMS · Salud sexual y reproductiva, guía divulgativa", "cuerpo": ["Cuando alguien dice 'me cuesta llegar', la respuesta rápida suele ser 'relájate' o 'no pienses tanto'. A veces ayuda. Otras veces hay una causa física — cierta medicación, cambios hormonales, dolor no diagnosticado — que ningún consejo mental va a resolver. Antes de buscar la solución, merece la pena descartar qué parte es psicológica y qué parte no."]},
  "a-hablar-pareja": {"titulo": "Hablar de sexo con tu pareja sin que suene a examen", "meta": "artículo · 5 min", "tipo": "articulo", "pantalla": "contenido-articulo", "img": "assets/imagen1_panel_5_mejorado.png", "bloque": "general", "autor": "Nadia Roldán", "autoria": {"nombre": "Nadia Roldán", "rol": "Terapeuta de pareja · colegiada nº B-1290"}, "fuente": "FESS · Federación Española de Sociedades de Sexología, guía de comunicación en pareja", "cuerpo": ["Preguntar '¿qué tal ha estado?' después de tener sexo puede sentirse como un examen sorpresa. Cambiar el marco ayuda: hablar de qué se quiere probar la próxima vez, en vez de calificar la última, quita la sensación de aprobado o suspenso y convierte la conversación en un plan, no en una nota."]},
  "p-lo-que-no-me-contaron": {"titulo": "Lo que no me contaron", "meta": "podcast · 32 min", "tipo": "podcast", "pantalla": "contenido-podcast", "img": "assets/imagen2_panel_6_mejorado.png", "bloque": "general", "autor": "Nadia Roldán", "autoria": {"nombre": "Nadia Roldán", "rol": "Terapeuta de pareja · colegiada nº B-1290"}, "fuente": "Producción propia, con revisión de contenido de Nadia Roldán", "descripcion": "Cuatro personas comparan lo que les enseñaron de sexualidad con lo que les hubiera hecho falta saber. Spoiler: casi no coincide."},
  "p-parejas": {"titulo": "Parejas que se lo cuentan todo (o casi)", "meta": "podcast · 28 min", "tipo": "podcast", "pantalla": "contenido-podcast", "img": "assets/contenidos/p-parejas.jpg", "bloque": "general", "autor": "Diego Ferrer", "autoria": {"nombre": "Diego Ferrer", "rol": "Psicólogo sanitario · colegiado nº M-8842"}, "fuente": "Producción propia, con revisión de contenido de Diego Ferrer", "descripcion": "Qué se gana y qué se pierde cuando una pareja decide no dejar ningún tema fuera de la conversación."},
  "p-sexo-40": {"titulo": "Sexo después de los 40, sin el mito de la decadencia", "meta": "podcast · 35 min", "tipo": "podcast", "pantalla": "contenido-podcast", "img": "assets/contenidos/p-sexo-40.jpg", "bloque": "general", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "Producción propia, con revisión de contenido de Marta Aguilar", "descripcion": "La idea de que el deseo solo baja con la edad no se sostiene. Qué cambia de verdad y qué es solo prejuicio."},
  "p-deseo-no-coincide": {"titulo": "Cuando el deseo no coincide", "meta": "podcast · 30 min", "tipo": "podcast", "pantalla": "contenido-podcast", "img": "assets/contenidos/p-deseo-no-coincide.jpg", "bloque": "general", "autor": "Nadia Roldán", "autoria": {"nombre": "Nadia Roldán", "rol": "Terapeuta de pareja · colegiada nº B-1290"}, "fuente": "Producción propia, con revisión de contenido de Nadia Roldán", "descripcion": "Una persona quiere más, la otra menos. No es un fallo de la relación, es de lo más común que hay — y se puede hablar sin que sea una acusación."},
  "p-consentimiento": {"titulo": "Consentimiento: la conversación que seguimos evitando", "meta": "podcast · 26 min", "tipo": "podcast", "pantalla": "contenido-podcast", "img": "assets/contenidos/p-consentimiento.jpg", "bloque": "general", "autor": "Diego Ferrer", "autoria": {"nombre": "Diego Ferrer", "rol": "Psicólogo sanitario · colegiado nº M-8842"}, "fuente": "Producción propia, con revisión de contenido de Diego Ferrer", "descripcion": "Por qué seguimos incómodos preguntando, incluso en 2026, y qué cambia cuando se normaliza."},
  "v-anatomia-deseo": {"titulo": "Anatomía del deseo, en 4 minutos", "meta": "vídeo · 4:12", "tipo": "video", "pantalla": "contenido-video", "img": "assets/contenidos/v-anatomia-deseo.jpg", "bloque": "general", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "OMS · Salud sexual y reproductiva, guía divulgativa", "descripcion": "Qué pasa en el cuerpo entre que algo te atrae y que sientes deseo. Más química y menos misterio del que parece."},
  "v-condon": {"titulo": "Cómo se pone un condón de verdad (sin dramas)", "meta": "vídeo · 3:20", "tipo": "video", "pantalla": "contenido-video", "img": "assets/imagen1_panel_2_mejorado.png", "bloque": "general", "autor": "Diego Ferrer", "autoria": {"nombre": "Diego Ferrer", "rol": "Psicólogo sanitario · colegiado nº M-8842"}, "fuente": "SEC · Sociedad Española de Contracepción, material informativo", "descripcion": "Sin la vergüenza de la clase de biología del instituto. Paso a paso, sin prisa y sin errores típicos."},
  "v-vulva-101": {"titulo": "Vulva 101: lo que el colegio no explicó", "meta": "vídeo · 5:00", "tipo": "video", "pantalla": "contenido-video", "img": "assets/contenidos/v-vulva-101.jpg", "bloque": "general", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "OMS · Salud sexual y reproductiva, guía divulgativa", "descripcion": "Un repaso claro de la anatomía externa, sin eufemismos y sin vergüenza."},
  "v-lubricante": {"titulo": "Lubricante: guía rápida para no acertar a ciegas", "meta": "vídeo · 3:45", "tipo": "video", "pantalla": "contenido-video", "img": "assets/contenidos/v-lubricante.jpg", "bloque": "general", "autor": "Nadia Roldán", "autoria": {"nombre": "Nadia Roldán", "rol": "Terapeuta de pareja · colegiada nº B-1290"}, "fuente": "FESS · Federación Española de Sociedades de Sexología, guía de educación sexual", "descripcion": "Base agua, silicona o híbrido — cuál usar según lo que estés haciendo y con qué materiales."},
  "v-disfuncion": {"titulo": "Qué es (y qué no es) una disfunción sexual", "meta": "vídeo · 4:30", "tipo": "video", "pantalla": "contenido-video", "img": "assets/imagen1_panel_1_mejorado.png", "bloque": "general", "autor": "Diego Ferrer", "autoria": {"nombre": "Diego Ferrer", "rol": "Psicólogo sanitario · colegiado nº M-8842"}, "fuente": "OMS · Salud sexual y reproductiva, guía divulgativa", "descripcion": "No toda dificultad puntual es una disfunción. Dónde está la línea y cuándo sí merece la pena consultar."},
  "a-libido-linea": {"titulo": "La libido no es una línea recta", "meta": "artículo · 5 min", "tipo": "articulo", "pantalla": "contenido-articulo", "img": "assets/contenidos/a-libido-linea.jpg", "bloque": "libido", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "OMS · Salud sexual y reproductiva, guía divulgativa", "cuerpo": ["Solemos hablar del deseo como si fuera una batería: alta o baja, cargada o vacía. En realidad fluctúa por sueño, estrés, la fase del ciclo, la novedad, el vínculo con la otra persona — decenas de variables a la vez. Una bajada de unas semanas no es un diagnóstico, es una fluctuación normal hasta que se demuestre lo contrario."]},
  "a-anticonceptivos": {"titulo": "Anticonceptivos y deseo: la conversación que falta", "meta": "artículo · 5 min", "tipo": "articulo", "pantalla": "contenido-articulo", "img": "assets/imagen2_panel_2_mejorado.png", "bloque": "libido", "autor": "Nadia Roldán", "autoria": {"nombre": "Nadia Roldán", "rol": "Terapeuta de pareja · colegiada nº B-1290"}, "fuente": "SEC · Sociedad Española de Contracepción, material informativo", "cuerpo": ["Es una de las conversaciones que menos se tiene en la consulta de anticoncepción: qué método puede afectar al deseo y en qué medida. No le pasa a todo el mundo igual, pero si notas un cambio después de empezar uno nuevo, no es \"cosa tuya\" — es una pregunta legítima que llevar de vuelta a quien te lo recetó."]},
  "a-estres-deseo": {"titulo": "Estrés, cansancio y deseo: la ecuación que nadie te explicó", "meta": "artículo · 6 min", "tipo": "articulo", "pantalla": "contenido-articulo", "img": "assets/contenidos/a-estres-deseo.jpg", "bloque": "libido", "autor": "Diego Ferrer", "autoria": {"nombre": "Diego Ferrer", "rol": "Psicólogo sanitario · colegiado nº M-8842"}, "fuente": "OMS · Salud sexual y reproductiva, guía divulgativa", "cuerpo": ["El deseo necesita un mínimo de margen mental que el estrés crónico y el cansancio acumulado no dejan. No es cuestión de fuerza de voluntad ni de \"tener más ganas\": es que el sistema nervioso, ocupado en sobrevivir el día, deja el deseo para el final de la lista. Bajar la carga suele hacer más que cualquier consejo directo sobre sexo."]},
  "p-deseo-se-apaga": {"titulo": "Cuando el deseo se apaga (y no sabes por qué)", "meta": "podcast · 33 min", "tipo": "podcast", "pantalla": "contenido-podcast", "img": "assets/imagen2_panel_5_mejorado.png", "bloque": "libido", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "Producción propia, con revisión de contenido de Marta Aguilar", "descripcion": "Tres personas cuentan cómo fue notar que ya no tenían ganas, y qué hicieron (o no) al respecto."},
  "p-libido-pareja": {"titulo": "Libido baja en pareja: hablarlo sin que sea un reproche", "meta": "podcast · 29 min", "tipo": "podcast", "pantalla": "contenido-podcast", "img": "assets/imagen2_panel_1_mejorado.png", "bloque": "libido", "autor": "Nadia Roldán", "autoria": {"nombre": "Nadia Roldán", "rol": "Terapeuta de pareja · colegiada nº B-1290"}, "fuente": "Producción propia, con revisión de contenido de Nadia Roldán", "descripcion": "Cómo decir \"ahora no me apetece\" sin que la otra persona lo escuche como un rechazo personal."},
  "p-menopausia": {"titulo": "Menopausia y deseo: lo que cambia y lo que no", "meta": "podcast · 31 min", "tipo": "podcast", "pantalla": "contenido-podcast", "img": "assets/contenidos/p-menopausia.jpg", "bloque": "libido", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "Producción propia, con revisión de contenido de Marta Aguilar", "descripcion": "Los cambios hormonales son reales, pero no son toda la historia. Qué sigue dependiendo de otras cosas."},
  "v-libido-baja": {"titulo": "Por qué baja la libido: las causas más comunes, explicadas rápido", "meta": "vídeo · 4:00", "tipo": "video", "pantalla": "contenido-video", "img": "assets/contenidos/v-libido-baja.jpg", "bloque": "libido", "autor": "Diego Ferrer", "autoria": {"nombre": "Diego Ferrer", "rol": "Psicólogo sanitario · colegiado nº M-8842"}, "fuente": "OMS · Salud sexual y reproductiva, guía divulgativa", "descripcion": "Medicación, hormonas, estrés, la relación misma — un repaso rápido de lo que suele estar detrás."},
  "v-libido-ansiedad": {"titulo": "Libido y ansiedad: la conexión que no se ve", "meta": "vídeo · 3:50", "tipo": "video", "pantalla": "contenido-video", "img": "assets/contenidos/v-libido-ansiedad.jpg", "bloque": "libido", "autor": "Marta Aguilar", "autoria": {"nombre": "Marta Aguilar", "rol": "Sexóloga · colegiada nº 3312"}, "fuente": "FESS · Federación Española de Sociedades de Sexología, guía de educación sexual", "descripcion": "La ansiedad no solo afecta al ánimo — también apaga el deseo, y pocas veces se conecta un síntoma con el otro."},
  "v-deseo-receptivo": {"titulo": "Deseo espontáneo vs. deseo receptivo (esto te va a aliviar)", "meta": "vídeo · 4:15", "tipo": "video", "pantalla": "contenido-video", "img": "assets/contenidos/v-deseo-receptivo.jpg", "bloque": "libido", "autor": "Nadia Roldán", "autoria": {"nombre": "Nadia Roldán", "rol": "Terapeuta de pareja · colegiada nº B-1290"}, "fuente": "SEC · Sociedad Española de Contracepción, material informativo", "descripcion": "No todo el mundo desea \"de la nada\". Para mucha gente, el deseo aparece después del contacto, no antes — y los dos son igual de normales."}
};

/* Las miniaturas se pintan desde el catálogo: cada pieza lleva su
   imagen y el hueco gris solo se queda donde todavía no hay ninguna. */
var HUECOS = ".pieza__miniatura, .card-video__miniatura, .portada, .podcast__portada, .video__miniatura, .mini-player__portada, .podcast-top__portada";

function pintaImagenes(raiz) {
  (raiz || document).querySelectorAll("[data-contenido]").forEach(function (nodo) {
    var pieza = PT.CATALOGO[nodo.dataset.contenido];
    if (!pieza || !pieza.img) return;
    nodo.querySelectorAll(HUECOS).forEach(function (hueco) {
      hueco.classList.remove("sin-imagen");
      hueco.textContent = "";
      hueco.style.backgroundImage = 'url("' + pieza.img + '")';
      hueco.style.backgroundSize = "cover";
      hueco.style.backgroundPosition = "center";
    });
  });
}

PT.pintaImagenes = pintaImagenes;

var CORAZON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.7-9.3-8.4C1.2 9.4 3 6 6.3 6c2 0 3.3 1.1 4 2 .7-.9 2-2 4-2 3.3 0 5.1 3.4 3.6 6.6C19.5 16.3 12 21 12 21Z"/></svg>';
var MARCADOR = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/></svg>';
var PLAY = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7L8 5Z"/></svg>';

function quePantalla() {
  var pantalla = document.getElementById(PT.pantallaActual());
  return pantalla ? pantalla.dataset.contenido : null;
}

/* ---------- Indicador guardado ----------
   Marca en las piezas para ver desde fuera en qué lista están. */
function pintaIndicadores() {
  document.querySelectorAll(".pieza[data-contenido]").forEach(function (pieza) {
    var id = pieza.dataset.contenido;
    var enFav = PT.state.favoritos.has(id);
    var enTarde = PT.state.verMasTarde.has(id);

    var marca = pieza.querySelector(".guardado");
    if (!enFav && !enTarde) { if (marca) marca.remove(); return; }

    if (!marca) {
      marca = document.createElement("span");
      marca.className = "guardado";
      var play = pieza.querySelector(".btn-play");
      pieza.insertBefore(marca, play || null);
    }
    marca.innerHTML = (enFav ? CORAZON : "") + (enTarde ? MARCADOR : "");
    marca.setAttribute("aria-label",
      enFav && enTarde ? "En Favoritos y en Ver más tarde" : enFav ? "En Favoritos" : "En Ver más tarde");
  });
}

PT.pintaIndicadores = pintaIndicadores;

/* ---------- Las dos listas guardadas ---------- */
function pintaLista(idPantalla, conjunto) {
  var caja = document.getElementById(idPantalla + "-lista");
  var cuenta = document.getElementById(idPantalla + "-cuenta");
  if (!caja || !cuenta) return;

  var ids = Array.from(conjunto);
  cuenta.textContent = ids.length === 1 ? "1 guardado" : ids.length + " guardados";
  caja.innerHTML = "";

  if (!ids.length) {
    var vacio = document.createElement("p");
    vacio.className = "vacio";
    vacio.textContent = "Todavía no has guardado nada aquí";
    caja.appendChild(vacio);
    return;
  }

  ids.forEach(function (id) {
    var pieza = PT.CATALOGO[id];
    if (!pieza) return;
    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "pieza";
    boton.dataset.contenido = id;
    boton.dataset.ir = pieza.pantalla;
    boton.innerHTML =
      '<span class="pieza__miniatura' + (pieza.tipo === "podcast" ? " pieza__miniatura--cuadrada" : "") + '" aria-hidden="true"></span>' +
      '<span class="pieza__textos"><span class="pieza__titulo"></span><span class="pieza__meta"></span></span>' +
      (pieza.tipo === "articulo" ? "" : '<span class="btn-play" aria-hidden="true">' + PLAY + "</span>");
    boton.querySelector(".pieza__titulo").textContent = pieza.titulo;
    boton.querySelector(".pieza__meta").textContent = pieza.meta;
    caja.appendChild(boton);
  });

  pintaImagenes(caja);
}

/* ---------- Guardar ----------
   Dos interruptores independientes: una pieza puede estar en las dos
   listas. Guardar sin cuenta abre la hoja, en el momento en que la
   cuenta le sirve a la usuaria. */
function guardar() {
  document.addEventListener("click", function (e) {
    var boton = e.target.closest("[data-guardar]");
    if (!boton) return;

    var id = quePantalla();
    if (!id) return;

    var encendido = boton.getAttribute("aria-pressed") === "true";
    boton.setAttribute("aria-pressed", String(!encendido));

    var lista = boton.dataset.guardar === "favoritos" ? PT.state.favoritos : PT.state.verMasTarde;
    if (encendido) lista.delete(id); else lista.add(id);

    pintaIndicadores();
    pintaLista("biblioteca-favoritos", PT.state.favoritos);
    pintaLista("biblioteca-ver-mas-tarde", PT.state.verMasTarde);

    if (!encendido && !PT.state.tieneCuenta) PT.abrirHoja("modal-guardar");
  });
}

/* Al abrir una pieza, sus botones enseñan si ya está guardada. */
function alAbrirContenido(id) {
  var pantalla = document.getElementById(PT.pantallaActual());
  if (!pantalla) return;
  pantalla.querySelectorAll("[data-guardar]").forEach(function (boton) {
    var lista = boton.dataset.guardar === "favoritos" ? PT.state.favoritos : PT.state.verMasTarde;
    boton.setAttribute("aria-pressed", String(lista.has(id)));
  });
}

/* ¿Te ha resultado útil? Selección única dentro de su bloque. */
function feedback() {
  document.querySelectorAll(".feedback__botones").forEach(function (grupo) {
    grupo.addEventListener("click", function (e) {
      var boton = e.target.closest(".feedback__boton");
      if (!boton) return;
      grupo.querySelectorAll(".feedback__boton").forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });
      boton.setAttribute("aria-pressed", "true");
    });
  });
}

PT.montarContenido = function () {
  guardar();
  feedback();
  pintaImagenes();

  document.addEventListener("pantalla:cambia", function (e) {
    var pantalla = document.getElementById(e.detail.id);
    if (pantalla && pantalla.dataset.contenido) alAbrirContenido(pantalla.dataset.contenido);
    if (e.detail.id === "biblioteca") pintaIndicadores();
    if (e.detail.id === "biblioteca-favoritos") pintaLista("biblioteca-favoritos", PT.state.favoritos);
    if (e.detail.id === "biblioteca-ver-mas-tarde") pintaLista("biblioteca-ver-mas-tarde", PT.state.verMasTarde);
  });
};
