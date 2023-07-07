function getPrimeNumbers(howMany) {
    const numbers = [];
    let numbersIsFull = false;

    let i = 2;
    let analizedNumber = [];

    while (numbersIsFull == false) {
        let counter = 0;
        analizedNumber.push(i);
        let lastNumberAdded = analizedNumber[analizedNumber.length - 1];

        for (let k = 0; k < analizedNumber.length; k++) {
            if (lastNumberAdded % 1 == 0 && lastNumberAdded % analizedNumber[k] == 0) {
                counter++;
            };
        };

        if (counter == 1) {
            numbers.push(i);
        };

        if (numbers.length == howMany) {
            numbersIsFull = true;
        } else {
            i++;
        };

    };

    return numbers;
};

console.log(getPrimeNumbers(10)); 