// Constructor
class books {
    constructor({
        title,
        author,
    }){
        this.title = title; //Título del libro
        this.author= author;// Autor del libro
    }
}
// Datos de ejemplo (puedes reemplazarlos con tus propios datos)
const books = [
    { title: "El problema final", author: "PÉREZ-REVERTE, ARTURO" },
    { title: "Bocabesada", author: "VAL, JUAN DEL" },
    { title: "No te veré morir", author: "MUÑOZ MOLINA, ANTONIO" },
    { title: "Los inocentes", author: "ORUÑA, MARÍA" },
    { title: "Invisible", author: "MORENO, ELOY" },
    { title: "Hábitos atómicos ", author: "CLEAR, JAMES" },
    // Agrega más libros aquí
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const bookList = document.getElementById("bookList");

// Función para mostrar resultados de búsqueda
function displaySearchResults(results) {
    // Limpiar la lista de libros
    bookList.innerHTML = "";

    // Mostrar los resultados
    results.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

// Función para realizar la búsqueda
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const results = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
    );
    displaySearchResults(results);
}

// Manejar el evento de clic en el botón de búsqueda
searchButton.addEventListener("click", searchBooks);