# Atelier · Francés de A1 a B2

Versión con ejercicios en contexto: **350 verbos y 2.500 entradas de vocabulario**, distribuidas en **25 temas**. Funciona localmente, sin cuenta, backend ni conexión a Internet. La voz francesa depende de las voces instaladas en tu navegador o sistema.

La pestaña **04 · Practicar en contexto** añade completar, elegir y ordenar frases con filtros de contenido, ayudas, recomendación y comprobación del aprendizaje. Consulta `CONTEXTO.md` para el alcance de las 48 estructuras iniciales.

La pestaña **05 · Contrarios y preguntas** incorpora 100 parejas de contrarios y contrastes, una guía de 16 grupos interrogativos y 50 preguntas para completar. Consulta `CONTRARIOS-Y-PREGUNTAS.md`.

La pestaña **06 · Gramática** añade 48 fichas explicadas y 96 ejercicios, con búsqueda, filtros y práctica de una regla concreta. Consulta `GRAMATICA.md`.

La nueva sección inicial **00 · Empieza aquí** reúne el abecedario con audio y ejemplos, y los números con reglas, explorador y cuatro modalidades de ejercicios. Es la primera pestaña al entrar en francés en una nueva apertura. Consulta `EMPIEZA-AQUI.md`.

## Menú de idiomas

Al abrir la página aparece el selector de idiomas con banderas circulares. Francés está disponible; inglés, español, alemán, italiano y japonés aparecen bloqueados con «Próximamente». Pulsa «Cambiar idioma» o el logotipo para regresar al selector sin reiniciar la sesión. Cada nueva apertura muestra el selector. Las banderas son SVG locales y funcionan sin conexión.

El nuevo archivo `idiomas.js` controla esta entrada. Copia también `index.html` y `styles.css` actualizados, o reemplaza todos los archivos con el ZIP.

## Abrir en Visual Studio Code

1. Descomprime `frances-verbos.zip`.
2. En Visual Studio Code: **Archivo → Abrir carpeta → frances-verbos**.
3. Abre `index.html` en tu navegador con doble clic desde el explorador. Si ya usas Live Server, puedes elegir **Open with Live Server**.

No hay que instalar paquetes ni ejecutar comandos. Todos los archivos deben permanecer en la misma carpeta.

## Actualizar tu versión anterior

Copia los archivos de esta carpeta sobre los de tu carpeta anterior. Copia todos los archivos del ZIP, incluidos `contexto-datos.js`, `contexto-motor.js`, `contexto-app.js` y `apprentissage.js`. Guarda y recarga la página.

Los favoritos y el progreso de verbos conservan su formato de guardado anterior. Permanecen disponibles si utilizas el mismo navegador y la misma dirección o ubicación de apertura. Cambiar de carpeta, de puerto de Live Server o de abrir un archivo directamente a usar Live Server puede cambiar el almacenamiento que utiliza el navegador. El progreso de vocabulario se guarda por separado.

## Estructura exacta

```text
frances-verbos/
├── index.html          # Las tres secciones de la web
├── styles.css          # Diseño adaptable a ordenador y móvil
├── verbos.js           # 350 verbos, niveles y formas de conjugación
├── conjugador.js       # Nueve tiempos verbales
├── app.js              # Juegos y catálogo de verbos
├── vocabulario.js      # 2.500 entradas con traducción y gramática
├── vocabulario-app.js  # Temas, filtros, aprendizaje y juegos de palabras
├── contexto-datos.js    # Estructuras y combinaciones admitidas
├── contexto-motor.js    # Generador de ejercicios
├── contexto-app.js      # Interfaz de práctica en contexto
├── apprentissage.js     # Evidencia de aprendizaje
├── CONTEXTO.md          # Guía de los nuevos ejercicios
├── idiomas.js          # Menú inicial de selección de idioma
├── retos-datos.js       # Contrarios, interrogativos y preguntas
├── retos-app.js         # Juegos de contrarios e interrogativos
├── CONTRARIOS-Y-PREGUNTAS.md # Guía de la nueva sección
├── gramatica-datos.js   # Reglas, ejemplos y ejercicios
├── gramatica-app.js     # Guía y práctica de gramática
├── GRAMATICA.md         # Instrucciones de gramática
├── inicio-datos.js      # Abecedario y formación de números
├── inicio-app.js        # Audio y ejercicios de primeros pasos
├── EMPIEZA-AQUI.md      # Instrucciones de abecedario y números
├── LEEME.md            # Estas instrucciones
├── FUENTES.md          # Procedencia de datos, alcance y licencias
└── LICENCIA-LEFFF.txt   # Licencia de los datos de conjugación
```

