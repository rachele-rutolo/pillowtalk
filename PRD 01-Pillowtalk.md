# PRD – Pillowtalk

**Versión del PRD:** V3 · **Versión del producto:** V4 · **Autor/es:** TFM #01 · **Fecha:** 20/09/2026 · **Estado:** Draft

---

## 1. Resumen Ejecutivo

Pillowtalk es una app multiuso de educación y bienestar sexual para adultos que no recibieron una educación sexual completa y que hoy resuelven sus dudas mal: con Google, con pornografía, con amigos o con IA conversacional.

El producto ofrece varias vías de exploración sobre una misma base de contenido respaldado por profesionales: contenido profesional en podcast, artículos y vídeos, y aprendizaje activo mediante preguntas de autoexploración. El chat, los juegos y los objetivos quedan fuera del alcance de la V4.

La apuesta es que un espacio fiable y desinhibido desplace a las búsquedas online como primera opción. La primera ronda de user tests valida el cliente, el problema y el enfoque, y confirma que la mayoría de entrevistados elegiría la app frente a sus fuentes actuales.

El producto está en fase de definición, antes de desarrollo. Existe una landing de validación usada en entrevistas, la arquitectura de información y el onboarding en diseño.

---

## 2. Contexto

### 2.1 Contexto corporativo / de producto

Pillowtalk es una compañía en fase pre-lanzamiento en el mercado de la salud sexual y el bienestar, con un equipo fundador de cuatro personas cubriendo producto y diseño.

La estrategia se ha construido siguiendo el método Foundation Sprint y Design Sprint, con una primera ronda de validación cualitativa ya cerrada. Los activos actuales (landing de validación, arquitectura de información, onboarding) existen para probar la propuesta antes de invertir en desarrollo, no para captar tráfico.

- **Sector:** salud sexual y lifestyle
- **Mercado inicial:** España, en español
- **Fase:** definición de producto, previa a desarrollo

### 2.2 Nuestro producto

Una app multiuso respaldada por expertos para adultos que quieren explorar su sexualidad de forma libre y sin tabúes, a través de estas vías:

**Contenido profesional.** Podcast, artículos y vídeos.

**Aprendizaje activo.** Dos vías sobre el mismo banco de preguntas:

- **Cards.** La vía principal. Preguntas que el usuario puede hacerse a sí mismo o a su pareja, para autoexplorar el tema del sexo. Viven en la sección Explorar, que es el mazo entero: una carta a la vez, que se pasa deslizando (ver 6.1).
- **Pregunta del día.** Una pregunta que está en la home y cambia cada día. Las preguntas son las mismas que las de las cards. Se responde en la propia home, sin cambiar de pantalla: el usuario toca una de las cuatro opciones y la tarjeta cambia de estado, marcando la elegida y mostrando un acceso a "Ver más". Ese acceso abre el detalle de la pregunta, con un párrafo breve que da contexto sobre el tema y contenido relacionado. El párrafo llega después de responder a propósito: la pregunta se le hace al usuario antes de darle ningún contexto, para que el contexto no condicione lo que contesta. Y no es la respuesta correcta: las preguntas no tienen respuesta correcta, sirven para pensar. Responder no lleva a ningún sitio; profundizar es una segunda decisión del usuario. Las respuestas sirven para personalizar el contenido que recibe.

**Personalización.** No es una vía de exploración más: es una capa que atraviesa a las otras. La home y la biblioteca no enseñan lo mismo a todo el mundo, sino que ordenan el contenido según lo que la app sabe del usuario y de lo que le preocupa. Es lo que da sentido a que la pregunta del día se pueda responder, a que cada pieza de contenido tenga un "¿te ha resultado útil?" y a que el onboarding pregunte lo que pregunta: sin esta capa, esas tres cosas no tienen para qué existir.

Qué la alimenta:

- las respuestas del onboarding
- los datos que el usuario comparte o modifica desde su perfil
- las respuestas a la pregunta del día
- el feedback "útil o no" de cada pieza de contenido
- lo que el usuario busca
- lo que el usuario guarda en Favoritos y en Ver más tarde

Dentro de las respuestas del onboarding, la identidad y la orientación que el usuario declara son parte de lo que alimenta la personalización, y sirven para dos cosas distintas: deciden qué contenido se le propone, y deciden cómo se le habla, empezando por sus pronombres. Es lo que hace legítimo preguntarlas: son datos de categoría especial del RGPD y solo se piden porque tienen una finalidad declarada (ver 6.4).

**Transparencia y permisos.** El usuario sabe que el contenido está personalizado: se declara en el onboarding junto con los permisos correspondientes. Es el patrón habitual de Spotify, Instagram o TikTok, con una diferencia que no es menor: aquí lo que alimenta la personalización son datos de categoría especial según el RGPD (ver 6.4), así que el consentimiento no es un trámite, es el mismo modal de datos sensibles del onboarding.

**Qué no somos.** No somos una tienda erótica, ni una app de ligoteo o de citas, ni un servicio clínico. No es solo una preferencia de marca: dos de esas tres confusiones aparecieron en la investigación. Un entrevistado creyó que la landing era algo relacionado con Tinder, y el propio equipo anotó el riesgo de que el chat con profesionales se percibiera como una consulta médica. Es un riesgo de posicionamiento con evidencia, no una declaración de estilo.

Nuestra unidad mínima es que el usuario tenga diferentes vías de exploración.

---

## 3. People Problem

### 3.1 Problem Statement

Muchos jóvenes adultos recibieron en el instituto una educación sexual escasa o nula, y llegan a la edad adulta sin unas bases sólidas sobre todo lo que abarca la sexualidad ni sobre la enorme diversidad de formas de vivirla; hoy no tienen una fuente fiable y sin tabú donde construir esos fundamentos, y lo que encuentran online es pornografía o información fragmentada.

### 3.2 Evidencia

Primera ronda de entrevistas cualitativas con usuarios, documentada en el archivo de briefing (página User Tests), con guión estructurado, toma de notas por stamps (pain, quote, nav, win, idea, usability), debrief y scorecard individual por participante.

| Hipótesis | Veredicto | Matiz |
| --- | --- | --- |
| ¿Cliente correcto? | Validado | Entrevistados de 25 a 46 años; ninguno recibió educación sexual adecuada |
| ¿Problema correcto? | Validado | La mayoría no está satisfecha con sus fuentes actuales por falta de fiabilidad, y describe el sexo como tabú en muchos contextos |
| ¿Enfoque correcto? | Validado | El modelo multi-funcionalidad funciona porque cada entrevistado tenía preferencias distintas |
| ¿Cambiarían? | Validado con condiciones | La mayoría elegiría la app frente a Google, amigos o IA |
| ¿Diferenciación correcta? | Validado | Las búsquedas online casi nunca se perciben como fiables |
| ¿Hace click? | Validado | Hay una razón concreta para elegir la app: es más rápida o fiable que un buscador, sustituye conversaciones incómodas, o elimina el paso de verificar |

Cuatro matices que condicionan el producto y no deben perderse:

**Comprensión desigual de las funcionalidades.** Los usuarios entendieron muy bien la parte de comunicación (el chat) y bastante peor los juegos y los objetivos. A tener en cuenta en la siguiente ronda de tests.

**La relación estable baja la intención de uso.** El usuario 5 (RS), en pareja desde hace mucho tiempo, no siente la necesidad de explorar.

**El uso queda condicionado a mantener la confianza en la fiabilidad de la información.** La fiabilidad no se gana una vez: se sostiene o se pierde.

**En un caso la barrera no es el interés sino el descubrimiento:** llegar a conocer que la app existe.

### 3.3 Citas directas

> Aviso: lo que sigue son notas del observador tomadas durante las sesiones, no transcripciones. Algunas están en primera persona y parecen textuales, otras son resúmenes. Sirven como evidencia, no como cita literal. Pendiente recuperar las frases textuales de las grabaciones.

**Sobre la fiabilidad de lo que encuentran hoy**

- Cuando preguntas en Google no puedes fiarte de lo que estás viendo.
- La misma pregunta puede tener millones de respuestas, porque cada uno vive su sexualidad de manera diferente.
- Lo que más temería es desconfiar de lo que me van a contar.
- Si al leer ve que hay información errónea, le generaría desconfianza.
- Le da confianza porque ve que está respaldado por expertos.

