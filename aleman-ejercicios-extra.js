/* Ampliación editorial de ejercicios. Conserva los identificadores anteriores. */
(() => {
const D=window.Deutsch;let n=0;const add=(topic,stem,answer,note)=>D.exercises.push({id:'de-more-'+n++,topic,stem,answer,note});
const rows=`alphabet|En Liebe, escribe el grupo vocálico que representa /iː/.|ie|Ie suele representar una i larga.
alphabet|En Deutsch, escribe el grupo que representa /ɔʏ/.|eu|Eu y äu suelen representar /ɔʏ/.
alphabet|En Haus, escribe el diptongo que representa /aʊ/.|au|Au combina los sonidos a y u.
alphabet|Escribe la vocal con umlaut de schön.|ö|Ö no equivale a o.
alphabet|Escribe la vocal con umlaut de Mädchen.|ä|Ä es una vocal distinta de a.
alphabet|En Sport, escribe las dos letras iniciales que suenan /ʃp/.|Sp|Sp al inicio de sílaba suele pronunciarse /ʃp/.
alphabet|En Stein, escribe las dos letras iniciales que suenan /ʃt/.|St|St al inicio de sílaba suele pronunciarse /ʃt/.
alphabet|Escribe en mayúscula la letra alemana que se llama Zett.|Z|El nombre de Z es Zett; suele representar /ts/.
introduction|Guten _____! (Buenos días).|Morgen|Saludo habitual por la mañana.
introduction|Guten _____! (Buenas tardes / buen día).|Tag|Guten Tag es un saludo formal habitual.
introduction|Guten _____! (Buenas noches, al llegar).|Abend|Guten Abend se usa al saludar por la tarde-noche.
introduction|Ich _____ in Madrid. (Vivo; wohnen).|wohne|Ich + wohn- + -e.
introduction|Ich _____ dreißig Jahre alt. (Tengo treinta años).|bin|La edad se expresa con sein.
introduction|Ich spreche _____ und Deutsch. (español).|Spanisch|Los nombres de los idiomas se escriben con mayúscula.
introduction|Wie _____ du? (¿Cómo te llamas?).|heißt|Du heißt: heißen pierde la s adicional ante ß.
introduction|Freut mich, dich _____. (Me alegro de conocerte; infinitivo con zu de kennenlernen).|kennenzulernen|Zu se intercala en este verbo separable.
sentences|Wir _____ Deutsch. (aprendemos; lernen).|lernen|Wir coincide con el infinitivo en presente.
sentences|Er _____ in Bonn. (vive; wohnen).|wohnt|Er + wohn- + -t.
sentences|Sie _____ Ärztin. (Ella es médica).|ist|Sein es irregular.
sentences|Ich habe _____ Zeit. (No tengo tiempo; kein).|keine|Zeit es femenino: keine Zeit.
sentences|Ich komme heute _____. (Hoy no vengo).|nicht|Nicht niega aquí la acción.
sentences|_____ du Kaffee? (¿Bebes café?; trinken).|Trinkst|En una pregunta sí/no el verbo va primero.
sentences|Morgen _____ wir nach Berlin. (vamos; fahren).|fahren|El verbo conjugado ocupa el segundo bloque.
sentences|Ich bleibe zu Hause, weil ich krank _____. (estoy; sein).|bin|En esta subordinada con weil, el verbo conjugado va al final.`;
for(const r of rows.split('\n'))add(...r.split('|'));
// Nombres del catálogo anterior: nuevos ejercicios de artículo y plural.
for(const w of window.DE_WORDS.filter(w=>w.type==='noun').slice(0,60)){
 add('articles',`Completa el artículo definido en nominativo: _____ ${w.de} (${w.es}).`,w.article,`${w.de} es ${ {m:'masculino',f:'femenino',n:'neutro'}[w.gender] }.`);
 if(w.plural&&w.plural!=='—')add('plural',`Plural de ${w.article} ${w.de} (${w.es}): die _____.`,w.plural,`Forma de plural: die ${w.plural}. Aprende singular y plural juntos.`);
}
const people=[['Mann','Mannes','m'],['Vater','Vaters','m'],['Bruder','Bruders','m'],['Lehrer','Lehrers','m'],['Frau','Frau','f'],['Mutter','Mutter','f'],['Schwester','Schwester','f'],['Lehrerin','Lehrerin','f'],['Kind','Kindes','n'],['Mädchen','Mädchens','n']];
for(const [word,gen,gender] of people){const forms={m:['der','den','dem','des'],f:['die','die','der','der'],n:['das','das','dem','des']}[gender];const stems=[`_____ ${word} kommt heute. (Artículo definido; sujeto).`,`Ich sehe _____ ${word}. (Artículo definido; objeto de sehen).`,`Ich helfe _____ ${word}. (Artículo definido; helfen).`,`Das ist die Tasche _____ ${gen}. (Artículo definido; pertenencia).`];for(let i=0;i<4;i++)add('cases',stems[i],i===0?forms[i][0].toUpperCase()+forms[i].slice(1):forms[i],['Nominativo: sujeto de kommt.','Acusativo: objeto de sehen.','Dativo: helfen exige dativo.','Genitivo: expresa pertenencia.'][i]);}
for(const [stem,answer,note] of [
['Ich danke _____. (Te doy las gracias; pronombre du).','dir','Danken exige dativo: du → dir.'],['Ich besuche _____. (Lo visito; pronombre er).','ihn','Besuchen lleva acusativo: er → ihn.'],['Das Geschenk ist für _____. (Para nosotros; wir).','uns','Für exige acusativo.'],['Er spricht mit _____. (Con ella; sie).','ihr','Mit exige dativo.'],['Wir helfen den _____. (Niños; plural de Kind).','Kindern','Dativo plural: Kinder añade -n.'],['Ich sehe den _____. (Estudiante; Student).','Studenten','Masculino débil: -en fuera del nominativo singular.'],['Die Farbe des _____ ist blau. (Coche; Auto).','Autos','Genitivo neutro: des Autos.'],['Ich trinke einen _____ Kaffee. (Bueno; gut).','guten','Adjetivo en acusativo masculino: guten.']])add('cases',stem,answer,note);
})();