Todo el código está completo: los archivos se pueden copiar y modificar directamente.

## Verbos

Se conservan los 300 anteriores y se añaden 50 para ampliar la expresión: reflexionar, argumentar, gestionar, convencer, negociar, deducir, etc. Todos tienen conjugaciones y nivel orientativo. Puedes practicar los 100 esenciales, los 350, un nivel concreto o tus favoritos.

Los tres juegos son flashcards, test con cuatro opciones y escritura del infinitivo. En escritura se puede exigir o flexibilizar el uso de acentos.

La sección **Conjugaciones** permite buscar en español o francés y filtrar por nivel. Los nueve tiempos son présent, passé composé, imparfait, plus-que-parfait, futur proche, futur simple, conditionnel présent, subjonctif présent e impératif.

Los verbos que admiten être o avoir según su construcción tienen un selector en los tiempos compuestos. Los participios con être muestran masculino y femenino. En `vous` se presenta el plural: al tratar de usted a una persona, usa el participio singular. Con avoir se muestra el participio sin concordancia; un objeto directo anterior puede exigirla en una frase completa.

## Vocabulario por temas

Pulsa **03 · Vocabulario por temas**. Puedes:

- Elegir un tema y combinarlo con nivel, tipo de palabra y búsqueda en español o francés.
- Consultar sustantivos con género, adjetivos con femenino cuando cambia, adverbios, números, pronombres, conjunciones, preposiciones y expresiones.
- Guardar favoritos y marcar palabras como aprendidas o pendientes.
- Practicar hasta **20 entradas de tu selección** en flashcards, test o escritura.
- Activar «Solo por aprender» para centrarte en las que todavía necesitas repasar.

Al acertar, la entrada se marca como aprendida. Un fallo vuelve a marcarla por aprender. En flashcards es una autoevaluación. También puedes cambiar esa marca manualmente en el catálogo. No se trata de un algoritmo de repetición espaciada.

En escritura se aceptan las formas masculinas y femeninas guardadas. Para sustantivos puedes escribir el lema sin artículo; se toleran los artículos básicos. Las respuestas alternativas se admiten cuando comparten una traducción explícita del diccionario: no es un corrector semántico libre.

Las sesiones usan una selección fija de hasta 20 entradas sin repetición. Los cambios de aprendizaje se aplican a los filtros al volver al catálogo. La paginación muestra 24 entradas por página.

Las 2.500 entradas son lemas o unidades léxicas distintas; algunas son palabras compuestas o expresiones, como `mot de passe` o `parce que`. Las variantes femeninas de un adjetivo se guardan en su misma entrada. Las notas aportan algunas acepciones adicionales sin aumentar el recuento.

## Progresión orientativa

Los niveles son una selección pedagógica orientativa, no una clasificación oficial del MCER. La colección refuerza A1–A2 e introduce vocabulario de B1–B2. Memorizar este diccionario por sí solo no certifica un nivel: también hacen falta comprensión, expresión, gramática y uso en contexto.

## Guardado local

El navegador guarda favoritos, respuestas y palabras aprendidas. No hay sincronización entre dispositivos. En modo privado o al borrar los datos del navegador, el progreso puede desaparecer. Si el almacenamiento está bloqueado, la web continúa funcionando durante la sesión.

## Modificar el contenido

- Cambia diseño y colores en `styles.css`.
- Cambia textos estáticos en `index.html`.
- En `verbos.js`, `fr` es el infinitivo, `es` la traducción, `level` el nivel orientativo y `core` indica el grupo esencial. Cada verbo necesita todas sus formas francesas para funcionar.
- En `vocabulario.js`, cada entrada tiene `id`, `fr`, `es`, `theme`, `type`, `gender` y `level`; algunas incluyen `feminine` y `note`.
- Géneros: `m`, `f`, `mf` (ambos), `mp` (masculino plural) o `fp` (femenino plural). Las otras categorías usan género vacío.
- Conserva el `id` de una entrada al corregir una traducción para mantener su favorito y aprendizaje.

