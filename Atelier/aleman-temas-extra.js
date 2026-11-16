(() => {
const D=window.DeVocabularyTopics;
const pairs=`dick|grueso|dünn|fino
hart|duro|weich|blando
süß|dulce|bitter|amargo
frisch|fresco (alimento)|verdorben|estropeado
wach|despierto|schlafend|dormido
lebendig|vivo|tot|muerto
mutig|valiente|ängstlich|miedoso
ehrlich|honesto|unehrlich|deshonesto
geduldig|paciente|ungeduldig|impaciente
fleißig|aplicado|faul|perezoso
ordentlich|ordenado|unordentlich|desordenado
nützlich|útil|nutzlos|inútil
sicher|seguro|gefährlich|peligroso
öffentlich|público|privat|privado
gleich|igual|verschieden|diferente
positiv|positivo|negativ|negativo
anwesend|presente|abwesend|ausente
freiwillig|voluntario|unfreiwillig|involuntario
innerhalb|dentro de (límite)|außerhalb|fuera de (límite)
vorwärts|hacia delante|rückwärts|hacia atrás`;
pairs.split('\n').forEach((r,i)=>{const [de,es,answer,meaning]=r.split('|');D.opposites.push({id:'opposite-extra-'+i,de,es,answer,meaning,level:i<10?'A2':'B1',note:'Practica el contraste en el sentido indicado. Las formas se muestran sin concordancia.'});});
const more={questions:`wer|___ hat angerufen? — Mein Vater.|¿Quién ha llamado? Mi padre.
wen|___ besucht ihr? — Unsere Oma.|¿A quién visitáis? A nuestra abuela.
wem|___ gehört das Fahrrad? — Meiner Schwester.|¿A quién pertenece la bicicleta? A mi hermana.
wessen|___ Schlüssel liegt hier? — Pauls Schlüssel.|¿De quién es la llave que está aquí? De Paul.
was|___ möchtest du trinken? — Wasser.|¿Qué quieres beber? Agua.
wann|___ hast du Geburtstag? — Im Mai.|¿Cuándo es tu cumpleaños? En mayo.
wo|___ ist mein Handy? — Auf dem Tisch.|¿Dónde está mi móvil? Sobre la mesa.
wohin|___ gehst du? — In die Bibliothek.|¿Adónde vas? A la biblioteca.
woher|___ kommt dieser Käse? — Aus Frankreich.|¿De dónde viene este queso? De Francia.
wie|___ heißt deine Schwester? — Lea.|¿Cómo se llama tu hermana? Lea.
warum|___ lernst du Deutsch? — Weil ich in Berlin arbeiten möchte.|¿Por qué aprendes alemán? Porque quiero trabajar en Berlín.
wie viel|___ kostet das Ticket? — Zehn Euro.|¿Cuánto cuesta el billete? Diez euros.
wie viele|___ Kinder hat sie? — Zwei.|¿Cuántos hijos tiene ella? Dos.
wie lange|___ bleibst du hier? — Eine Woche.|¿Cuánto tiempo te quedas aquí? Una semana.
wie oft|___ liest du? — Jeden Abend.|¿Con qué frecuencia lees? Cada noche.
welche|___ Tasche gehört dir? — Die rote.|¿Qué bolso es tuyo? El rojo. Femenino nominativo.
welcher|___ Zug fährt nach Hamburg? — Der ICE 800.|¿Qué tren va a Hamburgo? El ICE 800.
welches|___ Kleid gefällt dir? — Das blaue.|¿Qué vestido te gusta? El azul. Neutro nominativo.`,prepositions:`mit|Sie schreibt ___ einem Bleistift.|Escribe con un lápiz.
ohne|Er geht ___ seine Jacke hinaus.|Sale sin su chaqueta.
für|Ich koche ___ meine Freunde.|Cocino para mis amigos.
gegen|Der Ball fliegt ___ die Wand.|La pelota choca contra la pared.
durch|Wir fahren ___ einen Tunnel.|Pasamos a través de un túnel.
um|Wir treffen uns ___ neun Uhr.|Nos vemos a las nueve.
bis|Die Bibliothek ist ___ Montag geschlossen.|La biblioteca está cerrada hasta el lunes.
aus|Sie nimmt das Buch ___ der Tasche.|Saca el libro del interior del bolso.
bei|Ich arbeite ___ einer kleinen Firma.|Trabajo en una empresa pequeña. Usa bei.
nach|___ dem Essen gehen wir spazieren.|Después de comer, vamos a pasear.
seit|Er wohnt ___ zwei Monaten hier.|Vive aquí desde hace dos meses.
von|Das ist ein Foto ___ meiner Mutter.|Es una foto de mi madre. Usa von.
zu|Wir gehen ___ unseren Freunden.|Vamos a casa de nuestros amigos.
gegenüber|Das Café liegt ___ der Schule.|La cafetería está enfrente de la escuela.
in|Wir gehen ___ den Garten.|Entramos en el jardín. Destino hacia el interior.
an|Ich hänge das Bild ___ die Wand.|Cuelgo el cuadro en la pared. Destino con contacto.
auf|Sie stellt die Tasse ___ den Tisch.|Coloca la taza sobre la mesa. Destino y apoyo.
unter|Der Hund läuft ___ das Bett.|El perro se mete debajo de la cama. Destino.
über|Die Brücke führt ___ den Fluss.|El puente cruza por encima del río. Usa über.
vor|Wir warten ___ der Tür.|Esperamos delante de la puerta.
hinter|Er stellt das Fahrrad ___ das Haus.|Coloca la bicicleta detrás de la casa. Destino.
neben|Sie setzt sich ___ ihren Bruder.|Se sienta al lado de su hermano. Destino.
zwischen|Ich lege den Brief ___ die Bücher.|Pongo la carta entre los libros. Destino.
wegen|___ des Schnees fährt der Bus nicht.|A causa de la nieve, el autobús no circula.
trotz|___ des Lärms kann ich schlafen.|A pesar del ruido, puedo dormir.
während|___ der Pause trinken wir Kaffee.|Durante la pausa, tomamos café.`};
for(const [key,raw] of Object.entries(more))raw.split('\n').forEach((r,i)=>{const [de,sentence,translation]=r.split('|'),base=D[key].find(w=>w.de===de);D[key].push({...base,id:key+'-extra-'+i,sentence,translation,note:de==='welche'?'Aquí: welche Tasche, femenino nominativo. Welch- cambia según género, número y caso.':de==='welches'?'Aquí: welches Kleid, neutro nominativo; el vestido es el sujeto de gefallen.':base.note});});
})();
(() => {
const D=window.DeVocabularyTopics;
const pairs=`trocken|seco|nass|mojado
sauber|limpio|schmutzig|sucio
sparsam|ahorrador|verschwenderisch|derrochador
höflich|educado|unhöflich|maleducado
aufmerksam|atento|unaufmerksam|distraído
zuverlässig|fiable|unzuverlässig|poco fiable
sichtbar|visible|unsichtbar|invisible
wahrscheinlich|probable|unwahrscheinlich|improbable
notwendig|necesario|unnötig|innecesario
oberhalb|por encima de|unterhalb|por debajo de`;
pairs.split('\n').forEach((r,i)=>{const [de,es,answer,meaning]=r.split('|');if(!D.opposites.some(w=>w.de===de))D.opposites.push({id:'opposite-v30-'+i,de,es,answer,meaning,level:i<2?'A1':'B1',note:'Relaciona los dos significados opuestos.'});});
const more={questions:`wer|___ öffnet das Fenster? — Der Lehrer.|¿Quién abre la ventana? El profesor.
wen|___ ruft Anna an? — Ihren Bruder.|¿A quién llama Anna? A su hermano.
wem|___ hilft der Arzt? — Dem Kind.|¿A quién ayuda el médico? Al niño.
wessen|___ Mantel ist das? — Der Mantel meiner Mutter.|¿De quién es ese abrigo? De mi madre.
was|___ fehlt in der Suppe? — Salz.|¿Qué falta en la sopa? Sal.
wann|___ beginnt der Film? — Um acht Uhr.|¿Cuándo empieza la película? A las ocho.
wo|___ liegt Hamburg? — In Norddeutschland.|¿Dónde está Hamburgo? En el norte de Alemania.
wohin|___ fährt dieser Zug? — Nach München.|¿Adónde va este tren? A Múnich.
woher|___ kommen die Gäste? — Aus Österreich.|¿De dónde vienen los invitados? De Austria.
wie|___ geht es dir? — Sehr gut.|¿Cómo estás? Muy bien.
warum|___ trägst du eine Jacke? — Weil es kalt ist.|¿Por qué llevas chaqueta? Porque hace frío.
wie viel|___ kostet die Zeitung? — Zwei Euro.|¿Cuánto cuesta el periódico? Dos euros.`,prepositions:`mit|Ich schreibe ___ einem Bleistift.|Escribo con un lápiz.
für|Das Geschenk ist ___ meine Schwester.|El regalo es para mi hermana.
ohne|Er trinkt Kaffee ___ Zucker.|Bebe café sin azúcar.
aus|Dieser Tisch ist ___ Holz.|Esta mesa es de madera. Indica el material.
bei|Am Wochenende bin ich ___ meinen Eltern.|El fin de semana estoy en casa de mis padres.
zu|Ich gehe ___ meiner Ärztin.|Voy a mi médica.
nach|Wir fliegen ___ Spanien.|Volamos a España.
seit|Sie wohnt ___ einem Jahr hier.|Vive aquí desde hace un año.
durch|Wir gehen ___ den Tunnel.|Caminamos a través del túnel.
gegen|Das Auto fährt ___ einen Baum.|El coche choca contra un árbol.
trotz|___ des Regens gehen wir spazieren.|A pesar de la lluvia, salimos a pasear.
während|___ des Unterrichts bleiben die Handys aus.|Durante la clase, los móviles permanecen apagados.`};
for(const [key,raw] of Object.entries(more))raw.split('\n').forEach((r,i)=>{const [de,sentence,translation]=r.split('|'),base=D[key].find(w=>w.de===de);if(!base)throw Error('Falta '+de);D[key].push({...base,id:key+'-v30-'+i,sentence,translation});});
})();
