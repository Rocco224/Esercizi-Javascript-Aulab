let arrayNumbers = [3, 8, 11, 24, 10, 5, 18, 20, 16, 1];
let arrayStrings = ["rocco", "paolo", "giuseppe", "domenico", "luciano"];

let searchNumber = 24;
let searchString = "rocco";

function check(x, y) {
    let counter = 0;

    x.forEach(element => {
        if (element == y) {
            counter++;
        }
    });

    if (counter >= 1) {
        return true;
    } else {
        return false;
    }
}

console.log(check(arrayNumbers, searchNumber));
console.log(check(arrayStrings, searchString));