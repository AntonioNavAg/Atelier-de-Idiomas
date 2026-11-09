(() => {
 const $=id=>document.getElementById(id);let fromHub=false;
 function hub(){window.PracticeModal.close('de-declensions-setup');if(window.speechSynthesis)window.speechSynthesis.cancel();for(const id of ['de-portal','de-home','de-lesson','dv-home','dv-workspace','de-vocabulary'])$(id).hidden=true;$('de-declensions').hidden=false;$('de-top-navigation').hidden=false;$('de-declensions-title').focus();fromHub=true;}
 function enter(practice){window.PracticeModal.close('de-declensions-setup');$('de-declensions').hidden=true;window.GermanHome.openCases(practice,Number($('de-declensions-length').value));$('de-back').textContent='← Opciones de declinaciones';}
 $('de-open-declensions').addEventListener('click',hub);$('de-declensions-study').addEventListener('click',()=>enter(false));$('de-declensions-practice').addEventListener('click',()=>{window.PracticeModal.open('de-declensions-setup');$('de-declensions-length').focus();});$('de-declensions-go').addEventListener('click',()=>enter(true));
 $('de-back').addEventListener('click',()=>{if(fromHub)hub();});
 for(const id of ['de-portal-back','de-open-bases','change-language','language-home'])$(id).addEventListener('click',()=>{fromHub=false;$('de-back').textContent='← Desde cero · Alemán';$('de-declensions').hidden=true;});
})();
