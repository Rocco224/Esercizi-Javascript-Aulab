// cliente
let customer = {};
customer.name = "Roberto";
customer.surname = "Gallo";
customer.dishes = [];
customer.addDish = function (dish) {
    customer.dishes.push(dish);
};

// funzione costruttore nuova portata/pietanza
function Dish (name, price, allergens, maxQuantity, consumed) {
    this.name = name;
    this.price = price;
    this.allergens = allergens;
    this.maxQuantity = maxQuantity;
    this.consumed = consumed;
};

// creazione portata/pietantanza
// inserimento nell'array "dishes" del cliente
let dishOne = new Dish ("Zuppa di miso", 5, "none", 2, true); 
customer.addDish(dishOne); 
let dishTwo = new Dish ("Nighiri salmone", 5, "salmone", 5, true);
customer.addDish(dishTwo);
let dishThree = new Dish ("Riso alla cantonese", 7, "none", 2, true);
customer.addDish(dishThree);
let dishFour = new Dish ("Hossomaki misto", 6, "none", 3, true);
customer.addDish(dishFour);
let dishFive = new Dish ("pollo con mandorle", 7, "mandorle", 2, false);
customer.addDish(dishFive);
let dishSix = new Dish ("Uramaki fritto", 6, "none", 2, true);
customer.addDish(dishSix);
let dishSeven = new Dish ("Dorayaki", 4, "fagioli", 2, true);
customer.addDish(dishSeven);

// funzione per il pagamento
function payment (dishes, lunchOrDinner) {
    total = 0;

    if (lunchOrDinner == "pranzo") {
        total += 15;
    } else {
        if (lunchOrDinner == "cena") {
            total += 21;
        }
    }

    for (i=0; i<dishes.length; i++) {
        if (dishes[i].consumed == false) {
            total += dishes[i].price;
        }
    }

    return total;
}

console.log(payment(customer.dishes, "cena"));