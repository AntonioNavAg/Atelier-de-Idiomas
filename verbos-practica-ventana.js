/* Configuración desde el catálogo: borrador independiente hasta pulsar Empezar. */
(() => {
const $=id=>document.getElementById(id);
const frFields=['pool','mode','strict'],deFields=['dv-search','dv-level','dv-type','dv-feature','dv-ending','dv-favorites','dv-mode','dv-length'];
function copy(fields,toDraft){for(const id of fields){const from=$(toDraft?id:'launch-'+id),to=$(toDraft?'launch-'+id:id);to.value=from.value;to.checked=from.checked;}}
for(const [prefix,trigger,fields] of [['fr','fr-catalog-practice',frFields],['de','de-catalog-practice',deFields]]){
 const dialog=$(prefix+'-verb-setup');
 $(trigger).addEventListener('click',()=>{copy(fields,true);$(prefix+'-verb-setup-message').textContent='';if(prefix==='de'){$('launch-dv-settings').hidden=false;$('launch-dv-start').disabled=false;}dialog.showModal();});
 $(prefix+'-verb-setup-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>$(trigger).focus());
 dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
}
$('launch-dv-clear').addEventListener('click',()=>{for(const id of ['dv-level','dv-type','dv-feature','dv-ending'])$('launch-'+id).value='all';$('launch-dv-search').value='';$('launch-dv-favorites').checked=false;});
function snapshot(fields){return fields.map(id=>[id,$(id).value,$(id).checked]);}
function restore(saved){for(const [id,value,checked] of saved){$(id).value=value;$(id).checked=checked;}}
$('launch-fr-start').addEventListener('click',()=>{
 const saved=snapshot(frFields);copy(frFields,false);
 if(!window.FrVerbPractice.pool().length){restore(saved);$('fr-verb-setup-message').textContent='No hay verbos en esta selección. Añade favoritos o elige otra colección.';return;}
 $('fr-verb-setup').close();document.querySelector('[data-view="practice"]').click();window.FrVerbPractice.start();if($('mode').value==='write')$('written').focus();else if($('mode').value==='cards')$('reveal').focus();else $('options').children[0]?.focus();
});
$('launch-dv-start').addEventListener('click',()=>{
 const saved=snapshot(deFields);copy(deFields,false);
 if(!window.DeVerbUI.eligible().length){restore(saved);$('de-verb-setup-message').textContent='No hay verbos con estos filtros. Cambia la selección o limpia los filtros.';return;}
 $('de-verb-setup').close();window.DeVerbUI.workspace('practice');window.DeVerbUI.start();($('dv-mode').value==='write'?$('dv-input'):$('dv-stop')).focus();
});
})();
