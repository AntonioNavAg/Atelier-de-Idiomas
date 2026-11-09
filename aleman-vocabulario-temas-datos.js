/* Colecciones editoriales: sentidos y contextos explícitos. */
(() => {
const opposites=`groß|grande|klein|pequeño
lang|largo|kurz|corto
breit|ancho|schmal|estrecho
hoch|alto (altura)|niedrig|bajo (altura)
alt|viejo|neu|nuevo
jung|joven|alt|mayor
heiß|caliente|kalt|frío
warm|templado|kühl|fresco
hell|claro / luminoso|dunkel|oscuro
weiß|blanco|schwarz|negro
schnell|rápido|langsam|lento
leicht|ligero|schwer|pesado
einfach|fácil|schwierig|difícil
reich|rico|arm|pobre
voll|lleno|leer|vacío
sauber|limpio|schmutzig|sucio
trocken|seco|nass|mojado
laut|ruidoso|leise|silencioso
stark|fuerte|schwach|débil
gesund|sano|krank|enfermo
glücklich|feliz|unglücklich|infeliz
freundlich|amable|unfreundlich|antipático
höflich|educado|unhöflich|descortés
richtig|correcto|falsch|incorrecto
wahr|verdadero|falsch|falso
offen|abierto|geschlossen|cerrado
teuer|caro|billig|barato
früh|temprano|spät|tarde
nah|cerca|fern|lejos
oben|arriba|unten|abajo
links|a la izquierda|rechts|a la derecha
innen|dentro|außen|fuera
vorne|delante|hinten|detrás
immer|siempre|nie|nunca
viel|mucho|wenig|poco
alles|todo|nichts|nada
zusammen|juntos|allein|solo
möglich|posible|unmöglich|imposible
bekannt|conocido|unbekannt|desconocido
ruhig|tranquilo|unruhig|inquieto`;
const questions=`wer|quién|Nominativo: pregunta por la persona que realiza la acción.|___ kommt heute? — Anna kommt.|¿Quién viene hoy? Anna viene.|A1
wen|a quién|Acusativo: objeto directo referido a una persona.|___ siehst du? — Ich sehe Paul.|¿A quién ves? Veo a Paul.|A2
wem|a quién|Dativo: por ejemplo, con helfen (ayudar).|___ hilfst du? — Ich helfe meinem Bruder.|¿A quién ayudas? Ayudo a mi hermano.|A2
wessen|de quién|Genitivo: pregunta por el poseedor.|___ Tasche ist das? — Das ist Annas Tasche.|¿De quién es ese bolso? Es de Anna.|B1
was|qué|Pregunta por una cosa o una acción.|___ machst du? — Ich lese.|¿Qué haces? Leo.|A1
wann|cuándo|Pregunta por un momento.|___ beginnt der Film? — Um acht Uhr.|¿Cuándo empieza la película? A las ocho.|A1
wo|dónde|Pregunta por la ubicación, no por un destino.|___ wohnst du? — In Berlin.|¿Dónde vives? En Berlín.|A1
wohin|adónde|Pregunta por el destino de un desplazamiento.|___ fährst du? — Nach Berlin.|¿Adónde vas? A Berlín.|A1
woher|de dónde|Pregunta por el origen.|___ kommst du? — Aus Spanien.|¿De dónde eres? De España.|A1
wie|cómo|Pregunta por la manera o el estado.|___ geht es dir? — Gut, danke.|¿Cómo estás? Bien, gracias.|A1
warum|por qué|Pregunta por una causa. También existen wieso y weshalb.|___ bleibst du zu Hause? — Weil ich krank bin.|¿Por qué te quedas en casa? Porque estoy enfermo.|A1
wie viel|cuánto|Con cantidades no contables; delante de un nombre plural se usa wie viele.|___ Wasser brauchst du? — Einen Liter.|¿Cuánta agua necesitas? Un litro.|A1
wie viele|cuántos|Con nombres contables en plural.|___ Bücher hast du? — Drei.|¿Cuántos libros tienes? Tres.|A1
wie lange|cuánto tiempo|Pregunta por la duración.|___ dauert der Kurs? — Zwei Stunden.|¿Cuánto dura el curso? Dos horas.|A2
wie oft|con qué frecuencia|Pregunta por la frecuencia.|___ trainierst du? — Zweimal pro Woche.|¿Con qué frecuencia entrenas? Dos veces por semana.|A2
welche|qué / cuál (femenino o plural)|Welch- se declina según género, número y caso. Aquí: femenino acusativo.|___ Sprache lernst du? — Deutsch.|¿Qué idioma aprendes? Alemán.|A2
welcher|qué / cuál (masculino nominativo)|Forma masculina en nominativo; no sirve para todos los casos.|___ Bus fährt zum Bahnhof? — Der Bus 10.|¿Qué autobús va a la estación? El 10.|A2
welches|qué / cuál (neutro nominativo o acusativo)|Aquí acompaña a Buch, neutro acusativo.|___ Buch liest du? — Dieses hier.|¿Qué libro lees? Este de aquí.|A2`;
const prepositions=`mit|con|Dativo: compañía o instrumento.|Ich fahre ___ dem Bus.|Voy en autobús. Completa con «con / mediante».|A1
ohne|sin|Acusativo.|Ich trinke Kaffee ___ Zucker.|Tomo café sin azúcar.|A1
für|para|Acusativo: destinatario o finalidad.|Das Geschenk ist ___ dich.|El regalo es para ti.|A1
gegen|contra|Acusativo; también hora aproximada.|Wir spielen ___ diese Mannschaft.|Jugamos contra este equipo.|A2
durch|a través de|Acusativo.|Wir gehen ___ den Park.|Cruzamos el parque. Usa «a través de».|A2
um|a (hora)|Acusativo; para una hora exacta: um acht Uhr.|Der Kurs beginnt ___ acht Uhr.|El curso empieza a las ocho.|A1
bis|hasta|Límite; con otra preposición, esta determina el caso: bis zum Bahnhof.|Ich bleibe ___ morgen.|Me quedo hasta mañana.|A1
aus|de / desde dentro|Dativo: origen o salida del interior.|Ich komme ___ Spanien.|Soy de España.|A1
bei|en casa de / junto a|Dativo: proximidad o lugar asociado a una persona.|Ich wohne ___ meiner Tante.|Vivo en casa de mi tía.|A1
nach|a / después de|Dativo. Destino con ciudades y países sin artículo.|Wir fahren ___ Berlin.|Vamos a Berlín.|A1
seit|desde / desde hace|Dativo: situación que continúa en el presente.|Ich lerne ___ einem Jahr Deutsch.|Aprendo alemán desde hace un año.|A2
von|de (procedencia)|Dativo. Von dem suele contraerse en vom.|Der Brief ist ___ meinem Vater.|La carta es de mi padre.|A1
zu|a (persona o destino)|Dativo. Zu dem → zum; zu der → zur.|Ich gehe ___ meiner Freundin.|Voy a casa de mi amiga.|A1
gegenüber|enfrente de|Dativo; puede ir antes o después del nombre.|Die Bank liegt ___ dem Bahnhof.|El banco está enfrente de la estación.|A2
in|en / dentro de|Dativo para ubicación; acusativo para destino hacia el interior. In dem → im; in das → ins.|Das Buch liegt ___ der Tasche.|El libro está dentro del bolso.|A1
an|en / junto a (contacto)|Dativo para ubicación; acusativo para destino. An dem → am; an das → ans.|Das Bild hängt ___ der Wand.|El cuadro está colgado en la pared.|A1
auf|sobre (apoyado)|Dativo para ubicación; acusativo para destino.|Das Buch liegt ___ dem Tisch.|El libro está sobre la mesa, apoyado en ella.|A1
unter|debajo de|Dativo para ubicación; acusativo para destino.|Die Katze schläft ___ dem Bett.|El gato duerme debajo de la cama.|A1
über|encima de / sobre|Dativo para ubicación; acusativo para destino; como tema de conversación, acusativo.|Die Lampe hängt ___ dem Tisch.|La lámpara cuelga encima de la mesa.|A2
vor|delante de / antes de|Dativo para ubicación; acusativo para destino. En uso temporal suele llevar dativo.|Das Auto steht ___ dem Haus.|El coche está delante de la casa.|A1
hinter|detrás de|Dativo para ubicación; acusativo para destino.|Der Garten liegt ___ dem Haus.|El jardín está detrás de la casa.|A1
neben|al lado de|Dativo para ubicación; acusativo para destino.|Ich sitze ___ meiner Schwester.|Estoy sentado al lado de mi hermana.|A1
zwischen|entre|Dativo para ubicación; acusativo para destino.|Der Stuhl steht ___ dem Tisch und dem Bett.|La silla está entre la mesa y la cama.|A2
wegen|a causa de|Genitivo en el registro estándar; el dativo es frecuente en el habla coloquial.|Das Spiel fällt ___ des Regens aus.|El partido se cancela a causa de la lluvia.|B1
trotz|a pesar de|Genitivo en el registro estándar.|Wir gehen ___ des Regens spazieren.|Paseamos a pesar de la lluvia.|B1
während|durante|Genitivo cuando funciona como preposición; también existe como conjunción.|___ des Unterrichts bleibt das Handy aus.|Durante la clase, el móvil permanece apagado.|B1`;
const parse=(raw,kind)=>raw.split('\n').map((line,i)=>{const [de,es,note,sentence,translation,level]=line.split('|');return {id:kind+'-'+i,de,es,note,sentence,translation,level};});
window.DeVocabularyTopics={opposites:opposites.split('\n').map((line,i)=>{const [de,es,answer,meaning]=line.split('|');return {id:'opposite-'+i,de,es,answer,meaning,level:i<30?'A1':'A2',note:'Contraste en el sentido indicado; las formas se muestran sin terminaciones de concordancia.'};}),questions:parse(questions,'question'),prepositions:parse(prepositions,'preposition')};
})();
