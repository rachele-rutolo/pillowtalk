/* ==========================================================================
   Pillowtalk · cuenta
   Crear cuenta, iniciar sesión y el ojo de la contraseña.
   No hay backend: aquí solo se apunta cómo ha entrado la usuaria, porque
   quien entra con Google o Apple no tiene contraseña propia en la app y
   eso cambia lo que enseña Ajustes.
   ========================================================================== */

window.PT = window.PT || {};

function ojos() {
  document.addEventListener("click", function (e) {
    var boton = e.target.closest("[data-ojo]");
    if (!boton) return;
    var campo = document.getElementById(boton.dataset.ojo);
    var visible = campo.type === "text";
    campo.type = visible ? "password" : "text";
    boton.setAttribute("aria-pressed", String(!visible));
    boton.setAttribute("aria-label", visible ? "Mostrar la contraseña" : "Ocultar la contraseña");
    var icono = boton.querySelector("img");
    if (icono) icono.src = visible ? "assets/icons/eye.png" : "assets/icons/eye-slash.png";
  });
}

function via() {
  document.addEventListener("click", function (e) {
    var boton = e.target.closest("[data-via]");
    if (!boton) return;
    PT.state.via = boton.dataset.via;
    PT.state.tieneCuenta = true;

    /* Si ha entrado con Google o Apple, el nombre llega relleno. */
    if (PT.state.via !== "correo") PT.state.perfil.nombre = PT.PERFIL_DEMO.nombre;
  });
}

/* Iniciar sesión · quien ya tiene cuenta entra a la home personalizada.
   PENDIENTE: en Figma el estado de error se ve siempre porque Figma no
   tiene estado. Aquí solo aparece si se pulsa Entrar con algún campo
   vacío. Confirmar si es lo que se quiere enseñar. */
function iniciarSesion() {
  var entrar = document.getElementById("sesion-entrar");
  var error = document.getElementById("sesion-error");
  if (!entrar || !error) return;

  function sesionIniciada() {
    PT.state.tieneCuenta = true;
    PT.state.onboardingCompleto = true;
    PT.state.permisoRespuestas = true;
    Object.assign(PT.state.perfil, PT.PERFIL_DEMO);
    error.hidden = true;
    PT.ir("home");
  }

  entrar.addEventListener("click", function () {
    var correo = document.getElementById("is-correo").value.trim();
    var pass = document.getElementById("is-pass").value.trim();
    if (!correo || !pass) { error.hidden = false; return; }
    sesionIniciada();
  });

  document.querySelectorAll("[data-entrar-sesion]").forEach(function (boton) {
    boton.addEventListener("click", sesionIniciada);
  });
}

PT.montarCuenta = function () {
  ojos();
  via();
  iniciarSesion();
};
