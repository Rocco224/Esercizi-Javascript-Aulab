alert("Inserisci i valori e ti dirò quanta birra potrá bere ogni partecipante");

var partecipants = parseInt(prompt("Quanti sono i partecipanti?"));
var bottles = parseInt(prompt("Quante bottiglie di birra avete acquistato?"));
var capacity = parseFloat(prompt("Da quanto sono le birre?"));

var beer = partecipants / (bottles * capacity);

console.log("Ogni partecipante può bere " + beer + " litri di birra");
alert("Ogni partecipante può bere " + beer + " litri di birra");