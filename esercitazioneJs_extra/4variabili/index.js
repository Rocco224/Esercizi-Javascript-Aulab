alert("Inserisci i valori delle due variabili ed io li scambierò tra di loro")

var x = parseFloat(prompt("Dai un valore a X"));
var y = parseFloat(prompt("Dai un valore a Y"));
var z = x;
var x = y;
var y = z;

console.log("Ora i valori delle varabili sono: X = " + x + " e Y = " + y);
alert("Ora i valori delle varabili sono: X = " + x + " e Y = " + y);