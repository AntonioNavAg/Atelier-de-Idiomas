/* Vocabulario local: catálogo, filtros y sesiones de hasta 20 palabras. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const words=window.DE_WORDS;
  const labels={noun:'Sustantivo',adjective:'Adjetivo',adverb:'Adverbio',expression:'Expresión',numeral:'Número',pronoun:'Pronombre',conjunction:'Conjunción',preposition:'Preposición'};
  const genders={m:'masculino',f:'femenino',n:'neutro'};
  const normalize=text=>String(text).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/œ/g,'oe').replace(/’/g,"'").replace(/\s+/g,' ').trim();
  const strictText=text=>String(text).normalize('NFC').replace(/[’‘]/g,"'").replace(/[.!?]+$/,'').replace(/\s+/g,' ').trim();
  const senses=word=>word.es.split(/\s*[;/]\s*/).map(normalize);
  const equivalent=(a,b)=>senses(a).some(sense=>senses(b).includes(sense));
  const description=word=>[labels[word.type],word.type==='noun'&&word.feminine?'masculino / femenino':genders[word.gender],word.level].filter(Boolean).join(' · ');
  const display=word=>word.type==='noun'?word.article+' '+word.de:word.de;
  const storageKey='atelier-aleman-vocabulario-v1';
  let saved={};
  try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}')||{};}catch{}
  const validIds=new Set(words.map(word=>word.id));
  const safeIds=values=>new Set(Array.isArray(values)?values.filter(id=>validIds.has(id)):[]);
  const favorites=safeIds(saved.favorites), learned=safeIds(saved.learned);
  const validCount=n=>Number.isSafeInteger(n)&&n>=0?n:0;
  let attempts=validCount(saved.attempts),correct=Math.min(validCount(saved.correct),attempts);
  let filtered=[],page=0,session=[],index=0,current=null,answered=false,sessionCorrect=0;
  const pageSize=24;
  const themes=[...new Set(words.map(word=>word.theme))];
  const themeButtons=new Map();
  function persist(){
    try{localStorage.setItem(storageKey,JSON.stringify({favorites:[...favorites],learned:[...learned],attempts,correct}));}
    catch{$('dw-save-note').textContent='Almacenamiento no disponible: el aprendizaje de palabras dura esta sesión.';}
    renderStats();
  }
  function renderStats(){
    $('dw-stats').textContent=`${learned.size} / ${words.length.toLocaleString('es')} marcadas como aprendidas · ${correct} / ${attempts} aciertos y autoevaluaciones`;
    for(const [theme,{button,count}] of themeButtons){
      const items=words.filter(w=>w.theme===theme);
      count.textContent=`${items.length} entradas · ${items.filter(w=>learned.has(w.id)).length} aprendidas`;
      const active=$('dw-theme').value===theme;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
    }
  }
  function button(text,fn,className='small'){
    const el=document.createElement('button');el.type='button';el.textContent=text;el.className=className;el.addEventListener('click',fn);return el;
  }
  function starState(el,word){
    const active=favorites.has(word.id);el.textContent=active?'★ Favorito':'☆ Favorito';el.classList.toggle('selected',active);
    el.setAttribute('aria-pressed',String(active));el.setAttribute('aria-label',`${active?'Quitar de':'Añadir a'} favoritos: ${word.de}`);
  }
  function toggleFavorite(word){
    if(favorites.has(word.id))favorites.delete(word.id);else favorites.add(word.id);
    persist();applyFilters(false);if(current)starState($('dw-star'),current);
  }
  function speak(text){
    if(!('speechSynthesis' in window)){alert('Este navegador no admite pronunciación.');return;}
    speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);utterance.lang='de-DE';utterance.rate=Number($('de-rate').value)||.85;
    const voices=speechSynthesis.getVoices().filter(v=>/^de(?:[-_]|$)/i.test(v.lang));const voice=voices.find(v=>v.voiceURI===$('de-voice').value)||voices[0];if(voice)utterance.voice=voice;utterance.onerror=()=>{$('dw-audio-status').textContent='No se pudo reproducir. Comprueba las voces alemanas del equipo.';};
    try{speechSynthesis.speak(utterance);$('dw-audio-status').textContent='Audio solicitado en alemán; su disponibilidad depende de las voces instaladas.';}catch{$('dw-audio-status').textContent='No se pudo iniciar el audio.';}
  }
  function applyFilters(reset=true){
    const query=normalize($('dw-search').value),theme=$('dw-theme').value,level=$('dw-level').value,type=$('dw-type').value;
    filtered=words.filter(word=>(theme==='all'||word.theme===theme)&&(level==='all'||word.level===level)&&(type==='all'||word.type===type)&&(!$('dw-favorites').checked||favorites.has(word.id))&&(!$('dw-pending').checked||!learned.has(word.id))&&normalize(`${display(word)} ${word.plural||''} ${word.es} ${word.note||''}`).includes(query));
    if(reset)page=0;
    page=Math.min(page,Math.max(0,Math.ceil(filtered.length/pageSize)-1));renderList();renderStats();
  }
  function renderList(){
    $('dw-selection-summary').textContent='Tema: '+($('dw-theme').value==='all'?'Todos los temas':$('dw-theme').value)+' · Nivel: '+($('dw-level').value==='all'?'Todos los niveles':$('dw-level').value)+' · '+filtered.length+' palabras disponibles con los filtros actuales.';
    $('dw-count').textContent=`${filtered.length.toLocaleString('es')} de ${words.length.toLocaleString('es')} entradas`;
    $('dw-start').disabled=!filtered.length;$('dw-go').disabled=!filtered.length;
    $('dw-start').textContent='Practicar esta selección →';$('dw-go').textContent=filtered.length?'Empezar con '+($('dw-length').value==='all'?filtered.length:Math.min(20,filtered.length))+' palabras →':'Sin palabras con estos filtros';
    $('dw-list').replaceChildren();
    if(!filtered.length){const p=document.createElement('p');p.className='empty';p.textContent='No hay palabras con estos filtros. Prueba otro tema o limpia los filtros.';$('dw-list').append(p);}
    for(const word of filtered.slice(page*pageSize,(page+1)*pageSize)){
      const article=document.createElement('article');article.className='word-card';
      const meta=document.createElement('p');meta.className='word-meta';meta.textContent=description(word);
      const title=document.createElement('h3');title.lang='de';title.textContent=display(word);
      const translation=document.createElement('p');translation.className='word-translation';translation.textContent=word.es;
      const theme=document.createElement('p');theme.className='word-theme';theme.textContent=word.theme;
      const actions=document.createElement('div');actions.className='word-actions';
      const star=button('',()=>toggleFavorite(word));starState(star,word);
      const audio=button('♫',()=>speak(display(word)+(word.type==='noun'&&word.plural!=='—'?'. die '+word.plural:'')));audio.setAttribute('aria-label',`Escuchar ${word.de}`);
      const known=button(learned.has(word.id)?'✓ Aprendida':'Marcar aprendida',()=>{
        if(learned.has(word.id))learned.delete(word.id);else learned.add(word.id);persist();applyFilters(false);
      });known.setAttribute('aria-pressed',String(learned.has(word.id)));known.setAttribute('aria-label',`${learned.has(word.id)?'Marcar por aprender':'Marcar aprendida'}: ${word.de}`);known.classList.toggle('selected',learned.has(word.id));
      actions.append(star,audio,known);article.append(meta,title,translation);if(word.note){const note=document.createElement('p');note.className='word-note';note.textContent=word.note;article.append(note);}article.append(theme,actions);$('dw-list').append(article);
    }
    const pages=Math.max(1,Math.ceil(filtered.length/pageSize));
    $('dw-page').textContent=`Página ${page+1} de ${pages}`;
    $('dw-prev-page').disabled=page===0;$('dw-next-page').disabled=page>=pages-1;
  }
  function shuffle(items){
    const result=[...items];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;
  }
  function openSetup(){ $('dw-study').hidden=true;window.PracticeModal.open('dw-setup');for(const field of ['theme','level','mode'])$('dw-setup-'+field).value=$('dw-'+field).value;applyFilters(false);$('dw-setup-theme').focus();}
  function startSession(){
    if(!filtered.length)return;
    window.PracticeModal.close('dw-setup');
    session=shuffle(filtered).slice(0,$('dw-length').value==='all'?filtered.length:20);index=0;sessionCorrect=0;
    $('dw-session-summary').textContent=$('dw-selection-summary').textContent+' · Sesión: '+session.length+' palabras, sin repetir.';
    $('dw-browser').hidden=true;$('dw-study').hidden=false;showQuestion();
  }
  function showQuestion(){
    current=session[index];if(!current)return;answered=false;
    const mode=$('dw-mode').value;
    $('dw-position').textContent=`PALABRA ${index+1} / ${session.length}`;
    $('dw-context').textContent=`${current.theme} · ${description(current)}`;
    $('dw-input-label').textContent=mode==='meaning'?'Escribe un significado en español (de los recogidos en la ficha)':'Escribe artículo + sustantivo, o la palabra/expresión indicada';$('dw-accents').hidden=mode==='meaning';$('dw-question').textContent=mode==='meaning'?display(current)+' → escribe su significado en español':current.es;
    $('dw-cards').hidden=mode!=='cards';$('dw-choices').hidden=mode!=='quiz';$('dw-write').hidden=!['write','meaning'].includes(mode);
    $('dw-reveal').hidden=false;$('dw-revealed').hidden=true;$('dw-listen').hidden=true;$('dw-next').hidden=true;
    $('dw-known').disabled=false;$('dw-again').disabled=false;$('dw-check').disabled=false;$('dw-input').disabled=false;$('dw-input').value='';
    $('dw-feedback').textContent='';$('dw-feedback').className='dw-feedback';
    $('dw-answer').textContent=display(current);$('dw-grammar').textContent=description(current)+(current.note?' · '+current.note:'');
    $('dw-next').textContent=index===session.length-1?'Terminar sesión →':'Siguiente →';
    starState($('dw-star'),current);
    if(mode==='quiz')renderOptions();
    if(['write','meaning'].includes(mode))$('dw-input').focus();else $('dw-question').setAttribute('tabindex','-1');
  }
  function renderOptions(){
    $('dw-choices').replaceChildren();
    const isDistractor=w=>w.id!==current.id&&!equivalent(w,current);
    const nearby=shuffle(words.filter(w=>w.theme===current.theme&&w.type===current.type&&isDistractor(w)));
    const distractors=nearby.slice(0,3);
    if(distractors.length<3){const ids=new Set(distractors.map(w=>w.id));distractors.push(...shuffle(words.filter(w=>isDistractor(w)&&!ids.has(w.id))).slice(0,3-distractors.length));}
    for(const word of shuffle([current,...distractors])){
      const choice=button(display(word),()=>{
        if(answered)return;
        const ok=word.id===current.id;
        for(const child of $('dw-choices').children){child.disabled=true;if(child.dataset.id===current.id)child.classList.add('correct');}
        if(!ok)choice.classList.add('wrong');finish(ok);
      },'');choice.lang='de';choice.dataset.id=word.id;$('dw-choices').append(choice);
    }
  }
  function finish(ok,extra=''){
    if(answered||!current)return;
    answered=true;attempts++;
    if(ok){correct++;sessionCorrect++;learned.add(current.id);}else learned.delete(current.id);
    persist();$('dw-feedback').className=`v-feedback ${ok?'good':'bad'}`;
    $('dw-feedback').textContent=(ok?'¡Bien hecho! ': 'Para repasar: ')+display(current)+'.'+(extra?' '+extra:'');
    $('dw-input').disabled=true;$('dw-check').disabled=true;$('dw-known').disabled=true;$('dw-again').disabled=true;
    $('dw-listen').hidden=false;$('dw-next').hidden=false;$('dw-next').focus();
  }
  function backToList(){
    window.PracticeModal.close('dw-setup');
    current=null;$('dw-study').hidden=true;$('dw-browser').hidden=false;applyFilters(false);$('dw-start').focus();
  }
  function checkWritten(event){
    event.preventDefault();if(answered||!current)return;
    const input=$('dw-input').value.trim();if(!input){$('dw-feedback').textContent='Escribe una respuesta antes de comprobar.';return;}
    if($('dw-mode').value==='meaning'){const clean=s=>normalize(s).replace(/\s*\([^)]*\)/g,'').trim();const meanings=[current.es,...current.es.split(/[;/]/)];finish(meanings.some(s=>clean(s)===clean(input)),'Significado: '+current.es+'.');return;}const clean=$('dw-strict').checked?strictText:normalize;
    const answers=words.filter(w=>w.id===current.id||equivalent(w,current));
    const match=answers.find(word=>{
      return clean(display(word)).replace(/[.!?]+$/,'')===clean(input).replace(/[.!?]+$/,'');
    });
    let extra=match&&match.id!==current.id?`También es válido: ${display(match)}.`:'';
    if(match&&!$('dw-strict').checked)extra+=` Ortografía: ${display(match)}.`;
    finish(Boolean(match),extra.trim());
  }
  for(const theme of themes){
    const setupOption=document.createElement('option');setupOption.value=theme;setupOption.textContent=theme;$('dw-setup-theme').append(setupOption);
    const option=document.createElement('option');option.value=theme;option.textContent=theme;$('dw-theme').append(option);
    const tile=button('',()=>{$('dw-theme').value=theme;applyFilters();$('dw-start').focus();},'theme-tile');
    const title=document.createElement('strong');title.textContent=theme;
    const count=document.createElement('span');tile.append(title,count);$('dw-themes').append(tile);themeButtons.set(theme,{button:tile,count});
  }
  for(const id of ['dw-theme','dw-level','dw-type','dw-favorites','dw-pending'])$(id).addEventListener('change',()=>applyFilters());
  $('dw-search').addEventListener('input',()=>applyFilters());
  $('dw-clear').addEventListener('click',()=>{for(const id of ['dw-theme','dw-level','dw-type'])$(id).value='all';$('dw-search').value='';$('dw-favorites').checked=false;$('dw-pending').checked=false;applyFilters();});
  $('dw-prev-page').addEventListener('click',()=>{if(page>0){page--;renderList();}});
  $('dw-next-page').addEventListener('click',()=>{if((page+1)*pageSize<filtered.length){page++;renderList();}});
  $('dw-whole-theme').addEventListener('click',()=>{$('dw-setup-level').value='all';for(const id of ['dw-level','dw-type'])$(id).value='all';$('dw-search').value='';$('dw-favorites').checked=false;$('dw-pending').checked=false;applyFilters();});
  $('dw-length').addEventListener('change',renderList);
  $('dw-start').addEventListener('click',openSetup);$('dw-go').addEventListener('click',startSession);$('dw-setup-back').addEventListener('click',backToList);for(const field of ['theme','level','mode'])$('dw-setup-'+field).addEventListener('change',()=>{$('dw-'+field).value=$('dw-setup-'+field).value;applyFilters();});$('dw-back').addEventListener('click',backToList);
  $('dw-mode').addEventListener('change',()=>{
    // Cambiar de juego continúa con una nueva tarjeta: no permite puntuar dos veces la misma.
    if(answered){index++;if(index>=session.length){backToList();return;}}
    if(current)showQuestion();
  });
  $('dw-reveal').addEventListener('click',()=>{$('dw-reveal').hidden=true;$('dw-revealed').hidden=false;$('dw-listen').hidden=false;});
  $('dw-known').addEventListener('click',()=>finish(true));$('dw-again').addEventListener('click',()=>finish(false));
  $('dw-star').addEventListener('click',()=>{if(current)toggleFavorite(current);});
  $('dw-listen').addEventListener('click',()=>{if(current)speak(display(current));});
  $('dw-next').addEventListener('click',()=>{
    if(!answered)return;
    index++;
    if(index>=session.length){const total=session.length;backToList();$('dw-count').textContent=`Sesión completada: ${sessionCorrect} / ${total} aciertos. ${filtered.length.toLocaleString('es')} entradas en tu selección.`;}
    else showQuestion();
  });
  $('dw-write').addEventListener('submit',checkWritten);
  for(const char of ['ä','ö','ü','ß','Ä','Ö','Ü']){
    const accent=button(char,()=>{const input=$('dw-input');if(input.disabled)return;input.setRangeText(char,input.selectionStart,input.selectionEnd,'end');input.focus();});accent.setAttribute('aria-label',`Insertar ${char}`);$('dw-accents').append(accent);
  }
  $('de-open-vocabulary').addEventListener('click',()=>{if(window.speechSynthesis)window.speechSynthesis.cancel();for(const id of ['de-portal','de-home','de-lesson','dv-home','dv-workspace'])$(id).hidden=true;$('de-top-navigation').hidden=false;$('de-vocabulary').hidden=false;applyFilters(false);$('dw-search').focus();});window.DeWordHelpers={display,strictText};
  persist();applyFilters();
})();

