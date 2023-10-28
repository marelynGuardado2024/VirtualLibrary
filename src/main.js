// Constructor
class bookss {
    constructor({
        title,
        author,
        isborrow,
    }){
        this.title = title; //Título del libro
        this.author= author;// Autor del libro
        this.isborrow= false;//prestado el libro
    }
}
// Datos de ejemplo (puedes reemplazarlos con tus propios datos)
const books = [
    { title: "El poder de confiar en ti", author: "Curro Cañete", taken:false },
    { title: "El poder de confiar en ti", author: "Curro Cañete", taken:true},
    { title: "Un cuento perfecto", author: "Elísabet Benavent" , taken:false },
    { title: "Matar a un Ruíseñor", author: "Vicente Molina", taken:false },
    { title: "El chico que bajó de las estrellas", author: "José Sahady Alargon", taken:true },
    { title: "Amigo imaginario", author: "Stephen Chbosky", taken:false },
    { title: "El viento conoce mi nombre ", author: "Isabel Allende", taken:true },
    { title: "La magia del orden ", author: "Marie Kondo", taken:false },
    { title: "El arte de perderse ", author: "Rebeca Solnit", taken:true },
    { title: "Reina roja", author: "Juan Gómez-Jurado", taken:false },
    { title: "Tu también flotarás", author: "Stephen King", taken:true },
    { title: "Coraline", author: "Neil Gaiman ", taken:false },
    { title: "La cabaña", author: "Natasha Preston", taken:false },
    { title: "El instituto", author: "Stephen king", taken:false },
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
 
function borrow() {
    if (!this.isborrow) {
        this.isborrow= true;
        alert("Borrowed Book");
        }
    }
   
function returnBook () {
    if (this.isborrow) {
        this.isborrow= false;
        alert("returns Book");
        
    }
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