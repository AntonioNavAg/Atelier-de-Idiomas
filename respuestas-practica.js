/* Capa visual compartida; no modifica puntuaciones ni validación de respuestas. */
(() => {
const classify=text=>{if(/solución consultada/i.test(text))return 'revealed';if(/^(?:¡)?(?:Correcto|Correcta|Bien\b)/i.test(text))return /con ayuda/i.test(text)?'assisted':'correct';if(/^(?:Para repasar:|Respuesta:|Revisa la |Repasa la solución|No coincide|Esta es la respuesta prevista)/i.test(text))return 'incorrect';return '';};
const labels={correct:'✓ Correcto',assisted:'✓ Correcto con ayuda',incorrect:'✗ Incorrecto · Vamos a repasarlo',revealed:'◉ Solución consultada'};
window.PracticeFeedback={classify};
for(const el of document.querySelectorAll('[id="feedback"], [id$="-feedback"]')){
 el.setAttribute('role','status');el.setAttribute('aria-live','polite');el.setAttribute('aria-atomic','true');
 const observer=new MutationObserver(update);
 function update(){observer.disconnect();const text=el.textContent.trim(),state=classify(text);el.dataset.feedbackState=state;if(state){const heading=document.createElement('strong'),detail=document.createElement('span');heading.className='practice-feedback-heading';heading.textContent=labels[state];detail.className='practice-feedback-detail';detail.textContent=text;el.replaceChildren(heading,detail);}observer.observe(el,{childList:true,subtree:true,characterData:true});}
 update();
}
})();
