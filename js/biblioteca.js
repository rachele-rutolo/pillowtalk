/* ==========================================================================
   Pillowtalk · biblioteca y búsqueda
   Los filtros de formato funcionan de verdad: enseñan lo que prometen,
   sacándolo del catálogo. En Biblioteca y en la búsqueda son selección
   múltiple, para poder cruzarlos.
   ========================================================================== */

window.PT = window.PT || {};

/* Cómo se titula cada formato dentro de la biblioteca. */
var SECCIONES = [
  { formato: "video",    titulo: "Vídeos que podrían gustarte", fila: true },
  { formato: "podcast",  titulo: "Episodios para escuchar" },
  { formato: "articulo", titulo: "Para leer" }
];

/* Los resultados de la búsqueda de "deseo". Fijados a mano: el prototipo
   no busca de verdad, pero los filtros sí trabajan sobre ellos. */
var RESULTADOS = ["p-deseo-no-coincide", "v-deseo-receptivo", "a-estres-deseo"];

/* Qué contenidos van con cada tema. Una pieza puede estar en varios. */
var TEMAS = {
  "Deseo y fantasías": ["v-anatomia-deseo", "p-deseo-no-coincide", "v-deseo-receptivo", "a-punto-g"],
  "Falta de deseo": ["a-libido-linea", "a-anticonceptivos", "a-estres-deseo", "p-deseo-se-apaga", "p-libido-pareja", "p-menopausia", "v-libido-baja", "v-libido-ansiedad", "v-deseo-receptivo"],
  "Comunicación en pareja": ["a-hablar-pareja", "p-parejas", "p-deseo-no-coincide", "p-libido-pareja"],
  "Consentimiento": ["a-porno-consentimiento", "p-consentimiento"],
  "Cómo funciona el cuerpo": ["v-vulva-101", "v-anatomia-deseo", "a-punto-g", "a-dilatadores"],
  "Salud sexual": ["v-condon", "v-lubricante", "a-anticonceptivos", "v-disfuncion"],
  "Placer": ["a-te-cuesta-llegar", "p-lo-que-no-me-contaron", "p-sexo-40", "v-lubricante"],
  /* Todavía sin contenidos. */
  "Límites": [],
  "Celos": []
};

/* Temas elegidos en la hoja de filtros. Sin ninguno, se ve todo. */
var temasActivos = [];

function pasaTemas(id) {
  return !temasActivos.length || temasActivos.some(function (t) {
    return (TEMAS[t] || []).indexOf(id) !== -1;
  });
}

var PLAY_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7L8 5Z"/></svg>';

function delFormato(formato) {
  return Object.keys(PT.CATALOGO).filter(function (id) {
    return PT.CATALOGO[id].tipo === formato;
  });
}

/* ---------- Piezas ---------- */

function haciaPieza(id) {
  var pieza = PT.CATALOGO[id];
  var boton = document.createElement("button");
  boton.type = "button";
  boton.className = "pieza";
  boton.dataset.contenido = id;
  boton.dataset.ir = pieza.pantalla;
  boton.innerHTML =
    '<span class="pieza__miniatura' + (pieza.tipo === "podcast" ? " pieza__miniatura--cuadrada" : "") + ' sin-imagen" aria-hidden="true"></span>' +
    '<span class="pieza__textos"><span class="pieza__titulo"></span><span class="pieza__meta"></span></span>' +
    (pieza.tipo === "articulo" ? "" : '<span class="btn-play" aria-hidden="true">' + PLAY_SVG + "</span>");
  boton.querySelector(".pieza__titulo").textContent = pieza.titulo;
  boton.querySelector(".pieza__meta").textContent = pieza.meta;
  return boton;
}

