(() => {
 'use strict';
 const $=id=>document.getElementById(id),key='atelier-relations-v1';
 const norm=(s,strict=true)=>{let text=String(s).normalize('NFC').toLowerCase().replace(/’/g,"'").trim().replace(/\s+/g,' ').replace(/\s*'\s*/g,"'");return strict?text:text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/œ/g,'oe');};
 const form=word=>word.f&&word.f!==word.fr?`${word.fr} / ${word.f}`:word.fr;
 const shuffle=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 const definitions=new Map(INTERROGATIFS.map(x=>[x.id,x]));
 let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch{}
 const cleanCounts=p=>{const valid=n=>Number.isSafeInteger(n)&&n>=0?n:0;const total=valid(p?.total);return {total,correct:Math.min(valid(p?.correct),total)};};
 const scores={opposites:cleanCounts(saved.opposites),questions:cleanCounts(saved.questions)};
 let kind='opposites',deck=[],base=[],exercise=null,done=0,correct=0,goal=0,answered=false,settings={},previous='';
 function persist(){try{const latest=JSON.parse(localStorage.getItem(key)||'{}')||{};localStorage.setItem(key,JSON.stringify({...latest,[kind]:scores[kind]}));}catch{$('q-storage').textContent='Almacenamiento no disponible: los resultados duran esta sesión.';}renderStats();}
 function renderStats(){const p=scores[kind];$('q-stats').textContent=`${kind==='opposites'?'Contrarios':'Interrogativos'}: ${p.correct} / ${p.total} aciertos acumulados. Las flashcards son una autoevaluación.`;}
 function filteredPairs(){const q=norm($('q-search').value,false);return CONTRAIRES.filter(p=>($('q-type').value==='all'||p.type===$('q-type').value)&&norm(`${p.a.fr} ${p.a.f||''} ${p.a.es} ${p.b.fr} ${p.b.f||''} ${p.b.es} ${p.theme}`,false).includes(q));}
 function pool(){return kind==='opposites'?filteredPairs():QUESTIONS_FR.filter(q=>$('q-question-filter').value==='all'||q.word===$('q-question-filter').value);}
 function refresh(){
  const entries=pool();$('q-count').textContent=kind==='opposites'?`${entries.length} / ${CONTRAIRES.length} parejas · practica el contrario en ambos sentidos.`:`${entries.length} frases disponibles · ${INTERROGATIFS.length} grupos interrogativos en la guía.`;
  $('q-start').disabled=!entries.length;renderStats();
 }
 function renderPairs(){
  $('q-pairs').replaceChildren();const pairs=filteredPairs();
  for(const pair of pairs){const card=document.createElement('article');card.className='q-pair';const meta=document.createElement('p');meta.className='word-meta';meta.textContent=`${pair.type} · ${pair.theme}`;const line=document.createElement('h3');line.lang='fr';line.textContent=`${form(pair.a)} ↔ ${form(pair.b)}`;const es=document.createElement('p');es.textContent=`${pair.a.es} ↔ ${pair.b.es}`;card.append(meta,line,es);$('q-pairs').append(card);}
  if(!pairs.length){const p=document.createElement('p');p.textContent='No hay parejas con estos filtros.';$('q-pairs').append(p);}refresh();
 }
 function renderDefinitions(){
  $('q-definitions').replaceChildren();for(const d of INTERROGATIFS.filter(x=>$('q-question-filter').value==='all'||x.id===$('q-question-filter').value)){
   const card=document.createElement('article');card.className='word-card';const h=document.createElement('h3');h.lang='fr';h.textContent=d.fr;const es=document.createElement('strong');es.textContent=d.es;const note=document.createElement('p');note.className='hint';note.textContent=d.note;const example=document.createElement('p');example.lang='fr';example.textContent=d.example;card.append(h,es,note,example);$('q-definitions').append(card);
  }refresh();
 }
 function setKind(next){
  kind=next;$('q-opposite-library').hidden=kind!=='opposites';$('q-question-library').hidden=kind!=='questions';$('q-direction-label').hidden=kind!=='opposites';
  const cardOption=[...$('q-mode').children].find(o=>o.value==='cards');if(cardOption)cardOption.disabled=kind==='questions';if(kind==='questions'&&$('q-mode').value==='cards')$('q-mode').value='quiz';
  for(const [id,type]of [['q-opposites-tab','opposites'],['q-questions-tab','questions']]){$(id).setAttribute('aria-pressed',String(kind===type));$(id).className=kind===type?'secondary':'small';}
  $('q-library').hidden=false;$('q-game').hidden=true;$('q-summary').hidden=true;exercise=null;
  if(kind==='opposites')renderPairs();else renderDefinitions();
 }
 function makeExercise(item,reverse=false){
  if(kind==='opposites'){
   const source=reverse?item.b:item.a,target=reverse?item.a:item.b;
   const answers=[target.fr,target.f].filter(Boolean);
   const wrong=CONTRAIRES.filter(p=>p.type===item.type).flatMap(p=>[p.a.fr,p.b.fr]).filter(x=>![...answers,source.fr,source.f].filter(Boolean).some(a=>norm(a)===norm(x)));
   return {id:item.id,prompt:`Escribe o elige el contrario trabajado para «${source.es}». Contexto: ${item.theme.toLowerCase()}.`,question:source.fr,meaning:source.f&&source.f!==source.fr?`Femenino: ${source.f}. Se aceptan las dos formas del contrario.`:'',answers,solution:form(target),explanation:`${form(source)} (${source.es}) ↔ ${form(target)} (${target.es}). Pareja de ${item.theme.toLowerCase()}.`,options:shuffle([target.fr,...shuffle([...new Set(wrong)]).slice(0,3)]),speak:target.fr};
  }
  const d=definitions.get(item.word);const wrong=QUESTIONS_FR.map(q=>q.answer).filter(a=>norm(a)!==norm(item.answer));
  // Las opciones se deduplican también por mayúsculas y apóstrofos.
  const unique=[...new Map(wrong.map(x=>[norm(x),x])).values()];
  const full=item.stem.replace('_____',item.answer);
  return {id:item.id,prompt:'Completa la pregunta con la palabra o expresión interrogativa que corresponde al español.',question:item.stem,meaning:item.es,reply:`Réponse : ${item.reply}`,answers:[item.answer],solution:full,explanation:`${d.fr}: ${d.note}`,options:shuffle([item.answer,...shuffle(unique).slice(0,3)]),speak:full};
 }
 function start(){
  base=pool();if(!base.length)return;settings={mode:$('q-mode').value,strict:$('q-strict').checked,direction:$('q-direction').value};
  if(kind==='questions'&&settings.mode==='cards')settings.mode='quiz';
  deck=shuffle(base);goal=$('q-length').value==='free'?Infinity:Math.min(Number($('q-length').value),base.length);done=0;correct=0;previous='';
  $('q-library').hidden=true;$('q-summary').hidden=true;$('q-game').hidden=false;next();
 }
 function next(){
  if(done>=goal){summary();return;}
  if(!deck.length){deck=shuffle(base);if(deck.length>1&&deck[0].id===previous)[deck[0],deck[1]]=[deck[1],deck[0]];}
  const item=deck.shift();previous=item.id;const reverse=settings.direction==='reverse'||settings.direction==='mixed'&&Math.random()<.5;exercise=makeExercise(item,reverse);answered=false;
  $('q-position').textContent=`${done+1}${goal===Infinity?' · PRÁCTICA LIBRE':' / '+goal}`;
  $('q-prompt').textContent=exercise.prompt;$('q-question').textContent=exercise.question;$('q-meaning').textContent=exercise.meaning;
  $('q-reply').hidden=!exercise.reply;$('q-reply').textContent=exercise.reply||'';
  $('q-options').hidden=settings.mode!=='quiz';$('q-write').hidden=settings.mode!=='write';$('q-card').hidden=settings.mode!=='cards';
  $('q-input').value='';$('q-input').disabled=false;$('q-check').disabled=false;$('q-feedback').textContent='';$('q-feedback').className='v-feedback';
  for(const id of ['q-full-answer','q-explanation','q-next','q-audio','q-revealed'])$(id).hidden=true;
  $('q-solution').hidden=false;$('q-flip').hidden=false;$('q-knew').disabled=false;$('q-forgot').disabled=false;
  $('q-card-answer').textContent=exercise.solution;$('q-next').textContent=done+1>=goal?'Ver resultados →':'Siguiente →';
  $('q-options').replaceChildren();if(settings.mode==='quiz')for(const option of exercise.options){const b=document.createElement('button');b.textContent=option;b.lang='fr';b.addEventListener('click',()=>{if(answered)return;const ok=matches(option);if(!ok)b.classList.add('wrong');finish(ok);});$('q-options').append(b);}
  if(settings.mode==='write')$('q-input').focus();
 }
 function matches(input){return exercise.answers.some(a=>norm(a,settings.strict)===norm(input,settings.strict));}
 function finish(ok,revealed=false){
  if(answered||!exercise)return;answered=true;done++;if(ok)correct++;scores[kind].total++;if(ok)scores[kind].correct++;persist();
  $('q-feedback').className=`v-feedback ${ok?'good':'bad'}`;$('q-feedback').textContent=ok?'¡Bien hecho!':revealed?'Solución consultada: repasa esta respuesta.':'Esta es la respuesta prevista para el ejercicio. Compárala con la tuya.';
  $('q-full-answer').textContent=exercise.solution;$('q-full-answer').hidden=false;$('q-explanation').textContent=exercise.explanation;$('q-explanation').hidden=false;
  $('q-input').disabled=true;$('q-check').disabled=true;$('q-knew').disabled=true;$('q-forgot').disabled=true;
  for(const b of $('q-options').children){b.disabled=true;if(matches(b.textContent))b.classList.add('correct');}
  $('q-solution').hidden=true;$('q-flip').hidden=true;$('q-next').hidden=false;$('q-audio').hidden=false;$('q-next').focus();
 }
 function summary(){exercise=null;$('q-game').hidden=true;$('q-summary').hidden=false;$('q-result').textContent=`${correct} / ${done} aciertos. Puedes cambiar de modo o practicar otra selección.`;$('q-again').focus();}
 $('q-opposites-tab').addEventListener('click',()=>setKind('opposites'));$('q-questions-tab').addEventListener('click',()=>setKind('questions'));
 $('q-search').addEventListener('input',renderPairs);$('q-type').addEventListener('change',renderPairs);$('q-question-filter').addEventListener('change',renderDefinitions);
 $('q-start').addEventListener('click',start);$('q-back').addEventListener('click',summary);$('q-again').addEventListener('click',()=>setKind(kind));$('q-next').addEventListener('click',()=>{if(answered)next();});
 $('q-write').addEventListener('submit',e=>{e.preventDefault();if(answered||!exercise)return;const text=$('q-input').value.trim();if(!text){$('q-feedback').textContent='Escribe una respuesta antes de comprobar.';return;}finish(matches(text));});
 $('q-flip').addEventListener('click',()=>{$('q-flip').hidden=true;$('q-revealed').hidden=false;});$('q-knew').addEventListener('click',()=>finish(true));$('q-forgot').addEventListener('click',()=>finish(false));$('q-solution').addEventListener('click',()=>finish(false,true));
 $('q-audio').addEventListener('click',()=>{if(!exercise||!answered)return;if(!('speechSynthesis' in window)){alert('Este navegador no admite pronunciación.');return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(exercise.speak);u.lang='fr-FR';u.rate=.85;speechSynthesis.speak(u);});
 for(const d of INTERROGATIFS){const o=document.createElement('option');o.value=d.id;o.textContent=`${d.fr} · ${d.es}`;$('q-question-filter').append(o);}
 for(const char of ['é','è','ê','à','â','î','ô','ù','û','ç','œ','’','-']){const b=document.createElement('button');b.type='button';b.textContent=char;b.setAttribute('aria-label',`Insertar ${char}`);b.addEventListener('click',()=>{const input=$('q-input');if(input.disabled)return;input.setRangeText(char,input.selectionStart,input.selectionEnd,'end');input.focus();});$('q-accents').append(b);}
 renderPairs();setKind('questions');renderStats();
})();
