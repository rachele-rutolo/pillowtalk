/* ==========================================================================
   Pillowtalk · navegación entre pantallas
   Una sola página. Cada pantalla es una <section class="screen"> con id.
   ========================================================================== */

window.PT = window.PT || {};

const PANTALLA_INICIAL = "springboard";

/* Pantallas que se ven en horizontal: el teléfono girado. */
const HORIZONTALES = new Set(["reproductor"]);

/* Pantallas con fondo oscuro arriba: la status bar va en blanco. */
const OSCURAS = new Set(["springboard", "explorar", "contenido-video"]);

/* Qué pestaña de la navbar queda encendida en cada pantalla.
   El mito y la pregunta del día se abren desde la home, así que la
   pestaña encendida sigue siendo Home. */
const TAB_DE = {
  "home": "home",
  "home-detalle-mito": "home",
  "home-pregunta-dia": "home",
  "explorar": "explorar",
  "biblioteca": "biblioteca",
  "biblioteca-busqueda-activa": "biblioteca",
  "busqueda-con-resultados": "biblioteca",
  "busqueda-sin-resultados": "biblioteca",
  "biblioteca-favoritos": "biblioteca",
  "biblioteca-ver-mas-tarde": "biblioteca",
  "contenido-articulo": "biblioteca",
  "contenido-video": "biblioteca",
  "contenido-podcast": "biblioteca",
  "perfil": "perfil",
  "perfil-datos": "perfil",
  "perfil-ajustes": "perfil",
  "perfil-notificaciones": "perfil"
};

const historial = [];
let actual = null;

function pantallas() {
  return Array.from(document.querySelectorAll(".screen")).map((s) => s.id);
}

function pantallaActual() {
  return actual;
}

function ir(id, { registrar = true } = {}) {
  const destino = document.getElementById(id);
  if (!destino) {
    console.warn("[router] no existe la pantalla:", id);
    return;
  }

  if (registrar && actual && actual !== id) historial.push(actual);

  document.querySelectorAll(".screen").forEach((s) => {
    s.hidden = s.id !== id;
  });

  const device = document.querySelector(".device");
  device.dataset.orientation = HORIZONTALES.has(id) ? "landscape" : "portrait";

  /* Status bar en blanco sobre las pantallas de fondo oscuro */
  const barra = document.querySelector(".status-bar");
  if (barra) barra.dataset.tema = OSCURAS.has(id) ? "oscuro" : "claro";

  marcarTab(TAB_DE[id] || null);
  destino.querySelector(".screen__scroll")?.scrollTo(0, 0);

  actual = id;
  document.dispatchEvent(new CustomEvent("pantalla:cambia", { detail: { id } }));

  const dev = document.getElementById("dev-select");
  if (dev && dev.value !== id) dev.value = id;
}

function atras() {
  const anterior = historial.pop();
  if (anterior) ir(anterior, { registrar: false });
}

function marcarTab(tab) {
  document.querySelectorAll("[data-tab]").forEach((btn) => {
    const activo = btn.dataset.tab === tab;
    btn.setAttribute("aria-current", activo ? "page" : "false");
  });
}

/* ---------- Cableado declarativo ----------
   <button data-ir="crear-cuenta">   → navega
   <button data-atras>               → vuelve
   <button data-abre="modal-cuenta"> → abre una hoja inferior
   <button data-cierra>              → cierra la hoja abierta
   ------------------------------------------------------------------ */
function cablear() {
  document.addEventListener("click", (e) => {
    /* Cerrar va primero y no corta: un botón puede cerrar la hoja
       y llevar a otra pantalla en el mismo clic. */
    if (e.target.closest("[data-cierra]")) cerrarHoja();

    const abre = e.target.closest("[data-abre]");
    if (abre) { abrirHoja(abre.dataset.abre); return; }

    const irA = e.target.closest("[data-ir]");
    if (irA) { ir(irA.dataset.ir); return; }

    if (e.target.closest("[data-atras]")) atras();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarHoja();
  });
}

function abrirHoja(id) {
  const hoja = document.getElementById(id);
  if (!hoja) return;
  document.getElementById("overlay").dataset.open = "true";
  hoja.dataset.open = "true";
}

function cerrarHoja() {
  document.getElementById("overlay").dataset.open = "false";
  document.querySelectorAll(".sheet").forEach((h) => (h.dataset.open = "false"));
}

function arranca() {
  cablear();

  /* Cambiar el # en la barra del navegador lleva a esa pantalla. */
  window.addEventListener("hashchange", () => {
    const id = location.hash.replace("#", "");
    if (id && id !== actual && document.getElementById(id)) ir(id);
  });

  const desdeUrl = location.hash.replace("#", "");
  ir(desdeUrl && document.getElementById(desdeUrl) ? desdeUrl : PANTALLA_INICIAL, {
    registrar: false
  });
}

PT.pantallas = pantallas;
PT.pantallaActual = pantallaActual;
PT.ir = ir;
PT.atras = atras;
PT.abrirHoja = abrirHoja;
PT.cerrarHoja = cerrarHoja;
PT.arranca = arranca;
