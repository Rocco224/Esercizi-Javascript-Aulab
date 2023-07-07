let array = ['marco', 'enrico', 'giorgia', 'georgiana', 'anna', 'luca'];

function arrUppercase(arr) {
    const arrUppercase = arr.map(name => name.toUpperCase())

    return arrUppercase;
}

console.log(arrUppercase(array));