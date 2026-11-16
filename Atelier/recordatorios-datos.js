/* Ejemplos editoriales para recordatorios. Solo se usan entradas presentes en el catálogo. */
(() => {
const raw={fr:`fenêtre|la fenêtre|ventana|J’ouvre la fenêtre.|Abro la ventana.
porte|la porte|puerta|La porte est ouverte.|La puerta está abierta.
maison|la maison|casa|Je rentre à la maison.|Vuelvo a casa.
école|l’école|escuela|Les enfants vont à l’école.|Los niños van a la escuela.
eau|l’eau|agua|Je bois de l’eau.|Bebo agua.
pain|le pain|pan|J’achète du pain.|Compro pan.
pomme|la pomme|manzana|Je mange une pomme.|Como una manzana.
café|le café|café|Le café est chaud.|El café está caliente.
train|le train|tren|Le train arrive bientôt.|El tren llega pronto.
ville|la ville|ciudad|J’habite dans cette ville.|Vivo en esta ciudad.
enfant|un enfant|niño|Cet enfant joue dans le jardin.|Este niño juega en el jardín.
chat|le chat|gato|Le chat dort.|El gato duerme.
chien|le chien|perro|Je promène le chien.|Paseo al perro.
table|la table|mesa|Le livre est sur la table.|El libro está sobre la mesa.
chaise|la chaise|silla|Cette chaise est confortable.|Esta silla es cómoda.
soleil|le soleil|sol|Le soleil brille.|El sol brilla.
pluie|la pluie|lluvia|J’écoute la pluie.|Escucho la lluvia.
ami|un ami|amigo|Je parle avec un ami.|Hablo con un amigo.
famille|la famille|familia|Ma famille habite ici.|Mi familia vive aquí.
travail|le travail|trabajo|Je vais au travail.|Voy al trabajo.
matin|le matin|mañana (parte del día)|Je marche le matin.|Camino por la mañana.
soir|le soir|tarde-noche|Je lis le soir.|Leo por la noche.
musique|la musique|música|J’écoute de la musique.|Escucho música.
bébé|le bébé|bebé|Le bébé dort.|El bebé duerme.`,de:`Fenster|das Fenster|ventana|Ich öffne das Fenster.|Abro la ventana.
Tür|die Tür|puerta|Die Tür ist offen.|La puerta está abierta.
Haus|das Haus|casa|Das Haus hat einen Garten.|La casa tiene un jardín.
Buch|das Buch|libro|Ich lese ein Buch.|Leo un libro.
Wasser|das Wasser|agua|Ich trinke Wasser.|Bebo agua.
Brot|das Brot|pan|Ich kaufe Brot.|Compro pan.
Apfel|der Apfel|manzana|Ich esse einen Apfel.|Como una manzana.
Kaffee|der Kaffee|café|Der Kaffee ist heiß.|El café está caliente.
Zug|der Zug|tren|Der Zug kommt bald.|El tren llega pronto.
Stadt|die Stadt|ciudad|Ich wohne in dieser Stadt.|Vivo en esta ciudad.
Garten|der Garten|jardín|Die Kinder spielen im Garten.|Los niños juegan en el jardín.
Katze|die Katze|gato|Die Katze schläft.|El gato duerme.
Hund|der Hund|perro|Ich gehe mit dem Hund spazieren.|Paseo al perro.
Tisch|der Tisch|mesa|Das Buch liegt auf dem Tisch.|El libro está sobre la mesa.
Stuhl|der Stuhl|silla|Dieser Stuhl ist bequem.|Esta silla es cómoda.
Sonne|die Sonne|sol|Die Sonne scheint.|El sol brilla.
Regen|der Regen|lluvia|Ich höre den Regen.|Escucho la lluvia.
Freund|der Freund|amigo|Ich spreche mit einem Freund.|Hablo con un amigo.
Familie|die Familie|familia|Meine Familie wohnt hier.|Mi familia vive aquí.
Arbeit|die Arbeit|trabajo|Ich gehe zur Arbeit.|Voy al trabajo.
Morgen|der Morgen|mañana (parte del día)|Am Morgen gehe ich spazieren.|Paseo por la mañana.
Abend|der Abend|tarde-noche|Am Abend lese ich.|Leo por la noche.
Musik|die Musik|música|Ich höre Musik.|Escucho música.
Frage|die Frage|pregunta|Ich habe eine Frage.|Tengo una pregunta.`};
window.ReminderExamples=Object.fromEntries(Object.entries(raw).map(([lang,rows])=>[lang,rows.split('\n').map(row=>{const [lemma,word,meaning,sentence,translation]=row.split('|');return {lemma,word,meaning,sentence,translation};})]));
})();
