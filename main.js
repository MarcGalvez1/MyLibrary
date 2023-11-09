function Book(title, author, numPages) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.cardContainer = document.getElementById("card-row");

}

Book.prototype.createCard = function() {
  // Creates cards to display the books
  const cardRow = document.getElementById('card-row');
  if (cardRow.childElementCount % 6 === 0) {
      // Create a new row when you reach 12 cards
      const newRow = document.createElement('div');
      newRow.classList.add('row');
      cardRow.appendChild(newRow);
  }
  const card = document.createElement('div');
  card.classList.add('card', 'col-auto', 'mx-3', 'mt-2');

  const cardTtl = document.createElement('h5');
  cardTtl.classList.add('card-title');
  cardTtl.textContent = this.title;

  const cardAuthor = document.createElement('h6');
  cardAuthor.classList.add('card-subtitle', 'mb-2', 'text-muted');
  cardAuthor.textContent = this.author;

  const cardPages = document.createElement('p');
  cardPages.classList.add("card-text");
  cardPages.textContent = "Number of Pages: " + this.numPages; 

  card.appendChild(cardTtl);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  this.cardContainer.appendChild(card);


      
}



function addBookToLibrary(book) {
  // do stuff here
  
  if (!isBookInArray(myLibrary, book)) { 
    myLibrary.push(book);
    book.createCard();
  } else {
    window.alert("This book already exists, please enter a new book.")
  }
}

function AddBook() {
  let bookTtl = document.getElementById("Title").value;
  let bookAuthor = document.getElementById("Author").value;
  let numPages = document.getElementById("NumPages").value;

  const newBook = new Book(bookTtl, bookAuthor, numPages);
  
  addBookToLibrary(newBook);
}

function isBookInArray(library, newBook) {
  return library.some((book) => {
    return book.name === newBook.name && book.author === newBook.author && book.numPages === newBook.numPages;
  });
}



// Variables
const myLibrary = [];
const addBookForm = document.getElementById("addBookForm");


addBookForm.onsubmit = (event) => {
  // Processes file submission
  event.preventDefault();
  AddBook();
  for (const book of myLibrary) {
    console.log(book);
  }
}




