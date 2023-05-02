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
books.forEach((book) => displayBooks.insertAdjacentHTML('afterbegin', `<div><p>${book.title}</p> <p>${book.author}</p> <button class="remove-btn">remove</button></div>`));

function showBooks() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const newBook = new Books(title, author);
  bookShelf.push(newBook);
  storeAdd(newBook);

  displayBooks.insertAdjacentHTML('afterbegin', `<div><p>${newBook.title}</p> <p>${newBook.author}</p> <button class="remove-btn">remove</button></div>`);
}

buttonAdd.addEventListener('click', showBooks);

document.addEventListener('click', (e) => {
  const target = e.target.closest('.remove-btn');
  const title = target.previousElementSibling.previousElementSibling.textContent;

  if (target) {
    target.parentElement.remove();
  }

  storeDelete(title);
});
