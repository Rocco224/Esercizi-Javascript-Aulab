var N = parseInt(prompt("Quante volte volete tirare il dado?"));

var playerOne = 0;
var playerTwo = 0;

for (let i = 0; i < N; i++) {

    var numRandOne = Math.floor(Math.random() * (7 - 1) + 1);
    playerOne += numRandOne;

    var numRandTwo = Math.floor(Math.random() * (7 - 1) + 1);
    playerTwo += numRandTwo;

};

alert(`Punteggio giocatore uno: ${playerOne}, punteggio giocatore due: ${playerTwo}`);

if (playerOne > playerTwo) {
    alert("Complimenti, ha vinto il giocatore 1!!")
} else if (playerOne == playerTwo) {
    alert("Attenzione, avete pareggiato!!")
} else {
    alert("Complimenti, ha vinto il giocatore 2!!")
}