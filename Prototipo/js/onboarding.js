/* ==========================================================================
   Pillowtalk · onboarding
   Reglas que no se rompen (spec §5):
   - Todo se salta, pregunta a pregunta o de una vez.
   - Los dos permisos son independientes y están apagados de partida.
   - Sin el primer permiso no hay parte 2: no se hace ninguna pregunta
     sensible antes de tenerlo.
   - El resumen solo cierra un onboarding completo.
   ========================================================================== */

window.PT = window.PT || {};

/* ---------- Guardar lo que responde ---------- */

function guardaRespuestas() {
  /* Nombre */
  var nombre = document.getElementById("onb-nombre-campo");
  if (nombre) {
    nombre.addEventListener("input", function () {
      PT.state.perfil.nombre = nombre.value.trim() || null;
    });
  }

  /* Radios: pronombres, identidad, situación */
  document.querySelectorAll(".radios[data-guarda]").forEach(function (grupo) {
    var clave = grupo.dataset.guarda;
    grupo.addEventListener("change", function (e) {
      if (e.target.matches("input[type=radio]")) PT.state.perfil[clave] = e.target.value;
    });
  });

  /* Campos abiertos: lo escrito manda sobre la opción marcada */
  [["identidad-libre", "identidad"], ["orientacion-libre", "orientacion"],
   ["situacion-libre", "estadoRelacional"]].forEach(function (par) {
    var campo = document.getElementById(par[0]);
    if (!campo) return;
    campo.addEventListener("input", function () {
      var texto = campo.value.trim();
      if (!texto) return;
      if (par[1] === "orientacion") PT.state.perfil.orientacion = [texto];
      else PT.state.perfil[par[1]] = texto;
    });
  });

  /* Chips: orientación y temas, selección múltiple */
  document.querySelectorAll(".chips[data-guarda]").forEach(function (grupo) {
    var clave = grupo.dataset.guarda;
    grupo.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      var encendido = chip.getAttribute("aria-pressed") === "true";
      chip.setAttribute("aria-pressed", String(!encendido));
      PT.state.perfil[clave] = Array.from(grupo.querySelectorAll('.chip[aria-pressed="true"]'))
        .map(function (c) { return c.textContent.trim(); });
    });
  });

  /* Checkboxes: qué te ha traído aquí */
  document.querySelectorAll(".checks[data-guarda]").forEach(function (grupo) {
    var clave = grupo.dataset.guarda;
    grupo.addEventListener("change", function () {
      PT.state.perfil[clave] = Array.from(grupo.querySelectorAll("input:checked"))
        .map(function (c) { return c.value; });
    });
  });
}

/* ---------- Permisos ----------
   El ramo depende solo del primer interruptor. */

function permisos() {
  var uno = document.getElementById("permiso-respuestas");
  var dos = document.getElementById("permiso-uso");
  var continuar = document.getElementById("permisos-continuar");
  if (!uno || !dos || !continuar) return;

  uno.addEventListener("change", function () { PT.state.permisoRespuestas = uno.checked; });
  dos.addEventListener("change", function () { PT.state.permisoUso = dos.checked; });

  continuar.addEventListener("click", function () {
    PT.ir(PT.state.permisoRespuestas ? "onb-identidad" : "onb-notificaciones");
  });
}

/* ---------- Notificaciones ----------
   Se piden al final y también a quien ha omitido todas las preguntas:
   son el único mecanismo que genera ocasión de uso. */

function notificaciones() {
  document.querySelectorAll("[data-notificaciones]").forEach(function (boton) {
    boton.addEventListener("click", function () {
      PT.state.notificaciones = boton.dataset.notificaciones === "si";
      /* Decir que sí en el onboarding enciende el aviso push; el resto
         se elige después desde Perfil. */
      PT.state.avisos.push = PT.state.notificaciones;
      PT.ir("onb-resumen");
    });
  });
}

/* ---------- Resumen ----------
   Se pinta con lo que ha respondido de verdad. Lo que se omitió aparece
   como pendiente: no se inventa ningún valor. */

var FILAS = [
  ["Nombre", "nombre"],
  ["Nos dirigimos a ti con", "pronombres"],
  ["Identidad", "identidad"],
  ["Orientación", "orientacion"],
  ["Situación", "estadoRelacional"],
  ["Temas", "temas"],
  ["Qué te ha traído aquí", "queTeHaTraido"]
];

function valorDe(clave) {
  var v = PT.state.perfil[clave];
  if (Array.isArray(v)) return v.length ? v.join(", ") : null;
  return v || null;
}

function pintaResumen() {
  var caja = document.getElementById("resumen-datos");
  if (!caja) return;
  caja.innerHTML = "";

  FILAS.forEach(function (fila) {
    var valor = valorDe(fila[1]);
    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "fila-dato";
    boton.innerHTML =
      '<span class="fila-dato__textos">' +
        '<span class="fila-dato__clave"></span>' +
        '<span class="fila-dato__valor"></span>' +
      '</span>' +
      '<span class="fila-dato__accion"></span>';
    boton.querySelector(".fila-dato__clave").textContent = fila[0];
    var celda = boton.querySelector(".fila-dato__valor");
    celda.textContent = valor || "Sin responder";
    if (!valor) celda.classList.add("fila-dato__valor--pendiente");
    boton.querySelector(".fila-dato__accion").textContent = valor ? "Editar" : "Añadir";
    caja.appendChild(boton);
  });
}

function resumen() {
  document.addEventListener("pantalla:cambia", function (e) {
    if (e.detail.id === "onb-resumen") pintaResumen();
  });

  var entrar = document.getElementById("resumen-entrar");
  if (!entrar) return;
  entrar.addEventListener("click", function () {
    PT.state.onboardingCompleto = true;
    PT.ir("home");
  });
}

PT.montarOnboarding = function () {
  guardaRespuestas();
  permisos();
  notificaciones();
  resumen();
};
