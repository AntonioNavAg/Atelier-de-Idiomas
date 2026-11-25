/* Tarjetas de entrada y explicaciones en página, sin ventanas emergentes. */
(() => {
 const books=new Map();
 function reset(id){const book=books.get(id);if(book){book.container.replaceChildren();book.container.hidden=true;}const grid=document.getElementById(id);grid.hidden=false;grid.classList.remove('preposition-card-grid');}
 function add(id,article,title,description,meta){
  const grid=document.getElementById(id);let book=books.get(id);
  if(!book){const container=document.createElement('div');container.id=id+'-explanations';container.hidden=true;grid.after(container);book={container};books.set(id,book);}
  grid.classList.add('preposition-card-grid');
  const page=document.createElement('section');page.id=id+'-explanation-'+book.container.children.length;page.hidden=true;page.className='preposition-explanation';page.setAttribute('tabindex','-1');page.append(article);book.container.append(page);
  const card=document.createElement('button');card.type='button';card.className='study-card';card.dataset.prepositionCard=page.id;card.setAttribute('aria-controls',page.id);
  for(const [tag,cls,text]of [['span','eyebrow',meta],['strong','',title],['span','',description],['span','study-enter','Ver explicación y ejemplos']]){const e=document.createElement(tag);e.className=cls;e.textContent=text;card.append(e);}
  card.addEventListener('click',()=>{grid.hidden=true;book.container.hidden=false;for(const child of book.container.children)child.hidden=child!==page;page.focus();page.scrollIntoView({block:'start',behavior:'auto'});});grid.append(card);
 }
 window.PrepositionCards={reset,add};
})();
