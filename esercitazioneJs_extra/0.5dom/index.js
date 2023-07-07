// TO DO LIST

// testo (input) inserito dall'utente nel form
let todoInput = document.getElementById("todoInput");
// Sezione in cui andranno inseriti gli elementi creati in questo caso un <ul>
let todoList = document.getElementById("todoList");

// funzione per creare e inserire nuovi elementi alla lista delle cose da fare
todoForm.addEventListener("submit", (event) => {
    // previene l'azione di default del tasto submit
    event.preventDefault();

    // creazione nuova riga, cosa da fare 
    let row = document.createElement("li");
    todoList.appendChild(row);

    // creazione testo cosa da fare
    let todoText = document.createElement("span");
    todoText.textContent = todoInput.value + " ";
    row.appendChild(todoText);

    // creazione bottone per rimuovere la cosa da fare
    let removeButton = document.createElement("button");
    removeButton.textContent = "Rimuovi";
    removeButton.addEventListener("click", () => {
        todoList.removeChild(row);
    })
    row.appendChild(removeButton);

    // "reset" della textbox
    todoInput.value = "";
})