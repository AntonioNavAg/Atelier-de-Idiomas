/* Vocabulario editorial alemán. Plurales completos; — indica uso no contable habitual. */
(() => {
const raw=`@Personas y familia|noun|A1
m|Mann|Männer|hombre
f|Frau|Frauen|mujer
n|Kind|Kinder|niño o niña
f|Mutter|Mütter|madre
m|Vater|Väter|padre
f|Tochter|Töchter|hija
m|Sohn|Söhne|hijo
f|Schwester|Schwestern|hermana
m|Bruder|Brüder|hermano
f|Großmutter|Großmütter|abuela
m|Großvater|Großväter|abuelo
f|Familie|Familien|familia
m|Freund|Freunde|amigo
f|Freundin|Freundinnen|amiga
m|Nachbar|Nachbarn|vecino
@Casa|noun|A1
n|Haus|Häuser|casa
f|Wohnung|Wohnungen|vivienda
n|Zimmer|Zimmer|habitación
f|Küche|Küchen|cocina
n|Bad|Bäder|cuarto de baño
f|Tür|Türen|puerta
n|Fenster|Fenster|ventana
m|Tisch|Tische|mesa
m|Stuhl|Stühle|silla
n|Bett|Betten|cama
m|Schrank|Schränke|armario
n|Sofa|Sofas|sofá
f|Lampe|Lampen|lámpara
m|Schlüssel|Schlüssel|llave
m|Garten|Gärten|jardín
@Comida|noun|A1
n|Brot|Brote|pan
n|Brötchen|Brötchen|panecillo
m|Reis|—|arroz
f|Kartoffel|Kartoffeln|patata
n|Ei|Eier|huevo
m|Käse|—|queso (alimento)
f|Butter|—|mantequilla
n|Fleisch|—|carne
m|Fisch|Fische|pescado / pez
f|Suppe|Suppen|sopa
m|Salat|Salate|ensalada
m|Kuchen|Kuchen|pastel
n|Salz|—|sal (de mesa)
m|Zucker|—|azúcar
n|Frühstück|Frühstücke|desayuno
@Frutas y verduras|noun|A1
m|Apfel|Äpfel|manzana
f|Birne|Birnen|pera
f|Banane|Bananen|plátano
f|Orange|Orangen|naranja (fruta)
f|Zitrone|Zitronen|limón
f|Erdbeere|Erdbeeren|fresa
f|Kirsche|Kirschen|cereza
f|Traube|Trauben|uva
f|Tomate|Tomaten|tomate
f|Gurke|Gurken|pepino
f|Karotte|Karotten|zanahoria
f|Zwiebel|Zwiebeln|cebolla
m|Knoblauch|—|ajo (ingrediente)
n|Obst|—|fruta (conjunto)
n|Gemüse|—|verdura (conjunto)
@Bebidas y mesa|noun|A1
n|Wasser|—|agua (bebida)
f|Milch|—|leche
m|Kaffee|Kaffees|café (bebida)
m|Tee|Tees|té
m|Saft|Säfte|zumo
n|Bier|Biere|cerveza
m|Wein|Weine|vino
f|Flasche|Flaschen|botella
n|Glas|Gläser|vaso
f|Tasse|Tassen|taza
m|Teller|Teller|plato
m|Löffel|Löffel|cuchara
f|Gabel|Gabeln|tenedor
n|Messer|Messer|cuchillo
f|Serviette|Servietten|servilleta
@Ciudad y servicios|noun|A1
f|Stadt|Städte|ciudad
n|Dorf|Dörfer|pueblo
f|Straße|Straßen|calle
m|Platz|Plätze|plaza
m|Park|Parks|parque
f|Brücke|Brücken|puente
m|Bahnhof|Bahnhöfe|estación de tren
f|Haltestelle|Haltestellen|parada de transporte
m|Flughafen|Flughäfen|aeropuerto
f|Bank|Banken|banco (entidad)
f|Apotheke|Apotheken|farmacia
n|Krankenhaus|Krankenhäuser|hospital
m|Supermarkt|Supermärkte|supermercado
n|Restaurant|Restaurants|restaurante
n|Hotel|Hotels|hotel
@Transporte y viajes|noun|A1
n|Auto|Autos|coche
m|Bus|Busse|autobús
m|Zug|Züge|tren
n|Fahrrad|Fahrräder|bicicleta
n|Flugzeug|Flugzeuge|avión
n|Schiff|Schiffe|barco
n|Taxi|Taxis|taxi
f|Fahrkarte|Fahrkarten|billete de transporte
m|Koffer|Koffer|maleta
m|Rucksack|Rucksäcke|mochila
m|Reisepass|Reisepässe|pasaporte
f|Reise|Reisen|viaje
m|Urlaub|Urlaube|vacaciones (periodo)
f|Ankunft|Ankünfte|llegada
f|Abfahrt|Abfahrten|salida de un transporte
@Tiempo y calendario|noun|A1
m|Tag|Tage|día
f|Woche|Wochen|semana
m|Monat|Monate|mes
n|Jahr|Jahre|año
f|Stunde|Stunden|hora (duración)
f|Minute|Minuten|minuto
f|Sekunde|Sekunden|segundo (tiempo)
m|Morgen|Morgen|mañana (parte del día)
m|Abend|Abende|tarde-noche
f|Nacht|Nächte|noche
n|Wochenende|Wochenenden|fin de semana
m|Montag|Montage|lunes
m|Freitag|Freitage|viernes
m|Termin|Termine|cita (programada)
f|Zeit|Zeiten|tiempo
@Cuerpo|noun|A1
m|Kopf|Köpfe|cabeza
n|Gesicht|Gesichter|cara
n|Auge|Augen|ojo
n|Ohr|Ohren|oreja
f|Nase|Nasen|nariz
m|Mund|Münder|boca
m|Zahn|Zähne|diente
m|Hals|Hälse|cuello
m|Arm|Arme|brazo
f|Hand|Hände|mano
m|Finger|Finger|dedo de la mano
m|Bauch|Bäuche|vientre
m|Rücken|Rücken|espalda
n|Bein|Beine|pierna
m|Fuß|Füße|pie
@Salud|noun|A2
m|Arzt|Ärzte|médico
f|Ärztin|Ärztinnen|médica
f|Krankheit|Krankheiten|enfermedad
f|Gesundheit|—|salud
m|Schmerz|Schmerzen|dolor
n|Fieber|—|fiebre
m|Husten|—|tos
f|Erkältung|Erkältungen|resfriado
n|Medikament|Medikamente|medicamento
f|Tablette|Tabletten|comprimido
n|Rezept|Rezepte|receta (médica o culinaria)
f|Untersuchung|Untersuchungen|examen médico / investigación
f|Behandlung|Behandlungen|tratamiento
m|Notfall|Notfälle|emergencia
f|Versicherung|Versicherungen|seguro
@Ropa y compras|noun|A1
f|Hose|Hosen|pantalón
n|Hemd|Hemden|camisa
n|Kleid|Kleider|vestido
m|Rock|Röcke|falda
f|Jacke|Jacken|chaqueta
m|Mantel|Mäntel|abrigo
m|Schuh|Schuhe|zapato
f|Socke|Socken|calcetín
m|Hut|Hüte|sombrero
f|Mütze|Mützen|gorro
m|Schal|Schals|bufanda
f|Tasche|Taschen|bolso / bolsa
m|Preis|Preise|precio
f|Größe|Größen|talla / tamaño
f|Kasse|Kassen|caja (de pago)
@Estudios|noun|A1
f|Schule|Schulen|escuela
f|Universität|Universitäten|universidad
m|Lehrer|Lehrer|profesor
f|Lehrerin|Lehrerinnen|profesora
m|Schüler|Schüler|alumno escolar
f|Schülerin|Schülerinnen|alumna escolar
n|Buch|Bücher|libro
n|Heft|Hefte|cuaderno
m|Stift|Stifte|instrumento de escritura
m|Bleistift|Bleistifte|lápiz
m|Kugelschreiber|Kugelschreiber|bolígrafo
f|Prüfung|Prüfungen|examen
f|Aufgabe|Aufgaben|tarea
f|Frage|Fragen|pregunta
f|Antwort|Antworten|respuesta
@Trabajo|noun|A2
f|Arbeit|Arbeiten|trabajo
m|Beruf|Berufe|profesión
n|Büro|Büros|oficina
f|Firma|Firmen|empresa
m|Kollege|Kollegen|compañero de trabajo
f|Kollegin|Kolleginnen|compañera de trabajo
m|Chef|Chefs|jefe
f|Chefin|Chefinnen|jefa
f|Besprechung|Besprechungen|reunión de trabajo
m|Vertrag|Verträge|contrato
n|Gehalt|Gehälter|sueldo
f|Bewerbung|Bewerbungen|solicitud de empleo
f|Erfahrung|Erfahrungen|experiencia
f|Pause|Pausen|descanso
m|Kunde|Kunden|cliente (masculino)
@Naturaleza y animales|noun|A1
f|Sonne|Sonnen|sol
m|Mond|Monde|luna
m|Stern|Sterne|estrella
m|Himmel|Himmel|cielo
m|Baum|Bäume|árbol
f|Blume|Blumen|flor
m|Wald|Wälder|bosque
m|Berg|Berge|montaña
m|Fluss|Flüsse|río
n|Meer|Meere|mar
m|Hund|Hunde|perro
f|Katze|Katzen|gato
m|Vogel|Vögel|pájaro
n|Pferd|Pferde|caballo
n|Tier|Tiere|animal
@Clima y estaciones|noun|A2
n|Wetter|—|tiempo atmosférico
m|Regen|—|lluvia
m|Schnee|—|nieve
m|Wind|Winde|viento
f|Wolke|Wolken|nube
n|Gewitter|Gewitter|tormenta eléctrica
m|Nebel|—|niebla
f|Hitze|—|calor intenso
f|Kälte|—|frío (sustantivo)
f|Temperatur|Temperaturen|temperatura
m|Frühling|Frühlinge|primavera
m|Sommer|Sommer|verano
m|Herbst|Herbste|otoño
m|Winter|Winter|invierno
f|Jahreszeit|Jahreszeiten|estación del año
@Tecnología y comunicación|noun|A2
m|Computer|Computer|ordenador
n|Handy|Handys|teléfono móvil
m|Bildschirm|Bildschirme|pantalla
f|Tastatur|Tastaturen|teclado
f|Maus|Mäuse|ratón (animal o dispositivo)
n|Internet|—|internet
f|Webseite|Webseiten|página web
f|Datei|Dateien|archivo informático
n|Passwort|Passwörter|contraseña
f|Nachricht|Nachrichten|mensaje / noticia
f|E-Mail|E-Mails|correo electrónico
n|Foto|Fotos|foto
n|Video|Videos|vídeo
m|Drucker|Drucker|impresora
n|Kabel|Kabel|cable
@Sociedad e ideas|noun|B1
f|Meinung|Meinungen|opinión
f|Entscheidung|Entscheidungen|decisión
f|Möglichkeit|Möglichkeiten|posibilidad
n|Problem|Probleme|problema
f|Lösung|Lösungen|solución
m|Grund|Gründe|motivo
n|Ziel|Ziele|objetivo
m|Unterschied|Unterschiede|diferencia
f|Regel|Regeln|regla
n|Gesetz|Gesetze|ley
f|Umwelt|—|medio ambiente
f|Gesellschaft|Gesellschaften|sociedad
f|Verantwortung|—|responsabilidad
f|Freiheit|Freiheiten|libertad
f|Zukunft|—|futuro
@Adjetivos cotidianos|adjective|A1
||gut||bueno
||schlecht||malo
||groß||grande / alto (estatura)
||klein||pequeño
||alt||viejo
||jung||joven
||neu||nuevo
||schön||bonito
||hässlich||feo
||lang||largo
||kurz||corto
||schnell||rápido
||langsam||lento
||teuer||caro
||billig||barato
@Estados y cualidades|adjective|A2
||müde||cansado
||krank||enfermo
||gesund||sano
||glücklich||feliz
||traurig||triste
||hungrig||hambriento
||durstig||sediento
||warm||cálido
||kalt||frío
||heiß||caliente
||leicht||ligero / fácil
||schwer||pesado / difícil
||wichtig||importante
||richtig||correcto
||falsch||incorrecto
@Adverbios útiles|adverb|A1
||heute||hoy
||morgen||mañana (día siguiente)
||gestern||ayer
||jetzt||ahora
||später||más tarde
||früh||temprano
||hier||aquí
||dort||allí
||oben||arriba
||unten||abajo
||immer||siempre
||oft||a menudo
||manchmal||a veces
||selten||raramente
||nie||nunca
@Expresiones esenciales|expression|A1
||Hallo!||¡Hola!
||Guten Morgen!||¡Buenos días! (por la mañana)
||Guten Tag!||¡Buenos días! (saludo diurno)
||Guten Abend!||¡Buenas tardes/noches! (al llegar)
||Gute Nacht!||¡Buenas noches! (al dormir)
||Auf Wiedersehen!||¡Adiós! (formal)
||Tschüss!||¡Adiós! (informal)
||Danke!||¡Gracias!
||Bitte!||¡Por favor! / ¡De nada!
||Entschuldigung!||¡Perdón!
||Wie geht es dir?||¿Cómo estás?
||Mir geht es gut.||Estoy bien.
||Ich verstehe nicht.||No entiendo.
||Können Sie das wiederholen?||¿Puede repetirlo?
||Bis bald!||¡Hasta pronto!
@Ideas y argumentos|noun|B2
f|Voraussetzung|Voraussetzungen|requisito previo
f|Auswirkung|Auswirkungen|repercusión
m|Zusammenhang|Zusammenhänge|relación (entre hechos)
m|Standpunkt|Standpunkte|punto de vista
m|Widerspruch|Widersprüche|contradicción
f|Herausforderung|Herausforderungen|reto
f|Maßnahme|Maßnahmen|medida (actuación)
f|Nachhaltigkeit|—|sostenibilidad
f|Gerechtigkeit|—|justicia (principio)
f|Gleichberechtigung|—|igualdad de derechos
m|Fortschritt|Fortschritte|progreso
m|Rückgang|Rückgänge|descenso (tendencia)
f|Wahrnehmung|Wahrnehmungen|percepción
f|Überzeugung|Überzeugungen|convicción
f|Zuverlässigkeit|—|fiabilidad`;
let theme,type,level;const words=[];
for(const line of raw.split('\n')){if(line.startsWith('@')){[theme,type,level]=line.slice(1).split('|');continue;}let gender,de,plural,es;if(type==='noun'){[gender,de,plural,es]=line.split('|');}else {const row=line.split('|');de=row[2];es=row[4];gender='';plural='';}const article={m:'der',f:'die',n:'das'}[gender]||'';words.push({id:'de-word-'+de.normalize('NFC'),de,es,theme,type,level,gender,article,plural,note:type==='noun'?(plural==='—'?'Uso no contable habitual en este sentido; no se practica plural.':'Plural: die '+plural)+((de==='E-Mail')?' También das E-Mail en algunas regiones.':''):type==='adjective'?'Forma base. Delante de un nombre, el adjetivo puede cambiar su terminación.':''});}
window.DE_WORDS=words;
})();
