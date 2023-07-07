let array = [2, -1, 5, 8, 12];

// massimo
function Max(arr) {
    let max = 0;
    for (i=0; i<arr.length; i++) {
        for (k=0; k<arr.length; k++) {
            if (arr[i] > arr[k] && arr[i] > max) {
                max = arr[i];
            } 
        }       
    }
    return max
}

// minimo
function Min(arr) {
    let min = 0;
    for (i=0; i<arr.length; i++) {
        for (k=0; k<arr.length; k++) {
            if (arr[i] < arr[k] && arr[i] < min) {
                min = arr[i];
            }
        }       
    }
    return min
}

console.log(`Max: ${Max(array)} Min: ${Min(array)}`);