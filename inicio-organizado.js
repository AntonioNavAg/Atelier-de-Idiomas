/* Dos pantallas dentro de cada idioma; no se recargan ni reinician ejercicios. */
(() => {
const $=id=>document.getElementById(id);
function screen(lang,dashboard){$(lang+'-welcome').hidden=dashboard;$(lang+'-dashboard').hidden=!dashboard;const target=$(lang+(dashboard?'-dashboard-title':'-begin'));target.focus();window.scrollTo?.({top:0,behavior:'instant'});}
for(const lang of ['fr','de']){
$('enter-'+(lang==='fr'?'french':'german')).addEventListener('click',()=>screen(lang,false));
$(lang+'-begin').addEventListener('click',()=>screen(lang,true));
$(lang+'-welcome-back').addEventListener('click',()=>screen(lang,false));
}
$('study-back').addEventListener('click',()=>screen('fr',true));
$('de-portal-back').addEventListener('click',()=>screen('de',true));
})();
