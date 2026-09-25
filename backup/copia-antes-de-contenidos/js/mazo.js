/* ==========================================================================
   Pillowtalk · el mazo de Explorar
   Adaptado de la ficha "Swipe de cartas" del design system, que ya venía
   en HTML y JavaScript plano. Cambios: medidas y tipografía del mazo de
   Figma, y las flechas viven fuera de la zona de cartas.
   ========================================================================== */

window.PT = window.PT || {};

/* Las cartas del mazo, con sus colores. Salen del design system. */
var CARTAS = [
  { t: "¿Hay algo que te gusta y que nunca has dicho en voz alta?", bg: "#5E3FFF", fg: "#ECE7FF" },
  { t: "¿Cuál es tu fantasía más recurrente?",                      bg: "#FFE342", fg: "#4A3B00" },
  { t: "¿Qué te hace sentir más deseado o deseada?",                bg: "#FF9899", fg: "#5A1516" },
  { t: "¿Prefieres que te lo cuenten o que te lo muestren?",        bg: "#CA91FF", fg: "#3D2352" },
  { t: "¿Qué límite te apetece explorar con confianza?",            bg: "#FF4C50", fg: "#FFFFFF" }
];

/* Posición del abanico: carta frontal y dos detrás. */
var VISIBLES = 3;
var ABANICO = [
  { x: 0,   y: 0,   r: 2,  s: 1    },
  { x: 12,  y: -14, r: 6,  s: 0.96 },
  { x: -12, y: -24, r: -4, s: 0.92 }
];

PT.montarMazo = function () {
  var mazo = document.getElementById("mazo-swipe");
  if (!mazo) return;

  var i = 0, pila = [], arrastre = null, ocupado = false;

  function pose(n) {
    var f = ABANICO[n] || ABANICO[ABANICO.length - 1];
    return "translate(" + f.x + "px," + f.y + "px) rotate(" + f.r + "deg) scale(" + f.s + ")";
  }

  function creaCarta(datos) {
    var c = document.createElement("div");
    c.className = "carta";
    c.style.background = datos.bg;
    c.style.color = datos.fg;
    var p = document.createElement("p");
    p.textContent = datos.t;
    c.appendChild(p);
    return c;
  }

  function coloca() {
    for (var n = 0; n < pila.length; n++) {
      var c = pila[n];
      c.style.zIndex = String(20 - n);
      if (c !== (arrastre && arrastre.carta)) c.style.transform = pose(n);
      c.style.opacity = n < VISIBLES ? "1" : "0";
      c.style.pointerEvents = n === 0 ? "auto" : "none";
    }
  }

  function vuela(dir) {
    if (ocupado || !pila.length) return;
    ocupado = true;

    var carta = pila.shift();
    carta.style.zIndex = "30";
    carta.style.transition = "transform .6s cubic-bezier(.25,.5,.35,1), opacity .55s ease";
    carta.style.transform = "translate(" + dir * 560 + "px,36px) rotate(" + dir * 20 + "deg) scale(1.02)";
    carta.style.opacity = "0";

    var nueva = creaCarta(CARTAS[i % CARTAS.length]); i++;
    nueva.style.transition = "none";
    nueva.style.opacity = "0";
    mazo.appendChild(nueva); pila.push(nueva);
    nueva.style.transform = pose(pila.length - 1);
    void nueva.offsetWidth;
    nueva.style.transition = "";

    coloca();
    requestAnimationFrame(function () { nueva.style.opacity = "1"; });
    setTimeout(function () { carta.remove(); ocupado = false; }, 600);
  }

  function alMover(e) {
    if (!arrastre) return;
    arrastre.dx = e.clientX - arrastre.x0;
    arrastre.dy = e.clientY - arrastre.y0;
    arrastre.carta.style.transform =
      "translate(" + arrastre.dx + "px," + arrastre.dy * 0.35 + "px) rotate(" +
      arrastre.dx / 18 + "deg) scale(1.03)";
  }

  function alSoltar() {
    window.removeEventListener("pointermove", alMover);
    window.removeEventListener("pointerup", alSoltar);
    if (!arrastre) return;
    var carta = arrastre.carta, dx = arrastre.dx;
    arrastre = null;
    carta.style.transition = "transform .5s cubic-bezier(.2,.85,.25,1), opacity .4s ease";
    if (Math.abs(dx) > 95) vuela(dx > 0 ? 1 : -1);
    else carta.style.transform = pose(0);
  }

  mazo.addEventListener("pointerdown", function (e) {
    var frontal = pila[0];
    if (ocupado || !frontal || !frontal.contains(e.target)) return;
    arrastre = { carta: frontal, x0: e.clientX, y0: e.clientY, dx: 0, dy: 0 };
    frontal.style.transition = "none";
    window.addEventListener("pointermove", alMover);
    window.addEventListener("pointerup", alSoltar);
  });

  document.querySelectorAll("[data-swipe]").forEach(function (boton) {
    boton.addEventListener("click", function () { vuela(Number(boton.dataset.swipe)); });
  });

  document.addEventListener("keydown", function (e) {
    if (PT.pantallaActual() !== "explorar") return;
    if (e.key === "ArrowLeft") vuela(-1);
    if (e.key === "ArrowRight") vuela(1);
  });

  for (var n = 0; n < VISIBLES; n++) {
    var c = creaCarta(CARTAS[i % CARTAS.length]); i++;
    mazo.appendChild(c); pila.push(c);
  }
  coloca();
};
