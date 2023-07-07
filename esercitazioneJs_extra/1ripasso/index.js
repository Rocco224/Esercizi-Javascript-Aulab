let exampleStr = "ciao mamma guarda come mi divertoooo... con cantatuuu!!!";

function OccurrenceOf_O(phrase) {

    const phraseTLC = phrase.toLowerCase();

    let counter = 0;

    for (let i = 0; i < phraseTLC.length; i++) {

        if (phraseTLC.charAt(i) == "o") {
            counter++
        }

    }

    if (counter > 1) {

        return console.log(`La vocale 'o' è presente ${counter} volte nella stringa`);

    } else {

        return console.log("In questa frase non ci sono 'o'...");

    }
}

OccurrenceOf_O(exampleStr);