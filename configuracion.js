(() => {
 'use strict';
 const $=id=>document.getElementById(id),dialog=$('settings-dialog');
 const options=['default','dark','warm','studio','focus'].map(name=>$('settings-'+name));
 function reflect(){for(const button of options)button.setAttribute('aria-pressed',String(button.dataset.theme===document.documentElement.dataset.theme));}
 reflect();
 for(const button of options)button.addEventListener('click',()=>{
  const theme=button.dataset.theme;document.documentElement.dataset.theme=theme;reflect();
  try{localStorage.setItem('atelier-theme-v1',theme);$('settings-status').textContent='Diseño guardado en este navegador.';}
  catch{$('settings-status').textContent='Diseño aplicado. El navegador no permite guardarlo para la próxima visita.';}
 });
 $('open-settings').addEventListener('click',()=>{if(!dialog.open)dialog.showModal();});
 $('close-settings').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>$('open-settings').focus());
 dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
 for(const name of ['appearance','notifications'])$('settings-'+name).addEventListener('click',()=>{
  for(const section of ['appearance','notifications']){
   $('settings-'+section+'-panel').hidden=section!==name;
   $('settings-'+section).setAttribute('aria-pressed',String(section===name));
  }
 });
 // Demostración visual: no permisos, temporizadores, envíos ni almacenamiento.
 $('reminder-language').addEventListener('change',()=>{
  const german=$('reminder-language').value==='de';
  $('reminder-word').textContent=german?'das Fenster · la ventana':'la fenêtre · la ventana';
  $('reminder-sentence').textContent=german?'Ich öffne das Fenster.':'J’ouvre la fenêtre.';
  $('reminder-sentence').lang=german?'de':'fr';
 });
})();
