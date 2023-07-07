//Dichiarazione e assegnazioni variabili
var cats = prompt("Numero dei gatti?");
var catsOnRow = prompt("Gatti per ogni fila?");

//file di gatti
var row = Math.floor(cats / catsOnRow);
//resto dei gatti non entrati in fila
var rest = cats % row;
//calcolo dei gatti mancanti per una nuova fila
var missingCats = Math.floor(catsOnRow - rest);

alert(`Gatti: ${cats}, gatti in ogni fila: ${catsOnRow}`);
alert(`Ci sono ${row} file di gatti e ne mancano ${missingCats} per una nuova fila`)