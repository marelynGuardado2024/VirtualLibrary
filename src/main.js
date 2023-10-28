// Constructor
class bookss {
    constructor({
        title,
        author,
        taken,
    }){
        this.title = title; //Título del libro
        this.author= author;// Autor del libro
        this.isBorrowed= false;//prestado el libro
    }
}
// Datos de ejemplo (puedes reemplazarlos con tus propios datos)
const books = [
    { title: "El poder de confiar en ti", author: "Curro Cañete"},
    { title: "El poder de confiar en ti", author: "Curro Cañete"},
    { title: "Un cuento perfecto", author: "Elísabet Benavent"  },
    { title: "Matar a un Ruíseñor", author: "Vicente Molina"},
    { title: "El chico que bajó de las estrellas", author: "José Sahady Alargon"},
    { title: "Amigo imaginario", author: "Stephen Chbosky" },
    { title: "El viento conoce mi nombre ", author: "Isabel Allende" },
    { title: "La magia del orden ", author: "Marie Kondo" },
    { title: "El arte de perderse ", author: "Rebeca Solnit" },
    { title: "Reina roja", author: "Juan Gómez-Jurado" },
    { title: "Tu también flotarás", author: "Stephen King"},
    { title: "Coraline", author: "Neil Gaiman " },
    { title: "La cabaña", author: "Natasha Preston"},
    { title: "El instituto", author: "Stephen king"},
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
 
function Borriwed() {
    if (!this.isBorrowed) {
        this.isBorrowed= true;
        alert("Borrowed Book");
    }

function returnsBook () {
    if (this.isBorrowed) {
        this.isBorrowedn= false;
        alert("return Book");
    
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