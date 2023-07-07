var n = parseFloat(prompt("Inserisci il primo numero"));
var m = parseFloat(prompt("Inserisci il secondo numero"));

function equality(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}

alert(equality(n, m));