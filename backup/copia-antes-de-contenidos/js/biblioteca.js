/* ==========================================================================
   Pillowtalk · biblioteca y búsqueda
   Los filtros de formato funcionan de verdad: enseñan lo que prometen,
   sacándolo del catálogo. En Biblioteca son selección única; en la
   búsqueda son selección múltiple, para poder cruzarlos.
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
var RESULTADOS = ["podcast-deseo-horario", "video-lubricarse", "articulo-orgasmo"];

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
  boton.querySelector(".card-video__meta").textContent = "Nombre de la autora · " + pieza.meta;
  return boton;
}

function vacio(texto) {
  var p = document.createElement("p");
  p.className = "vacio";
  p.textContent = texto;
  return p;
}

/* ---------- Biblioteca ---------- */

function pintaBiblioteca(formato) {
  var caja = document.getElementById("biblioteca-secciones");
  if (!caja) return;
  caja.innerHTML = "";

  var visibles = SECCIONES.filter(function (s) {
    return formato === "todos" || s.formato === formato;
  });

  visibles.forEach(function (seccion) {
    var ids = delFormato(seccion.formato);

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

  PT.pintaImagenes(caja);
  PT.pintaIndicadores();
}

function filtrosDeBiblioteca() {
  var grupo = document.querySelector(".chips--formato");
  if (!grupo) return;

  grupo.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    grupo.querySelectorAll(".chip").forEach(function (c) {
      c.setAttribute("aria-pressed", "false");
    });
    chip.setAttribute("aria-pressed", "true");
    pintaBiblioteca(chip.dataset.formato);
  });
}

function formatoActivo() {
  var chip = document.querySelector('.chips--formato .chip[aria-pressed="true"]');
  return chip ? chip.dataset.formato : "todos";
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
  filtrosDeBusqueda();

  document.addEventListener("pantalla:cambia", function (e) {
    if (e.detail.id === "biblioteca") pintaBiblioteca(formatoActivo());
    if (e.detail.id === "busqueda-con-resultados") pintaResultados();
  });
};
