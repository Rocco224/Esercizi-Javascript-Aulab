var intNumber = parseInt(prompt("Inserisci un numero intero compreso tra 0 e 9999"));

function numberLength(n) {
    return n.toString().length
};

if (intNumber < 0 || intNumber > 9999) {
    alert("Attenzione!!! Inserisci un numero compreso tra 0 e 9999")
} else {
    alert(numberLength(intNumber));
}