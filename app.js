/* ==========================================================================
   Pillowtalk · arranque
   ========================================================================== */

window.PT = window.PT || {};

/* ---------- La navbar solo aparece en las pantallas que la tienen ---------- */
document.addEventListener("pantalla:cambia", function (e) {
  var pantalla = document.getElementById(e.detail.id);
  var navbar = document.getElementById("navbar");
  navbar.dataset.visible = pantalla.classList.contains("screen--tabbed") ? "true" : "false";

  var estado = document.getElementById("dev-estado");
  if (estado) {
    estado.textContent =
      (PT.state.tieneCuenta ? "con cuenta" : "sin cuenta") +
      " · permisos " + (PT.state.permisoRespuestas ? "1" : "-") + (PT.state.permisoUso ? "2" : "-");
  }

  /* Deja la pantalla actual en la URL, para poder recargar donde estabas.
     Al abrir el archivo con doble clic el navegador no deja tocar la URL,
     así que se intenta y si no se puede, no pasa nada. */
  try {
    history.replaceState(null, "", "#" + e.detail.id);
  } catch (err) {
    location.hash = e.detail.id;
  }
});

/* ---------- Ripple de los botones ---------- */
document.addEventListener("pointerdown", function (e) {
  var btn = e.target.closest(".btn");
  if (!btn) return;
  var r = btn.getBoundingClientRect();
  var d = Math.max(r.width, r.height);
  var onda = document.createElement("span");
  onda.className = "ripple";
  onda.style.width = onda.style.height = d + "px";
  onda.style.left = e.clientX - r.left - d / 2 + "px";
  onda.style.top = e.clientY - r.top - d / 2 + "px";
  btn.appendChild(onda);
  setTimeout(function () { onda.remove(); }, 560);
});

/* ---------- Barra de desarrollo ---------- */
function montarDevbar() {
  var select = document.getElementById("dev-select");
  PT.pantallas().forEach(function (id) {
    var op = document.createElement("option");
    op.value = op.textContent = id;
    select.appendChild(op);
  });
  select.addEventListener("change", function () { PT.ir(select.value); });

  document.getElementById("dev-reset").addEventListener("click", function () {
    location.hash = "";
    location.reload();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "d" && !e.target.matches("input, textarea, select")) {
      var bar = document.getElementById("devbar");
      bar.hidden = !bar.hidden;
    }
  });
}

montarDevbar();
PT.montarPantallas();
PT.montarCuenta();
PT.montarOnboarding();
PT.montarMazo();
PT.montarContenido();
PT.montarPerfil();
PT.arranca();
