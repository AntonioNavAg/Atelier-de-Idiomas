/* Agrupa las vistas existentes sin reiniciar juegos ni alterar el progreso. */
(() => {
 'use strict';
 const $=id=>document.getElementById(id);
 const areas={basics:{title:'Empieza aquí',views:['basics']},verbs:{title:'Verbos',views:['verbs-menu','catalog','practice']},words:{title:'Vocabulario',views:['vocabulary','relations','interrogatives','prepositions']},recall:{title:'Recuperación activa',views:['recall-lab','context']},grammar:{title:'Gramática',views:['grammar']}};
 const tabs=[...document.querySelectorAll('[data-view]')];
 const cards=[...document.querySelectorAll('[data-area]')];
 let previousArea=null;
 function stop(){if('speechSynthesis' in window)window.speechSynthesis.cancel();}
 function home(){
  stop();$('study-home').hidden=false;$('study-navigation').hidden=true;
  for(const tab of tabs){$(tab.dataset.view).hidden=true;tab.setAttribute('aria-pressed','false');tab.classList.remove('active');}
  const target=cards.find(c=>c.dataset.area===previousArea)||cards[0];target?.focus();
  window.scrollTo?.({top:0,behavior:'instant'});
 }
 function showArea(name){
  const area=areas[name];if(!area)return;previousArea=name;
  $('study-home').hidden=true;$('study-navigation').hidden=false;
  $('study-area-title').textContent=area.title;
  for(const tab of tabs)tab.hidden=!area.views.includes(tab.dataset.view);
 }
 for(const tab of tabs)tab.addEventListener('click',()=>{
  const name=Object.keys(areas).find(k=>areas[k].views.includes(tab.dataset.view));showArea(name);stop();if(tab.dataset.view==='basics')window.FoundationMenu.home();
 });
 for(const card of cards)card.addEventListener('click',()=>{
  const name=card.dataset.area;showArea(name);
  const tab=tabs.find(t=>t.dataset.view===areas[name].views[0]);tab.click();tab.focus();window.scrollTo?.({top:0,behavior:'instant'});
 });
 $('study-back').addEventListener('click',home);
 window.StudyNavigation={home};
})();
