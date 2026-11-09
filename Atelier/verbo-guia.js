(() => {
  const group = v => v.fr.endsWith('er') && v.fr !== 'aller' ? '1' : v.fr.endsWith('ir') && v.forms.P[3] === v.fr.slice(0,-2)+'issons' ? '2' : '3';
  const ending = v => ['er','ir','re','oir'].find(e => e === 'oir' ? false : v.fr.endsWith(e)) || 'other';
  const termination = v => v.fr.endsWith('oir') ? 'oir' : ending(v);
  const label = v => ({1:'1.er grupo · -er (con posibles cambios ortográficos)',2:'2.º grupo · -ir / -issons',3:'3.er grupo · irregulares y otros modelos'})[group(v)];
  const usable = s => s && s !== 'NA';
  function explain(v,t,auxChoice) {
    const g=group(v), p=v.forms.P, root=v.fr.slice(0,-2);
    const irregular=' Los verbos irregulares pueden cambiar de raíz: consulta las formas de la tabla.';
    if(t==='P') return g==='1' ? `Infinitivo sin -er: ${root}-. Añade -e, -es, -e, -ons, -ez, -ent. Ejemplo: ${p[0]}. Puede haber ajustes de ortografía o acento (manger → mangeons, acheter → achète).` : g==='2' ? `Infinitivo sin -ir: ${root}-. Añade -is, -is, -it, -issons, -issez, -issent. Ejemplo: ${p[3]}.` : `Este verbo pertenece al 3.er grupo: no hay una única fórmula para todos sus miembros. Aprende sus raíces y terminaciones en la tabla; ejemplo: ${p.filter(usable).slice(0,3).join(', ')}.`;
    if(t==='I') return `Raíz de nous en presente sin -ons + -ais, -ais, -ait, -ions, -iez, -aient. Excepción: être usa ét-. ${v.fr==='être'?'être → ét- → étais':usable(p[3])?`${p[3]} → ${p[3].slice(0,-3)}- → ${v.forms.I[0]}`:'En los impersonales, aprende la forma de il: '+v.forms.I[2]}.`;
    if(t==='F'||t==='C') {
      const base=v.forms.F.find(usable)?.replace(/(?:ai|as|a|ons|ez|ont)$/,'');
      return `Usa normalmente el infinitivo como raíz; en -re, elimina la e final. ${t==='F'?'Añade -ai, -as, -a, -ons, -ez, -ont.':'Usa la misma raíz que el futuro y añade -ais, -ais, -ait, -ions, -iez, -aient.'} Raíz de ${v.fr}: ${base || 'consulta la tabla'}-. Algunas son irregulares: être → ser-, avoir → aur-, aller → ir-, faire → fer-.`;
    }
    if(t==='PC'||t==='PQ') {
      const aux=Conjugador.dual.has(v.fr)?auxChoice:Conjugador.etre.has(v.fr)?'être':'avoir';
      return `${aux} en ${t==='PC'?'presente':'imperfecto'} + participio pasado (${v.forms.K[0]}). Modelos: -er → -é (parler → parlé); 2.º grupo -ir → -i (finir → fini). El 3.er grupo tiene participios variados: prendre → pris, faire → fait. Con être, concuerda con el sujeto; con avoir, puede concordar con un objeto directo anterior.`;
    }
    if(t==='FP') return `Aller en presente (vais, vas, va, allons, allez, vont) + infinitivo sin modificar: va + ${v.fr}. No se añade una terminación a la raíz de ${v.fr}.`;
    if(t==='S') return `Habitualmente, raíz de ils en presente sin -ent + -e, -es, -e, -ent para je, tu, il e ils. Para nous y vous, raíz de nous en presente sin -ons + -ions, -iez. Ejemplo: ils prennent → que je prenne; nous prenons → que nous prenions. Excepciones: être → sois/soyons, avoir → aie/ayons, faire → fasse, pouvoir → puisse.`;
    if(t==='Y') return `Normalmente toma las formas del presente de tu, nous y vous y elimina el pronombre. En los verbos en -er y en aller, tu pierde la s: parle, va (se recupera ante y/en: vas-y, parles-en). Excepciones: être → sois/soyons/soyez, avoir → aie/ayons/ayez, savoir → sache/sachons/sachez, vouloir → veuille/veuillons/veuillez.`;
    return irregular;
  }
  window.VerbGuide={group,termination,label,explain};
})();
