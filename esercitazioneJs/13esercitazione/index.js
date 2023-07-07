var number = parseFloat(prompt("Inserisci un numero intero da 1 a 7"));

switch (number) {
    case 1:
        alert("Lunedì");
        break;

    case 2:
        alert("Martedì")
        break;

    case 3:
        alert("Mercoledì")
        break;

    case 4:
        alert("Giovedì")
        break;

    case 5:
        alert("Venerdì")
        break;

    case 6:
        alert("Sabato")
        break;

    case 7:
        alert("Domenica")
        break;
    
    default:
        alert("Errore, inserisci un numero intero da 1 a 7!!!")
}