//Output
alert("Dammi 5 numeri, io ti restituirò la loro somma e la loro media");

//Dichiarazione e assegnazione delle variabili / Input
var a = parseFloat(prompt("Inserisci un numero:"));
var b = parseFloat(prompt("Inserisci un numero:"));
var c = parseFloat(prompt("Inserisci un numero:"));
var d = parseFloat(prompt("Inserisci un numero:"));
var e = parseFloat(prompt("Inserisci un numero:"));

//Somma
var sum = a + b + c + d + e;

//Media
var average = sum / 5;

//Output / Risultato
console.log("la somma è: " + sum + " e la media è: " + average);
alert("la somma è: " + sum + " e la media è: " + average);