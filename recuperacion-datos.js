(() => {
 const items=[];
 for(const [source,topic] of [[window.GRAMMAIRE,'Gramática'],[window.PREPOSITIONS,'Preposiciones']]) for(const r of source)for(const q of r.exercises)items.push({id:topic+'-'+q.id,topic,level:r.level,type:'gap',stem:q.stem,es:q.es,cue:q.cue,answers:[[q.answer,...(q.alternatives||[]),...(r.id==='pendant'?['durant']:[])]],note:r.formula+'. '+r.note});
 for(const q of window.QUESTIONS_FR)items.push({id:q.id,topic:'Preguntas',level:'A2',type:'gap',stem:q.stem,es:q.es,cue:'Completa la pregunta para obtener esta respuesta: '+q.reply,answers:[[q.answer]],note:'Pregunta modelo: '+q.stem.replace('_____',q.answer)+ ' Respuesta: '+q.reply});
 const multi=`Je vais _____ cinéma _____ mes amis.|au|avec|Voy al cine con mis amigos.|à + le se contrae en au; avec expresa compañía.
Elle habite _____ France _____ 2020.|en|depuis|Vive en Francia desde 2020.|En con país femenino; depuis introduce el inicio de una situación que continúa.
Nous revenons _____ marché _____ pied.|du|à|Volvemos del mercado a pie.|de + le → du; à pied es una expresión fija.
Il est assis _____ Léa _____ Paul.|entre|et|Está sentado entre Léa y Paul.|Entre se combina aquí con dos referencias unidas por et.
_____ vas-tu ? — Je vais _____ Paris.|Où|à|¿Adónde vas? — Voy a París.|Où pregunta por un lugar; à precede a una ciudad.
_____ viens-tu ? — Je viens _____ Madrid.|D’où|de|¿De dónde vienes? — Vengo de Madrid.|D’où pregunta por la procedencia; de indica el origen.
_____ parles-tu ? — Je parle _____ ma sœur.|À qui|à|¿A quién hablas? — Hablo a mi hermana.|Parler à quelqu’un: la preposición permanece en la pregunta.
Je ne bois _____ _____ café.|pas|de|No bebo café.|En esta negación, du café pasa a de café.
Elle a _____ ce travail _____ deux heures.|fini|en|Ha terminado este trabajo en dos horas. Usa finir.|Passé composé: avoir + fini; en expresa el tiempo necesario para terminar.
Nous _____ _____ à la gare demain.|allons|aller|Vamos a ir a la estación mañana. Usa el futuro próximo de aller.|Aller en presente + infinitivo, incluso si el infinitivo también es aller.
_____ heure est-il ? — Il est trois _____.|Quelle|heures|¿Qué hora es? — Son las tres.|Quelle concuerda con heure; trois heures lleva plural.
Le livre est _____ la table, pas _____ la chaise.|sur|sous|El libro está sobre la mesa, no debajo de la silla.|Sur y sous expresan posiciones distintas.`;
 multi.split('\n').forEach((line,i)=>{const [stem,a,b,es,note]=line.split('|');items.push({id:'mix-'+i,topic:'Combinaciones',level:'A2',type:'multi',stem,es,note,cue:'Completa los dos huecos. Sigue el sentido de la traducción.',answers:[[a],[b]]});});
 const repairs=`Je vais à le cinéma.|Je vais au cinéma.|Voy al cine.|Contrae à + le.|à + le → au.
Il revient de le marché.|Il revient du marché.|Vuelve del mercado.|Contrae de + le.|de + le → du.
Elle parle à les enfants.|Elle parle aux enfants.|Habla a los niños.|Contrae à + les.|à + les → aux.
C’est le livre de les enfants.|C’est le livre des enfants.|Es el libro de los niños.|Contrae de + les.|de + les → des.
J’habite à France.|J’habite en France.|Vivo en Francia.|Corrige la preposición del país.|Con France se usa en.
Je vais dans le médecin.|Je vais chez le médecin.|Voy al médico.|Corrige la preposición del profesional.|Chez se usa con personas y profesionales.
Je travaille ici pendant 2020.|Je travaille ici depuis 2020.|Trabajo aquí desde 2020.|Corrige la preposición temporal.|Depuis introduce el punto inicial de una situación que continúa.
Je reviendrai depuis deux jours.|Je reviendrai dans deux jours.|Volveré dentro de dos días.|Corrige la preposición temporal.|Dans + duración indica cuánto falta.
Quel heure est-il ?|Quelle heure est-il ?|¿Qué hora es?|Corrige la concordancia del interrogativo.|Heure es femenino singular: quelle.
Je ne bois pas du café.|Je ne bois pas de café.|No bebo café.|Expresa una negación neutra, sin contraste; cambia el artículo.|En la negación neutra du pasa a de. Con contraste pueden existir otras construcciones.
Nous allons mangeons.|Nous allons manger.|Vamos a comer.|Corrige el segundo verbo del futuro próximo.|Aller conjugado + infinitivo.
Tu finis ? — Oui, je finir.|Tu finis ? — Oui, je finis.|¿Terminas? — Sí, termino.|Corrige la respuesta en presente de finir.|Finir: je finis, tu finis, il finit.`;
 repairs.split('\n').forEach((line,i)=>{const [stem,a,es,cue,note]=line.split('|');items.push({id:'repair-'+i,topic:'Corrección de errores',level:'A2',type:'repair',stem,es,cue:cue+' Reescribe la frase completa cambiando solo lo indicado.',note,answers:[[a]]});});
 window.RECALL_BANK=items;
})();
