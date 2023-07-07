let operation = prompt("Che operazione vuoi fare?");

let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];

let i = 0;
while (i < 10) {
    arrayOne[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    arrayTwo[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    i++;
}

switch (operation) {
    case "addizione":
        for (i = 0; i < arrayOne.length; i++) {
            arrayThree.push(arrayOne[i] + arrayTwo[i]);
        }
        break;

    case "sottrazione":
        for (i = 0; i < arrayOne.length; i++) {
            arrayThree.push(arrayOne[i] - arrayTwo[i]);
        }
        break;

    case "moltiplicazione":
        for (i = 0; i < arrayOne.length; i++) {
            arrayThree.push(arrayOne[i] * arrayTwo[i]);
        }
        break;

    case "divisione":
        for (i = 0; i < arrayOne.length; i++) {
            arrayThree.push(arrayOne[i] / arrayTwo[i]);
        }
        break;

    default:
        alert("Attenzione!! inserisci: addizione, sottrazione, moltiplicazione o divisione.")
        break;
}

console.log(`Array 1: ${arrayOne}\nArray 2: ${arrayTwo}\nRisultato: ${arrayThree}`);