/* ==========================================================================
   Pillowtalk · contenido
   Guardar en listas, el bloque de feedback y las dos listas guardadas.
   Favoritos y Ver más tarde no vienen llenas: enseñan lo que la usuaria
   ha guardado de verdad durante la sesión.
   ========================================================================== */

window.PT = window.PT || {};

/* Las piezas que existen en el prototipo. El formato decide la forma de
   la miniatura y si lleva botón de reproducir. */
PT.CATALOGO = {
  "articulo-orgasmo":        { titulo: "El orgasmo no es la meta (y se nota cuando lo es)", meta: "artículo · 6 min", tipo: "articulo", pantalla: "contenido-articulo", img: "assets/imagen1_panel_5_mejorado.png" },
  "articulo-its":            { titulo: "Pruebas de ITS: cuáles, cuándo y cómo pedirlas",    meta: "artículo · 8 min", tipo: "articulo", pantalla: "contenido-articulo", img: "assets/imagen2_panel_2_mejorado.png" },
  "articulo-consentimiento": { titulo: "Consentimiento cuando ya lleváis años",             meta: "artículo · 7 min", tipo: "articulo", pantalla: "contenido-articulo", img: "assets/imagen2_panel_4_mejorado.png" },
  "video-clitoris":          { titulo: "El clítoris entero, en 3 minutos",                  meta: "vídeo · 3:10",     tipo: "video",    pantalla: "contenido-video",    img: "assets/imagen1_panel_2_mejorado.png" },
  "video-lubricarse":        { titulo: "Lubricarse no es un examen",                        meta: "vídeo · 4:05",     tipo: "video",    pantalla: "contenido-video",    img: "assets/imagen1_panel_4_mejorado.png" },
  "video-yo-tampoco-video":  { titulo: "Yo tampoco sabía",                                  meta: "vídeo · 2:48",     tipo: "video",    pantalla: "contenido-video",    img: "assets/imagen2_panel_6_mejorado.png" },
  "podcast-yo-tampoco":      { titulo: "Yo tampoco sabía",                                  meta: "podcast · 38 min", tipo: "podcast",  pantalla: "contenido-podcast",  img: "assets/imagen1_panel_6_mejorado.png" },
  "podcast-sin-bata":        { titulo: "Sin bata",                                          meta: "podcast · 15 min", tipo: "podcast",  pantalla: "contenido-podcast",  img: "assets/imagen2_panel_3_mejorado.png" },
  "podcast-deseo-horario":   { titulo: "Deseo con horario",                                 meta: "podcast · 42 min", tipo: "podcast",  pantalla: "contenido-podcast",  img: "assets/imagen2_panel_5_mejorado.png" }
};

/* Las miniaturas se pintan desde el catálogo: cada pieza lleva su
   imagen y el hueco gris solo se queda donde todavía no hay ninguna. */
var HUECOS = ".pieza__miniatura, .card-video__miniatura, .portada, .podcast__portada, .video__miniatura, .mini-player__portada";

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
