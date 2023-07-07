let array = [2, 5, 8, 13, 1, 16, 22];

function average (arr) {
    let result = 0;

    arr.forEach(element => {
        result += element
    });

    return result / arr.length;
}

function minorNumbers (average) {
    let minor = [];

    array.forEach(element => {
        if (element < average) {
            minor.push(element);
        }
    });

    return minor;
}

console.log(average(array));
console.log(minorNumbers(average(array)));