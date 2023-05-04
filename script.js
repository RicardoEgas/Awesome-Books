/* eslint-disable max-classes-per-file */

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const buttonAdd = document.querySelector('.button-add');
const displayBooks = document.getElementById('books-list');
const bookShelf = [];

// Storage classes
class Store {
  static storeGet() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static storeAdd(newBook) {
    const books = Store.storeGet();
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static storeDelete(title) {
    const books = Store.storeGet();
    const index = books.findIndex((book) => book.title === title);
    if (index !== -1) {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
}

// Interaction Classes

class Interaction {
  static getBooks() {
    const books = Store.storeGet();
    books.forEach((book) => displayBooks.insertAdjacentHTML('afterbegin',
      `<div class="book-item">
  <div class="book-info">
    <p>${book.title}</p> 
    <p> by ${book.author}</p> 
  </div>
  <button class="remove-btn">remove</button>
  </div>`));
  }

  static showBooks() {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const newBook = new Books(title, author);

    if (!title || !author) {
      if (!title || !author) {
        const error = document.querySelector('.add-cont');
        error.insertAdjacentHTML('afterend',
          '<p class="error-message">Please, insert the title and author</p>');
      }
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
    Store.storeAdd(newBook);
  }

  static remove() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.remove-btn');
      const title = target.parentElement.firstElementChild.firstElementChild.textContent;

      if (target) {
        target.parentElement.remove();
      }

      Store.storeDelete(title);
    });
  }
}

// Interaction functions

Interaction.getBooks();

Interaction.showBooks();

buttonAdd.addEventListener('click', Interaction.showBooks);

Interaction.remove();

/* eslint-disable max-classes-per-file */