## Verificación

Comprobados: 350 verbos únicos, 2.500 entradas únicas, 25 temas, estructura gramatical, nueve tiempos y nuevos irregulares. Probada la lógica de los juegos, navegación, filtros combinados, paginación, acentos, femeninos, favoritos vacíos, bloqueo de doble puntuación y conservación del progreso anterior mediante un DOM de prueba.

La revisión visual en un navegador real sigue pendiente: la infraestructura de vista local de la herramienta no estuvo disponible. No se afirma una revisión lingüística profesional de las 2.500 entradas.

## Distribución del vocabulario

A1: **508** · A2: **878** · B1: **890** · B2: **224**

| Tema | Entradas |
|---|---:|
| Familia y relaciones | 100 |
| Casa y objetos | 100 |
| Alimentación y cocina | 100 |
| Ropa y apariencia | 100 |
| Cuerpo y sentidos | 100 |
| Salud y bienestar | 100 |
| Emociones y personalidad | 100 |
| Compras y servicios | 100 |
| Ciudad y lugares | 100 |
| Transporte y circulación | 100 |
| Viajes y alojamiento | 100 |
| Educación y aprendizaje | 100 |
| Trabajo y profesiones | 100 |
| Dinero y economía | 100 |
| Tecnología e internet | 75 |
| Medios y comunicación | 100 |
| Naturaleza y paisaje | 100 |
| Animales y plantas | 100 |
| Medioambiente y clima | 100 |
| Política y sociedad | 75 |
| Justicia y seguridad | 75 |
| Ciencia y conocimiento | 75 |
| Arte y cultura | 100 |
| Deporte y ocio | 100 |
| Tiempo y palabras esenciales | 200 |

## Los 50 verbos añadidos

- **agir** (B1): actuar.
- **réfléchir** (A2): reflexionar.
- **analyser** (B1): analizar.
- **considérer** (B1): considerar.
- **supposer** (B1): suponer.
- **constater** (B1): constatar / comprobar un hecho.
- **évoquer** (B2): mencionar / evocar.
- **souligner** (B1): subrayar / destacar.
- **préciser** (B1): precisar / aclarar.
- **convaincre** (B1): convencer.
- **persuader** (B2): persuadir.
- **débattre** (B2): debatir.
- **négocier** (B2): negociar.
- **revendiquer** (B2): reivindicar.
- **défendre** (B1): defender.
- **contester** (B2): cuestionar / impugnar.
- **approuver** (B1): aprobar una idea.
- **critiquer** (B1): criticar.
- **justifier** (B1): justificar.
- **démontrer** (B2): demostrar con razonamientos.
- **prouver** (B1): probar / demostrar un hecho.
- **évaluer** (B2): evaluar.
- **estimer** (B1): estimar / calcular aproximadamente.
- **contribuer** (B2): contribuir.
- **favoriser** (B2): favorecer.
- **renforcer** (B2): reforzar.
- **maintenir** (B1): mantener / conservar en un estado.
- **établir** (B2): establecer.
- **fournir** (B1): proporcionar.
- **acquérir** (B2): adquirir.
- **investir** (B2): invertir.
- **financer** (B2): financiar.
- **gérer** (B1): gestionar.
- **embaucher** (B1): contratar a un trabajador.
- **licencier** (B2): despedir a un trabajador.
- **démissionner** (B1): dimitir.
- **collaborer** (B1): colaborar.
- **entreprendre** (B2): emprender.
- **réaliser** (B1): realizar / llevar a cabo.
- **effectuer** (B1): efectuar.
- **accomplir** (B2): cumplir / llevar a término.
- **adapter** (B1): adaptar.
- **bénéficier** (B2): beneficiarse.
- **subir** (B2): sufrir / verse sometido a.
- **surmonter** (B2): superar un obstáculo.
- **parvenir** (B2): conseguir / llegar a.
- **intervenir** (B2): intervenir.
- **conclure** (B1): concluir.
- **déduire** (B2): deducir.
- **transmettre** (B1): transmitir.

