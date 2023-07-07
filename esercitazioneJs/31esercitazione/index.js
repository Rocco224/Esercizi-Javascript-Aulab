// variabili
let researchForm = document.getElementById("researchForm");
let inputText = document.getElementById("inputText");
let carsList = document.getElementById("carsList");

// oggetto garage con array delle auto
let garage = {};
garage.cars = [];

// funzione costruttore per creare le auto e inserirle nell'array dentro garage
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    garage.cars.push(this);
};

// creazione delle auto
let carOne = new Car("Fiat", "Punto");
let carTwo = new Car("Alfa Romeo", "Giulietta");
let carThree = new Car("Lancia", "Ypsilon");
let carFour = new Car("Fiat", "Panda");
let carFive = new Car("Lancia", "Delta");
let carSix = new Car("Alfa Romeo", "Mito");
let carSeven = new Car("Alfa Romeo", "Stelvio");
let carEight = new Car("Alfa Romeo", "Giulia");
let carNine = new Car("Fiat", "500");

// funzione per trovare le auto dando la marca
garage.getModels = function (brand) {
    let output = [];
    for (i = 0; i < this.cars.length; i++) {
        if (brand.toLowerCase() == this.cars[i].brand.toLowerCase()) {
            output.push(this.cars[i].model);
        }
    }
    return output;
};

// funzione per aggiungere le auto nell' HTML
researchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let getModelsOutput = garage.getModels(inputText.value);
    // refresh lista
    if (carsList.hasChildNodes()) {
        while (carsList.firstChild) {
            carsList.removeChild(carsList.firstChild);
        }
    }
    // stampa lista
    getModelsOutput.forEach(model => {
        let car = document.createElement("li");
        car.textContent = model;
        carsList.appendChild(car);
    });
    inputText.value = "";
});