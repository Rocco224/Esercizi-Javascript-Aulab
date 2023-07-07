let search = document.getElementById("search");
let list = document.getElementById("list");

// Funzione per creare riga con immagine profilo e nome
function giveMeUser (userObj) {
    let row = document.createElement("li");
    list.appendChild(row);

    let userImg = document.createElement("img");
    userImg.setAttribute("src", userObj.imgSrc);
    row.appendChild(userImg);

    let userName = document.createElement("span");
    userName.textContent = `${userObj.firstname} ${userObj.lastname}`;
    row.appendChild(userName);

    return row;
}

// Funzione asincrona per evere l'array degli utenti 
// e creare la lista degli utenti
async function getUsersList(usersUrl) {
    let response = await fetch(usersUrl);
    let usersArray = await response.json();

    console.log(usersArray);

    usersArray.forEach(user => {
        giveMeUser(user);
    })

    search.addEventListener("input", () => {
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        };

        usersArray.forEach(user => {
            let searchValue = search.value.toLowerCase();
            let userFirstname = user.firstname.toLowerCase();
            let userLastname = user.lastname.toLowerCase();

            if (searchValue == userFirstname || searchValue == userLastname) {
                giveMeUser(user);
            };
        });

        if (search.value == "") {
            usersArray.forEach(user => {
                giveMeUser(user);
            });
        };
        /*
        if (results == 0) {
            let userName = document.createElement("li");
            userName.textContent = `Nessun risultato`;
            listContainer.appendChild(userName);
        };
        */
    });
};

getUsersList("http://dms.cyberdelia.eu/api/v1/user");