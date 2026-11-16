/* Formas no personales; excepciones explícitas y participios pasados del catálogo. */
(() => {
 function french(v){const exceptional={être:'étant',avoir:'ayant',savoir:'sachant',pleuvoir:'pleuvant',neiger:'neigeant'};const nous=v.forms.P[3];const present=exceptional[v.fr]||(nous?.endsWith('ons')?nous.slice(0,-3)+'ant':null);const weather=['falloir','pleuvoir','neiger'].includes(v.fr);return [['Infinitivo · infinitif',v.fr],['Participio pasado · participe passé',v.forms.K[0]||'No disponible'],['Participio presente · participe présent',present||'Sin forma de uso corriente'],['Gerundio · gérondif',weather?'No se propone en el uso impersonal habitual':present?'en '+present:'Sin forma de uso corriente']];}
 function german(v){return [['Infinitivo · Infinitiv',v.de],['Participio I · Partizip I',v.de==='sein'?'seiend':v.de==='tun'?'tuend':v.de+'d'],['Participio II · Partizip II',v.part]];}
 function render(id,rows,lang){const host=document.getElementById(id);host.replaceChildren();for(const [label,value] of rows){const term=document.createElement('dt'),definition=document.createElement('dd');term.textContent=label;definition.textContent=value;definition.lang=lang;host.append(term,definition);}}
 window.VerbNonFinite={french,german,render};
})();
