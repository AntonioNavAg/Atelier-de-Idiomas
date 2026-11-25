/* Submenús de vocabulario y regreso a la pantalla realmente visitada. */
(() => {
'use strict';
const $=id=>document.getElementById(id);
const specs=[['catalog','Aa','Por temas','Palabras de la vida cotidiana, organizadas por temas.'],['opposites','≠','Contrarios','Relaciona palabras con significados opuestos.'],['questions','¿?','Palabras interrogativas','Aprende a preguntar y practica con frases.'],['prepositions','à · in','Preposiciones','Estudia relaciones de lugar, tiempo y movimiento.'],['affixes','ab · re','Prefijos y sufijos','Descubre cómo se forman las palabras.'],['connectors','&','Conectores','Une ideas y construye frases más completas.']];
const frViews=['vocabulary','relations','interrogatives','prepositions'];
const frTabs=Array.from(document.querySelectorAll('[data-view]'));
const menus={};
function menu(lang){
 const section=document.createElement('section');section.id=lang+'-vocabulary-menu';section.hidden=true;
 const title=document.createElement('h2');title.textContent='¿Qué quieres trabajar en vocabulario?';
 const grid=document.createElement('div');grid.className='learning-grid vocabulary-cards';section.append(title,grid);
 for(const [key,icon,label,desc]of specs){const b=document.createElement('button');b.type='button';b.className='study-card';b.dataset.vocabularySection=key;b.dataset.language=lang;
 for(const [tag,cls,text]of [['span','foundation-icon',icon],['strong','',label],['span','',desc]]){const e=document.createElement(tag);e.className=cls;e.textContent=text;if(cls)e.setAttribute('aria-hidden','true');b.append(e);}
 b.addEventListener('click',()=>{
 section.hidden=true;
 if(key==='affixes'||key==='connectors'){$(lang+'-open-'+key).click();return;}
 if(lang==='fr'){const view={catalog:'vocabulary',opposites:'relations',questions:'interrogatives',prepositions:'prepositions'}[key];frTabs.find(t=>t.dataset.view===view).click();$('french-sections').hidden=true;}
 else{$('dt-tab-'+key).click();}
 if(key==='catalog'){$(lang==='fr'?'v-results':'dw-results').hidden=true;}
 const target=lang==='fr'?$(key==='catalog'?'vocabulary':{opposites:'relations',questions:'interrogatives',prepositions:'prepositions'}[key]):$(key==='catalog'?'dt-catalog':'dt-panel');target.setAttribute('tabindex','-1');target.focus();
 });grid.append(b);}
 if(lang==='fr')$('vocabulary').before(section);else $('dt-catalog').before(section);
 menus[lang]=section;
}
menu('fr');menu('de');
for(const [lang,id]of [['fr','enter-french'],['de','enter-german']])$(id).addEventListener('click',()=>menus[lang].hidden=true);
const deNav=$('dt-tab-catalog').closest('nav');deNav.hidden=true;
function showMenu(lang){
 menus[lang].hidden=false;
 if(lang==='fr'){for(const id of frViews)$(id).hidden=true;$('french-sections').hidden=true;$('study-area-title').hidden=true;}
 else{$('dt-catalog').hidden=true;$('dt-panel').hidden=true;}
 menus[lang].querySelector('button').focus();
}
document.querySelector('[data-area="words"]').addEventListener('click',()=>showMenu('fr'));
$('de-open-vocabulary').addEventListener('click',()=>showMenu('de'));
for(const tab of frTabs)tab.addEventListener('click',()=>{menus.fr.hidden=true;if(frViews.includes(tab.dataset.view))$('french-sections').hidden=true;});
for(const card of document.querySelectorAll('[data-area]'))if(card.dataset.area!=='words')card.addEventListener('click',()=>menus.fr.hidden=true);
for(const p of ['v','dw']){
 const reveal=()=>{$(p+'-results').hidden=false;$(p+'-results').focus({preventScroll:true});$(p+'-results').scrollIntoView({behavior:'auto',block:'start'});};
 $(p+'-themes').addEventListener('click',e=>{if(e.target.closest('.theme-tile'))reveal();});
 $(p+'-all-themes').addEventListener('click',()=>{$(p+'-theme').value='all';$(p+'-theme').dispatchEvent(new Event('change',{bubbles:true}));reveal();});
}
// Keep existing event handlers and exercise state; record only visibility changes
// caused by navigation. Answers, filters and pagination never create history entries.
const stack=[];
const bar=document.createElement('div');bar.className='previous-page-bar';
const back=document.createElement('button');back.id='previous-page';back.type='button';back.className='small';back.textContent='Volver';back.setAttribute('aria-label','Volver a la página anterior');bar.append(back);document.querySelector('header').after(bar);bar.hidden=true;
const legacyBack=['study-back','de-portal-back','fr-welcome-back','de-welcome-back','foundation-back','de-back','dv-back','v-back','dw-back','cp-back','affix-close','connector-close'];
for(const id of legacyBack){const b=$(id);if(b)b.classList.add('previous-page-replaced');}
function snapshot(){return Array.from(document.querySelectorAll('[id]')).filter(e=>e!==bar&&e!==back&&e.tagName!=='DIALOG').map(e=>[e,e.hidden]);}
let depth=0;
const navigationSelector='[data-area],[data-view],[data-foundation],[data-foundation-de],[data-vocabulary-section],[data-preposition-card],.theme-tile';
function isNavigation(b){return b.matches(navigationSelector)||/^(enter-|change-language$|language-home$|fr-begin$|de-begin$|de-open-|verbs-open-|dv-open-|dt-tab-|fr-open-|de-open-)/.test(b.id)||/^(fr|de)-conjugation-practice$/.test(b.id)||/-all-themes$/.test(b.id)||/^(v-go|dw-go|cp-start|dt-start|dv-start|de-start|affix-start|connector-start|a-start|c-start|p-start|r-start|i-start|g-start)$/.test(b.id);}
function goBack(){const entry=stack.pop();if(!entry)return;window.speechSynthesis?.cancel();for(const [el,hidden]of entry.changes)if(el.isConnected)el.hidden=hidden;bar.hidden=!stack.length;if(!$('french-app').hidden)$('language-badge').textContent='FR';else if(!$('german-app').hidden)$('language-badge').textContent='DE';entry.origin?.focus({preventScroll:true});window.scrollTo({top:entry.scroll,behavior:'instant'});}
back.addEventListener('click',goBack);
document.addEventListener('click',e=>{
 const b=e.target.closest('button,a');if(!b||b===back)return;
 if(b.closest('dialog')&&!/^(v-go|dw-go|cp-start|dt-start|dv-start|de-start|affix-start|connector-start|a-start|c-start|p-start|r-start|i-start|g-start)$/.test(b.id))return;
 if(legacyBack.includes(b.id)&&stack.length){e.preventDefault();e.stopImmediatePropagation();goBack();return;}
 if(!isNavigation(b)||depth)return;
 const before=snapshot(),scroll=window.scrollY;depth++;
 // Wait for the entire click dispatch: browsers may run microtasks between
 // capture and target listeners. Recording earlier saves an intermediate screen.
 setTimeout(()=>{depth--;const changes=before.filter(([el,hidden])=>el.hidden!==hidden);if(changes.length){stack.push({changes,origin:b,scroll});bar.hidden=false;}},0);
},true);
window.AtelierNavigation={back:goBack,get depth(){return stack.length;}};
})();
