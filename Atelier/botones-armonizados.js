/* También limpia las etiquetas de botones generados durante los ejercicios. */
(() => {
function clean(root){const buttons=root.matches?.('button')?[root]:[...root.querySelectorAll('button')];for(const button of buttons){const walker=document.createTreeWalker(button,NodeFilter.SHOW_TEXT);let node;while((node=walker.nextNode())){const value=node.nodeValue.replace(/[←→↩➜➔]/g,'').replace(/ {2,}/g,' ');if(value!==node.nodeValue)node.nodeValue=value;}}}
clean(document);const observer=new MutationObserver(records=>{for(const record of records){if(record.type==='characterData'){const b=record.target.parentElement?.closest('button');if(b)clean(b);}else for(const node of record.addedNodes){if(node.nodeType===1)clean(node);else if(node.nodeType===3){const b=node.parentElement?.closest('button');if(b)clean(b);}}}});observer.observe(document.body,{childList:true,subtree:true,characterData:true});
})();
