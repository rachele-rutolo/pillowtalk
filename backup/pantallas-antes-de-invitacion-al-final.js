/* ==========================================================================
   Pillowtalk · comportamiento propio de cada pantalla
   ========================================================================== */

window.PT = window.PT || {};

/* ---------- Edad y términos ----------
   Es lo único obligatorio de todo el recorrido (regla 1 de la spec):
   Entrar no se activa hasta que hay fecha completa y términos aceptados.
   La pantalla no dice cuál es la edad mínima ni para qué se pide la fecha,
   así que aquí no se valida la edad, solo que los campos estén llenos.  */
function edadYTerminos() {
  const campos = ["edad-dd", "edad-mm", "edad-aaaa"].map((id) => document.getElementById(id));
  const acepta = document.getElementById("edad-terminos-check");
  const entrar = document.getElementById("edad-entrar");
  if (!entrar || campos.some((c) => !c) || !acepta) return;

  function revisar() {
    const completa = campos.every((c) => c.value.trim().length === c.maxLength);
    entrar.disabled = !(completa && acepta.checked);
  }

  /* Salta al campo siguiente cuando el actual se llena */
  campos.forEach((campo, i) => {
    campo.addEventListener("input", () => {
      campo.value = campo.value.replace(/\D/g, "");
      if (campo.value.length === campo.maxLength && campos[i + 1]) campos[i + 1].focus();
      revisar();
    });
  });

  acepta.addEventListener("change", revisar);
  revisar();

  /* Al entrar por primera vez en la home después de la edad, sube sola la
     invitación a crear cuenta (una sola vez y solo a quien no tiene cuenta).
     El disparador invisible de la home sigue funcionando igual. */
  let invitacionMostrada = false;
  entrar.addEventListener("click", () => {
    if (invitacionMostrada || PT.state.tieneCuenta) return;
    invitacionMostrada = true;
    setTimeout(() => {
      if (PT.pantallaActual() === "home" && !PT.state.tieneCuenta) PT.abrirHoja("modal-cuenta");
    }, 500);
  });
}

/* ---------- Pregunta del día ----------
   Se responde en la propia home, no tiene respuesta correcta y al
   responder marca la opción elegida y abre el acceso al detalle. */
function preguntaDelDia() {
  document.querySelectorAll(".card-pregunta").forEach(montaPregunta);
}

/* La misma card vive en la home y en su pantalla de detalle: las dos
   se marcan igual, pero el acceso al detalle solo sale en la home. */
function montaPregunta(card) {
  card.addEventListener("click", (e) => {
    const opcion = e.target.closest(".opcion");
    if (!opcion) return;

    card.querySelectorAll(".opcion").forEach((o) => o.setAttribute("aria-pressed", "false"));
    opcion.setAttribute("aria-pressed", "true");
    PT.state.respuestaDelDia = opcion.textContent.trim();

    if (!card.querySelector(".card-pregunta__detalle")) {
      const enlace = document.createElement("button");
      enlace.type = "button";
      enlace.className = "btn btn--texto card-pregunta__detalle";
      enlace.dataset.ir = "home-pregunta-dia";
      enlace.textContent = "Ver más →";
      if (card.id === "pregunta-dia") card.appendChild(enlace);
    }
  });
}


/* ---------- Home genérica / personalizada ----------
   Misma pantalla, dos estados. La personalizada cambia Explora por temas
   por Tus temas y el título de la fila de vídeos. */
function homeSegunPerfil() {
  document.addEventListener("pantalla:cambia", function (e) {
    if (e.detail.id !== "home") return;
    var personal = PT.homePersonalizada();
    document.querySelectorAll("#home [data-home]").forEach(function (s) {
      s.hidden = s.dataset.home !== (personal ? "personalizada" : "generica");
    });
    var titulo = document.getElementById("home-videos-titulo");
    if (titulo) titulo.textContent = personal ? "Vídeos que podrían gustarte" : "Vídeos para empezar";
  });
}

/* ---------- Mini player ----------
   Empieza oculto. Aparece al dar play a un pódcast o un vídeo, o al abrir
   un artículo, con los datos de esa pieza sacados de PT.CATALOGO: una pieza
   nueva añadida al catálogo funciona sin tocar esto. La ✕ lo cierra. */
function miniPlayer() {
  var barra = document.getElementById("mini-player");
  if (!barra) return;

  function mostrar(id) {
    var pieza = PT.CATALOGO && PT.CATALOGO[id];
    if (!pieza) return;
    barra.dataset.contenido = id;
    barra.querySelector(".mini-player__titulo").textContent = pieza.titulo;
    barra.querySelector(".mini-player__meta").textContent = pieza.meta;
    barra.querySelector(".mini-player__abrir").dataset.ir = pieza.pantalla;
    var portada = barra.querySelector(".mini-player__portada");
    portada.classList.remove("sin-imagen");
    portada.style.backgroundImage = pieza.img ? 'url("' + pieza.img + '")' : "";
    portada.style.backgroundSize = "cover";
    portada.style.backgroundPosition = "center";
    /* En artículo no hay nada que reproducir: la barra entera es "seguir leyendo". */
    barra.querySelector(".btn-play").hidden = pieza.tipo === "articulo";
    barra.hidden = false;
  }

  /* Play dentro de una pantalla de contenido (pódcast o vídeo) */
  document.addEventListener("click", function (e) {
    var play = e.target.closest(".btn-play");
    if (!play || barra.contains(play)) return;
    var pantalla = play.closest("section[data-contenido]");
    if (pantalla) mostrar(pantalla.dataset.contenido);
  });

  /* Abrir un artículo cuenta como empezar a leerlo */
  document.addEventListener("pantalla:cambia", function (e) {
    var pantalla = document.getElementById(e.detail.id);
    var id = pantalla && pantalla.dataset.contenido;
    if (id && PT.CATALOGO[id] && PT.CATALOGO[id].tipo === "articulo") mostrar(id);
  });

  barra.querySelector(".mini-player__cerrar").addEventListener("click", function () {
    barra.hidden = true;
  });
}

/* ---------- Búsqueda ----------
   Al escribir se filtran las sugerencias. Con Enter, si lo escrito
   coincide con una sugerencia se va a los resultados; si no, al estado
   sin resultados, que enseña lo que se ha buscado. */
function busqueda() {
  var campo = document.getElementById("busqueda-campo");
  var caja = document.getElementById("sugerencias");
  if (!campo || !caja) return;

  var sugerencias = Array.from(caja.querySelectorAll(".sugerencia"));

  campo.addEventListener("input", function () {
    var texto = campo.value.trim().toLowerCase();
    sugerencias.forEach(function (s) {
      s.hidden = texto.length > 0 && s.textContent.toLowerCase().indexOf(texto) === -1;
    });
  });

  campo.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") return;
    var texto = campo.value.trim();
    if (!texto) return;
    var acierto = sugerencias.filter(function (s) { return !s.hidden; })[0];
    if (acierto && acierto.textContent.toLowerCase() === texto.toLowerCase()) {
      PT.ir(acierto.dataset.ir);
      return;
    }
    var eco = document.getElementById("busqueda-sin-texto");
    if (eco) eco.textContent = texto;
    PT.ir("busqueda-sin-resultados");
  });
}

PT.montarPantallas = function () {
  edadYTerminos();
  preguntaDelDia();
  homeSegunPerfil();
  miniPlayer();
  busqueda();
};
