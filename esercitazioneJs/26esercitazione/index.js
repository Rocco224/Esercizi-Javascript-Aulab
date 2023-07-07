let arrayOne = [1, -4, 7, 12,];
let arrayTwo = [-2, -6, -10, -3];

function sumPositives(numbers) {

    let sum = 0;

    numbers.forEach(num => {
        if (num > 0) {
            sum += num;
        }
    });

    return sum
}

console.log(sumPositives(arrayOne));
console.log(sumPositives(arrayTwo));