function haciaCardVideo(id) {
  var pieza = PT.CATALOGO[id];
  var boton = document.createElement("button");
  boton.type = "button";
  boton.className = "card-video";
  boton.dataset.contenido = id;
  boton.dataset.ir = pieza.pantalla;
  /* La misma card que ya estaba escrita a mano en la biblioteca: miniatura,
     título y firma. Nada nuevo, solo sale del catálogo. */
  boton.innerHTML =
    '<span class="card-video__miniatura sin-imagen">falta imagen</span>' +
    '<span class="card-video__titulo"></span>' +
    '<span class="card-video__meta"></span>';
  boton.querySelector(".card-video__titulo").textContent = pieza.titulo;
  boton.querySelector(".card-video__meta").textContent = ((pieza.autoria && pieza.autoria.nombre) || "Nombre de la autora") + " · " + pieza.meta;
  return boton;
}

function vacio(texto) {
  var p = document.createElement("p");
  p.className = "vacio";
  p.textContent = texto;
  return p;
}

/* ---------- Biblioteca ---------- */

function pintaBiblioteca() {
  var formatos = formatosActivos();
  var caja = document.getElementById("biblioteca-secciones");
  if (!caja) return;
  caja.innerHTML = "";

  var visibles = SECCIONES.filter(function (s) {
    return !formatos.length || formatos.indexOf(s.formato) !== -1;
  });

  var pintadas = 0;

  visibles.forEach(function (seccion) {
    var ids = delFormato(seccion.formato).filter(pasaTemas);

    /* Con temas elegidos, las secciones vacías no se enseñan. */
    if (!ids.length && temasActivos.length) return;
    pintadas++;

    var bloque = document.createElement("section");
    bloque.className = "seccion";

    var titulo = document.createElement("h2");
    titulo.className = "seccion__titulo";
    titulo.textContent = seccion.titulo;
    bloque.appendChild(titulo);

    if (!ids.length) {
      bloque.appendChild(vacio("Todavía no hay nada de este formato"));
      caja.appendChild(bloque);
      return;
    }

    if (seccion.fila) {
      var fila = document.createElement("div");
      fila.className = "fila";
      ids.forEach(function (id) { fila.appendChild(haciaCardVideo(id)); });
      bloque.appendChild(fila);
    } else {
      var lista = document.createElement("div");
      lista.className = "lista-guardados";
      ids.forEach(function (id) { lista.appendChild(haciaPieza(id)); });
      bloque.appendChild(lista);
    }

    caja.appendChild(bloque);
  });

  if (!pintadas) {
    var nada = vacio("No hay contenidos con estos filtros");
    nada.classList.add("vacio--filtros");
    caja.appendChild(nada);
  }

  PT.pintaImagenes(caja);
  PT.pintaIndicadores();
  pintaBotonFiltros();
}

/* ---------- Botón y hoja de filtros ----------
   El formato es el mismo dentro y fuera: si fuera está Podcast, al abrir
   la hoja también. Lo que se toca en la hoja se aplica con Ver resultados. */

function pintaBotonFiltros() {
  var boton = document.getElementById("btn-filtros");
  var cuenta = document.getElementById("btn-filtros-cuenta");
  if (!boton || !cuenta) return;
  var n = temasActivos.length + formatosActivos().length;
  boton.dataset.activo = String(n > 0);
  boton.setAttribute("aria-label", n ? "Filtros, " + n + " activos" : "Filtros");
  cuenta.hidden = !n;
  cuenta.textContent = n;
}

/* Pone los formatos en la fila de fuera. Sin ninguno, se enciende Todos. */
function ponFormatos(lista) {
  document.querySelectorAll(".chips--formato .chip").forEach(function (c) {
    var f = c.dataset.formato;
    c.setAttribute("aria-pressed", String(f === "todos" ? !lista.length : lista.indexOf(f) !== -1));
  });
}

function hojaSegunEstado() {
  var formatos = formatosActivos();
  document.querySelectorAll("#filtros-formato .chip").forEach(function (c) {
    c.setAttribute("aria-pressed", String(formatos.indexOf(c.dataset.formato) !== -1));
  });
  document.querySelectorAll("#filtros-temas .chip").forEach(function (c) {
    c.setAttribute("aria-pressed", String(temasActivos.indexOf(c.dataset.tema) !== -1));
  });
}

