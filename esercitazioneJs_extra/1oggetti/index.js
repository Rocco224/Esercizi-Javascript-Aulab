// utente 
let user = {};
user.name = "Mario";
user.surname = "Rossi"
user.email = "mariorossi@gmail.com"
user.age = 18;
user.posts = [];
user.addPost = function (post) {
    user.posts.push(post);
}

// funzione costruttore di un post
function Post(title, imgUrl, description,) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.likes = 0;
    this.increaseLike = function () {
        return this.likes++
    };
}

// creazione post
let postOne = new Post("Il mio cane", "img", "Un gran giocherellone");
let postTwo = new Post("Il mio gatto", "img", "Un gran rompiballe");

// inserimento post nell'array "posts" dell'utente Mario Rossi
user.addPost(postOne);
user.addPost(postTwo);

// aggiunta dei like ai post
postOne.increaseLike();
postTwo.increaseLike();
postTwo.increaseLike();

console.log(user);