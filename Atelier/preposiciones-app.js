(() => {
 'use strict';
 const $=id=>document.getElementById(id),rules=window.PREPOSITIONS,byId=new Map(rules.map(r=>[r.id,r])),key='atelier-preposiciones-v1';
 const normalize=(value,strict=true)=>{const s=String(value).normalize('NFC').toLowerCase().replace(/’/g,"'").trim().replace(/\s+/g,' ').replace(/\s*'\s*/g,"'");return strict?s:s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/œ/g,'oe');};
 const full=q=>q.stem.replace('_____',q.answer).replace(/’\s+/g,'’');
 const accepted=q=>[q.answer,...(q.alternatives||[])];
 const match=(q,input,strict=true)=>accepted(q).some(a=>normalize(a,strict)===normalize(input,strict));
 const shuffle=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 let raw={};try{const value=JSON.parse(localStorage.getItem(key)||'{}');if(value&&typeof value==='object')raw=value;}catch{}
 const safe=p=>{const n=x=>Number.isSafeInteger(x)&&x>=0?x:0;return {total:n(p?.total),correct:Math.min(n(p?.correct),n(p?.total))};};
 const scores=Object.fromEntries(rules.map(r=>[r.id,safe(raw[r.id])]));
 let filtered=[],page=0,base=[],deck=[],current=null,answered=false,done=0,correct=0,goal=0,config={},previous='';
 function persist(){try{localStorage.setItem(key,JSON.stringify(scores));}catch{$('p-storage').textContent='Almacenamiento no disponible: el progreso de preposiciones dura esta sesión.';}stats();}
 function stats(){const total=Object.values(scores).reduce((a,p)=>a+p.total,0),ok=Object.values(scores).reduce((a,p)=>a+p.correct,0);$('p-stats').textContent=`Preposiciones: ${ok} / ${total} aciertos acumulados · ${Object.values(scores).filter(p=>p.total>0).length} de ${rules.length} preposiciones practicadas.`;}
 function apply(){
  const query=normalize($('p-search').value,false);filtered=rules.filter(r=>($('p-group').value==='all'||r.group===$('p-group').value)&&($('p-level').value==='all'||r.level===$('p-level').value)&&normalize(`${r.title} ${r.formula} ${r.explanation} ${r.note}`,false).includes(query));page=0;render();
 }
 function render(){
  $('p-cards').replaceChildren();$('p-count').textContent=`${filtered.length} / ${rules.length} preposiciones · ${filtered.reduce((n,r)=>n+r.exercises.length,0)} ejercicios`;$('p-start').disabled=!filtered.length;
  for(const r of filtered.slice(page*8,page*8+8)){
   const card=document.createElement('article');card.className='p-card';const meta=document.createElement('p');meta.className='word-meta';meta.textContent=`${r.group} · ${r.level}`;
   const title=document.createElement('h3');title.textContent=r.title;const formula=document.createElement('p');formula.className='p-formula';formula.lang='fr';formula.textContent=r.formula;
   const text=document.createElement('p');text.textContent=r.explanation;const note=document.createElement('p');note.className='p-note';note.textContent='Fíjate: '+r.note;
   const examples=document.createElement('div');examples.className='p-examples';for(const q of r.exercises){const fr=document.createElement('p');fr.lang='fr';fr.textContent=full(q);const es=document.createElement('p');es.className='hint';es.textContent=q.es;examples.append(fr,es);}
   const practice=document.createElement('button');practice.type='button';practice.className='small';practice.textContent='Practicar esta regla →';practice.setAttribute('aria-label',`Practicar: ${r.title}`);practice.addEventListener('click',()=>start(r.exercises));
   const progress=document.createElement('p');progress.className='hint';progress.textContent=scores[r.id].total?`${scores[r.id].correct} / ${scores[r.id].total} aciertos`:'Aún sin practicar';
   const audio=document.createElement('button');audio.type='button';audio.className='small';audio.textContent='♫ Escuchar ejemplos';audio.addEventListener('click',()=>{if(!('speechSynthesis' in window)){alert('Este navegador no admite pronunciación.');return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(r.exercises.map(full).join(' '));u.lang='fr-FR';u.rate=.85;speechSynthesis.speak(u);});card.append(meta,title,formula,text,note,examples,audio,practice,progress);$('p-cards').append(card);
  }
  if(!filtered.length){const p=document.createElement('p');p.className='empty';p.textContent='No hay preposiciones con estos filtros. Prueba otra búsqueda o limpia los filtros.';$('p-cards').append(p);}
  const pages=Math.max(1,Math.ceil(filtered.length/8));$('p-page').textContent=`Página ${page+1} de ${pages}`;$('p-prev-page').disabled=page===0;$('p-next-page').disabled=page>=pages-1;
 }
 function start(items){
  if(!items.length)return;base=[...items];deck=shuffle(base);config={mode:$('p-mode').value,help:$('p-help').checked,strict:$('p-strict').checked};goal=$('p-length').value==='free'?Infinity:Math.min(Number($('p-length').value),base.length);done=0;correct=0;previous='';
  $('p-library').hidden=true;$('p-summary').hidden=true;$('p-game').hidden=false;next();
 }
 function next(){
  if(done>=goal){summary();return;}if(!deck.length){deck=shuffle(base);if(deck.length>1&&deck[0].id===previous)[deck[0],deck[1]]=[deck[1],deck[0]];}
  current=deck.shift();previous=current.id;answered=false;const r=byId.get(current.rule);
  $('p-position').textContent=`${done+1}${goal===Infinity?' · PRÁCTICA LIBRE':' / '+goal}`;$('p-instruction').textContent=current.cue;$('p-question').textContent=current.stem;$('p-spanish').textContent=current.es;
  $('p-hint').hidden=!config.help;$('p-hint').textContent=`${r.formula}. ${r.explanation}`;
  $('p-options').hidden=config.mode!=='quiz';$('p-write').hidden=config.mode!=='write';$('p-input').value='';$('p-input').disabled=false;$('p-check').disabled=false;
  $('p-feedback').textContent='';$('p-feedback').className='v-feedback';for(const id of ['p-answer','p-explanation','p-audio','p-next'])$(id).hidden=true;$('p-reveal').hidden=false;$('p-next').textContent=done+1>=goal?'Ver resultado →':'Siguiente →';
  $('p-options').replaceChildren();if(config.mode==='quiz')for(const option of shuffle([current.answer,...current.distractors])){const b=document.createElement('button');b.textContent=option;b.lang='fr';b.addEventListener('click',()=>{if(answered)return;const ok=match(current,option,true);if(!ok)b.classList.add('wrong');finish(ok);});$('p-options').append(b);}
  if(config.mode==='write')$('p-input').focus();
 }
 function finish(ok,revealed=false){
  if(answered||!current)return;answered=true;done++;if(ok)correct++;scores[current.rule].total++;if(ok)scores[current.rule].correct++;persist();
  const r=byId.get(current.rule);$('p-feedback').className=`v-feedback ${ok?'good':'bad'}`;$('p-feedback').textContent=ok?'¡Bien hecho! Esta es la frase modelo.':revealed?'Solución consultada: repasa la regla.':'No coincide con la respuesta prevista. Revisa la regla y la frase modelo.';
  $('p-answer').textContent=full(current);$('p-answer').hidden=false;$('p-explanation').replaceChildren();for(const text of [r.formula,r.explanation,'Fíjate: '+r.note]){const p=document.createElement('p');p.textContent=text;$('p-explanation').append(p);}$('p-explanation').hidden=false;
  $('p-input').disabled=true;$('p-check').disabled=true;for(const b of $('p-options').children){b.disabled=true;if(match(current,b.textContent,true))b.classList.add('correct');}
  $('p-reveal').hidden=true;$('p-next').hidden=false;$('p-audio').hidden=false;$('p-next').focus();
 }
 function summary(){current=null;$('p-game').hidden=true;$('p-summary').hidden=false;$('p-result').textContent=`${correct} / ${done} aciertos. Puedes repasar una regla concreta o cambiar de tema.`;$('p-return').focus();}
 for(const group of [...new Set(rules.map(r=>r.group))]){const o=document.createElement('option');o.value=group;o.textContent=group;$('p-group').append(o);}
 $('p-search').addEventListener('input',apply);$('p-group').addEventListener('change',apply);$('p-level').addEventListener('change',apply);
 $('p-clear').addEventListener('click',()=>{$('p-search').value='';$('p-group').value='all';$('p-level').value='all';apply();});
 $('p-prev-page').addEventListener('click',()=>{if(page>0){page--;render();}});$('p-next-page').addEventListener('click',()=>{if((page+1)*8<filtered.length){page++;render();}});
 $('p-start').addEventListener('click',()=>start(filtered.flatMap(r=>r.exercises)));$('p-stop').addEventListener('click',summary);$('p-return').addEventListener('click',()=>{$('p-summary').hidden=true;$('p-library').hidden=false;render();$('p-start').focus();});
 $('p-next').addEventListener('click',()=>{if(answered)next();});$('p-reveal').addEventListener('click',()=>finish(false,true));
 $('p-write').addEventListener('submit',e=>{e.preventDefault();if(answered||!current)return;const text=$('p-input').value.trim();if(!text){$('p-feedback').textContent='Escribe una respuesta antes de comprobar.';return;}finish(match(current,text,config.strict));});
 $('p-audio').addEventListener('click',()=>{if(!current||!answered)return;if(!('speechSynthesis' in window)){alert('Este navegador no admite pronunciación.');return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(full(current));u.lang='fr-FR';u.rate=.85;speechSynthesis.speak(u);});
 for(const char of ['é','è','ê','à','â','î','ô','ù','û','ç','œ','’','-']){const b=document.createElement('button');b.type='button';b.textContent=char;b.setAttribute('aria-label',`Insertar ${char}`);b.addEventListener('click',()=>{const input=$('p-input');if(input.disabled)return;input.setRangeText(char,input.selectionStart,input.selectionEnd,'end');input.focus();});$('p-accents').append(b);}
 window.PrepositionsHelpers={normalize,full,match};apply();stats();
})();
