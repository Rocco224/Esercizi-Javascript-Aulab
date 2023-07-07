let garage = {};
garage.cars = [];

let carOne = {};
carOne.brand = "Fiat";
carOne.model = "Punto";
garage.cars.push(carOne);

let carTwo = {};
carTwo.brand = "Alfa Romeo";
carTwo.model = "Giulietta";
garage.cars.push(carTwo);

let carThree = {};
carThree.brand = "Lancia";
carThree.model = "Ypsilon";
garage.cars.push(carThree);

let carFour = {};
carFour.brand = "Fiat";
carFour.model = "Panda";
garage.cars.push(carFour);

let carFive = {};
carFive.brand = "Lancia";
carFive.model = "Delta";
garage.cars.push(carFive);

let carSix = {};
carSix.brand = "Alfa Romeo";
carSix.model = "Mito";
garage.cars.push(carSix);

let carSeven = {};
carSeven.brand = "Alfa Romeo";
carSeven.model = "Stelvio";
garage.cars.push(carSeven);

let carEight = {};
carEight.brand = "Alfa Romeo";
carEight.model = "Giulia";
garage.cars.push(carEight);

let carNine = {};
carNine.brand = "Fiat";
carNine.model = "500";
garage.cars.push(carNine);

garage.getModels = function(brand) {
    let output = [];
    for (i=0; i<this.cars.length; i++) {
        if (brand == this.cars[i].brand) {
            output.push(this.cars[i].model);
        }
    }
    return output;
}

console.log(garage.getModels("Fiat"));