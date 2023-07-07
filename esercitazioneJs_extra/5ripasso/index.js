let names = ['marco', 'eNRICO', 'GIORGIA', 'georgiana', 'Anna', 'cristian loreno'];

function capitalFirstLetter(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // se il nome e' composto da due o piu' parole
        if (arr[i].includes(" ")) {
            let splittedName = arr[i].split(" ");
            let splittedName_CFL = [];

            for (let i = 0; i < splittedName.length; i++) {
                let splittedName_FL = splittedName[i].slice(0, 1).toUpperCase()
                let splittedName_RL = splittedName[i].slice(1).toLowerCase();

                splittedName_CFL.push(splittedName_FL + splittedName_RL);

                if (i < splittedName.length - 1)
                splittedName_CFL.push(" ")
            }

            result.push("".concat(...splittedName_CFL))

        // se e' composto da una sola parola
        } else {
            let firstLetter = arr[i].slice(0, 1).toUpperCase()
            let remainingLetters = arr[i].slice(1).toLowerCase();

            result.push(firstLetter + remainingLetters);
        }
    }

    return result;
}

console.log(capitalFirstLetter(names));