function hojaDeFiltros() {
  var formatos = document.getElementById("filtros-formato");
  var temas = document.getElementById("filtros-temas");
  if (!formatos || !temas) return;

  /* Al abrir, la hoja enseña lo que está aplicado. */
  document.getElementById("btn-filtros").addEventListener("click", hojaSegunEstado);

  /* Formatos y temas: varios a la vez. */
  [formatos, temas].forEach(function (grupo) {
    grupo.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      chip.setAttribute("aria-pressed", String(chip.getAttribute("aria-pressed") !== "true"));
    });
  });

  document.getElementById("filtros-borrar").addEventListener("click", function () {
    document.querySelectorAll("#modal-filtros .chip").forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
  });

  document.getElementById("filtros-ver").addEventListener("click", function () {
    ponFormatos(Array.from(formatos.querySelectorAll('.chip[aria-pressed="true"]')).map(function (c) { return c.dataset.formato; }));
    temasActivos = Array.from(temas.querySelectorAll('.chip[aria-pressed="true"]')).map(function (c) { return c.dataset.tema; });
    pintaBiblioteca();
  });

  /* Los temas de la home (Explora por temas y Tus temas) abren la
     Biblioteca con ese tema ya elegido en los filtros. */
  document.addEventListener("click", function (e) {
    var tema = e.target.closest("#home [data-tema]");
    if (!tema) return;
    ponFormatos([]);
    temasActivos = [tema.dataset.tema];
  }, true);
}

function filtrosDeBiblioteca() {
  var grupo = document.querySelector(".chips--formato");
  if (!grupo) return;

  grupo.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    /* Todos apaga los demás. Un formato se enciende y se apaga. */
    var lista = formatosActivos();
    var f = chip.dataset.formato;
    if (f === "todos") lista = [];
    else if (lista.indexOf(f) !== -1) lista.splice(lista.indexOf(f), 1);
    else lista.push(f);
    ponFormatos(lista);
    pintaBiblioteca();
  });
}

/* Formatos encendidos en la fila de fuera. Vacío quiere decir Todos. */
function formatosActivos() {
  return Array.from(document.querySelectorAll('.chips--formato .chip[aria-pressed="true"]'))
    .map(function (c) { return c.dataset.formato; })
    .filter(function (f) { return f !== "todos"; });
}

/* ---------- Búsqueda con resultados ----------
   Aquí los chips son de selección múltiple: sin ninguno encendido se ven
   todos los resultados. */

function pintaResultados() {
  var caja = document.getElementById("resultados-lista");
  var cuenta = document.getElementById("resultados-cuenta");
  if (!caja || !cuenta) return;

  var encendidos = Array.from(document.querySelectorAll('#chips-busqueda .chip[aria-pressed="true"]'))
    .map(function (c) { return c.dataset.formato; });

  var ids = RESULTADOS.filter(function (id) {
    return !encendidos.length || encendidos.indexOf(PT.CATALOGO[id].tipo) !== -1;
  });

  cuenta.textContent = ids.length === 1 ? "1 resultado" : ids.length + " resultados";
  caja.innerHTML = "";

  if (!ids.length) {
    caja.appendChild(vacio("Ningún resultado de ese formato"));
    return;
  }

  ids.forEach(function (id) { caja.appendChild(haciaPieza(id)); });
  PT.pintaImagenes(caja);
  PT.pintaIndicadores();
}

function filtrosDeBusqueda() {
  var grupo = document.getElementById("chips-busqueda");
  if (!grupo) return;
  grupo.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    chip.setAttribute("aria-pressed", String(chip.getAttribute("aria-pressed") !== "true"));
    pintaResultados();
  });
}

PT.montarBiblioteca = function () {
  filtrosDeBiblioteca();
  hojaDeFiltros();
  filtrosDeBusqueda();

  document.addEventListener("pantalla:cambia", function (e) {
    if (e.detail.id === "biblioteca") pintaBiblioteca();
    if (e.detail.id === "busqueda-con-resultados") pintaResultados();
  });
};
