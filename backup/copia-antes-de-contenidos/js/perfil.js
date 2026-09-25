/* ==========================================================================
   Pillowtalk · perfil
   Perfil · Datos enseña todos los datos del onboarding y sus dos permisos.
   Lo que se omitió aparece como pendiente y se puede añadir.
   ========================================================================== */

window.PT = window.PT || {};

var FILAS_PERFIL = [
  ["Nombre", "nombre", "onb-nombre"],
  ["Nos dirigimos a ti con", "pronombres", "onb-pronombres"],
  ["Identidad", "identidad", "onb-identidad"],
  ["Orientación", "orientacion", "onb-orientacion"],
  ["Situación", "estadoRelacional", "onb-estado-relacional"],
  ["Temas", "temas", "onb-temas"],
  ["Qué te trajo aquí", "queTeHaTraido", "onb-que-te-ha-traido"]
];

function valor(clave) {
  var v = PT.state.perfil[clave];
  if (Array.isArray(v)) return v.length ? v.join(", ") : null;
  return v || null;
}

function pintaDatos() {
  var caja = document.getElementById("perfil-datos-lista");
  if (!caja) return;
  caja.innerHTML = "";

  FILAS_PERFIL.forEach(function (fila) {
    var v = valor(fila[1]);
    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "fila-dato";
    boton.dataset.ir = fila[2];
    boton.innerHTML =
      '<span class="fila-dato__textos">' +
        '<span class="fila-dato__clave"></span>' +
        '<span class="fila-dato__valor"></span>' +
      '</span><span class="fila-dato__accion"></span>';
    boton.querySelector(".fila-dato__clave").textContent = fila[0];
    var celda = boton.querySelector(".fila-dato__valor");
    celda.textContent = v || "Sin responder";
    if (!v) celda.classList.add("fila-dato__valor--pendiente");
    boton.querySelector(".fila-dato__accion").textContent = v ? "Editar" : "Añadir";
    caja.appendChild(boton);
  });
}

/* Los dos permisos siguen siendo independientes también aquí. */
function permisosDelPerfil() {
  var uno = document.getElementById("perfil-permiso-respuestas");
  var dos = document.getElementById("perfil-permiso-uso");
  if (!uno || !dos) return;
  uno.addEventListener("change", function () { PT.state.permisoRespuestas = uno.checked; });
  dos.addEventListener("change", function () { PT.state.permisoUso = dos.checked; });
}

function avisos() {
  document.querySelectorAll("[data-aviso]").forEach(function (casilla) {
    casilla.addEventListener("change", function () {
      PT.state.avisos[casilla.dataset.aviso] = casilla.checked;
    });
  });
}

/* Resume en la fila de Perfil qué avisos están encendidos. */
function resumenDeAvisos() {
  var nombres = { push: "push", mensajes: "mensajes", email: "email" };
  var encendidos = Object.keys(PT.state.avisos).filter(function (k) { return PT.state.avisos[k]; });
  if (!encendidos.length) return "Elegir de qué quieres que te avisemos";
  return encendidos.map(function (k) { return nombres[k]; }).join(" · ");
}

/* La fila de cuenta de Ajustes no dice lo mismo a quien no tiene cuenta. */
function ponAlDia() {
  /* El título de Perfil es el nombre de la usuaria. El nombre se cambia
     desde Tus datos, no desde aquí. */
  var titular = document.getElementById("perfil-titular");
  if (titular) titular.textContent = PT.state.perfil.nombre || "Perfil";

  var avisosDetalle = document.getElementById("perfil-avisos-detalle");
  if (avisosDetalle) avisosDetalle.textContent = resumenDeAvisos();

  var ajustes = document.getElementById("perfil-ajustes-detalle");
  if (ajustes) {
    ajustes.textContent = PT.state.tieneCuenta
      ? "Cuenta (modificar correo y contraseña, borrar cuenta) · Ayuda"
      : "Cuenta (iniciar sesión) · Ayuda";
  }

  var uno = document.getElementById("perfil-permiso-respuestas");
  var dos = document.getElementById("perfil-permiso-uso");
  if (uno) uno.checked = PT.state.permisoRespuestas;
  if (dos) dos.checked = PT.state.permisoUso;

}

function ponAlDiaAvisos() {
  document.querySelectorAll("[data-aviso]").forEach(function (casilla) {
    casilla.checked = PT.state.avisos[casilla.dataset.aviso] === true;
  });
}

/* Ajustes: sin cuenta no hay correo ni contraseña que cambiar, y quien
   entró con Google o Apple no tiene contraseña propia en la app. */
function ponAlDiaAjustes() {
  var correo = document.getElementById("ajustes-correo");
  var pass = document.getElementById("ajustes-contrasena");
  var sesion = document.getElementById("ajustes-sesion");
  if (!correo || !pass || !sesion) return;

  correo.hidden = !PT.state.tieneCuenta;
  pass.hidden = !(PT.state.tieneCuenta && PT.state.via === "correo");

  var titulo = document.getElementById("ajustes-sesion-titulo");
  var detalle = document.getElementById("ajustes-sesion-detalle");
  if (PT.state.tieneCuenta) {
    titulo.textContent = "Borrar cuenta";
    detalle.textContent = "Se borra todo lo que has guardado y lo que has respondido";
    sesion.dataset.ir = "";
    sesion.removeAttribute("data-ir");
  } else {
    titulo.textContent = "Iniciar sesión";
    detalle.textContent = "Entra con tu cuenta para recuperar lo tuyo";
    sesion.dataset.ir = "iniciar-sesion";
  }
}

PT.montarPerfil = function () {
  permisosDelPerfil();
  avisos();

  document.addEventListener("pantalla:cambia", function (e) {
    if (e.detail.id === "perfil") ponAlDia();
    if (e.detail.id === "perfil-datos") { pintaDatos(); ponAlDia(); }
    if (e.detail.id === "perfil-ajustes") ponAlDiaAjustes();
    if (e.detail.id === "perfil-notificaciones") ponAlDiaAvisos();
  });
};
