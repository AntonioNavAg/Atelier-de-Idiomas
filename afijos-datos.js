/* Ejemplos seleccionados: no combinar afijos y bases de forma arbitraria. */
window.AffixLessons={fr:[],de:[]};
(() => {
const rows={fr:[
['prefix','re-','A2','Repetición','Suele indicar volver a hacer algo. Existen variantes ré- y r-; aprende la forma de cada palabra.','lire|relire|volver a leer','faire|refaire|volver a hacer'],
['prefix','dé-','A2','Acción inversa','Puede expresar inversión o separación; no sirve para negar cualquier verbo.','faire|défaire|deshacer','brancher|débrancher|desenchufar'],
['prefix','in-','B1','Negación','En estos adjetivos significa «no». Otras bases requieren im-, il- o ir-.','visible|invisible|invisible','juste|injuste|injusto'],
['prefix','im-','B1','Negación','Variante de in- ante ciertas consonantes, como p. No todos los contrarios se forman con un prefijo.','possible|impossible|imposible','patient|impatient|impaciente'],
['prefix','mal-','A2','De manera incorrecta','Expresa una valoración negativa o una acción mal realizada.','heureux|malheureux|infeliz','honnête|malhonnête|deshonesto'],
['prefix','pré-','B1','Anterioridad','Sitúa algo antes en el tiempo.','histoire|préhistoire|prehistoria','scolaire|préscolaire|preescolar'],
['suffix','-ment','A2','Adverbios de manera','A menudo se añade a la forma femenina del adjetivo: lente → lentement. Hay otros modelos y excepciones.','lente|lentement|lentamente','douce|doucement|suavemente'],
['suffix','-able','B1','Posibilidad','Forma adjetivos que pueden expresar que algo se puede hacer. Se usa una base verbal, a veces modificada.','laver|lavable|lavable','accepter|acceptable|aceptable'],
['suffix','-eur','A2','Persona que realiza una actividad','Estos ejemplos forman nombres de personas. El femenino puede ser -euse o -rice, según la palabra.','chanter|chanteur|cantante masculino','vendre|vendeur|vendedor'],
['suffix','-euse','A2','Persona que realiza una actividad','En estos ejemplos designa una mujer. No es el femenino de todos los nombres en -eur.','chanter|chanteuse|cantante femenina','vendre|vendeuse|vendedora'],
['suffix','-ité','B1','Cualidad abstracta','Forma sustantivos femeninos; la base puede cambiar. Aprende la palabra completa y su artículo.','active|activité|actividad (une activité)','possible|possibilité|posibilidad (une possibilité)'],
['suffix','-age','B1','Acción o resultado','Estos derivados son masculinos. No deduzcas que toda palabra que termina en -age lo sea: une plage es otra palabra.','laver|lavage|lavado (un lavage)','jardiner|jardinage|jardinería (le jardinage)']
],de:[
['prefix','un-','A2','Negación','Forma el contrario de muchos adjetivos, pero no de todos.','glücklich|unglücklich|infeliz','bekannt|unbekannt|desconocido'],
['prefix','auf-','A2','Apertura o movimiento hacia arriba','En estos verbos es separable: Ich mache die Tür auf. El significado depende del verbo.','machen|aufmachen|abrir','stehen|aufstehen|levantarse'],
['prefix','an-','A2','Contacto o inicio','En estos ejemplos es separable: Ich rufe dich an. No tiene una única traducción.','rufen|anrufen|llamar por teléfono','machen|anmachen|encender'],
['prefix','aus-','A2','Salida o finalización','En estos ejemplos es separable: Ich mache das Licht aus.','machen|ausmachen|apagar','packen|auspacken|desembalar'],
['prefix','be-','B1','Cambio de significado o construcción','Es inseparable y no tiene una traducción fija. Besuchen → besucht: sin ge- añadido en el participio.','suchen|besuchen|visitar','antworten|beantworten|responder a algo'],
['prefix','ver-','B1','Cambio de significado','Es inseparable. Aprende cada verbo: ver- no significa siempre error o transformación. Verkaufen → verkauft.','kaufen|verkaufen|vender','mieten|vermieten|alquilar algo a otra persona'],
['suffix','-heit','B1','Cualidad abstracta','Forma sustantivos femeninos. Los sustantivos se escriben con mayúscula: die Freiheit.','frei|Freiheit|libertad (die Freiheit)','krank|Krankheit|enfermedad (die Krankheit)'],
['suffix','-keit','B1','Cualidad abstracta','Forma sustantivos femeninos, frecuentemente desde adjetivos con ciertas terminaciones.','möglich|Möglichkeit|posibilidad (die Möglichkeit)','freundlich|Freundlichkeit|amabilidad (die Freundlichkeit)'],
['suffix','-ung','B1','Acción o resultado','Forma sustantivos femeninos a partir de bases verbales. No se añade al infinitivo completo.','wohnen|Wohnung|vivienda (die Wohnung)','rechnen|Rechnung|cuenta / factura (die Rechnung)'],
['suffix','-los','B1','Ausencia','Forma adjetivos con el sentido de «sin». Se escriben en minúscula.','Arbeit|arbeitslos|desempleado','Hoffnung|hoffnungslos|sin esperanza'],
['suffix','-bar','B1','Posibilidad','Puede expresar «que se puede…». La base verbal puede cambiar.','essen|essbar|comestible','lesen|lesbar|legible'],
['suffix','-chen','A2','Diminutivo','Forma sustantivos neutros y puede provocar umlaut: das Häuschen. El plural suele mantener la misma forma.','Haus|Häuschen|casita (das Häuschen)','Tier|Tierchen|animalito (das Tierchen)']
]};
for(const [lang,list]of Object.entries(rows))window.AffixLessons[lang]=list.map(([type,affix,level,meaning,note,...examples],i)=>({id:lang+'-affix-'+i,type,affix,level,meaning,note,examples:examples.map(row=>{const [base,word,translation]=row.split('|');return {base,word,translation};})}));
})();
