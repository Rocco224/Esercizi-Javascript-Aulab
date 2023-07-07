alert ("Inserisci le temperature di questa settimana e ti dirò la temperatura massima e quella minima");

//dichiarazioni variabili
var mon = parseFloat(prompt("Inserisci la temperatura di lunedì"));
var tue = parseFloat(prompt("Inserisci la temperatura martedì"));
var wed = parseFloat(prompt("Inserisci la temperatura mercoledì"));
var thu = parseFloat(prompt("Inserisci la temperatura giovedì"));
var fri = parseFloat(prompt("Inserisci la temperatura venerdì"));
var sat = parseFloat(prompt("Inserisci la temperatura sabato"));
var sun = parseFloat(prompt("Inserisci la temperatura domenica"));

//restituisce il valore minimo
var coldest = Math.min(mon, tue, wed, thu, fri, sat, sun);
//restituisce il valore massimo
var hottest = Math.max(mon, tue, wed, thu, fri, sat, sun);

alert(`La temperatura più calda è: ${hottest}, quella più fredda è:${coldest}`);