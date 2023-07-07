var price = parseFloat(prompt("Inserisci prezzo"));
var percentage = parseInt(prompt("Inserisci percentuale sconto"))

var discount = price * (percentage / 100);
var discountedPrice = price - discount;

alert(`Il prezzo scontato e': ${discountedPrice}`)