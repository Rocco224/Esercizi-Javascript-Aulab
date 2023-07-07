// funzione costuttore
function Player (firstname, lastname, number, position) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.number = number;
    this.position = position;
    this.getPlayerInformation = function() {
        return this.firstname + " " + this.lastname + ", " + "numero: " + this.number + ", " + "posizione: " + this.position;
    }
};

// squadre 
let juventus = [];
let milan = [];
let inter = [];

// creazione calciatore
// inserimento nella squadra (array)
let playerOne = new Player ("Federico", "Chiesa", 7, "Attaccante");
juventus.push(playerOne);
let playerTwo = new Player ("Angel", "Di Maria", 22, "Attaccante");
juventus.push(playerTwo);
let playerThree = new Player ("Zlatan", "Ibrahimović", 11, "Attaccante");
milan.push(playerThree);
let playerFour = new Player ("Tiémoué", "Bakayoko", 14, "Centrocampista");
milan.push(playerFour);
let playerFive = new Player ("Samir", "Handanovič", 1, "Portiere");
inter.push(playerFive);

console.log(juventus);
console.log(milan);
console.log(inter);
console.log(playerOne.getPlayerInformation());
console.log(playerThree.getPlayerInformation());
console.log(playerFive.getPlayerInformation());