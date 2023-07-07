let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

function descendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let k = 0; k < arr.length; k++) {

            if (arr[i] > arr[k]) {
                // swap
                const tmp = arr[i];
                arr[i] = arr[k];
                arr[k] = tmp;
            }

        }

    }
    return arr
}

function ascendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let k = 0; k < arr.length; k++) {

            if (arr[i] < arr[k]) {
                // swap
                const tmp = arr[i];
                arr[i] = arr[k];
                arr[k] = tmp;
            }

        }

    }
    return arr
}

console.log(descendingOrder(array));
console.log(ascendingOrder(array));