**Sobre el esfuerzo de buscar**

- En Google intenta buscar algo más específico, pero resulta muy pesado hacer esas búsquedas (dos entrevistados).
- Su patrón de búsqueda son cosas puntuales: buscaría en la app y ya no en Google.

**Sobre la vergüenza y la intimidad**

- Le preguntó a algunos amigos con los que tenía algo de confianza, pero no obtenía una respuesta clara.
- Le preguntaba a Google, pero las respuestas que recibía eran muy estigmatizadas.
- Si no te sientes cómodo preguntando a tus padres, tranquilo, porque tienes tu intimidad.
- Ser más libre, porque está mal visto hablar de sexo abiertamente.
- Espacio seguro.

**Sobre la educación que recibieron**

- Educación sexual de joven nula.
- Poca educación, nunca ha hablado con sus padres sobre sexo.
- La típica charla de sexo en el colegio.
- Los primeros contactos con la sexualidad fueron encontrarme vídeos porno.
- Como hombre, no explora más: lo que aprenden es del porno.
- Me ha servido más el consejo de mi amigo que la irrealidad del porno.

**Sobre verse representados**

- No se habla de la sexualidad en pareja homosexual, solo se habla de monogamia.
- No se tiene que basar todo en la heterosexualidad, porque si no, los niños que descubren que su orientación no es hetero no saben por dónde empezar.
- Las ilustraciones son muy heteronormativas, les gustaría que fuesen más inclusivas.

**Sobre la comunicación en la relación**

- Parte fundamental en el sexo es la comunicación.
- Que se mencionen cosas como hablar con la persona, comunicación en relaciones, le gustaría mucho (dos entrevistados).
- Aparte de hablar de sexo, hablar de las relaciones, celos, deseo, autoconocimiento.
- El consentimiento es muy importante de tratar.

**Sobre reflexionar sin tener una duda**

- Le molan que estén las preguntas que todos alguna vez nos hemos hecho.
- Los juegos enfocados al autoconocimiento, para aprender cosas, expandir horizontes.
- Necesitas tener una buena sexualidad contigo mismo para conocerte.

**Sobre guardar contenido** (test con wireframe)

- Le gustaría poder guardar contenidos en listas o carpetas, como en Spotify, sobre todo para ver o escuchar algo más tarde sin tener que volver a buscarlo.
- Entiende la biblioteca como el lugar donde guardar contenidos que le llaman la atención para revisarlos más adelante, y espera poder clasificarlos según sus intereses.

**Sobre la personalización** (test con wireframe)

- Interpreta el botón de "útil o no" como personalización y le parece bien: si le gustan los vídeos de 3 minutos, que le sigan saliendo formatos cortos.
- Tiene la duda de si el contenido será personalizado, es decir, si la aplicación aprende de ti, o si será contenido genérico.
- Entiende la home como un espacio tipo "Para ti", donde aparecen recomendaciones basadas en lo que busca o consulta dentro de la app.

**Frenos declarados**

- No la usaría si ya tengo una pareja muy estable.
- He explorado bastante y no tengo muchas dudas.
- Para descargarla sin conocer nada, tendría que haber un trabajo de redes para atraer a la gente.
- Pagaría por el servicio solo si la app ya es conocida o se la recomiendan: el freno no es el precio sino la confianza.

### 3.4 Quién tiene este problema

Adultos de 25-60 años que no han recibido educación sexual.

### 3.5 Cómo lo resuelve hoy

Según los riesgos identificados en el Foundation Sprint, los usuarios actualmente resuelven (o intentan resolver) este problema a través de:

- Búsquedas en Google
- Pornografía
- Consejos de amigos
- IA conversacional (ej. ChatGPT)
- Consulta a profesionales (en el caso de personas con condiciones médicas)

Dos riesgos identificados explícitamente en el Foundation Sprint son relevantes aquí:

- Que las "soluciones" existentes sean muy generalizadas y no lleguen bien a cada usuario.
- Que los jóvenes-adultos no estén dispuestos a cambiar un hábito ya instalado (Google, porno, amigos) por algo nuevo, aunque sepan que es menos fiable.

### 3.6 Oportunidad

Existe una generación adulta completa sin educación sexual formal, con una necesidad real y recurrente, y sin una fuente que sea a la vez fiable y sin tabú. Las alternativas se reparten entre lo riguroso pero clínico y frío, y lo desinhibido pero poco fiable. Ese hueco es el territorio del producto.

El benchmark refuerza el diagnóstico: la mayoría de los referentes del sector son o bien tienda erótica, o bien formación de pago, o bien apps de pareja o de citas. La combinación de educación seria con tono desinhibido, en una app de uso personal, está poco ocupada en el mercado español.

---

## 4. Objetivos de Negocio y Métricas de Éxito

### 4.1 Objetivos del proyecto

- Que las personas vivan su sexualidad de manera libre y sin tabúes.
- Que el usuario consulte la plataforma como primera opción y vuelva cada vez que lo necesita.

### 4.2 Qué cambia para el usuario

**Antes:** tiene una duda sobre su cuerpo, su deseo o su relación. No tiene con quién hablarlo sin vergüenza. Busca en Google y encuentra foros contradictorios, o pregunta a una IA genérica, o mira porno y saca conclusiones equivocadas. Cierra el móvil sin haber resuelto nada, y con la sensación añadida de que quizá le pasa algo raro.

**Después:** tiene un sitio al que ir. Busca lo que sea sin que nadie le juzgue, recibe una respuesta que normaliza su situación con datos reales, y descubre que su duda tiene nombre y que hay un camino para trabajarla. Deja de verificar si lo que ha leído es fiable, porque ya lo es. Y con el tiempo pasa de resolver dudas puntuales a plantearse metas más profundas: comunicarse mejor, quitarse la vergüenza, quererse más.

### 4.3 Success Metrics (KPI)

| Métrica | Baseline actual | Objetivo | Cómo se mide |
| --- | --- | --- | --- |
| Usuarios que afirman haber aprendido algo nuevo sobre ellos mismos | [Pendiente] | 85% | [Pendiente] |
| Usuarios que prefieren solucionar sus dudas con nosotros antes que con los competidores | [Pendiente] | 65% | [Pendiente] |

### 4.4 Out of Scope (V4)

- **Chat.** Tanto el chat con IA como el chat con profesionales. Pasa a próximos pasos, después de la presentación del proyecto.
- **Juegos y retos en pareja.** Coherente con los user tests, donde fue una de las dos funcionalidades peor entendidas. La landing de prototipo todavía los anuncia: hay que actualizarla antes de volver a usarla en entrevistas.
- **Objetivos.** Recorridos guiados hacia metas concretas. Pasa a próximos pasos.

---

## 5. Usuarios e Investigación

### 5.1 Target audience / Persona

Target principal: adultos de 25-60 años que no han recibido educación sexual.

