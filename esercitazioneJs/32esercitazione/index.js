// Selezione elementi
let hideButton = document.getElementById("hideButton");
let changeColorButton = document.getElementById("changeColorButton");
let boldButton = document.getElementById("boldButton");
let paragraphs = document.getElementsByTagName("p");

// Bottone nascondi
hideButton.addEventListener("click", () => {

    for (i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle("hide");
    }

    // Perche' non va il forEach???
    /*
    paragraphs.forEach(p => {
        p.classList.toggle("hide");
    });
    */

})

// Bottone colore random
changeColorButton.addEventListener("click", () => {

    for (i = 0; i < paragraphs.length; i++) {

        let randomValue = [];

        // valori r g b random, da 0 a 255
        for (k = 0; k < 3; k++) {
            randomColor[k] = (Math.floor(Math.random() * 256));
        };

        paragraphs[i].style.color = `rgb(${randomValue[0]}, ${randomValue[1]}, ${randomValue[2]})`;

    }

})

// Bottone grassetto
boldButton.addEventListener("click", () => {

    for (i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle("bold");
    }

})