var num = parseInt(prompt("Inserisci un numero compreso tra 0 e 10"));
var result = "";

if (num < 0 || num > 10) {

    alert("Inserisci un numero compreso tra 0 e 10!! ")

} else {

    var i = 0;
    while (i <= 10) {
        result += (num * i).toString() + " ";

        i++
    };

    alert(`Tabellina del ${num}:` + `\n` + result)
    
}