Otros perfiles considerados (Decider's top choices):

- Personas estancadas en la misma "rutina" sexual.
- Personas con condiciones médicas (física o mental) que les impide vivir a pleno la sexualidad.

### 5.2 Insights de investigación

- **La fiabilidad es el diferenciador que sostiene todo lo demás.** Es la razón por la que abandonarían Google, y también la condición bajo la que se quedarían. Si se rompe, el producto pierde su única ventaja real.
- **El chat se entiende solo; los juegos y los objetivos no.** Es el hallazgo más accionable de la ronda: no es un problema de la funcionalidad, es un problema de cómo se explica.
- **Sin necesidad activa no hay uso.** Cuando no hay una duda concreta que resolver, el interés se queda en buena impresión. El producto necesita un mecanismo que genere ocasión de uso, no solo que la resuelva.
- **La pareja estable es un freno, no un target.** Contradice parcialmente varios de los perfiles trabajados en el sprint, que asumían a la pareja aburrida como cliente natural.
- **El descubrimiento es un problema aparte del producto.** Hay interés que no se convierte porque la app no llega a conocerse.

### 5.3 User needs / Jobs to be done

Cada job sale de la investigación y lleva su evidencia. Las fuentes son las entrevistas largas (debrief en el archivo Proof of Concept, página User Tests) y el test con el prototipo wireframe (página User testing de este archivo).

**Cuando busco información sobre sexualidad, quiero poder fiarme de lo que leo sin tener que comprobar quién lo firma, para no quedarme con la duda de si lo que he aprendido es cierto.**
Evidencia: cinco entrevistados distintos. No poder fiarse de lo que aparece en Google; que la misma pregunta tenga millones de respuestas; el miedo a desconfiar de lo que le cuentan; textos mal citados y sin respaldo; y, al revés, la confianza que genera ver que hay expertos detrás.

**Cuando tengo una duda concreta, quiero resolverla sin tener que rebuscar, para no abandonarla a medias.**
Evidencia: dos entrevistados describen las búsquedas específicas en Google como algo pesado; un tercero dice que buscar información le resulta pesado en general; otro cuenta que su patrón son dudas puntuales y que buscaría en la app en vez de en Google.

**Cuando tengo una duda que me incomoda, quiero resolverla en privado y sin que nadie me juzgue, para no tener que elegir entre preguntar a alguien de confianza y quedarme sin saber.**
Evidencia: preguntar a amigos de confianza sin obtener una respuesta clara; respuestas estigmatizadas al buscar en Google; no sentirse cómodo preguntando a los padres; hablar de sexo abiertamente está mal visto.

**Cuando me doy cuenta de que nunca me explicaron lo básico, quiero construirme unos cimientos, para dejar de aprender a trompicones.**
Evidencia: educación sexual nula de joven; nunca haber hablado de sexo con los padres; la charla única del colegio; el primer contacto con la sexualidad a través del porno; aprender solo por experiencia propia o del círculo de amigos.

**Cuando encuentro algo que me interesa pero no es el momento, quiero guardarlo y volver a encontrarlo, para no tener que buscarlo otra vez.**
Evidencia: test con wireframe. Un participante pide guardar en listas o carpetas, como en Spotify, para ver o escuchar más tarde sin volver a buscarlo. Otro entiende la biblioteca como el sitio donde guardar lo que le llama la atención y pide poder clasificarlo por intereses si se le acumula.

**Cuando no tengo ninguna duda concreta, quiero que algo me haga plantearme cosas que no me había preguntado, para conocerme mejor.**
Evidencia: test con wireframe, dos participantes describen las preguntas como una oportunidad para reflexionar sobre sus propias experiencias y creencias, y para plantearse cuestiones que no se habían hecho. En las entrevistas largas: el interés por las preguntas que todos nos hemos hecho alguna vez, y el autoconocimiento como motivo para explorar.

**Cuando busco información sobre sexualidad, quiero encontrarme reflejado y no solo el modelo hetero y monógamo, para que lo que leo me sirva a mí.**
Evidencia: tres entrevistados. Que no se hable de la sexualidad en pareja homosexual y solo de monogamia; que basarlo todo en la heterosexualidad deja sin punto de partida a quien descubre que su orientación no es esa; que las ilustraciones resultan heteronormativas.

**Cuando lo que me pasa tiene que ver con la otra persona y no conmigo, quiero saber cómo hablarlo, para no tener que resolverlo adivinando.**
Evidencia: la comunicación señalada como parte fundamental; dos entrevistados piden explícitamente contenido sobre hablar con la pareja y comunicación en las relaciones; otro amplía a celos, deseo y autoconocimiento; el consentimiento aparece como tema a tratar.

---

## 6. Solución Propuesta

### 6.1 Visión general de la solución

Una app móvil con una home que funciona como hub único, desde la que se accede a las vías de exploración sobre una base común de contenido validado por profesionales. Un onboarding personaliza la experiencia desde el primer minuto y, a la vez, comunica los valores de la marca.

El recorrido tipo: el usuario llega por redes con una pieza que le interpela, entiende en la landing que es un espacio privado para aprender sin vergüenza, descarga, completa un onboarding que le pregunta de lo básico a lo íntimo, y aterriza en una home ya adaptada a sus respuestas. Desde ahí explora el contenido profesional y las preguntas de autoexploración. Una notificación le hace volver.

#### Arquitectura de las secciones

La home es el escaparate de todo lo que hay dentro. Explorar es una sola cosa: el mazo.

**Home.** Reúne, en este orden:

1. **Entrada al mazo** ("Preguntas que quizá no te habías hecho · Sacar una carta"). Es un acceso, no el mazo: lleva a la sección Explorar.
2. **Mitos** ("Seguro que no lo sabías").
3. **Pregunta del día** ("Hazte la pregunta"), con la card que se responde en la propia home.
4. **Contenido** ("Para ver y escuchar"), con piezas de artículo, pódcast y vídeo.

**Explorar.** Es el mazo y nada más: una carta a la vez, que se pasa deslizando. Las flechas de "Desliza" indican el gesto de pasar de carta, no son navegación: se sale de la sección por la navbar, como de cualquier otra.

#### Home: decisiones y justificación

**Qué es.** La home es la portada diaria de la app. Reúne, en este orden: la entrada al mazo de preguntas, el bloque de mitos, la pregunta del día y una selección de contenido. Todo lo que aparece cambia cada día.

**Por qué reúne en lugar de enseñar una sola cosa.** Es la respuesta directa a lo que pidieron tres participantes del test con wireframe, recogido en "Por qué la home reúne y Explorar no": entrar a una portada con contexto, y no a una sola pieza de golpe. La home no compite con las secciones, las resume: da una idea de todo lo que hay dentro y deja navegar libremente desde ahí.

**Por qué cambia cada día.** Es lo que la distingue de Biblioteca, que contiene todo y no caduca, y lo que le da al usuario un motivo para volver. Enlaza con el insight de 5.2 de que sin necesidad activa no hay uso: el producto necesita un mecanismo que genere ocasión de uso, no solo que la resuelva.

**El orden de los bloques**

**1. La entrada al mazo, arriba.** La home funciona como resumen de la app, y el mazo es la funcionalidad que más nos diferencia, así que encabeza. No es el mazo, es un acceso a Explorar, y por eso su diseño no es el de esa sección: es una carta única con el mazo asomando, no la experiencia completa.

**2. Los mitos, después.** Son el gancho de curiosidad: cuestionan algo que el usuario ya cree saber y ofrecen una respuesta breve con su fuente. Van antes de la pregunta del día porque no piden nada a cambio, se leen y ya, mientras que la pregunta espera una acción. Entrar leyendo antes que respondiendo es lo que pedía la investigación.

**3. La pregunta del día, respondible en la propia home.** No lleva a otra pantalla para responder. Reduce el recorrido a un toque y evita que responder parezca un compromiso. Al responder, la tarjeta cambia de estado: se marca la opción elegida y aparece un acceso a "Ver más", que abre el detalle de la pregunta. El usuario decide si quiere profundizar; responder no le arrastra a ningún sitio.

**4. El contenido, al final.** Cierra la portada y conecta con Biblioteca, para quien quiera quedarse un rato.

**Decisiones de diseño**

**Los mitos en mosaico irregular.** Las cards tienen anchos y cantos desiguales, con contorno y sombra dura. Es la familia visual reservada a lo que descoloca, mitos, preguntas y el mazo, frente a la forma regular del contenido. El usuario aprende la diferencia sin que se le explique, y responde al hallazgo de la investigación de que mitos y preguntas se confundían por compartir diseño.

**Los mitos se enuncian como afirmación, no como pregunta.** Leer "Los hombres quieren sexo más que las mujeres" obliga a posicionarse antes de tocar; preguntarlo deja la puerta abierta a que sea cierto. Además refuerza el contraste con el mazo y la pregunta del día, que sí preguntan.

**Las cards tienen tamaños desiguales.** El ancho y el alto se ajustan al texto de cada mito, y esa irregularidad es lo que da al bloque su aspecto de mosaico. Ningún tamaño indica jerarquía. Decidir qué creencia merece más superficie sería decidir qué duda es legítima y cuál es un caso menor, y un mito sobre el dolor no importa menos que uno sobre el deseo porque afecte a menos gente. Va en la línea del requisito de inclusividad de 6.4. El orden tampoco es un ranking: al rotar cada día, la posición cambia.

**Ilustraciones sueltas dentro del mosaico.** Ocupan los huecos sin añadir contenido y dan a la sección un aire de cuaderno que la aleja del formato FAQ, que es como un participante interpretó una versión anterior del bloque: algo obvio que no suele leerse.

**La pregunta del día no corrige.** Las cuatro respuestas no tienen validación ni resultado, en cumplimiento del requisito de 6.4 de que las preguntas de autoexploración no tienen respuesta, ni correcta ni sugerida. Su objetivo es plantar una semilla, no enseñar nada. El titular del bloque, "Hazte la pregunta", evita cualquier promesa de aprendizaje o evaluación.

**Los contenidos muestran autoría y formato desde la propia home.** Cada pieza lleva autor, tipo y duración, en cumplimiento del requisito de fiabilidad del contenido de 6.4 y de la US-01. La fiabilidad es el diferenciador que sostiene todo lo demás, y se comunica antes de entrar en la pieza, no dentro.

#### Mini player

Cuando hay un contenido abierto y sin terminar, una barra fija sobre la navbar permite volver a él desde cualquier pantalla. Vale para los tres formatos: en pódcast y vídeo muestra cuánto queda y un botón de reproducir; en artículo, cuánto queda por leer y un acceso para seguir leyendo. Una línea de progreso en el borde inferior indica por dónde va el usuario, sea tiempo o lectura, y una ✕ lo cierra. Sin esta barra, salir de un contenido a medias es perderlo.

#### Tres formatos, tres tratamientos

Artículo, pódcast y vídeo no se presentan igual, ni en las listas ni en el detalle. La forma anticipa lo que pasa al tocar.

- **Artículo.** En lista, miniatura rectangular y tiempo de lectura, sin botón de reproducir. En detalle, una ilustración de apertura con márgenes y, debajo, el texto con interlineado de lectura. Cierra con "Seguir leyendo" y otros artículos.
- **Pódcast.** En lista, portada cuadrada y botón de reproducir. En detalle, la portada centrada con la barra de progreso y los controles debajo: la pantalla es un reproductor, no una ficha.
- **Vídeo.** En lista, miniatura 16:9 con la duración y el play encima. En detalle, el vídeo ocupa el ancho completo y arranca en el borde superior de la pantalla, por delante del título. Cierra con vídeos relacionados.

Los tres comparten lo que sostiene la fiabilidad: autoría bajo el título, ficha de autoría, bloque de fuente, los dos botones de guardado y el bloque de feedback.

### 6.2 User Flows principales

Mapa de flujos extraído del prototipo: sección "User flow · V4" en la página Prototipo del archivo de Figma. Recoge las pantallas, las conexiones reales entre ellas y las convenciones de prototipo que no deben leerse como comportamiento de producto.

**Onboarding.**

El onboarding personaliza la experiencia y, a la vez, es la primera vez que la app enseña cómo trata los datos de quien la usa. Va de lo básico a lo íntimo, y está partido en dos tramos: el primero es igual para todo el mundo, el segundo solo existe si el usuario da permiso. Ni la cuenta ni el onboarding son obligatorios: los dos se pueden saltar y la app funciona igual. Lo exige el requisito de privacidad de 6.4, porque sin cuenta las respuestas de categoría especial viven solo en el dispositivo y no quedan asociadas a una persona identificable.

#### El recorrido, pantalla a pantalla

**Entrada**

**1. Edad y términos.** Fecha de nacimiento y aceptación de los términos de uso, con enlace a la política de privacidad. Va antes de cualquier contenido, porque una barrera de edad colocada después no filtra nada, y es independiente de la cuenta, porque la cuenta es opcional y una barrera que se esquiva no saltándose un paso opcional no es una barrera. La fecha se pide en un campo abierto y no con una pregunta de sí o no, y la pantalla no dice cuál es la edad mínima ni para qué se pide: una pregunta cerrada, o un texto que nombre el límite, enseñan cuál es la respuesta que deja pasar. El motivo vive en la política de privacidad, que está enlazada ahí mismo. Es lo único obligatorio de todo el recorrido (detalle en 6.5).

Quien declara ser menor no entra. Esa pantalla de bloqueo se declara aquí pero no se monta en el prototipo.

Desde aquí se entra a la **home con contenido genérico**.

**Invitaciones**

**2. Modal de invitación.** Propone crear cuenta y, desde ahí, hacer el onboarding. Se puede cerrar. Es el primero de los dos escalones del recordatorio: primero la cuenta, y el onboarding detrás.

**3. Modal al guardar.** Aparece la primera vez que alguien sin cuenta guarda un contenido. Llega en el momento en que la cuenta le sirve al usuario y no a nosotros: acaba de apartar algo, y lo que se le ofrece es no perderlo. Un aviso fijo en la home pediría antes de haberle dado nada y competiría con el contenido, que es lo que la home tiene que enseñar. Quien no guarda nunca no ve este modal: le quedan el de la pantalla 2 y Ajustes, donde la fila de cuenta muestra "iniciar sesión" a quien no la tiene. Recuerda y no insiste, por el requisito de tono de 6.4.

**Cuenta, opcional**

**4. Crear cuenta.** Google, Apple o correo y contraseña. La cuenta no sirve para entrar, sirve para que lo guardado y lo respondido sobrevivan a un cambio de móvil: esa es la única finalidad que se le declara al usuario. Al crearla, la personalización arranca con lo que ya había en el dispositivo: nada de lo respondido o guardado antes se pierde, así que crear cuenta nunca cuesta empezar de cero. Quien entra con Google o con Apple no tiene contraseña propia en la app, así que la fila de Ajustes que permite cambiarla no aplica a todo el mundo.

**5. Iniciar sesión.** Las mismas tres vías. Errores previstos: correo ya registrado al crear cuenta, credenciales incorrectas al entrar, contraseña que no cumple los mínimos.

**Onboarding · parte 1**

Este tramo es igual de largo para todo el mundo. Nada de lo que se pregunta aquí es dato de categoría especial, así que va por delante del consentimiento.

**6. Inicio.** Qué es, cuánto dura, empezar o saltar. Decir de antemano cuánto cuesta es lo que convierte saltar en una decisión y no en una huida.

**7. Nombre.** Cómo llamar al usuario dentro de la app. Se pregunta aquí y no en la cuenta porque la cuenta es opcional y el nombre hace falta igual. Si el usuario ha entrado con Google o con Apple, el campo llega relleno y se puede cambiar.

**8. Cómo nos dirigimos a ti.** Ella, él, elle. Es una preferencia de lenguaje de la interfaz, no una declaración de identidad, y por eso no necesita consentimiento y puede ir antes de pedirlo. Quien la salta recibe textos sin marca de género, que es lo que ve también quien se salta el onboarding entero.

**9. Permisos.** Dos permisos separados, los dos apagados de partida, y un botón de continuar. Van aquí, antes de las preguntas sensibles, porque el permiso se pide antes de recoger y no después. El primero cubre lo que el usuario responda a continuación; el segundo, lo que haga dentro de la app: lo que busca, lo que guarda y lo que responde a la pregunta del día. Están separados porque son dos cosas distintas: declarar algo una vez no es lo mismo que ser observado mientras se usa la app, y 6.4 pide un consentimiento granular. Quien no enciende ninguno pasa directamente a la pantalla 15.

**Onboarding · parte 2**

Este tramo solo existe si el primer permiso está encendido. Todo lo que se pregunta aquí es dato de categoría especial del RGPD y todo se puede omitir.

**10. Identidad.** Selección única y campo abierto para quien no se reconozca en ninguna etiqueta.

**11. Orientación.** Selección múltiple y campo abierto.

**12. Estado relacional.** Selección única y campo abierto. Cubre estructuras de relación que no son la pareja monógama, que es lo que pide el requisito de inclusividad de 6.4.

**13. Temas.** Selección múltiple: cómo funciona el cuerpo, comunicación en pareja, deseo y fantasías, límites, consentimiento, masturbación. Es lo que al usuario le apetece leer.

**14. Qué te ha traído aquí.** Selección múltiple, con la opción de no decirlo. No es una segunda lista de temas: la 13 pregunta qué le interesa y esta pregunta por qué está aquí, que es algo que el usuario trae de fuera y suele ser lo que más le pesa. Va la última porque es la más íntima de las dos partes.

**Cierre**

**15. Notificaciones.** Se piden al final, y también a quien ha omitido todas las preguntas: son el único mecanismo que genera ocasión de uso (ver US-20), así que no pueden depender de haber respondido.

**16. Resumen.** Cierra un onboarding completo. Quien lo abandona a medias no lo ve, porque no hay nada que resumir.

Desde aquí se entra a la **home personalizada**.

**Edición posterior**

**17. Perfil · Datos.** Una sola pantalla con todos los datos del onboarding y sus permisos, cada uno con su valor y su acción. Quien omitió algo lo ve como pendiente y puede añadirlo. La personalización solo es honesta si se puede deshacer, y aquí es donde se deshace.

#### Reglas que el diseño no puede romper

- Solo la edad y los términos son obligatorios. Todo lo demás se salta, pregunta a pregunta o de una vez.
- La pantalla de edad no nombra el límite ni explica para qué se pide. Decirlo enseñaría cuál es la respuesta que deja pasar.
- El consentimiento necesita una acción del usuario. Los interruptores están apagados de partida: una casilla marcada de antemano no es un consentimiento.
- Sin el primer permiso no hay parte 2. No se hace ninguna pregunta sensible antes de tenerlo.
- El resumen solo cierra un onboarding completo.
- Los pronombres viven fuera del consentimiento y la identidad dentro.
- La finalidad que se declara es la que existe. La V4 no tiene profesionales, así que el consentimiento no los menciona (ver 6.4).
- Quien no responde nada ve contenido genérico, no una versión recortada de la app.

Convención de prototipo: los botones de saltar la cuenta y el onboarding se diseñan y funcionan, pero el recorrido de la demo no los usa. No leer esa ausencia como comportamiento de producto.

### 6.3 User Stories (índice priorizado)

Este es el índice de todo lo que hay que construir, ordenado por prioridad. Toda user story importante del backlog debe estar referenciada aquí. El detalle en profundidad de cada story (criterios de aceptación, edge cases, mockups) va en un documento o ticket dedicado, enlazado en la columna Detalle.

Criterio de prioridad: **Must**, sin esto la V4 no se sostiene. **Should**, la mejora pero se puede presentar sin ello. **Could**, el resto. Reparto actual: 11 Must, 13 Should, 2 Could.

Los once Must son de tres tipos, y conviene saber cuál es cuál. El diferenciador: US-01 y US-02, la autoría y la fuente, que son la razón de existir del producto. El contenido: US-12, US-13, US-17, US-18 y US-21, es decir los mitos, la biblioteca, la pregunta del día, el que no tenga respuesta correcta, y el criterio de aceptación del contenido. Y lo que no es opinable: US-11, US-24 y US-26, que son obligaciones legales, más US-14, guardar, que es la interacción básica sobre la que se apoya media biblioteca.

Dos matices sobre los Should: US-03 y US-09 están ahí porque **ya están resueltas** por el diseño actual, así que son requisitos que no hay que perder, no trabajo pendiente. Y US-08, la discreción, es un Should discutible: no es trabajo de construcción sino una decisión de nombre e icono, pero para este producto se defiende como Must.

Las stories salen de los jobs de la sección 5.3, un bloque por job. Un job sin ninguna story es un hueco declarado, y así se marca. Los identificadores son etiquetas estables, no un orden: dentro de un bloque no tienen por qué ser correlativos.

**Job: fiabilidad.** Cuando busco información sobre sexualidad, quiero poder fiarme de lo que leo sin tener que comprobar quién lo firma.

| ID | User Story | Prioridad | Detalle |
| --- | --- | --- | --- |
| US-01 | Como usuario, quiero ver quién firma o revisa lo que estoy leyendo, para no tener que decidir yo si me fío | Must | Sostiene el diferenciador principal. Hoy la pantalla de artículo no tiene campo de autoría: solo título y tiempo de lectura. Podcast y vídeo sí lo tienen |
| US-02 | Como usuario, quiero ver de dónde sale un dato en el mismo sitio donde lo leo, para no tener que salir a comprobarlo | Must | Hoy solo existe en el detalle de mitos, que tiene un bloque "dato" con campo de fuente. Artículos, podcasts y vídeos no tienen equivalente |
| US-03 | Como usuario, quiero distinguir de un vistazo qué contenido me está dando un dato y qué contenido me está invitando a pensar, para saber qué esperar de cada cosa | Should | Cubierto por el diseño: los mitos son formas irregulares en blanco y negro que llevan a una resolución con dato y fuente; las preguntas son cartas de colores que solo invitan a pensar. Sigue siendo un requisito, aunque no haya trabajo pendiente |

**Job: esfuerzo de búsqueda.** Cuando tengo una duda concreta, quiero resolverla sin tener que rebuscar, para no abandonarla a medias.

| ID | User Story | Prioridad | Detalle |
| --- | --- | --- | --- |
| US-04 | Como usuario, quiero buscar con mis palabras y no con las vuestras, para no tener que adivinar cómo habéis llamado al tema | Should | Un entrevistado lo dice literalmente: si no sabes lo que es o lo que estás buscando, no lo encuentras. El buscador por palabra clave no basta para esto: quien no tiene las bases no conoce el nombre de la cosa. La solución completa pasa por el chat con IA, en próximos pasos |
| US-05 | Como usuario, quiero que cuando no haya nada que encaje me propongáis algo cercano, para no salir de la app con las manos vacías | Should | La pantalla Búsqueda · sin resultados ya existe con contenido sugerido. La story la convierte en funcionalidad declarada y no en un mensaje de error |
| US-06 | Como usuario, quiero llegar desde una duda a lo que la responde en pocos pasos, para no perder el hilo por el camino | Could | Es la story que justifica el chat en próximos pasos: los filtros y la personalización acortan el camino, pero quien lo resuelve de verdad es el chat |
| US-07 | Como usuario, quiero filtrar por formato, para elegir entre leer, ver o escuchar según el momento | Should | Los filtros Podcast, Artículo y Vídeo ya existen en la búsqueda. Solo un entrevistado lo pidió, pero es un patrón conocido y esperable |
| US-25 | Como usuario, quiero que la home y la biblioteca reflejen lo que he respondido, para no perder tiempo en lo que no me interesa | Should | Es la cara visible de la personalización descrita en 2.2. Su reverso está en 6.2: quien salta el onboarding, lo deja a medias o no enciende ningún permiso ve contenido genérico, que es una home completa y no una versión recortada. Dos participantes la esperaban por su cuenta, uno leyó el botón "útil o no" como personalización y otro preguntó directamente si la app aprende de ti. |

**Job: vergüenza e intimidad.** Cuando tengo una duda que me incomoda, quiero resolverla en privado y sin que nadie me juzgue, para no tener que elegir entre preguntar a alguien de confianza y quedarme sin saber.

| ID | User Story | Prioridad | Detalle |
| --- | --- | --- | --- |
| US-24 | Como usuario nuevo, quiero entender qué es la app y qué datos me va a pedir antes de dármelos, para decidir con información si entro | Must | Son dos momentos, no uno. En la entrada se aceptan los términos de uso, con enlace a la política de privacidad, antes de ver nada (US-26). Dentro del onboarding, antes de las preguntas sensibles, está la pantalla de permisos: dos permisos separados, apagados de partida y rechazables por separado. Con datos del art. 9 del RGPD, un consentimiento que no se entiende o que viene marcado de antemano no es válido (ver 6.4). |
| US-26 | Como usuario nuevo, quiero saber antes de entrar que la app es para adultos y qué estoy aceptando, para no descubrirlo cuando ya he dado algo | Must | Pantalla de entrada con fecha de nacimiento y aceptación de los términos de uso, antes de cualquier contenido y con independencia de la cuenta. Es obligación legal, igual que US-11 y US-24. La fecha se pide con un campo abierto y no con una pregunta de sí o no, porque una pregunta cerrada enseña cuál es la respuesta que deja pasar (ver 6.5) |
| US-08 | Como usuario, quiero que la app no delate de qué va desde la pantalla de inicio de mi móvil, para poder tenerla sin dar explicaciones | Should | Ya recogido como requisito de discreción en 6.4: nombre, icono y texto de las notificaciones en pantalla bloqueada. Se sube a story para que no se pierda al construir. La cuenta con Google o Apple abre un hueco que conviene tener escrito: el proveedor sabe que la app está instalada. No se evita, se acota, porque esa vía es opcional y no la única; Sign in with Apple permite además no dar el correo real. |
| US-09 | Como usuario, quiero que lo que leo, respondo y guardo no sea visible ni identificable para nadie, para no tener que medir lo que hago dentro | Should | Resuelto por diseño y reforzado por el onboarding: no hay foto de perfil y no existe el concepto de otros usuarios dentro de la app. El único dato que identifica es el correo, y solo lo tiene quien decide crear cuenta; quien no la crea deja sus respuestas en el dispositivo y en ningún sitio más. Si algún día se añade cualquier capa social, esta story se revisa entera. |
| US-10 | Como usuario, quiero poder saltarme cualquier pregunta que no quiera responder, para no tener que revelar nada a cambio de poder usar la app | Should | Se cumple de dos formas: pregunta a pregunta, y de una vez desde la pantalla de inicio del onboarding. La única excepción está fuera del onboarding, en la pantalla de entrada: la edad y los términos, que son obligación legal (US-26). Omitir no degrada la app, solo la deja genérica: quien se salta la pregunta de pronombres recibe textos sin marca de género. |
| US-11 | Como usuario, quiero poder borrar mi cuenta y todo lo que he dejado en ella cuando quiera, para no depender de que vosotros lo hagáis bien | Must | Botón "borrar cuenta" en Ajustes. Con datos de categoría especial es obligación legal, y así lo recoge 6.4. Para quien no tiene cuenta esa misma fila muestra "iniciar sesión": sus datos viven solo en el dispositivo, así que desinstalar la app los elimina y no hay nada que pedirnos que borremos. |

**Job: cimientos que faltan.** Cuando me doy cuenta de que nunca me explicaron lo básico, quiero construirme unos cimientos, para dejar de aprender a trompicones.

| ID | User Story | Prioridad | Detalle |
| --- | --- | --- | --- |
| US-12 | Como usuario, quiero comprobar si lo que doy por cierto lo es, para dejar de construir sobre ideas que nadie ha verificado | Must | Los mitos. Es la única funcionalidad de la V4 que corrige activamente algo que el usuario ya cree |
| US-13 | Como usuario, quiero encontrar los temas reunidos en un sitio, para no tener que saber qué buscar antes de empezar | Must | La biblioteca. Un participante valora acceder a temas y documentación en un mismo lugar; otro la describe como espacio de descubrimiento y aprendizaje, no como repositorio. Se refuerza con los tags y filtros de la biblioteca, que están decididos pero todavía no en el prototipo |

> **Cobertura parcial de este job.** Construir unos cimientos supone un orden: temas, niveles, un recorrido. La V4 ofrece una lista de contenidos y un buscador, sin ninguna noción de itinerario. La funcionalidad que respondía a esto eran los objetivos, que están en próximos pasos. Este job es, por tanto, la justificación de esa decisión pendiente, igual que US-04 y US-06 justifican el chat.

**Job: guardar y volver.** Cuando encuentro algo que me interesa pero no es el momento, quiero guardarlo y volver a encontrarlo, para no tener que buscarlo otra vez.

| ID | User Story | Prioridad | Detalle |
| --- | --- | --- | --- |
| US-14 | Como usuario, quiero guardar un contenido en el momento en que lo encuentro, para no perderlo por no ser el momento de consumirlo | Must | Dos botones independientes en las pantallas de contenido, Favoritos y Ver más tarde, cada uno con estado activo e inactivo. Guardar es un toque, no un flujo |
| US-15 | Como usuario, quiero separar lo que quiero tener a mano de lo que quiero consumir más tarde, para que guardar no se convierta en un cajón | Should | Favoritos y Ver más tarde son dos intenciones distintas, no dos temas, y son independientes: una pieza puede estar en ninguna, en una o en las dos. Un participante pidió guardar en listas o carpetas "como en Spotify" |
| US-16 | Como usuario, quiero saber qué ha pasado cuando guardo algo y dónde ha ido a parar, para no tener que buscarlo dos veces | Should | Viene de un pain concreto: un participante tiene dudas sobre cómo se organiza lo que guarda y dónde lo encuentra después. Se resuelve en dos sitios: el propio botón cambia de estado al guardar, y las piezas ya guardadas muestran el icono de su lista (corazón, marcador o los dos) cuando aparecen en las listas de contenido de la biblioteca |

**Job: pensar sin tener una duda.** Cuando no tengo ninguna duda concreta, quiero que algo me haga plantearme cosas que no me había preguntado, para conocerme mejor.

| ID | User Story | Prioridad | Detalle |
| --- | --- | --- | --- |
| US-17 | Como usuario, quiero que la app me proponga una pregunta sin que yo la busque, para que me llegue algo aunque no venga con una duda | Must | Es la pregunta del día. Escrita desde el usuario y no desde la funcionalidad a propósito: que el formato sea diario sigue siendo una asunción por probar (ver 8.1). Si la próxima ronda dice que el formato diario no funciona, la story sigue siendo válida y solo cambia el cómo |
| US-18 | Como usuario, quiero poder responder una pregunta sin que nadie me diga si he acertado, para poder pensar sin sentirme evaluado | Must | La ausencia de respuesta es la funcionalidad, no una pieza que falte. Sin esta story, quien construya ve cuatro opciones sin resultado y lo toma por algo a medio hacer. El requisito de contenido está en 6.4, "Quién responde y quién no" |
| US-19 | Como usuario, quiero poder sacar preguntas una detrás de otra cuando me apetezca, para seguir tirando del hilo sin tener que decidir por dónde | Should | El mazo de cards, que es la vía principal del aprendizaje activo y ocupa la sección Explorar entera |
| US-20 | Como usuario, quiero que la app me avise de vez en cuando con algo que me haga pensar, para volver cuando no tengo ninguna duda que resolver | Could | Las notificaciones son el único mecanismo capaz de generar ocasión de uso cuando el usuario no se acuerda del producto, y este job depende entero de que vuelva. El producto las contempla: 6.4 limita qué pueden mostrar en pantalla bloqueada y Perfil tiene el interruptor para activarlas. No se prototipa el flujo: como mucho se diseña el componente para poder montar una pantalla de mockup. Un prototipo en el que llegan notificaciones de verdad no aporta a la presentación |

**Job: verse reflejado.** Cuando busco información sobre sexualidad, quiero encontrarme reflejado y no solo el modelo hetero y monógamo, para que lo que leo me sirva a mí.

Este job no pide una funcionalidad: ninguna pantalla lo resuelve, es una propiedad del contenido y de las imágenes, recogida como requisito en 6.4 ("Inclusividad del contenido"). Se baja a stories porque un requisito no funcional no tiene quien lo verifique, y este es el único job que tres entrevistados nombraron por su cuenta sin que se les preguntara.

| ID | User Story | Prioridad | Detalle |
| --- | --- | --- | --- |
| US-21 | Como usuaria, quiero que el contenido no dé por hecho con quién me acuesto ni cómo, para no tener que traducir a mi caso todo lo que leo | Must | Criterio verificable pieza a pieza: se lee un artículo y se comprueba si sigue funcionando para quien no está en una pareja hetero y monógama. Si solo funciona para ese caso, la pieza está incompleta |
| US-22 | Como usuaria, quiero decir en el onboarding cómo me identifico, con mis palabras si ninguna etiqueta me encaja, para que lo que me llegue tenga que ver conmigo y para que la app se dirija a mí con mis pronombres y a mi ritmo | Should | Son dos preguntas y no una, y la diferencia es jurídica además de práctica (ver 6.2, pantallas 8 y 10). Cómo se dirige la app al usuario es una preferencia de lenguaje de la interfaz: va antes del consentimiento y no necesita permiso. Cómo se identifica es dato de categoría especial: va detrás del consentimiento, se puede omitir, y lleva campo abierto para quien no se reconozca en ninguna etiqueta. Identidad y orientación alimentan la personalización (ver 2.2), y pedirlas exige declarar para qué sirven. |
| US-23 | Como usuaria, quiero reconocerme en las imágenes y no solo en los textos, para no sentir que el producto habla de otras personas | Should | Separada de US-21 a propósito: en las entrevistas la crítica a las ilustraciones heteronormativas vino de una persona distinta a las que hablaban del contenido. Texto e imagen se producen en momentos distintos y con gente distinta; en una sola story, una de las dos se pierde |

### 6.4 Requisitos No Funcionales

**Privacidad y protección de datos.** Es el requisito crítico del producto, no uno más. La app trata datos de categoría especial según el RGPD (art. 9): orientación sexual, vida sexual y, potencialmente, salud. Implica consentimiento explícito, separado y granular, que ya está contemplado como modal en el onboarding, minimización real (no pedir lo que no se use), y derecho de supresión efectivo desde el propio perfil.

**Discreción.** El nombre y el icono en la pantalla de inicio no deben delatar el contenido de la app. Aparece como criterio en uno de los storyboards y es coherente con el target. Extensible a las notificaciones: el texto visible en pantalla bloqueada no debe exponer al usuario.

**Fiabilidad del contenido.** Todo contenido debe tener autoría o revisión profesional identificable. Sin esto, el diferenciador principal no existe.

**Tono no juzgador.** El tono es acogedor y no juzgador, también cuando es divertido o sexual, y siempre respetuoso. Existe un documento de tono de marca aparte que gobierna cómo se escribe (voz irónica, autoconsciente y gamberra, sobre los pilares acompañar, provocar e impulsar). Este requisito añade el límite que ese documento no recoge: la ironía se dirige siempre a la situación, nunca a quien pregunta, y ningún texto le dice al usuario cómo debería sentirse o qué debería hacer.

**Quién responde y quién no.** Los mitos tienen respuesta: dicen qué es cierto y qué no, con su dato y su fuente. Las preguntas de autoexploración no tienen respuesta, ni correcta ni sugerida. Su objetivo no es tener razón ni enseñar nada, es plantar una semilla. El párrafo que acompaña a una pregunta da contexto sobre el tema y nunca indica qué sentir ni qué hacer: decirle al usuario cómo debería sentirse es juzgarle.

**Claridad por encima del ingenio en los textos funcionales.** El ingenio va en el titular; el texto que explica cómo funciona algo, qué cuesta o qué pasa con los datos del usuario se escribe limpio y directo. En el modal de consentimiento de datos sensibles esto deja de ser una preferencia de estilo: un consentimiento escrito de forma ingeniosa y ambigua no es un consentimiento válido.

**Cómo se piden los permisos.** Cada permiso dice qué gana el usuario, no qué ganamos nosotros, y dice qué pasa si lo rechaza. Rechazar es una salida declarada y soportable, no un castigo. Y la finalidad que se declara es la que existe: la V4 no tiene profesionales, así que el consentimiento no los menciona. Pedir un dato que luego no cambia nada en pantalla se nota, y lo que se pierde es la fiabilidad, que según 5.2 es la única ventaja real del producto.

**Inclusividad del contenido.** El contenido no puede dar por defecto una única forma de vivir la sexualidad. Ni el género, ni la orientación, ni la monogamia se asumen: los textos, los ejemplos y las ilustraciones tienen que cubrir orientaciones y estructuras de relación distintas, y hablar de la sexualidad de una persona consigo misma y no solo en pareja. No es una declaración de intenciones, es un criterio de aceptación del contenido: una pieza que solo funciona para una pareja hetero y monógama está incompleta.

Sale de la investigación, no de una preferencia del equipo. Tres entrevistados lo señalaron: que no se habla de la sexualidad en pareja homosexual y solo de monogamia; que basarlo todo en la heterosexualidad deja sin punto de partida a quien descubre que su orientación no es esa; y que las ilustraciones resultan heteronormativas. Es además el único job de la sección 5.3 que hoy ninguna funcionalidad atiende de forma explícita.

**Alcance temático del contenido.** La sexualidad no termina en uno mismo: el contenido cubre también lo que pasa con la otra persona (comunicación, consentimiento, celos, deseo), y no solo el cuerpo y la práctica. Sale de las entrevistas, no de una intuición del equipo: dos entrevistados pidieron explícitamente contenido sobre hablar con la pareja y sobre comunicación en las relaciones, otro lo amplió a celos, deseo y autoconocimiento, y el consentimiento apareció como tema a tratar. Es lo que atiende al job "hablar con la otra persona" de la sección 5.3, que ninguna funcionalidad de la V4 resuelve por sí sola: se resuelve decidiendo de qué hablan los contenidos, no construyendo una pantalla.

**Límite del contenido visual.** Las imágenes no son explícitas. Un entrevistado pidió menos ilustración y más imagen explícita, pero material explícito acercaría el producto al porno y exigiría un marco legal que este proyecto no tiene. La vía para responder a esa crítica es la inclusividad descrita arriba, no la explicitud.

### 6.5 Edge cases

- **Usuario que no responde nada en el onboarding.** Ya resuelto: el resumen se salta. Falta decidir qué home ve alguien de quien no sabemos nada. [Pendiente: el onboarding no está diseñado todavía, ver 6.2.]
- **Usuario menor de edad.** La app es para adultos. La edad se declara al entrar, antes de cualquier contenido, con un campo de fecha de nacimiento y no con una pregunta de sí o no: una pregunta cerrada enseña cuál es la respuesta que deja pasar. Es lo único que no se puede saltar, y es independiente de la cuenta. La segunda barrera está fuera de la app: se publica con clasificación para mayores de 18 años, así que los controles parentales del dispositivo actúan antes de que la app llegue a abrirse. No hay verificación de identidad.

---

## 7. Aspectos Técnicos

### 7.1 Arquitectura / Enfoque técnico

Sitio estático: HTML, CSS y JavaScript, sin framework ni paso de compilación. Lo que se escribe es lo que ejecuta el navegador.

**Una sola página.** Las pantallas son secciones de un mismo documento que se muestran y se ocultan. La navegación no recarga, lo que el usuario guarda o responde se mantiene durante la sesión, las transiciones entre pantallas son posibles y los elementos comunes (navbar, mini player) se escriben una sola vez. La URL no cambia al navegar: enlazar directamente a una pantalla concreta exigiría añadir gestión de rutas.

**Archivos separados por área.** CSS y JavaScript en archivos propios, repartidos por zonas. Permite trabajar en paralelo sin coincidir en las mismas líneas y mantiene cada archivo lo bastante corto para editarlo con precisión.

**Trabajo con Git.** Repositorio en GitHub. Nadie trabaja sobre `main`: cada persona abre su rama, la sincroniza con `main` a diario y une trozos pequeños y terminados. El reparto del trabajo se hace por archivos, no por tareas, porque coincidir en las mismas líneas del mismo archivo es lo único que obliga a resolver conflictos a mano.

**Publicación.** El sitio se publica en Netlify, conectado al repositorio: cada push actualiza la URL en menos de un minuto. Esa URL es el entregable. Se abre en cualquier ordenador o móvil sin instalar nada, se comparte por enlace para que otras personas lo prueben, y permite comprobar el responsive en un teléfono real. Netlify admite además publicar arrastrando una carpeta, sin pasar por el repositorio.

**Animaciones.** [Por estudiar antes de decidir.] Transiciones y animaciones de CSS para lo que se mueve dentro de una pantalla; View Transitions API para los cambios de pantalla; animaciones ligadas al scroll solo con CSS. Falta comprobar el soporte en navegadores y entender cómo funcionan antes de comprometerse.

**Construcción asistida.** El prototipo se construye con Claude Code, leyendo el Design System y el prototipo de Figma. Los textos de las pantallas se toman del prototipo; el contenido que falta se genera siguiendo este PRD y el documento de tono de marca. Los datos y las fuentes se dejan como marcador visible: inventarlos rompería el requisito de fiabilidad de 6.4 justo en la pantalla que debería demostrarlo.

### 7.2 Dependencias

El prototipo no usa ninguna librería de código de terceros. Sus dependencias son de servicio y de material.

**Servicios.** GitHub aloja el repositorio. Netlify publica el sitio. Figma es la fuente del diseño y de los textos de pantalla. Claude Code construye.

**Tipografías.** DM Sans para la interfaz, desde Google Fonts. Tiny Tiny para el lettering de las cards, de autoría propia del equipo, así que no hay problema de licencia. El archivo de la fuente tiene que estar **dentro del repositorio** y declararse en el CSS con `@font-face`, en formato `.woff2` convertido desde el original. Si la fuente no viaja con el proyecto, se ve correcta solo en los ordenadores que la tengan instalada y cae a una tipografía de sustitución en cualquier otro dispositivo.

**Ilustraciones e iconos.** Se exportan de Figma y viven en el repositorio.

**Medios reproducibles.** Opcionales: un archivo de audio y uno de vídeo bastan para demostrar que la reproducción es real. Sin ellos, la reproducción es simulada (ver 7.3).

### 7.3 Riesgos técnicos

**La personalización no existe en el prototipo.** Es una capa central del producto (ver 2.2), pero un sitio estático no aprende de nadie: lo que se ve está fijado a mano. La demo se presenta como la sesión de un usuario real, con un perfil concreto decidido de antemano, y todo el contenido visible tiene que ser coherente con ese perfil: la home, la biblioteca, el contenido relacionado y las respuestas del onboarding. Implica revisar todo el contenido del prototipo con ese perfil delante. Elegir un perfil que no sea hetero y monógamo hace que la misma demo sirva también de prueba del requisito de inclusividad de 6.4. Durante la presentación se dice en voz alta que el contenido está personalizado para ese perfil.

**La reproducción es simulada.** Al pulsar play, la barra de progreso avanza y el tiempo corre, pero no hay ningún archivo detrás. Es suficiente para la demo mientras nadie espere oír audio. Si en algún momento del proyecto hay margen, un archivo corto por formato convierte la simulación en reproducción real.

**El soporte de las animaciones está sin verificar.** Si la View Transitions API no funciona en el navegador de la presentación, los cambios de pantalla se ven secos pero el prototipo sigue funcionando: es un riesgo de acabado, no de funcionamiento.

**Nadie del equipo puede reparar el código.** Si algo se rompe y la asistencia no está disponible, no hay plan B interno. Lo mitiga mantener siempre `main` sano: mientras lo esté, la URL sigue en pie aunque una rama esté rota.

**La presentación depende de la conexión.** La URL necesita internet. Conviene llevar además una copia local de la carpeta, probada de antemano.

## 8. Riesgos y Asunciones

> ⚠️ **PENDIENTE:** 8.2 por rellenar.

### 8.1 Asunciones

Cosas que damos por ciertas y que la investigación todavía no sostiene. Cada una lleva cómo comprobarla en la próxima ronda de entrevistas.

| Asunción | Por qué está sin probar | Cómo se testea |
| --- | --- | --- |
| El usuario quiere no ser identificable, no solo no ser visto | Nadie pidió anonimato. Lo que dijeron fue "tienes tu intimidad" y "espacio seguro": es no exponerse, que no es lo mismo que no ser identificable | No preguntar "¿te importa el anonimato?", la respuesta siempre es sí. Preguntar qué hicieron la última vez: ¿buscaron en incógnito, borraron el historial, preguntaron a alguien en vez de buscar? Y qué les frenaría de tener la app instalada en el móvil |
| El formato diario es lo que genera la ocasión de uso | La necesidad de que algo te haga plantearte cosas sin tener una duda está confirmada (ver 5.3), pero que la vía sea una home que cambia cada día, con pregunta, mitos y contenido nuevos, no lo ha dicho nadie. Es además lo que distingue la home de Biblioteca (ver 6.1) | No preguntar si usarían la pregunta del día. Enseñar la home y ver si interactúan sin que se lo pidamos. Preguntar cuándo fue la última vez que abrieron algo sin buscar nada concreto, y qué les hizo abrirlo. Enseñar la home de dos días distintos y ver si notan el cambio sin decírselo |

> Nota: si alguna de estas se confirma en la próxima ronda, pasa a ser un Job to be done de la sección 5.3 con su evidencia. Si se cae, se quita del producto lo que la sostenía.

### 8.2 Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
| --- | --- | --- | --- |
| Que las "soluciones" sean muy generalizadas y no lleguen bien a cada usuario | [Pendiente] | [Pendiente] | [Pendiente] |
| Que los jóvenes-adultos no estén dispuestos a cambiar un hábito ya instalado (Google, porno, amigos) por algo nuevo, aunque sepan que es menos fiable | [Pendiente] | [Pendiente] | [Pendiente] |

---

## 9. Próximos pasos

Todo lo siguiente queda fuera de la V4 y se retoma después de la presentación del proyecto.

- **Chat con IA.** Espacio íntimo y privado para resolver dudas sin juicio, con respuestas claras basadas en datos reales. Responde a dos stories que la V4 solo cubre a medias: US-04, buscar con las palabras propias sin conocer el nombre del tema, y US-06, llegar de la duda a la respuesta en pocos pasos. Era además la funcionalidad mejor entendida en la primera ronda de user tests, y en las entrevistas largas hubo quien la pidió de forma espontánea. Queda fuera por tiempo y por coste: la IA es cara y todavía no hemos encontrado una forma que funcione.
- **Chat con profesionales.** También salió en las entrevistas. Queda fuera porque encontrar profesionales que respondan a dudas sin que parezca una consulta médica daría para una aplicación entera, y no hay tiempo en esta fase.
- **Objetivos.** Recorridos guiados hacia metas concretas (autoestima, comunicación, seguridad). Responden a US-13 y al job de los cimientos: construir una base supone un itinerario, y la V4 solo ofrece una lista de contenidos y un buscador. Pendiente: decidir desde dónde se inician ahora que no hay chat, y dónde vivirían dentro de la app.
- **Listas por tema.** Un participante pidió poder clasificar por intereses lo que guarda, no solo por intención (Favoritos, Ver más tarde). Queda fuera de la V4 por tiempo. Se parece mucho a los tags de la biblioteca: conviene mirarlas juntas antes de diseñar ninguna de las dos.
- **La pregunta como excusa para hablar en pareja.** Las cards ya están pensadas para hacérselas a uno mismo o a la pareja (ver 2.2), pero usarlas como forma de abrir una conversación es una inferencia nuestra: nadie lo pidió en las entrevistas. Antes de diseñar nada hay que probarlo. Engancha con un dato incómodo de la investigación: hoy la pareja estable es un freno declarado ("no la usaría si ya tengo una pareja muy estable"), y este es el único job que le habla directamente. Si se confirma, ese perfil deja de ser un freno y pasa a ser un público.
- **Juegos y retos en pareja.** Pendiente de desarrollar.

---

## 10. Apéndice

Enlaces a documentos relacionados (investigación, sitemap, archivos de diseño, playbook de prompts, etc.), changelog de las versiones del PRD.

> ⚠️ **PENDIENTE:** no hay ningún enlace todavía.

| Versión del PRD | Fecha | Cambios | Autor |
| --- | --- | --- | --- |
| V2 | 19/09/2026 | Unificación de las dos versiones del PRD | TFM #01 |
| V3 | 20/09/2026 | Onboarding definido y recogido en 6.2 pantalla a pantalla: cuenta y onboarding opcionales, edad y términos en la entrada, consentimiento granular en dos permisos, pronombres separados de identidad, recorrido partido en dos tramos. Nuevo requisito sobre cómo se piden los permisos (6.4), edge case de menor de edad reescrito (6.5) y US-26 | TFM #01 |
| V4 | 21/09/2026 | Home cerrada: decisiones y justificación en 6.1, secuencia de la pregunta del día en 2.2 (responder en la home, detalle después), nombres de bloques alineados con el diseño, alcance de la asunción del formato diario ampliado en 8.1. |  |
