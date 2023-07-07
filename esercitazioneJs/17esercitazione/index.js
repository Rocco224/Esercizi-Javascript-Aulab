var result = "";
var counter = 1;

for (i = 1; i <= 100; i++) {

    result += i.toString() + " ";
        
    if (counter == 10) {
        result += "\n";
        counter = 0;
    }
    
    counter++;

};

alert (result)