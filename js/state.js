/* ==========================================================================
   Pillowtalk · estado de la sesión
   Todo lo que parece personalizado está fijado a mano (PRD 7.3).
   No hay backend ni almacenamiento: al recargar, la demo vuelve a empezar.
   ========================================================================== */

window.PT = window.PT || {};

PT.state = {
  /* ¿ha creado cuenta o ha iniciado sesión? */
  tieneCuenta: false,

  /* ¿cómo ha entrado? "correo" | "google" | "apple" | null
     Quien entra con Google o Apple no tiene contraseña propia en la app. */
  via: null,

  /* Los dos permisos del onboarding son independientes (PRD 6.4).
     Apagados de partida: una casilla marcada de antemano no es consentimiento. */
  permisoRespuestas: false,
  permisoUso: false,

  /* Respuestas del onboarding. null = sin responder, se muestra como pendiente. */
  perfil: {
    nombre: null,
    pronombres: null,
    identidad: null,
    orientacion: [],
    estadoRelacional: null,
    temas: [],
    queTeHaTraido: []
  },

  notificaciones: null,      // lo que respondió en el onboarding: true | false | null

  /* Por dónde quiere que la avisemos. Se afina desde Perfil. */
  avisos: { push: false, mensajes: false, email: false },
  onboardingCompleto: false, // el resumen solo cierra un onboarding completo

  /* Guardados del usuario dentro de la demo */
  favoritos: new Set(),
  verMasTarde: new Set()
};

/* El perfil de la demo (spec §1). Se aplica al terminar el onboarding:
   el prototipo no aprende nada, solo enseña este resultado. */
PT.PERFIL_DEMO = {
  nombre: "Lola",
  pronombres: "Ella",
  identidad: "Mujer",
  orientacion: ["Bisexual"],
  estadoRelacional: "En pareja monógama",
  temas: ["Deseo y fantasías", "Límites"],
  queTeHaTraido: []
};

/* ¿La home enseña contenido genérico o el de Lola? */
PT.homePersonalizada = function () {
  return PT.state.onboardingCompleto && PT.state.permisoRespuestas;
};
