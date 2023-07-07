// Output
alert("Dimmi in che anno siamo e il tuo anno di nascita, io ti dirò la tua età");

// Input
var currentYear = parseInt(prompt("In che anno siamo?"));
var birthday = parseInt(prompt("In che anno sei nato?"));

// Calcolo età ed anni 
var age = currentYear - birthday;
var yearsNeeded = 100 - parseInt(age);

// Output
console.log("Hai " + age + "anni e ti mancano " + yearsNeeded + "anni per compierne 100");
alert("Hai " + age + " anni e ti mancano " + yearsNeeded + " anni per compierne 100");