/* Modelos editoriales: formas principales explícitas para fuertes, mixtos y auxiliares. */
(() => {
 const verbs=[];
 function regularPresent(inf){const stem=inf.endsWith('en')?inf.slice(0,-2):inf.slice(0,-1);const extra=/[dt]$/.test(stem)||['öffnen','rechnen','zeichnen','atmen'].includes(inf);const sibilant=/[sßxz]$/.test(stem);return [inf.endsWith('eln')?stem.slice(0,-2)+'le':stem+'e',stem+(extra?'est':sibilant?'t':'st'),stem+(extra?'et':'t'),inf,stem+(extra?'et':'t'),inf];}
 const regular=`machen|hacer|A1
lernen|aprender|A1
wohnen|vivir (residir)|A1
arbeiten|trabajar|A1
spielen|jugar|A1
kaufen|comprar|A1
suchen|buscar|A1
fragen|preguntar|A1
antworten|responder|A1
sagen|decir|A1
hören|oír|A1
kochen|cocinar|A1
leben|vivir (estar vivo)|A1
lieben|amar|A1
brauchen|necesitar|A1
kosten|costar|A1
bezahlen|pagar|A1
zahlen|pagar (una cantidad)|A1
warten|esperar (aguardar)|A1
öffnen|abrir|A1
schließen|cerrar|A1
reisen|viajar|A1|sein
besuchen|visitar|A1
erzählen|contar (narrar)|A2
erklären|explicar|A2
zeigen|mostrar|A1
glauben|creer|A1
hoffen|esperar (tener esperanza)|A2
lachen|reír|A1
weinen|llorar|A2
tanzen|bailar|A1
malen|pintar|A1
zeichnen|dibujar|A2
fotografieren|fotografiar|A1
telefonieren|hablar por teléfono|A1
studieren|estudiar (en la universidad)|A1
probieren|probar|A2
reparieren|reparar|A2
reservieren|reservar|A1
organisieren|organizar|A2
informieren|informar|A2
diskutieren|debatir|B1
akzeptieren|aceptar|B1
funktionieren|funcionar|A2
passieren|suceder|A2|sein
interessieren|interesar|A2
trainieren|entrenar|A2
gratulieren|felicitar|A2
kontrollieren|controlar|B1
reduzieren|reducir|B1
produzieren|producir|B1
reagieren|reaccionar|B1
markieren|marcar|A2
kopieren|copiar|A2
buchstabieren|deletrear|A1
parken|aparcar|A1
putzen|limpiar|A1
baden|bañarse (tomar un baño)|A1
duschen|ducharse|A1
frühstücken|desayunar|A1
feiern|celebrar|A2
ändern|cambiar (modificar)|A2
wandern|hacer senderismo|A2|sein
sammeln|coleccionar|A2
lächeln|sonreír|A2
handeln|actuar / comerciar|B1
wechseln|cambiar (sustituir)|A2
mieten|alquilar (tomar en alquiler)|A2
vermieten|alquilar (dar en alquiler)|B1
bestellen|pedir (un encargo)|A1
bedeuten|significar|A2
benutzen|utilizar|A2
erlauben|permitir|A2
versuchen|intentar|A2
verpassen|perder (una oportunidad o transporte)|A2
verdienen|ganar (dinero) / merecer|A2
verändern|transformar|B1
verbessern|mejorar|B1
verschlechtern|empeorar|B1
erreichen|alcanzar|B1
erleben|vivir (una experiencia)|B1
erledigen|realizar (una tarea)|B1
erwarten|esperar (prever)|B1
erinnern|recordar (a alguien algo)|B1
gehören|pertenecer|A2
fehlen|faltar|A2
passen|encajar|A2
dauern|durar|A2
retten|salvar|B1
töten|matar|B1
verletzen|herir|B1
schützen|proteger|B1
nutzen|aprovechar|B1
planen|planificar|A2
prüfen|examinar|B1
lösen|resolver|B1
rechnen|calcular|A2
atmen|respirar|A2
beobachten|observar|B1
beachten|tener en cuenta|B1
begründen|justificar|B1
behaupten|afirmar|B2
berichten|informar (relatar)|B1
beschreiben|describir|B1
bewerten|valorar|B2
fordern|exigir|B2
fördern|fomentar|B2
vermitteln|transmitir / mediar|B2
entwickeln|desarrollar|B1
entdecken|descubrir|B1
entschuldigen|disculpar|A2
veröffentlichen|publicar|B2
untersuchen|investigar / examinar|B1
unterstützen|apoyar|B1
übersetzen|traducir|B1
wiederholen|repetir|A1`;
 for(const line of regular.split('\n')){const [de,es,level,aux='haben']=line.split('|');if(es==='INVALID'||['schließen','beschreiben'].includes(de))continue;const p=regularPresent(de),stem=de.endsWith('en')?de.slice(0,-2):de.slice(0,-1),extra=/[dt]$/.test(stem)||['öffnen','rechnen','zeichnen','atmen'].includes(de);const past=stem+(extra?'ete':'te');const noGe=/^(be|emp|ent|er|ge|miss|ver|zer)/.test(de)||de.endsWith('ieren')||['untersuchen','unterstützen','übersetzen','wiederholen'].includes(de);verbs.push({de,es,level,aux,p,past,part:(noGe?'':'ge')+stem+(extra?'et':'t'),kind:'regular',prefix:'',modal:false});}
 const irregular=`sein|ser / estar|A1|sein|bin,bist,ist,sind,seid,sind|war|gewesen
haben|tener / haber|A1|haben|habe,hast,hat,haben,habt,haben|hatte|gehabt
werden|convertirse / llegar a ser|A2|sein|werde,wirst,wird,werden,werdet,werden|wurde|geworden
gehen|ir (a pie)|A1|sein|gehe,gehst,geht,gehen,geht,gehen|ging|gegangen
kommen|venir|A1|sein|komme,kommst,kommt,kommen,kommt,kommen|kam|gekommen
fahren|ir en vehículo / conducir|A1|sein|fahre,fährst,fährt,fahren,fahrt,fahren|fuhr|gefahren
laufen|correr / andar|A1|sein|laufe,läufst,läuft,laufen,lauft,laufen|lief|gelaufen
bleiben|quedarse|A1|sein|bleibe,bleibst,bleibt,bleiben,bleibt,bleiben|blieb|geblieben
essen|comer|A1|haben|esse,isst,isst,essen,esst,essen|aß|gegessen
trinken|beber|A1|haben|trinke,trinkst,trinkt,trinken,trinkt,trinken|trank|getrunken
lesen|leer|A1|haben|lese,liest,liest,lesen,lest,lesen|las|gelesen
sehen|ver|A1|haben|sehe,siehst,sieht,sehen,seht,sehen|sah|gesehen
sprechen|hablar|A1|haben|spreche,sprichst,spricht,sprechen,sprecht,sprechen|sprach|gesprochen
nehmen|tomar|A1|haben|nehme,nimmst,nimmt,nehmen,nehmt,nehmen|nahm|genommen
geben|dar|A1|haben|gebe,gibst,gibt,geben,gebt,geben|gab|gegeben
helfen|ayudar|A1|haben|helfe,hilfst,hilft,helfen,helft,helfen|half|geholfen
schlafen|dormir|A1|haben|schlafe,schläfst,schläft,schlafen,schlaft,schlafen|schlief|geschlafen
tragen|llevar (encima)|A2|haben|trage,trägst,trägt,tragen,tragt,tragen|trug|getragen
waschen|lavar|A1|haben|wasche,wäschst,wäscht,waschen,wascht,waschen|wusch|gewaschen
halten|sostener / detener|A2|haben|halte,hältst,hält,halten,haltet,halten|hielt|gehalten
lassen|dejar / permitir|A2|haben|lasse,lässt,lässt,lassen,lasst,lassen|ließ|gelassen
finden|encontrar|A1|haben|finde,findest,findet,finden,findet,finden|fand|gefunden
stehen|estar de pie|A1|haben|stehe,stehst,steht,stehen,steht,stehen|stand|gestanden
sitzen|estar sentado|A1|haben|sitze,sitzt,sitzt,sitzen,sitzt,sitzen|saß|gesessen
liegen|estar tumbado / estar situado|A1|haben|liege,liegst,liegt,liegen,liegt,liegen|lag|gelegen
schreiben|escribir|A1|haben|schreibe,schreibst,schreibt,schreiben,schreibt,schreiben|schrieb|geschrieben
schließen|cerrar|A1|haben|schließe,schließt,schließt,schließen,schließt,schließen|schloss|geschlossen
beginnen|comenzar|A2|haben|beginne,beginnst,beginnt,beginnen,beginnt,beginnen|begann|begonnen
gewinnen|ganar (una competición)|A2|haben|gewinne,gewinnst,gewinnt,gewinnen,gewinnt,gewinnen|gewann|gewonnen
verlieren|perder (extraviar)|A2|haben|verliere,verlierst,verliert,verlieren,verliert,verlieren|verlor|verloren
verstehen|entender|A1|haben|verstehe,verstehst,versteht,verstehen,versteht,verstehen|verstand|verstanden
vergessen|olvidar|A2|haben|vergesse,vergisst,vergisst,vergessen,vergesst,vergessen|vergaß|vergessen
treffen|encontrarse con / acertar|A2|haben|treffe,triffst,trifft,treffen,trefft,treffen|traf|getroffen
fliegen|volar|A2|sein|fliege,fliegst,fliegt,fliegen,fliegt,fliegen|flog|geflogen
fallen|caer|A2|sein|falle,fällst,fällt,fallen,fallt,fallen|fiel|gefallen
steigen|subir|A2|sein|steige,steigst,steigt,steigen,steigt,steigen|stieg|gestiegen
sterben|morir|A2|sein|sterbe,stirbst,stirbt,sterben,sterbt,sterben|starb|gestorben
wachsen|crecer|B1|sein|wachse,wächst,wächst,wachsen,wachst,wachsen|wuchs|gewachsen
ziehen|tirar de / trasladarse|A2|haben|ziehe,ziehst,zieht,ziehen,zieht,ziehen|zog|gezogen
rufen|llamar (con la voz)|A2|haben|rufe,rufst,ruft,rufen,ruft,rufen|rief|gerufen
singen|cantar|A1|haben|singe,singst,singt,singen,singt,singen|sang|gesungen
bringen|traer|A1|haben|bringe,bringst,bringt,bringen,bringt,bringen|brachte|gebracht
denken|pensar|A2|haben|denke,denkst,denkt,denken,denkt,denken|dachte|gedacht
kennen|conocer|A1|haben|kenne,kennst,kennt,kennen,kennt,kennen|kannte|gekannt
nennen|nombrar|A2|haben|nenne,nennst,nennt,nennen,nennt,nennen|nannte|genannt
wissen|saber (un dato)|A1|haben|weiß,weißt,weiß,wissen,wisst,wissen|wusste|gewusst
können|poder (capacidad)|A1|haben|kann,kannst,kann,können,könnt,können|konnte|gekonnt
müssen|tener que|A1|haben|muss,musst,muss,müssen,müsst,müssen|musste|gemusst
dürfen|poder (permiso)|A1|haben|darf,darfst,darf,dürfen,dürft,dürfen|durfte|gedurft
sollen|deber (encargo o recomendación)|A1|haben|soll,sollst,soll,sollen,sollt,sollen|sollte|gesollt
wollen|querer (intención)|A1|haben|will,willst,will,wollen,wollt,wollen|wollte|gewollt
mögen|gustar|A1|haben|mag,magst,mag,mögen,mögt,mögen|mochte|gemocht
heißen|llamarse|A1|haben|heiße,heißt,heißt,heißen,heißt,heißen|hieß|geheißen`;
 const modals=new Set(['können','müssen','dürfen','sollen','wollen','mögen']);
 for(const line of irregular.split('\n')){const [de,es,level,aux,p,past,part]=line.split('|');verbs.push({de,es,level,aux,p:p.split(','),past,part,kind:'irregular',prefix:'',modal:modals.has(de)});}
 const derivatives=`an|kommen|llegar|A1|sein
ab|fahren|salir (un transporte)|A1|sein
auf|stehen|levantarse|A1|sein
ein|kaufen|hacer la compra|A1|haben
an|rufen|llamar por teléfono|A1|haben
auf|machen|abrir (coloquial)|A1|haben
zu|machen|cerrar (coloquial)|A1|haben
an|fangen|empezar|A1|haben
mit|kommen|venir con alguien|A1|sein
zurück|kommen|volver|A1|sein
zurück|gehen|regresar a pie|A2|sein
weg|gehen|irse|A2|sein
aus|gehen|salir (de ocio)|A1|sein
ein|steigen|subir a un transporte|A1|sein
aus|steigen|bajar de un transporte|A1|sein
um|steigen|hacer transbordo|A1|sein
mit|bringen|traer consigo|A1|haben
mit|nehmen|llevar consigo|A1|haben
ab|holen|recoger (a alguien)|A1|haben
auf|hören|dejar de / cesar|A2|haben
zu|hören|escuchar atentamente|A2|haben
an|sehen|mirar|A2|haben
fern|sehen|ver la televisión|A1|haben
aus|sehen|tener aspecto|A2|haben
ein|laden|invitar|A1|haben
vor|lesen|leer en voz alta|A2|haben
auf|schreiben|anotar|A2|haben
ab|schreiben|copiar por escrito|B1|haben
ein|schlafen|dormirse|A2|sein
auf|wachen|despertarse|A1|sein
an|ziehen|ponerse (ropa)|A1|haben
aus|ziehen|quitarse (ropa)|A1|haben
vor|stellen|presentar|A2|haben
her|stellen|fabricar|B1|haben
fest|stellen|constatar|B1|haben
teil|nehmen|participar|B1|haben
statt|finden|tener lugar|B1|haben
vor|bereiten|preparar|A2|haben
auf|räumen|ordenar (una habitación)|A1|haben
ein|packen|empaquetar|A2|haben
aus|packen|desempaquetar|A2|haben
ab|waschen|lavar los platos|A2|haben
ab|geben|entregar|B1|haben
weiter|geben|transmitir (pasar a otro)|B1|haben
zurück|geben|devolver|A2|haben
nach|fragen|preguntar de nuevo|B1|haben
nach|denken|reflexionar|B1|haben
auf|passen|prestar atención|A2|haben`;
 // Modelos auxiliares para derivados; no se añaden como entradas del catálogo.
 const helpers={fangen:{p:['fange','fängst','fängt','fangen','fangt','fangen'],past:'fing',part:'gefangen',kind:'irregular'},laden:{p:['lade','lädst','lädt','laden','ladet','laden'],past:'lud',part:'geladen',kind:'irregular'}};
 for(const inf of ['holen','wachen','stellen','bereiten','räumen','packen']){const stem=inf.slice(0,-2),e=/[dt]$/.test(stem);helpers[inf]={p:regularPresent(inf),past:stem+(e?'ete':'te'),part:(inf==='bereiten'?'':'ge')+stem+(e?'et':'t'),kind:'regular'};}
 for(const line of derivatives.split('\n')){const [prefix,base,es,level,aux]=line.split('|'),v=verbs.find(v=>v.de===base)||helpers[base];if(!v)throw Error(base);verbs.push({de:prefix+base,es,level,aux,p:v.p.map(p=>p+' '+prefix),past:v.past,part:prefix+v.part,kind:v.kind,prefix,modal:false,base});}
 const inseparable=`be|schreiben|describir|B1
be|kommen|recibir|A1
ver|bringen|pasar (tiempo)|A2
ver|lassen|abandonar|B1
ver|geben|perdonar / conceder|B1
be|halten|conservar|B1
er|halten|recibir / conservar|B1
ver|meiden|evitar|B1`;
 helpers.meiden={p:['meide','meidest','meidet','meiden','meidet','meiden'],past:'mied',part:'gemieden',kind:'irregular'};
 for(const line of inseparable.split('\n')){const [pre,base,es,level]=line.split('|'),v=verbs.find(v=>v.de===base)||helpers[base];verbs.push({de:pre+base,es,level,aux:'haben',p:v.p.map(p=>pre+p),past:pre+v.past,part:pre+v.part.replace(/^ge/,''),kind:'irregular',prefix:'',modal:false});}
 window.DE_VERBS=verbs.sort((a,b)=>a.de.localeCompare(b.de,'de'));
})();
