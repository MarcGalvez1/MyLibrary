class Book {
  constructor(title, author, numPages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.cardContainer = document.getElementById("content-container");
    this.currentRow = this.cardContainer.lastElementChild;
  }
  createCard() {
    // Creates cards to display the books
    const card = document.createElement('div');
    card.classList.add('card', 'col-1', 'ms-3', 'mt-2');

    const cardTtl = document.createElement('h5');
    cardTtl.classList.add('card-title');
    cardTtl.textContent = this.title;

    const cardAuthor = document.createElement('h6');
    cardAuthor.classList.add('card-subtitle', 'mb-2', 'text-muted');
    cardAuthor.textContent = this.author;

    const cardPages = document.createElement('p');
    cardPages.classList.add("card-text");
    cardPages.textContent = "Number of Pages: " + this.numPages;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.textContent = "Delete Book";
    deleteBtn.id = 'delete-' + this.currentRow.childElementCount;
    deleteBtn.addEventListener("click", () => {
      const currIndex = myLibrary.indexOf(this);
      myLibrary.splice(currIndex,1);
      this.currentRow.removeChild(card);
    })

    card.appendChild(cardTtl);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(deleteBtn);

    this.displayCard(card);
  }

  createRow() {
    // Used to create rows
    const cardRow = document.createElement('div');
    cardRow.classList.add('row','justify-content-center');
    cardRow.id = 'row-' + this.cardContainer.childElementCount;
    this.cardContainer.appendChild(cardRow);
  }


  displayCard(card) {
    // Keeps track of last row created
    this.currentRow  = this.cardContainer.lastElementChild;

    if (this.cardContainer.childElementCount === 0) {
      //creates row if it doesn't already exist
      this.createRow();
      this.currentRow  = this.cardContainer.lastChild;
    }

    if (this.currentRow.childElementCount < 5) {
      // Adds ensures that there are 5 card elements in a row
      this.currentRow.appendChild(card);
    } else {
      // creates new row after 5 cards are added and adds the 1st card in that row.
      this.createRow();
      this.currentRow = this.cardContainer.lastChild;
      this.currentRow.appendChild(card);
    }
  }

}






function addBookToLibrary(book) {
  // add books to myLibrary array
  
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
    return book.title === newBook.title;
  });
}

// Variables
const myLibrary = [];
const addBookForm = document.getElementById("addBookForm");
const dialog = document.getElementById("form-modal");
const showFormbtn = document.getElementById("add-new");
addBookForm.onsubmit = (event) => {
  // Processes file submission
  event.preventDefault();
  AddBook();
}





