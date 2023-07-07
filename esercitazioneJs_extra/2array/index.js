let arr = [2, 1, 19, 9, 5, 11, 24, 4, 28, 15];

let max = 0;
let min = 0;


// facciamo due for per confrontare tutti i numeri fra di loro
for (i = 0; i < arr.length; i++) {

    let counterMax = 0;
    let counterMin = 0;

    for (k = 0; k < arr.length; k++) {

        if (arr[i] > arr[k]) {
            counterMax += 1;
            // se dopo la verifica il contatore arriva a 9
            // vuol dire che quello e' il numero piu' grande  
            if (counterMax == 9) {
            max = arr[i]
            }
        }
        

        if (arr[i] < arr[k]) {
            counterMin += 1;
            // se dopo la verifica il contatore arriva a 9
            // vuol dire che quello e' il numero piu' piccolo  
            if (counterMin == 9) {
            min = arr[i]
            }
        }
        
    }

}

console.log(`max: ${max}, min: ${min}`)