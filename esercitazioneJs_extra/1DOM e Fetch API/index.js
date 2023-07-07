let container = document.getElementById("container");
container.classList.add("d-flex", "flex-column", "align-items-center");

function createNewPost(post, user) {
    // contenitore owner e newPost
    let card = document.createElement("div");
    container.appendChild(card);
    card.classList.add("card")

    // contenitore immagine profilo e nome utente
    let owner = document.createElement("div");
    card.appendChild(owner);
    owner.classList.add("owner")
    // contenitore di foto, titolo descrizione e like
    let newPost = document.createElement("div");
    card.appendChild(newPost);
    newPost.classList.add("newPost")

    // immagine profilo
    let userImg = document.createElement("img");
    userImg.setAttribute("src", user.imgSrc);
    owner.appendChild(userImg);
    // nome utente
    let userName = document.createElement("span");
    userName.textContent = `${user.firstname} ${user.lastname}`;
    owner.appendChild(userName);

    
    // immagine post
    let img = document.createElement("img");
    img.setAttribute("src", post.imgSrc);
    newPost.appendChild(img);
    // titolo post
    let title = document.createElement("h2");
    title.textContent = post.title;
    newPost.appendChild(title);
    // descrizione post
    let description = document.createElement("p");
    description.textContent = post.description;
    newPost.appendChild(description);
    // like post
    let likes = document.createElement("p");
    likes.textContent = `${post.likes.length} mi piace`;
    newPost.appendChild(likes);

    return newPost;
}

// funzione asincrona per avere post e user
async function getPostsInfo(postsUrl, usersUrl) {
    let postsResponse = await fetch(postsUrl);
    let postsArray = await postsResponse.json();
    
    let usersResponse = await fetch(usersUrl);
    let usersArray = await usersResponse.json();
    
    console.log(postsArray);
    console.log(usersArray);

    for (i=0; i<postsArray.length; i++) {
        let postOwner = usersArray.find(user => user.id === postsArray[i].ownerId);
        createNewPost(postsArray[i], postOwner);        
    }
}

getPostsInfo("http://dms.cyberdelia.eu/api/v1/post", "http://dms.cyberdelia.eu/api/v1/user");
 
/*
function createNewPost(post, user) {
    // contenitore immagine profilo e nome utente
    let owner = document.createElement("div");
    container.appendChild(owner);
    // contenitore di foto, titolo descrizione e like
    let newPost = document.createElement("div");
    container.appendChild(newPost);

    // immagine profilo
    let userImg = document.createElement("img");
    userImg.setAttribute("src", user.imgSrc);
    owner.appendChild(userImg);
    // nome utente
    let userName = document.createElement("span");
    userName.textContent = user.firstname + user.lastname;
    owner.appendChild(userName);

    // titolo post
    let title = document.createElement("h2");
    title.textContent = post.title;
    newPost.appendChild(title);
    // immagine post
    let img = document.createElement("img");
    img.setAttribute("src", post.imgSrc);
    newPost.appendChild(img);
    // descrizione post
    let description = document.createElement("p");
    description.textContent = post.description;
    newPost.appendChild(description);
    // like post
    let likes = document.createElement("span");
    likes.textContent = post.likes.length;
    newPost.appendChild(likes);

    newPost.classList.add("d-flex", "flex-column");
    title.classList.add("d-flex", "flex-column", "align-items-center");

    return newPost;
}

// metodo non molto ottimizzato
// si potrebbero fare due fetch, e inserire post e user dentro un array

// chiamata get per avere i post
fetch("http://dms.cyberdelia.eu/api/v1/post")
    // risposta http
    .then(function(response) {
        // promise per deserializzare la risposta
        return response.json();
    })
    //risposta deserializzata
    .then(function(posts) {
        console.log(posts);

        posts.forEach(post => {
            // chiamata get per avere gli user
            fetch(`http://dms.cyberdelia.eu/api/v1/user/${post.ownerId}`)
                .then(function(response){
                    return response.json();
                })
                .then(function(user){ 
                    console.log(user);

                    createNewPost(post,user);
                })
                .catch(function(error){
                    console.error(error);
                });
        });

    })
    .catch(function (error) {
        console.error(error);
    });
*/
   