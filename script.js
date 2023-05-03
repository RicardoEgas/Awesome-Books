class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const buttonAdd = document.querySelector('.button-add');
const displayBooks = document.getElementById('books-list');
const bookShelf = [];

// Storage functions

function storeGet() {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}
function storeAdd(newBook) {
  const books = storeGet();
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
}
function storeDelete(title) {
  const books = storeGet();
  const index = books.findIndex((book) => book.title === title);
  if (index !== -1) {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

const books = storeGet();
books.forEach((book) => displayBooks.insertAdjacentHTML('afterbegin', 
`<div class="book-item">
  <div class="book-info">
    <p>${book.title}</p> 
    <p> by ${book.author}</p> 
  </div>
  <button class="remove-btn">remove</button>
  </div>`));

function showBooks() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const newBook = new Books(title, author);

  if (!title || !author) {
    alert('Please enter a valid title and author');
    return;
  }

  displayBooks.insertAdjacentHTML('afterbegin', 
  `<div class="book-item">
    <div class="book-info">
      <p>${newBook.title}</p> 
      <p> by ${newBook.author}</p>
    </div>
    <button class="remove-btn">remove</button>
  </div>`);
  bookShelf.push(newBook);
  storeAdd(newBook);
}

buttonAdd.addEventListener('click', showBooks);

document.addEventListener('click', (e) => {
  const target = e.target.closest('.remove-btn');
  const title = target.parentElement.firstElementChild.firstElementChild.textContent;
  console.log(title);

  if (target) {
    target.parentElement.remove();
  }

  storeDelete(title);
});
