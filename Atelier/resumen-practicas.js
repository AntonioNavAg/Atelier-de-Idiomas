/* Resumen en memoria de la sesión actual: no altera el progreso acumulado. */
(() => {
const $=id=>document.getElementById(id),records=new Map(),picked=new Map();
const config={
'feedback':{q:['question'],a:['translation'],inputs:['written'],options:['options']},
'v-feedback':{q:['v-question'],a:['v-answer'],inputs:['v-input'],options:['v-choices']},
'dw-feedback':{q:['dw-question'],a:['dw-answer'],inputs:['dw-input'],options:['dw-choices']},
'dv-feedback':{q:['dv-instruction','dv-question'],a:[],inputs:['dv-input'],options:['dv-options']},
'de-feedback':{q:['de-title','de-question'],a:[],inputs:['de-answer'],options:[]},
'c-feedback':{q:['c-instruction','c-sentence','c-translation'],a:['c-solution'],inputs:['c-input'],options:['c-options'],extra:'c-assembled'},
'r-feedback':{q:['r-prompt','r-question'],a:['r-full-answer','r-card-answer'],inputs:['r-input'],options:['r-options']},
'q-feedback':{q:['q-prompt','q-question'],a:['q-full-answer','q-card-answer'],inputs:['q-input'],options:['q-options']},
'p-feedback':{q:['p-question'],a:['p-answer'],inputs:['p-input'],options:['p-options']},
'g-feedback':{q:['g-question'],a:['g-answer'],inputs:['g-input'],options:['g-options']},
'a-feedback':{q:['a-cue','a-stem','a-es'],a:['a-answer'],inputs:[],options:[],multi:'a-inputs'},
'dt-feedback':{q:['dt-instruction','dt-question','dt-clue'],a:['dt-answer'],inputs:['dt-input'],options:['dt-options']},
'b-letter-feedback':{q:['b-letter-count'],a:[],inputs:[],options:['b-letter-options'],label:'Identificar la letra escuchada'},
'b-number-feedback':{q:['b-number-instruction','b-number-question'],a:['b-number-answer'],inputs:['b-number-input'],options:['b-number-options']},
'affix-feedback':{q:['affix-prompt'],a:[],inputs:['affix-answer'],options:['affix-options']},
'connector-feedback':{q:['connector-prompt'],a:[],inputs:['connector-answer'],options:['connector-options']},
'modal-feedback':{q:['modal-prompt'],a:[],inputs:['modal-answer'],options:['modal-options']},
'cp-feedback':{q:['cp-question'],a:[],inputs:['cp-answer'],options:[]}
};
const text=ids=>ids.map(id=>$(id)?.textContent.trim()).filter(Boolean).join(' · ');
const visible=e=>e&&!e.closest('[hidden]');
function begin(id){records.set(id,[]);picked.delete(id);const host=$('review-'+id);if(host)host.remove();}
function record(id,state,detail){const c=config[id];if(!c||!state)return;const rows=records.get(id)||[];let input=c.inputs.map($).filter(visible).map(e=>e.value.trim()).filter(Boolean).join(' / ');if(c.multi)input=[...$(c.multi).querySelectorAll('input')].map(e=>e.value).join(' / ');if(c.extra&&visible($(c.extra)))input=$(c.extra).textContent.trim();const selection=picked.get(id);const self=selection&&/^(Lo sabía|Repasar|Lo recordaba|No lo recordaba|Recordaba|Olvid)/i.test(selection);rows.push({question:(c.label?c.label+' · ':'')+text(c.q),answer:input||selection||(state==='revealed'?'Sin respuesta: solución consultada':'Autoevaluación de tarjeta'),solution:text(c.a)||detail,detail,state,self});records.set(id,rows);picked.delete(id);}
function finish(id,anchor){const rows=records.get(id)||[];const target=$(anchor);if(!target)return;let host=$('review-'+id);if(!host){host=document.createElement('section');host.id='review-'+id;host.className='session-review';(target.closest('.v-results-head, .section-head, .game-top')||target).after(host);}host.replaceChildren();const title=document.createElement('h3');title.textContent='Tu sesión, pregunta a pregunta';const note=document.createElement('p');note.className='hint';note.textContent=rows.length?rows.length+' preguntas respondidas. Las tarjetas reflejan tu autoevaluación; las soluciones consultadas se señalan aparte.':'No has respondido preguntas en esta sesión.';host.append(title,note);const list=document.createElement('ol');for(const row of rows){const li=document.createElement('li');const ok=['correct','assisted'].includes(row.state);li.dataset.result=ok?'correct':'incorrect';const status=document.createElement('strong');status.className='review-verdict';status.textContent=ok?'✓ '+(row.state==='assisted'?'Correcto con ayuda':'Correcto'):row.state==='revealed'?'✗ Solución consultada':'✗ Incorrecto';const q=document.createElement('p');q.className='review-question';q.textContent=row.question;const answer=document.createElement('p');answer.textContent='Tu respuesta: '+row.answer;const solution=document.createElement('p');solution.textContent='Respuesta y corrección: '+row.solution;li.append(status,q,answer,solution);if(row.solution!==row.detail){const explanation=document.createElement('p');explanation.className='hint';explanation.textContent=row.detail;li.append(explanation);}list.append(li);}host.append(list);if(id==='feedback'){const again=document.createElement('button');again.type='button';again.className='primary';again.textContent='Volver a practicar';again.addEventListener('click',()=>window.FrVerbPractice.start());host.append(again);}}
document.addEventListener('click',e=>{const b=e.target.closest?.('button');if(!b||b.disabled)return;for(const [id,c]of Object.entries(config)){if(c.options.some(option=>$(option)?.contains(b)))picked.set(id,b.textContent.trim());}const selfMap={remembered:'feedback',forgot:'feedback','v-known':'v-feedback','v-again':'v-feedback','dw-known':'dw-feedback','dw-again':'dw-feedback','dv-knew':'dv-feedback','dv-forgot':'dv-feedback','dt-known':'dt-feedback','dt-again':'dt-feedback','r-knew':'r-feedback','r-forgot':'r-feedback','q-knew':'q-feedback','q-forgot':'q-feedback'};if(selfMap[b.id])picked.set(selfMap[b.id],b.textContent.trim());},true);
window.SessionReview={begin,record,finish};
})();
