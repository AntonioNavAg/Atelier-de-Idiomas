/* Dialog nativo: foco confinado, fondo inactivo y cierre mediante Escape. */
(() => {
 const ids=['v-setup','dw-setup','de-declensions-setup'];const previous=new Map();
 function close(id){const dialog=document.getElementById(id);if(dialog.open)dialog.close();dialog.hidden=true;}
 function open(id){const dialog=document.getElementById(id);previous.set(id,document.activeElement);dialog.hidden=false;if(!dialog.open)dialog.showModal();}
 for(const id of ids){const dialog=document.getElementById(id);document.getElementById(id+'-close').addEventListener('click',()=>close(id));dialog.addEventListener('close',()=>{dialog.hidden=true;const target=previous.get(id);if(target?.isConnected&&!target.closest('[hidden]'))target.focus();});dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close(id);});}
 window.PracticeModal={open,close};
})();