### Filtros de verbos y formación de tiempos
En «02 · Conjugaciones», combina la búsqueda con nivel, terminación (-er, -ir, -oir, -re), grupo y favoritos. -oir se muestra por separado de -ir. El 1.er grupo incluye cambios ortográficos; aller pertenece al 3.º. El 2.º grupo se reconoce por -ir y nous en -issons; los demás modelos son del 3.º grupo. No todos los verbos del 3.º grupo tienen el mismo grado de irregularidad.
Al elegir un verbo y un tiempo aparece «Cómo se forma»: raíz, terminaciones, ejemplos y excepciones principales. Los tiempos compuestos explican el auxiliar y el participio; no se forman añadiendo terminaciones a una raíz. Las explicaciones son una guía y la tabla conserva las formas del diccionario.
Verificación: pruebas automáticas de filtros combinados, clasificación y explicaciones para 350 verbos en nueve tiempos; regresión de las secciones anteriores. Revisión visual en navegador no disponible en esta sesión.

### 07 · Preposiciones
Nueva sección con 33 fichas, 66 ejercicios guiados, ejemplos traducidos y audio del navegador. Filtra por tema y nivel; practica con opciones o escritura, con pistas opcionales y progreso separado. Más detalles en PREPOSICIONES.md.

### Nueva portada por áreas
Al entrar en francés se muestran cinco tarjetas: Empieza aquí, Verbos, Vocabulario, Recuperación activa y Gramática. Las secciones anteriores quedan agrupadas dentro; ya no se abre directamente Empieza aquí. Usa «Inicio de francés» para volver a las tarjetas. Consulta DISTRIBUCION.md para el mapa actualizado. Esta navegación sustituye las referencias anteriores a pestañas numeradas en la documentación.

### Taller de recuperación activa
La tarjeta Recuperación activa abre ahora un taller de 236 ejercicios de escritura, combinaciones y corrección. La práctica en contexto anterior sigue en la pestaña contigua. Incluye filtros y repaso de errores y respuestas asistidas. Consulta RECUPERACION-ACTIVA.md para la composición exacta del banco y cómo se registra el progreso.

### Contrarios y palabras interrogativas separados
Dentro de Vocabulario hay ahora cuatro pestañas: Vocabulario por temas, Contrarios, Palabras interrogativas y Preposiciones. Contrarios conserva sus 100 parejas; Palabras interrogativas conserva 16 grupos y 50 frases. Cada apartado mantiene su sesión al alternar entre ellos. Se reutiliza el progreso anterior, sin necesidad de migración. El ZIP incluye interrogativas-app.js, necesario para la nueva sección.

### Tarjetas dentro de Empieza aquí y Verbos
Empieza aquí abre seis opciones: Abecedario, Números, Artículos, Masculino y femenino, Singular y plural y Guía desde cero. Las cuatro nuevas opciones son guías explicativas; los ejercicios gramaticales siguen disponibles en Gramática y Recuperación activa. Abecedario y Números conservan sus actividades. «Opciones de Empieza aquí» regresa a las tarjetas.
Verbos abre dos tarjetas, primero Verbos y conjugaciones, después Practicar verbos. La pestaña Opciones de verbos permite volver a elegir. Los datos de progreso se mantienen. Incluye el nuevo archivo fundamentos-menu.js.
Validación: pruebas automáticas de navegación por las seis tarjetas, actividades anteriores y entradas a catálogo/práctica; revisión visual en navegador pendiente.

### Cómo presentarse
Empieza aquí tiene ahora siete tarjetas. «Cómo presentarse» incluye diez expresiones con traducción, un diálogo de diez intervenciones entre Ana y Lucas, trato informal/formal, un modelo personalizable y propuestas para practicar sin mirar. La guía desde cero señala esta nueva tarjeta. Es contenido explicativo y práctica personal, sin evaluación automática de voz ni de texto libre. Navegación y regresión comprobadas automáticamente; revisión visual pendiente.

