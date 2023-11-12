class Book {
  constructor(title, author, numPages, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.cardContainer = document.getElementById("row-0");
    
  }
  createCard() {
    // Creates cards to display the books
    const card = document.createElement('div');
    card.classList.add('card', 'col-md-3', 'col-lg-2', 'ms-3', 'mt-2');

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
    deleteBtn.classList.add('btn', 'btn-danger', 'my-2', 'text-light');
    deleteBtn.textContent = "Delete Book";
    deleteBtn.id = 'delete-' + this.cardContainer.childElementCount;
    deleteBtn.addEventListener("click", () => {
      const currIndex = myLibrary.indexOf(this);
      myLibrary.splice(currIndex,1);
      this.cardContainer.removeChild(card);
    })

    const isReadBtn = document.createElement('button');
    isReadBtn.classList.add('btn', 'my-2', 'text-light');
    this.isReadBtnDisplay(isReadBtn);
    isReadBtn.addEventListener("click", () => {
      this.isRead = !this.isRead;
      this.isReadBtnDisplay(isReadBtn);
    })

    card.appendChild(cardTtl);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(deleteBtn);
    card.appendChild(isReadBtn);

    this.displayCard(card);
  }
  isReadBtnDisplay(isReadBtn) {
    if (this.isRead) {
      isReadBtn.classList.remove('btn-warning');
      isReadBtn.classList.add('btn-success');
      isReadBtn.textContent = "Completed";
    } else {
      isReadBtn.classList.remove('btn-success');
      isReadBtn.classList.add('btn-warning');
      isReadBtn.textContent = "Not Completed";
    }

  }

 

  displayCard(card) {
    this.cardContainer.appendChild(card);
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
  let isRead = document.getElementById("is-read").checked;


  const newBook = new Book(bookTtl, bookAuthor, numPages, isRead);
  console.log(isRead);
  ClearForm();
  addBookToLibrary(newBook);

}

function ClearForm () {
  document.getElementById("Title").value = "";
  document.getElementById("Author").value = "";
  document.getElementById("NumPages").value = "";
  document.getElementById("is-read").checked = false;
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





