var arr = [10, 8, 4, 9, 15, 16, 20, 2];

var sum = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
        sum += arr[i]
    }
};

console.log(sum)