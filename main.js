function Book(title, author, numPages) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.numPages = numPages;


}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
  for (const book of myLibrary) {
    console.log(book);
  }

}

function AddBook() {
  let bookTtl = document.getElementById("Title").value;
  let bookAuthor = document.getElementById("Author").value;
  let numPages = document.getElementById("NumPages").value;

  const newBook = new Book(bookTtl, bookAuthor, numPages);
  
  addBookToLibrary(newBook);
}


// Variables
const myLibrary = [];
const addBookForm = document.getElementById("addBookForm");


addBookForm.onsubmit = (event) => {
  // Processes file submission
  event.preventDefault();
  AddBook();
}