### Alemán disponible: das Atelier
El selector de idiomas permite ahora abrir Alemán → Desde cero. Incluye ocho temas introductorios, audio, números y ejercicios con progreso independiente. Consulta ALEMAN.md. Copia el ZIP completo: incluye aleman-datos.js y aleman-app.js. La carpeta histórica frances-verbos contiene ahora ambos idiomas.

### Verbos alemanes disponibles
Alemán abre ahora dos áreas: Empieza aquí y Verbos. En Verbos hay dos tarjetas, primero el catálogo y después la práctica. Incluye 223 entradas, seis tiempos/construcciones, filtros, favoritos, audio y tres juegos. Consulta VERBOS-ALEMANES.md para el alcance y los casos especiales. Sustituye todos los archivos con el ZIP actualizado, que incluye aleman-verbos-datos.js, aleman-conjugador.js y aleman-verbos-app.js.

### Vocabulario alemán
Nueva tarjeta en Alemán: 2.500 entradas en 27 temas, sustantivos con artículo y plural, adjetivos, adverbios y expresiones. Incluye audio, filtros, favoritos, marcas de repaso y tres modos de práctica. Detalles y alcance en VOCABULARIO-ALEMAN.md.

### Inicio alemán reorganizado
Cinco tarjetas y guía de estudio como en francés, adaptadas al contenido alemán. Recuperación activa y Gramática están señaladas como próximas. En Empieza aquí, «Declinaciones: quién hace qué» amplía la explicación de casos, tablas y ejemplos, con 12 ejercicios disponibles. Véase ALEMAN.md.

### Elegir las palabras de práctica (francés y alemán)
En Vocabulario, selecciona el tema y el nivel A1/A2/B1/B2. El resumen muestra la selección y el número disponible antes de empezar. «Todos los niveles del tema seleccionado» conserva el tema y limpia los demás filtros (nivel, búsqueda, tipo, favoritos y pendientes) para incluirlo completo. Con Todos los temas, ese botón incluye el catálogo entero.
Ahora puedes elegir sesiones de hasta 20 palabras o todas las palabras de la selección, sin repetición dentro de la sesión. El resumen se mantiene durante la práctica. Esto sustituye el límite anterior de 20 palabras. Los favoritos y progresos guardados se conservan. Verificación automática en ambos idiomas y regresión superadas; revisión visual pendiente.

### Tarjeta de declinaciones y configuración previa
El inicio alemán incluye acceso directo a Declinaciones, con tarjetas Estudiar y Practicar. Estudiar abre la guía; Practicar muestra primero la configuración (5, 10 o 12 preguntas) y solo Empezar abre los ejercicios sin las tablas. Se conserva el progreso de bases alemanas. La guía también sigue accesible desde Empieza aquí.

En vocabulario francés y alemán, Practicar esta selección abre ahora una pantalla de configuración: tema, nivel, formato, todos los niveles del tema y duración (hasta 20 o toda la selección). Empezar inicia la sesión; Volver al catálogo cancela sin puntuar. Los filtros de catálogo se conservan y se explican en la configuración. Esta pantalla sustituye los controles de sesión que antes estaban encima del botón Practicar.

Validación automática: navegación por estudio/práctica, configuración antes de comenzar, cambio de filtros, inicio explícito, cancelación, tamaños de sesión y regresión de actividades anteriores. Revisión visual en navegador pendiente.

### Configuración en ventana emergente
En vocabulario francés/alemán y declinaciones, Practicar abre ahora un diálogo modal sobre la página. Se puede cerrar con Cerrar, Escape o pulsando fuera; Empezar cierra el diálogo y abre el ejercicio. Se usa dialog nativo para confinar el foco y desactivar el fondo mientras está abierto. Requiere un navegador moderno con soporte para dialog.showModal. Comprobación automática del flujo y de los eventos de cierre superada; aspecto visual y manejo real del teclado pendientes de revisión en navegador.


## Ampliación del vocabulario alemán

2.500 entradas en 27 temas (+2.170). Conserva la colección anterior y los tres modos de práctica, filtros por nivel/tema y configuración emergente. Para actualizar una copia local, sustituye la carpeta completa: index.html carga ahora también aleman-vocabulario-extra.js. Fuentes, licencias y límites de los niveles estimados en FUENTES-VOCABULARIO-ALEMAN.md.


## Configuración visual

