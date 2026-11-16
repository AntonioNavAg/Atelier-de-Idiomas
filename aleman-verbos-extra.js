/* Ampliación editorial: modelos débiles y derivados separables de formas verificadas. */
(() => {
const verbs=window.DE_VERBS,seen=new Set(verbs.map(v=>v.de));
function push(v){if(seen.has(v.de))return;seen.add(v.de);verbs.push(v);}
const regular=`abonnieren|suscribirse (a una publicación)|B1
analysieren|analizar|B2
argumentieren|argumentar|B2
arrangieren|organizar / arreglar|B2
bewundern|admirar|B1
blühen|florecer|B1
buchen|reservar (un viaje)|A2
drucken|imprimir|A2
duzen|tutear|B1
siezen|tratar de usted|B1
basteln|hacer manualidades|A2
eignen|ser adecuado (sich eignen)|B2
enden|terminar (llegar al fin)|A2
entlasten|aliviar (una carga)|B2
entmutigen|desanimar|B2
erleichtern|facilitar|B1
ermöglichen|hacer posible|B2
erneuern|renovar|B1
ersetzen|sustituir|B1
erweitern|ampliar|B2
finanzieren|financiar|B2
flüstern|susurrar|B1
folgen|seguir|A2|sein
füttern|dar de comer a un animal|A2
gestalten|diseñar / configurar|B2
gestatten|permitir (formal)|B2
glänzen|brillar|B1
gründen|fundar|B1
heiraten|casarse con|A2
heizen|calentar (una vivienda)|A2
herstellen|INVALID|B1
husten|toser|A2
ignorieren|ignorar|B1
installieren|instalar|B1
integrieren|integrar|B2
investieren|invertir (dinero)|B2
kämpfen|luchar|B1
klingeln|sonar (un timbre)|A1
klopfen|llamar (a una puerta) / golpear|A2
kombinieren|combinar|B1
kommunizieren|comunicarse|B1
konzentrieren|concentrar|B1
kritisieren|criticar|B1
kündigen|rescindir / despedir|B1
landen|aterrizar|A2|sein
liefern|entregar / suministrar|B1
loben|elogiar|B1
löschen|borrar / apagar (fuego)|B1
melden|comunicar / notificar|B1
mischen|mezclar|A2
motivieren|motivar|B1
notieren|anotar|A2
packen|hacer la maleta / empaquetar|A2
pflanzen|plantar|A2
pflegen|cuidar|B1
präsentieren|presentar / exponer|B1
protestieren|protestar|B2
qualifizieren|cualificar|B2
rauchen|fumar|A1
reinigen|limpiar (a fondo)|B1
riskieren|arriesgar|B2
rollen|rodar (mover un objeto)|B1
schaden|perjudicar|B1
schalten|conmutar / cambiar de marcha|B1
schmecken|tener sabor / gustar (comida)|A1
schmücken|decorar|B1
schneien|nevar|A2
schütteln|sacudir|B1
sichern|asegurar / proteger|B2
sortieren|clasificar / ordenar|A2
sparen|ahorrar|A2
spülen|lavar (vajilla) / enjuagar|A2
starten|iniciar (algo)|A2
stören|molestar / interrumpir|B1
stornieren|cancelar (una reserva)|B1
surfen|navegar por Internet / hacer surf|A2
tauschen|intercambiar|A2
teilen|compartir / dividir|A2
tippen|teclear|A2
trocknen|secar (algo)|A2
üben|practicar / ensayar|A1
übernachten|pasar la noche|A2
überprüfen|comprobar / revisar|B1
unterrichten|dar clase|B1
verbrauchen|consumir|B1
vergleichen|INVALID|B1
verlangen|exigir / pedir|B1
verlängern|prolongar|B1
verletzen|herir|B1
verpacken|embalar|A2
verreisen|irse de viaje|A2|sein
versichern|asegurar / garantizar|B2
versorgen|abastecer / cuidar|B2
verteilen|repartir|B1
vertrauen|confiar|B1
verursachen|causar|B2
verwalten|administrar|B2
verweigern|negarse a conceder|B2
warnen|advertir|B1
wirken|actuar / producir efecto|B2
wünschen|desear|A2
zerstören|destruir|B1
zögern|vacilar|B2`;
for(const row of regular.split('\n')){const [de,es,level,aux='haben']=row.split('|');if(es==='INVALID')continue;const stem=de.endsWith('en')?de.slice(0,-2):de.slice(0,-1),extra=/[dt]$/.test(stem)||['eignen'].includes(de),sibilant=/[sßxz]$/.test(stem);const p=[de.endsWith('eln')?stem.slice(0,-2)+'le':stem+'e',stem+(extra?'est':sibilant?'t':'st'),stem+(extra?'et':'t'),de,stem+(extra?'et':'t'),de];const noGe=/^(be|emp|ent|er|ge|miss|ver|zer)/.test(de)||de.endsWith('ieren')||['übernachten','überprüfen','unterrichten'].includes(de);push({de,es,level,aux,p,past:stem+(extra?'ete':'te'),part:(noGe?'':'ge')+stem+(extra?'et':'t'),kind:'regular',prefix:'',modal:false});}
for(const [de,es,p,past,part] of [['bieten','ofrecer',['biete','bietest','bietet','bieten','bietet','bieten'],'bot','geboten'],['schlagen','golpear',['schlage','schlägst','schlägt','schlagen','schlagt','schlagen'],'schlug','geschlagen'],['werfen','lanzar',['werfe','wirfst','wirft','werfen','werft','werfen'],'warf','geworfen']])push({de,es,p,past,part,level:'B1',aux:'haben',kind:'irregular',prefix:'',modal:false});
const derivatives=`ab|holen|recoger (a alguien)|A2
ab|machen|acordar|B1
ab|sagen|cancelar (una cita)|B1
ab|schreiben|copiar (un texto)|B1
ab|stellen|dejar (un objeto) / apagar|B1
an|bieten|ofrecer|A2
an|fangen|empezar|A1
an|geben|indicar / declarar|B1
an|halten|detener (un vehículo)|B1
an|hören|escuchar (atentamente)|B1
an|melden|inscribir|A2
an|probieren|probarse (ropa)|A2
an|schauen|mirar / observar|A2
auf|bauen|montar / construir|B1
auf|geben|abandonar (un intento)|B1
auf|hängen|colgar (un objeto)|B1
auf|machen|abrir (coloquial)|A1
auf|passen|prestar atención|A2
auf|räumen|ordenar (una habitación)|A1
auf|schreiben|anotar por escrito|A2
auf|wachen|despertarse|A2|sein
aus|füllen|rellenar (un formulario)|A2
aus|geben|gastar (dinero)|A2
aus|machen|apagar|A1
aus|packen|deshacer la maleta / desembalar|A2
aus|ruhen|descansar (sich ausruhen)|A2
aus|schalten|apagar (un aparato)|A2
aus|sprechen|pronunciar|B1
aus|wählen|seleccionar|B1
ein|laden|invitar|A1
ein|packen|meter en la maleta / envolver|A2
ein|richten|amueblar / configurar|B1
ein|schalten|encender (un aparato)|A2
ein|schlafen|dormirse|A2|sein
fest|stellen|constatar|B2
mit|arbeiten|colaborar|B1
mit|bringen|traer consigo|A2
mit|machen|participar|A2
nach|denken|reflexionar|B1
nach|fragen|preguntar de nuevo|B1
nach|schauen|consultar / comprobar|B1
vor|bereiten|preparar|A2
vor|lesen|leer en voz alta|A2
vor|schlagen|proponer|B1
vor|stellen|presentar|A2
weg|werfen|tirar (desechar)|A2
zu|hören|escuchar (a alguien)|A2
zu|machen|cerrar (coloquial)|A1
zurück|geben|devolver|A2
zusammen|arbeiten|trabajar juntos|B1`;
const helpers={holen:['hole','holst','holt','holen','holt','holen','holte','geholt'],stellen:['stelle','stellst','stellt','stellen','stellt','stellen','stellte','gestellt'],schauen:['schaue','schaust','schaut','schauen','schaut','schauen','schaute','geschaut'],bauen:['baue','baust','baut','bauen','baut','bauen','baute','gebaut'],hängen:['hänge','hängst','hängt','hängen','hängt','hängen','hängte','gehängt'],räumen:['räume','räumst','räumt','räumen','räumt','räumen','räumte','geräumt'],wachen:['wache','wachst','wacht','wachen','wacht','wachen','wachte','gewacht'],füllen:['fülle','füllst','füllt','füllen','füllt','füllen','füllte','gefüllt'],ruhen:['ruhe','ruhst','ruht','ruhen','ruht','ruhen','ruhte','geruht'],wählen:['wähle','wählst','wählt','wählen','wählt','wählen','wählte','gewählt'],richten:['richte','richtest','richtet','richten','richtet','richten','richtete','gerichtet'],bereiten:['bereite','bereitest','bereitet','bereiten','bereitet','bereiten','bereitete','bereitet']};
for(const line of derivatives.split('\n')){if(verbs.length>=350)break;const [prefix,base,es,level,aux='haben']=line.split('|');if(seen.has(prefix+base))continue;const h=helpers[base],v=h?{p:h.slice(0,6),past:h[6],part:h[7],kind:'regular'}:verbs.find(v=>v.de===base);if(!v)throw Error('Modelo ausente: '+base);push({de:prefix+base,es,level,aux,p:v.p.map(x=>x+' '+prefix),past:v.past,part:prefix+v.part,kind:v.kind,prefix,modal:false,base});}
if(verbs.length!==350)throw Error('Se esperaban 350 verbos, hay '+verbs.length);
verbs.sort((a,b)=>a.de.localeCompare(b.de,'de'));
})();
