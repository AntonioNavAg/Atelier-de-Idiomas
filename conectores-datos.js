window.ConnectorLessons={fr:[],de:[]};
(() => {
const rows={fr:[
['addition','et','A1','y','Une palabras o proposiciones del mismo nivel.','Paul lit ___ Marie écrit.|et|Paul lee y Marie escribe.','Je prends du pain ___ du fromage.|et|Cojo pan y queso.'],
['contrast','mais','A1','pero','Introduce un contraste sin cambiar el orden habitual de la frase.','Il fait froid, ___ je sors.|mais|Hace frío, pero salgo.','Ce sac est beau, ___ il est cher.|mais|Este bolso es bonito, pero es caro.'],
['choice','ou','A1','o','Expresa alternativas. Ou (o) no lleva el acento de où (dónde).','Tu veux du thé ___ du café ?|ou|¿Quieres té o café?','On part lundi ___ mardi ?|ou|¿Salimos el lunes o el martes?'],
['cause','parce que','A2','porque','Introduce la causa. Se elide ante vocal: parce qu’il.','Je reste ici ___ je suis malade.|parce que|Me quedo aquí porque estoy enfermo.','Elle court ___ le bus arrive.|parce que|Corre porque llega el autobús.'],
['result','donc','A2','por lo tanto','Presenta una consecuencia o conclusión.','Il pleut, ___ je prends un parapluie.|donc|Llueve, por lo tanto cojo un paraguas.','Le magasin est fermé, ___ nous rentrons.|donc|La tienda está cerrada, por lo tanto volvemos a casa.'],
['contrast','pourtant','B1','sin embargo','Señala que el resultado contradice lo esperado.','Il est fatigué. ___, il continue.|Pourtant|Está cansado. Sin embargo, continúa.','Elle connaît la réponse. ___, elle hésite.|Pourtant|Conoce la respuesta. Sin embargo, duda.'],
['time','puis','A2','después / luego','Ordena acciones sucesivas. No es la forma de pouvoir en estos ejemplos.','Je me lève, ___ je prépare le café.|puis|Me levanto, luego preparo el café.','Nous mangeons, ___ nous sortons.|puis|Comemos, luego salimos.'],
['time','ensuite','A2','a continuación','Organiza una secuencia. Puede coincidir en sentido con puis; en estos ejercicios se aceptan ambos.','Je lis le texte. ___, je réponds.|Ensuite|Leo el texto. A continuación, respondo.','Nous visitons le musée. ___, nous déjeunons.|Ensuite|Visitamos el museo. A continuación, almorzamos.'],
['condition','si','A2','si','Introduce una condición. Con una condición futura real se usa presente tras si.','___ tu veux, on peut partir.|Si|Si quieres, podemos salir.','Je viendrai ___ je peux.|si|Vendré si puedo.'],
['time','quand','A2','cuando','Sitúa un hecho en el tiempo.','Appelle-moi ___ tu arrives.|quand|Llámame cuando llegues.','Je lis ___ je suis dans le train.|quand|Leo cuando estoy en el tren.'],
['purpose','pour','A2','para','Pour + infinitivo expresa finalidad cuando el sujeto de ambas acciones coincide.','Je travaille ___ payer mes études.|pour|Trabajo para pagar mis estudios.','Elle ouvre la fenêtre ___ aérer la pièce.|pour|Abre la ventana para ventilar la habitación.'],
['example','par exemple','A2','por ejemplo','Introduce un ejemplo, no una causa.','J’aime les fruits, ___ les pommes.|par exemple|Me gustan las frutas, por ejemplo las manzanas.','On peut faire du sport, ___ nager.|par exemple|Podemos hacer deporte, por ejemplo nadar.']
],de:[
['addition','und','A1','y','Une elementos; no envía el verbo conjugado al final.','Paul liest ___ Maria schreibt.|und|Paul lee y María escribe.','Ich kaufe Brot ___ Käse.|und|Compro pan y queso.'],
['contrast','aber','A1','pero','Contrapone dos ideas y mantiene el orden de oración principal.','Es ist kalt, ___ ich gehe hinaus.|aber|Hace frío, pero salgo.','Die Tasche ist schön, ___ sie ist teuer.|aber|El bolso es bonito, pero es caro.'],
['choice','oder','A1','o','Presenta alternativas.','Möchtest du Tee ___ Kaffee?|oder|¿Quieres té o café?','Fahren wir am Montag ___ am Dienstag?|oder|¿Vamos el lunes o el martes?'],
['cause','weil','A2','porque','Introduce una subordinada: el verbo conjugado va al final.','Ich bleibe hier, ___ ich krank bin.|weil|Me quedo aquí porque estoy enfermo.','Sie rennt, ___ der Bus kommt.|weil|Corre porque llega el autobús.'],
['cause','denn','A2','porque / pues','Da una razón con orden de oración principal: denn ich bin krank. Compáralo con weil ich krank bin.','Ich bleibe zu Hause, ___ ich bin krank.|denn|Me quedo en casa porque estoy enfermo. Usa la construcción con orden de oración principal.','Er trägt eine Jacke, ___ es ist kalt.|denn|Lleva chaqueta porque hace frío. Mantén el orden de la frase.'],
['result','deshalb','A2','por eso','Si inicia la proposición, el verbo va a continuación: deshalb bleibe ich.','Es regnet. ___ bleibe ich zu Hause.|Deshalb|Llueve. Por eso me quedo en casa.','Der Laden ist geschlossen. ___ gehen wir zurück.|Deshalb|La tienda está cerrada. Por eso volvemos.'],
['contrast','trotzdem','B1','aun así','Adverbio de contraste seguido del verbo cuando ocupa la primera posición.','Er ist müde. ___ arbeitet er weiter.|Trotzdem|Está cansado. Aun así sigue trabajando.','Es regnet. ___ gehen wir spazieren.|Trotzdem|Llueve. Aun así salimos a pasear.'],
['time','dann','A2','luego','Ordena acciones. Al principio: dann + verbo + sujeto.','Ich stehe auf. ___ mache ich Kaffee.|Dann|Me levanto. Luego preparo café.','Wir essen. ___ gehen wir ins Kino.|Dann|Comemos. Luego vamos al cine.'],
['condition','wenn','A2','si / cuando','Puede introducir una condición o una situación repetida. El verbo conjugado va al final.','___ du Zeit hast, ruf mich an.|Wenn|Si tienes tiempo, llámame.','Ich komme, ___ ich kann.|wenn|Voy si puedo.'],
['time','bevor','B1','antes de que','Introduce una subordinada con el verbo al final.','Ich esse, ___ ich zur Arbeit gehe.|bevor|Como antes de ir al trabajo.','Ruf mich an, ___ du losfährst.|bevor|Llámame antes de salir.'],
['purpose','damit','B1','para que','Introduce finalidad y permite sujetos distintos. El verbo conjugado va al final.','Ich spreche langsam, ___ du mich verstehst.|damit|Hablo despacio para que me entiendas.','Sie öffnet die Tür, ___ wir eintreten können.|damit|Abre la puerta para que podamos entrar.'],
['example','zum Beispiel','A2','por ejemplo','Introduce ejemplos. Mantén las mayúsculas del sustantivo Beispiel.','Ich mag Obst, ___ Äpfel.|zum Beispiel|Me gusta la fruta, por ejemplo las manzanas.','Wir können Sport machen, ___ schwimmen.|zum Beispiel|Podemos hacer deporte, por ejemplo nadar.']
]};
const extra={
  "fr": [
    [
      "addition",
      "de plus",
      "B1",
      "además",
      "Añade un argumento; suele ir seguido de coma al inicio.",
      "Ce vélo est solide. ___, il est léger.|De plus|Esta bicicleta es resistente. Además, es ligera.",
      "Elle parle anglais. ___, elle apprend le japonais.|De plus|Habla inglés. Además, aprende japonés."
    ],
    [
      "addition",
      "en outre",
      "B2",
      "además / asimismo",
      "Añade información en un registro más formal.",
      "Le projet est utile. ___, il crée des emplois.|En outre|El proyecto es útil. Asimismo, crea empleo.",
      "Le musée est gratuit. ___, il ouvre le dimanche.|En outre|El museo es gratuito. Además, abre los domingos."
    ],
    [
      "addition",
      "également",
      "B1",
      "también",
      "Adverbio que añade otro elemento o hecho.",
      "Je parle français et je comprends ___ l’italien.|également|Hablo francés y también entiendo italiano.",
      "Ce tarif comprend ___ le déjeuner.|également|Esta tarifa también incluye el almuerzo."
    ],
    [
      "contrast",
      "cependant",
      "B1",
      "sin embargo",
      "Introduce una reserva o contraste, frecuente en la escritura.",
      "La route est longue. ___, le paysage est magnifique.|Cependant|La carretera es larga. Sin embargo, el paisaje es magnífico.",
      "Il a étudié. ___, il reste inquiet.|Cependant|Ha estudiado. Sin embargo, sigue preocupado."
    ],
    [
      "contrast",
      "néanmoins",
      "B2",
      "no obstante",
      "Presenta algo que sigue siendo cierto a pesar de lo anterior.",
      "La tâche est difficile. ___, elle est possible.|Néanmoins|La tarea es difícil. No obstante, es posible.",
      "Il pleut. ___, le match continue.|Néanmoins|Llueve. No obstante, el partido continúa."
    ],
    [
      "contrast",
      "en revanche",
      "B1",
      "en cambio",
      "Contrapone dos aspectos, a menudo compensando uno con otro.",
      "Le studio est petit. ___, il est lumineux.|En revanche|El estudio es pequeño. En cambio, es luminoso.",
      "Je n’aime pas courir. ___, j’adore nager.|En revanche|No me gusta correr. En cambio, me encanta nadar."
    ],
    [
      "contrast",
      "bien que",
      "B2",
      "aunque",
      "Introduce una concesión y exige subjuntivo.",
      "___ le trajet soit long, nous partons à pied.|Bien que|Aunque el trayecto sea largo, salimos a pie.",
      "Elle sourit ___ la situation soit difficile.|bien que|Sonríe aunque la situación sea difícil."
    ],
    [
      "contrast",
      "même si",
      "B1",
      "aunque / incluso si",
      "Se construye con indicativo, a diferencia de bien que.",
      "Je sortirai ___ le temps est mauvais.|même si|Saldré aunque haga mal tiempo.",
      "___ tu es fatigué, écoute un instant.|Même si|Aunque estés cansado, escucha un instante."
    ],
    [
      "cause",
      "puisque",
      "B1",
      "puesto que",
      "Presenta una razón conocida o dada por evidente.",
      "___ tu es ici, aide-moi.|Puisque|Puesto que estás aquí, ayúdame.",
      "Prenons le bus ___ la voiture est en panne.|puisque|Tomemos el autobús puesto que el coche está averiado."
    ],
    [
      "cause",
      "car",
      "B1",
      "pues / porque",
      "Explica una afirmación; frecuente en lengua escrita, sin inversión.",
      "Je ferme la fenêtre, ___ il fait froid.|car|Cierro la ventana, pues hace frío.",
      "Elle rentre tôt, ___ elle est fatiguée.|car|Vuelve temprano, pues está cansada."
    ],
    [
      "cause",
      "grâce à",
      "A2",
      "gracias a",
      "Introduce una causa generalmente favorable y va seguido de un nombre o pronombre.",
      "J’ai réussi ___ ton aide.|grâce à|Lo he conseguido gracias a tu ayuda.",
      "Nous gagnons du temps ___ ce logiciel.|grâce à|Ahorramos tiempo gracias a este programa."
    ],
    [
      "cause",
      "à cause de",
      "A2",
      "a causa de",
      "Introduce una causa, a menudo negativa; se construye con un nombre.",
      "Le train est en retard ___ la neige.|à cause de|El tren lleva retraso a causa de la nieve.",
      "Je dors mal ___ ce bruit.|à cause de|Duermo mal a causa de este ruido."
    ],
    [
      "result",
      "par conséquent",
      "B2",
      "por consiguiente",
      "Introduce una consecuencia lógica en un registro formal.",
      "La salle est pleine. ___, nous attendons dehors.|Par conséquent|La sala está llena. Por consiguiente, esperamos fuera.",
      "Le pont est fermé. ___, nous changeons de route.|Par conséquent|El puente está cerrado. Por consiguiente, cambiamos de ruta."
    ],
    [
      "result",
      "c’est pourquoi",
      "B1",
      "por eso / por esa razón",
      "Enlaza una causa ya expresada con su consecuencia.",
      "J’aime les langues. ___ je voyage souvent.|C’est pourquoi|Me gustan los idiomas. Por eso viajo a menudo.",
      "Elle est malade. ___ elle reste au lit.|C’est pourquoi|Está enferma. Por eso se queda en cama."
    ],
    [
      "time",
      "d’abord",
      "A2",
      "primero / en primer lugar",
      "Presenta la primera etapa de una secuencia.",
      "___, lis la consigne.|D’abord|Primero, lee la consigna.",
      "Je voudrais ___ visiter le centre.|d’abord|Primero quisiera visitar el centro."
    ],
    [
      "time",
      "enfin",
      "A2",
      "por último / finalmente",
      "Introduce la última etapa; también puede expresar alivio.",
      "Nous visitons le musée, puis le parc. ___, nous rentrons.|Enfin|Visitamos el museo y luego el parque. Por último, volvemos.",
      "Coupez les légumes, faites-les cuire et, ___, servez.|enfin|Cortad las verduras, cocinadlas y, por último, servid."
    ],
    [
      "time",
      "pendant que",
      "B1",
      "mientras",
      "Une acciones simultáneas; normalmente se usa indicativo.",
      "Je cuisine ___ tu lis.|pendant que|Cocino mientras tú lees.",
      "___ Marie travaille, Paul prépare le repas.|Pendant que|Mientras Marie trabaja, Paul prepara la comida."
    ],
    [
      "time",
      "dès que",
      "B1",
      "en cuanto",
      "Marca el inicio inmediato de otra acción; con referencia futura puede llevar futuro.",
      "Appelle-moi ___ tu arriveras.|dès que|Llámame en cuanto llegues.",
      "___ le soleil se lève, les oiseaux chantent.|Dès que|En cuanto sale el sol, los pájaros cantan."
    ],
    [
      "condition",
      "à condition que",
      "B2",
      "a condición de que",
      "Introduce una condición y exige subjuntivo.",
      "Tu peux venir ___ tu sois à l’heure.|à condition que|Puedes venir a condición de que seas puntual.",
      "Nous partirons ___ le temps soit meilleur.|à condition que|Saldremos a condición de que mejore el tiempo."
    ],
    [
      "purpose",
      "afin de",
      "B1",
      "para / con el fin de",
      "Va seguido de infinitivo con el mismo sujeto; más formal que pour.",
      "Je révise ___ réussir mon examen.|afin de|Repaso con el fin de aprobar mi examen.",
      "Nous partons tôt ___ profiter de la journée.|afin de|Salimos temprano para aprovechar el día."
    ],
    [
      "purpose",
      "pour que",
      "B1",
      "para que",
      "Introduce finalidad y exige subjuntivo; permite sujetos distintos.",
      "Je parle lentement ___ tu comprennes.|pour que|Hablo despacio para que entiendas.",
      "Il ouvre la porte ___ nous puissions entrer.|pour que|Abre la puerta para que podamos entrar."
    ],
    [
      "example",
      "c’est-à-dire",
      "B1",
      "es decir",
      "Reformula o precisa una idea.",
      "Il est bilingue, ___ qu’il parle deux langues.|c’est-à-dire|Es bilingüe, es decir, habla dos idiomas.",
      "Rendez-vous à midi, ___ à douze heures.|c’est-à-dire|Nos vemos a mediodía, es decir, a las doce."
    ],
    [
      "example",
      "notamment",
      "B2",
      "en particular / especialmente",
      "Destaca ejemplos dentro de un conjunto, sin presentar una lista exhaustiva.",
      "Il aime les arts, ___ la peinture.|notamment|Le gustan las artes, en particular la pintura.",
      "Plusieurs villes participent, ___ Lyon et Lille.|notamment|Participan varias ciudades, en particular Lyon y Lille."
    ],
    [
      "contrast",
      "au contraire",
      "B1",
      "al contrario",
      "Rechaza una idea y presenta la opuesta.",
      "Ce film n’est pas ennuyeux. ___, il est passionnant.|Au contraire|Esta película no es aburrida. Al contrario, es apasionante.",
      "Je ne suis pas fâché. ___, je suis ravi.|Au contraire|No estoy enfadado. Al contrario, estoy encantado."
    ]
  ],
  "de": [
    [
      "addition",
      "außerdem",
      "A2",
      "además",
      "Al comienzo ocupa la primera posición: después va el verbo conjugado.",
      "Das Fahrrad ist günstig. ___ ist es leicht.|Außerdem|La bicicleta es barata. Además, es ligera.",
      "Sie spricht Englisch. ___ lernt sie Spanisch.|Außerdem|Habla inglés. Además, aprende español."
    ],
    [
      "addition",
      "ebenfalls",
      "B1",
      "también / igualmente",
      "Añade un elemento paralelo; puede aparecer dentro de la oración.",
      "Ich komme ___.|ebenfalls|Yo también voy.",
      "Maria spricht ___ Französisch.|ebenfalls|María también habla francés."
    ],
    [
      "addition",
      "darüber hinaus",
      "B2",
      "además / más allá de eso",
      "Añade un argumento en un registro cuidado; al inicio precede al verbo.",
      "Der Kurs ist kostenlos. ___ gibt es Lernmaterial.|Darüber hinaus|El curso es gratuito. Además, hay material de estudio.",
      "Das Haus ist groß. ___ hat es einen Garten.|Darüber hinaus|La casa es grande. Además, tiene jardín."
    ],
    [
      "contrast",
      "jedoch",
      "B1",
      "sin embargo",
      "Adverbio de contraste: en primera posición le sigue el verbo.",
      "Der Weg ist lang. ___ ist die Aussicht schön.|Jedoch|El camino es largo. Sin embargo, la vista es bonita.",
      "Ich möchte kommen. ___ habe ich keine Zeit.|Jedoch|Quiero ir. Sin embargo, no tengo tiempo."
    ],
    [
      "contrast",
      "allerdings",
      "B1",
      "sin embargo / eso sí",
      "Introduce una reserva o matización de lo anterior.",
      "Die Wohnung ist schön. ___ ist sie teuer.|Allerdings|El piso es bonito. Eso sí, es caro.",
      "Er hilft gern. ___ braucht er Zeit.|Allerdings|Ayuda con gusto. Eso sí, necesita tiempo."
    ],
    [
      "contrast",
      "dagegen",
      "B1",
      "en cambio",
      "Contrasta dos personas, hechos o aspectos.",
      "Paul mag Tee. Maria ___ trinkt lieber Kaffee.|dagegen|A Paul le gusta el té. María, en cambio, prefiere café.",
      "Der Winter ist kalt. Der Sommer ___ ist warm.|dagegen|El invierno es frío. El verano, en cambio, es cálido."
    ],
    [
      "contrast",
      "obwohl",
      "B1",
      "aunque",
      "Introduce una subordinada concesiva con el verbo conjugado al final.",
      "Ich gehe spazieren, ___ es regnet.|obwohl|Salgo a pasear aunque llueve.",
      "___ er müde ist, arbeitet er weiter.|Obwohl|Aunque está cansado, sigue trabajando."
    ],
    [
      "contrast",
      "sondern",
      "A2",
      "sino",
      "Corrige una alternativa negada previamente con nicht o kein.",
      "Ich trinke keinen Kaffee, ___ Tee.|sondern|No tomo café, sino té.",
      "Sie kommt nicht heute, ___ morgen.|sondern|No viene hoy, sino mañana."
    ],
    [
      "cause",
      "da",
      "B1",
      "puesto que / como",
      "Introduce una razón, a menudo ya conocida, con verbo al final.",
      "___ ich krank bin, bleibe ich zu Hause.|Da|Como estoy enfermo, me quedo en casa.",
      "Wir gehen zu Fuß, ___ der Bus nicht fährt.|da|Vamos a pie puesto que no circula el autobús."
    ],
    [
      "cause",
      "nämlich",
      "B1",
      "es que / pues",
      "Introduce una explicación dentro de la segunda oración; no ocupa aquí la posición inicial.",
      "Ich bleibe hier. Ich bin ___ müde.|nämlich|Me quedo aquí. Es que estoy cansado.",
      "Sie lernt viel. Sie hat ___ morgen eine Prüfung.|nämlich|Estudia mucho. Es que mañana tiene un examen."
    ],
    [
      "result",
      "deswegen",
      "A2",
      "por eso",
      "Introduce una consecuencia; si va primero, le sigue el verbo.",
      "Es ist spät. ___ gehen wir nach Hause.|Deswegen|Es tarde. Por eso nos vamos a casa.",
      "Ich habe Hunger. ___ koche ich jetzt.|Deswegen|Tengo hambre. Por eso cocino ahora."
    ],
    [
      "result",
      "daher",
      "B1",
      "por ello",
      "Adverbio consecutivo: en primera posición va seguido del verbo.",
      "Der Zug fällt aus. ___ nehmen wir den Bus.|Daher|El tren se cancela. Por ello tomamos el autobús.",
      "Die Straße ist gesperrt. ___ fahren wir anders.|Daher|La calle está cortada. Por ello vamos por otro camino."
    ],
    [
      "result",
      "folglich",
      "B2",
      "por consiguiente",
      "Presenta una conclusión lógica, frecuente en registros formales.",
      "Alle Plätze sind besetzt. ___ müssen wir warten.|Folglich|Todas las plazas están ocupadas. Por consiguiente, tenemos que esperar.",
      "Die Frist ist abgelaufen. ___ ist keine Anmeldung mehr möglich.|Folglich|El plazo ha vencido. Por consiguiente, ya no es posible inscribirse."
    ],
    [
      "time",
      "zuerst",
      "A2",
      "primero",
      "Ordena la primera etapa; al inicio va seguido del verbo.",
      "___ lese ich die Aufgabe.|Zuerst|Primero leo el enunciado.",
      "Wir müssen ___ die Tickets kaufen.|zuerst|Primero tenemos que comprar los billetes."
    ],
    [
      "time",
      "danach",
      "A2",
      "después",
      "Se refiere a un momento posterior a lo que se acaba de mencionar.",
      "Wir essen. ___ gehen wir ins Kino.|Danach|Comemos. Después vamos al cine.",
      "Ich dusche. ___ frühstücke ich.|Danach|Me ducho. Después desayuno."
    ],
    [
      "time",
      "schließlich",
      "B1",
      "finalmente / por último",
      "Aquí introduce la última etapa; en otros contextos puede justificar algo.",
      "Wir suchen lange. ___ finden wir den Schlüssel.|Schließlich|Buscamos mucho tiempo. Finalmente encontramos la llave.",
      "Er packt, ruft ein Taxi und fährt ___ zum Bahnhof.|schließlich|Hace la maleta, llama a un taxi y por último va a la estación."
    ],
    [
      "time",
      "während",
      "B1",
      "mientras",
      "Como conjunción introduce simultaneidad y lleva el verbo al final.",
      "Ich koche, ___ du liest.|während|Cocino mientras tú lees.",
      "___ sie arbeitet, hört sie Musik.|Während|Mientras trabaja, escucha música."
    ],
    [
      "time",
      "nachdem",
      "B1",
      "después de que",
      "Introduce una acción anterior a la principal; aquí pluscuamperfecto antes de pasado.",
      "___ er gegessen hatte, ging er spazieren.|Nachdem|Después de haber comido, salió a pasear.",
      "Sie rief an, ___ sie angekommen war.|nachdem|Llamó después de haber llegado."
    ],
    [
      "time",
      "sobald",
      "B1",
      "en cuanto",
      "Marca una sucesión inmediata; el verbo de la subordinada va al final.",
      "Ruf mich an, ___ du ankommst.|sobald|Llámame en cuanto llegues.",
      "___ ich Zeit habe, besuche ich dich.|Sobald|En cuanto tenga tiempo, te visitaré."
    ],
    [
      "time",
      "bis",
      "A2",
      "hasta que",
      "Como conjunción marca un límite temporal y lleva verbo al final.",
      "Ich warte, ___ du fertig bist.|bis|Espero hasta que estés listo.",
      "Bleib hier, ___ ich zurückkomme.|bis|Quédate aquí hasta que vuelva."
    ],
    [
      "condition",
      "falls",
      "B1",
      "en caso de que / si",
      "Introduce una condición eventual con el verbo al final.",
      "___ du Hilfe brauchst, ruf mich an.|Falls|En caso de que necesites ayuda, llámame.",
      "Nimm eine Jacke mit, ___ es kalt wird.|falls|Llévate una chaqueta por si hace frío."
    ],
    [
      "condition",
      "sonst",
      "A2",
      "si no / de lo contrario",
      "Presenta lo que ocurrirá si no se cumple lo anterior; verbo en segunda posición.",
      "Beeil dich, ___ verpasst du den Bus.|sonst|Date prisa, si no perderás el autobús.",
      "Zieh eine Jacke an, ___ frierst du.|sonst|Ponte una chaqueta, si no tendrás frío."
    ],
    [
      "example",
      "das heißt",
      "B1",
      "es decir",
      "Introduce una aclaración o reformulación.",
      "Wir treffen uns mittags, ___ um zwölf Uhr.|das heißt|Nos vemos a mediodía, es decir, a las doce.",
      "Er ist zweisprachig, ___, er spricht zwei Sprachen.|das heißt|Es bilingüe, es decir, habla dos idiomas."
    ],
    [
      "example",
      "insbesondere",
      "B2",
      "en particular / especialmente",
      "Destaca un elemento dentro de un conjunto.",
      "Ich mag Kunst, ___ Malerei.|insbesondere|Me gusta el arte, en particular la pintura.",
      "Viele Städte nehmen teil, ___ Berlin und Köln.|insbesondere|Participan muchas ciudades, en particular Berlín y Colonia."
    ]
  ]
};
for(const lang of ['fr','de'])rows[lang].push(...extra[lang]);
for(const [lang,list]of Object.entries(rows))window.ConnectorLessons[lang]=list.map(([type,affix,level,meaning,note,...examples],i)=>({id:lang+'-connector-'+i,type,affix,level,meaning,note,examples:examples.map(row=>{const [base,word,translation]=row.split('|');return {base,word,translation};})}));
})();