El botón Configuración de la cabecera está disponible en todos los idiomas. Apariencia permite elegir Original (predeterminado) u Oscuro; se guarda solo la preferencia de diseño en este navegador. Los favoritos y resultados se conservan. Recordatorios es una maqueta interactiva: idioma, periodicidad, franja horaria, días y contenido, con ejemplo de palabra y frase. Sus opciones no se guardan ni programan avisos; no se solicitan permisos del dispositivo.

## Cinco ambientes y navegación más cómoda

Configuración > Apariencia ofrece Original, Oscuro, Refugio (arena/terracota), Estudio (blanco/azul) e Inmersión (noche/lavanda). Son preferencias visuales, no garantías de concentración. La elección se conserva localmente.

Los menús usan cartas verticales con desplazamiento horizontal manual: desliza, usa la barra o los botones Anteriores/Siguientes. También se pueden recorrer con Tab; al enfocar la fila, las flechas izquierda/derecha la desplazan. No hay reproducción automática y se respeta la preferencia de movimiento reducido. Los listados de vocabulario conservan su paginación.

Los botones de navegación y las acciones pequeñas tienen más espacio y una altura mínima de 44 px. Se han ampliado la separación y el ajuste en pantallas pequeñas. Regresión y comprobaciones de los temas/carruseles superadas en un DOM simulado; revisión visual en navegador pendiente.

## Practicar desde el listado de verbos

En francés y alemán, abrir el listado oculta las pestañas superiores de listado/práctica y muestra un botón Practicar a la derecha. Ese botón abre una ventana con las opciones de la práctica habitual: colección, modo y acentos en francés; filtros, formato y duración en alemán. Empezar abre los mismos ejercicios y utiliza el mismo progreso que la tarjeta de práctica. Cerrar o pulsar Escape descarta el borrador sin alterar el listado; una selección vacía mantiene la ventana abierta con un mensaje.

Las tarjetas de práctica conservan su funcionamiento anterior. En francés, los filtros del listado y la colección de práctica siguen siendo independientes. En alemán, los filtros se comparten al confirmar, igual que antes. Comprobados los tres modos en ambos idiomas mediante pruebas automatizadas; revisión visual pendiente.


## Ampliación de ejercicios y guías de casos

- Bases: 215 ejercicios frente a los 32 anteriores: 64 de artículos, 55 de plurales, 60 de casos, 12 de frases, 12 de presentación y 12 de abecedario/sonidos. Los ejercicios nuevos de artículos y plurales reutilizan nombres del catálogo.
- Números: rangos 0–99, 0–999 y 0–9999; cifras a palabras, palabras a cifras y mezcla, en sesiones de diez.
- Contrarios: 60 pares (antes 40); interrogativas: 18 formas en 36 frases (antes 18); preposiciones: 26 formas en 52 frases (antes 26). Las fichas con la misma palabra muestran contextos distintos.
- Verbos: nuevo modo Conjugar en presente para los 223 verbos y seis personas; escribe la forma sin el pronombre e incluye el prefijo de los separables al final. Disponible en la práctica habitual y en la ventana del listado.
- Vocabulario: nuevo modo Alemán → significado en español para las 2.500 entradas; acepta un significado recogido en la ficha. No evalúa traducciones libres fuera de ese banco.

Los cuatro casos están subrayados en la guía general y en el acceso de declinaciones. Cada uno abre una ventana con usos, identificación, cambios en artículos/nombres/pronombres, ejemplos traducidos, diferencias y errores frecuentes. Cerrar o Escape devuelve a la misma guía. Duraciones de declinación: 5, 10, 12, 20, 40 o las 60 preguntas.

Explicaciones y ejemplos redactados para esta aplicación, contrastados con [Lingolia: uso de los casos](https://deutsch.lingolia.com/de/grammatik/deklination) y [declinación de nombres y artículos](https://deutsch.lingolia.com/de/grammatik/nomen/deklination).

Verificación: regresión anterior, todas las respuestas de los temas ampliados, sesión completa de 60 casos, guías y retorno de foco, números en tres modos, conjugación y traducción inversa. Revisión visual y audio real pendientes. Los identificadores y datos de progreso anteriores se conservan.
