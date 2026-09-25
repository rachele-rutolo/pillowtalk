/* ==========================================================================
   Pillowtalk · plantillas de contenido
   Cada formato tiene una sola pantalla (su estructura no cambia) y se
   rellena con la pieza que se ha tocado, leyendo PT.CATALOGO.
   Por ahora: artículo. Vídeo y pódcast se suman aquí igual.
   Donde falta un texto, marcador visible (regla 9: nada se inventa).
   ========================================================================== */

window.PT = window.PT || {};

(function () {
  var PLANTILLAS = { "contenido-articulo": pintaArticulo };

  /* Antes de que el router cambie de pantalla (fase de captura), la
     pantalla destino apunta a la pieza tocada. Guardar, el mini player y
     los indicadores ya leen ese dato, así que funcionan sin cambios. */
  document.addEventListener("click", function (e) {
    var origen = e.target.closest("[data-contenido][data-ir]");
    if (!origen || !PLANTILLAS[origen.dataset.ir]) return;
    var destino = document.getElementById(origen.dataset.ir);
    if (destino && PT.CATALOGO[origen.dataset.contenido]) destino.dataset.contenido = origen.dataset.contenido;
  }, true);

  document.addEventListener("pantalla:cambia", function (e) {
    var pintar = PLANTILLAS[e.detail.id];
    var pantalla = document.getElementById(e.detail.id);
    if (pintar && pantalla) pintar(pantalla, pantalla.dataset.contenido);
  });

  function campo(p, nombre) { return p.querySelector('[data-campo="' + nombre + '"]'); }

  function pon(el, texto, marcador) {
    if (!el) return;
    el.textContent = texto || marcador;
    el.classList.toggle("pendiente", !texto);
  }

  function portada(p, pieza) {
    var hueco = p.querySelector(".portada");
    if (!hueco || !pieza.img) return;
    hueco.classList.remove("sin-imagen");
    hueco.textContent = "";
    hueco.style.backgroundImage = 'url("' + pieza.img + '")';
    hueco.style.backgroundSize = "cover";
    hueco.style.backgroundPosition = "center";
  }

  function fila(id) {
    var pieza = PT.CATALOGO[id];
    var b = document.createElement("button");
    b.type = "button";
    b.className = "pieza";
    b.dataset.contenido = id;
    b.dataset.ir = pieza.pantalla;
    b.innerHTML = '<span class="pieza__miniatura" aria-hidden="true"></span>' +
      '<span class="pieza__textos"><span class="pieza__titulo"></span><span class="pieza__meta"></span></span>';
    b.querySelector(".pieza__titulo").textContent = pieza.titulo;
    b.querySelector(".pieza__meta").textContent = pieza.meta;
    return b;
  }

  function pintaArticulo(p, id) {
    var a = PT.CATALOGO[id];
    if (!a) return;
    campo(p, "titulo").textContent = a.titulo;
    pon(campo(p, "autor"), a.autor, "Pendiente · autor");
    campo(p, "duracion").textContent = a.meta + " de lectura";
    portada(p, a);

    var cuerpo = campo(p, "cuerpo");
    cuerpo.innerHTML = "";
    (a.cuerpo && a.cuerpo.length ? a.cuerpo : [null]).forEach(function (texto) {
      var parrafo = document.createElement("p");
      pon(parrafo, texto, "Pendiente · texto del artículo");
      cuerpo.appendChild(parrafo);
    });

    pon(campo(p, "autoria-nombre"), a.autoria && a.autoria.nombre, "Pendiente · autoría");
    pon(campo(p, "autoria-rol"), a.autoria && a.autoria.rol, "Pendiente");
    pon(campo(p, "fuente"), a.fuente, "Pendiente · fuente");

    /* Seguir leyendo: los demás artículos del catálogo, hasta dos */
    var rel = campo(p, "relacionados");
    rel.innerHTML = "";
    Object.keys(PT.CATALOGO)
      .filter(function (k) { return k !== id && PT.CATALOGO[k].tipo === "articulo"; })
      .slice(0, 2)
      .forEach(function (k) { rel.appendChild(fila(k)); });
    if (PT.pintaImagenes) PT.pintaImagenes(rel);

    /* ¿Te ha resultado útil? empieza sin responder en cada pieza */
    p.querySelectorAll(".feedback__boton").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
  }
})();
