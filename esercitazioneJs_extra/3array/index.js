let arr = [1, 20, 18, 7, 3, 11, 33, 24, 14, 6];

// soluzione trovata su google
function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
console.log(bubbleSort(arr));

// soluzione Giuseppe Calia
for(let i=0; i<=arr.length-2; i++) {
    for(let k=0; k<=arr.length-1; k++) {
        if (arr[i] > array[k]) {
            // swap
            const tmp = arr[i];
            arr[i] = arr[k];
            arr[k] = tmp;
        }
    }
}
console.log(arr);