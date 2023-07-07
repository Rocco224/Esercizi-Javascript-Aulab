function fizzBuzz() {
    const number = [];

    for (let i = 1; i <= 100; i++) {

        if (i % 15 == 0) {
            number.push("FizzBuzz")
        } else {
            if (i % 5 == 0) {
                number.push("Buzz")
            } else {
                if (i % 3 == 0) {
                    number.push("Fizz")
                } else {
                    number.push(i);
                }
            }
        }

    }

    return number;
}

console.log(fizzBuzz());