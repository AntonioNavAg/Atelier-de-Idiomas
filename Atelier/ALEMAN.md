# Alemán · das Atelier

Abre index.html y selecciona Alemán. Francés sigue disponible con todos sus módulos. Esta primera entrega alemana está dedicada a Desde cero, con ocho tarjetas:

1. Abecedario y sonidos: 26 letras, ä, ö, ü y ß; nombres en IPA, ejemplos y audio.
2. Números: reglas, explorador de 0 a 9999 y ejercicios de lectura de 0 a 99.
3. Artículos y género: der/die/das, ein/eine y mayúsculas en nombres.
4. Singular y plural: patrones y excepciones.
5. Primeros casos: nominativo, acusativo y una introducción a dativo/genitivo.
6. Primeras frases: presente, posición del verbo, preguntas y negación.
7. Cómo presentarse: diálogo traducido, trato du/Sie y modelo personal.
8. Guía desde cero: recorrido libre y sugerencias de práctica fuera de la app.

Hay 24 ejercicios escritos repartidos entre seis temas (4 por tema); números ofrece sesiones aleatorias de 10 preguntas distintas de 0 a 99. La guía no tiene ejercicios. Los ejercicios se pueden repetir; el contenido es finito. Las respuestas de texto exigen las mayúsculas y los signos alemanes de la solución indicada. El teclado de ayuda permite insertar umlaut y ß. Consultar una solución cuenta como intento sin acierto.

Audio mediante SpeechSynthesis, con idioma de-DE y selector de voces alemanas. El audio y su uso sin conexión dependen del navegador/sistema. No se graba ni se evalúa la voz. El enlace de referencia externo requiere conexión; las lecciones y ejercicios locales no requieren backend.

El progreso alemán usa atelier-aleman-bases-v1, separado de francés. El regreso a Desde cero cierra la sesión de ejercicios actual y conserva las puntuaciones acumuladas. No hay sincronización ni certificación de nivel. Los catálogos y talleres amplios franceses todavía no están disponibles en alemán.

Contenido redactado para esta aplicación. Referencias consultadas: Goethe-Institut, Deutsche Grammatik (https://www.goethe.de/ins/de/de/m/prf/grm.html), y PONS, Deutsches Alphabet (https://de.pons.com/p/wissensecke/grammatik-to-go/deutsches-alphabet). Explicaciones introductorias; no se reproduce un curso completo.

Validación automática: ocho tarjetas, 30 letras/signos, 24 registros de ejercicios, 10.000 conversiones numéricas distintas, casos numéricos límite, comprobación sin doble puntuación, audio solicitado en de-DE y navegación entre idiomas. También pasa la regresión de francés. Revisión visual y reproducción de audio real pendientes.

Actualización: ya existe una sección propia de verbos alemanes (223 entradas, conjugaciones y práctica), accesible desde el inicio de alemán. Véase VERBOS-ALEMANES.md; las referencias anteriores a la ausencia de catálogo alemán quedan sustituidas por esta actualización.

### Portada alemana y declinaciones ampliadas
La portada de alemán reproduce la organización del francés: Empieza aquí, Verbos, Vocabulario, Recuperación activa y Gramática, con guía de estudio e inventario de funciones adaptados. Recuperación activa y Gramática independientes aparecen como Próximamente, deshabilitadas; no son contenidos que se desbloqueen por progreso.

La tarjeta existente de casos se amplía y se llama «Declinaciones: quién hace qué». Contiene tablas de artículos definidos/indefinidos y pronombres, funciones de los cuatro casos, posesivos, cambios del sustantivo, ejemplos iniciales de adjetivos y preposiciones. Incluye traducciones y un método para escoger las formas. Es una introducción ampliada, no una tabla exhaustiva de todas las declinaciones adjetivales.

El banco de bases alemanas pasa de 24 a 32 ejercicios: 12 sobre casos/declinaciones y 20 de los otros temas. Las sesiones de declinaciones seleccionan hasta 10 preguntas sin repetición. El progreso conserva la misma clave de almacenamiento.

Validación: pruebas de navegación, cinco tarjetas y estados disponibles/próximos, tablas y ejemplos, filtros y actividades anteriores, sesiones de diez preguntas de declinación. Revisión visual en navegador pendiente.


## Ampliación del vocabulario alemán

2.500 entradas en 27 temas (+2.170). Conserva la colección anterior y los tres modos de práctica, filtros por nivel/tema y configuración emergente. Para actualizar una copia local, sustituye la carpeta completa: index.html carga ahora también aleman-vocabulario-extra.js. Fuentes, licencias y límites de los niveles estimados en FUENTES-VOCABULARIO-ALEMAN.md.


## Ampliación de ejercicios y guías de casos

- Bases: 215 ejercicios frente a los 32 anteriores: 64 de artículos, 55 de plurales, 60 de casos, 12 de frases, 12 de presentación y 12 de abecedario/sonidos. Los ejercicios nuevos de artículos y plurales reutilizan nombres del catálogo.
- Números: rangos 0–99, 0–999 y 0–9999; cifras a palabras, palabras a cifras y mezcla, en sesiones de diez.
- Contrarios: 60 pares (antes 40); interrogativas: 18 formas en 36 frases (antes 18); preposiciones: 26 formas en 52 frases (antes 26). Las fichas con la misma palabra muestran contextos distintos.
- Verbos: nuevo modo Conjugar en presente para los 223 verbos y seis personas; escribe la forma sin el pronombre e incluye el prefijo de los separables al final. Disponible en la práctica habitual y en la ventana del listado.
- Vocabulario: nuevo modo Alemán → significado en español para las 2.500 entradas; acepta un significado recogido en la ficha. No evalúa traducciones libres fuera de ese banco.

Los cuatro casos están subrayados en la guía general y en el acceso de declinaciones. Cada uno abre una ventana con usos, identificación, cambios en artículos/nombres/pronombres, ejemplos traducidos, diferencias y errores frecuentes. Cerrar o Escape devuelve a la misma guía. Duraciones de declinación: 5, 10, 12, 20, 40 o las 60 preguntas.

Explicaciones y ejemplos redactados para esta aplicación, contrastados con [Lingolia: uso de los casos](https://deutsch.lingolia.com/de/grammatik/deklination) y [declinación de nombres y artículos](https://deutsch.lingolia.com/de/grammatik/nomen/deklination).

Verificación: regresión anterior, todas las respuestas de los temas ampliados, sesión completa de 60 casos, guías y retorno de foco, números en tres modos, conjugación y traducción inversa. Revisión visual y audio real pendientes. Los identificadores y datos de progreso anteriores se conservan.
