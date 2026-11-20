(() => {
'use strict';const $=id=>document.getElementById(id),key='atelier-sound-v1';let prefs={enabled:true,volume:25},context=null,epoch=0;const last={},voices=new Set();
try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved&&typeof saved.enabled==='boolean')prefs.enabled=saved.enabled;if(saved&&Number.isFinite(saved.volume))prefs.volume=Math.max(0,Math.min(100,saved.volume));}catch{}
const supported=!!(window.AudioContext||window.webkitAudioContext);
const patterns={click:[[640,380,0,.09]],hover:[[820,940,0,.045]],back:[[520,330,0,.13]],correct:[[660,660,0,.12],[880,880,.11,.18]],incorrect:[[250,210,0,.14],[190,160,.13,.18]]};
function reflect(){$('sound-enabled').checked=prefs.enabled;$('sound-volume').value=prefs.volume;$('sound-volume-value').textContent=prefs.volume+' %';$('sound-preview').disabled=!supported||!prefs.enabled||prefs.volume===0;}
function silence(){epoch++;for(const osc of voices){try{osc.stop();}catch{}}voices.clear();}
function save(){reflect();if(!prefs.enabled||prefs.volume===0)silence();try{localStorage.setItem(key,JSON.stringify(prefs));$('sound-status').textContent='Preferencias de sonido guardadas en este dispositivo.';}catch{$('sound-status').textContent='Preferencias aplicadas; no se han podido guardar para la próxima apertura.';}}
async function play(type='click'){
 if(!supported||!prefs.enabled||prefs.volume===0||!patterns[type])return;
 // Hover no activa audio por sí solo: los navegadores requieren antes una pulsación.
 if(type==='hover'&&context?.state!=='running')return;
 const now=performance.now();if(now-(last[type]??-Infinity)<(type==='hover'?120:55))return;last[type]=now;
 if(type==='correct'||type==='incorrect')silence();const ticket=epoch;
 try{if(!context||context.state==='closed')context=new(window.AudioContext||window.webkitAudioContext)();if(context.state==='suspended')await context.resume();if(context.state!=='running'||ticket!==epoch||!prefs.enabled||prefs.volume===0)return;
 for(const [from,to,delay,duration] of patterns[type]){const t=context.currentTime+delay,osc=context.createOscillator(),gain=context.createGain();osc.type='sine';osc.frequency.setValueAtTime(from,t);osc.frequency.exponentialRampToValueAtTime(to,t+duration*.8);gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(Math.max(.0002,prefs.volume/100*(type==='hover'?.055:.15)),t+.008);gain.gain.exponentialRampToValueAtTime(.0001,t+duration);osc.connect(gain);gain.connect(context.destination);voices.add(osc);osc.onended=()=>{voices.delete(osc);osc.disconnect();gain.disconnect();};osc.start(t);osc.stop(t+duration+.01);}
 }catch{$('sound-status').textContent='No se pudo reproducir. Comprueba el volumen y la salida de audio del dispositivo.';}
}
window.AtelierSounds={play};
function enabledButton(target){const b=target?.closest?.('button, a.brand');return b&&!b.disabled&&b.getAttribute('aria-disabled')!=='true'?b:null;}
function isBack(button){return button.id==='change-language'||button.id==='language-home'||/^(?:[←↩]\s*)?(?:volver|regresar|cancelar|cerrar|inicio de|presentación de)/i.test(button.textContent.trim())||/(?:^|-)(?:back|close|exit|return)$/.test(button.id);}
$('sound-enabled').addEventListener('change',()=>{prefs.enabled=$('sound-enabled').checked;save();});$('sound-volume').addEventListener('input',()=>{prefs.volume=Number($('sound-volume').value);save();});
document.addEventListener('click',e=>{if(!e.isTrusted)return;const button=enabledButton(e.target);if(button)void play(isBack(button)?'back':'click');},true);
document.addEventListener('pointerover',e=>{if(!e.isTrusted||e.pointerType!=='mouse')return;const b=enabledButton(e.target);if(!b||!b.matches('.study-card, .language-card')||b.contains(e.relatedTarget))return;void play('hover');},true);
document.addEventListener('visibilitychange',()=>{if(document.hidden)silence();});
reflect();if(!supported)$('sound-status').textContent='Este navegador no permite generar los sonidos de botones.';
const intro=$('atelier-intro');const finish=()=>{intro.hidden=true;};intro.addEventListener('animationend',e=>{if(e.target===intro)finish();});setTimeout(finish,1100);
})();
