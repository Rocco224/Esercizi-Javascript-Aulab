let array = [1, 2, 3, 4, 5];

// map non va se uso le parentesi graffe
function double1(numbers) {
    let doubledArray = numbers.map(num => num * 2);

    return doubledArray;
}

function double2(numbers) {
    let doubledArray = [];

    numbers.forEach(num => {
        doubledArray.push(num*2);
    })

    return doubledArray;
}

console.log(double1(array));
console.log(double2(array));