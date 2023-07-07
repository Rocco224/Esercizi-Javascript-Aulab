var v = parseFloat(prompt("Inserisci il voto compreso tra 0 e 30"));

if (v >= 0 && v < 18) {
    alert("Insufficiente")
} else if (v >= 18 && v < 21) {
    alert("Sufficiente")
} else if (v >= 21 && v < 24) {
    alert("Buono")
} else if (v >= 24 && v < 27) {
    alert("D29istinto")
} else if (v >= 27 && v < 30) {
    alert("Ottimo")
} else if (v == 30) {
    alert("Eccellente")
} else {
    alert("Voto inserito non valido, inserisci un voto compreso fra 0 e 30!!")
}