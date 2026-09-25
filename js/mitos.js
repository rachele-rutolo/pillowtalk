/* ==========================================================================
   Pillowtalk · mitos
   Los textos de cada mito. La pantalla "Detalle del mito" es una sola y se
   rellena con el mito que se ha tocado en la home. La estructura de la
   pantalla no cambia: solo cambian los textos.
   Donde falta un texto, marcador visible (regla 9: nada se inventa).
   ========================================================================== */

window.PT = window.PT || {};

var PENDIENTE = null; // campo sin texto todavía: se pinta el marcador

PT.MITOS = {
  "himen": {
    afirmacion: "El himen se rompe la primera vez",
    respuesta: "El himen es un pliegue de tejido elástico en la entrada de la vagina, y su forma cambia muchísimo de una persona a otra. No sella nada, así que no hay nada que romper como si fuera un precinto. Puede estirarse, puede molestar, puede sangrar o no, y nada de eso dice absolutamente nada sobre lo que esa persona ha hecho o dejado de hacer.",
    dato: {
      titular: "En Suecia le cambiaron el nombre",
      cuerpo: "Desde 2009 la asociación sueca de educación sexual lo llama corona vaginal en lugar de himen, precisamente para romper con la idea de membrana que se rompe.",
      fuente: "RFSU, Asociación Sueca de Educación Sexual"
    },
    autoria: { nombre: "RFSU", rol: "Asociación Sueca de Educación Sexual" }
  },
  "eyaculacion-femenina":  { afirmacion: "Eyaculación femenina", respuesta: PENDIENTE, dato: PENDIENTE, autoria: PENDIENTE },
  "penetracion-orgasmo":   { afirmacion: "La penetración basta para el orgasmo", respuesta: PENDIENTE, dato: PENDIENTE, autoria: PENDIENTE },
  "hombres-mas-sexo":      { afirmacion: "Los hombres quieren sexo más que las mujeres", respuesta: PENDIENTE, dato: PENDIENTE, autoria: PENDIENTE },
  "cuerpo-responde":       { afirmacion: "Si tu cuerpo responde, es que te apetece", respuesta: PENDIENTE, dato: PENDIENTE, autoria: PENDIENTE }
};

(function () {
  var actual = "himen";

  /* Se guarda qué mito se ha tocado antes de que el router cambie de
     pantalla (fase de captura: va antes que el clic del router). */
  document.addEventListener("click", function (e) {
    var card = e.target.closest("[data-mito]");
    if (card && PT.MITOS[card.dataset.mito]) actual = card.dataset.mito;
  }, true);

  function pon(el, texto, marcador) {
    if (!el) return;
    el.textContent = texto || marcador;
    el.classList.toggle("pendiente", !texto);
  }

  function pinta() {
    var m = PT.MITOS[actual];
    var p = document.getElementById("home-detalle-mito");
    if (!m || !p) return;
    var q = function (campo) { return p.querySelector('[data-campo="' + campo + '"]'); };
    q("afirmacion").textContent = "“" + m.afirmacion + "”";
    pon(q("respuesta"), m.respuesta, "Pendiente · respuesta del mito");
    pon(q("dato-titular"), m.dato && m.dato.titular, "Pendiente · dato");
    pon(q("dato-cuerpo"), m.dato && m.dato.cuerpo, "Pendiente · texto del dato");
    pon(q("dato-fuente"), m.dato && m.dato.fuente, "Pendiente · fuente");
    pon(q("autoria-nombre"), m.autoria && m.autoria.nombre, "Pendiente · autoría");
    pon(q("autoria-rol"), m.autoria && m.autoria.rol, "Pendiente");
    /* El retrato es el de la fuente del mito del himen: sin autoría, no se enseña */
    q("autoria-retrato").style.visibility = m.autoria ? "visible" : "hidden";
  }

  document.addEventListener("pantalla:cambia", function (e) {
    if (e.detail.id === "home-detalle-mito") pinta();
  });
})();
