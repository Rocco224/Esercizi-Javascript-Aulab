let array = [2, 6, 7, 13, 22, 24, 19, 4, 30, 1];
let n = 2;

function divisibleNumbers(numbers, divider) {
    let result = [];
    
    numbers.forEach(element => {
        if (element % divider == 0) {
            result.push(element)
        }
    });

    return result;
}

console.log(divisibleNumbers(array, n));