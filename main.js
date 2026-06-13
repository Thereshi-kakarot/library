/* 
What I am going to start with is to make sure that I link all required elements needed to be worked with from HTML to JavaScript.
Then I will make the first button work by letting it show and hide the form.
The form inputs will also be linked to the JavaScript code so that when the form is submitted, the data will be captured and displayed as an HTML card div 
I will have an empty array of Library to store the data of the books that will be added to the library from form inputs.
I will have a function called book which will be a constructor function to create a book object with data from form inputs.
I will also have a function called addBookToLibrary which will push the book object to the library array and display it as an HTML card div.

*/

const addBookBtn = document.getElementById('add-book-btn');
const bookForm = document.getElementById('book-form');
const container = document.querySelector('.container');
const cancelBtn = document.getElementById('cancel-btn');
const addBook = document.getElementById('add-book');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

const myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    
}
function addBookToLibrary(title, author, pages){
    const book = new Book(title, author, pages);
    myLibrary.push(book);
    renderBooks();
}
addBookBtn.addEventListener("click", ()=> {
    bookForm.style.display = "block";
});

cancelBtn.addEventListener("click", ()=> {
    bookForm.style.display = "none";
});

addBook.addEventListener("click", (e)=> {
    e.preventDefault();

    if(titleInput.value === ""|| authorInput.value === ""|| pagesInput.value === ""){
        alert("Please fill in all fields");
        return;
    }
    
    addBookToLibrary(title.value, author.value, pages.value);
    bookForm.reset();
    bookForm.style.display = "none";

});

function renderBooks(){
    container.innerHTML = ``;

    myLibrary.forEach((book, index) => {

        const card =document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}}</p>
        <p>${book.pages}</p>
        <label for="read">Read?:</label>
        <input type="checkbox" id="read" name="read">Read</input>
        <button type="button">Delete</button>
        `;

        container.appendChild(card);
    });
}