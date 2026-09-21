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


/* ---------- Mini player ----------
   La ✕ lo cierra. */
function miniPlayer() {
  var barra = document.getElementById("mini-player");
  if (!barra) return;
  barra.querySelector(".mini-player__cerrar").addEventListener("click", function () {
    barra.hidden = true;
  });
}

/* ---------- Filtros de formato de la biblioteca ----------
   Selección única: es un filtro, no una acción. */
function filtrosFormato() {
  var grupo = document.querySelector(".chips--formato");
  if (!grupo) return;
  grupo.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    grupo.querySelectorAll(".chip").forEach(function (c) {
      c.setAttribute("aria-pressed", "false");
    });
    chip.setAttribute("aria-pressed", "true");
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
  miniPlayer();
  filtrosFormato();
  busqueda();
};
