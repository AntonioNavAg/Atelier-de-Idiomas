/* Menús deslizables: desplazamiento manual, sin rotación automática. */
(() => {
 for(const [index,rail] of [...document.querySelectorAll('.study-grid')].entries()){
  if(!rail.id)rail.id='study-rail-'+index;
  rail.setAttribute('tabindex','0');rail.setAttribute('role','region');rail.setAttribute('aria-label','Opciones de estudio; desplaza para ver más');
  const toolbar=document.createElement('div');toolbar.className='rail-toolbar';
  const hint=document.createElement('p');hint.textContent='Explora las tarjetas · Desliza o usa las flechas';
  const actions=document.createElement('div');actions.className='rail-actions';
  const previous=document.createElement('button'),next=document.createElement('button');
  previous.textContent='← Anteriores';next.textContent='Siguientes →';
  for(const button of [previous,next]){button.type='button';button.className='small';button.setAttribute('aria-controls',rail.id);}
  previous.setAttribute('aria-label','Ver tarjetas anteriores');next.setAttribute('aria-label','Ver tarjetas siguientes');
  function move(direction){const card=rail.querySelector('.study-card');const step=card?card.getBoundingClientRect().width+20:rail.clientWidth;rail.scrollBy({left:direction*step,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
  function update(){const max=rail.scrollWidth-rail.clientWidth;previous.disabled=rail.scrollLeft<=2;next.disabled=rail.scrollLeft>=max-2;actions.hidden=max<=2;}
  previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  rail.addEventListener('scroll',update,{passive:true});
  rail.addEventListener('keydown',event=>{if(event.target!==rail)return;if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowLeft'?-1:1);}});
  actions.append(previous,next);toolbar.append(hint,actions);rail.before(toolbar);
  if('ResizeObserver' in window)new ResizeObserver(update).observe(rail);
  window.addEventListener('resize',update);update();
 }
})();
