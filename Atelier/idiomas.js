/* La selección aparece en cada apertura. Volver al menú conserva la sesión. */
(() => {
 const $=id=>document.getElementById(id);
 function showFrench(){
  $('language-menu').hidden=true;$('french-app').hidden=false;$('german-app').hidden=true;$('language-badge').textContent='FR';
  $('language-badge').hidden=false;$('change-language').hidden=false;$('language-tagline').hidden=true;
  document.title='Atelier · Francés de A1 a B2';
  window.StudyNavigation.home();
  window.scrollTo?.({top:0,behavior:'instant'});
 }
 function showLanguages(){
  $('french-app').hidden=true;$('german-app').hidden=true;$('language-menu').hidden=false;
  $('language-badge').hidden=true;$('change-language').hidden=true;$('language-tagline').hidden=false;
  document.title='Atelier · Elige tu idioma';
  if('speechSynthesis' in window)window.speechSynthesis.cancel();
  $('enter-french').focus();window.scrollTo?.({top:0,behavior:'instant'});
 }
 $('enter-german').addEventListener('click',()=>{$('language-menu').hidden=true;$('french-app').hidden=true;$('german-app').hidden=false;$('language-badge').textContent='DE';$('language-badge').hidden=false;$('change-language').hidden=false;$('language-tagline').hidden=true;document.title='das Atelier · Alemán desde cero';window.GermanHome.home();window.scrollTo?.({top:0,behavior:'instant'});});
 $('enter-french').addEventListener('click',showFrench);
 $('change-language').addEventListener('click',showLanguages);
 $('language-home').addEventListener('click',event=>{event.preventDefault();showLanguages();});
})();
