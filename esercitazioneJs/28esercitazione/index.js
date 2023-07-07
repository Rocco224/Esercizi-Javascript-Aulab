let resultsOne = ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'];
let resultsTwo = ["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"];
let resultsThree = ["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"];
let resultsFour = ["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"];

function calculatePoints(results) {
    let points = 0;

    results.forEach(result => {
        let x = parseInt(result.charAt(0));
        let y = parseInt(result.charAt(2));

        if (x > y) {
            points += 3;
        } else {
            if (x < y) {
                points += 0;
            } else {
                if (x = y) {
                    points += 1;
                }
            }
        };
    });

    return points;
};  
    
console.log(calculatePoints(resultsOne));
console.log(calculatePoints(resultsTwo));
console.log(calculatePoints(resultsThree));
console.log(calculatePoints(resultsFour));