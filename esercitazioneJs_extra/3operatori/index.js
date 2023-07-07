var sex = prompt("Sesso").toLowerCase();
var height = parseFloat(prompt("Altezza in metri"));
var weight = parseFloat(prompt("Peso in chilogrammi"));

var curvyBMI = 30;
var newClientBMI = weight / (height * height);

var isGreater = newClientBMI >= curvyBMI;
var isWoman = sex == "donna";

var isAccepted = isGreater && isWoman;

alert(isAccepted);