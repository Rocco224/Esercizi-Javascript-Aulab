let array = ['marco', 'enrico', 'giorgia', 'georgiana', 'anna', 'luca'];

function filterArrayName (arr) {
    const filteredName = arr.filter(word => word.length < 6);

    return filteredName;
}

console.log(array[0].length);
console.log(filterArrayName(array));