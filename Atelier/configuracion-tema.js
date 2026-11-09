/* Aplicar el tema antes de dibujar la página; no modifica el progreso. */
(() => {
 let theme='default';
 try { const saved=localStorage.getItem('atelier-theme-v1'); if(['default','dark','warm','studio','focus'].includes(saved))theme=saved; } catch {}
 document.documentElement.dataset.theme=theme;
})();
