var phrase = prompt("Inserisci una frase palindroma");

function isPalindrome(x) {

    let replacedPhrase = x.replace(/\W/g, "");

    let inversePhrase = "";
    for (i = -1 ; i >= -replacedPhrase.length ; i--) {
        inversePhrase += replacedPhrase.at(i);
    }

    if (replacedPhrase == inversePhrase) {
        return true
    } else {
        return false
    }
    
}
 
alert(isPalindrome(phrase))