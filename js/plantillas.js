/* ==========================================================================
   Pillowtalk · plantillas de contenido
   Cada formato tiene una sola pantalla (su estructura no cambia) y se
   rellena con la pieza que se ha tocado, leyendo PT.CATALOGO.
   Artículo, vídeo (con su reproductor horizontal) y pódcast.
   Donde falta un texto, marcador visible (regla 9: nada se inventa).
   ========================================================================== */

window.PT = window.PT || {};

(function () {
  var PLANTILLAS = { "contenido-articulo": pintaArticulo, "contenido-video": pintaVideo, "contenido-podcast": pintaPodcast };

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
    /* El reproductor enseña el vídeo que estaba abierto */
    if (e.detail.id === "reproductor") {
      var v = document.getElementById("contenido-video");
      pintaReproductor(document.getElementById("reproductor"), v && v.dataset.contenido);
      return;
    }
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

  /* "vídeo · 3:10" → "3:10" */
  function duracion(pieza) {
    var partes = pieza.meta.split("·");
    return partes[partes.length - 1].trim();
  }

  function hueco(el, pieza) {
    if (!el || !pieza.img) return;
    el.classList.remove("sin-imagen");
    el.textContent = "";
    el.style.backgroundImage = 'url("' + pieza.img + '")';
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
  }

  function cardVideo(id) {
    var pieza = PT.CATALOGO[id];
    var b = document.createElement("button");
    b.type = "button";
    b.className = "card-video card-video--pequena";
    b.dataset.contenido = id;
    b.dataset.ir = pieza.pantalla;
    b.innerHTML = '<span class="card-video__miniatura sin-imagen">falta imagen</span>' +
      '<span class="card-video__titulo"></span><span class="card-video__meta"></span>';
    b.querySelector(".card-video__titulo").textContent = pieza.titulo;
    b.querySelector(".card-video__meta").textContent = ((pieza.autoria && pieza.autoria.nombre) || "Nombre de la autora") + " · " + pieza.meta;
    return b;
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

  function pintaVideo(p, id) {
    var v = PT.CATALOGO[id];
    if (!v) return;
    hueco(p.querySelector(".video__miniatura"), v);
    campo(p, "duracion").textContent = duracion(v);
    campo(p, "titulo").textContent = v.titulo;
    pon(campo(p, "autor"), v.autor, "Pendiente · autor");
    pon(campo(p, "descripcion"), v.descripcion, "Pendiente · descripción del vídeo");
    campo(p, "linea").textContent = ((v.autoria && v.autoria.nombre) || "Pendiente · autoría") + " · " + v.meta;
    pon(campo(p, "autoria-nombre"), v.autoria && v.autoria.nombre, "Pendiente · autoría");
    pon(campo(p, "autoria-rol"), v.autoria && v.autoria.rol, "Pendiente");
    pon(campo(p, "fuente"), v.fuente, "Pendiente · fuente");

    /* Vídeos relacionados: los demás vídeos del catálogo, hasta dos */
    var rel = campo(p, "relacionados");
    rel.innerHTML = "";
    Object.keys(PT.CATALOGO)
      .filter(function (k) { return k !== id && PT.CATALOGO[k].tipo === "video"; })
      .slice(0, 2)
      .forEach(function (k) { rel.appendChild(cardVideo(k)); });
    if (PT.pintaImagenes) PT.pintaImagenes(rel);

    p.querySelectorAll(".feedback__boton").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
  }

  function pintaReproductor(p, id) {
    var v = PT.CATALOGO[id];
    if (!p || !v) return;
    campo(p, "titulo").textContent = v.titulo;
    pon(campo(p, "autor"), v.autor, "Pendiente · autor");
    var d = duracion(v);
    campo(p, "duracion").textContent = d.length === 4 ? "0" + d : d; // 3:10 → 03:10
  }

  /* "38 min" → minutos totales */
  function mmss(seg) {
    var m = Math.floor(seg / 60), s = Math.round(seg % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function pintaPodcast(p, id) {
    var d = PT.CATALOGO[id];
    if (!d) return;
    hueco(p.querySelector(".podcast__portada"), d);
    campo(p, "titulo").textContent = d.titulo;
    pon(campo(p, "autor"), d.autor, "Pendiente · autor");
    campo(p, "linea").textContent = ((d.autoria && d.autoria.nombre) || "Pendiente · autoría") + " · " + d.meta;

    /* Reproducción simulada: la barra se queda donde está en el diseño
       (27 %) y los tiempos se calculan con la duración real del episodio. */
    var total = (parseInt(duracion(d), 10) || 0) * 60;
    var hecho = 0.27;
    campo(p, "progreso").style.width = (hecho * 100) + "%";
    campo(p, "transcurrido").textContent = mmss(total * hecho);
    campo(p, "restante").textContent = "-" + mmss(total * (1 - hecho));

    pon(campo(p, "descripcion"), d.descripcion, "Pendiente · descripción del pódcast");
    pon(campo(p, "autoria-nombre"), d.autoria && d.autoria.nombre, "Pendiente · autoría");
    pon(campo(p, "autoria-rol"), d.autoria && d.autoria.rol, "Pendiente");
    pon(campo(p, "fuente"), d.fuente, "Pendiente · fuente");
    p.querySelectorAll(".feedback__boton").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
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
