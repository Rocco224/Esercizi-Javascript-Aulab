const exampleStr = "ciao mamma guarda come mi divertoooo... con cantatuuu!!!";

function vowelsOccurrences(phrase) {

    const phraseTLC = phrase.toLowerCase();

    let aCounter = 0;
    let eCounter = 0;
    let iCounter = 0;
    let oCounter = 0;
    let uCounter = 0;

    for (let i = 0; i < phraseTLC.length; i++) {

        switch (phraseTLC.charAt(i)) {
            case "a":
                aCounter++;
                break;

            case "e":
                eCounter++;
                break;

            case "i":
                iCounter++;
                break;

            case "o":
                oCounter++;
                break;

            case "u":
                uCounter++;
                break;
        }

    }

    if (aCounter + eCounter + iCounter + oCounter + uCounter == 0) {

        return console.log("Non ci sono vocali in questa frase...");

    } else {

        return console.log(`La vocale "a" è presente ${aCounter} volte nella stringa \nLa vocale "e" è presente ${eCounter} volte nella stringa \nLa vocale "i" è presente ${iCounter} volte nella stringa \nLa vocale "o" è presente ${oCounter} volte nella stringa \nLa vocale "u" è presente ${uCounter} volte nella stringa`)

    }

}

vowelsOccurrences(exampleStr);