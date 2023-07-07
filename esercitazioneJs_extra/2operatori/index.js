alert("Inserisci kilometri percorsi e le ore impiegate e ti diro' la tua velocita' media")

var km = parseFloat(prompt("Kilometri percorsi"));
var hour = parseFloat(prompt("Ore impiegate"));

var averageSpeed = km / hour;

alert (`La velocità media è: ${averageSpeed}km/h`)