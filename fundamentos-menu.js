(() => {
 const $=id=>document.getElementById(id),cards=[...document.querySelectorAll('[data-foundation]')],parts=['articles','gender','number','roadmap','introduction'];
 function home(){if('speechSynthesis' in window)window.speechSynthesis.cancel();$('foundation-menu').hidden=false;$('foundation-back').hidden=true;$('foundation-audio').hidden=true;for(const p of parts)$('foundation-'+p).hidden=true;}
 for(const c of cards)c.addEventListener('click',()=>{home();$('foundation-menu').hidden=true;$('foundation-back').hidden=false;const p=c.dataset.foundation;if(p==='alphabet'||p==='numbers'){$('foundation-audio').hidden=false;$(p==='alphabet'?'b-alphabet-tab':'b-numbers-tab').click();}else $('foundation-'+p).hidden=false;$('foundation-back').focus();});
 $('foundation-back').addEventListener('click',()=>{home();cards[0]?.focus();});
 for(const [id,view] of [['verbs-open-catalog','catalog'],['verbs-open-practice','practice']])$(id).addEventListener('click',()=>{const tab=[...document.querySelectorAll('[data-view]')].find(t=>t.dataset.view===view);tab.click();tab.focus();});
 window.FoundationMenu={home};
})();
